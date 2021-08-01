import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BannersComponent } from './banners.component';
import { AddBannerComponent } from 'src/app/shared/components/modals/add-banner/add-banner.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [BannersComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '', component: BannersComponent
      },
      {
        path: 'add', component: AddBannerComponent
      }
    ])
  ],
})
export class BannersModule { }
