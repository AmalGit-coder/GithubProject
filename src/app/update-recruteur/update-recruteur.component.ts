import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recruteur } from '../BackEnd/recruteur';
import { RecruteurService } from '../BackEnd/recruteur.service';

@Component({
  selector: 'app-update-recruteur',
  templateUrl: './update-recruteur.component.html',
  styleUrls: ['./update-recruteur.component.scss']
})
export class UpdateRecruteurComponent implements OnInit {

  recruteurs: Recruteur[];
recruteur: Recruteur;
   
  isValid : boolean = true;
  
    constructor(private recruteurService: RecruteurService,private http: HttpClient, private router: Router) { }
  
   ngOnInit() {
     this.getRecruteurs();
   }
  
  
  
   public getRecruteurs():void {
    this.recruteurService.getRecruteurs().subscribe(
      (response: Recruteur[]) => {
        this.recruteurs = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }
  
  updateRecruteur(id: number){
    this.router.navigate([`update-recruteur`, id]);
  }

}