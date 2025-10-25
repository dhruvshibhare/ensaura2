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
        
        <div className="flex items-center gap-4 mb-6">
          <div className="text-2xl text-gray-900 font-bold">₹{product.price * 0.85}</div>
          <div className="text-lg text-gray-500 line-through">₹{product.price}</div>
          <div className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
            15% OFF
          </div>
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
                    {['Size', 'Chest', 'Waist', 'Arms', 'Sleeve', 'Length', 'Hips', 'Top Length'].map((header) => (
                      <th key={header} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {['S', 'M', 'L', 'XL', 'XXL'].map((size, index) => {
                    const measurements = product.description
                      .split('\n')
                      .find(line => line.startsWith(`|   ${size}    `))
                      ?.split('|')
                      .filter(Boolean)
                      .map(m => m.trim());

                    return measurements ? (
                      <tr key={size} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        {measurements.map((measurement, i) => (
                          <td key={i} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {measurement}
                          </td>
                        ))}
                      </tr>
                    ) : null;
                  })}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-sm text-gray-500 italic">All measurements are in inches</p>
          </div>
        </div>

        <AddToCartActions product={product} />
      </div>
    </div>
  );
}