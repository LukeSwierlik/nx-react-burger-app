import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface AuthDataAccessProps {}

const StyledAuthDataAccess = styled.div`
    color: pink;
`;

export const AuthDataAccess = (props: AuthDataAccessProps) => {
    return (
        <StyledAuthDataAccess>
            <h1>Welcome to auth-data-access!</h1>
        </StyledAuthDataAccess>
    );
};

export default AuthDataAccess;
