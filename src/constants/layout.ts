/** Pull-down refresh status enumeration */
export enum RefreshStateEnum {
  /**Loaded successfully */
  Idle = 0,
  /**Start pull-down refresh */
  HeaderRefreshing = 1,
  /**Start to pull up and turn pages */
  FooterRefreshing = 2,
  /**All data has been loaded */
  NoMoreData = 3,
  /**Failed to load */
  Failure = 4,
  /**no data */
  EmptyData = 5,
}
