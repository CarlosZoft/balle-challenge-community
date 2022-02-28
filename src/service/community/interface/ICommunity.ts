export interface ICommunityCreate {
    name: string;
    description: string;
}

export interface ICommunityEdit {
    name?: string;
    description?: string;
    imageUrl?: string;
}

export interface ICommunityFind {
    id?: string;
    name?: string;
    idSerie?: string;
}
