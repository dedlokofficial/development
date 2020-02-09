package com.example.angularbackend.repositories;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.angularbackend.models.ProductCategory;


public interface ProductCategoryRepository extends MongoRepository<ProductCategory, String>  {
	
	ProductCategory findByCategoryName(String categoryName);

}
