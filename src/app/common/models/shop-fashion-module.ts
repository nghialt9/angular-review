import { Injectable } from '@angular/core';

@Injectable()
export class ShopFashionModule {
    constructor(
    public id: string = '',
    public name: string = '',
    public title: string = '',
    //public description: string = '',
    public quantityInStock: number = 0,
    public quantity: number = 0,
    public price: number = 0,
    //public style: string = '',
    public image: string = '',
    public avatar: string = '',
    ){}
  }