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
    const request = await fetch('http://localhost:5066/user/51da4603-f805-45a6-9d58-3ec22434ebc9/acc/createPFAcc/',{
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VybmFtZSI6ImppbWluIiwiSWQiOiI1MWRhNDYwMy1mODA1LTQ1YTYtOWQ1OC0zZWMyMjQzNGViYzkiLCJJc0FkbWluIjoiRmFsc2UiLCJleHAiOjE3MTE0MDE5MDl9.nLjdqavRs_N1Yawm514R4ki9-RBfC8hlicUapBP3KfI'
    },
    method: "POST",
    body:JSON.stringify(
      { accNickName: "stricecc",
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




