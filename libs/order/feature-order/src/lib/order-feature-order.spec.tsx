import React from 'react';
import { render } from '@testing-library/react';

import OrderFeatureOrder from './order-feature-order';

describe('OrderFeatureOrder', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<OrderFeatureOrder />);
        expect(baseElement).toBeTruthy();
    });
});
