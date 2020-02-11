package com.dedlok.webflux.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.dedlok.webflux.model.Product;
import com.dedlok.webflux.repository.ProductRepository;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping("/products")
public class ProductController {
	
	@Autowired
	ProductRepository productRepository;
	
	@GetMapping
    public Flux<Product> getProducts(){
        return productRepository.findAll();
    }
	
	
	@GetMapping("{id}")
    public Mono<ResponseEntity<Product>> getProduct(@PathVariable String id){
        return productRepository.findById(id)
                .map(ResponseEntity::ok)
                .defaultIfEmpty(ResponseEntity.notFound().build());
    }
	
	
	@PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Mono<Product> saveProduct(@RequestBody Product product){
        return productRepository.save(product);
    }

    @PutMapping("{id}")
    public Mono<ResponseEntity<Product>> updateProduct(@PathVariable(value = "id") String id, @RequestBody Product product){
        return productRepository.findById(id)
                .flatMap(existingProduct -> {
                	existingProduct.setProductName(product.getProductName());
                    return productRepository.save(existingProduct);
                })
                .map(ResponseEntity::ok)
                .defaultIfEmpty(ResponseEntity.notFound().build());
    }

    @DeleteMapping("{id}")
    public Mono<ResponseEntity<Void>> deleteProduct(@PathVariable(value = "id") String id){
        return productRepository.findById(id)
                .flatMap(existingProduct ->
                productRepository.delete(existingProduct)
                            .then(Mono.just(ResponseEntity.ok().<Void>build()))
                )
                .defaultIfEmpty(ResponseEntity.notFound().build());
    }

    @DeleteMapping
    public Mono<Void> deleteAllProducts(){
        return productRepository.deleteAll();
    }

}
