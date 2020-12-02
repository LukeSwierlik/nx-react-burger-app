import React from 'react';
import { render } from '@testing-library/react';

import AuthFeatureAuth from './auth-feature-auth';

describe('AuthFeatureAuth', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<AuthFeatureAuth />);
        expect(baseElement).toBeTruthy();
    });
});
