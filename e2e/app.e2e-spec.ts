import { KillerAppPage } from './app.po';

describe('killer-app App', function() {
  let page: KillerAppPage;

  beforeEach(() => {
    page = new KillerAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
