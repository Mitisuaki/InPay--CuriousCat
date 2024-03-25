import { Component } from '@angular/core';
import { UserHeaderComponent } from '../user-header/user-header.component';

@Component({
  selector: 'app-deposito',
  standalone: true,
  imports: [UserHeaderComponent],
  templateUrl: './deposito.component.html',
  styleUrl: './deposito.component.css'
})
export class DepositoComponent {

}
