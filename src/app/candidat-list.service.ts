import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// Define an interface to represent the response structure


@Injectable({
  providedIn: 'root'
})
export class CandidatListService {
  constructor(private http: HttpClient) { }

  getCandidats(): Observable<any> {
    return this.http.get<any>('https://iacademy2.oracle.com/ords/sn_a419_plsql_s38/api_parrainage/candidats'); // Extract the 'items' array
  }

  // parrainer(candidatId: number): Observable<any> {
  //   return this.http.post<any>('https://iacademy2.oracle.com/ords/sn_a419_plsql_s38/api_parrainage/parrainage', { candidatId });
  // }
}
