import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Candidate } from 'src/app/BackEnd/candidate';
import { CandidateService } from 'src/app/BackEnd/candidate.service';
import { Recruteur } from 'src/app/BackEnd/recruteur';
import { RecruteurService } from 'src/app/BackEnd/recruteur.service';



@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {

   recruteurs: Recruteur[];

   
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




// public getCandidates():void{
// this.candidate1Service.getCandidates().subscribe(
// (response: Candidate[]) => {
//   this.candidates = response;
// },
//   (error: HttpErrorResponse) => {
//   alert (error.message);
//  }

// )

// }







//   public candidates1: Candidate1[];

//   constructor(private candidate1Service: Candidate1Service) { }


  
//   ngOnInit() {
//   this.getCandidates();
//   }




// public onOpenModal(candidate1: Candidate1, mode: string): void{

// const container = document.getElementById('main-container');

//   const button = document.createElement('button');
//   button.type = 'button';
//   button.style.display = 'none';
//   button.setAttribute('data-toggle', 'modal');

//   if (mode === 'add'){
//     button.setAttribute('data-target', '#addCandidate1Modal');
//   }

//   if (mode === 'edit'){
//     button.setAttribute('data-target', '#updateCandidate1Modal');
//   }


//   if (mode === 'delete'){
//     button.setAttribute('data-target', '#deleteCandidate1Modal');
//   }

//   container.appendChild(button);
//   button.click();


// }




// }
}
