import { Component, OnInit } from "@angular/core";
import {
  RstaurantService,
  Product,
  Cuisine,
  ProductCategory
} from "../service/rstaurant.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-admin-add-item",
  templateUrl: "./admin-add-item.component.html",
  styleUrls: ["./admin-add-item.component.scss"]
})
export class AdminAddItemComponent implements OnInit {
  newProduct: Product = new Product();
  product: Product[];
  cuisine: Cuisine[];
  productCategory: ProductCategory[];

  constructor(private restaurantService: RstaurantService) {}

  handleSuccessfulResponse(response) {
    this.product = response;
  }

  AddingForm(adminAddProductForm: NgForm): void {
    alert("Item Added");
  }

  onclick() {
    console.log(this.newProduct);
    // User data which we have received from the registration form.
    this.restaurantService.ProductPost(this.newProduct).subscribe(repose => {
      // console.log(repose);
      this.handleSuccessfulResponse(repose);
    });
  }

  // abc(sb) {
  //   this.newProduct.productCategory.categoryName = sb;
  // }

  ngOnInit() {
    this.restaurantService.getCuisine().subscribe(data => {
      this.cuisine = data;
    });
    this.restaurantService.getProductCategory().subscribe(data => {
      this.productCategory = data;
    });
  }
}
