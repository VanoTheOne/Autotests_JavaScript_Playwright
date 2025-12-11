const Base = require('../page-obj/base');

class Search extends Base {
  constructor(page) {
    super(page);
  }

  get searchInput() {
    return this.page.locator('//div[@id="suggestion-search-container"]//input[@type="text"]');
  }

  get searchButton() {
    return this.page.locator('//nav[@id="imdbHeader"]//button[@id="suggestion-search-button"]');
  }

  get searchResult() {
    return this.page.locator('[data-testid="find-results-section-title"] li').first();
  }

  get searchFilterContainer() {
    return this.page.locator('//div[@id="suggestion-search-container"]//label[@data-testid="category-selector-button"]');
  }

  get searchFilterTitles() {
    return this.page.locator('//form[@id="nav-search-form"]//div[@class="sc-da2a787a-1 dbwWEz"]//span[contains (text(), "Titles")]');
  }

  get firstFoundedMovie() {
    return this.page.locator('//section[@data-testid="find-results-section-title"]//li').first();
  }

  async searchMovie(movieTitle) {
    await this.searchInput.click();
    await this.searchInput.fill(movieTitle);
    await this.searchButton.click();
  }

  async openSearchFilter() {
    await this.searchFilterContainer.click();
  }

  async openFirstFoundedMovie() {
    await this.page.waitForTimeout(2000);
    await this.firstFoundedMovie.click();
  }
}

module.exports = Search;
