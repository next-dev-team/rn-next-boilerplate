<!-- typescript utils
https://github.com/piotrwitek/utility-types
-->
<!-- https://blog.logrocket.com/understanding-react-native-linear-gradient/ -->

```tsx
export type GenConditionalType<T = boolean> = T extends boolean ? boolean : string;

export const renderCondition = <T extends unknown>(v: T) => v;
```
