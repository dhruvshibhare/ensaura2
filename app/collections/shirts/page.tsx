'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star, Filter, Grid, List, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/footer';
import Link from 'next/link';
import { listProductsByCategory } from '@/lib/products';

const shirts = listProductsByCategory('shirts');

export default function ShirtsCollection() {
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
              Auro Drop
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Comfortable, sustainable clothing designed for conscious living and self-expression
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters and Sort */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center space-x-2">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('grid')}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('list')}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {shirts.length === 0 ? (
            <div className="text-center py-24">
              <p className="text-gray-600">No products available in this collection.</p>
            </div>
          ) : (
            <div className={`grid gap-4 sm:gap-8 ${viewMode === 'grid' ? 'grid-cols-2 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
              {shirts.map((shirt, index) => (
                <motion.div
                  key={shirt.id}
                  className={`group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 ${
                    viewMode === 'list' ? 'flex' : ''
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Link href={`/products/${shirt.id}`} className={`block relative ${viewMode === 'list' ? 'w-1/3' : ''}`}>
                    <div className="aspect-[4/5] relative overflow-hidden">
                      <Image
                        src={shirt.images[0]}
                        alt={shirt.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="absolute top-4 right-4">
                      <Button size="icon" variant="ghost" className="rounded-full bg-white/80 hover:bg-white">
                        <Heart className="h-5 w-5 text-gray-600" />
                      </Button>
                    </div>
                  </Link>
                  <div className={`p-6 ${viewMode === 'list' ? 'w-2/3' : ''}`}>
                    <h3 className="font-semibold text-xl mb-2 text-gray-900">
                      {shirt.name}
                    </h3>
                    {viewMode === 'list' && (
                      <p className="text-gray-600 mb-4 line-clamp-2">{shirt.description.split('\n')[2]}</p>
                    )}
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="text-sm text-gray-500 mb-1">Price</div>
                        <div className="flex items-center gap-2">
                          <span className="text-xl font-bold text-gray-900">₹{shirt.price}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
