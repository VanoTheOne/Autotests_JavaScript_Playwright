const { test, expect } = require('@playwright/test');
const Base = require('../../page-obj/base');
const Header = require('../../page-obj/header/header');
const WatchlistPage = require('../../page-obj/watchlist/watchlistPage');

test.describe(`Watchlist tests`, function () {
  let base;
  let header;
  let watchlistPage;

  test.beforeEach(async ({ page }) => {
    base = new Base(page);
    header = new Header(page);
    watchlistPage = new WatchlistPage(page);

    await base.navigate(`https://www.imdb.com/`);
  });

  test.describe(`Watchlist page tests`, function () {
    test(`Should check if new item is added to watchlist`, async ({ page }) => {
      await header.openWatchlist();
      await watchlistPage.addMovieToWatchlist();
      await header.openWatchlist();
      await base.reloadPage();
      await expect(watchlistPage.watchlistFirstItem).toContainText('Blade Runner 2049');
    });

    test(`Should check if item is deleted from watchlist`, async ({ page }) => {
      await header.openWatchlist();
      await watchlistPage.removeMovieFromWatchlist();
      await header.openWatchlist();
      await base.reloadPage();
      await expect(watchlistPage.watchlistFirstItem).not.toBeAttached();
    });
  });
});
