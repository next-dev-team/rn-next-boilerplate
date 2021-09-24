---
title: Flex-Layout component
nav:
  title: RN component
  path: /react-native
group:
  title: Layout
  path: /layout
  order: 2
---

# Flex layout components

Flex is a package of CSS flex layout.

## Effect demonstration

### 1. Horizontal direction

```tsx | pure
<Flex>
  <View style={{ width: 100, height: 50, backgroundColor: 'red' }} />
  <View style={{ width: 100, height: 50, backgroundColor: 'green' }} />
  <View style={{ width: 100, height: 50, backgroundColor: 'gold' }} />
</Flex>
```

<center>
  <div style="display:flex; width: 750px">
    <div style="width: 375px;">IOS renderings</div>
    <div style="width: 375px;">Android renderings</div>
  </div>
</center>
<center>
  <figure>
    <img
      alt="flex-ios1.png"
      src="https://td-dev-public.oss-cn-hangzhou.aliyuncs.com/maoyes-app/1607515191492106546.png"
      style="width: 375px; margin-right: 10px; border: 1px solid #ddd;"
    />
    <img
      alt="flex-android1.png"
      src="https://td-dev-public.oss-cn-hangzhou.aliyuncs.com/maoyes-app/1609145176538855969.png"
      style="width: 375px; border: 1px solid #ddd;"
    />
  </figure>
</center>

### 2. Vertical direction

```tsx | pure
<Flex flexDirection="column">
  <View style={{ width: 100, height: 50, backgroundColor: 'red' }} />
  <View style={{ width: 100, height: 50, backgroundColor: 'green' }} />
  <View style={{ width: 100, height: 50, backgroundColor: 'gold' }} />
</Flex>
```

<center>
<div style="display:flex; width: 750px">
     <div style="width: 375px;">IOS renderings</div>
     <div style="width: 375px;">Android renderings</div>
   </div>
</center>
<center>
  <figure>
    <img
      alt="flex-ios2.png"
      src="https://td-dev-public.oss-cn-hangzhou.aliyuncs.com/maoyes-app/1607515262409907926.png"
      style="width: 375px; margin-right: 10px; border: 1px solid #ddd;"
    />
    <img
      alt="flex-android2.png"
      src="https://td-dev-public.oss-cn-hangzhou.aliyuncs.com/maoyes-app/1609145176543989451.png"
      style="width: 375px; border: 1px solid #ddd;"
    />
  </figure>
</center>

### 3. 内容居中

```tsx | pure
<Flex flex={1} justifyContent="center" alignItems="center">
  <View style={{ width: 100, height: 50, backgroundColor: 'red' }} />
  <View style={{ width: 100, height: 50, backgroundColor: 'green' }} />
  <View style={{ width: 100, height: 50, backgroundColor: 'gold' }} />
</Flex>
```

<center>
<div style="display:flex; width: 750px">
     <div style="width: 375px;">IOS renderings</div>
     <div style="width: 375px;">Android renderings</div>
   </div>
</center>
<center>
  <figure>
    <img
      alt="flex-ios3.png"
      src="https://td-dev-public.oss-cn-hangzhou.aliyuncs.com/maoyes-app/1607515318334231753.png"
      style="width: 375px; margin-right: 10px; border: 1px solid #ddd;"
    />
    <img
      alt="flex-android3.png"
      src="https://td-dev-public.oss-cn-hangzhou.aliyuncs.com/maoyes-app/1609145176535385058.png"
      style="width: 375px; border: 1px solid #ddd;"
    />
  </figure>
</center>

### 4. Word wrap

```tsx | pure
<Flex flexWrap="wrap">
  <View style={{ width: '30%', height: 50, backgroundColor: 'red' }} />
  <View style={{ width: '30%', height: 50, backgroundColor: 'green' }} />
  <View style={{ width: '30%', height: 50, backgroundColor: 'gold' }} />
  <View style={{ width: '30%', height: 50, backgroundColor: 'blue' }} />
</Flex>
```

<center>
<div style="display:flex; width: 750px">
     <div style="width: 375px;">IOS renderings</div>
     <div style="width: 375px;">Android renderings</div>
  </div>
</center>
<center>
  <figure>
    <img
      alt="flex-ios4.png"
      src="https://td-dev-public.oss-cn-hangzhou.aliyuncs.com/maoyes-app/1609148595858116753.png"
      style="width: 375px; margin-right: 10px; border: 1px solid #ddd;"
    />
    <img
      alt="flex-android4.png"
      src="https://td-dev-public.oss-cn-hangzhou.aliyuncs.com/maoyes-app/1609148491287716377.png"
      style="width: 375px; border: 1px solid #ddd;"
    />
  </figure>
