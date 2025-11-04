const { test, expect } = require('@playwright/test');
const Base = require('../../page-obj/base');
const ProfilePage = require('../../page-obj/profile/profilePage');
const EditProfilePage = require('../../page-obj/profile/editProfilePage');
const AccountMenu = require('../../page-obj/header/accountMenu');

test.describe(`User profile page tests`, function () {
  let base;
  let accountMenu;
  let profilePage;
  let editProfilePage;

  test.beforeEach(async ({ page }) => {
    base = new Base(page);
    profilePage = new ProfilePage(page);
    editProfilePage = new EditProfilePage(page);
    accountMenu = new AccountMenu(page);

    await base.navigate(`https://www.imdb.com/`);
  });

  // test.describe(`Edit profile page tests`, function () {
  //   test(`Should check if username is changed`, async ({ page }) => {
  //     await accountMenu.openUserProfile();
  //     await profilePage.openEditProfilePage();
  //     const newUsername = `Ivan-666666`;
  //     await editProfilePage.changeUsername(newUsername);
  //     await editProfilePage.backToUserProfile();
  //     await expect(page).toHaveTitle(`${newUsername}'s Profile - IMDb`);
  //   });
  //   test(`Should check if user Bio is changed`, async ({ page }) => {
  //     await accountMenu.openUserProfile();
  //     await profilePage.openEditProfilePage();
  //     const newUserBio = `Playwright1`;
  //     await editProfilePage.changeUserBio(newUserBio);
  //     await editProfilePage.backToUserProfile();
  //     await expect(await profilePage.userBio).toHaveText(newUserBio);
  //   });

  //   test(`Should check if user photo is uploaded`, async ({ page }) => {
  //     await accountMenu.openUserProfile();
  //     await profilePage.openEditProfilePage();
  //     await editProfilePage.uploadUserProfileImage('D:\\JS\\picture.jpg');
  //     await expect(await profilePage.userProfileImage).toBe();
  //   });

  //   test(`Should check if user photo is deleted`, async ({ page }) => {
  //     await accountMenu.openUserProfile();
  //     await profilePage.openEditProfilePage();
  //     await editProfilePage.deleteUserProfileImage();
  //     await expect(await profilePage.noUserProfileImage).toBe();
  //   });
  // });
});
