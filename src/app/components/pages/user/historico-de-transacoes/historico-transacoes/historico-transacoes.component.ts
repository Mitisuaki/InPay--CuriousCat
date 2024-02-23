import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UserHomePageFooterComponent } from "../../../footer/footer.component";
import { UserHomePageHeaderComponent } from "../../header/header.component";

interface Transaction {
  transaction_id:number ,
  nome:string,
  data:string,
  valor:string,
  transaction_status: string,
  acao:string
}

@Component({
    selector: 'app-historico-transacoes',
    standalone: true,
    templateUrl: './historico-transacoes.component.html',
    styleUrl: './historico-transacoes.component.css',
    imports: [CommonModule, UserHomePageFooterComponent, UserHomePageHeaderComponent]
})
export class HistoricoTransacoesComponent {
// TABELA DE TRANSAÇÕES
  transactions:Array<Transaction> =[
    {transaction_id:6 ,nome:'Imãfood', data:'22/02/2024', valor:`39,00`, transaction_status: 'Enviado', acao:'Detalhes' },
    {transaction_id:5 ,nome:'McDonalds', data:'17/02/2024', valor:`49,00`, transaction_status: 'Enviado', acao:'Detalhes' },
    {transaction_id:4 ,nome:'SharpMarket', data:'12/02/2024', valor:`750,00`, transaction_status: 'Enviado', acao:'Detalhes' },
    {transaction_id:3 ,nome:'CatSteam', data:'10/02/2024', valor:`1.000,00`, transaction_status: 'Enviado', acao:'Detalhes' },
    {transaction_id:2 ,nome:'Imã Tech', data:'7/02/2024', valor:`50.000,00`, transaction_status: 'Recebido', acao:'Detalhes' },
    {transaction_id:1 ,nome:'Imãflix', data:'5/02/2024', valor:`29,99`, transaction_status: 'Enviado', acao:'Detalhes' },
  ];
  mostrar: boolean = false;
  toggle () {
    this.mostrar = !this.mostrar;
  }

  public togglePrivacy():void{

    const elements = document.querySelectorAll("#privacy");

    elements.forEach(el => {
      el.classList.toggle("ri-eye-line");
      el.classList.toggle("secondary-privacy-color");
    });

    const balances = document.querySelectorAll("#balance-value");

    balances.forEach(el => {
      el.classList.toggle("box-blur")
    })
  }
}
