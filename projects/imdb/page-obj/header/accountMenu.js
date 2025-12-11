const Base = require('../base');

class AccountMenu extends Base {
  constructor(page) {
    super(page);
  }

  get accountMenuButton() {
    return this.page.locator('#imdbHeader label.navbar__user-menu-toggle__button');
  }

  async openUserProfile() {
    await this.accountMenuButton.click();
    await this.page.getByRole('menuitem', { name: 'Your profile' }).click();
  }

  async openUserWatchlist() {
    await this.accountMenuButton.click();
    await this.page.getByRole('menuitem', { name: 'Your Watchlist' }).click();
  }

  async openUserRatings() {
    await this.accountMenuButton.click();
    await this.page.getByRole('menuitem', { name: 'Your ratings' }).click();
  }

  async openUserLists() {
    await this.accountMenuButton.click();
    await this.page.getByRole('menuitem', { name: 'Your lists' }).click();
  }

  async openUserInterests() {
    await this.accountMenuButton.click();
    await this.page.getByRole('menuitem', { name: 'Your interests' }).click();
  }

  async openUserWatchHistory() {
    await this.accountMenuButton.click();
    await this.page.getByRole('menuitem', { name: 'Your watch history' }).click();
  }

  async openUserAccountSettings() {
    await this.accountMenuButton.click();
    await this.page.getByRole('menuitem', { name: 'Account settings' }).click();
  }

  async signOut() {
    await this.accountMenuButton.click();
    await this.page.getByRole('menuitem', { name: 'Sign out' }).click();
  }
}

module.exports = AccountMenu;
