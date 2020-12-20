import { Restaurant } from "./restaurant";
import { Location } from './location';

export interface CityDetails {
    
    popularity: {
        popularity: string,
        nightlife_index: string,
        top_cuisines: [string]
    },
    location: Location,
    best_rated_restaurant: [any]
    
};
