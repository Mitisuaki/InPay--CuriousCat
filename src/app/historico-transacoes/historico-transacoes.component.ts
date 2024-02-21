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
  // OPÇÕES DA SIDEBAR
  menu_options:string[] = ['Dashboards','Transações',
                          'Depósitos','Transferências',
                          'Pagamentos','Sair'];

  transactions:Array<Transaction> =[
    {transaction_id:1 ,nome:'Jimin', data:'10/10/2010', valor:1000, transaction_status: 'Recebido', acao:'Detalhes' },
    {transaction_id:1 ,nome:'Jin', data:'10/10/2010', valor:1000, transaction_status: 'Recebido', acao:'Detalhes' }
  ];
}
