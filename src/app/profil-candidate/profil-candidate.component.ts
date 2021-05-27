import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { throwError } from 'rxjs';
import { AuthService } from '../authentif/auth.service';
import { RegisterPayload } from '../authentif/register-payload';
import { Candidate } from '../BackEnd/candidate';
import { CandidateService } from '../BackEnd/candidate.service';

@Component({
  selector: 'app-profil-candidate',
  templateUrl: './profil-candidate.component.html',
  styleUrls: ['./profil-candidate.component.scss']
})
export class ProfilCandidateComponent implements OnInit {

userId: number ;
user:RegisterPayload;


  constructor(private router: ActivatedRoute, private authService: AuthService, 
    private route:Router, private localStorageService: LocalStorageService) { 


    this.userId = this.router.snapshot.params.id;
    this.authService.getUserById(this.userId).subscribe( data => {
      this.user = data;
   console.log(data);
      
    }, error => {
      throwError(error);
      console.log('Failure Response');

    });

}



  ngOnInit(): void {
  }
































}







  // user: RegisterPayload;
  // users: RegisterPayload[];
  // permaLink: number;
  // currentUser: RegisterPayload;
  // myGroup: FormGroup;
  // id: number;
  // message = '';
  // dataArray=[];
  // constructor(private http: HttpClient, private authService: AuthService,
  //    private route: Router,private router: ActivatedRoute,
  //    private localStorageService: LocalStorageService) { 

  //     this.currentUser= localStorageService.retrieve('user');
  //       this.myGroup = new FormGroup({
  //           nomCand: new FormControl()
    
  //        });
        
  //       }
       
  //    ngOnInit() {
   

  //    }

  //    onSubmit(){
  //      this.currentUser.username = this.currentUser.username;
  //      console.log(this.currentUser.username);
  //    }


  //   }

 






























































































// public searchCandidates(key: string):void {

// const results: Candidate[] = [];
// for (const candidate of this.candidates){
//   if(candidate.nom.toLowerCase().indexOf(key.toLocaleLowerCase()) !== -1 
//   || candidate.prenom.toLowerCase().indexOf(key.toLocaleLowerCase()) !== -1
//   ||candidate.poste.toLowerCase().indexOf(key.toLocaleLowerCase()) !== -1
//   ){
//     results.push(candidate);
//   }
// }

// this.candidates = results;
// if(results.length === 0 || !key){
//   this.getCandidates();
// }

// }}

