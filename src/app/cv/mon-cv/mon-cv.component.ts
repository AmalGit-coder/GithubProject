import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/authentif/auth.service';
import { RegisterPayload } from 'src/app/authentif/register-payload';
import { User } from 'src/app/Register/user';

@Component({
  selector: 'app-mon-cv',
  templateUrl: './mon-cv.component.html',
  styleUrls: ['./mon-cv.component.scss']
})
export class MonCVComponent implements OnInit {

  candidate: RegisterPayload;
  candidates: RegisterPayload[];
dataArray=[];
dataArray1=[];
cvForm: FormGroup;



ngOnInit(){

  this.dataArray.push(this.candidate);
  this.dataArray1.push(this.candidate);
}


  constructor(private authService: AuthService, private router: Router,){  }



    public getUsers():void {
    this.authService.getUsers().subscribe(
      (response: RegisterPayload[]) => {
        this.candidates = response.filter(
          user => user.role ==='candidate' && user.etat ==='valide')
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }


//   saveCandidate(){
// this.candidateService.createCandidate(this.candidate).subscribe( data =>{
//   console.log(data);
//   this.goToCandidateList();
// },
// error => console.log(error));
//   }


  goToCandidateList(){
this.router.navigate(['/up']);
  }


  onSubmit(){
  console.log(this.candidate);
  console.log(this.dataArray);
 this.getUsers();

  }


  addValue(){
    this.candidate = new RegisterPayload();
    this.dataArray.push(this.candidate);
    this.dataArray1.push(this.candidate);
  
  }
  
  removeValue(index){  

    this.dataArray.splice(index);
    
    }


    addValue1(){
      this.candidate = new RegisterPayload();
      this.dataArray1.push(this.candidate);
    
    }
    
    removeValue1(index){  
  
      this.dataArray.splice(index);
      
      }



    }