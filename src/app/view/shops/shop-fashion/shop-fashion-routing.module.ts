import { Routes, RouterModule } from '@angular/router'
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { ItemListComponent } from './item-list/item-list.component';
import { ShopFashionComponent } from './shop-fashion.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';

const routesConfig: Routes = [
    {
        path: 'shop-fashion',
        component: ShopFashionComponent,
        children:[
            {
                path: '',
                component: ItemListComponent,
                pathMatch: 'full'
            },
            {
                path: ':id',
                component: ItemDetailComponent
            }
        ]
        },
]

@NgModule({
    declarations: [

    ],
    imports: [
        CommonModule,
        BrowserModule,
        HttpModule,
        RouterModule.forChild(routesConfig)      
    ],
    exports: [RouterModule]
})

export class ShopFashionRoutingngModule {}