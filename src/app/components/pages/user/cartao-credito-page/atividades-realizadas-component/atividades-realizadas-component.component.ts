import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { ModalPeriodoComponenteComponent } from '../modal-periodo-componente/modal-periodo-componente.component';

@Component({
  selector: 'atividades-realizadas-component',
  standalone: true,
  imports: [
    NgOptimizedImage,
    ModalPeriodoComponenteComponent
  ],
  templateUrl: './atividades-realizadas-component.component.html',
  styleUrl: './atividades-realizadas-component.component.css'
})
export class AtividadesRealizadasComponentComponent {

}
