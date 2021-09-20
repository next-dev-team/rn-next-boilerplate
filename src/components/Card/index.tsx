import { createRestyleComponent, createVariant, VariantProps } from '@shopify/restyle';
import { CusBox } from 'components';
import { AppTheme } from 'themes';

const Card = createRestyleComponent<
  VariantProps<AppTheme, 'cardVariants'> & React.ComponentProps<typeof CusBox>,
  AppTheme
>([createVariant({ themeKey: 'cardVariants' })], CusBox);

export default Card;
