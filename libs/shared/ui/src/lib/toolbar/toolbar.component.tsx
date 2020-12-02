import React from 'react';
import { DrawerToggleComponent } from '../drawer-toggle/drawer-toggle.component';
import { LogoComponent } from '../logo/logo.components';
import {
    ToolbarHeader,
    ToolbarLogo,
    ToolbarNav,
    ToolbarNavigation,
} from './toolbar.style';

export const ToolbarComponent = () => {
    return (
        <ToolbarHeader>
            <DrawerToggleComponent />

            <ToolbarLogo>
                <LogoComponent />
            </ToolbarLogo>

            <ToolbarNav>
                <ToolbarNavigation></ToolbarNavigation>
            </ToolbarNav>
        </ToolbarHeader>
    );
};
