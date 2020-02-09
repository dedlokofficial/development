import { Component, OnInit } from "@angular/core";
import { RstaurantService, Product } from "../service/rstaurant.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-view-product",
  templateUrl: "./view-product.component.html",
  styleUrls: ["./view-product.component.scss"]
})
export class ViewProductComponent implements OnInit {
  products: Product[];

  constructor(private restaurantService: RstaurantService) {}

  showProducts() {
    this.restaurantService.getProducts().subscribe(data => {
      this.products = data.result;
    });
  }

  ngOnInit() {}
}
