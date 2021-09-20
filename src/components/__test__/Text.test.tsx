import { CusText } from 'components';
import React from 'react';
import 'react-native';
import { render } from 'test/test-utils';
import { colorsTheme } from 'themes';

describe('<CusText />', () => {
  it('should match snapshot', () => {
    const rendered = render(<CusText>CusText</CusText>).toJSON();
    expect(rendered).toMatchSnapshot();
  });

  it('should render bg fgSuccess', () => {
    const rendered = render(
      <CusText testID="CusText" color="fgSuccess">
        CusText
      </CusText>
    );
    const textComponent = rendered.getByTestId('CusText');

    expect(textComponent.props.style).toEqual([{ color: colorsTheme.fgSuccess, display: 'flex' }]);
  });
  it('should render text', () => {
    const rendered = render(<CusText>CusText</CusText>);
    const textComponent = rendered.getByText(/CusText/!);
    expect(textComponent).not.toBeNull();
  });
});
