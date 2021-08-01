import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { StorageService } from 'src/app/core/services/storageService';
import { StoreService } from '../store.service';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
    products: any;

    constructor(
        private storeService: StoreService,
        private storageService: StorageService,
    ) { }

    ngOnInit(): void {
        // Todo
        // Add api call in resolver []
        this.getProducts();
    }

    getProducts(): void {
        forkJoin({
            product: this.storeService.getProducts(),
            cart: this.storeService.getCart()
        }).subscribe(res => {
            this.products = res.product.data;
            this.products.forEach((element: any) => {
                element.quantity = 0;
            });
            if (res.cart?.products?.length > 0) {
                res.cart.products.forEach((product: any) => {
                    // tslint:disable-next-line: prefer-for-of
                    for (let i = 0; i < this.products.length; i++) {
                        const element = this.products[i];
                        if (element._id === product._id) {
                            element.quantity = product.quantity;
                            break;
                        }
                    }
                });
            }
        });
    }

    addProduct(product: any): void {
        let userCart = this.storageService.get('userCart');
        if (userCart) {
            userCart = JSON.parse(userCart);
        } else {
            userCart = [];
        }

        let isProductUpdated = false;
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < userCart.length; i++) {
            const element = userCart[i];
            if (element._id === product._id) {
                isProductUpdated = true;
                if (product.quantity > 0) {
                    element.quantity = product.quantity;
                } else {
                    userCart.splice(i, 0);
                }
                break;
            }
        }

        if (!isProductUpdated) {
            userCart.push({
                _id: product._id,
                quantity: product.quantity
            });
        }

        this.storeService.addProductToCart(userCart).subscribe((res) => {
            // Todo
            // [] Show toastr
            this.storageService.set('userCart', JSON.stringify(userCart));
        });
    }
}
