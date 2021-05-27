import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Candidate } from '../BackEnd/candidate';
import { CandidateService } from '../BackEnd/candidate.service';


import {Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-candidate-affich',
  templateUrl: './candidate-affich.component.html',
  styleUrls: ['./candidate-affich.component.scss']
})
export class CandidateAffichComponent implements OnInit {

  candidates: Candidate[];

  candidate: Candidate;

  count: 0;
  

  

  constructor(private http: HttpClient, private candidateService: CandidateService,
     private router: Router) { }

 ngOnInit() {
   this.getCandidates();
   console.log(this.getCandidates());
 }



 private getCandidates(){
  this.candidateService.getCandidatesList().subscribe( data => {
    this.candidates = data ;
  });
  }
  

 
public searchCandidates(key: string):void {

const results: Candidate[] = [];
for (const candidate of this.candidates){
  if(candidate.nom.toLowerCase().indexOf(key.toLocaleLowerCase()) !== -1 
  || candidate.prenom.toLowerCase().indexOf(key.toLocaleLowerCase()) !== -1
  ||candidate.poste.toLowerCase().indexOf(key.toLocaleLowerCase()) !== -1
  ){
    results.push(candidate);
  }
}

this.candidates = results;
if(results.length === 0 || !key){
  this.getCandidates();
}

}


AllActualities(): void {

  this.candidateService.getCandidates()
  .subscribe(
    response => {
      const { content , totalElements  } = response;
      this.candidate = response.content;
      this.count = totalElements;
      console.log(response);
    },
    error => {
      console.log(error);
    });
  

  }





}
