import styled from 'styled-components';

export const DrawerToggleContainer = styled.div`
    width: 40px;
    height: 100%;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    box-sizing: border-box;
    cursor: pointer;
    background-color: white;

    @media (min-width: 500px) {
        display: none;
    }
`;
