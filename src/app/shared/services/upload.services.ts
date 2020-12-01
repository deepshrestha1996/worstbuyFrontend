import { Injectable } from "@angular/core";
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable()

export class UploadServices {

    url;
    constructor() {
        this.url = environment.BaseUrl;

    }
    upload(data, file, method, url) {
        return Observable.create((observer) => {

            console.log(file);
            let xhr = new XMLHttpRequest();
            let formData = new FormData();
            if (file) {
                formData.append("images", file[0], file[0].name);
            }
            for (let key in data) {
                formData.append(key, data[key]);
            }
            xhr.onreadystatechange = () => {
                if (xhr.readyState == 4) {
                    observer.next(xhr.response);
                }
                else {
                    observer.error(xhr.response);
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
            xhr.send(formData);
        })

    }
}