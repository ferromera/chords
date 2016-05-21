import { ChordsPage } from './app.po';

describe('chords App', function() {
  let page: ChordsPage;

  beforeEach(() => {
    page = new ChordsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('chords works!');
  });
});
