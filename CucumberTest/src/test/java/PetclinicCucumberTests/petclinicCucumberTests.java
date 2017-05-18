package PetclinicCucumberTests;

import java.io.FileInputStream;
import java.io.InputStream;
import java.util.Properties;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import PetclinicCucumberTests.AddEditPetPage;
import PetclinicCucumberTests.AdditionalOwnerDetails;

import PetclinicCucumberTests.AddOwnersPage;

import PetclinicCucumberTests.FindOwnersPage;

import PetclinicCucumberTests.HomePage;

import cucumber.annotation.en.Given;
import cucumber.annotation.en.Then;
import cucumber.annotation.en.When;
import cucumber.annotation.After;
import cucumber.annotation.Before;

public class petclinicCucumberTests {
	static WebDriver driver;
	Properties prop = new Properties();
	static AdditionalOwnerDetails addnOwnerDetails;

	@Before
	public void beforeAll() {

	}

	@After("@closeBrowser")
	public void afterFeature() {
		driver.close();

	}

	@Given("^I have opened the browser and navigated to PetClinic application$")
	public void openBrowser() {

		InputStream input = null;

		try {

			input = new FileInputStream("application.properties");

			prop.load(input);

			System.setProperty("webdriver.chrome.driver", prop.getProperty("chromedriver"));
			if (driver == null) {
				driver = new ChromeDriver();
				
			}
			driver.navigate().to(prop.getProperty("serverURL"));
		} catch (Exception ex) {

		}

	}

	@Then("^the Menu buttons should exist$")
	public void CheckMenuLinks() {
		if (driver.findElement(By.cssSelector(".active > a:nth-child(1)")).isDisplayed()) {
			System.out.println("All Home Menu links found");
		} else {
			System.out.println("Home does not have any menus");
		}
	}

	@When("^I click on Find Owners link$")
	public void ClickOnFindOwnersLink() {
		HomePage clickFindOwners = new HomePage(driver);
		clickFindOwners.clickFindOwners();

	}

	@Then("^the application should be navigated to the Find Owners screen$")
	public void CheckIfNavigatedToFindOwnersScreen() {
		if (driver.findElement(By.cssSelector(".form-control")).isDisplayed()) {
			System.out.println("Last name Text box is available");
		} else {
			System.out.println("Can not spot the last name text box");
		}

	}
	

	@When("^I do not enter the Lastname and click on Find Owners$")
	public void I_do_not_enter_the_Lastname_and_click_on_Find_Owners() {
		FindOwnersPage ownersPage = new FindOwnersPage(driver);

		ownersPage.clickFindOwner();

	}
	
	@Then("^it should take me to list of existing Owner details$")
	public void ItShouldTakeMeToListOfAllOwners() {
		if (driver.findElement(By.id("vets")).isDisplayed()) {
			System.out.println("List of owners displayed");
		} else {
			System.out.println("List unaivalable");
		}

	}
	
	@When("^I enter the Lastname and click on Find Owners$")
	public void IEnterLastNameAndCheck() {
		FindOwnersPage ownersPage = new FindOwnersPage(driver);
		ownersPage.enterLastName();
		ownersPage.clickFindOwner();

	}
	
	@Then("^it should take me to the specific Owner details$")
	public void ItShouldTakeMeToListSpecificOwner() {
		if (driver.findElement(By.cssSelector("table.table:nth-child(2) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(2) > b:nth-child(1)")).getText().equals("Sridurga Kalyanaraman")) {
			System.out.println("Specific Owner fetching Successful");
		} 
		else {
			System.out.println("Specific Owner fetching Failed");
		}

	}
	
	@When("^I click on Add Owners Link$")
	public void IClickOnAddOwnersLink() {
		FindOwnersPage ownersPage = new FindOwnersPage(driver);
		ownersPage.clickAddOwner();

	}
	
	
	@When("^I add new owners and click on Add Owner$")
	public void IAddNewOwner() {
		
		AddOwnersPage newOwnersPage = new AddOwnersPage(driver);

		newOwnersPage.enterValues(false);
		newOwnersPage.submitNewOwner();
	}
	@When("^I see the new owner added$")
	public void ISeeTheNewOwnerAdded() {
		if (driver.findElement(By.cssSelector("table.table:nth-child(2) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(2) > b:nth-child(1)")).getText().equals("Thomas Edison")) {
			System.out.println("Adding new owner Successful");
		} 
		else {
			System.out.println("Adding new owner Failed");
		}

	}
	
	
	@Then("^I click on Add Pets$")
	public void IClickOnAddPets() throws InterruptedException {
		addnOwnerDetails = new AdditionalOwnerDetails(driver);
		addnOwnerDetails.addNewPet();
		Thread.sleep(3000);

	}

	@Then("^I should see the Pet attached to the owner$") 
	public void IShouldSeeThePetAttachedToTheOwner() throws InterruptedException {
		Thread.sleep(3000);
		if (driver.findElement(By.linkText("Edit Pet")).isDisplayed()){
			System.out.println("Adding new Pet Successful");
		}
		else {
			System.out.println("Adding new Pet Failed");
		}
		Thread.sleep(3000);
	}
	
	@When("^I enter new Pet values$")
	public void IEnterNewPetValues() throws InterruptedException {
		AddEditPetPage addNewPet = new AddEditPetPage(driver);
		addNewPet.enterPetDetails(false);
		addNewPet.clickUpdatePet();

	}

}