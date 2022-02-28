export interface ICreateLogin {
    email: string;
    password: string;
}

export interface ICreateWithRefresh {
    refreshToken: string;
}
