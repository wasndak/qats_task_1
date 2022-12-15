const Page = require('./page');

class MainPage extends Page {

    get menuHomeBtn () {
        return $('=Home')
    }

    get menuNewPostBtn () {
        return $('.ion-compose')
    }

    get menuSettingsBtn () {
        return $('.ion-gear-a')
    }

    get loginBtn () {
        return $('=Sign in')
    }

    get inputUsername () {
        return $('input[type="email"]');
    }

    get inputPassword () {
        return $('input[type="password"]');
    }

    get btnLoginSubmit () {
        return $('button[type="submit"]');
    }

    get yourFeed () {
        return $('=Your Feed')
    }

    async clickOnLogin () {
        await this.loginBtn.click();
    }

    async loginProcess (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnLoginSubmit.click();
        await expect(this.yourFeed).toBeDisplayed();
    }

    async addPost (title, about, text, tags) {
        await this.menuNewPostBtn.click();

        let fields = await $$('[type=text]')
        await fields[0].setValue(title);
        await fields[1].setValue(about);
        await fields[2].setValue(tags);
        await $('[rows="8"]').setValue(text)
        await $('button[type="button"]').click();
        await browser.pause(3000)
    }

    async verifyPost (expectedTitle) {
        await this.menuHomeBtn.click();
        await $('=Global Feed').click();
        // let test = await $('h1=' + expectedTitle)

        await browser.pause(5000)
    }

    async logout () {
        await this.menuSettingsBtn.click();
        await $('button[class="btn btn-outline-danger"]').click();
    }

    open () {
        return super.open('');
    }
}

module.exports = new MainPage();
