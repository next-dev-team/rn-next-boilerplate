import 'react-redux';
import { RootState } from 'store/store';

declare module 'react-redux' {
  type DefaultRootState = RootState;
}
