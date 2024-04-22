import { Component } from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {Electeur} from "./electeur";
import {ElecteurServiceService} from "./electeur-service.service";

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
  constructor(private formBuilder:FormBuilder,  private electeurService:ElecteurServiceService) {}

  electeursForm= this.formBuilder.group({
    nom:['', Validators.required],
    cni:['', Validators.required],
    num_electeur:['', Validators.required],
    telephone:[''],
    num_bureau:['', Validators.required]
  })



  chercherInformationUser(information:Electeur):boolean{
   let wasUserFound:boolean = false;

    console.log("Test")
    this.electeurService.chercherInformationUser(information).subscribe((data) => {
      if(data.items.length == 0){
        console.log("not found")
        return false;
      }else {

       return true;
      }
    }, error => console.log(error))

    return false;
  }

  onSubmit() {
    let electeur:Electeur;
    electeur = {
      nom:this.electeursForm.value.nom || '',
      cni:this.electeursForm.value.cni || '',
      num_electeur:this.electeursForm.value.num_electeur || '',
      num_bureau:this.electeursForm.value.num_bureau || ''
    }

    console.log(this.chercherInformationUser(electeur));

  }
}
