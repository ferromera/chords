export class ChordsPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('chords-app h1')).getText();
  }
}
