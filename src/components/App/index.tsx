import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import {
  GlobalDefaultStyle,
  GlobalFont,
  GlobalResetStyle,
  orchidDark,
  orchidLight,
  TidyUiProvider,
} from '@tidy-ui/commons';
import { Container } from '@tidy-ui/layout';
import { useReadApp } from 'hooks';
import { Icon } from 'ui';
import Header from 'components/Header';
import { BackToTop, GlobalStyle } from './styles';

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
  const scrollToTopBtnRef = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    scrollToTopBtnRef.current?.addEventListener('click', () => {
      window.scrollTo({
        behavior: 'smooth',
        left: 0,
        top: 0,
      });
    });
    window.addEventListener('scroll', () => {
      scrollToTopBtnRef.current!.style.display = window.scrollY > 640 ? 'flex' : 'none';
    });
  }, []);

  return (
    <>
      <GlobalResetStyle />
      <GlobalFont
        family="'Open Sans', sans-serif"
        url="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
      />
      <TidyUiProvider theme={data?.theme == 'dark' ? orchidDark : orchidLight}>
        <GlobalDefaultStyle />
        <GlobalStyle />
        <Container as="main" maxWidth="xl">
          <Header />
          {children}
        </Container>
        <BackToTop ref={scrollToTopBtnRef} icon={<Icon icon="fa-solid fa-circle-arrow-up" />} girth="xxl" />
      </TidyUiProvider>
    </>
  );
};

export default App;
