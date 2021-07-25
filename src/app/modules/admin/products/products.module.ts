import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddProductComponent } from 'src/app/shared/components/modals/add-product/add-product.component';


@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '', component: ProductsComponent
      },
      {
        path: 'add', component: AddProductComponent
      }
    ])
  ]
})
export class ProductsModule { }
