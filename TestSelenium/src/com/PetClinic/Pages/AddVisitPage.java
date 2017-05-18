package com.PetClinic.Pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class AddVisitPage {
	
	WebDriver driver;
	
	By visitDate = By.id("date");
	By visitDesc = By.id("description");
	By addVisit = By.tagName("form");
	public void enterVisitDetails(){
		
		driver.findElement(visitDesc).sendKeys("`test visit data");
	}
	public void clickAddVisit(){
		driver.findElement(addVisit).submit();
	}
	
	
	public AddVisitPage(WebDriver driver){
		this.driver = driver;
	}

}
