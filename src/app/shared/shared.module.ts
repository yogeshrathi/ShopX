import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatMenuModule } from '@angular/material/menu';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { BannerCardComponent } from './components/banner-card/banner-card.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AddProductComponent } from './components/modals/add-product/add-product.component';


let sharedModules = [
  FormsModule,
  ReactiveFormsModule,
  MatSidenavModule,
  MatTableModule,
  MatButtonModule,
  MatSelectModule,
  MatSliderModule,
  MatPaginatorModule,
  MatFormFieldModule,
  MatChipsModule,
  MatCardModule,
  MatInputModule,
  MatMenuModule,
  MatListModule,
  MatToolbarModule,
  MatTabsModule,
  MatCheckboxModule,
  MatIconModule,
  MatDialogModule,
  MatStepperModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatExpansionModule,
  MatProgressSpinnerModule,
];

const sharedComponent = [
  ProductCardComponent,
  BannerCardComponent,
  HeaderComponent,
  SidebarComponent
];

@NgModule({
  declarations: [...sharedComponent, AddProductComponent],
  imports: [
    CommonModule,
    sharedModules
  ], exports: [...sharedModules, ...sharedComponent, AddProductComponent]
})
export class SharedModule { }
