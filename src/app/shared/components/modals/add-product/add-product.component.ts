import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  @ViewChild('closeModal') closeModal!: any;

  productForm = new FormGroup({
    productName: new FormControl('', [Validators.required]),
    file: new FormControl(null, [Validators.required]),
    price: new FormControl(null, [Validators.required]),
    description: new FormControl('', [Validators.required]),
  });

  constructor(private apiService: ApiService,
    private router: Router) { }

  ngOnInit(): void {
  }

  addProduct(): void {
    if (this.productForm.invalid) {
      alert("Please fill form properly");
      return;
    }
    else {
      const payload: any = {
        product_name: this.productForm.value.productName,
        price: this.productForm.value.price,
        description: this.productForm.value.description,
        imageUrl: this.productForm.value.file,
        isAvailable: true
      };
      debugger;
      this.apiService.setProduct(payload).subscribe((res) => {
        alert(res);
        this.router.navigate(['admin/products']);
      });

      console.log(this.productForm.value);
      this.closeLicenseMdl();
    }
  }

  closeLicenseMdl(): void {
    this.closeModal.nativeElement.click();
    this.productForm.reset();
  }


}
