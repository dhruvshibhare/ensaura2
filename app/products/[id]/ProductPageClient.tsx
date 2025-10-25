'use client';

import { Product } from '@/types';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/footer';
import ProductDetails from '@/components/product/ProductDetails';

interface ProductPageClientProps {
  product: Product;
}

export default function ProductPageClient({ product }: ProductPageClientProps) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProductDetails product={product} />
        </div>
      </main>
      <Footer />
    </div>
  );
}