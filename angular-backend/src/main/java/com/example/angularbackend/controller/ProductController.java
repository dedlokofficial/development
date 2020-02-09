package com.example.angularbackend.controller;

import static org.springframework.http.ResponseEntity.ok;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.angularbackend.models.Cuisine;
import com.example.angularbackend.models.Product;
import com.example.angularbackend.models.ProductCategory;
import com.example.angularbackend.models.User;
import com.example.angularbackend.services.ProductService;
import com.example.angularbackend.util.ApiResponse;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/products")
public class ProductController {

	@Autowired
	ProductService productService;

	@SuppressWarnings("rawtypes")
	@PostMapping("/addProduct")
	public ResponseEntity addProduct(@RequestBody Product product) {

		productService.saveProduct(product);
		Map<Object, Object> model = new HashMap<>();
		model.put("message", "Product Added successfully");
		return ok(model);
	}

	@SuppressWarnings("rawtypes")
	@PostMapping("/addProductCategory")
	public ResponseEntity addProductCategory(@RequestBody ProductCategory productCategory) {

		productService.saveProductCategory(productCategory);
		Map<Object, Object> model = new HashMap<>();
		model.put("message", "ProductCategory Added successfully");
		return ok(model);
	}

	@SuppressWarnings("rawtypes")
	@PostMapping("/addCuisine")
	public ResponseEntity addCuisine(@RequestBody String[] schoolbag) {

		List<String> integerList = Arrays.asList(schoolbag);

		for (String s : integerList) {
			Cuisine cuisine = new Cuisine();
			cuisine.setName(s);
			productService.saveCuisine(cuisine);
		}

		Map<Object, Object> model = new HashMap<>();
		model.put("message", "Cuisine Added successfully");
		return ok(model);
	}
	
	
	@GetMapping("/getProducts")
    public ApiResponse getProducts(){
        return new ApiResponse(HttpStatus.OK.value(), "Product list fetched successfully.",productService.getProducts());
    }
	
	@PostMapping("/getProductsByCuisine")
    public ApiResponse getProductsByCuisine(@RequestBody Cuisine cuisine){
		
        return new ApiResponse(HttpStatus.OK.value(), "Product list fetched successfully.",productService.getProductsByCuisine(cuisine));
    }
	
	@PostMapping("/getProductsByCategory")
    public ApiResponse getProductsByCategory(@RequestBody ProductCategory productCategory){
        return new ApiResponse(HttpStatus.OK.value(), "Product list fetched successfully.",productService.getProductsByCategory(productCategory));
    }
	
	@GetMapping("/getAllCuisine")
    public List<Cuisine> getAllCuisine(){
      return productService.getAllCuisine();
    }
	
	@GetMapping("/getAllProductCategory")
    public List<ProductCategory> getAllProductCategory(){
        return productService.getAllProductCategory();
    }



}
