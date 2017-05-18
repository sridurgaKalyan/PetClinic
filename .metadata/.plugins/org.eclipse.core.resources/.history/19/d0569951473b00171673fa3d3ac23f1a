package com.PetClinic.Pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class AdditionalOwnerDetails {
	
	WebDriver driver;
	public Boolean isPet;
	
	
	By addNewPet = By.linkText("Add New Pet");
	By editOwner = By.linkText("Edit Owner");
	By editPet;
	By addNewVisit;
	
	public Boolean isPetAvailable;
	
	
	public void DoesOwnerHavePet()
	{
		try{
		isPetAvailable = driver.findElement(By.linkText("Edit Pet")).isEnabled();
				//driver.findElement(By.linkText("Edit Pet")).isDisplayed();
		if(isPetAvailable){
			editPet = By.linkText("Edit Pet");
			addNewVisit = By.linkText("Add Visit");
		}
		}
		catch(Exception ex)
		{
			
		}
		
	}
	
	
	public AdditionalOwnerDetails(WebDriver driver)
	{
		this.driver = driver;
	}

		public void addNewPet()
		{
			driver.findElement(addNewPet).click();
		}
		
		public void editOwner()
		{
			driver.findElement(editOwner).click();
		}
		public void editPet()
		{
			this.DoesOwnerHavePet();
			if(isPetAvailable){
			driver.findElement(editPet).click();
			}
			
		}
		public void addNewVisit(){
			
			this.DoesOwnerHavePet();
			if(isPetAvailable){
			driver.findElement(addNewVisit).click();
			}
		}
}
