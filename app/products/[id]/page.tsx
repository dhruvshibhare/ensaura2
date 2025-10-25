import { notFound } from 'next/navigation';
import { findProductById, listProducts } from '@/lib/products';
import ProductPageClient from './ProductPageClient';

interface ProductPageProps {
  params: { id: string };
}

export function generateStaticParams() {
  return listProducts().map(p => ({ id: p.id }));
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = findProductById(params.id);

  if (!product) return notFound();

  return <ProductPageClient product={product} />;
}


