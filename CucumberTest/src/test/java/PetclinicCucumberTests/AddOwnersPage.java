package PetclinicCucumberTests;


import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class AddOwnersPage {
	
	WebDriver driver;
	
	public String strFName = "Thomas";
	public String strLName = "Edison";
	public String strAddr = "90";
	public String strCity = "Northampton";
	public String strNum = "01234567890";
	
	By FName = By.id("firstName");
	By LName = By.id("lastName");
	By Address = By.id("address");
	By City = By.id("city");
	By Tel = By.id("telephone");
	By NewOwner = By.tagName("form");

	
	public AddOwnersPage(WebDriver driver)
	{
		this.driver = driver;
	}
	public void PopulateAddOwnersData()
	{
		
	}
	public void enterValues(Boolean isEdit)
	{
		if(isEdit){
			List<WebElement> list = driver.findElements(By.className("form-control"));
		    for(WebElement el : list){
		    	
		    	el.clear();
		    }
		}
		//driver.findElement(FName).clear();
		driver.findElement(FName).sendKeys(strFName);
		driver.findElement(LName).sendKeys(strLName);
		driver.findElement(Address).sendKeys(strAddr);
		driver.findElement(City).sendKeys(strCity);	
		driver.findElement(Tel).sendKeys(strNum);
	}
	public void submitNewOwner()
	{
		driver.findElement(NewOwner).submit();
	}
	

}
