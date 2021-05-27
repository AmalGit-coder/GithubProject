import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recruteur } from './recruteur';

@Injectable({
  providedIn: 'root'
})
export class RecruteurService {

  private baseURL = "http://localhost:8080";

  constructor(private http: HttpClient) { }



  public getRecruteurs(): Observable<any>{
  return this.http.get<Recruteur[]>(`${this.baseURL}/recruteur/all`);
      }


  public addRecruteur(recruteur: Recruteur): Observable<Recruteur>{
    return this.http.post<Recruteur>(`{this.baseURL}/recruteur/add`, recruteur);
  }
  
public getRecruteurById(id: number): Observable<Recruteur>{
return this.http.get<Recruteur>(`${this.baseURL}/${id}`);
}


  public updateRecruteur(recruteur: Recruteur): Observable<Recruteur>{
    return this.http.put<Recruteur>(`{this.baseURL}/recruteur/update`, recruteur);
  }

  public deleteRecruteur(recruteurId: number): Observable<void>{
    return this.http.delete<void>(`{this.baseURL}/recruteur/delete/${recruteurId}`);
  }
  

  // ValideCompte(compte: CompteBoncaire , idCb :number):Observable<any>{
  //       return this.http.put<any>(${this.app}compte/valide/${idCb}, compte);
  //     }

      ValideCompte(recruteur: Recruteur , recruteurId :number){
        return this.http.put<Recruteur>(`${this.baseURL}/recruteur/valideCompte/${recruteurId}`, recruteur);
      }




      

  // public ValiderRec(recruteurId: Recruteur): Observable<any>{
  //   return this.http.put<Recruteur>(`{this.baseURL}/recruteur/valideCompte/`+recruteurId,recruteurId);  
  // }

  

    //check connecté ou non

     
  
// public approuverRecruteur(recruteur: Recruteur): Observable<Recruteur>{
//   return this.http.put<Recruteur>(`{this.baseURL}/recruteur/approuver`, recruteur);
// }



}




