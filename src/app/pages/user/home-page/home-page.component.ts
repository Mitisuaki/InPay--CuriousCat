import { Component } from '@angular/core';
import { UserHomePageHeaderComponent } from '../header/header.component';
import { UserHomePageMainComponent } from './main/main.component';
import { UserHomePageFooterComponent } from '../../footer/footer.component';


@Component({
    selector: 'app-user-home-page',
    standalone: true,
    templateUrl: './home-page.component.html',
    styleUrl: './home-page.component.css',
    imports: [UserHomePageHeaderComponent, UserHomePageMainComponent, UserHomePageFooterComponent]
})
export class HomePageComponent {

}
