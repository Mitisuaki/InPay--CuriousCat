import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-modal-login',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './modal-login.component.html',
  styleUrl: './modal-login.component.css'
})
export class ModalLoginComponent {
  formulario = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    senha: new FormControl('', [Validators.required]),
  });
  // Construtor
  constructor(private rota:Router){}

  // Credenciais
  email_banco:string="fran_coimbra@hotmail.com";
  senha_banco:string="#curiouscat_nota1000";

  mensagem:string="";
  // Função para autenticar credenciais
  autenticar():void{
    if(
      this.formulario.value.senha === this.senha_banco && this.formulario.value.email === this.email_banco
      ){
        this.rota.navigateByUrl('user/home-page');
          }else if(this.formulario.value.senha === this.senha_banco && this.formulario.value.email !== this.email_banco
          ){
            this.mensagem = "Email incorreto!"
          }else if(this.formulario.value.senha !== this.senha_banco && this.formulario.value.email === this.email_banco
            ){
              this.mensagem = "Senha incorreta!"
            }else if(this.formulario.value.senha !== this.senha_banco && this.formulario.value.email !== this.email_banco
              ){
                this.mensagem = "Credenciais incorretas!"
            }
    }

  inputValues: { [key: string]: string } = {
    input_email: '',
  };

  inputChanged(inputName: string, event: any) {
    this.inputValues[inputName] = event.target.value;
    }

  clearMessage():void{
    this.mensagem = "";
  }

}
