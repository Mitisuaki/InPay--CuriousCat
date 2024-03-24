import { Component } from '@angular/core';
import { UserHeaderComponent } from '../user-header/user-header.component';

@Component({
  selector: 'app-account-home',
  standalone: true,
  imports: [UserHeaderComponent],
  templateUrl: './account-home.component.html',
  styleUrl: './account-home.component.css'
})
export class AccountHomeComponent {

}
