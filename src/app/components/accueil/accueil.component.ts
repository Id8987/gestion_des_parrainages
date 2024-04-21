import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css'
})
export class AccueilComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }


  //Sidebar toggle show hide function
  status = false;
  addToggle() {
    this.status = !this.status;
  }

}
