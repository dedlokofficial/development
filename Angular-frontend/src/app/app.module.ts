import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MaterialModule } from "./material/material/material.module";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AdminAddItemComponent } from "./admin-add-item/admin-add-item.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { AdminEditItemComponent } from "./admin-edit-item/admin-edit-item.component";
import { HomeComponent } from "./home/home.component";
import { AddCategoryComponent } from "./add-category/add-category.component";
import { AddCuisineComponent } from "./add-cuisine/add-cuisine.component";
import { AdminDashBordComponent } from "./admin-dash-bord/admin-dash-bord.component";
import { ReactiveFormsModule } from "@angular/forms";
import { ViewProductComponent } from './view-product/view-product.component';
import { ProductByCuisineComponent } from './product-by-cuisine/product-by-cuisine.component';
import { ProductByCategoryComponent } from './product-by-category/product-by-category.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminAddItemComponent,
    AdminEditItemComponent,
    HomeComponent,
    AddCategoryComponent,
    AddCuisineComponent,
    AdminDashBordComponent,
    ViewProductComponent,
    ProductByCuisineComponent,
    ProductByCategoryComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
