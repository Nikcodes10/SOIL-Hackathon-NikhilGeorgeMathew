import { User } from "./user";

export interface Review {

    rating: string,
    review_text: string,
    id: string,
    rating_color: string,
    review_time_friendly: string,
    rating_text: string,
    timestamp: string,
    likes: string,
    user: User,
    comments_count: string
    
}
