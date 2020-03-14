package com.dedlok.odp.observer.impl;

import com.dedlok.odp.observer.Observer;
import com.dedlok.odp.subject.RealTimeAnalysisInterface;

public class CurrentStockPriceDisplay implements Observer {
	
	private RealTimeAnalysisInterface subject;
	private double currentStockPrice;
	
	

	public CurrentStockPriceDisplay(RealTimeAnalysisInterface subject) {
		this.subject = subject;
		subject.registerObserver(this);
	}



	@Override
	public void update(Double currentStockPrice) {
		// TODO Auto-generated method stub
		this.currentStockPrice=currentStockPrice;
		display(); 
	}
	
	public void display() {
		// Logic for displaying Data
		
		System.out.println("The current stock price of scrip ABC is"+this.currentStockPrice);
	}

}
