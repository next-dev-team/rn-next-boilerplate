import { render } from '@testing-library/react-native';
import Button from 'components/Button';
import React from 'react';

describe('<Button />', () => {
  it('should match snapshot', () => {
    const rendered = render(<Button />).toJSON();
    expect(rendered).toMatchSnapshot();
  });
});
