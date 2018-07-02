import { Component, OnInit } from '@angular/core';
import { ShopFashionService } from '../../../../common/service/shop-fashion-service';

@Component({
  selector: 'item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent implements OnInit {
  shopFashion: any;
  check: boolean;
  constructor(private _shopFashionModule: ShopFashionService) { }
  ngOnInit() {
     this.loadInit();
  }

  onDelete(index: number){
    this._shopFashionModule.deleteShopFashion(index)
    this.check = (this._shopFashionModule.shopFashionModule.length == 0)? true: false;
  }

  loadInit(){
    this.check = (this._shopFashionModule.shopFashionModule.length == 0)? true: false;
    this.shopFashion = this._shopFashionModule.shopFashionModule;  
  }

  incrementQty(index:number){
    this._shopFashionModule.incrementQty(index);
}

decrementQty(index:number){
    this._shopFashionModule.decrementQty(index);
}

}
