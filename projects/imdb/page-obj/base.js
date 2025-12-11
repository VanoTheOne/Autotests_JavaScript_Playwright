const { browser } = require('node:test');

class Base {
  constructor(page) {
    this.page = page;
  }

  async navigate(url) {
    await this.page.goto(url);
  }

  async reloadPage() {
    await this.page.reload();
  }

  async click() {
    await this.page.click();
  }
}

module.exports = Base;
