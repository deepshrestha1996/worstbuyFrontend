import { environment } from 'src/environments/environment';
import { HttpHeaders } from '@angular/common/http';

export class BaseServices {

    url;
    constructor() {
        this.url = environment.BaseUrl;
    }
    /**
  * 
  * @param url 
  * @example
  * 'about'
  * @returns string
  * localhost:4040/about/
  */
    setUrl(url) {
        return this.url += url + "/"
    }

    getOption(){
        return{
            headers: new HttpHeaders({
                "Content-Type": "application/json"
            }),
        };
    }

    public getOptionWithToken(){
        return{
            headers: new HttpHeaders({
                "Content-Type": "application.json",
                "x-access-token":localStorage.getItem("token"),
            }),
        }
    }
}