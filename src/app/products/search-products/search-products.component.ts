import { Component, OnInit } from '@angular/core';
import { MsgServices } from 'src/app/shared/services/message.service';
import { ProductService } from '../services/product.services';
import { Router } from '@angular/router';
import { Product } from '../models/product.model';


@Component({
  selector: 'app-search-products',
  templateUrl: './search-products.component.html',
  styleUrls: ['./search-products.component.css']
})
export class SearchProductsComponent implements OnInit {
  product;
  products = [];
  submitting: boolean = false;
  result: boolean = false;
  allProducts = [];
  categories = [];
  names = [];
  showName: boolean = false;
  showMultipleDate: boolean = false;


  constructor(
    public msgService: MsgServices,
    public ProductService: ProductService,
    public router: Router,
  ) {
    this.product = new Product({});
    this.product.category = ""
  }


  ngOnInit() {
    this.ProductService.get().subscribe(
      (data: any) => {
        console.log("data>>", data);
        this.allProducts = data;
        data.forEach((item) => {
          if (this.categories.indexOf(item.category) === -1) {
            this.categories.push(item.category);
          }
        });
      }, error => {
        this.msgService.showError(error);
      }

    )
  }


  search() {
    if (!this.product.toDate) {
      this.product.toDate = this.product.fromDate;
    }
    this.submitting = true;
    this.ProductService.search(this.product)
      .subscribe(
        (data: any) => {
          this.submitting = false;

          if (data.length) {
            this.product = data;
            this.result = true;
            console.log("data is>>", data);
          } else {
            this.msgService.showInfo("No any product matched your search query");
          }
        },
        error => {
          this.submitting= false;
          this.msgService.showError(error);
        })
  }

  categoryChanged(cat){
    this.names= this.allProducts.filter((item)=>{
      if(item.category==cat){
        return true;
      }

    })
    this.showName= true;
    this.product.name="";
  }

  changeMultipleDate(){
    if(this.showMultipleDate){
      this.product.toDate= null;

    }
    this.showMultipleDate= !this.showMultipleDate
  }

}