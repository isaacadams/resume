import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Resume } from './Resume';
import { YSpacer } from './components/YSpacer';
import { Print } from './Print';

const isDev = process.env.NODE_ENV === 'development';
console.log(isDev);
ReactDOM.render(
  <>
    {isDev && <Print cssSelector={'.content'} />}
    <YSpacer space="60px" />
    <Resume />
    <YSpacer space="60px" />
  </>,
  document.getElementById('resume')
);
