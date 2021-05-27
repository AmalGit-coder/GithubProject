import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthService } from 'src/app/authentif/auth.service';
import { ParcoursUniv } from 'src/app/authentif/ParcoursUniv';
import { RegisterPayload } from 'src/app/authentif/register-payload';
import { Candidate } from 'src/app/BackEnd/candidate';
import { CandidateService } from 'src/app/BackEnd/candidate.service';




@Component({
  selector: 'app-edit-account-page',
  templateUrl: './edit-account-page.component.html',
  styleUrls: ['./edit-account-page.component.scss']
})
export class EditAccountPageComponent implements OnInit {


currentUser: RegisterPayload;
myGroup: FormGroup;
id: number;
message = '';



candidate=new RegisterPayload();
dataArray=[];
parcoursUniv: ParcoursUniv[];

displayColumns: string[]= ["diplome", "anneeObtention", "universite"];
cForm: FormGroup;








  constructor(
    public authService: AuthService,
    private router: Router,

    private route: ActivatedRoute,
    private localStorageService: LocalStorageService   
    ) {

    this.currentUser= localStorageService.retrieve('user');
    this.myGroup = new FormGroup({
        nomCand: new FormControl()

     });
    // this.i = Array(5).fill().map((x,i)=>i); // [0,1,2,3,4]

    }

 
ngOnInit(){

this.authService.getParcours();

}


    onSubmit() {
  this.currentUser.cinCand = this.currentUser.cinCand;
  this.currentUser.cinCand = this.currentUser.nomCand;

  console.log(this.currentUser.cinCand);
  console.log(this.currentUser.nomCand);



    }






  getUser(id: number): void {
    this.authService.getUserById(id)
      .subscribe(
        data => {
          this.currentUser = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  



  updateTutorial(): void {
    this.authService.update(this.currentUser.id, this.currentUser)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message;
        },
        error => {
          console.log(error);
        });
  }








    addValue(){
    this.currentUser = new RegisterPayload();
    this.dataArray.push(this.currentUser);

    
  }
  
  removeValue(index){  

    this.dataArray.splice(index);
    
    }




     

   
   


    
  
  
  }