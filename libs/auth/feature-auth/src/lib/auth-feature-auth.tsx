import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface AuthFeatureAuthProps {}

const StyledAuthFeatureAuth = styled.div`
    color: pink;
`;

export const AuthFeatureAuth = (props: AuthFeatureAuthProps) => {
    return (
        <StyledAuthFeatureAuth>
            <h1>Welcome to auth-feature-auth!</h1>
        </StyledAuthFeatureAuth>
    );
};

export default AuthFeatureAuth;
