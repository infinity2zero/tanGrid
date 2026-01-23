export interface Brewery {
  id: string;
  name: string;
  brewery_type: string;
  address_1: string;
  address_2?: string;
  address_3?: string;
  city: string;
  state_province: string;
  postal_code: string;
  country: string;
  longitude?: number;
  latitude?: number;
  phone?: string;
  website_url?: string;
  state: string;
  street?: string;
}

export interface BreweryParams {
  page?: number;
  per_page?: number;
  sort?: string;
  by_city?: string;
  by_dist?: string;
  by_name?: string;
  by_state?: string;
  by_postal?: string;
  by_type?: string;
}
