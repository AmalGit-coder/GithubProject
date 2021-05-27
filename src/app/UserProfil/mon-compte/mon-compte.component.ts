import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/authentif/auth.service';
import { RegisterPayload } from 'src/app/authentif/register-payload';
import { Recruteur } from 'src/app/BackEnd/recruteur';
import { RecruteurService } from 'src/app/BackEnd/recruteur.service';

@Component({
  selector: 'app-mon-compte',
  templateUrl: './mon-compte.component.html',
  styleUrls: ['./mon-compte.component.scss']
})
export class MonCompteComponent implements OnInit {


  recruteurs: Recruteur[];

  recruteur: Recruteur;
  recruteurId: number;


  users: RegisterPayload[];
    
  private closeResult : string;
    container: any;
    user: RegisterPayload;
    editForm : FormGroup;


    constructor(public authService : AuthService, private router: Router,private http: HttpClient,
      private modalService: NgbModal, private fb: FormBuilder) { 
   }
 
 
 
 
   ngOnInit(): void {
      this.getUsers1();
     }
 
 
 
     public getUsers1():void {
       this.authService.getUsers().subscribe(
         (response: RegisterPayload[]) => {
           this.users = response;
         },
         (error: HttpErrorResponse) => {
           alert(error.message);
         }
       )
     }




 
// public getRecruteurs():void {
//   this.recruteurService.getRecruteurs().subscribe(
//     (response: Recruteur[]) => {
//       this.recruteurs = response;
//     },
//     (error: HttpErrorResponse) => {
//       alert(error.message);
//     }
//   )
// }



}
