import { CusBox } from 'components';
import React from 'react';
import 'react-native';
import { render } from 'test/test-utils';
import { colorsTheme } from 'themes';

describe('<CusBox />', () => {
  it('should match snapshot', () => {
    const rendered = render(<CusBox />).toJSON();
    expect(rendered).toMatchSnapshot();
  });

  it('should render bg fgSubdued', () => {
    const rendered = render(<CusBox testID="CusBox" bg="fgSubdued" alignItems="center" />);
    const textComponent = rendered.getByTestId('CusBox');

    expect(textComponent.props.style).toEqual([
      { backgroundColor: colorsTheme.fgSubdued, display: 'flex', alignItems: 'center' },
    ]);
  });
});
