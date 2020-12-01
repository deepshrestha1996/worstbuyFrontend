import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product.model';
import { Observable } from 'rxjs';
import { BaseServices } from 'src/app/shared/services/base.services';

@Injectable()


export class ProductService extends BaseServices {
    constructor(public http: HttpClient) {
        super();
        this.setUrl("product");
    }
    get() {
        return this.http.get(this.url, this.getOptionWithToken())
    }
    getById(id: string) {
        return this.http.get(this.url + "/" + id, this.getOptionWithToken())

    }
    add(data: Product) {
        return this.http.post(this.url, data, this.getOptionWithToken())

    }
    update(data: any) {
        return this.http.put(this.url + "/" + data._id, data, this.getOptionWithToken())

    }
    search(data) {
        return this.http.post(this.url + "search", data, this.getOptionWithToken());
    }
    remove(id: string) {
        return this.http.delete(this.url + "/" + id, this.getOptionWithToken())
    }
    upload(data, file, method) {
        return Observable.create((observer) => {
            //uploading process
            console.log(file);
            let xhr = new XMLHttpRequest;
            let formData = new FormData();


            if (file) {
                formData.append("images", file[0], file[0].name)
            }

            for (let key in data) {
                formData.append(key, data[key]);
            }

            xhr.onreadystatechange = () => {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        observer.next(xhr.response);
                    } else {
                        observer.error(xhr.response);
                    }

                }
            }
            let url;
            if (method === "PUT") {
                url = `${this.url}${data._id}?token=${localStorage.getItem("token")}`;
            }
            else if (method === "POST") {
                url = this.url + "?token=" + localStorage.getItem("token")
            }
            else {
                url = "";
            }
            xhr.open(method, url, true);
            xhr.send(formData)

        })


    }

}