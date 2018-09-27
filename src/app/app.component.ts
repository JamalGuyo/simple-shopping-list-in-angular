import { Component } from '@angular/core';
import { Item } from './item';
import { ITEMS } from './items';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  shoppingBasket: Item[] = ITEMS;
  newItem: Item = { name: null, price: null, quantity: null };

  getSubtotal(something: Item): number {
    return something.quantity * something.price;
  }

  getTotal(): number {
    return this.shoppingBasket.reduce((a, b) => {
      return a + this.getSubtotal(b);
    }, 0);
  }

  addToBasket() {
    if (this.newItem.quantity && this.newItem.price && this.newItem.name) {
      this.shoppingBasket.push(this.newItem);
      
      this.clearShoppingForm();
    }
  }

  clearShoppingBasket() {
    this.shoppingBasket = [];
  }

  removeItem(index: number) {
    this.shoppingBasket.splice(index, 1);
  }

  private clearShoppingForm() {
    this.newItem = { name: null, price: null, quantity: null };
  }
}
