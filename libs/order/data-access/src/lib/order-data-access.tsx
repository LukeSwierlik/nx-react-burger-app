import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface OrderDataAccessProps {}

const StyledOrderDataAccess = styled.div`
    color: pink;
`;

export const OrderDataAccess = (props: OrderDataAccessProps) => {
    return (
        <StyledOrderDataAccess>
            <h1>Welcome to order-data-access!</h1>
        </StyledOrderDataAccess>
    );
};

export default OrderDataAccess;
