import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Resume } from './Resume';
import { YSpacer } from './components/YSpacer';
import { Print } from './Print';

ReactDOM.render(
  <>
    <Print cssSelector={'#my-resume'} />
    <YSpacer space="75px" />
    <Resume />
    <YSpacer space="75px" />
  </>,
  document.getElementById('resume')
);
