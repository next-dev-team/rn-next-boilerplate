import 'react-redux';
import { RootState } from '_app/store/store';

declare module 'react-redux' {
  type DefaultRootState = RootState;
}
