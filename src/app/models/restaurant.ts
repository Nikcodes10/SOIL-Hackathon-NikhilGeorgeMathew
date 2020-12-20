import { Review } from "./review";
import { User } from "./user";

export interface Restaurant {

    id: string,
    name: string,
    url: string,
    location: {
        address: string,
        locality: string,
        city: string,
        latitude: string,
        longitude: string,
        zipcode: string,
        country_id: string
    },
    average_cost_for_two: string,
    price_range: string,
    currency: string,
    thumb: string,
    featured_image: string,
    photos_url: string,
    menu_url: string,
    events_url: string,
    user_rating: {
        aggregate_rating: string,
        rating_text: string,
        rating_color: string,
        votes: string
    },
    has_online_delivery: string,
    is_delivering_now: string,
    has_table_booking: string,
    deeplink: string,
    cuisines: string,
    all_reviews_count: string,
    photo_count: string,
    phone_numbers: string,
    highlights: [string],  //
    photos: [
        {
        id: string,
        url: string,
        thumb_url: string,
        user: User,
        res_id: string,
        caption: string,
        timestamp: string,
        friendly_time: string,
        width: string,
        height: string,
        comments_count: string,
        likes_count: string
        }
    ],
    all_reviews: {
        reviews: [Review]
    }

};
