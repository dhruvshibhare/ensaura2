'use client';

import { motion } from 'framer-motion';
import OverlapSection from '@/components/ui/overlap-section';
import Image from 'next/image';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Ayushi Jha',
    role: 'Creative Director',
    image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    content: "The Black Linen V-Neck Collar Shirt is simply perfect. The linen quality is exceptional, and the V-neck design adds a modern touch that works great for both casual and semi-formal occasions.",
    product: 'Black Linen V-Neck Collar Shirt'
  },
  {
    id: 2,
    name: 'Kavya Reddy',
    role: 'Fashion Blogger',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    content: "The Blue Floral Linen Button-Up Shirt is a statement piece! The floral pattern is subtle yet eye-catching, and the linen fabric is perfect for Indian summers. Gets so many compliments every time I wear it.",
    product: 'Blue Floral Linen Button-Up Shirt'
  },
  {
    id: 3,
    name: 'Saloni Khanna',
    role: 'Business Consultant',
    image: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    content: "The Grey White Striped Relaxed-Fit Collar Shirt has become my go-to for client meetings. The relaxed fit is comfortable yet professional, and the stripe pattern gives it a sophisticated edge. Brilliant craftsmanship!",
    product: 'Grey White Striped Relaxed-Fit Collar Shirt'
  }
];

export default function Testimonials() {
  return (
    <OverlapSection className="bg-accent rounded-t-3xl shadow-xl">
      <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Customer Reviews
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See what our customers love about Aura Drop's thoughtfully crafted shirts
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>

              <div className="flex text-yellow-400 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>

              <blockquote className="text-gray-700 mb-4 italic leading-relaxed">
                "{testimonial.content}"
              </blockquote>

              <div className="text-sm text-primary font-medium">
                Purchased: {testimonial.product}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </OverlapSection>
  );
}
