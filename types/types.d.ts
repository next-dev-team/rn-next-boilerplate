declare module '*.json' {
  const value: any;
  export default value;
}

type Func = (...args: any[]) => any;

type Page<T> = {
  list?: Array<T>;
  page?: number;
  pageSize?: number;
  total?: number;
  totalPage?: number;
};
