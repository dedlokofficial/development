import { Component, OnInit } from "@angular/core";
import {
  RstaurantService,
  Product,
  Cuisine,
  ProductCategory
} from "../service/rstaurant.service";
@Component({
  selector: "app-product-by-cuisine",
  templateUrl: "./product-by-cuisine.component.html",
  styleUrls: ["./product-by-cuisine.component.scss"]
})
export class ProductByCuisineComponent implements OnInit {
  cuisine: Cuisine[];
  product: Product[];
  newCuisine: Cuisine = new Cuisine();
  constructor(private restaurantService: RstaurantService) {}

  onclick(i: number) {
    alert(i);

    this.restaurantService
      .getProductsByCuisine(this.cuisine[i])
      .subscribe(data => {
        this.product = data.result;
        alert(this.product.length);
      });
  }
  ngOnInit() {
    this.restaurantService.getCuisine().subscribe(data => {
      this.cuisine = data;
    });
  }
}
