"use client";

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Product } from '@/types';

interface AddToCartActionsProps {
  product: Product;
}

// The cart has been removed. Keep only a Buy Now action that links to checkout.
export function AddToCartActions({ product }: AddToCartActionsProps) {
  return (
    <div className="flex items-center gap-3">
      <Link href={`/checkout?productId=${product.id}&quantity=1`} className="inline-flex">
        <Button className="bg-primary text-primary-foreground">Buy Now</Button>
      </Link>
    </div>
  );
}


