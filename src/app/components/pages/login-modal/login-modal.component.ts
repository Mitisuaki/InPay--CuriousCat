import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-modal',
  standalone: true,
  imports: [ ReactiveFormsModule],
  templateUrl: './login-modal.component.html',
  styleUrl: './login-modal.component.css'
})
export class LoginModalComponent {
  formulario = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    senha: new FormControl('', [Validators.required]),
  });

      constructor(private rota:Router){}

    mensagem:string="";

    // Credenciais
    email_banco:string="fran_coimbra@hotmail.com"
    senha_banco:string="#curiouscat_nota1000";

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
}
