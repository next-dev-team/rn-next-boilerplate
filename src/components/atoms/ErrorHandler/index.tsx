import React, { FC } from 'react';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';
import { Button, Text, View } from 'react-native';

const errorHandler = (error: Error) => {
  // Exception handling, such as reporting with sentry
  console.log(error);
};

const ErrorFallback = ({ resetErrorBoundary }: FallbackProps) => (
  <View>
    <Text>Sorry, something went wrong</Text>
    <Button title="Retry" onPress={resetErrorBoundary} />
  </View>
);

export const ErrorHandler: FC = props => (
  <ErrorBoundary FallbackComponent={ErrorFallback} onError={errorHandler}>
    {props.children}
  </ErrorBoundary>
);
