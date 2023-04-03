export interface OrderImage {
    src: string;
}

export interface Order {
    order_id: string;
    name: string;
    category: string;
    currency: string;
    pickup_date: string;
    pickup_time: string;
    price: string;
    weight: string;
    quantity: number;
    image: OrderImage;
    status: string;
}