import styled from 'styled-components';

export const ToolbarHeader = styled.header`
    height: 56px;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #703b09;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    box-sizing: border-box;
    z-index: 90;
`;

export const ToolbarNav = styled.nav`
    height: 100%;

    @media (max-width: 499px) {
        display: none;
    }
`;

export const ToolbarLogo = styled.div`
    height: 80%;
`;

export const ToolbarNavigation = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-flow: column;
    align-items: center;
    height: 100%;

    @media (min-width: 500px) {
        flex-flow: row;
    }
`;
