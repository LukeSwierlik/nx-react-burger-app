import React from 'react';
import { render } from '@testing-library/react';

import OrderDataAccess from './order-data-access';

describe('OrderDataAccess', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<OrderDataAccess />);
        expect(baseElement).toBeTruthy();
    });
});
