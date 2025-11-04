const { test, expect } = require('@playwright/test');
const Base = require('../page-obj/base');
const Header = require('../page-obj/header/header');
const AccountMenu = require('../page-obj/header/accountMenu');
const Search = require('../page-obj/search');
const MoviePage = require('../page-obj/moviePage');
const WatchlistPage = require('../page-obj/watchlistPage');

test.describe(`Watchlist tests`, function () {
  let base;
  let header;
  let accountMenu;
  let search;
  let moviePage;
  let watchlistPage;

  test.beforeEach(async ({ page }) => {
    base = new Base(page);
    header = new Header(page);
    accountMenu = new AccountMenu(page);
    search = new Search(page);
    moviePage = new MoviePage(page);
    watchlistPage = new WatchlistPage(page);

    await base.navigate(`https://www.imdb.com/`);
  });

  test.describe(`Watchlist tests`, function () {
    test(`Should check if movie is added and removed from wishlist`, async ({ page }) => {
      const movieTitle = `Black Phone 2`;
      await search.searchMovie(movieTitle);
      await search.openFirstFoundedMovie();
      await moviePage.addMovieToWatchlist();
      await header.openWatchlist();
      await expect(await watchlistPage.watchlist).toContainText(`1. ${movieTitle}`);
      await watchlistPage.removeMovieFromWatchlist();
      await base.reloadPage();
      await expect(await watchlistPage.watchlist).not.toBe();
    });
  });
});
