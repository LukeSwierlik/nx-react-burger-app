export interface AuthState {
    token: string;
    userId: string;
    error: Error;
    loaded: boolean;
}
