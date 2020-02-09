package com.dedlok.webflux.repository;

import org.springframework.data.mongodb.repository.ReactiveMongoRepository;

import com.dedlok.webflux.model.Product;

public interface ProductRepository extends ReactiveMongoRepository<Product, String> {

}
