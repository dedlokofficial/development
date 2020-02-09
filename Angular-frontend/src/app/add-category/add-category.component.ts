import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import {
  RstaurantService,
  ProductCategory
} from "../service/rstaurant.service";
@Component({
  selector: "app-add-category",
  templateUrl: "./add-category.component.html",
  styleUrls: ["./add-category.component.scss"]
})
export class AddCategoryComponent implements OnInit {
  newProductCategory: ProductCategory = new ProductCategory();
  productCategory: ProductCategory[];

  constructor(private restaurantService: RstaurantService) {}

  handleSuccessfulResponse(response) {
    this.productCategory = response;
  }

  AddingForm(addCategoryForm: NgForm): void {
    alert("Category Added");
  }

  onclick() {
    console.log(this.newProductCategory);
    // User data which we have received from the registration form.
    this.restaurantService
      .ProductCategoryPost(this.newProductCategory)
      .subscribe(repose => {
        this.handleSuccessfulResponse(repose);
      });
  }

  ngOnInit() {}
}
