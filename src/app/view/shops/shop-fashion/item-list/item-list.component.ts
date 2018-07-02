import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { ShopFashionService } from '../../../../common/service/shop-fashion-service'
import { Router } from "@angular/router";
import { ShopFashionModule } from "../../../../common/models/shop-fashion-module";

@Component({
  selector: "item-list",
  templateUrl: "./item-list.component.html",
  styleUrls: ['./item-list.component.css'],
})
export class ItemListComponent implements OnInit {
  shopFashions: Observable<any[]>;
  shopFashionModule: ShopFashionModule;
  isShopFashion: boolean;
  shopFashion: any[];
  constructor(private _shopFashionService: ShopFashionService, private router: Router) { }

  ngOnInit() {
    this.getShops()
  }

  getShops() {
    this.shopFashions = this._shopFashionService.getShopProducts();
  }

  addShopFashion(id: string) {
    this._shopFashionService.getShopProductById(id).subscribe(
      data => {
        this.shopFashionModule = new ShopFashionModule();
        this.shopFashionModule.id = data["id"];
        this.shopFashionModule.name = data["name"];
        this.shopFashionModule.title = data["title"];
        this.shopFashionModule.price = data["price"];
        this.shopFashionModule.quantity = 1;
        this.shopFashionModule.quantityInStock = data["quantity"];
        this.shopFashionModule.avatar = data["avatar"];
        this.shopFashionModule.image = data["image"];
        this.isShopFashion = this._shopFashionService.checkShopFashshion(this.shopFashionModule);
        if (this.isShopFashion) {
          alert(this.shopFashionModule.name + " is exist.");
        }
        else {
          this._shopFashionService.addShopFashion(this.shopFashionModule);
          if (confirm("The " + this.shopFashionModule.name + " added in to cart.\n There are "+ this._shopFashionService.getLengthShopFashion() +" product(s) in cart \n Click OK to go to cart")) {
            this.router.navigate(['/item-card']);
          }
        }
      }
    );
  }
}
