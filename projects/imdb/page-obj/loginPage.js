const Base = require('./base');
const Header = require('../page-obj/header/header');
const { login, password } = require('../helpers/env');
const { test, expect } = require('@playwright/test');

class LoginPage extends Base {
  constructor(page) {
    super(page);

    this.header = new Header(page);
  }

  get signInWithIMDbButton() {
    return this.page.locator('//div[@class="display-button-container"]//a[@data-testid="sign_in_option_IMDB"]');
  }

  get emailInputField() {
    return this.page.locator('//div[@class="a-box"]//input[@type="email"]');
  }

  get passwordInputField() {
    return this.page.locator('//div[@class="a-box"]//input[@type="password"]');
  }

  get signInButton() {
    return this.page.locator('//div[@class="a-box"]//input[@id="signInSubmit"]');
  }

  get signInToExistingAccountButton() {
    return this.page.locator('//div[@data-testid="sign_in_container"]//button[@data-testid="navigate_to_sign_in_button"]');
  }

  async logInUser(page) {
    await this.navigate('https://www.imdb.com/');
    await this.header.signInButton.click();
    await this.page.waitForTimeout(2000);
    await this.signInToExistingAccountButton.click();
    await this.signInWithIMDbButton.click();
    await this.emailInputField.fill(login);
    await this.passwordInputField.fill(password);
    await this.signInButton.click();
    // await page.pause();
    await expect(page).toHaveTitle(`IMDb: Ratings, Reviews, and Where to Watch the Best Movies & TV Shows`);
  }
}

module.exports = LoginPage;
