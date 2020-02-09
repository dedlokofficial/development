package com.example.angularbackend.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.angularbackend.models.Cuisine;


public interface CuisineRepository extends MongoRepository<Cuisine, String>  {
	
	Cuisine findByName(String name);

}
