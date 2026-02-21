
import { MenuItem, GiftPackage } from './types';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: 'Smoky Party Jollof',
    price: 4500,
    description: 'Authentic firewood-smoked rice, served with sweet dodo and a side of traditional slaw.',
    image: 'https://picsum.photos/seed/tawakaltu-jollof1/800/600',
    category: 'Jollof & Fried Rice',
    tag: "Chef's Choice"
  },
  {
    id: '2',
    name: 'Fried Rice Special',
    price: 4800,
    description: 'Wok-tossed basmati with seasonal vegetables, liver bits, and a bouquet of aromatic spices.',
    image: 'https://picsum.photos/seed/tawakaltu-friedrice/800/600',
    category: 'Jollof & Fried Rice'
  },
  {
    id: '3',
    name: 'Native Seafood Rice',
    price: 6500,
    description: 'Ofada-style inspired native rice cooked with palm oil, locust beans, and fresh tiger prawns.',
    image: 'https://picsum.photos/seed/tawakaltu-seafood/800/600',
    category: 'Jollof & Fried Rice'
  },
  {
    id: '4',
    name: 'Jollof & Grilled Chicken',
    price: 6000,
    description: 'Our signature jollof paired with a flame-grilled quarter chicken marinated in suya spice.',
    image: 'https://picsum.photos/seed/tawakaltu-chicken/800/600',
    category: 'Jollof & Fried Rice'
  },
  {
    id: '5',
    name: 'Royal Coconut Rice',
    price: 5200,
    description: 'Creamy coconut milk-infused rice cooked with smoked fish flakes and sweet peppers.',
    image: 'https://picsum.photos/seed/tawakaltu-coconut/800/600',
    category: 'Jollof & Fried Rice',
    tag: 'New'
  },
  {
    id: '6',
    name: 'Asun Fried Rice',
    price: 5800,
    description: 'A fusion delight: Classic fried rice tossed with spicy, smoked peppered goat meat.',
    image: 'https://picsum.photos/seed/tawakaltu-asun/800/600',
    category: 'Jollof & Fried Rice'
  }
];

export const BASMATI_ITEMS: MenuItem[] = [
    {
        id: '7',
        name: 'Basmati Rice & Stew',
        price: 4000,
        description: 'Long-grain rice with signature Obe-Ata',
        image: 'https://picsum.photos/seed/tawakaltu-basmati1/800/600',
        category: 'Basmati Selection'
    },
    {
        id: '8',
        name: 'Basmati Stir-Fry',
        price: 4200,
        description: 'Light and healthy vegetable stir-fry',
        image: 'https://picsum.photos/seed/tawakaltu-basmati2/800/600',
        category: 'Basmati Selection'
    }
];

export const GIFT_PACKAGES: GiftPackage[] = [
  {
    id: 'gp1',
    name: 'Royal Feast for Two',
    price: 15000,
    image: 'https://picsum.photos/seed/tawakaltu-gift1/800/600',
    tag: 'Most Loved'
  },
  {
    id: 'gp2',
    name: 'Family Weekend Box',
    price: 35000,
    image: 'https://picsum.photos/seed/tawakaltu-gift2/800/600'
  },
  {
    id: 'gp3',
    name: 'Signature Platter',
    price: 25000,
    image: 'https://picsum.photos/seed/tawakaltu-gift3/800/600'
  }
];
