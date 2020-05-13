import React from 'react';
import ReactDOM from 'react-dom';
import { TwitProvider } from './components/TwitContext';

import App from './components/App';

ReactDOM.render(
    <TwitProvider>
        <App />
    </TwitProvider>,
document.getElementById('root'));
