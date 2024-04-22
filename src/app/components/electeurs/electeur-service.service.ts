import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Electeur} from "./electeur";

@Injectable({
  providedIn: 'root'
})
export class ElecteurServiceService {

  constructor(private http:HttpClient) {}
  url:string = 'https://iacademy2.oracle.com/ords/sn_a419_plsql_s57/api_parrainage/verifier_information/';
  chercherInformationUser(information:Electeur):Observable<any>{
    return this.http.get<any>(this.url, {
      params:{
        cni: information.cni,
        nom: information.nom,
        num_bureau: information.num_bureau,
        num_electeur: information.num_electeur
      }
    })
  }


}
