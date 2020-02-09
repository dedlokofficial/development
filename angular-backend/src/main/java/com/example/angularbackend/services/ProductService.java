package com.example.angularbackend.services;

import java.util.Arrays;
import java.util.HashSet;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.angularbackend.models.Cuisine;
import com.example.angularbackend.models.Product;
import com.example.angularbackend.models.ProductCategory;
import com.example.angularbackend.models.Role;
import com.example.angularbackend.models.User;
import com.example.angularbackend.repositories.CuisineRepository;
import com.example.angularbackend.repositories.ProductCategoryRepository;
import com.example.angularbackend.repositories.ProductRepository;


@Service
public class ProductService {

	@Autowired
    private ProductRepository productRepository;

    @Autowired
    private ProductCategoryRepository productCategoryRepository;
    
    
    @Autowired
    private CuisineRepository cuisineRepository;
    
    public void saveProduct(Product product) {
        
        Cuisine cuisine = cuisineRepository.findByName(product.getCuisine().getName());
        product.setCuisine(cuisine);
        
        ProductCategory productCategory=productCategoryRepository.findByCategoryName(product.getProductCategory().getCategoryName());
        product.setProductCategory(productCategory);
        
        productRepository.save(product);
    }
    
    
  public void saveProductCategory(ProductCategory productCategory) {
      
        
        productCategoryRepository.save(productCategory);
    }
  
  
  public void saveCuisine(Cuisine cuisine) {
      
      
	  cuisineRepository.save(cuisine);
  }
	
  public List<Product> getProducts() {
      
      
      return productRepository.findAll();
  }
  
  
 public List<Product> getProductsByCuisine(Cuisine cuisine) {
      
	  cuisine = cuisineRepository.findByName(cuisine.getName());
      return productRepository.findByCuisine(cuisine);
  }
 
 
 public List<Product> getProductsByCategory(ProductCategory productCategory) {
     
	 productCategory = productCategoryRepository.findByCategoryName(productCategory.getCategoryName());
     return productRepository.findByProductCategory(productCategory);
 }
 
 public List<Cuisine> getAllCuisine(){
	 return cuisineRepository.findAll();
 }
 
 
 public List<ProductCategory> getAllProductCategory(){
	 return productCategoryRepository.findAll();
 }
	
	
}
