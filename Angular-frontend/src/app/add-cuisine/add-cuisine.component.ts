import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { RstaurantService, Cuisine } from "../service/rstaurant.service";
import {
  FormBuilder,
  FormGroup,
  FormArray,
  FormControl,
  ValidatorFn
} from "@angular/forms";
@Component({
  selector: "app-add-cuisine",
  templateUrl: "./add-cuisine.component.html",
  styleUrls: ["./add-cuisine.component.scss"]
})
export class AddCuisineComponent implements OnInit {
  newCuisine: Cuisine = new Cuisine();
  cuisine: [];
  form: FormGroup;
  cuisineData = [
    { name: "Chinese" },
    { name: "Indian" },
    { name: "Continental" },
    { name: "Japanese" }
  ];

  constructor(
    private restaurantService: RstaurantService,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      cuisines: new FormArray([])
    });

    this.addCheckboxes();
  }

  private addCheckboxes() {
    this.cuisineData.forEach((o, i) => {
      const control = new FormControl(i === 0); // if first item set to true, else false
      (this.form.controls.cuisines as FormArray).push(control);
    });
  }
  handleSuccessfulResponse(response) {
    this.cuisine = response;
  }
  AddingForm(addCuisineForm: NgForm): void {
    alert("Cuisine Added");
  }
  submit() {
    const selectedOrderIds = this.form.value.cuisines
      .map((v, i) => (v ? this.cuisineData[i].name : null))
      .filter(v => v !== null);
    console.log(selectedOrderIds);
    console.log(this.newCuisine);
    // User data which we have received from the registration form.
    this.restaurantService.CuisinePost(selectedOrderIds).subscribe(repose => {
      // console.log(repose);
      this.handleSuccessfulResponse(repose);
    });
  }

  // onclick() {
  //   console.log(this.newCuisine);
  //   // User data which we have received from the registration form.
  //   this.restaurantService.CuisinePost(this.newCuisine).subscribe(repose => {
  //     // console.log(repose);
  //     this.handleSuccessfulResponse(repose);
  //   });
  // }

  ngOnInit() {}
}
