package com.example.angularbackend.repositories;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.angularbackend.models.Cuisine;
import com.example.angularbackend.models.Product;
import com.example.angularbackend.models.ProductCategory;


public interface ProductRepository extends MongoRepository<Product, String> {
	
	List<Product> findByCuisine(Cuisine cuisine);
	
	List<Product> findByProductCategory(ProductCategory productCategory);

}
