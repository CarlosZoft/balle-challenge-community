export interface IEnthusiastCreate {
    name: string;
    email: string;
    password: string;
    imageUrl?: string;
}

export interface IEnthusiastEdit {
    name?: string;
    email: string;
    password?: string;
    imageUrl?: string;
}

export interface IEnthusiastFind {
    id?: string;
    email?: string;
}
