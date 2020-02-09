import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
// import { Data } from "../HardCodedData/Data";

export class Product {
  productName: string;
  productDescription: string;
  productPrice: number;
  cuisine: Cuisine = new Cuisine();
  productCategory: ProductCategory = new ProductCategory();

  constructor() {}
}

// export const DATA = new Data();
export class Cuisine {
  name: string;
}
export class ProductCategory {
  categoryName: string;
}

export class ApiResponse {
  status: Number;
  message: string;
  result: Product[];
}

@Injectable({
  providedIn: "root"
})
export class RstaurantService {
  dataUrl: string = "../HardCodedData/Data";

  constructor(private httpClient: HttpClient) {}

  public ProductPost(obj) {
    return this.httpClient.post<Product>(
      "http://localhost:8080/api/products/addProduct",
      obj
    );
  }
  public ProductCategoryPost(obj) {
    return this.httpClient.post<ProductCategory>(
      "http://localhost:8080/api/products/addProductCategory",
      obj
    );
  }
  public CuisinePost(obj) {
    return this.httpClient.post(
      "http://localhost:8080/api/products/addCuisine",
      obj
    );
  }

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  public getProducts(): Observable<ApiResponse> {
    return this.httpClient.get<ApiResponse>(
      "http://localhost:8080/api/products/getProducts"
    );
  }

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  public getProductsByCuisine(obj): Observable<ApiResponse> {
    return this.httpClient.post<ApiResponse>(
      "http://localhost:8080/api/products/getProductsByCuisine",
      obj
    );
  }
  public getProductsByCategory(obj): Observable<ApiResponse> {
    return this.httpClient.post<ApiResponse>(
      "http://localhost:8080/api/products/getProductsByCuisine",
      obj
    );
  }

  // get Category For Fetching Category Array >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  public getCuisine(): Observable<Cuisine[]> {
    return this.httpClient.get<Cuisine[]>(
      "http://localhost:8080/api/products/getAllCuisine"
    );
  }
  public getProductCategory(): Observable<ProductCategory[]> {
    return this.httpClient.get<ProductCategory[]>(
      "http://localhost:8080/api/products/getAllProductCategory"
    );
  }
}
