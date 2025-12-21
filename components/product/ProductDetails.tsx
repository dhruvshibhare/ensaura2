'use client';

import { Product } from '@/types';
import ImageGallery from '@/components/product/ImageGallery';
import { AddToCartActions } from '@/components/product/add-to-cart-actions';

interface ProductDetailsProps {
  product: Product;
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="w-full">
        <ImageGallery 
          images={product.images}
          alt={product.name}
        />
      </div>
      <div className="flex flex-col">
        <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">{product.name}</h1>
        
        {product.soldOut && (
          <div className="mb-4 inline-block">
            <span className="bg-red-100 text-red-800 text-sm font-semibold px-3 py-1 rounded">Sold Out</span>
          </div>
        )}
        
        <div className="flex items-center gap-4 mb-6">
          <div className="text-2xl text-gray-900 font-bold">₹{product.price}</div>
        </div>

        <div className="prose prose-lg max-w-none">
          {/* Quote Section */}
          <div className="mb-8">
            <blockquote className="text-xl italic font-semibold text-gray-900 border-l-4 border-primary pl-4 py-2">
              {product.description.split('\n\n')[0].replace(/"/g, '')}
            </blockquote>
            <p className="mt-4 text-gray-600">
              {product.description.split('\n\n')[1]}
            </p>
          </div>

          {/* Features Section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Features</h2>
            <ul className="space-y-2 list-none pl-0">
              {product.description
                .split('\n\n')
                .find(section => section.includes('•'))
                ?.split('•')
                .filter(Boolean)
                .map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    {feature.trim()}
                  </li>
                ))}
            </ul>
          </div>

          {/* Size Guide Section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Size Guide</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 border">
                <thead className="bg-gray-50">
                  <tr>
                    {['Size', 'Chest', 'Waist', 'Hip', 'Armhole', 'Sleeves', 'Top Length'].map((header) => (
                      <th key={header} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {[
                    { size: 'XS', chest: 30, waist: 24, hip: 32, armhole: 17, sleeves: 18, topLength: 24 },
                    { size: 'S', chest: 32, waist: 26, hip: 34, armhole: 18, sleeves: 18, topLength: 25 },
                    { size: 'M', chest: 36, waist: 30, hip: 37, armhole: 19, sleeves: 18, topLength: 26 },
                    { size: 'L', chest: 38, waist: 32, hip: 40, armhole: 20, sleeves: 18, topLength: 27 },
                    { size: 'XL', chest: 40, waist: 34, hip: 42, armhole: 21, sleeves: 19, topLength: 27 }
                  ].map((row, index) => (
                    <tr key={row.size} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{row.size}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.chest}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.waist}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.hip}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.armhole}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.sleeves}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.topLength}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-sm text-gray-500 italic">All measurements are in inches</p>
          </div>

          {/* Delivery & Return Policy Section */}
          <div className="mb-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h2 className="text-xl font-semibold mb-4">Shipping & Returns</h2>
            <div className="space-y-3">
              <div className="flex items-start">
                <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <div>
                  <p className="font-medium text-gray-900">Delivery</p>
                  <p className="text-sm text-gray-600">4-7 days delivery</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <div>
                  <p className="font-medium text-gray-900">Return Policy</p>
                  <p className="text-sm text-gray-600">We accept returns or exchanges within 3 days and it will be only processed for manufacturing defects or wrong products delivered from our side.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <AddToCartActions product={product} />
      </div>
    </div>
  );
}
