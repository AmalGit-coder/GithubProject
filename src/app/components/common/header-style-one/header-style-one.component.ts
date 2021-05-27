import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/authentif/auth.service';
import { RegisterPayload } from 'src/app/authentif/register-payload';
import { RegisterPageComponent } from 'src/app/loginFolder/register-page/register-page';

@Component({
  selector: 'app-header-style-one',
  templateUrl: './header-style-one.component.html',
  styleUrls: ['./header-style-one.component.scss']
})
export class HeaderStyleOneComponent implements OnInit {

  //users: Observable<Array<userPayload>>;
  users: Observable<Array<RegisterPageComponent>>;
  currentUser: RegisterPayload;

  private isButtonVisible = true;

  

  constructor(
    public authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private localStorageService: LocalStorageService,
   private formBuilder: FormBuilder
    
    ) {

    this.currentUser= localStorageService.retrieve('user');
 

    

    }


  ngOnInit(): void {
  //  this.getCurrentUser();

  }

  // getCurrentUser(){
  //   this.authService.getCurrentUser().subscribe(data => {
  //     console.log('getting Current user ');
  //   }, error => {

  //     console.log('oups');
  //   });

  // }



  

  toApn(){
    document.getElementById("apn").scrollIntoView({behavior: "smooth", inline: "nearest" , block: 'center'});
  }

  toAction(){
    document.getElementById("action").scrollIntoView({behavior: "smooth", inline: "nearest" , block: 'center'});
  }
  
  toStat(){
    document.getElementById("stat").scrollIntoView({behavior: "smooth", inline: "nearest" , block: 'nearest'});
  }
  
  toTemoi(){
    document.getElementById("temoi").scrollIntoView({behavior: "smooth", inline: "nearest" , block: 'nearest'});
  }
  
  toTeam(){
    document.getElementById("team").scrollIntoView({behavior: "smooth", inline: "nearest" , block: 'center'});
  }
  
  toPartenaire(){
    document.getElementById("partenaire").scrollIntoView({behavior: "smooth", inline: "nearest",block: 'center' });
  }
  
  toContact(){
    document.getElementById("contact").scrollIntoView({behavior: "smooth", inline: "nearest",block: 'center' });
  }
  

  toFormation(){
    document.getElementById("formation").scrollIntoView({behavior: "smooth", inline: "nearest",block: 'center' });
  }

  toWebinaire(){

  document.getElementById("webinaire").scrollIntoView({behavior: "smooth", inline: "nearest", block: 'center'});
  }



  toCalendrier(){
    document.getElementById("calendrier").scrollIntoView({behavior: "smooth", inline: "nearest", block: 'center'});


  }


  logout(){
    this.authService.logout();
  }




}
