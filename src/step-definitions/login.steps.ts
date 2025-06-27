import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { CustomWorld } from "../support/world";

const LOGIN_URL = "https://the-internet.herokuapp.com/login";

Given("I am on the login page", async function (this: CustomWorld) {
  await this.page.goto(LOGIN_URL);
});

When("I login with valid username {string} and password {string}", async function (this: CustomWorld, username, password) {
  await this.page.fill("#username", username);
  await this.page.fill("#password", password);
  await this.page.click("button[type='submit']");
});

Then("I should see the secure area page", async function (this: CustomWorld) {
  await expect(this.page.locator("h2")).toHaveText("Secure Area");
});

Then('I should see the Logout button', async function (this: CustomWorld)  {
  await expect(this.page.locator("//*[text()=' Logout']")).toBeVisible()
})

When('I login with invalid username {string} and password {string}', async function ( this: CustomWorld,  username, password) {
  await this.page.fill("#username", username);
  await this.page.fill("#password", password);
  await this.page.click("button[type='submit']");
})

Then('I should not see the Logout button', async function(this: CustomWorld) {
  await expect(this.page.locator("//*[text()=' Logout']")).not.toBeVisible();
})

Given('I am on the main page of test website', async function(this: CustomWorld) {
  await this.page.goto('https://the-internet.herokuapp.com/');
  await expect(this.page.locator('//h2')).toHaveText('Available Examples');
})

When('I click on AddRemove Elements {string}', async function(this: CustomWorld, addRemoveLink) {
  await this.page.locator(`//a[text()="${addRemoveLink}"]`).click();
})

Then('I Should see Add Element {string}', async function(this: CustomWorld, addElement) {
  await expect(this.page.locator(`//*[text()="${addElement}"]`)).toBeVisible();
})

When('I click on Add Element {string}', async function(this: CustomWorld, addElement) {
  await this.page.locator(`//*[text()="${addElement}"]`).click();
})

Then('I should see Delete button {string}', async function(this: CustomWorld, deleteButton) {
  await expect(this.page.locator(`//*[text()="${deleteButton}"]`)).toBeVisible();
})

When('I click on Delete button {string}', async function(this: CustomWorld, deleteButton) {
  await this.page.locator(`//*[text()="${deleteButton}"]`).click();
})


