import React from 'react';

import ReactDOM from 'react-dom/client';

import App from './app/App';

import './global.css';

const createApp = (node: React.ReactNode) => {
	const root = document.getElementById('root');

	if (!root) {
		throw new Error('Root element not found');
	}

	ReactDOM.createRoot(root).render(node);
};

createApp(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);
