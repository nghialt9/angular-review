import { Routes, RouterModule } from '@angular/router'
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { ItemListComponent } from './view/shops/shop-fashion/item-list/item-list.component';
import { LoginComponent } from './view/components/login/login.component';
import { ShopFashionRoutingngModule } from './view/shops/shop-fashion/shop-fashion-routing.module';
import { ItemCardComponent } from './view/shops/shop-fashion/item-card/item-card.component';

const routesConfig: Routes = [
    { path: '', redirectTo: '/item-list', pathMatch: 'full' },
    { path: 'item-list', component: ItemListComponent },
    { path: 'item-card', component: ItemCardComponent }
]

@NgModule({
    declarations: [
        ItemListComponent,
        ItemCardComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        ShopFashionRoutingngModule,
        RouterModule.forRoot(routesConfig),
        CommonModule
    ],
    exports: [RouterModule]
})

export class AppRoutingngModule { }