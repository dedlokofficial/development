import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { RstaurantService } from "../service/rstaurant.service";
import { Data } from "../HardCodedData/Data";
@Component({
  selector: "app-admin-edit-item",
  templateUrl: "./admin-edit-item.component.html",
  styleUrls: ["./admin-edit-item.component.scss"]
})
export class AdminEditItemComponent implements OnInit {
  newDATA: Data = new Data();
  data: Data[];

  constructor(private restaurantService: RstaurantService) {}

  onClick(ctrl: NgForm) {
    console.log(ctrl.valid);
  }

  ngOnInit() {}
}
