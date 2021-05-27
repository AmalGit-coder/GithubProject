import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss']
})
export class CheckoutPageComponent implements OnInit {

constructor(){}

ngOnInit(){}

}

//   candidates: Candidate[];
//   constructor(private candidateService: CandidateService, 
//     private router : Router) { }

//   ngOnInit(): void {
//       this.getCandidates();
//   }

//   private getCandidates(){
//     this.candidateService.getCandidatesList().subscribe(data => {
//       this.candidates= data;
//     })
//   }

//   updateCandidate(id: number){
//     this.router.navigate(['courses-list', id]);

//   }
  

//   deleteCandidate(id: number){
// this.candidateService.deleteCandidate(id).subscribe( data =>{
//   console.log(data);
//   this.getCandidates();
// })
//   }
// }
