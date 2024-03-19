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
    // Construtor
      constructor(private rota:Router){}

    mensagem:string="";
    // Função para autenticar
    autenticar():void{
      console.log("a")
      // if(
      //   this.formulario.value.senha === this.formulario.value.confirmarSenha
      //   ){        // Redirecionamento
      //     this.rota.navigateByUrl('user/home-page');
      //   }else{
      //     this.mensagem ="Senhas não coincidem";
      //   }

    }

    inputValues: { [key: string]: string } = {
      input_email: '',
    };

    inputChanged(inputName: string, event: any) {
      this.inputValues[inputName] = event.target.value;
    }
}
