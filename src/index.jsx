import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

import './scss-config.scss';

const root = createRoot(document.getElementById('appMountPoint'));

root.render(<App />);
