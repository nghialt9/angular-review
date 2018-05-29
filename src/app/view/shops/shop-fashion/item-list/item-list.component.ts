import { Component, OnInit } from "@angular/core";
import { ShopFashion } from "../../../../common/models/shop-fashion-module"
import { Observable } from "rxjs/Observable";
import { ShopFashionService } from '../../../../common/service/shop-fashion-service'

@Component({
  selector: "item-list",
  templateUrl: "./item-list.component.html"
})
export class ItemListComponent implements OnInit {
  shopFashions: Observable<any[]>;
  shopModel:Observable<any[]>;
  constructor(private _shopFashionService: ShopFashionService) { }

  ngOnInit() {
    this.getShops()
  }

  
  getShops() {
    this.shopFashions = this._shopFashionService.getShopProducts();
    // this._shopFashionService.getShopProducts().subscribe(
    //   data => this.shopFashions = data,
    //   error => { debugger;
    //     this.errorMessage = error
    //   }
    // )
  }

  addModel(id:string): Observable<ShopFashion[]>{
    return this.shopFashions.map(shoes => shoes.find(shoe => shoe.id === id));
  }
}
