/** @jsx jsx */
// eslint-disable-next-line
import React from 'react';
import { jsx } from '@emotion/core';
import loadable from '@loadable/component';
import './App.css';

import LoaderWithText from './components/common/loaderWithText';

const Main = loadable(() => import('./components/main'), {
  fallback: <LoaderWithText />
});

export default function App() {
  return <Main />;
}
