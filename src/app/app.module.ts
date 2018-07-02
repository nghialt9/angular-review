import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { AdminComponent } from "./view/admin/admin.component";
import { ShopsComponent } from "./view/shops/shops.component";
import { HeaderTopComponent } from "./view/components/header-top/header-top.component";
import { FooterTopComponent } from "./view/components/footer-top/footer-top.component";
import { LoginComponent } from "./view/components/login/login.component";
import { AppRoutingngModule } from './app-routing.module';
import { ShopFashionService } from "./common/service/shop-fashion-service";

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    ShopsComponent,
    HeaderTopComponent,
    FooterTopComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingngModule
  ],
  providers: [ShopFashionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
