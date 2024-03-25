import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HeaderComponent } from "../header/header.component";
import { TermosDeUsoModalComponent } from '../termos-de-uso-modal/termos-de-uso-modal.component';
import { EnderecoService } from '../../../services/endereco/endereco.service';


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
    username: new FormControl('', [Validators.required ,Validators.pattern(/^[^0-9][^@#]+$/)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    celular: new FormControl('', [Validators.required,Validators.pattern(/^\d{10}/)] ),
    cep: new FormControl('', [Validators.required,Validators.pattern(/^[0-9]{8}$/)]),
    senha: new FormControl('', [Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/)]),
    confirmarSenha: new FormControl('', [Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/)]),
    recoveryCode: new FormControl('',[Validators.required,Validators.pattern(/^[0-9A-Za-z!@#$%^&*()-_+=]{6,10}$/)]),
    antiPhishingCode: new FormControl('',[Validators.required,Validators.pattern(/^[0-9A-Za-z!@#$%^&*()-_+=]{6,10}$/)]),
    termos: new FormControl('', [Validators.required]),

  });

  mensagem:string="";

  // Construtor
  constructor(private rota:Router, private service:EnderecoService){}

  // Função para autenticar
  autenticar():void{
    if(
      this.formulario.value.senha === this.formulario.value.confirmarSenha
      ){        // Redirecionamento
        this.rota.navigateByUrl('user/account');
      }else{
        this.mensagem ="Senhas não coincidem";
      }

  }

  inputValues: { [key: string]: string } = {
    input_nome: '',
    input_cpf:'',
    input_cep:'',
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
}
