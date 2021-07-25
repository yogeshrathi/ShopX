import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { UserCartComponent } from './user-cart/user-cart.component';
import { UserCheckoutComponent } from './user-checkout/user-checkout.component';
import { StoreRoutingModule } from './store.router';
import { StoreService } from './store.service';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    ProductListComponent,
    UserCartComponent,
    UserCheckoutComponent],
  imports: [
    CommonModule,
    SharedModule,
    StoreRoutingModule
  ],
  providers: [StoreService]
})
export class StoreModule { }
