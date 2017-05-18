package PetclinicCucumberTests;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class AddEditPetPage {
	
	WebDriver driver;
	
	public String pName = "Tommy";
	public String pBirthDate = "2016/09/10";
	public String pType = "dog";
	
	By petName = By.id("name");
	By birthDate = By.id("birthDate");
	By petType = By.id("type");
	By petUpdate = By.tagName("form");
	
	public AddEditPetPage(WebDriver driver)
	{
		this.driver = driver;
	}

	
	public void enterPetDetails(Boolean isEdit)
	{
		if(isEdit){
			List<WebElement> list = driver.findElements(By.className("form-control"));
		    for(WebElement el : list){
		    	
		    	el.clear();
		    }
		}
		
		driver.findElement(petName).sendKeys(pName);
		driver.findElement(birthDate).sendKeys(pBirthDate);
		driver.findElement(petType).sendKeys(pType);
	}
	public void clickUpdatePet()
	{
		driver.findElement(petUpdate).submit();
	}
}
