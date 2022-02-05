import { StatusBar } from "expo-status-bar";
import { FC } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./hooks/useCachedResources";
import Navigation from "./navigation";
import client from "./graphql/config";
import { ApolloProvider } from "@apollo/client";

const App: FC = () => {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  }
  return (
    <SafeAreaProvider>
      <ApolloProvider client={client}>
        <Navigation />
        <StatusBar />
      </ApolloProvider>
    </SafeAreaProvider>
  );
};

export default App;
