import { Component, OnInit } from '@angular/core';
import { ShopFashionModule } from "../../../../common/models/shop-fashion-module"
import { ActivatedRoute } from '@angular/router';
import { ShopFashionService } from '../../../../common/service/shop-fashion-service';

@Component({
  selector: 'item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css'],
  providers: [ShopFashionModule]
})
export class ItemDetailComponent implements OnInit {
  // shopFashion: ShopFashionModule
  errorMessage: any
  id: string
  detail: string
  firstText: string
  endText: string = ""
  dateNow: number
  selectedOption: string
  shopFashionModule: ShopFashionModule;
  constructor(private route: ActivatedRoute,
    private _shopFashionService: ShopFashionService) {
    this.route.params.subscribe(res => this.id = res.id);
  }

  ngOnInit() {
    this.shopFashionModule = new ShopFashionModule()
    window.setInterval(() => { this.dateNow = Date.now() }, 10)
    this._shopFashionService.getShopProductById(this.id).subscribe(
      data => {
        this.shopFashionModule.id = data["id"];
        this.shopFashionModule.name = data["name"];
        this.shopFashionModule.title = data["title"];
        this.shopFashionModule.price = data["price"];
        this.shopFashionModule.quantity = 1
        this.shopFashionModule.quantityInStock = data["quantity"];
        this.shopFashionModule.avatar = data["avatar"];
        this.shopFashionModule.image = data["image"];
        this.detail = data["description"];
        var textArray = this.detail.split(".");
        var firstArray = textArray.splice(0, 3);
        this.firstText = firstArray[0] + ". " + firstArray[1] + ". " + firstArray[2] + ".";
        for (var index = 0; index < textArray.length-1; index++) {
          this.endText += textArray[index] + ".";
        }
      },
      error => {
        debugger;
        this.errorMessage = error
      },
    )
  }

  addShopFashion() {
    var isShopFashion = this._shopFashionService.checkShopFashshion(this.shopFashionModule)
    if (isShopFashion) {
        alert(this.shopFashionModule.name + " is exist.")
    }
    else {
      this._shopFashionService.addShopFashion(this.shopFashionModule);
    }
  }

}
