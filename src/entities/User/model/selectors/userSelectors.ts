import { UserSchema } from '../types/user';

interface UserSelectorsProps {
    user: UserSchema;
}

export const getUserAuthData = (state: UserSelectorsProps) =>
    state.user.authData;
export const getUserInited = (state: UserSelectorsProps) => state.user._inited;
