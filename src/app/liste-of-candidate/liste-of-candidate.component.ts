import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../authentif/auth.service';
import { RegisterPayload } from '../authentif/register-payload';
import { User } from '../Register/user';

@Component({
  selector: 'app-liste-of-candidate',
  templateUrl: './liste-of-candidate.component.html',
  styleUrls: ['./liste-of-candidate.component.scss']
})
export class ListeOfCandidateComponent implements OnInit {

  users: RegisterPayload[];

  user: RegisterPayload;

  count: 0;  

  filter = { tunis: true, sousse: true, sfax: true };
  filteredProducts: RegisterPayload[] = [];

  
  filterChange() {
    this.filteredProducts = this.users.filter(x => 
       (x.adresse === 'sfax' )
       || (x.adresse === 'tunis')
       || (x.adresse === 'sousse')
    );
  }


  

  constructor(private http: HttpClient, private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    this.getUsers();
  }

  public getUsers():void {
    this.authService.getUsers().subscribe(
      (response: RegisterPayload[]) => {
        this.users = response.filter(
          user => user.role ==='candidate' && user.etat ==='valide')
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }





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

   
    AllActualities(): void {

      this.authService.getUsers()
      .subscribe(
        response => {
          const { content , totalElements  } = response;
          this.user = response.content;
          this.count = totalElements;
          console.log(response);
        },
        error => {
          console.log(error);
        });
          }
      public isValid(){
      if(this.isValid){
        return true;
      } else {
        this.router.navigateByUrl('/up');
  
      }
      }


      // filter by checkbox aside


    
  




}
