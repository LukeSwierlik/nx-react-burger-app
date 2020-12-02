import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { LayoutComponents } from '@nx-react-burger-app/shared/ui';
import { Routing } from './app.routing';
import { store } from './store';

export const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <LayoutComponents>{Routing}</LayoutComponents>
            </BrowserRouter>
        </Provider>
    );
};
