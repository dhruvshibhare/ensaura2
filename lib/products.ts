import { Product } from '@/types';

const products: Product[] = [
  {
    id: "black-linen-vneck",
    name: "Black Linen V-Neck Collar Shirt",
    description: `
"Love Yourself"

Embrace self-kindness and honor your worth every day. Practicing self-love strengthens emotional balance and confidence. This shirt is a gentle nudge to put yourself first.

Features

• Linen fabric
• V Neckline collar shirt
• Premium craftsmanship

Size Guide

|  Size  |  Chest  |  Waist  | Arms | Sleeve | Length |  Hips   | Top Length |
|--------|---------|---------|------|--------|---------|---------|------------|
|   S    | 30-33   | 24-27   |  17  |   18   |   19    | 32-38   |    24     |
|   M    | 32-36   | 26-29   |  18  |   18   |   23    | 34-38   |    25     |
|   L    | 35-38   | 30-32   |  19  |   18   |   26    | 39-40   |    27     |
|   XL   | 38-42   | 32-36   |  20  |   18   |   27    | 40-43   |    29     |
|  XXL   | 40-44   | 34-40   |  21  |   19   |   28    | 42-46   |    30     |

All measurements are in inches`,
    price: 2500,
    category: 'shirts',
    images: [
      "https://res.cloudinary.com/dwoifav4o/image/upload/v1761465650/IMG_2623_jkhhgn.jpg",
      "https://res.cloudinary.com/dwoifav4o/image/upload/v1761465521/IMG_26241_yaayuy.jpg",
      "https://res.cloudinary.com/dwoifav4o/image/upload/v1761465521/IMG_2624_xpeyo3.jpg",
      "https://res.cloudinary.com/dwoifav4o/image/upload/v1761465651/IMG_26244_dz3kov.jpg"
    ],
    stock: 50,
    featured: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "blue-floral-linen",
    name: "Blue Floral Linen Button-Up Shirt",
    description: `
"In Still Minds, Beauty Grows"

Find peace in stillness and let your mind rest. Calm thoughts reduce stress and help your inner beauty shine. Wear this as a reminder to nurture your mind and soul.

Features

• Linen fabric
• Floral pattern with cutout sleeves
• Premium craftsmanship

Size Guide

|  Size  |  Chest  |  Waist  | Arms | Sleeve | Length |  Hips   | Top Length |
|--------|---------|---------|------|--------|---------|---------|------------|
|   S    | 30-33   | 24-27   |  17  |   18   |   19    | 32-38   |    24     |
|   M    | 32-36   | 26-29   |  18  |   18   |   23    | 34-38   |    25     |
|   L    | 35-38   | 30-32   |  19  |   18   |   26    | 39-40   |    27     |
|   XL   | 38-42   | 32-36   |  20  |   18   |   27    | 40-43   |    29     |
|  XXL   | 40-44   | 34-40   |  21  |   19   |   28    | 42-46   |    30     |

All measurements are in inches`,
    price: 2650,
    category: 'shirts',
    images: [
      "https://res.cloudinary.com/dwoifav4o/image/upload/v1761422629/blue-floral1_kmblxo.png",
      "https://res.cloudinary.com/dwoifav4o/image/upload/v1761422629/blue-floral2_zs6fvk.png",
      "https://res.cloudinary.com/dwoifav4o/image/upload/v1761422629/blue-floral3_hasjjc.png",
      "https://res.cloudinary.com/dwoifav4o/image/upload/v1761422627/blue-floral4_cwvbsb.png"
    ],
    stock: 50,
    featured: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "green-striped",
    name: "Green Striped Collar Shirt",
    description: `
"Confidence is Silence, Insecurities are Loud"

True confidence comes from within, not from seeking approval. Quiet self-assurance builds resilience and inner strength. Wear it as your daily reminder of inner power.

Features

• Cotton fabric
• Striped pattern
• Premium craftsmanship

Size Guide

|  Size  |  Chest  |  Waist  | Arms | Sleeve | Length |  Hips   | Top Length |
|--------|---------|---------|------|--------|---------|---------|------------|
|   S    | 30-33   | 24-27   |  17  |   18   |   19    | 32-38   |    24     |
|   M    | 32-36   | 26-29   |  18  |   18   |   23    | 34-38   |    25     |
|   L    | 35-38   | 30-32   |  19  |   18   |   26    | 39-40   |    27     |
|   XL   | 38-42   | 32-36   |  20  |   18   |   27    | 40-43   |    29     |
|  XXL   | 40-44   | 34-40   |  21  |   19   |   28    | 42-46   |    30     |

All measurements are in inches`,
    price: 2200,
    category: 'shirts',
    images: [
      "https://res.cloudinary.com/dwoifav4o/image/upload/v1761422654/green-striped2_i93ivn.png",
      "https://res.cloudinary.com/dwoifav4o/image/upload/v1761422654/green-striped1_ah5ydt.png",
      "https://res.cloudinary.com/dwoifav4o/image/upload/v1761422654/green-striped3_wki1gn.png",
      "https://res.cloudinary.com/dwoifav4o/image/upload/v1761422656/green-striped4_gknt8j.png"
    ],
    stock: 50,
    featured: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "black-striped-knot",
    name: "Black Shirt with Stripes and Knot Cuffs",
    description: `
"It's Time to Release What You Can't Control"

Let go of worries and focus on what you can change. Releasing control reduces anxiety and brings clarity. This affirmation reminds you to free your mind and breathe.

Features

• Cotton blend fabric
• Striped pattern with knot cuffs
• Premium craftsmanship

Size Guide

|  Size  |  Chest  |  Waist  | Arms | Sleeve | Length |  Hips   | Top Length |
|--------|---------|---------|------|--------|---------|---------|------------|
|   S    | 30-33   | 24-27   |  17  |   18   |   19    | 32-38   |    24     |
|   M    | 32-36   | 26-29   |  18  |   18   |   23    | 34-38   |    25     |
|   L    | 35-38   | 30-32   |  19  |   18   |   26    | 39-40   |    27     |
|   XL   | 38-42   | 32-36   |  20  |   18   |   27    | 40-43   |    29     |
|  XXL   | 40-44   | 34-40   |  21  |   19   |   28    | 42-46   |    30     |

All measurements are in inches`,
    price: 2200,
    category: 'shirts',
    images: [
      "https://res.cloudinary.com/dwoifav4o/image/upload/v1761465505/IMG_2630_wljjuj.jpg",
      "https://res.cloudinary.com/dwoifav4o/image/upload/v1761465521/im333_uochui.jpg",
      "https://res.cloudinary.com/dwoifav4o/image/upload/v1761465505/IMG_26321_gvijdk.jpg",
      "https://res.cloudinary.com/dwoifav4o/image/upload/v1761466024/IMG_2632_wqh6ai.jpg",
    ],
    stock: 50,
    featured: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "grey-white-striped",
    name: "Grey White Striped Relaxed-Fit Collar Shirt",
    description: `
"In Still Minds, Beauty Grows"

Find peace in stillness and let your mind rest. Calm thoughts reduce stress and help your inner beauty shine. Wear this as a reminder to nurture your mind and soul.

Features

• Cotton blend fabric
• Striped pattern
• Relaxed fit design
• Premium craftsmanship

Size Guide

|  Size  |  Chest  |  Waist  | Arms | Sleeve | Length |  Hips   | Top Length |
|--------|---------|---------|------|--------|---------|---------|------------|
|   S    | 30-33   | 24-27   |  17  |   18   |   19    | 32-38   |    24     |
|   M    | 32-36   | 26-29   |  18  |   18   |   23    | 34-38   |    25     |
|   L    | 35-38   | 30-32   |  19  |   18   |   26    | 39-40   |    27     |
|   XL   | 38-42   | 32-36   |  20  |   18   |   27    | 40-43   |    29     |
|  XXL   | 40-44   | 34-40   |  21  |   19   |   28    | 42-46   |    30     |

All measurements are in inches`,
    price: 2200,
    category: 'shirts',
    images: [
      "https://res.cloudinary.com/dwoifav4o/image/upload/v1761466347/IMG_2628_oujmxd.jpg",
      "https://res.cloudinary.com/dwoifav4o/image/upload/v1761466347/IMG_26293_sj65dk.jpg",
      "https://res.cloudinary.com/dwoifav4o/image/upload/v1761466347/IMG_26294_lcmm9y.jpg",
      "https://res.cloudinary.com/dwoifav4o/image/upload/v1761466347/IMG_2629_oysj5p.jpg"
    ],
    stock: 50,
    featured: true,
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

export function listProducts(): Product[] {
  return products;
}

export function findProductById(id: string): Product | undefined {
  return products.find(p => p.id === id);
}

export function listProductsByCategory(category: Product['category']): Product[] {
  return products.filter(p => p.category === category);
}


