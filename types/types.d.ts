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

type WithUndefined<T extends string> = T | undefined;
type StringOrUndefined = WithUndefined<string>;
type NumberOrUndefined = WithUndefined<number>;

/**
 * first arg is optional and second is required
 * @usage PartialRequired<{ age:number },{ name:string }>
 */
type PartialRequired<O = Record<string, any>, R = Record<string, any>> = Partial<O> & Required<R>;
