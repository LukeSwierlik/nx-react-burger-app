import React from 'react';
import { render } from '@testing-library/react';

import FeatureBurgerBuilder from './feature-burger-builder';

describe('FeatureBurgerBuilder', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeatureBurgerBuilder />);
    expect(baseElement).toBeTruthy();
  });
});
