export interface IEnthusiastCreate {
    name: string;
    email: string;
    password: string;
    imageUrl?: string;
}

export interface IEnthusiastWithToken {
    token: string;
    refreshToken: string;
    enthusiast: { name: string; email: string };
}
export interface IEnthusiastEdit {
    id?: string;
    name?: string;
    email?: string;
    password?: string;
    imageUrl?: string;
}

export interface IEnthusiastFind {
    id?: string;
    email?: string;
}
