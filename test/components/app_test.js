import { renderComponent, expect } from '../test_helper.js';
import App from '../../src/components/app.js';

//use describe to group together similiar test 
describe('App', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  })

  it('shows a comment box', () => {
    expect(component.find('.comment-box')).to.exist;
  });

});

