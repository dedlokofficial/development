package com.example.angularbackend.util;

import java.util.List;

import com.example.angularbackend.models.Product;

public class ApiResponse {
   
	private int status;
    private String message;
    private List<Product> result;

    public ApiResponse(int status, String message, List<Product> result) {
        this.status = status;
        this.message = message;
        this.result = result;
    }

	public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public List<Product> getResult() {
		return result;
	}

	public void setResult(List<Product> result) {
		this.result = result;
	}

	
    
    
}
