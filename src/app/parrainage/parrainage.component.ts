import { Component, OnInit } from '@angular/core';
import { CandidatListService } from '../candidat-list.service';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-parrainage',
  standalone: true,
  imports: [CommonModule], // Import CommonModule here
  templateUrl: './parrainage.component.html',
  styleUrls: ['./parrainage.component.css']
})
export class ParrainageComponent implements OnInit {
  candidats: any[] = [];
  myNum = 1;
  parrainageSuccess = false;

  constructor(private candidatService: CandidatListService, private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchCandidats();
  }

  fetchCandidats(): void {
    this.candidatService.getCandidats().subscribe((candidats) => {
      this.candidats = candidats.items;
      console.log(candidats)
    });
  }

  parrainer(idCandidat: number) {
    // Créer un objet JSON contenant les données à envoyer
    const data = {
      idcandidat: idCandidat,
      idElecteur: this.myNum,
      date_parrainage: new Date().toISOString() // Obtenez la date actuelle au format ISO string
    };
    this.myNum++;
    console.log(data);
    // Envoyer la requête POST avec les données dans le corps
    return this.http.post<any>('https://iacademy2.oracle.com/ords/sn_a419_plsql_s57/api_parrainage/parrainages/', data)
    .subscribe(() => {
      this.parrainageSuccess = true; // Définir parrainageSuccess sur true lorsque le parrainage est réussi
      setTimeout(() => {
        this.parrainageSuccess = false; // Effacer le message de succès après quelques secondes
      }, 9000); // 9000 millisecondes (3 secondes)
    });
  }
}