
import { MenuItem, GiftPackage } from './types';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: 'Smoky Party Jollof',
    price: 4500,
    description: 'Authentic firewood-smoked rice, served with sweet dodo and a side of traditional slaw.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBQ-cTQ4961A-FsdkyiQOESIvfrKTHD0EwNcYY7Je5OjIbga8mYTm1OMTBN4F0G0YIgB-LGY8lJtmVaKDoFs6SpnbU7IWP_MCGZE3p1gh63dohAn_wiDAxXqysL5ERNaoXEBXmfUPfzov9aTF07-6KYXzpXJJlx93FBuSSgYftdXzSkmWuMoeHEAvYlNrc6JEAjIDfMwcPG1OQxBTJ8lIPOpCLw3s_5zMO5L-USYqpJRMsgGA-7Y1l_LhTfbm2LMlyGgR4aZS8IfSg',
    category: 'Jollof & Fried Rice',
    tag: "Chef's Choice"
  },
  {
    id: '2',
    name: 'Fried Rice Special',
    price: 4800,
    description: 'Wok-tossed basmati with seasonal vegetables, liver bits, and a bouquet of aromatic spices.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDRBeTv3Fy_7RivejjW57gaaTbbbaRzIq3o7OGE0KXvV9-GMD1Cq904P3ZKZ2g4ux7d1RsdeGZfzMctfZYvRocFrWhBX8EtfBhZWT2NEMMHMqg3KffMx3vt0ezMQ2qwud8uKVnyVj-4HMWUDs2M0dQFCMEzuqpNnuK-XwzDw1psKC1mUKoc53UDpRWPvlecL3BC0fh0sCLHE9oEqDXw3srCIimDD8tku8GDV57o_m0zPk7OP4re1H6l25N_nm9tdjNDTTMmc1kwXiE',
    category: 'Jollof & Fried Rice'
  },
  {
    id: '3',
    name: 'Native Seafood Rice',
    price: 6500,
    description: 'Ofada-style inspired native rice cooked with palm oil, locust beans, and fresh tiger prawns.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBoTYoa3Uua_D3SkgOFdQoQCGj3eDYng68NduFAb2flNfp0lPSopcA69eZAPh-Gj3rKmestR1ilQSD17UsHoJF_HHoI7bWl2yCBmn-hVpkK__-7UKxP76Jv0F9U7dhpQF4CZ6TEvhgtE4tR3gxRMXSOZEraAeA92zMB1h-zLhYVw2pGt5rH_oVJ6TlT1JEYMfVNMmCqhmbVzgPVxDT-YofgdGXd3mlCY2Wc7kJypHGGJDSY8C9OMJblNI9-IoCndFWfkOOiOk_KRdM',
    category: 'Jollof & Fried Rice'
  },
  {
    id: '4',
    name: 'Jollof & Grilled Chicken',
    price: 6000,
    description: 'Our signature jollof paired with a flame-grilled quarter chicken marinated in suya spice.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDWZJcbamFzFR25wng9OiWV5M_f_wBIkWWOurIJGsDnjc6uk97UsaIwB120MnzeCcieRDMZC8sagueKwe95y6gqsrKfPG5eMWIUNWcKNyCmbDCoKt9GBXSuU4VW9lk11o-CfvD_yWaU1avo88j7UDOdnE5kclujvSq8LxQsmyDN6ivd9ZCs8dEbXL7sOjrh-He8khwv6xcuFdrlGDF3cNADOSREU-LJK1GS8bDyYOnu6ngWClokhfDzH7CwbhpXDdOWcJIKJYJs2LU',
    category: 'Jollof & Fried Rice'
  },
  {
    id: '5',
    name: 'Royal Coconut Rice',
    price: 5200,
    description: 'Creamy coconut milk-infused rice cooked with smoked fish flakes and sweet peppers.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDS9xEJ1KRONudPj3W3Dt-Dq418KltxMapYa0QqB5Wh-8A8ErhTbp9DhBfwM1l9gpHS1QELW6iZPVLXxT2F1RxPaydK8dZ4ANVMAZ3bEjkzgJiQxk2FJZHr0Weunr_141-K-dvblXDJPhigmK7w7sMgXfTPpdNDPQmPynDQ7J4iSByJL9iwSa-mvXEkSqobtpq62WD44xbwdUL9tWNvSgAipcGC_FI6cQJQPgtqHLi73svUZSUgi2ocxF2866j-bAQlG7kTGaCIUqc',
    category: 'Jollof & Fried Rice',
    tag: 'New'
  },
  {
    id: '6',
    name: 'Asun Fried Rice',
    price: 5800,
    description: 'A fusion delight: Classic fried rice tossed with spicy, smoked peppered goat meat.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDero2H2hDj1j_6gWqI7hs3k98c7Opmzb_hNQxicZYeVmidND9kBQ_lV-tk3CNC5H_Q2b0BniEZZdSH3l3im2MKluUpYv0NzCXYcLaSqexr3V1mhFFoznrrBqxM3AllpfkGHsgA7AQY367y7L3vxuZ8jl50SD5byTPLPP-fQWwxd4YsoHC-qpH3ZOdWGil8cjoZb8RJFVOU_s3j0SNlWPGE_zDssD2sn6m7JQwN7Vr_u94rAlhiupxQFi6u48Caf9VYvft-jiNkSjA',
    category: 'Jollof & Fried Rice'
  }
];

