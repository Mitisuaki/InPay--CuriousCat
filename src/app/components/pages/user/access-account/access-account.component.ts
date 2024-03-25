import { Component } from '@angular/core';
import { UserHeaderComponent } from '../user-header/user-header.component';
import { CadastroUsuarioComponent } from '../../cadastro-usuario/cadastro-usuario.component';

@Component({
  selector: 'app-access-account',
  standalone: true,
  imports: [UserHeaderComponent],
  templateUrl: './access-account.component.html',
  styleUrl: './access-account.component.css'
})
export class AccessAccountComponent {
  UserCadastrado: any
}
