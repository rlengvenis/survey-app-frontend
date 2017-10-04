import React from 'react'
import {render} from 'react-dom'

import Root from './components/Root'
import registerServiceWorker from './registerServiceWorker';

render(
  <Root/>,
  document.querySelector('#root')
);

registerServiceWorker();