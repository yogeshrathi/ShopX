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

  addProduct(): void{
    this.addProductInCart.emit(this.product);
  }
}
