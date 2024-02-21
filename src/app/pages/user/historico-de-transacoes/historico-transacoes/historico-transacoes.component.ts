import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Transaction {
  transaction_id:number ,
  nome:string,
  data:string,
  valor:number,
  transaction_status: string,
  acao:string
}

@Component({
  selector: 'app-historico-transacoes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './historico-transacoes.component.html',
  styleUrl: './historico-transacoes.component.css'
})
export class HistoricoTransacoesComponent {
// TABELA DE TRANSAÇÕES
  transactions:Array<Transaction> =[
    {transaction_id:1 ,nome:'Imã Tech', data:'10/10/2010', valor:1000000.00, transaction_status: 'Recebido', acao:'Detalhes' },
    {transaction_id:2 ,nome:'Imãfood', data:'10/10/2010', valor:39.00, transaction_status: 'Enviado', acao:'Detalhes' },
    {transaction_id:3 ,nome:'Imãflix', data:'10/10/2010', valor:29.99, transaction_status: 'Enviado', acao:'Detalhes' },
    {transaction_id:4 ,nome:'MxDonalds', data:'10/10/2010', valor:49.00, transaction_status: 'Enviado', acao:'Detalhes' },
    {transaction_id:5 ,nome:'SharpMarket', data:'10/10/2010', valor:750.00, transaction_status: 'Enviado', acao:'Detalhes' },
    {transaction_id:6 ,nome:'Catsteam', data:'10/10/2010', valor:1000, transaction_status: 'Enviado', acao:'Detalhes' }
  ];
  mostrar: boolean = false;
  toggle () {
    this.mostrar = !this.mostrar;
  }
}
