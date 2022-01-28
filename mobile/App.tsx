import { StatusBar } from "expo-status-bar";
import { FC } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import client from "./graphql/config";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const App: FC = () => {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  }
  return (
    <SafeAreaProvider>
      <ApolloProvider client={client}>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </ApolloProvider>
    </SafeAreaProvider>
  );
};

export default App;
