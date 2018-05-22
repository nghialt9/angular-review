import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { ShopFashion } from '../models/shop-fashion-module';

@Injectable()
export class ShopFashionService {
    baseUrl: string = 'https://0313c372.ngrok.io/api/ShopProduct/'

    constructor(private _http: Http) { }

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
            { headers: this.getContentHeaders()});
        return this._http.post(this.baseUrl + 'AddShopProduct', customer, options)
            .map((response: Response) => response.json())
            .catch(this._errorHandler)
    }

    editShopProduct(customer) {
        let options = new RequestOptions(
            { headers: this.getContentHeaders()});
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