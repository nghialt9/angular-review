import { Routes, RouterModule } from '@angular/router'
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { ItemListComponent } from './view/shops/shop-fashion/item-list/item-list.component';
import { LoginComponent } from './view/components/login/login.component';
import { ShopFashionComponent } from './view/shops/shop-fashion/shop-fashion.component';
import { ShopFashionRoutingngModule } from './view/shops/shop-fashion/shop-fashion-routing.module';
import { ItemDetailComponent } from './view/shops/shop-fashion/item-detail/item-detail.component';

const routesConfig: Routes = [
    { path: '', redirectTo: '/item-list', pathMatch: 'full' },
    { path: 'item-list', component: ItemListComponent },
]

@NgModule({
    declarations: [
        ItemListComponent,
        ShopFashionComponent,
        ItemListComponent,
        ItemDetailComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        ShopFashionRoutingngModule,
        RouterModule.forRoot(routesConfig),
        CommonModule
    ],
    exports: [RouterModule]
})

export class AppRoutingngModule { }