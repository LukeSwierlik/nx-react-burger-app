import React from 'react';
import { render } from '@testing-library/react';

import AuthDataAccess from './auth-data-access';

describe('AuthDataAccess', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<AuthDataAccess />);
        expect(baseElement).toBeTruthy();
    });
});
