/* tslint:disable */
/* eslint-disable */

import React, { FC } from 'react';
import { ViewProps } from 'react-native';
import { GProps } from 'react-native-svg';
import IconUser from './IconUser';

export type IconNames = 'user';

export interface SvgIconProps extends GProps, ViewProps {
  name: IconNames;
  size?: number;
  color?: string | string[];
}

let SvgIcon: FC<SvgIconProps> = ({ name, ...rest }) => {
  switch (name) {
    case 'user':
      return <IconUser {...rest} />;

    default:
      return null;
  }
};

SvgIcon = React.memo ? React.memo(SvgIcon) : SvgIcon;

export default SvgIcon;
