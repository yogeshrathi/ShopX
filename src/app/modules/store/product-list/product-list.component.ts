import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store.service';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
    products: any;

    constructor(private storeService: StoreService) { }

    ngOnInit(): void {
        // Todo
        // Add api call in resolver []
        this.getProducts();
    }

    getProducts(): void {
        this.storeService.getProducts().subscribe(res => {
            this.products = res.data;
        });
    }


}
