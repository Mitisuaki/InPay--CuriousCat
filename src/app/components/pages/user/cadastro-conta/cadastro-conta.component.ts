import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserHeaderComponent } from '../user-header/user-header.component';
@Component({
  selector: 'app-cadastro-conta',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,UserHeaderComponent],
  templateUrl: './cadastro-conta.component.html',
  styleUrl: './cadastro-conta.component.css'
})
export class CadastroContaComponent {
 // FORMGROUP
 formulario = new FormGroup({
  accNickName: new FormControl('', [Validators.required ,Validators.pattern(/^[^0-9][^@#]+$/)]),
  cep: new FormControl('', [Validators.required]),
  pais: new FormControl('', [Validators.required]),
  bairro: new FormControl('', [Validators.required]),
  cidade: new FormControl('', [Validators.required]),
  estado: new FormControl('', [Validators.required]),
  rua: new FormControl('', [Validators.required]),
  numero: new FormControl('', [Validators.required]),
  accRecoveryCode: new FormControl('', [Validators.required]),
  cpf: new FormControl('', [Validators.required]),
  User_name: new FormControl('', [Validators.required]),
  birthday: new FormControl('', [Validators.required]),
  termos: new FormControl('', [Validators.required]),
  })


  // CONSTRUTOR
  constructor(private rota:Router, ){}

  // AUTENTICAR
  mensagem:string="";
  autenticar():void{
    this.rota.navigateByUrl('account-home')
    console.log(this.cadastrarConta())

  }



  // MUDAR MENSAGEM DE ERRO CONFORME INPUT INSTANTANEAMENTE
  inputValues: { [key: string]: string } = {
    input_accNickName: '',
    input_cpf:'',
  };

  inputChanged(inputName: string, event: any) {
    this.inputValues[inputName] = event.target.value;
  }

  UserCadastrado = "";

  async cadastrarConta(){

    const request = await fetch('http://localhost:5066/user/{62cf6c8b-4cfb-4489-af7b-83d2bcf7336c}/acc/createPFAcc/',{
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body:JSON.stringify(
      { accNickName: "string",
        adress: {
          cep: "string",
          street: "string",
          number: 0,
          neighborhood: "string",
          city: "string",
          state: "string",
          country: "string",
          complement: "string"
        },
        accRecoveryCode: "string",
        cpf: "stringstrin",
        name: "string",
        birthDay: "2024-03-25T19:07:22.354Z"
      }
    )
    });

    const show = await request.json();
    return show

  }
}




