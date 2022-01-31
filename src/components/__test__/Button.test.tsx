import Button from '@/components/Button';
import { render } from '@testing-library/react-native';
import React from 'react';

describe('<Button />', () => {
  it('should match snapshot', () => {
    const rendered = render(<Button />).toJSON();
    expect(rendered).toMatchSnapshot();
  });
});
