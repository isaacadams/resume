import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Resume } from './Resume';
import { YSpacer } from './components/YSpacer';
import { Print } from './Print';

ReactDOM.render(
  <>
    <Print cssSelector={'.content'} />
    <YSpacer space="60px" />
    <Resume />
    <YSpacer space="60px" />
  </>,
  document.getElementById('resume')
);
