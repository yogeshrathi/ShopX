import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { AdminSidebarComponent } from 'src/app/shared/components/admin-sidebar/admin-sidebar.component';

@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '', component: AdminSidebarComponent
      }])
  ]
})
export class AdminModule { }
