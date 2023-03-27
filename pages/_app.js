import { RecoilRoot } from 'recoil';
import { QueryClientProvider } from 'react-query';
import GlobalStyle from '../styles/globals';
import { queryClient } from '../utils/queryClient';

export default function App({Component, pageProps}) {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <GlobalStyle/>
        <Component {...pageProps} />
      </RecoilRoot>
    </QueryClientProvider>
   )
}