</center>

## API

### Basic attributes

| Attribute       | Required | Description                                      | Type        | Default Value |
| --------------- | -------- | ------------------------------------------------ | ----------- | ------------- |
| backgroundColor | `false`  | Background color. The value is `colors` in Theme | string      |               |
| style           | `false`  | Style                                            | `ViewStyle` |               |

### Width and height layout related attributes

For definition, see: [https://reactnative.dev/docs/layout-props](https://reactnative.dev/docs/layout-props)

| Attribute      | Required | Description | Type | Default Value |
| -------------- | -------- | ----------- | ---- | ------------- |
| width          | `false`  |             |      |               |
| minWidth       | `false`  |             |      |               |
| maxWidth       | `false`  |             |      |               |
| height         | `false`  |             |      |               |
| maxHeight      | `false`  |             |      |               |
| minHeight      | `false`  |             |      |               |
| flex           | `false`  |             |      |               |
| flexDirection  | `false`  |             |      |               |
| flexBasis      | `false`  |             |      |               |
| flexGrow       | `false`  |             |      |               |
| flexShrink     | `false`  |             |      |               |
| flexWrap       | `false`  |             |      |               |
| alignContent   | `false`  |             |      |               |
| alignItems     | `false`  |             |      |               |
| alignSelf      | `false`  |             |      |               |
| justifyContent | `false`  |             |      |               |
| aspectRatio    | `false`  |             |      |               |
| overflow       | `false`  |             |      |               |

### Inner and outer margin related attributes

The value is `spacing` in Theme.

For definition, see: [https://reactnative.dev/docs/layout-props](https://reactnative.dev/docs/layout-props)

| Attribute         | Required | Description | Type | Default Value |
| ----------------- | -------- | ----------- | ---- | ------------- |
| margin            | `false`  |             |      |               |
| marginStart       | `false`  |             |      |               |
| marginEnd         | `false`  |             |      |               |
| marginHorizontal  | `false`  |             |      |               |
| marginVertical    | `false`  |             |      |               |
| marginLeft        | `false`  |             |      |               |
| marginRight       | `false`  |             |      |               |
| marginBottom      | `false`  |             |      |               |
| marginTop         | `false`  |             |      |               |
| padding           | `false`  |             |      |               |
| paddingStart      | `false`  |             |      |               |
| paddingEnd        | `false`  |             |      |               |
| paddingHorizontal | `false`  |             |      |               |
| paddingVertical   | `false`  |             |      |               |
| paddingLeft       | `false`  |             |      |               |
| paddingRight      | `false`  |             |      |               |
| paddingBottom     | `false`  |             |      |               |
| paddingTop        | `false`  |             |      |               |

### Border related attributes

See definition: [https://reactnative.dev/docs/view-style-props](https://reactnative.dev/docs/view-style-props)

| Attribute               | Required | Description | Type | Default Value |
| ----------------------- | -------- | ----------- | ---- | ------------- |
| borderWidth             | `false`  |             |      |               |
| borderLeftWidth         | `false`  |             |      |               |
| borderRightWidth        | `false`  |             |      |               |
| borderBottomWidth       | `false`  |             |      |               |
| borderTopWidth          | `false`  |             |      |               |
| borderStartWidth        | `false`  |             |      |               |
| borderEndWidth          | `false`  |             |      |               |
| borderStyle             | `false`  |             |      |               |
| borderColor             | `false`  |             |      |               |
| borderStartColor        | `false`  |             |      |               |
| borderEndColor          | `false`  |             |      |               |
| borderLeftColor         | `false`  |             |      |               |
| borderRightColor        | `false`  |             |      |               |
| borderBottomColor       | `false`  |             |      |               |
| borderTopColor          | `false`  |             |      |               |
| borderRadius            | `false`  |             |      |               |
| borderBottomStartRadius | `false`  |             |      |               |
| borderBottomEndRadius   | `false`  |             |      |               |
| borderBottomLeftRadius  | `false`  |             |      |               |
| borderBottomRightRadius | `false`  |             |      |               |
| borderTopStartRadius    | `false`  |             |      |               |
| borderTopEndRadius      | `false`  |             |      |               |
| borderTopLeftRadius     | `false`  |             |      |               |
| borderTopRightRadius    | `false`  |             |      |               |

### Flex.Item

The Flex.Item component adds the style `flex:1` by default to ensure the average width of all items. The children of the Flex container are not necessarily Flex.Item.
