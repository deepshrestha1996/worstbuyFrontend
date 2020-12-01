export class Users {
    username: string;
    password: string;
    name: string;
    phoneNumber: Number;
    email: String;
    gender: string;
    address: string;
    dob: string;

    constructor(details: any) {
        this.username = details.username || "";
        this.password = details.password || "";
        this.name = details.name || "";
        this.phoneNumber = details.phoneNumber || 0;
        this.email = details.email || "";
        this.gender = details.gender || "";
        this.address = details.address || "";
        this.dob= details.dob || "";
    }

}