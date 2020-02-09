package com.example.angularbackend.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.IndexDirection;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection = "product")
public class Product {

	
	
		
		@Id
	    private String id;
	    @Indexed(unique = true, direction = IndexDirection.DESCENDING, dropDups = true)

	    private String productName;
	    
	
	    private Cuisine cuisine;
	    
	
	    private ProductCategory productCategory;
	    
	    private String productDescription;
	    
	    private Double productPrice;

		

		public String getId() {
			return id;
		}

		public void setId(String id) {
			this.id = id;
		}

		public String getProductName() {
			return productName;
		}

		public void setProductName(String productName) {
			this.productName = productName;
		}

		public Cuisine getCuisine() {
			return cuisine;
		}

		public void setCuisine(Cuisine cuisine) {
			this.cuisine = cuisine;
		}

		public ProductCategory getProductCategory() {
			return productCategory;
		}

		public void setProductCategory(ProductCategory productCategory) {
			this.productCategory = productCategory;
		}

		public String getProductDescription() {
			return productDescription;
		}

		public void setProductDescription(String productDescription) {
			this.productDescription = productDescription;
		}

		public Double getProductPrice() {
			return productPrice;
		}

		public void setProductPrice(Double productPrice) {
			this.productPrice = productPrice;
		}
	    
	    
		
	    
	
}
	

