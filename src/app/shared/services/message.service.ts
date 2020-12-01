import { Injectable } from "@angular/core";
import { ToastrService } from 'ngx-toastr';





@Injectable()

export class MsgServices {


    constructor(public toastr: ToastrService) {


    }
    showSuccess(str: string) {
        this.toastr.success(str);
    }
    showInfo(str: string) {
        this.toastr.info(str);
    }
    showWarning(str: string) {
        this.toastr.warning(str)
    }
    showError(err: any){
        if(err.error){
            this.toastr.error(err.error.message)
        }
        //check what comes in error, parse it and show approptiate message
        //this will act as error handling menthod
    }
}