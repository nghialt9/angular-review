import { Component, OnInit } from '@angular/core';
import { ShopFashionService } from '../../../common/service/shop-fashion-service';

@Component({
  selector: 'header-top',
  templateUrl: './header-top.component.html',
  styleUrls:['./header-top.component.css']
})
export class HeaderTopComponent implements OnInit {
  totalQty: number;
  constructor(private _shopFashionService: ShopFashionService) { }

  ngOnInit() {
    window.setInterval(() => { this.totalQty = this._shopFashionService.getLengthShopFashion(); }, 10)
  }

}
