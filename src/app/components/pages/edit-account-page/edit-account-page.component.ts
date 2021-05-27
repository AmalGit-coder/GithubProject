import { NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { AuthService } from 'src/app/authentif/auth.service';
import { ParcoursUniv } from 'src/app/authentif/ParcoursUniv';
import { RegisterPayload } from 'src/app/authentif/register-payload';
import { Candidate } from 'src/app/BackEnd/candidate';
import { CandidateService } from 'src/app/BackEnd/candidate.service';
import { RegisterPageComponent } from 'src/app/loginFolder/register-page/register-page';




@Component({
  selector: 'app-edit-account-page',
  templateUrl: './edit-account-page.component.html',
  styleUrls: ['./edit-account-page.component.scss']
})
export class EditAccountPageComponent implements OnInit {





  // currentUser: RegisterPayload;
  // myGroup: FormGroup;
  
  
  //   constructor(
  //     public authService: AuthService,
  //     private route: ActivatedRoute,
  //     private router: Router,
  //     private localStorageService: LocalStorageService
      
  //     ) {
  
  //     this.currentUser= localStorageService.retrieve('user');
  //     this.myGroup = new FormGroup({
  //         nomCand: new FormControl()
  
  //      });
      
  //     }
  
  //     ngOnInit() {
  
  
        
  //     }
  
  
  //     onSubmit() {
  //   this.currentUser.cinCand = this.currentUser.cinCand;
  //   this.currentUser.cinCand = this.currentUser.nomCand;
  
  //   console.log(this.currentUser.cinCand);
  
  //     }
  
  
  
  
   
      
  
  









  candidate=new RegisterPayload();
dataArray: ParcoursUniv[] = [];
parcoursIndex= [0];
dataArray1=[];
diplomes: string[]= [];
universityDiplomes: string[]= [];
anneeDiplomes: string[]= [];
currentUser: RegisterPayload;

registerPayload: RegisterPayload;

ngOnInit(){

 // this.dataArray.push(this.candidate);
 this.dataArray1.push(this.currentUser);
// console.log(this.currentUser);
// console.log(this.currentUser.cursus)
}


  constructor(private authService: AuthService, private router: Router,
    private route: ActivatedRoute, private localStorageService: LocalStorageService) {

    this.currentUser= localStorageService.retrieve('user');
    }


// saveCursus(cursus: ParcoursUniv){
//   this.authService.addCursus(cursus, this.currentUser.id).subscribe( data =>{
//     this.authService.getCursusByUser(this.currentUser.id);
//  // console.log(data);
//  this.goToCandidateList();
    
//   },
//   error => console.log(error));
// }


  saveCandidate(){
    console.log(this.currentUser);
this.authService.update(this.currentUser.id, this.currentUser).subscribe( data =>{
 //this.authService.getCursusByUser(this.currentUser.id);
console.log(data);
this.goToCandidateList();
},
error => console.log(error));
  }


  goToCandidateList(){
this.router.navigate(['/deposer-cv']);
  }


  onSubmit(){
  //  console.log(this.diplomes);
this.diplomes.forEach(aaa => {
 var index= this.diplomes.indexOf(aaa);
  this.currentUser.cursus.push(new ParcoursUniv(aaa, this.universityDiplomes[index], this.anneeDiplomes[index]));

  //console.log(this.authService.getCursusByUser(this.currentUser.id));
});

//console.log(typeof(this.dataArray));
//this.currentUser.cursus= this.dataArray;
  console.log(this.currentUser.cursus);
 this.saveCandidate();


  }


  addValue(){
    this.parcoursIndex.push(this.parcoursIndex.length);
 // this.dataArray.push(new ParcoursUniv(diplome , universityDiplome, anneeDiplome));

    //this.dataArray1.push(obj);
  
  }
  
  removeValue(){  
    this.parcoursIndex.pop();
    }


    addValue1(){
      this.candidate = new RegisterPayload();
      this.dataArray1.push(this.candidate);
      
    
    }
    
    removeValue1(index){  
  
      this.dataArray.splice(index);
      
      }










}

function TypeOf(dataArray: ParcoursUniv[]): any {
  throw new Error('Function not implemented.');
}
