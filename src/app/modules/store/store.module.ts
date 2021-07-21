import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { UserCartComponent } from './user-cart/user-cart.component';
import { UserCheckoutComponent } from './user-checkout/user-checkout.component';



@NgModule({
  declarations: [ProductListComponent, UserCartComponent, UserCheckoutComponent],
  imports: [
    CommonModule
  ]
})
export class StoreModule { }
