import { Component, OnInit } from "@angular/core";
import {
  RstaurantService,
  Product,
  Cuisine,
  ProductCategory
} from "../service/rstaurant.service";
@Component({
  selector: "app-product-by-category",
  templateUrl: "./product-by-category.component.html",
  styleUrls: ["./product-by-category.component.scss"]
})
export class ProductByCategoryComponent implements OnInit {
  productCategory: ProductCategory[];
  product: Product[];
  newProductCategory: ProductCategory = new ProductCategory();
  constructor(private restaurantService: RstaurantService) {}

  onclick(i: number) {
    alert(i);

    this.restaurantService
      .getProductsByCategory(this.productCategory[i])
      .subscribe(data => {
        this.product = data.result;
        alert(this.product.length);
      });
  }
  ngOnInit() {
    this.restaurantService.getProductCategory().subscribe(data => {
      this.productCategory = data;
    });
  }
}
