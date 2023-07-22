export interface User {
    id: string;
    username: string;
    userLastname: string;
    email: string;
    regDate: Date;
    company?: string;
    employersNumber?: number | string;
    foundationYear?: string | number;
    website?: string;
    country?: string;
    supportManager?: string;
    avatar?: string;
}

export interface UserSchema {
    authData?: User;

    _inited: boolean;
}
