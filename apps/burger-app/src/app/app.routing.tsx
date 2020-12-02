import { FeatureBurgerBuilder } from '@nx-react-burger-app/burger-builder/feature-burger-builder';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

export const Routing = (
    <Switch>
        <Route path={'/'} exact component={FeatureBurgerBuilder} />
    </Switch>
);
