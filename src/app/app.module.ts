import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";


import { AppComponent } from "./app.component";
import { AdminComponent } from "./view/admin/admin.component";
import { ShopsComponent } from "./view/shops/shops.component";
import { HeaderTopComponent } from "./view/components/header-top/header-top.component";
import { FooterTopComponent } from "./view/components/footer-top/footer-top.component";
import { LoginComponent } from "./view/components/login/login.component";
import { ShopFashionComponent } from "./view/shops/shop-fashion/shop-fashion.component";
import { ItemListComponent } from "./view/shops/shop-fashion/item-list/item-list.component";


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    ShopsComponent,
    HeaderTopComponent,
    FooterTopComponent,
    LoginComponent,
    ShopFashionComponent,
    ItemListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
