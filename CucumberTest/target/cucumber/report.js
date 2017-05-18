$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri('PetclinicCucumberTests/00HomePageLinks.feature');
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
  "duration": 2134844432,
  "status": "passed"
});
formatter.match({
  "location": "petclinicCucumberTests.CheckMenuLinks()"
});
formatter.result({
  "duration": 36950521,
  "status": "passed"
});
formatter.uri('PetclinicCucumberTests/01FindOwners.feature');
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
  "duration": 101561177,
  "status": "passed"
});
formatter.match({
  "location": "petclinicCucumberTests.ClickOnFindOwnersLink()"
});
formatter.result({
  "duration": 148903577,
  "status": "passed"
});
formatter.match({
  "location": "petclinicCucumberTests.CheckIfNavigatedToFindOwnersScreen()"
});
formatter.result({
  "duration": 29851007,
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
  "duration": 89338429,
  "status": "passed"
});
formatter.match({
  "location": "petclinicCucumberTests.ClickOnFindOwnersLink()"
});
formatter.result({
  "duration": 133893579,
  "status": "passed"
});
formatter.match({
  "location": "petclinicCucumberTests.IEnterLastNameAndCheck()"
});
formatter.result({
  "duration": 227325854,
  "status": "passed"
});
formatter.match({
  "location": "petclinicCucumberTests.ItShouldTakeMeToListSpecificOwner()"
});
formatter.result({
  "duration": 35216000,
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
  "duration": 86656092,
  "status": "passed"
});
formatter.match({
  "location": "petclinicCucumberTests.ClickOnFindOwnersLink()"
});
formatter.result({
  "duration": 133110468,
  "status": "passed"
});
formatter.match({
  "location": "petclinicCucumberTests.I_do_not_enter_the_Lastname_and_click_on_Find_Owners()"
});
formatter.result({
  "duration": 134649244,
  "status": "passed"
});
formatter.match({
  "location": "petclinicCucumberTests.ItShouldTakeMeToListOfAllOwners()"
});
formatter.result({
  "duration": 27215382,
  "status": "passed"
});
formatter.uri('PetclinicCucumberTests/02AddOwners.feature');
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
  "duration": 98570395,
  "status": "passed"
});
formatter.match({
  "location": "petclinicCucumberTests.ClickOnFindOwnersLink()"
});
formatter.result({
  "duration": 141912161,
  "status": "passed"
});
formatter.match({
  "location": "petclinicCucumberTests.IClickOnAddOwnersLink()"
});
formatter.result({
  "duration": 152817409,
  "status": "passed"
});
formatter.match({
  "location": "petclinicCucumberTests.IAddNewOwner()"
});
formatter.result({
  "duration": 427771689,
  "status": "passed"
});
formatter.match({
  "location": "petclinicCucumberTests.ISeeTheNewOwnerAdded()"
});
formatter.result({
  "duration": 25148000,
  "status": "passed"
});
formatter.uri('PetclinicCucumberTests/03AddPets.feature');
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
  "duration": 92962975,
  "status": "passed"
});
formatter.match({
  "location": "petclinicCucumberTests.ClickOnFindOwnersLink()"
});
formatter.result({
  "duration": 141260511,
  "status": "passed"
});
formatter.match({
  "location": "petclinicCucumberTests.IEnterLastNameAndCheck()"
});
formatter.result({
  "duration": 183641827,
  "status": "passed"
});
formatter.match({
  "location": "petclinicCucumberTests.ItShouldTakeMeToListSpecificOwner()"
});
formatter.result({
  "duration": 23449811,
  "status": "passed"
});
formatter.match({
  "location": "petclinicCucumberTests.IClickOnAddPets()"
});
formatter.result({
  "duration": 3164997953,
  "status": "passed"
});
formatter.match({
  "location": "petclinicCucumberTests.IEnterNewPetValues()"
});
formatter.result({
  "duration": 313107027,
  "status": "passed"
});
formatter.match({
  "location": "petclinicCucumberTests.IShouldSeeThePetAttachedToTheOwner()"
});
formatter.result({
  "duration": 6040954544,
  "status": "passed"
});
});