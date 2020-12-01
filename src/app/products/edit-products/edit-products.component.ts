import { Component, OnInit } from '@angular/core';
import { MsgServices } from 'src/app/shared/services/message.service';
import { ProductService } from '../services/product.services';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-edit-products',
  templateUrl: './edit-products.component.html',
  styleUrls: ['./edit-products.component.css']
})
export class EditProductsComponent implements OnInit {
  productId;
  product;
  loading: boolean = false;
  submitting: boolean = false
  uploadArray = [];
  imgUrl: string;
  constructor(
    public msgService: MsgServices,
    public productService: ProductService,
    public router: Router,
    public activateRoute: ActivatedRoute
  ) {
    this.imgUrl = environment.ImgUrl;
  }

  ngOnInit() {
    this.loading = true;
    this.productId = this.activateRoute.snapshot.params["id"]
    this.productService.getById(this.productId)
      .subscribe(
        (data: any) => {
          this.loading = false;
          this.product = data;
          this.product.tags = data.tags.join(",");
        },
        (error) => {
          this.loading = false
          this.msgService.showError(error)

        }

      )
  }

  update() {

    this.submitting = true;
    this.productService.upload(this.product, this.uploadArray, "PUT")
      .subscribe(
        (data) => {
          this.msgService.showSuccess("Product updated successfully");
          this.router.navigate(["/product/list"])
        },
        (error) => {
          debugger;
          this.submitting = false;
          this.msgService.showError(error);
        }
      )
  }
  filesChanged(ev) {
    this.uploadArray = ev.target.files;
  }

}
