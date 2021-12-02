/* tslint:disable */
/* eslint-disable */

import React, { FC } from 'react';
import { ViewProps } from 'react-native';
import { GProps } from 'react-native-svg';
import IconArrowdown from './IconArrowdown';
import IconBells from './IconBells';
import IconBookmark from './IconBookmark';
import IconCheck from './IconCheck';
import IconCheckcircle from './IconCheckcircle';
import IconCheckcircleo from './IconCheckcircleo';
import IconClockcircleo from './IconClockcircleo';
import IconClose from './IconClose';
import IconClosecircleo from './IconClosecircleo';
import IconDate from './IconDate';
import IconDay from './IconDay';
import IconDown from './IconDown';
import IconEllipsis from './IconEllipsis';
import IconEyeclose from './IconEyeclose';
import IconEyeopen from './IconEyeopen';
import IconLanguage from './IconLanguage';
import IconLeft from './IconLeft';
import IconMinus from './IconMinus';
import IconNight from './IconNight';
import IconPlus from './IconPlus';
import IconRadioChecked from './IconRadioChecked';
import IconRadioUnchecked from './IconRadioUnchecked';
import IconReload from './IconReload';
import IconRight from './IconRight';
import IconSearch from './IconSearch';
import IconShare from './IconShare';
import IconUp from './IconUp';
import IconUser from './IconUser';

export type IconNames = 'arrowdown' | 'bells' | 'bookmark' | 'check' | 'checkcircle' | 'checkcircleo' | 'clockcircleo' | 'close' | 'closecircleo' | 'date' | 'day' | 'down' | 'ellipsis' | 'eyeclose' | 'eyeopen' | 'language' | 'left' | 'minus' | 'night' | 'plus' | 'radio-checked' | 'radio-unchecked' | 'reload' | 'right' | 'search' | 'share' | 'up' | 'user';

export interface SvgIconProps extends GProps, ViewProps {
  name: IconNames;
  size?: number;
  color?: string | string[];
}

let SvgIcon: FC<SvgIconProps> = ({ name, ...rest }) => {
  switch (name) {
    case 'arrowdown':
      return <IconArrowdown {...rest} />;
    case 'bells':
      return <IconBells {...rest} />;
    case 'bookmark':
      return <IconBookmark {...rest} />;
    case 'check':
      return <IconCheck {...rest} />;
    case 'checkcircle':
      return <IconCheckcircle {...rest} />;
    case 'checkcircleo':
      return <IconCheckcircleo {...rest} />;
    case 'clockcircleo':
      return <IconClockcircleo {...rest} />;
    case 'close':
      return <IconClose {...rest} />;
    case 'closecircleo':
      return <IconClosecircleo {...rest} />;
    case 'date':
      return <IconDate {...rest} />;
    case 'day':
      return <IconDay {...rest} />;
    case 'down':
      return <IconDown {...rest} />;
    case 'ellipsis':
      return <IconEllipsis {...rest} />;
    case 'eyeclose':
      return <IconEyeclose {...rest} />;
    case 'eyeopen':
      return <IconEyeopen {...rest} />;
    case 'language':
      return <IconLanguage {...rest} />;
    case 'left':
      return <IconLeft {...rest} />;
    case 'minus':
      return <IconMinus {...rest} />;
    case 'night':
      return <IconNight {...rest} />;
    case 'plus':
      return <IconPlus {...rest} />;
    case 'radio-checked':
      return <IconRadioChecked {...rest} />;
    case 'radio-unchecked':
      return <IconRadioUnchecked {...rest} />;
    case 'reload':
      return <IconReload {...rest} />;
    case 'right':
      return <IconRight {...rest} />;
    case 'search':
      return <IconSearch {...rest} />;
    case 'share':
      return <IconShare {...rest} />;
    case 'up':
      return <IconUp {...rest} />;
    case 'user':
      return <IconUser {...rest} />;

    default:
      return null;
  }
};

SvgIcon = React.memo ? React.memo(SvgIcon) : SvgIcon;

export default SvgIcon;
