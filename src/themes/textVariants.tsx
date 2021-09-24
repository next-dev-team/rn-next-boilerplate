import { createStyle } from './type';

export const textVariants = createStyle({
  body: {
    fontSize: 16,
    lineHeight: 24,
    color: 'fgSubdued',
  },
  header: {
    fontWeight: 'bold',
    fontSize: 34,
    lineHeight: 42.5,
    color: 'fgSubdued',
  },
  subheader: {
    fontWeight: '600',
    fontSize: 28,
    lineHeight: 36,
    color: 'fgRegular',
  },
});
