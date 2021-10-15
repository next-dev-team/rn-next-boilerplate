/* tslint:disable */
/* eslint-disable */

import React, { FC } from 'react';
import { ViewProps } from 'react-native';
import { GProps, SvgCss } from 'react-native-svg';
import { getIconColor } from './helper';
import { px } from '../helpers/normalize';

export interface SvgIconProps extends GProps, ViewProps {
  size?: number;
  color?: string | string[];
}

let IconUser: FC<SvgIconProps> = ({ size, color, ...rest }) => {
  const xml = `
<svg t="1626858595848" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2002" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32"><defs><style type="text/css">@font-face { font-family: feedback-iconfont; src: url("//at.alicdn.com/t/font_1031158_1uhr8ri0pk5.eot?#iefix") format("embedded-opentype"), url("//at.alicdn.com/t/font_1031158_1uhr8ri0pk5.woff2") format("woff2"), url("//at.alicdn.com/t/font_1031158_1uhr8ri0pk5.woff") format("woff"), url("//at.alicdn.com/t/font_1031158_1uhr8ri0pk5.ttf") format("truetype"), url("//at.alicdn.com/t/font_1031158_1uhr8ri0pk5.svg#iconfont") format("svg"); }
</style></defs><path d="M917.966 917.332c0 22.47-17.892 40.7-39.914 40.7-22.058 0-39.913-18.23-39.913-40.7l-0.075-0.49h-1.088C818.03 759.175 688.798 636.544 530.154 631.366c-3.413 0.151-6.752 0.562-10.24 0.562-3.45 0-6.79-0.41-10.203-0.525-158.606 5.14-287.84 127.807-306.784 285.437h-1.014l0.076 0.49c0 22.47-17.855 40.7-39.913 40.7s-39.915-18.23-39.915-40.7l-0.374-3.789c0-6.751 2.026-12.904 4.915-18.53 21.082-140.714 111.076-258.242 235.432-312.786C288.42 530.832 239.99 444.515 239.99 346.604c0-157.591 125.334-285.361 279.925-285.361 154.628 0 279.96 127.77 279.96 285.361 0 97.873-48.391 184.153-122.104 235.546 124.843 54.732 215.1 172.863 235.809 314.211 2.437 5.29 4.014 10.992 4.014 17.181l0.373 3.79zM719.823 346.68c0-112.577-89.545-203.81-199.984-203.81-110.402 0-199.945 91.234-199.945 203.81s89.543 203.809 199.945 203.809c110.44 0 199.984-91.232 199.984-203.81z" fill="${getIconColor(color, 0, '#999999')}" p-id="2003"></path></svg>
`

  return (
    <SvgCss xml={xml}  width={size} height={size} {...rest} />
  );
};

IconUser.defaultProps = {
  size: px(20),
};

IconUser = React.memo ? React.memo(IconUser) : IconUser;

export default IconUser;
