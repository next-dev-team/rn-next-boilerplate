import { render } from '@testing-library/react-native';
import React from 'react';
import { Card } from '_app/components';

describe('<Card />', () => {
  it('should match snapshot', () => {
    const rendered = render(<Card />).toJSON();
    expect(rendered).toMatchSnapshot();
  });
});
