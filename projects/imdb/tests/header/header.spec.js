const { test, expect } = require('@playwright/test');
const Base = require('../../page-obj/base');
const Header = require('../../page-obj/header/header');
const Search = require('../../page-obj/search');

test.describe(`Header tests`, function () {
  let base;
  let header;
  let search;

  test.beforeEach(async ({ page }) => {
    base = new Base(page);
    header = new Header(page);
    search = new Search(page);

    await base.navigate(`https://www.imdb.com/`);
  });

  // test.describe(`Header smoke tests`, function () {
  //   test(`Should check the transition to the user's watchlist page`, async ({ page }) => {
  //     await header.openWatchlist();
  //     await expect(page).toHaveTitle(`Your Watchlist`);
  //   });
  //   test(`Should check the needed movie is founded`, async ({ page }) => {
  //     const movieTitle = `Blade Runner`;
  //     await search.searchMovie(movieTitle);
  //     await expect(await search.searchResult).toContainText(movieTitle);
  //   });
  //   test(`Should check if search filter is applyed`, async ({ page }) => {
  //     await search.openSearchFilter();
  //     await search.searchFilterTitles.click();
  //     await expect(await search.searchFilterContainer).toHaveText(`Titles`);
  //   });
  //   test(`Should check if menu opens and closes`, async ({ page }) => {
  //     await header.openMenu();
  //     await header.closeMenu();
  //     await expect(await search.searchInput).toBeVisible();
  //   });
  // });
});
