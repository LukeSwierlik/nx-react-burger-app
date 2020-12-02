import React from 'react';
import { render } from '@testing-library/react';

import BurgerBuilderDataAccess from './burger-builder-data-access';

describe('BurgerBuilderDataAccess', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BurgerBuilderDataAccess />);
    expect(baseElement).toBeTruthy();
  });
});
