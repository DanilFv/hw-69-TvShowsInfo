export interface ITvShow {
    id: number;
    name: string;
    genres: string[];
    network: string;
    image: string;
}

export interface ApiSearchResponse {
    score: number;
    show: {
        id: number;
        name: string;
        genres: string[];
        network?: {
            country?: {
                name: string;
            };
        } | null;
        image?: {
            medium: string;
            original: string;
        } | null;
    };
}