import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-add-banner',
  templateUrl: './add-banner.component.html',
  styleUrls: ['./add-banner.component.scss']
})
export class AddBannerComponent implements OnInit {

  @ViewChild('closeModal') closeModal!: any;
  @Output() isAddBanner = new EventEmitter<string>();

  bannerForm = new FormGroup({
    bannerName: new FormControl('', [Validators.required]),
    file: new FormControl(null, [Validators.required]),
    description: new FormControl('', [Validators.required]),
  });

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
  }

  addBanner(): void {
    if (this.bannerForm.invalid) {
      alert("Please fill form properly");
      return;
    }
    else {
      const payload: any = {
        banner_name: this.bannerForm.value.bannerName,
        description: this.bannerForm.value.description,
        imageUrl: this.bannerForm.value.file,
        isAvailable: true
      };
      this.apiService.setBanner(payload).subscribe((res) => {
        this.isAddBanner.emit('true');
        this.router.navigate(['admin/banners']);
      });

      console.log(this.bannerForm.value);
      this.closeBannerMdl();
    }
  }

  closeBannerMdl(): void {
    this.closeModal.nativeElement.click();
    this.bannerForm.reset();
  }

}
