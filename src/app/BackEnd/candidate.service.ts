import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Candidate } from './candidate';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

private baseURL = "http://localhost:8080/api/v1/candidates";

  constructor(private httpClient: HttpClient) { }


getCandidatesList():Observable<Candidate[]>{
  return this.httpClient.get<Candidate[]>(`${this.baseURL}`);
}

createCandidate(candidate: Candidate): Observable<Object>{
  return this.httpClient.post(`${this.baseURL}`,candidate);
}

// getCandidateById(id: number):Observable<Candidate>{
//   return this.httpClient.get<Candidate>(this.baseURL+'/'+id);
// }


public getCandidates(): Observable<any>{
  return this.httpClient.get<Candidate[]>(`${this.baseURL}`);
      }



  public updateCandidate(candidate){
    return this.httpClient.put(this.baseURL+ '/update-candidate',candidate);
  }

  getCandidateById(id:number):Observable<Candidate>{
    return this.httpClient.get<Candidate>(`${this.baseURL}/${id}`);



  }
}

