export class Product {
    name: string


    constructor(options: any) {
        for (let key in options) {
            this[key] = options[key] || ""
        }
    }
}