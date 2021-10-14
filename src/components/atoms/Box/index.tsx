import { createBox } from '@shopify/restyle';
import { AppTheme } from 'themes';

export type BoxProps = React.ComponentProps<typeof Box>;

const Box = createBox<AppTheme>();
export default Box;
