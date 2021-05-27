import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { AuthService } from '../authentif/auth.service';
import { RegisterPayload } from '../authentif/register-payload';
import {enableProdMode} from '@angular/core';



@Component({
  selector: 'app-deposer-cv',
  templateUrl: './deposer-cv.component.html',
  styleUrls: ['./deposer-cv.component.scss']
})
export class DeposerCvComponent implements OnInit {


  currentUser: RegisterPayload;
  myGroup: FormGroup;
  id: number;
  message = '';
  dataArray=[];
formPass: FormGroup;
  updateForm: FormGroup;
  details: RegisterPayload;
  fieldTextType: boolean;

    
  
    constructor(
      public authService: AuthService,
      private route: ActivatedRoute,
      private router: Router,
      private localStorageService: LocalStorageService,
     private formBuilder: FormBuilder
      
      ) {
  
      this.currentUser= localStorageService.retrieve('user');
      this.formPass= new FormGroup({
        cpassword: new FormControl(['']),
        ccpassword: new FormControl(['']),
      });
  
      

      }
  
      ngOnInit() {
      }

      initRegForm() {
        this.formPass = this.formBuilder.group({
          password: ["", Validators.required],
          cpassword: ["", Validators.required],
          ccpassword: ["", Validators.required]

        });
      }
  

      onSubmit(){
        this.authService.updateUser(this.currentUser.id, this.currentUser).subscribe(

            data => {
              console.log(data);
            },
            error => {
              console.log(error);
            });
          }

          onSubmit1(){
            this.authService.updateUser(this.currentUser.id, this.currentUser).subscribe(
    
                data => {
                  console.log(data);
                },
                error => {
                  console.log(error);
                });
              }
       

      
      getUsers(): void {
        this.authService.getUsers()
          .subscribe(
            data => {
              this.currentUser = data;
              console.log(data);
            },
            error => {
              console.log(error);
            });
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
    
  

    
  
    updateUserDetails(): void {
      this.authService.updateUser(this.currentUser.id, this.currentUser)
        .subscribe(
          response => {
            console.log(response);
          },
          error => {
            console.log(error);
          });
    }
  
  



toggleFieldTextType() {
  this.fieldTextType = !this.fieldTextType;
}


  MustMatch(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
          // return if another validator has already found an error on the matchingControl
          return;
      }

      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
          matchingControl.setErrors({ mustMatch: true });
      } else {
          matchingControl.setErrors(null);
      }
  }
}


    }
  
  