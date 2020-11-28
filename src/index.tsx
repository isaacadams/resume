import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Resume} from './Resume';
import {YSpacer} from './components/YSpacer'

ReactDOM.render(<>
<YSpacer space='75px' />
<Resume />
<YSpacer space='75px' />
</>, document.getElementById('resume'));