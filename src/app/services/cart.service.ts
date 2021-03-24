import { Injectable } from '@angular/core';
import { Car } from '../models/car';
import { CartItem } from '../models/cartItem';
import { CartItems } from '../models/cartItems';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  addtoCart(car:Car){
    let item = CartItems.find(c=> c.car.id===car.id);
    if(item){
      item.quantity+=1;
      console.log(item)
    }else{
      let cartItem = new CartItem();
      cartItem.car = car;
      cartItem.quantity = 1;
      CartItems.push(cartItem)
      console.log(item);
    }
  }

  removeFromCart(car:Car){
    let item:CartItem = CartItems.find(c=> c.car.id===car.id);
    //Remove yerin splice
    CartItems.splice(CartItems.indexOf(item),1);
  }

  list():CartItem[]{
    return CartItems;
  }
}
