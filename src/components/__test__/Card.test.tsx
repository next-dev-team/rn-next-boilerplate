import { Card } from '@/components';
import { render } from '@testing-library/react-native';
import React from 'react';

describe('<Card />', () => {
  it('should match snapshot', () => {
    const rendered = render(<Card />).toJSON();
    expect(rendered).toMatchSnapshot();
  });
});
