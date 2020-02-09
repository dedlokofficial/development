import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminAddItemComponent } from "./admin-add-item/admin-add-item.component";
import { AdminEditItemComponent } from "./admin-edit-item/admin-edit-item.component";
import { HomeComponent } from "./home/home.component";
import { AdminDashBordComponent } from "./admin-dash-bord/admin-dash-bord.component";
import { AddCuisineComponent } from "./add-cuisine/add-cuisine.component";
import { AddCategoryComponent } from "./add-category/add-category.component";
import { ViewProductComponent } from "./view-product/view-product.component";
import { ProductByCuisineComponent } from "./product-by-cuisine/product-by-cuisine.component";
import { ProductByCategoryComponent } from "./product-by-category/product-by-category.component";

const routes: Routes = [
  { path: "Ad_Add", component: AdminAddItemComponent },
  { path: "Ad_Edit", component: AdminEditItemComponent },
  { path: "", component: HomeComponent },
  { path: "Ad_Cuisine", component: AddCuisineComponent },
  { path: "Ad_Category", component: AddCategoryComponent },
  { path: "Admin_Dashboard", component: AdminDashBordComponent },
  { path: "ProductByCuisine", component: ProductByCuisineComponent },
  { path: "ProductByCategory", component: ProductByCategoryComponent },
  { path: "viewProduct", component: ViewProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
