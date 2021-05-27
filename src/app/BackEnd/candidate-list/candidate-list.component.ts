import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Candidate } from '../candidate';
import { CandidateService } from '../candidate.service';

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.scss']
})
export class CandidateListComponent implements OnInit {



  private closeResult : string;

candidates: Candidate[];
  today: number = Date.now();
  container: any;
  candidate: Candidate;
  editForm : FormGroup;
  etat: string;

 isValid : boolean = true;


  constructor(private candidateService: CandidateService, private router: Router, 
    private http: HttpClient,
    private modalService: NgbModal, private fb: FormBuilder) { }


  ngOnInit(): void {
this.getCandidates();
  }


private getCandidates(){
  this.candidateService.getCandidatesList().subscribe( data => {
    this.candidates = data ;
  });
}

updateCandidate(id: number){
  this.router.navigate(['update-candidate', id]);

}

/**** */

 
  public searchRecruteurs(key1: string):void {

    const results1: Candidate[] = [];
    for (const candidate of this.candidates){
      if(candidate.nom.toLowerCase().indexOf(key1.toLocaleLowerCase()) !== -1 
      || candidate.prenom.toLowerCase().indexOf(key1.toLocaleLowerCase()) !== -1
      ||candidate.poste.toLowerCase().indexOf(key1.toLocaleLowerCase()) !== -1
      ){
        results1.push(candidate);
      }
    }
    
    this.candidates = results1;
    if(results1.length === 0 || !key1){
      this.getCandidates();
      
    }
    
    }

    
    

public getRecruteurs():void {
  this.candidateService.getCandidates().subscribe(
    (response: Candidate[]) => {
      this.candidates = response;
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  )
}









 
open(content) {
  this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });
}
 







private getDismissReason(reason: any): string {
  if (reason === ModalDismissReasons.ESC) {
    return 'by pressing ESC';
  } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    return 'by clicking on a backdrop';
  } else {
    return `with: ${reason}`;
  }
}


onSubmit(f: NgForm) {
  const url = 'http://localhost:8080/api/v1/candidates/add';
  this.http.post(url, f.value)
    .subscribe((result) => {
      this.ngOnInit(); //reload the table
    });
  this.modalService.dismissAll(); //dismiss the modal
}

// Edit

openDetails(targetModal, candidate: Candidate) {
  this.modalService.open(targetModal, {
   centered: true,
   backdrop: 'static',
   size: 'small'
 });
  document.getElementById('cinE').setAttribute('value', candidate.cin);
  document.getElementById('nomE').setAttribute('value', candidate.nom);
  document.getElementById('prenomE').setAttribute('value', candidate.prenom);
  document.getElementById('emailE').setAttribute('value', candidate.emailId);
  document.getElementById('telephoneE').setAttribute('value', candidate.telephone);
  document.getElementById('posteE').setAttribute('value', candidate.poste);
  document.getElementById('societeE').setAttribute('value', candidate.societe);
  // document.getElementById('recruteurCodeE').setAttribute('value', candidate.candidateCode);


}




openEdit(targetModal, candidate: Candidate) {
  this.modalService.open(targetModal, {
   centered: true,
   backdrop: 'static',
   size: 'small'
 });

 this.editForm.patchValue( {
  cin: candidate.cin, 
  nom: candidate.nom,
  prenom: candidate.prenom,
  email: candidate.emailId,
  telephone: candidate.telephone,
  poste: candidate.poste,
  societe: candidate.societe,
  // recruteurCode: candidate.recruteurCode
});


}


}
