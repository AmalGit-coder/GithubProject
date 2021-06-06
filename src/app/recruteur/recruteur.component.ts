import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Recruteur } from '../BackEnd/recruteur';
import { RecruteurService } from '../BackEnd/recruteur.service';
import {Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgIf } from '@angular/common';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { AuthService } from '../authentif/auth.service';
import { RegisterPayload } from '../authentif/register-payload';
import { User } from '../Register/user';



@Component({
  selector: 'app-recruteur',
  templateUrl: './recruteur.component.html' ,
  styleUrls: ['./recruteur.component.scss']
})
export class RecruteurComponent implements OnInit {

    
    //users: Observable<Array<RegisterPayload>>;
  
    users: RegisterPayload[];
  
    private closeResult : string;
      container: any;
      user: RegisterPayload;
      editForm : FormGroup;
      userId: number;
      results: any;
  
      etat: string;
  
      etatCandidate: string;
  
  
    constructor(public authService : AuthService, private router: Router,private http: HttpClient,
       private modalService: NgbModal, private fb: FormBuilder) {
    }
  
  
  
  
    ngOnInit(): void {
       this.getUsers();
  
  
  
      }
  
  
  
  
      public getUsers():void {
        this.authService.getUsers().subscribe(
          (response: RegisterPayload[]) => {
            this.users = response.filter(
              user => user.role ==='recruteur')
          },
          (error: HttpErrorResponse) => {
            alert(error.message);
          }
        )
      }
  
    
  
  
      // public getUsers():void {
      //   this.authService.getUsers().subscribe(
      //     (response: RegisterPayload[]) => {
      //       this.users = response;
          
  
      //     },
      //     (error: HttpErrorResponse) => {
      //       alert(error.message);
      //     }
      //   )
      // }
  
  
  
  
      ValiderCompte(c: RegisterPayload){
        this.authService.ValideCompte(c , c.id).subscribe(
          response => {
            console.log(response);
            this.authService.CandiMe(c, c.id);
      this.etatCandidate="ok";
  
            alert("candidate avec id"+c.id+" est accepté ")
          },
          error => {
            console.log(error);
            this.etatCandidate="no";
            
  
          });}
  
  
       
  
  
  
      // ValiderCompte(c: RegisterPayload){
      //   this.authService.ValideCompte(c , c.id).subscribe(
      //     response => {{
      //       console.log(response);
      //       alert("candidate avec id"+c.id+" est accepté ")
      //     }
      //     if(c.etat == 'valide'){
      //       this.authService.isCand(c).subscribe(
      //         response => {
      //           console.log(response);
      //         }
      //       )
      //   }
      // },
      //     error => {
      //       console.log(error);
      //     });}
  
  
      public searchCandidates(key1: string):void {
  
        const results1: RegisterPayload[] = [];
        for (const candidate of this.users){
          if(candidate.email.toLowerCase().indexOf(key1.toLocaleLowerCase()) !== -1 
          || candidate.poste.toLowerCase().indexOf(key1.toLocaleLowerCase()) !== -1
          ||candidate.adresse.toLowerCase().indexOf(key1.toLocaleLowerCase()) !== -1
          ||candidate.experience.toLowerCase().indexOf(key1.toLocaleLowerCase()) !== -1
  
          ){
            results1.push(candidate);
          }
        }
        
        this.users = results1;
        if(results1.length === 0 || !key1){
          this.getUsers();
          
        }
        
        }
  
  
  
  
  
  
  
  
   public getUser():void {
     this.authService.getUsers().subscribe(
       (response: RegisterPayload[]) => {
         this.users = response;
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
  
   // Details
  
   openDetails(targetModal, user: RegisterPayload) {
     this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static',
      size: 'small'
    });
  
    document.getElementById('')
  
  
     document.getElementById('cinE').setAttribute('value', user.username);
     document.getElementById('nomE').setAttribute('value', user.email);
  
  
  
  
   }
  
  
  
  
   openEdit(targetModal, user: RegisterPayload) {
     this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static',
      size: 'small'
    });
  
    this.editForm.patchValue( {
     cin: user.username,
     nom: user.email,
  
   });
  
  
  
  
  
  
  
  
  
  
  
  
   }
  

  
  
  
  }
  


