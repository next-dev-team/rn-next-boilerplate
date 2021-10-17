import { CusBox, CusButton, CusText, Flex, SvgIcon } from 'components/atoms';
import React from 'react';

export type CounterProps = {
  count: number;
  decCounter: () => void;
  incCounter: () => void;
};

export const Counter = (props: CounterProps) => {
  const { count, decCounter, incCounter } = props;

  return (
    <CusBox borderRadius="s" paddingVertical="s" bg="gray100" mb="l" alignItems="center">
      <CusText variant="pageHead" pb="s">
        Counter App
      </CusText>
      <CusBox mb="s" borderWidth={0.7} width="100%" borderColor="white" />
      <Flex>
        <CusButton bg="func500" mr="s" borderRadius="full" onPress={decCounter}>
          <SvgIcon name="minus" size={40} color="white" />
        </CusButton>
        <CusText variant="pageHead">{count}</CusText>
        <CusButton bg="func300" ml="s" borderRadius="full" onPress={incCounter}>
          <SvgIcon name="plus" size={40} color="white" />
        </CusButton>
      </Flex>
    </CusBox>
  );
};
