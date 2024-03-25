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

  })


  // CONSTRUTOR
  constructor(private rota:Router, ){}

  // AUTENTICAR
  mensagem:string="";
  autenticar():void{
    this.rota.navigateByUrl('account-home')

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

  // async cadastrarUsuario(){

  //   const request = await fetch('http://localhost:5066/register',{
  //   headers: {
  //     'Accept': 'application/json',
  //     'Content-Type': 'application/json'
  //   },
  //   method: "POST",
  //   body:JSON.stringify({
  //     userName:this.formulario.value.username,
  //     email: this.formulario.value.email,
  //     phoneNumber:this.formulario.value.celular,
  //     password: this.formulario.value.senha,
  //     passwordConfirmation: this.formulario.value.confirmarSenha,
  //     recoveryCode: this.formulario.value.recoveryCode,
  //     antiPishingCode: this.formulario.value.antiPhishingCode

  //   })
  //   });

  //   const show = await request.json();

  //   this.UserCadastrado = show.userName
  //   return this.UserCadastrado

  // }
}



