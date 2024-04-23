import { Component } from '@angular/core';
// import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {Electeur} from "./electeur";
import {ElecteurServiceService} from "./electeur-service.service";
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-electeurs',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './electeurs.component.html',
  styleUrl: './electeurs.component.css'
})
export class ElecteursComponent {
  informationsValides: any;
  constructor(private formBuilder:FormBuilder,  private electeurService:ElecteurServiceService) {}
  
  electeursForm= this.formBuilder.group({
    nom:['', Validators.required],
    cni:['', Validators.required],
    num_electeur:['', Validators.required],
    telephone:[''],
    email:[''],
    num_bureau:['', Validators.required]
  })



  chercherInformationUser(information: Electeur): void {
    console.log("Test");
  
  
    this.electeurService.chercherInformationUser(information).subscribe((data) => {
      if (data.items.length === 0) {
        console.log("User not found");
        
      } else {
        console.log("User found");
  
      }
    }, error => {
      console.log("Error occurred:", error);
      
    });
  
   
  }
  

  onSubmit() {
    let electeur:Electeur;
    electeur = {
      nom:this.electeursForm.value.nom || '',
      cni:this.electeursForm.value.cni || '',
      num_electeur:this.electeursForm.value.num_electeur || '',
      telephone:'',
      email:'',
      num_bureau:this.electeursForm.value.num_bureau || ''
    }

    console.log(this.chercherInformationUser(electeur));

    this.electeurService.chercherInformationUser(electeur).subscribe((valide) => {
      this.informationsValides = valide;
      if (valide.items.length === 0){
        this.informationsValides=false;
      }
      else
      {
         this.informationsValides=true;
      }
      
    });

  }
 
}


