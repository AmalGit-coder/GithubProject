import { RegisterPageComponent } from "../loginFolder/register-page/register-page";
import { ParcoursUniv } from "./ParcoursUniv";

export class RegisterPayload {
    id: number;
    //nom + prenom
    username: string;
    imageUrl: string;
    email: any;
    created:string;
    telephone:number;
     cursus: ParcoursUniv[];
    role: string;
    password: string;
    confirmPassword: string;
    etat: string;
    poste:string;
    adresse:string;
    experience:string;
    adresseCand:string;

    //anneeUniiCand:String;
    apropos:string;
    files:string;
    certificationCand:string;
    cinCand:string;
    cv:string;
   // dilomeCand:string;
    duree1:string;
    dureeProCand:string;
    emailCand:string;
    lm:string;
    nomCand:string;
    posteProCand:string;
    prenomCand:string;
    sitAmoureuse:string;
    societeProCand:string;
    societeStaCand:string;
    stageCand:string;
    telephoneCand:string;
   // universiteCand:string;
    villeCand:string;
    paysCand:string;
    pays: string;
    postal: number;
    cpassword: string;
    // diplome:string;
    // anneeDiplome:string;
    // universityDiplome:string;
    


}