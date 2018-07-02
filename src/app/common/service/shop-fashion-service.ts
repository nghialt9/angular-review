import { Injectable, Input } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ShopFashionModule } from '../models/shop-fashion-module'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class ShopFashionService {
    baseUrl: string = 'http://localhost:64104/api/ShopProduct/'

    shopFashionModule: ShopFashionModule[] = [];

    constructor(private _http: Http) { }

    addShopFashion(shopFashion) {
        this.shopFashionModule.push(shopFashion)
    }

    checkShopFashshion(shopFashion) {
        var isShopFashion: boolean
        this.shopFashionModule.forEach(element => {
            if (element["name"] == shopFashion["name"]) {
                return isShopFashion = true;
            }
        });
        return isShopFashion
    }

    deleteShopFashion(index: number) {
        this.shopFashionModule.splice(index, 1)
    }

    getLengthShopFashion() {
        var num: number = 0;
        this.shopFashionModule.forEach(element => {
            num += element.quantity;
        });
        return num;
    }

    incrementQty(index: number) {

        this.shopFashionModule[index].quantity += 1;
    }

    decrementQty(index: number) {
        if (this.shopFashionModule[index].quantity > 1) {
            this.shopFashionModule[index].quantity -= 1;
        }
    }

    getShopProducts() {
        return this._http.get(this.baseUrl + 'getShopProducts')
            .map((response: Response) => response.json())
            .catch(this._errorHandler);
    }

    _errorHandler(error: Response) {
        debugger;
        console.log(error);
        return Observable.throw(error || "Internal server error");
    }

    // add a method in customer.service.ts file like this:  
    getShopProductById(id) {
        return this._http.get(this.baseUrl + "GetShopProductById/" + id)
            .map((response: Response) => response.json())
            .catch(this._errorHandler)
    }

    addShopProduct(customer) {
        let options = new RequestOptions(
            { headers: this.getContentHeaders() });
        return this._http.post(this.baseUrl + 'AddShopProduct', customer, options)
            .map((response: Response) => response.json())
            .catch(this._errorHandler)
    }

    editShopProduct(customer) {
        let options = new RequestOptions(
            { headers: this.getContentHeaders() });
        return this._http.post(this.baseUrl + 'EditShopProduct', customer, options)
            .map((response: Response) => response.json())
            .catch(this._errorHandler)
    }

    deleteCustomer(id) {
        return this._http.delete(this.baseUrl + "DeleteShopProduct/" + id)
            .map((response: Response) => response.json())
            .catch(this._errorHandler)
    }

    getContentHeaders() {
        const contentHeaders = new Headers();
        contentHeaders.append('Content-Type', 'application/json');
        contentHeaders.append('Accept', 'application/json');

        contentHeaders.append('Access-Control-Allow-Origin', this.baseUrl);
        contentHeaders.append('Access-Control-Allow-Credentials', 'true');

        contentHeaders.append('Access-Control-Allow-Methods', 'OPTIONS');
        contentHeaders.append('Access-Control-Allow-Methods', 'PUT');
        contentHeaders.append('Access-Control-Allow-Methods', 'POST');
        contentHeaders.append('Access-Control-Allow-Methods', 'GET');
        contentHeaders.append('Access-Control-Allow-Methods', 'DELETE');
        return contentHeaders;
    }

}