'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function TermsOfService() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-50 py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Button
          variant="ghost"
          className="mb-6 hover:bg-gray-100"
          onClick={() => router.back()}
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
          
          <div className="prose prose-lg">
            <p className="text-gray-600 mb-6">Last updated: October 26, 2025</p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-600">
                By accessing and using ensauraa's website and services, you agree to these Terms of Service. If you do not agree with any part of these terms, please do not use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Product Information</h2>
              <p className="text-gray-600">
                We strive to display our products accurately, but colors and details may vary. We reserve the right to modify product descriptions and prices at any time without notice.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Orders and Payment</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>All orders are subject to availability and acceptance</li>
                <li>Prices are in Indian Rupees (INR) and include applicable taxes</li>
                <li>Payment must be made in full before order processing</li>
                <li>We accept various payment methods as displayed during checkout</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Shipping and Delivery</h2>
              <p className="text-gray-600">
                Delivery times are estimates only. We are not responsible for delays beyond our control. Risk of loss and title for items pass to you upon delivery to the carrier.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Intellectual Property</h2>
              <p className="text-gray-600">
                All content on our website, including text, graphics, logos, and images, is our property and protected by copyright laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Contact Information</h2>
              <p className="text-gray-600">
                For any questions regarding these Terms of Service, please contact us:<br />
                Email: ensauraa@gmail.com<br />
                Phone: +91 8882930034
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
