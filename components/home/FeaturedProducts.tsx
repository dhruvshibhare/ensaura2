'use client';

import { motion } from 'framer-motion';
import OverlapSection from '@/components/ui/overlap-section';
import Image from 'next/image';
import Link from 'next/link';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { listProducts } from '@/lib/products';
import { useState } from 'react';

const featuredProducts = listProducts().filter(p => p.featured);

export default function FeaturedProducts() {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});
  return (
    <OverlapSection className="bg-white rounded-t-3xl shadow-xl">
      <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Products
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Handpicked favorites that embody our commitment to quality and mindfulness
          </p>
        </motion.div>

        {featuredProducts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600">No featured products available right now.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Link href={`/products/${product.id}`} className="block relative">
                  <div className="aspect-[4/5] relative overflow-hidden">
                    <div className="relative w-full h-full bg-gray-100">
                      {!imageErrors[product.id] ? (
                        <Image
                          src={product.images[0]}
                          alt={product.name}
                          width={400}
                          height={500}
                          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                          onError={() => {
                            console.error(`Failed to load image: ${product.images[0]}`);
                            setImageErrors(prev => ({ ...prev, [product.id]: true }));
                          }}
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-400">
                          <div className="text-center p-4">
                            <p className="text-sm">{product.name}</p>
                            <p className="text-xs mt-2">Image loading...</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Button size="icon" variant="ghost" className="rounded-full bg-white/80 hover:bg-white">
                      <Heart className="h-5 w-5 text-gray-600" />
                    </Button>
                  </div>
                </Link>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-1 text-gray-900">
                    {product.name}
                  </h3>
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Price</div>
                      <div className="flex items-center gap-2">
                        <span className="text-xl font-bold text-gray-900">₹{product.price}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* no CTA when there are no products */}
      </div>
    </OverlapSection>
  );
}