export const BASMATI_ITEMS: MenuItem[] = [
    {
        id: '7',
        name: 'Basmati Rice & Stew',
        price: 4000,
        description: 'Long-grain rice with signature Obe-Ata',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_M9mDK2oU0imKfZW3K2FgzNygvzh0NJ14VxLXaVWnkyckIzRMca4AfYAfKV8p7sMk8kAEJusFZows8cgmN2KIvafzdXIwLVVWCqM4BEajfsIqK7lRxu7xd2trb1EeemDOZ_Zw-oWjPVHwrT4gMPkwgMQ5lDc6DNUlGOj5zvD-HjO8FZaMdw4XH0TVmWENaMEkRFpr866rPYs_zJaRknyA6W1b2knqanfzZw_ppg4VgeM3w_TcahEb6ULGjRlo2D0GRtlDxgHE19c',
        category: 'Basmati Selection'
    },
    {
        id: '8',
        name: 'Basmati Stir-Fry',
        price: 4200,
        description: 'Light and healthy vegetable stir-fry',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDRQK23o9SOJhjIZwdjhuz3fK4QgrSLqNyh8lkxlCvPoujXmzxp10vlB5s5Ebuf7x0PEO4Qm5tO0bXCe6jlcT-Foi8Kjvrr-6eNfYXbvtMG4_tBh5kjVK5-Dl0pI5LQK6_P_wE8lQUezimTJCjR3S-GqE95Z6Nsdc3i-TjUPlAZEMKCzeeC5a9gawKnHQYDZ8Mji63_1Jg_bqv3UD7nsWLrRTB3SaWpufnqCWEjOCqcLPIFl5OOx5SPhsQbcsdUd1095XPTq8O13sM',
        category: 'Basmati Selection'
    }
];

export const GIFT_PACKAGES: GiftPackage[] = [
  {
    id: 'gp1',
    name: 'Royal Feast for Two',
    price: 15000,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAYxp8wxxeAeYArre9rvAN6KQJEQq-3oy9az0bnmPx37_fLMkvMJjM-z6FYHnQ9mrqvDPvSMuSvQT2ufZ9WidzYqtTiV1vytyDmc_fVCoV6bgGLZbP5h5DQ6N213dKffN_A5oGaTgpD_GLtxc99EnN351Ez6XbhNVAd1KZ6jR4Bk8p1U8XYxmAS1JtUv1tU7sEn_tKBvP5WDXpf0HlYSA2ChnqT9Tn54Gh-fXtNMBkuj3MUGR3-JYt_zOqpEIW4MMzPci395YueV5A',
    tag: 'Most Loved'
  },
  {
    id: 'gp2',
    name: 'Family Weekend Box',
    price: 35000,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCWwJmPT3g9Rm4Ee1hRNQyEdtKDyVKQcTYys53jixZEP3Gvjp9Hxyv74oBd0stizqvVd5AZ8wU1kmz0Dgn25Iwvjyus7pA0KGYsyb2Ex3bVKXxB0fJbuW8jMShTEF3h9-s-8sI0MCBSW3cO1pc5hXHt-c39js0Oiwpgz6cMKioyh7S5KQPESiR_sL1xRbOdHUg8-8pE0yUdA52V6EgX4F0jEL-eaMFoJUZLE_xoy3b1WAQ9y3eB0J7D-apcRySX6LnVknC4ZJwfcro'
  },
  {
    id: 'gp3',
    name: 'Signature Platter',
    price: 25000,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDBf9dJ45n14rDKYG6QbGj08wtMUjYY8f8ACE_tvJoVaWa3jTJ96QUu9bkA201JcZLERC5u4taEKpUh6IuedtsWbZGHZa4h6rwgnItIj0tf1XHqtNvaQ04sMeOsMx9V3oVQ9vO9CnhywOOJWZ0QPaMYA6q4UXhPvm7aR1OmdWRSR6KL-C5RZJNUp2tliMDmSb7khw2HPL9mAZMnUKZVd6171nEh1aNbbvjyYyd3ufsw4iqHJrMiUlzk-UwK7fS2hK327AwjDwyMFYU'
  }
];
