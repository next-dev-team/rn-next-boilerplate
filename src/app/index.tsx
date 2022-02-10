import env from '@/env';
import I18n from '@/i18n';
import { TailwindProvider } from '@/store/index';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { PortalProvider } from '@gorhom/portal';
import React, { Suspense, useState } from 'react';
import { I18nextProvider } from 'react-i18next';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppContainer from './appContainer';
import './logBox';

const cache = new InMemoryCache({ addTypename: false });

const client = new ApolloClient({
  uri: env.GRAPHQL_API_ENDPOINT,
  cache,
  defaultOptions: { watchQuery: { fetchPolicy: 'cache-and-network' } },
});

// enableFlipperApolloDevtools(client);

const App = () => {
  const [loadingCache, setLoadingCache] = useState(true);

  // useEffect(() => {
  //   persistCache({
  //     cache,
  //     storage: AsyncStorage,
  //   }).then(() => setLoadingCache(false));
  // }, []);

  // if (loadingCache) {
  //   return <Text>Loading...</Text>;
  // }
  return (
    <SafeAreaProvider>
      <ApolloProvider client={client}>
        <I18nextProvider i18n={I18n}>
          <Suspense fallback={null}>
            <TailwindProvider>
              <PortalProvider>
                <AppContainer />
              </PortalProvider>
            </TailwindProvider>
          </Suspense>
        </I18nextProvider>
      </ApolloProvider>
    </SafeAreaProvider>
  );
};

export default App;
