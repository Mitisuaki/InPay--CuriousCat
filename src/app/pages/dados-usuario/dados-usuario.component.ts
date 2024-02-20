import { Component } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-cep-test',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './dados-usuario.component.html',
  styleUrl: './dados-usuario.component.css'
})
export class DadosUsuarioComponent {

// Função para procurar o CEP
async searchCEP()  {
    const cep = (<HTMLInputElement>document.getElementById("CEP")).value;
  
    if (/^\d{8}$/.test(cep)) {
      const url = `https://viacep.com.br/ws/${cep}/json/`;
  
      try {
        const response = await fetch(url);
        const data = await response.json();
  
        (<HTMLInputElement>document.getElementById("cidade")).value = data.localidade;
        (<HTMLInputElement>document.getElementById("estado")).value = data.uf;
      } catch (error) {
        console.error("Erro ao buscar CEP:", error);
        alert("Ocorreu um erro ao buscar o CEP. Tente novamente mais tarde.");
      }
    } else {
      alert("Digite um CEP válido.");
    }
  }

  enableEdit() {
    const form = document.getElementById("infoForm") as HTMLFormElement;
    const elements = form.elements;
  
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i] as HTMLInputElement;
  
      if (element.type !== "button") {
        element.readOnly = false;
      }
    }
  
    // Habilita botão "Salvar"
    const saveBtn = document.getElementById("saveBtn") as HTMLButtonElement | null;
  
    if (saveBtn) {
      saveBtn.disabled = false;
      this.enableCancelButton(); // Chama a função para habilitar o botão "Cancelar"
    }
  }
  
enableCancelButton() {
    // Habilita botão "Cancelar"
    const cancelBtn = document.getElementById("cancelBtn") as HTMLButtonElement | null;
  
    if (cancelBtn) {
      cancelBtn.disabled = false;
    }
  }
  


  // Função para cancelar edição
  cancelEdit() {
    const form = document.getElementById("infoForm") as HTMLFormElement;
    const elements = form.elements;
  
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i] as HTMLInputElement;
  
      if (element.type !== "button") {
        element.readOnly = true;
      }
    }
  
    // Desabilita botão "Salvar"
    const saveBtn = document.getElementById("saveBtn") as HTMLButtonElement | null;
  
    if (saveBtn) {
      saveBtn.disabled = true;
    }
  }

  // Eventos do botão salvar
  
  
}



