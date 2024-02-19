import { Component } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-cep-test',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './cep-test.component.html',
  styleUrl: './cep-test.component.css'
})
export class CEPTestComponent {
  async searchCEP() {
    try{

      const CEP: String = (<HTMLInputElement>document.querySelector("#CEP")).value;

      if (CEP.length == 0) {
          throw Error("CEP Não preenchido");
      }

      const url:URL = new URL(`https://viacep.com.br/ws/${CEP}/json/`);

      const fullCEP:Response = await fetch(url);
      const data:any = await fullCEP.json();
      alert(data.uf);

    }catch(error: unknown){
      if (typeof error === "string") {
        alert(error.toUpperCase())
      } else if (error instanceof Error) {
        if (error.message == "Failed to fetch") {
        alert("CEP incorreto");
        } else {
          alert(error.message);
        }
      }
    }
  }
}

