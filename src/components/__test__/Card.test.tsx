import { render } from '@testing-library/react-native';
import { Card } from 'components';
import React from 'react';

describe('<Card />', () => {
  it('should match snapshot', () => {
    const rendered = render(<Card />).toJSON();
    expect(rendered).toMatchSnapshot();
  });
});
