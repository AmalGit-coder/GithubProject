import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, concat, Observable } from 'rxjs';
import { JwtAutResponse } from './jwt-aut-response';
import { LoginPayload } from './login-payload';
import { RegisterPayload } from './register-payload';
import {map} from 'rxjs/operators'
import {LocalStorageService} from 'ngx-webstorage';
import { environment } from 'src/environments/environment';
import { ParcoursUniv } from './ParcoursUniv';





@Injectable({
  providedIn: 'root'
})
export class AuthService {

 //error named
  private url ="http://localhost:8080/api/auth/"; 
private urlDip="http://localhost:8080/api/v2/";
  //private url ="http://127.0.0.1:8080/api/auth/";

  private userSubject: BehaviorSubject<RegisterPayload>;
  public user: Observable<RegisterPayload>


  constructor(private httpClient: HttpClient, private localStorageService: LocalStorageService) {

    this.userSubject = new BehaviorSubject<RegisterPayload>(JSON.parse(localStorage.getItem('user')));
    this.user = this.userSubject.asObservable();

   }

   public getuserValue(): RegisterPayload {
    return this.userSubject.value;
}



  register(registerPayload: RegisterPayload): Observable<any> {
    return this.httpClient.post(this.url + 'signup', registerPayload);
  }


  login(loginPayload: LoginPayload) :Observable<boolean>{
  return  this.httpClient.post<JwtAutResponse>(this.url + 'login', loginPayload).pipe(map( data => {
    this.localStorageService.store('authenticationToken', data.authenticationToken);
    this.localStorageService.store('user', data.user);
    console.log(data.user);   
        return true;
    }));
  }

  //check connecté ou non
  isAuthenticated() : Boolean{
 return this.localStorageService.retrieve('user') != null;
}


logout() {
  this.localStorageService.clear('authenticationToken');
  this.localStorageService.clear('user');
}


public getUsers(): Observable<any>{
  return this.httpClient.get<RegisterPayload[]>(`${this.url}users`);
      }


public getUserById(id: number): Observable<RegisterPayload>{
  return this.httpClient.get<RegisterPayload>(`${this.url}users/${id}`);
  }


  ValideCompte(user: RegisterPayload , id :number){
    return this.httpClient.put<RegisterPayload>(`${this.url}valideCompte/${id}`, user);
  }

  CandiMe(user: RegisterPayload, id:Number){
    return this.httpClient.post<RegisterPayload>(`${this.url}can/${id}`, user);

  }

  update(id: number, data: RegisterPayload): Observable<any> {
    return this.httpClient.put(`${this.url}updateUser/${id}`, data);

  // return this.httpClient.put(`${this.url}updateUser/${id}`, {data}, {responseType: 'text'});
}

updateUser(id: number, details:RegisterPayload): Observable<Object>{
  return this.httpClient.put(`${this.url}updateUserOriginal/${id}`, details);
}


  // **************************** PARCOURS *********************

//   getCursusByUser(id: number): Observable<ParcoursUniv>{
//     return this.httpClient.get<ParcoursUniv>(`${this.urlDip}users/${id}/cursus`);
  
// } 
  
//   addCursus(cursus: ParcoursUniv, userId: number): Observable<any>{
//     return this.httpClient.post(`${this.urlDip}users/${userId}/cursus`, cursus);
//   }

//   updateCursus(id: number, cursusId: number, details:RegisterPayload){
//     return this.httpClient.put<ParcoursUniv>(`${this.urlDip}users/${id}/cursus/${cursusId}`,details);
//   }

//   deleteCursus(id: number, cursusId: number){
//     return this.httpClient.delete<ParcoursUniv>(`${this.urlDip}users/${id}/cursus/${cursusId}`);
//   }
  






  


  
















// isCand(user: RegisterPayload): Observable<any> {
//   return this.httpClient.get(this.url + 'candidateNew');
// }


// updateUser(registerPayload: RegisterPayload): Observable<any> {
//   return this.httpClient.post(this.url + 'saveUser', registerPayload);
// }


// updateUser(id :number , user: RegisterPayload ): Observable<any> {
//   return this.httpClient.put(`${this.url}updateUser/${id}`, user);
// }

// currentUserName(): Observable<any>{
//   return this.httpClient.get(this.url+'currentUser');
// }








// UpdateUser(registerPayload: RegisterPayload){
//   return this.httpClient.put(this.url + 'updateUser', registerPayload);
// }



//   //get username of the current user
//   getIdCur() {
//     return JSON.parse(localStorage.getItem('currentUser')).id;
// }








// getCurrent(){
//  return JSON.parse(localStorage.getItem('authenticationToken'));

// }


// getUser1() {
//   //if (this.id != null) {
//   let id = JSON.parse(localStorage.getItem('currentUser')).id;
//   return this.httpClient.get<any>(
//     (`${environment.apiBaseUrl}/api/auth/user/${id}`));
//   //}
// }



///////////////////////////////////////////////////////////////////


// getCurrentUserNow() {
//   return this.httpClient.get<LoginPayload>('http://localhost:8080/api/auth/current');
//   }


  
// get(id): Observable<any> {
//   return this.httpClient.get(`${this.url}user/${id}`);
// }








}
