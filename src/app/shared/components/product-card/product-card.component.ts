import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-product-card',
    templateUrl: './product-card.component.html',
    styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

    @Input() product: any;
    @Output() addProductInCart = new EventEmitter();

    constructor() { }

    ngOnInit(): void {
    }

    addProduct(): void {
        this.product.quantity = 1;
        this.addProductInCart.emit(this.product);
    }

    // increaseProductQuantity(): void {
    //     this.product.quantity++;
    //     this.addProductInCart.emit(this.product);
    // }

    // decreaseProductQuantity(): void {
    //     if (this.product.quantity > 1) {
    //         this.product.quantity--;
    //         this.addProductInCart.emit(this.product);
    //     } else {
    //         this.removeProductFromCart();
    //     }
    // }

    // removeProductFromCart(): void {
    //     this.product.quantity = 0;
    //     this.addProductInCart.emit(this.product);
    // }
}
