export interface Category {
    id: number;
    name: string;
    slug: string;
    icon: string;
    thumbnail: string;
    places_count: number;
    places: Place[];
}

export interface City {
    id: number;
    name: string;
    slug: string;
    icon: string;
    thumbnail: string;
    places_count: number;
    places: Place[];
}

export interface Place {
    id: number;
    name: string;
    slug: string;
    thumbnail: string;
    rating: string;
    address: string;
    price: number;
    cs_name: string;
    cs_avatar: string;
    cs_phone: string;
    opening_hours: string;
    closing_hours: string;
    description: string;
    city: City;
    category: Category;
    fields: Field[];
    photos: Photo[];
}

interface Field {
    id: number;
    name: string;
    price: number;
    thumbnail: string;
    is_available: boolean;
    is_indoor: boolean;
    floor_type: string;
}

interface Photo {
    id: number;
    photo: string;
}

export interface BookingDetails {
    id: number;
    place_id: number;
    field_id: number;
    name: string;
    email: string;
    phone_number: string;
    total_amount: number | null;
    proof: string | null;
    is_paid: boolean;
    booking_date: string;
    booking_time: string;
    total_sesi: number
}

