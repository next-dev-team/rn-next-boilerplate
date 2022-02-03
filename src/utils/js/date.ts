import dayjs from 'dayjs';

export type IDate = string | Date | number;

export const dateYYYY_MM_DD = (date: IDate) => {
  return dayjs(date).format('YYYY-MM-DD');
};

export const dateDD_MM_YYYY = (date: IDate) => {
  return dayjs(date).format('DD-MM-YYYY');
};
