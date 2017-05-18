$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri('PetclinicCucumberTests/Features/00HomePageLinks.feature');
formatter.feature({
  "line": 1,
  "name": "CheckHomePageLinks",
  "description": "",
  "id": "checkhomepagelinks",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Check the links on the home page",
  "description": "",
  "id": "checkhomepagelinks;check-the-links-on-the-home-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I have opened the browser and navigated to PetClinic application",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the Menu buttons should exist",
  "keyword": "Then "
});
formatter.match({
  "location": "petclinicCucumberTests.openBrowser()"
});
formatter.result({
  "duration": 2683398693,
  "status": "passed"
});
formatter.match({
  "location": "petclinicCucumberTests.CheckMenuLinks()"
});
formatter.result({
  "duration": 43579977,
  "status": "passed"
});
formatter.uri('PetclinicCucumberTests/Features/01FindOwners.feature');
formatter.feature({
  "line": 1,
  "name": "NavigatetoFindOwners",
  "description": "",
  "id": "navigatetofindowners",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Check the navigation to Find Owners Screen from Home Screen",
  "description": "",
  "id": "navigatetofindowners;check-the-navigation-to-find-owners-screen-from-home-screen",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I have opened the browser and navigated to PetClinic application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on Find Owners link",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the application should be navigated to the Find Owners screen",
  "keyword": "Then "
});
formatter.match({
  "location": "petclinicCucumberTests.openBrowser()"
});
formatter.result({
  "duration": 167985071,
  "status": "passed"
});
formatter.match({
  "location": "petclinicCucumberTests.ClickOnFindOwnersLink()"
});
formatter.result({
  "duration": 253223451,
  "status": "passed"
});
formatter.match({
  "location": "petclinicCucumberTests.CheckIfNavigatedToFindOwnersScreen()"
});
formatter.result({
  "duration": 26468489,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Find owner with last name",
  "description": "",
  "id": "navigatetofindowners;find-owner-with-last-name",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "I have opened the browser and navigated to PetClinic application",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I click on Find Owners link",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I enter the Lastname and click on Find Owners",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "it should take me to the specific Owner details",
  "keyword": "Then "
});
formatter.match({
  "location": "petclinicCucumberTests.openBrowser()"
});
formatter.result({
  "duration": 135275455,
  "status": "passed"
});
formatter.match({
  "location": "petclinicCucumberTests.ClickOnFindOwnersLink()"
});
formatter.result({
  "duration": 187703484,
  "status": "passed"
});
formatter.match({
  "location": "petclinicCucumberTests.IEnterLastNameAndCheck()"
});
formatter.result({
  "duration": 522268205,
  "status": "passed"
});
formatter.match({
  "location": "petclinicCucumberTests.ItShouldTakeMeToListSpecificOwner()"
});
formatter.result({
  "duration": 32109626,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Find all owners without entering last name",
  "description": "",
  "id": "navigatetofindowners;find-all-owners-without-entering-last-name",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 24,
  "name": "I have opened the browser and navigated to PetClinic application",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "I click on Find Owners link",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I do not enter the Lastname and click on Find Owners",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "it should take me to list of existing Owner details",
  "keyword": "Then "
});
formatter.match({
  "location": "petclinicCucumberTests.openBrowser()"
});
formatter.result({
  "duration": 118716747,
  "status": "passed"
});
formatter.match({
  "location": "petclinicCucumberTests.ClickOnFindOwnersLink()"
});
formatter.result({
  "duration": 165888715,
  "status": "passed"
});
formatter.match({
  "location": "petclinicCucumberTests.I_do_not_enter_the_Lastname_and_click_on_Find_Owners()"
});
formatter.result({
  "duration": 164884614,
  "status": "passed"
});
formatter.match({
  "location": "petclinicCucumberTests.ItShouldTakeMeToListOfAllOwners()"
});
formatter.result({
  "duration": 29167759,
  "status": "passed"
});
formatter.uri('PetclinicCucumberTests/Features/02AddOwners.feature');
formatter.feature({
  "line": 1,
  "name": "AddNewOwners",
  "description": "",
  "id": "addnewowners",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Check the addition of new owners",
  "description": "",
  "id": "addnewowners;check-the-addition-of-new-owners",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I have opened the browser and navigated to PetClinic application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on Find Owners link",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click on Add Owners Link",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I add new owners and click on Add Owner",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I see the new owner added",
  "keyword": "Then "
});
formatter.match({
  "location": "petclinicCucumberTests.openBrowser()"
});
formatter.result({
  "duration": 114963244,
  "status": "passed"
});
formatter.match({
  "location": "petclinicCucumberTests.ClickOnFindOwnersLink()"
});
formatter.result({
  "duration": 145323089,
  "status": "passed"
});
formatter.match({
  "location": "petclinicCucumberTests.IClickOnAddOwnersLink()"
});
formatter.result({
  "duration": 190262703,
  "status": "passed"
});
formatter.match({
  "location": "petclinicCucumberTests.IAddNewOwner()"
});
formatter.result({
  "duration": 477983843,
  "status": "passed"
});
formatter.match({
  "location": "petclinicCucumberTests.ISeeTheNewOwnerAdded()"
});
formatter.result({
  "duration": 30959384,
  "status": "passed"
});
formatter.uri('PetclinicCucumberTests/Features/03AddPets.feature');
formatter.feature({
  "line": 1,
  "name": "AddNewPetsToOwners",
  "description": "",
  "id": "addnewpetstoowners",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Check the addition of new Pets to existing Owners",
  "description": "",
  "id": "addnewpetstoowners;check-the-addition-of-new-pets-to-existing-owners",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@closeBrowser"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I have opened the browser and navigated to PetClinic application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on Find Owners link",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter the Lastname and click on Find Owners",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "it should take me to the specific Owner details",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I click on Add Pets",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I enter new Pet values",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I should see the Pet attached to the owner",
  "keyword": "Then "
});
formatter.match({
  "location": "petclinicCucumberTests.openBrowser()"
});
formatter.result({
  "duration": 109524568,
  "status": "passed"
});
formatter.match({
  "location": "petclinicCucumberTests.ClickOnFindOwnersLink()"
});
formatter.result({
  "duration": 151440238,
  "status": "passed"
});
formatter.match({
  "location": "petclinicCucumberTests.IEnterLastNameAndCheck()"
});
formatter.result({
  "duration": 203460151,
  "status": "passed"
});
formatter.match({
  "location": "petclinicCucumberTests.ItShouldTakeMeToListSpecificOwner()"
});
formatter.result({
  "duration": 27942365,
  "status": "passed"
});
formatter.match({
  "location": "petclinicCucumberTests.IClickOnAddPets()"
});
formatter.result({
  "duration": 3210464373,
  "status": "passed"
});
formatter.match({
  "location": "petclinicCucumberTests.IEnterNewPetValues()"
});
formatter.result({
  "duration": 323779281,
  "status": "passed"
});
formatter.match({
  "location": "petclinicCucumberTests.IShouldSeeThePetAttachedToTheOwner()"
});
formatter.result({
  "duration": 6037028741,
  "status": "passed"
});
});