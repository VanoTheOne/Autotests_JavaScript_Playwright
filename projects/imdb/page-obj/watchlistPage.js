const Base = require('../page-obj/base');

class WatchlistPage extends Base {
  constructor(page) {
    super(page);
  }

  get watchlist() {
    return this.page.locator('//div[@data-testid="list-page-mc-list-content"]//h3').first();
  }

  get removeMovieFromWatchlistButton() {
    return this.page.locator('//div[@data-testid="poster-watchlist-ribbon-remove"]');
  }

  async removeMovieFromWatchlist() {
    await this.page.waitForTimeout(2000);
    await this.removeMovieFromWatchlistButton.click();
  }
}

module.exports = WatchlistPage;
