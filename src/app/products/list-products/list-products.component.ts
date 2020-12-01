import { Component, OnInit, Input } from '@angular/core';
import { MsgServices } from 'src/app/shared/services/message.service';
import { ProductService } from '../services/product.services';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
  products = [];
  loading: boolean = false;
  imgUrl: string;

  @Input() data: any;

  constructor(
    public msgService: MsgServices,
    public productService: ProductService,
    public router: Router
  ) {
    this.imgUrl = environment.ImgUrl;
  }

  ngOnInit() {
    if (!this.data) {
      this.loading = true;
      this.productService.get().subscribe(
        (data: any) => {
          data.forEach(item => {
            item.tags = item.tags.join(",")
          });
          this.products = data;
          this.loading = false;
          console.log("my data are:", data)
        },
        (error) => {
          this.loading = false;
          this.msgService.showError(error)
        }
      )
    } else {
      this.products = this.data;
    }

  }

  editProduct(id) {
    this.router.navigate(['/product/edit/' + id]);
  }
  removeProduct(id, i) {
    let a = confirm("Are you sure?")
    if (a) {
      this.productService.remove(id).subscribe(
        (data) => {
          this.msgService.showSuccess("Product Deleted")
          this.products.splice(i, 1);
        },
        (error) => {
          this.msgService.showError(error)
        }
      )
    }
  }

}
