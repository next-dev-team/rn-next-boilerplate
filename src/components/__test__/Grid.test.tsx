import { CusText } from '@/components';
import GridView from '@/components/List/GridView';
import React from 'react';
import { render } from 'test/test-utils';

describe('<GridView />', () => {
  it('should match snapshot', () => {
    const rendered = render(
      <GridView<{ id: number }> data={[{ id: 1 }]} renderItem={({ item }) => <CusText>{item.id}</CusText>} />
    ).toJSON();
    expect(rendered).toMatchSnapshot();
  });
});
