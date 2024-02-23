import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  // OPÇÕES DA SIDEBAR
  menu_options:string[] = ['Dashboards','Transações',
                          'Depósitos','Transferências',
                          'Pagamentos','Sair'];
}
