const Base = require('../page-obj/base');

class MoviePage extends Base {
  constructor(page) {
    super(page);
  }

  get addToWatchlistButton() {
    return this.page.locator('//section[@data-testid="hero-parent"]//button[@data-testid="tm-box-wl-button"]');
  }

  async addMovieToWatchlist() {
    await this.page.waitForTimeout(2000);
    await this.addToWatchlistButton.click();
  }
}

module.exports = MoviePage;
