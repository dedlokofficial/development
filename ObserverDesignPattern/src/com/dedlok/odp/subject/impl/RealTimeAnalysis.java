package com.dedlok.odp.subject.impl;

import java.util.ArrayList;
import java.util.List;

import com.dedlok.odp.observer.Observer;
import com.dedlok.odp.subject.RealTimeAnalysisInterface;

public class RealTimeAnalysis implements RealTimeAnalysisInterface{
	
	private List<Observer> observers;
	
	private double currentStockPrice;
	
	public void RealTimeAnalysis() {
		
		observers=new ArrayList<Observer>();
		
	}

	@Override
	public void registerObserver(Observer obs) {
		
		if(!observers.contains(obs)) {
			observers.add(obs);
		}
		
		
	}

	@Override
	public void notifyObserver() {
		
		for(Observer observer:observers)
			observer.update(this.currentStockPrice);
		
	}

	@Override
	public void removeObserver(Observer obs) {
		
		if(observers.contains(obs)) {
			observers.remove(obs);
		}
		
		
	}
	
	public void getCurrentData() {
		// Logic for get Current Data
		
		notifyObserver();
	}
	
	public void getStatisticsData() {
		// Logic for get Statistics Data
		notifyObserver();
	}
	
	
	public void getForeCastData() {
		// Logic for get ForeCast Data
		notifyObserver();
	}

}
