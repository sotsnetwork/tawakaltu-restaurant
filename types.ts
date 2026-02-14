
export interface MenuItem {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  tag?: string;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface GiftPackage {
  id: string;
  name: string;
  price: number;
  image: string;
  tag?: string;
  description?: string;
}

export type AppView = 'home' | 'menu' | 'cart' | 'checkout' | 'gift-a-meal' | 'claim-gift' | 'feedback' | 'success';
