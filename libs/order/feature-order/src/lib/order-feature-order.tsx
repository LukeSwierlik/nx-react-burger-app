import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface OrderFeatureOrderProps {}

const StyledOrderFeatureOrder = styled.div`
    color: pink;
`;

export const OrderFeatureOrder = (props: OrderFeatureOrderProps) => {
    return (
        <StyledOrderFeatureOrder>
            <h1>Welcome to order-feature-order!</h1>
        </StyledOrderFeatureOrder>
    );
};

export default OrderFeatureOrder;
