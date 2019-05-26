export interface Contact {
    name: string;
    phone: string;
    image: string;
    email: string;
    category: string;
}

export interface Category {
    text: string;
    icon: string;
    badge?: number;
}

export interface Chat {
    username: String
    message: String
}