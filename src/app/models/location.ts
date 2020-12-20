export interface Location {

    entity_type: string,
    entity_id: string,
    title: string,
    latitude: string,
    longitude: string,
    city_id: string,
    city_name: string,
    country_id: string,
    country_name: string

};

export interface LocSuggestion {

    location_suggestions: [Location],
      status: string,
      has_more: string,
      has_total: number,
      user_has_addresses: boolean

};