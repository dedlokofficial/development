package com.dedlok.odp.subject;

import com.dedlok.odp.observer.Observer;

public interface RealTimeAnalysisInterface {
	
	public void registerObserver(Observer obs);
	
	public void notifyObserver();
	
	public void removeObserver(Observer obs);
	

}
