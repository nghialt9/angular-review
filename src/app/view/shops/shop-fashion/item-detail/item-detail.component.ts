import { Component, OnInit } from '@angular/core';
import { ShopFashion } from "../../../../common/models/shop-fashion-module"

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  shopFashion : any
  constructor(private _shopFashion: ShopFashion) { }

  ngOnInit() {
    this.shopFashion = this._shopFashion;
  }

}
