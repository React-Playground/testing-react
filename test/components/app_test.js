import { renderComponent, expect } from '../test_helper.js';
import App from '../../src/components/app.js';

//use describe to group together similiar test 
describe('App', () => {

  //use 'it' to test a single attribute of target
  it('shows the corrent text', () =>  {

    //create an instance of an app
    const component = renderComponent(App);

    // use 'expect' to make an assetion about a target
    expect(component).to.contain('React simple starter');

  });

});

