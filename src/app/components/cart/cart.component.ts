import { Component } from '@angular/core';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartItems: any[] = [];
  summaryPrice: number = 0;

  constructor(private cartService: CartService) {
    this.cartItems = this.cartService.getCartItems();
    this.summaryPrice = this.cartService.calculateSummaryPrice();
  }

  removeItem(index: number) {
    this.cartService.removeItemFromCart(index);
    this.cartItems = this.cartService.getCartItems();
    this.summaryPrice = this.cartService.calculateSummaryPrice();
  }

  pay() {
    // Logic for payment process
    // You need to implement this method based on your requirements
    console.log('Payment process initiated');
  }
}