import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import 'rxjs/add/operator/map';
import { Product } from "./product";
import { Order,OrderItem } from "./order";


@Injectable()
export class DataService {
    constructor(private http: HttpClient) { }

    private token: string = "";
    private tokenExpiration: Date;

    public order: Order = new Order();
    public products: Product[] = [];

    loadProducts(): Observable<boolean> {
        return this.http.get("/api/products")
            .map((data: any[]) => {
                this.products = data;
                return true;
            });
    } 

    login(creds): Observable<boolean> {
        return this.http
            .post("/api/auth/token", creds)
            .map((data: any) => {
                    this.token = data.token;
                    this.tokenExpiration = data.expiration;
                    return true;
             });
    }

    public get loginRequired(): boolean {
        return this.token.length == 0 || this.tokenExpiration > new Date();
    }

    public AddToOrder(newProduct: Product) {

        var item: OrderItem = this.order.items.find(i => i.productId == newProduct.id);
        if (item) {
            item.quantity++;
        } else {
            item = new OrderItem();
            item.productId = newProduct.id;
            item.productArtist = newProduct.artist;
            item.productArtId = newProduct.artId;
            item.productCategory = newProduct.category;
            item.productSize = newProduct.size;
            item.productTitle = newProduct.title;
            item.unitPrice = newProduct.price;
            item.quantity = 1;

            this.order.items.push(item);
        }

    }
}