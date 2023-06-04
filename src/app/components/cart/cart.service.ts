import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: any[] = [];

  constructor() {}

  getCartItems(): any[] {
    return this.cartItems;
  }

  calculateSummaryPrice(): number {
    // Logic to calculate the summary price of the cart items
    // You need to implement this method based on your requirements
    return 0;
  }

  removeItemFromCart(index: number): void {
    // Logic to remove an item from the cart based on the index
    // You need to implement this method based on your requirements
  }

  // Other methods of the CartService class
}