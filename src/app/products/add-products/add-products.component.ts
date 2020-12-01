import { Component, OnInit } from '@angular/core';
import { MsgServices } from 'src/app/shared/services/message.service';
import { ProductService } from './../services/product.services';
import { Router } from '@angular/router';
import { Product } from './../models/product.model';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {
  product;
  submitting: boolean = false;
  uploadArray = [];
  constructor(
    public msgService: MsgServices,
    public productService: ProductService,
    public router: Router
  ) {
    this.product = new Product({})
  }

  ngOnInit() {

  }
  add() {
    this.submitting=true;
    this.productService.add(this.product)
      .subscribe(
        (data)=>{
          this.msgService.showInfo("Product added successfully")
          this.router.navigate(["/product/list"])
        },
        (error)=>{
          this.msgService.showError(error);
        })
  }

  upload() {
    this.submitting = true;
    this.productService.upload(this.product, this.uploadArray, "POST")
      .subscribe(
        (data) => {
          this.msgService.showInfo("Product Added Successfully")
          this.router.navigate(["/product/list"])
        },
        (error) => {
          this.msgService.showError(error)
        })
  }
  fileChanged(ev) {
    this.uploadArray = ev.target.files //files

  }
} 