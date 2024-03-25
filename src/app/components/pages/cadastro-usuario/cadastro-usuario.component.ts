import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HeaderComponent } from "../header/header.component";
import { TermosDeUsoModalComponent } from '../termos-de-uso-modal/termos-de-uso-modal.component';
import { EnderecoService } from '../../../services/endereco/endereco.service';
import { RouterOutlet } from '@angular/router';
import { TestBed } from '@angular/core/testing';

@Component({
    selector: 'app-cadastro-usuario',
    standalone: true,
    templateUrl: './cadastro-usuario.component.html',
    styleUrl: './cadastro-usuario.component.css',
    imports: [CommonModule, ReactiveFormsModule, HeaderComponent,TermosDeUsoModalComponent,RouterOutlet,]
})
export class CadastroUsuarioComponent {

  // FORMGROUP
  formulario = new FormGroup({
    username: new FormControl('', [Validators.required ,Validators.pattern(/^[^0-9][^@#]+$/)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    celular: new FormControl('', [Validators.required,Validators.pattern(/^\d{10}/)] ),
    // cep: new FormControl('', [Validators.required,Validators.pattern(/^[0-9]{8}$/)]),
    senha: new FormControl('', [Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/)]),
    confirmarSenha: new FormControl('', [Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/)]),
    recoveryCode: new FormControl('',[Validators.required,Validators.pattern(/^[0-9]{8}$/)]),
    antiPhishingCode: new FormControl('',[Validators.required,Validators.pattern(/^[0-9]{8}$/)]),
    termos: new FormControl('', [Validators.required]),

  });



  // CONSTRUTOR
  constructor(private rota:Router, private service:EnderecoService){}

  // AUTENTICAR
  mensagem:string="";
  autenticar():void{
    if(
      this.formulario.value.senha === this.formulario.value.confirmarSenha
      ){        // Redirecionamento
        this.rota.navigateByUrl('user/account');
      }else{
        this.mensagem ="Senhas não coincidem";
      }

  }

  // MUDAR MENSAGEM DE ERRO CONFORME INPUT INSTANTANEAMENTE
  inputValues: { [key: string]: string } = {
    input_nome: '',
    input_cpf:'',
    // input_cep:'',
    input_email: '',
    input_celular:'',
    input_senha:'',
    input_confirmarSenha:'',
    input_recoveryCode:'',
    input_antiPhishingCode:'',
  };

  inputChanged(inputName: string, event: any) {
    this.inputValues[inputName] = event.target.value;
  }


  title = 'teste';

  userLoggedToken= "";

  async fazerTeste(){

    const request = await fetch('http://localhost:5066/register',{
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body:JSON.stringify({
      userName:this.formulario.value.username,
      email: this.formulario.value.email,
      phoneNumber:this.formulario.value.celular,
      password: this.formulario.value.senha,
      passwordConfirmation: this.formulario.value.confirmarSenha,
      recoveryCode: this.formulario.value.recoveryCode,
      antiPishingCode: this.formulario.value.antiPhishingCode

    })
    });
    const show = await request.json();

    this.userLoggedToken = show.userToken
    console.log(show)
  }
  // async getUserByID(){

  //   const request = await fetch('http://localhost:5066/user/6d96b8e3-033d-473e-8c4e-323b2ef31a40',{
  //   headers: {
  //     'Accept': 'application/json',
  //     'Content-Type': 'application/json',
  //     'Authorization': `Bearer ${this.userLoggedToken}`
  //   },
  //   method: "GET"
  //   });
  //   const show = await request.json();

  //   console.log(show)
  }
