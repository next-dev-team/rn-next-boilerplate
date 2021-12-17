import { render } from '@testing-library/react-native';
import React from 'react';
import Button from '_app/components/Button';

describe('<Button />', () => {
  it('should match snapshot', () => {
    const rendered = render(<Button />).toJSON();
    expect(rendered).toMatchSnapshot();
  });
});
