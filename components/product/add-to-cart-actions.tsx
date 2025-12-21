"use client";

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Product } from '@/types';

interface AddToCartActionsProps {
  product: Product;
}

// The cart has been removed. Keep only a Buy Now action that links to checkout.
export function AddToCartActions({ product }: AddToCartActionsProps) {
  if (product.soldOut) {
    return (
      <div className="flex items-center gap-3">
        <Button disabled className="bg-gray-400 text-gray-600 cursor-not-allowed">
          Sold Out
        </Button>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3">
      <Link href={`/checkout?productId=${product.id}&quantity=1`} className="inline-flex">
        <Button className="bg-primary text-primary-foreground">Buy Now</Button>
      </Link>
    </div>
  );
}





