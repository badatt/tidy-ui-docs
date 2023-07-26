import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Header from 'components/Header';
import { useReadApp } from 'hooks/useApp';
import { GlobalDefault, GlobalFont, GlobalReset, orchidDark, orchidLight, TidyUiProvider } from '@tidy-ui/commons';
import { Container } from '@tidy-ui/layout';

interface Props {
  children: React.ReactNode;
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const App: React.FC<Props> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>{children}</Layout>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

const Layout: React.FC<Props> = ({ children }) => {
  const { data } = useReadApp();
  return (
    <>
      <GlobalReset />
      <GlobalFont />
      <TidyUiProvider theme={data?.theme == 'dark' ? orchidDark : orchidLight}>
        <GlobalDefault />
        <Container height="100vh" maxWidth="xl" gutter="0">
          <Header />
          {children}
        </Container>
      </TidyUiProvider>
    </>
  );
};

export default App;
