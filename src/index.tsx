import './app/styles/index.scss';
import './shared/config/i18n/i18n';

import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from '~/app/App';
import { ComposeProviders } from '~/app/providers/ComposeProviders';
import { ErrorBoundary } from '~/app/providers/ErrorBoundary';
import { StoreProvider } from '~/app/providers/StoreProvider';
import { ThemeProvider } from '~/app/providers/ThemeProvider';

const container = document.getElementById('root');

if (!container) {
    throw new Error('Root container not found');
}

const root = createRoot(container);
root.render(
    <ComposeProviders
        components={[BrowserRouter, StoreProvider, ThemeProvider]}
    >
        <ErrorBoundary>
            <App />
        </ErrorBoundary>
    </ComposeProviders>,
);
