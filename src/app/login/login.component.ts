import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgModel } from '@angular/forms';
import { BuscaCepService } from './services/busca-cep.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  showTermsModal = false;
  showRecuperatePassword = false;
  isButtonLoginDisabled: boolean = true;
  isButtonCadastroDisabled: boolean = false;
  showLoginForm: boolean = true;
  showCadastroForm: boolean = false;

  disableButton(buttonNumber: number) {
    console.log(`Button ${buttonNumber} clicked`);
    if (buttonNumber === 1) {
      this.isButtonLoginDisabled = true;
      this.isButtonCadastroDisabled = false;
      this.showLoginForm = true;
      this.showCadastroForm = false;
    } else if (buttonNumber === 2) {
      this.isButtonLoginDisabled = false;
      this.isButtonCadastroDisabled = true;
      this.showLoginForm = false;
      this.showCadastroForm = true;
    }
  }

  constructor(private router: Router, private location: Location) {}

  openPopup() {
    // Navega para a rota dos termos e condições
    this.router.navigate(['/termos-e-condicoes']);
  }

  
  fecharModal() {
    this.showTermsModal = false;
    this.location.back(); // Volta para a página anterior
  }
}
