export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  // added 'limited' so we can create a dedicated Limited collection
  category: 'candles' | 'shirts' | 'limited';
  images: string[];
  stock: number;
  featured: boolean;
  soldOut?: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Order {
  id: string;
  userId: string;
  items: OrderItem[];
  total: number;
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered' | 'cancelled';
  shippingAddress: Address;
  paymentId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface OrderItem {
  productId: string;
  quantity: number;
  price: number;
  product: Product;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'customer' | 'admin';
  addresses: Address[];
  createdAt: Date;
}
