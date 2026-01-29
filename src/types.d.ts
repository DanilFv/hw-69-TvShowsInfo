export interface ITvShow {
    name: string;
    genres: string[];
    id: number
    country: string;
    image: string;
}

interface ApiSearchResponse {
  score: number;
  show: ITvShow;
}