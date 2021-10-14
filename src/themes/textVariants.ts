import { createStyle } from './type';

export const textVariants = createStyle({
  xl: {
    fontWeight: '500',
    fontSize: 42,
    lineHeight: 44,
  },
  l: {
    fontWeight: '500',
    fontSize: 28,
    lineHeight: 32,
  },
  m: {
    fontWeight: '400',
    fontSize: 26,
    lineHeight: 32,
  },
  s: {
    fontWeight: '400',
    fontSize: 26,
    lineHeight: 32,
  },
  pageHead: {
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 24,
  },
  head: {
    fontWeight: '400',
    fontSize: 23,
    lineHeight: 28,
  },
  subHead: {
    fontWeight: '600',
    fontSize: 12,
    lineHeight: 24,
    textTransform: 'uppercase',
  },
  button: {
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 16,
  },
  body: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 20,
  },
  caption: {
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 16,
  },
});
