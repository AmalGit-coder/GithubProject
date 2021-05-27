import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Recruteur } from '../BackEnd/recruteur';
import { RecruteurService } from '../BackEnd/recruteur.service';
import {Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-recruteur',
  templateUrl: './recruteur.component.html' ,
  styleUrls: ['./recruteur.component.scss']
})
export class RecruteurComponent implements OnInit {

 private closeResult : string;
 


recruteurs: Recruteur[];
 
  today: number = Date.now();
  container: any;
  recruteur: Recruteur;
  editForm : FormGroup;
  recruteurId: number;

  results: any;

constructor(private recruteurService: RecruteurService,private http: HttpClient,
     private modalService: NgbModal, private fb: FormBuilder ) { }

  ngOnInit() {
    this.getRecruteurs();   

  }



  ValiderCompte(c: Recruteur){
    this.recruteurService.ValideCompte(c , c.id).subscribe(
      response => {
        console.log(response);
        alert("recruteur avec id"+c.id+" est accepté ")
      },
      error => {
        console.log(error);
      });}











 
  public searchRecruteurs(key1: string):void {

    const results1: Recruteur[] = [];
    for (const recruteur of this.recruteurs){
      if(recruteur.nom.toLowerCase().indexOf(key1.toLocaleLowerCase()) !== -1 
      || recruteur.prenom.toLowerCase().indexOf(key1.toLocaleLowerCase()) !== -1
      ||recruteur.poste.toLowerCase().indexOf(key1.toLocaleLowerCase()) !== -1
      ){
        results1.push(recruteur);
      }
    }
    
    this.recruteurs = results1;
    if(results1.length === 0 || !key1){
      this.getRecruteurs();
      
    }
    
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



// public ValiderRec():void {
//   this.recruteurService.ValiderRec(this.recruteur).subscribe(
//     (response: Recruteur[]) => {
//       this.recruteurs = response;
//     },
//     (error: HttpErrorResponse) => {
//       alert(error.message);
//     }
//   )
// }



  // public ValiderRec(){
  //   this.route.params.subscribe( params => {
  //     this.permaLink1 = params['id'];
  //     console.log(this.permaLink1);
  //    });
 
  //    this.recruteurService.ValiderRec(this.permaLink1).subscribe((data:Recruteur) => {
  //      this.recruteur = data;
  //    },(err: any) => {
  //      console.log('Failure Response');
  //      console.log(this.permaLink1);
  //    })
  // }







 
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
  const url = 'http://localhost:8080/recruteur/add';
  this.http.post(url, f.value)
    .subscribe((result) => {
      this.ngOnInit(); //reload the table
    });
  this.modalService.dismissAll(); //dismiss the modal
}

// Edit

openDetails(targetModal, recruteur: Recruteur) {
  this.modalService.open(targetModal, {
   centered: true,
   backdrop: 'static',
   size: 'small'
 });

 document.getElementById('')


  document.getElementById('cinE').setAttribute('value', recruteur.cin);
  document.getElementById('nomE').setAttribute('value', recruteur.nom);
  document.getElementById('prenomE').setAttribute('value', recruteur.prenom);
  document.getElementById('emailE').setAttribute('value', recruteur.email);
  document.getElementById('telephoneE').setAttribute('value', recruteur.telephone);
  document.getElementById('posteE').setAttribute('value', recruteur.poste);
  document.getElementById('societeE').setAttribute('value', recruteur.societe);
  document.getElementById('recruteurCodeE').setAttribute('value', recruteur.recruteurCode);


}




openEdit(targetModal, recruteur: Recruteur) {
  this.modalService.open(targetModal, {
   centered: true,
   backdrop: 'static',
   size: 'small'
 });

 this.editForm.patchValue( {
  cin: recruteur.cin, 
  nom: recruteur.nom,
  prenom: recruteur.prenom,
  email: recruteur.email,
  telephone: recruteur.telephone,
  poste: recruteur.poste,
  societe: recruteur.societe,
  recruteurCode: recruteur.recruteurCode
});












}



// onSave() {
//   const editURL = 'http://localhost:8080/recruteur/update' + this.editForm.value.id;
//   console.log(this.editForm.value);
//   this.http.put(editURL, this.editForm.value)
//     .subscribe((results) => {
//       this.ngOnInit();
//       this.modalService.dismissAll();
//     });
// }




}
