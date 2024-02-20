import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, NgxMaskDirective, NgxMaskPipe],
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
  name: string = '';
  cpf: string = '';
  password: string = '';
  email: string = '';
  fone: string = '';
  repeatPassword: string = '';
  cpfIsEmpty: boolean = false;
  passwordIsEmpty: boolean = false;
  emailIsEmpty: boolean = false;
  nameIsEmpty: boolean = false;
  foneIsEmpty: boolean = false;
  repeatPasswordIsEmpty: boolean = false;
  aceitouTermos: boolean = false;

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

  constructor(private router: Router, private location: Location) { }

  openPopup() {
    // Navega para a rota dos termos e condições
    this.router.navigate(['/termos-e-condicoes']);
  }
  verificarCamposLogin(): void {
    this.cpfIsEmpty = this.cpf.trim() === '';
    this.passwordIsEmpty = this.password.trim() === '';
  }

  verificaCamposRecuperarSenha(): void {
    this.cpfIsEmpty = this.cpf.trim() === '';
    this.emailIsEmpty = this.email.trim() === '';
  }

  verificarCamposCadastro(): void {
    this.cpfIsEmpty = this.cpf.trim() === '';
    this.passwordIsEmpty = this.password.trim() === '';
    this.emailIsEmpty = this.email.trim() === '';
    this.nameIsEmpty = this.name.trim() === '';
    this.repeatPasswordIsEmpty = this.repeatPassword.trim() === '';
  }

  ClearInputs(): void {
    this.name = '';
    this.cpf = '';
    this.password = '';
    this.fone = '';
    this.email = '';
    this.repeatPassword = '';
    this.aceitouTermos = false;
    this.cpfIsEmpty = false;
    this.passwordIsEmpty = false;
    this.emailIsEmpty = false;
    this.nameIsEmpty = false;
    this.foneIsEmpty = false;
    this.repeatPasswordIsEmpty = false;
    this.aceitouTermos = false;
  }

  verificarSenha(): void {
    if (this.cpf.trim() !== '' && this.password.trim() !== '') {
      if (this.password === '123') {
        this.ClearInputs();
        alert('Login efetuado com sucesso!');
      } else {
        alert('Usuário ou senha inválidos.');
      }
    } else {
      alert('Por favor, preencha os campos CPF e senha.');
    }
  }

  cadastrar(): void {
    if (this.cpf.trim() !== '' && this.password.trim() !== '' && this.fone.trim() !== '' &&
      this.email.trim() !== '' && this.password.trim() !== '' && this.repeatPassword.trim() !== '') {
      if (this.aceitouTermos) {

        this.ClearInputs();

        alert('Cadastro realizado com sucesso!');
      } else {
        alert('Você deve concordar com os termos para prosseguir com o cadastro.');
      }
    } else {
      alert('Por favor, preencha os campos obrigatórios.')
    }
  }

  fecharModal() {
    this.showTermsModal = false;
  }
}
