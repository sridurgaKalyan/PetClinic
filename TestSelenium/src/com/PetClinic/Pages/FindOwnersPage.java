package com.PetClinic.Pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class FindOwnersPage {
	
	WebDriver driver;
	
	By lastName = By.name("lastName");
	//reason why i have used XPath is the element does not hve name or id
	By findOwner = By.tagName("form");

	By addOwner = By.linkText("Add Owner");
	
	
	public FindOwnersPage(WebDriver driver)
	{
		this.driver = driver;
		
	}
	public void enterLastName()
	{
		driver.findElement(lastName).sendKeys("Kalyanaraman");
		
	}
	public void clickFindOwner()
	{
		driver.findElement(findOwner).submit();
	}
	public void clickAddOwner()
	{
		driver.findElement(addOwner).click();
	}

}
