package com.example.angularbackend.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.angularbackend.models.Role;



public interface RoleRepository extends MongoRepository<Role, String> {
	
	Role findByRole(String role);

}
