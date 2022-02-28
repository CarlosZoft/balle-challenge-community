export interface ISerieFind {
    id?: string;
    name?: string;
}

export interface ISerieEdit {
    name?: string;
    description?: string;
    imageUrl?: string;
    yearLaunch?: Date;
    owner?: string;
}
