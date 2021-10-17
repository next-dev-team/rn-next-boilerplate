import { Counter } from 'components/templates';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { postStore } from 'store';

export const RenderCounter = observer(() => {
  const { count, decCounter, incCounter } = postStore;
  // console.log('render counter');
  return <Counter {...{ count, decCounter, incCounter }} />;
});
