module.exports = class Page {

    open (path) {
        return browser.url(`https://react-redux.realworld.io/${path}`)
    }
}
