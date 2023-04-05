import { RecoilRoot } from 'recoil';
import { QueryClientProvider } from 'react-query';
import GlobalStyle from '../styles/globals';
import { queryClient } from '../utils/queryClient';
import Navbar from '../components/navbar/index';

export default function App({Component, pageProps}) {
  const Layout = Component.Layout || Navbar;
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
            <GlobalStyle/>
            <Layout>
              <Component {...pageProps} />
            </Layout>
      </RecoilRoot>
    </QueryClientProvider>
   )
}
