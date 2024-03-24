import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HeaderComponent } from "../header/header.component";
import { TermosDeUsoModalComponent } from '../termos-de-uso-modal/termos-de-uso-modal.component';


@Component({
    selector: 'app-cadastro-usuario',
    standalone: true,
    templateUrl: './cadastro-usuario.component.html',
    styleUrl: './cadastro-usuario.component.css',
    imports: [CommonModule, ReactiveFormsModule, HeaderComponent,TermosDeUsoModalComponent]
})
export class CadastroUsuarioComponent {
  // formulário
  formulario = new FormGroup({
    nickname: new FormControl('', [Validators.required ,Validators.pattern(/^[^0-9][^@#]+$/)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    celular: new FormControl('', [Validators.required,Validators.pattern(/^\d{10}/)] ),
    senha: new FormControl('', [Validators.required]),
    confirmarSenha: new FormControl('', [Validators.required]),
    termos: new FormControl('', [Validators.required]),

  });

  mensagem:string="";

  // Construtor
  constructor(private rota:Router){}

  // Função para autenticar
  autenticar():void{
    if(
      this.formulario.value.senha === this.formulario.value.confirmarSenha
      ){        // Redirecionamento
        this.rota.navigateByUrl('user/home-page');
      }else{
        this.mensagem ="Senhas não coincidem";
      }

  }

  inputValues: { [key: string]: string } = {
    input_nome: '',
    input_cpf:'',
    input_email: '',
    input_celular:''
  };

  inputChanged(inputName: string, event: any) {
    this.inputValues[inputName] = event.target.value;
  }

}
