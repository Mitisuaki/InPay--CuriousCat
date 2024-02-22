import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserHomePageHeaderComponent } from "../user/header/header.component";
import { UserHomePageFooterComponent } from "../footer/footer.component";
import { HeaderComponent } from "../header/header.component";

@Component({
    selector: 'app-cadastro-usuario',
    standalone: true,
    templateUrl: './cadastro-usuario.component.html',
    styleUrl: './cadastro-usuario.component.css',
    imports: [CommonModule, ReactiveFormsModule, UserHomePageHeaderComponent, UserHomePageFooterComponent, HeaderComponent]
})
export class CadastroUsuarioComponent {
  // formulário
  formulario = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    cpf: new FormControl('', [Validators.required, Validators.pattern(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    senha: new FormControl('', [Validators.required]),
    confirmarSenha: new FormControl('', [Validators.required]),

  });

  mensagem:string="";

  // Construtor
  constructor(private rota:Router){}

  // Função para autenticar
  autenticar():void{
    if(
      this.formulario.value.senha === this.formulario.value.confirmarSenha
      ){
        console.log("usuario criado com sucesso")
        // Redirecionamento
        this.rota.navigateByUrl('user/home-page');
      }else{
        this.mensagem ="Senhas não coincidem";
      }

  }
}
