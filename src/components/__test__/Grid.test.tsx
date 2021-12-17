import React from 'react';
import { render } from 'test/test-utils';
import { CusText } from '_app/components';
import GridView from '_app/components/List/GridView';

describe('<GridView />', () => {
  it('should match snapshot', () => {
    const rendered = render(
      <GridView<{ id: number }> data={[{ id: 1 }]} renderItem={({ item }) => <CusText>{item.id}</CusText>} />
    ).toJSON();
    expect(rendered).toMatchSnapshot();
  });
});
