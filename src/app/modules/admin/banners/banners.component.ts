import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-banners',
  templateUrl: './banners.component.html',
  styleUrls: ['./banners.component.scss']
})
export class BannersComponent implements OnInit {

  @ViewChild(MatSort)
  sort!: MatSort;

  title: string = 'Banners';
  dataSource: any;
  searchedKeyword: any;
  totalRecords: number = 0;
  currentPage = 1;
  recordLimit = 100;
  banners: any = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getBanners();
  }

  onPageChanged(event: PageEvent) {
    this.currentPage = event.pageIndex + 1; // 1
    this.recordLimit = event.pageSize; // 10
    this.getBanners();
  }

  getBanners(): void {
    this.apiService.getBanners().subscribe((res) => {
      console.log('Banners --->', res);
      this.banners = res.data;
      this.dataSource = new MatTableDataSource(this.banners);
      this.dataSource.sort = this.sort;
    });
  }

}
