Feature: AddNewPetsToOwners
@closeBrowser
Scenario: Check the addition of new Pets to existing Owners

Given I have opened the browser and navigated to PetClinic application 

When I click on Find Owners link

When I enter the Lastname and click on Find Owners

Then it should take me to the specific Owner details

Then I click on Add Pets

When I enter new Pet values

Then I should see the Pet attached to the owner