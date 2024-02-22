import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HistoricoTransacoesComponent } from './pages/user/historico-de-transacoes/historico-transacoes/historico-transacoes.component';
import { SidebarComponent } from './pages/user/historico-de-transacoes/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HistoricoTransacoesComponent, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'InPay | A fintech feita para você';

}
