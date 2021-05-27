import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { AuthentificationService } from '../service/authentification.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {
constructor(){}

ngOnInit(){}

  // constructor(
  //   private authentocationService: AuthentificationService,
  //   private router: Router) {

  // }

  // ngOnInit() {
  //   this.authentocationService.logOut();
  //   this.router.navigate(['login']);
  // }

}
