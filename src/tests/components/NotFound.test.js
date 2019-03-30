import React from 'react';
import { shallow } from 'enzyme';

import NotFound from '../../components/NotFound/NotFound';

test('should render NotFound component', () => {
  const wrapper = shallow(<NotFound />);
  expect(wrapper).toMatchSnapshot();
});