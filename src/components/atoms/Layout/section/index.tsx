import classNames from 'classnames';
import React, { isValidElement, memo } from 'react';
import isEqual from 'react-fast-compare';
import { Box, IBox, Text } from '../..';

export type ISection = PartialRequired<
  {
    contentCls: string;
    children: React.ReactNode;
    titleLeft: string;
    titleCenter: string;
    titleRight: string;
    contentProps: IBox;
  } & IBox
>;

export const Section = memo(
  ({ children, titleLeft, titleCenter, titleRight, className, contentCls = '', contentProps, ...rest }: ISection) => {
    const isHasTitle = titleLeft || titleCenter || titleRight;

    return (
      <Box className={classNames('mx-4 my-6', className)} {...rest}>
        {isHasTitle && (
          <Box className="mb-2 flex-row justify-between">
            {isValidElement(titleLeft) ? (
              titleLeft
            ) : (
              <Text className="flex-1 capitalize font-semibold text-base text-primary600">{titleLeft}</Text>
            )}

            {isValidElement(titleCenter) ? (
              titleCenter
            ) : (
              <Text className="text-center flex-1 capitalize font-semibold text-base text-primary600">
                {titleCenter}
              </Text>
            )}

            {isValidElement(titleRight) ? (
              titleRight
            ) : (
              <Text className="text-right flex-1 capitalize font-semibold text-base text-primary600 ">
                {titleRight}
              </Text>
            )}
          </Box>
        )}

        {children && (
          <Box className={`bg-white dark:bg-dark rounded-lg ${contentCls}`} {...contentProps}>
            {children}
          </Box>
        )}
      </Box>
    );
  },
  isEqual
);
