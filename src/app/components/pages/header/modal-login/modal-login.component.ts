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
  email_banco:string="jimin@hybe.com";
  senha_banco:string="@Aa12345";

  mensagem:string="";
  userLogado:string="";

  // LOGIN
  async autenticar(){
    try {
      const resposta = await this.fazerTeste();
      console.log("Token do usuário:", resposta.userToken);
      this.userLogado = resposta.userName
      //direcionamento
      this.rota.navigateByUrl('user/account');
      document.getElementById("closeModal")?.click();

    } catch (error) {
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

  userLoggedToken= "";


  async fazerTeste(){

    const request = await fetch('http://localhost:5066/login',{
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body:JSON.stringify({
      email: this.formulario.value.email ,
      password: this.formulario.value.senha
    })
    });
    const show = await request.json();
    return show
  }

}


