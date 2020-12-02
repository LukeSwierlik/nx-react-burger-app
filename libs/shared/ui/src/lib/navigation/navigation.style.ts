import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavigationItem = styled.li`
    margin: 10px 0;
    box-sizing: border-box;
    display: block;
    width: 100%;
`;

const activeClassName = 'nav-item-active';
export const StyledNavLink = styled(NavLink).attrs({
    activeClassName,
})`
    color: #8f5c2c;
    text-decoration: none;
    width: 100%;
    box-sizing: border-box;
    display: block;

    &.${activeClassName} {
        color: #40a4c8;
    }

    &:hover {
        color: #40a4c8;
    }
`;
