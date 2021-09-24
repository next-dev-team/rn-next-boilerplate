import { useTheme } from '@shopify/restyle';
import { CusBox, CusText } from 'components';
import Flex from 'components/flex';
import PullRefresh from 'components/pull-refresh';
import { RefreshStateEnum } from 'constants/layout';
import React from 'react';
import { ActivityIndicator, FlatList, FlatListProps, StyleSheet, TouchableOpacity, View } from 'react-native';
import { AppTheme } from 'themes';
import { px } from 'utils/dimension';

interface RefreshListViewProps<T> extends FlatListProps<T> {
  refreshState: number;
  onHeaderRefresh: () => void;
  onFooterRefresh?: () => void;
  keyExtractor: (item: T, index: number) => string;
  EmptyComponent?: React.ReactElement | null;
}

/**
 * Encapsulated FlatList, support pull-down refresh, pull-up load more
 */
export function RefreshListView<T>(props: RefreshListViewProps<T>) {
  const theme = useTheme<AppTheme>();
  const { refreshState, data = [], onHeaderRefresh, onFooterRefresh, EmptyComponent, ...restProps } = props;
  const styles = StyleSheet.create({
    footerContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      padding: theme.spacing.xl,
    },
  });

  /** Start from the beginning */
  const handleHeaderRefresh = () => {
    if (shouldStartHeaderRefreshing()) {
      onHeaderRefresh?.();
    }
  };

  /** load more */
  const handleEndReached = () => {
    if (shouldStartFooterRefreshing()) {
      onFooterRefresh?.();
    }
  };

  /** Whether to allow to start pull-down refresh */
  const shouldStartHeaderRefreshing = () => {
    if (refreshState === RefreshStateEnum.HeaderRefreshing || refreshState === RefreshStateEnum.FooterRefreshing) {
      return false;
    }

    return true;
  };

  /** Whether to allow the start of the pull-up loading */
  const shouldStartFooterRefreshing = () => {
    if (!data || data.length === 0) {
      return false;
    }

    return refreshState === RefreshStateEnum.Idle;
  };

  /**
   * Generate a component at the bottom of the page to display the prompt text or operation when you pull up and load more
   */
  const renderFooter = () => {
    let footer: React.ComponentType | React.ReactElement | null = null;

    switch (refreshState) {
      case RefreshStateEnum.Idle:
        footer = <View style={styles.footerContainer} />;
        break;
      case RefreshStateEnum.Failure: {
        footer = (
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => {
              if (!data || data.length === 0) {
                props.onHeaderRefresh?.();
              } else {
                props.onFooterRefresh?.();
              }
            }}
          >
            <View style={styles.footerContainer}>
              <CusText variant="body" color="fgRegular">
                Click to reload
              </CusText>
            </View>
          </TouchableOpacity>
        );
        break;
      }
      case RefreshStateEnum.EmptyData: {
        footer = (
          <TouchableOpacity activeOpacity={0.5} onPress={props.onHeaderRefresh}>
            <View style={styles.footerContainer}>
              <CusText variant="body" color="fgRegular">
                No data
              </CusText>
            </View>
          </TouchableOpacity>
        );
        break;
      }
      case RefreshStateEnum.FooterRefreshing: {
        footer = (
          <View style={styles.footerContainer}>
            <ActivityIndicator size={px(20)} color={theme.colors.fgSuccess} />
            <CusText variant="body" color="fgRegular" ml="40">
              loading...
            </CusText>
          </View>
        );
        break;
      }
      case RefreshStateEnum.NoMoreData: {
        footer = (
          <View style={styles.footerContainer}>
            <CusText variant="body" color="fgRegular" ml="40">
              All data loaded...
            </CusText>
          </View>
        );
        break;
      }
    }

    return footer;
  };

  /** Render content part */
  const renderContent = () =>
    (!data || data.length === 0) && refreshState !== RefreshStateEnum.HeaderRefreshing ? (
      <Flex justifyContent="center" alignContent="center" height="100%">
        {EmptyComponent ?? <CusBox />}
      </Flex>
    ) : (
      <FlatList
        data={data}
        onEndReachedThreshold={0.1}
        onEndReached={handleEndReached}
        showsVerticalScrollIndicator={false}
        {...restProps}
        ListFooterComponent={renderFooter}
      />
    );

  return (
    <PullRefresh refreshing={refreshState === RefreshStateEnum.HeaderRefreshing} onRefresh={handleHeaderRefresh}>
      {renderContent()}
    </PullRefresh>
  );
}
