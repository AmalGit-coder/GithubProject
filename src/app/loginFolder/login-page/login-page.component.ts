import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { repeat } from 'rxjs/operators';
import { User } from 'src/app/Register/user';
import { AuthenticationService } from '../authentication.service';
import { RegistrationService } from '../registration.service';
import { NgForm } from '@angular/forms';
import { Route } from '@angular/compiler/src/core';
// import { AuthentificationService } from 'src/app/service/authentification.service';




@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

user = new User();
msg='';

data: any['propertyName'];
//erreur Property 'xxx' does not exist on type 'User'
//loginUserData: any = {};

constructor(private service:RegistrationService, private router: Router){

}

ngOnInit(){

}


  loginUser(){
this.service.loginUserFromRemote(this.user).subscribe(
  data => {
    console.log("response received");
    this.router.navigate(['/loginsuccess'])

  },
  data => {console.log("exception occured");
 this.msg="Bad Credentials , please enter valid emailId and password";

}

)
  }


  goToRegistration(){
    this.router.navigate(['/register']);
  }










//   username: string;
//   password : string;
//   errorMessage = 'Invalid Credentials';
//   successMessage: string;
//   invalidLogin = false;
//   loginSuccess = false;

//   constructor(
//     private route: ActivatedRoute,
//     private router: Router,
//     private authenticationService: AuthenticationService) {   }

//   ngOnInit() {
//   }

//   handleLogin() {
//     this.authenticationService.authenticationService(this.username, this.password).subscribe((result)=> {
//       this.invalidLogin = false;
//       this.loginSuccess = true;
//       this.successMessage = 'Login Successful.';
//       this.router.navigate(['/hello-world']);
//     }, () => {
//       this.invalidLogin = true;
//       this.loginSuccess = false;
//     });      
//   }
// }















  
// user = new User();
  
// constructor(private service:RegistrationService){}

// ngOnInit(){

// }



// loginUser(){
// this.service.createAuthenticationToken(this.user).subscribe(
//   data => console.log("response received"),
//   error => console.log("exception occcured")
// )
// }


}