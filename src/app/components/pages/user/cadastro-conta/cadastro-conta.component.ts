import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-cadastro-conta',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './cadastro-conta.component.html',
  styleUrl: './cadastro-conta.component.css'
})
export class CadastroContaComponent {
  // formulario = new FormGroup({
  //   nickname: new FormControl('', [Validators.required ,Validators.pattern(/^[^0-9][^@#]+$/)]),
  //   email: new FormControl('', [Validators.required, Validators.email]),
  //   celular: new FormControl('', [Validators.required,Validators.pattern(/^\d{10}/)] ),
  //   senha: new FormControl('', [Validators.required]),
  //   confirmarSenha: new FormControl('', [Validators.required]),
  //   termos: new FormControl('', [Validators.required]),})

    // autenticar():void{
    //   console.log("a");
    // }

    // inputValues: { [key: string]: string } = {
    //   input_nome: '',
    //   input_cpf:'',
    //   input_email: '',
    //   input_celular:''
    // };
}
