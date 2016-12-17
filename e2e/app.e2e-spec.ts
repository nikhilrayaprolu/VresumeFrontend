import { VresPage } from './app.po';

describe('vres App', function() {
  let page: VresPage;

  beforeEach(() => {
    page = new VresPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
