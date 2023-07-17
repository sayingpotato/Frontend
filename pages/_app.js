import { useState, useEffect} from "react";
import { RecoilRoot } from 'recoil';
import { QueryClientProvider } from 'react-query';
import GlobalStyle from '../styles/globals';
import { queryClient } from '../utils/queryClient';
import Navbar from '../components/navbar/index';
import Splash from '../pages/splash/index';
import Head from 'next/head'
import { CookiesProvider } from "react-cookie";

export default function App({Component, pageProps}) {
  const Layout = Component.Layout || Navbar;
  const [showSplash, setShowSplash] = useState(true);


  return (
    <QueryClientProvider client={queryClient}>
       <Head>
        <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
      </Head>
      <RecoilRoot>
          <CookiesProvider>
            <GlobalStyle/>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </CookiesProvider>
      </RecoilRoot>
    </QueryClientProvider>
   )
}
