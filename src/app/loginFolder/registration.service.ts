import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Register/user';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) { }
  
public loginUserFromRemote(user : User):Observable<any>{

  return this.http.post<any>("http://localhost:8080/authenticate", user)
}

public registerUserFromRemote(user : User):Observable<any>{
  return this.http.post<any>("http://localhost:8080/register", user);
}



  // public createAuthenticationToken(user :User):Observable<any>{
  //   return this.http.post<any>("localhost:8080/authenticate",user);
  // }
}
