import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import ReactShallowRenderer from 'react-test-renderer/shallow';

// import '../setupTests';
import Header from '../../components/Header/Header';

// enzyme-to-json convert Enzyme wrappers to a format compatible 
// with Jest snapshot testing.
test('should render Header component', () => {
  const wrapper = shallow(<Header />);
  expect(toJSON(wrapper)).toMatchSnapshot();
  // expect(wrapper.find('h1').text()).toBe('Income and expenses')
  // const renderer = new ReactShallowRenderer;
  // renderer.render(<Header />);
  // expect(renderer.getRenderOutput()).toMatchSnapshot()
  // console.log(renderer.getRenderOutput())
});