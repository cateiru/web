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
import {SafeArea} from '../components/SafeArea';
import Load from '../components/common/Load';

const MyApp = ({Component, pageProps}: AppProps) => (
  <RecoilRoot>
    <NoSSR>
      <ChakraProvider theme={theme}>
        <SafeArea>
          <Dev />
          <Load />
          <Component {...pageProps} />
        </SafeArea>
      </ChakraProvider>
    </NoSSR>
  </RecoilRoot>
);

export default MyApp;
