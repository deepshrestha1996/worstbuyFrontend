
import { Injectable } from "@angular/core"
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Users } from '../models/user.model';
import { environment } from 'src/environments/environment';

@Injectable()

export class AuthService {
    private url;
    constructor(private http: HttpClient) {
        this.url = environment.BaseUrl+ "auth/";

    }
    login(data: Users) {
        return this.http.post(this.url + "login", data, this.getOption())
        // return new Promise((resolve, reject)=>{
        //     // this method will call for backend api for http communication
        // this.http.post(this.url + "/auth/login", data, {
        //     headers: new HttpHeaders({
        //         'Content-Type': 'application/json'
        //     }),
        // }).subscribe(
        //     data => {
        //         console.log("data / success in http call>>", data)
        //         resolve(data)
        //     }, 
        //     error => {
        //         console.log("error in http call>> ", error)
        //         reject(data)
        //     })

        // })
        // return Observable.create((observer) => {
        //     // this method will call for backend api for http communication
        //     this.http.post(this.url + "/auth/login", data, {
        //         headers: new HttpHeaders({
        //             'Content-Type': 'application/json'
        //         }),
        //     }).subscribe(
        //         data => {
        //             console.log("data / success in http call>>", data)
        //             observer.next(data)
        //         },
        //         error => {
        //             console.log("error in http call>> ", error)
        //             observer.error(error)
        //         })

        // })


    }

    //mostly reuse hune function

    register(data: Users) {
        return this.http.post(this.url + "register", data, this.getOption())
        
    }
    getOption(){
        return {
            headers: new HttpHeaders({
                "Content-Type": "application/json"
            }),
        }
    }

}


/*summarize
services: injectable decorator defined class
services should be placed in providers section of module
services should be injected before using (constructor)
mostly services ar eused for making api call and handling most common methods

http client module is used to communicate in http protocal, and injected in imports section
httpclient will allow us to communicate using http method(get, put, post , del)
each method has its own syntax required arguments
example:
post reuuire url, body, headers

making an httpcall require one of result handling mechanism to be applied
http client always returns observable so result handling mechanism should be observables


CORS
although FE sends request to back end BE wont process the request if it is from different origin

CORS enable (easy way accept all request)
CORS are maintained in backend in third party error handling middleware

status code are very important when communication using http protocal
*/
