import { AuthState } from '@nx-react-burger-app/shared/interfaces';
import produce from 'immer';

const initialState: AuthState = {
    token: null,
    userId: null,
    error: null,
    loaded: false,
};

export const AuthReducer = produce((state = initialState, action) => {
    return state;
});
