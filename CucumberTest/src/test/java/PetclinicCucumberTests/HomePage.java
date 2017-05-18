/**
 * 
 */
package PetclinicCucumberTests;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class HomePage {
	
	WebDriver driver;
	
	By finsOwnersPage = By.className("glyphicon-search");
	By findVetPage = By.cssSelector(".nav > li:nth-child(4) > a:nth-child(1) > span:nth-child(2)");
	public HomePage(WebDriver driver)
	{
	this.driver = driver;	
		
	}
	public void clickFindOwners()
	{
		driver.findElement(finsOwnersPage).click();
	}
	public void clickVetPage()
	{
		driver.findElement(findVetPage).click();
	}

}
