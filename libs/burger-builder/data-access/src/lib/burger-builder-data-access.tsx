import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface BurgerBuilderDataAccessProps {}

const StyledBurgerBuilderDataAccess = styled.div`
  color: pink;
`;

export const BurgerBuilderDataAccess = (
  props: BurgerBuilderDataAccessProps
) => {
  return (
    <StyledBurgerBuilderDataAccess>
      <h1>Welcome to burger-builder-data-access!</h1>
    </StyledBurgerBuilderDataAccess>
  );
};

export default BurgerBuilderDataAccess;
