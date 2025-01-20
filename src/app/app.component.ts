import { Component } from '@angular/core';
import { WishItem } from 'src/shared/models/wishItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  items: WishItem[] = [
    new WishItem('Buy a new bike', false),
    new WishItem('Get a new phone', true),
    new WishItem('Upgrade my car', true),
  ];
  title = 'wishList';
}
