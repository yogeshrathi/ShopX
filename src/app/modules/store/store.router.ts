import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultLayoutComponent } from 'src/app/container/default-layout/default-layout.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [{
  path: '',
  component: DefaultLayoutComponent,
  children: [{
      path: '',
      redirectTo: 'products'
    }, {
      path: 'products',
      component: ProductListComponent,
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule {}
