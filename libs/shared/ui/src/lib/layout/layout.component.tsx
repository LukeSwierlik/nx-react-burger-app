import React from 'react';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { LayoutContent } from './layout.style';

export const LayoutComponents = (props) => {
    return (
        <section>
            <ToolbarComponent />

            <LayoutContent>{props.children}</LayoutContent>
        </section>
    );
};
