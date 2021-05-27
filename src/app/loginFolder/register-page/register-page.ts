import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {NgForm} from '@angular/forms';
import { User } from 'src/app/Register/user';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-register-page',
  templateUrl: 
  './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  constructor(){

  }

  ngOnInit(){
   
    
  }
  }

// user = new User();
// msg='';
//  registerUserData: any = {};



// constructor(private service: RegistrationService, private router:Router){

// }


// ngOnInit(){}

// registerUser(){
//   this.service.registerUserFromRemote(this.user).subscribe(
//     data => {
//       console.log("response received");
// this.router.navigate(['/login'])
//     },
//     error => {
//       console.log("exception occured");
//     this.msg= error.error;
//     }
//   )
// }
// upthere









//  candidate: Candidate = new Candidate();


//   constructor(private candidateService: CandidateService,
//     private router: Router){  }

//   ngOnInit(){  }


//   saveCandidate(){
// this.candidateService.createCandidate(this.candidate).subscribe( data =>{
//   console.log(data);
//   this.goToCandidateList();
// },
// error => console.log(error));
//   }


//   goToCandidateList(){
// this.router.navigate(['/edit-account']);
//   }


//   onSubmit(){
//   console.log(this.candidate);
//   this.saveCandidate();

//   }

