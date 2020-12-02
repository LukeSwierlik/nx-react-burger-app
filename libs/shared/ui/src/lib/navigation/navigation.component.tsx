import React from 'react';
import { NavigationItem, StyledNavLink } from './navigation.style';

export const NavigationComponent = (props) => {
    return (
        <NavigationItem>
            <StyledNavLink to={props.link} exact={props.exact}>
                {props.children}
            </StyledNavLink>
        </NavigationItem>
    );
};
