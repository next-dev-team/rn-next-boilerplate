import { createStyle } from './type';

export const cardVariants = createStyle({
  regular: {
    padding: {
      phone: 's',
      tablet: 'm',
    },
  },
  elevated: {
    padding: {
      phone: 's',
      tablet: 'm',
    },
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 15,
    elevation: 5,
  },
});
