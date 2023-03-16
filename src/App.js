import React from "react";
import {ReactQueryDevtools} from "react-query/devtools"
import { QueryClient, QueryClientProvider } from "react-query";
import Routes from "./router";

const App = () => {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Routes />
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </QueryClientProvider>
    </>
  );
};

export default App;
