import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  // myShoppingCart:Product[] = [];
  // //subject de rxjs para el total
  // total= new BehaviorSubject<number>(0)
  // total$ = this.total.asObservable()
  // constructor() { }
  // calculateTotal(){

  //   return this.myShoppingCart.reduce((acc,curr)=>acc+curr.price,0)
  // }
  // onAddToShoppingCard(product: Product){
  //   this.myShoppingCart.push(product)
  //   this.total.next(this.myShoppingCart.length)
  //   this.calculateTotal()

  // }

  // getMyShoppingCart(){
  //   return this.myShoppingCart
  // }

}
