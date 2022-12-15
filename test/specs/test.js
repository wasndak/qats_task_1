const MainPage = require('../pageobjects/main.page')


const username = 'tech_task@qats.sk'
const password = '124lkjAF89as'
const title = "Test-" + new Date().getMinutes() + ":" + new Date().getMilliseconds() 

describe('Test 1 - Add post', () => {
    it('User logs into application', async () => {
        await MainPage.open()
        await MainPage.clickOnLogin()
        await MainPage.loginProcess(username, password)
    })
    it('User adds post', async() => {
        await MainPage.addPost(title, "about", "this is my text", "tags")
        await MainPage.verifyPost(title)
    })
    it('User logs out', async() => {
        await MainPage.logout()
    })
})
