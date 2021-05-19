/**!
 * @author Yuto Watanabe
 *
 * Copyright (C) 2021 logcation
 */

import type {AppProps} from 'next/app';
import {ChakraProvider} from '@chakra-ui/react';
import {RecoilRoot} from 'recoil';
import React from 'react';
import theme from '../utils/theme';
import NoSSR from 'react-no-ssr';
import {Dev} from '../components/Dev';

const MyApp = ({Component, pageProps}: AppProps) => (
  <RecoilRoot>
    <NoSSR>
      <ChakraProvider theme={theme}>
        <Dev />
        <Component {...pageProps} />
      </ChakraProvider>
    </NoSSR>
  </RecoilRoot>
);

export default MyApp;
