import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  @ViewChild(MatSort)
  sort!: MatSort;

  title: string = 'Products';
  dataSource: any;
  searchedKeyword: any;
  totalRecords: number = 0;
  currentPage = 1;
  recordLimit = 100;
  products: any = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  onPageChanged(event: PageEvent) {
    this.currentPage = event.pageIndex + 1; // 1
    this.recordLimit = event.pageSize; // 10
    this.getProducts();
  }

  getProducts(): void {
    this.apiService.getProducts().subscribe((res) => {
      console.log('Products --->', res);
      this.products = res.data;
      this.dataSource = new MatTableDataSource(this.products);
      this.dataSource.sort = this.sort;
    });
  }
}
