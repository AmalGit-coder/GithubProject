import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/authentif/auth.service';
import { RegisterPayload } from 'src/app/authentif/register-payload';
import { RegisterPageComponent } from 'src/app/loginFolder/register-page/register-page';

@Component({
  selector: 'app-partner-page',
  templateUrl: './partner-page.component.html',
  styleUrls: ['./partner-page.component.scss']
})
export class PartnerPageComponent implements OnInit {

  permaLink: number;
  user: RegisterPayload;


  constructor(private router: ActivatedRoute, private authService: AuthService) { }

  ngOnInit(): void {

  //  this.authService.getCurrent()
  //  .subscribe(data => {
  //    console.log(data); //You will get all your user related information in this field
 //   });
  }
    

    // this.router.params.subscribe( params => {
    //  this.permaLink = params['id'];
    // });

    // this.authService.getUserById(this.permaLink).subscribe((data:RegisterPayload) => {
    //   this.user = data;
    // },(err: any) => {
    //   console.log('Failure Response');
    // })
  }



//   username = JSON.parse(localStorage.getItem('currentUser')).email;

// // or if you are using the service method above then in your component do following:

// username = this.myService.getUsername();
  

  




