import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-votre-component',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [FormsModule, ReactiveFormsModule]
})
export class VotreComponent implements OnInit {
  // signUpForm: FormGroup; // Formulaire d'inscription
  loginForm: FormGroup; // Formulaire de connexion

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    // Initialisation du formulaire d'inscription
    this.signUpForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

    // Initialisation du formulaire de connexion
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // Méthode pour soumettre le formulaire d'inscription
  onRegister() {
    if (this.signUpForm.valid) {
      // Envoyer les données d'inscription
      console.log(this.signUpForm.value);
    } else {
      // Afficher des erreurs ou prendre d'autres mesures
    }
  }

  // Méthode pour soumettre le formulaire de connexion
  onLogin() {
    if (this.loginForm.valid) {
      // Envoyer les données de connexion
      console.log(this.loginForm.value);
    } else {
      // Afficher des erreurs ou prendre d'autres mesures
    }
  }
}
