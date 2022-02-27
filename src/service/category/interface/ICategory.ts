export interface ICategoryCreate {
    name: string;
    description: string;
}

export interface ICategoryEdit {
    name?: string;
    description?: string;
}

export interface ICategoryFind {
    id?: string;
    name?: string;
}
