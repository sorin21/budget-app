import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({
  // new instance of adapter
  adapter: new Adapter()
})