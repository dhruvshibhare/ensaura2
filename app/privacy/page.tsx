'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function PrivacyPolicy() {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg">
            <p className="text-gray-600 mb-6">Last updated: October 26, 2025</p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-gray-600">
                At Ensaura, we respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit our website or make a purchase.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Contact information (name, email address, phone number)</li>
                <li>Shipping and billing addresses</li>
                <li>Order history and preferences</li>
                <li>Payment information (processed securely through our payment providers)</li>
                <li>Device information and browsing activity on our website</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. How We Use Your Information</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Process and fulfill your orders</li>
                <li>Communicate with you about your orders and products</li>
                <li>Send you marketing communications (with your consent)</li>
                <li>Improve our website and product offerings</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Data Security</h2>
              <p className="text-gray-600">
                We implement appropriate security measures to protect your personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Contact Us</h2>
              <p className="text-gray-600">
                If you have any questions about our Privacy Policy, please contact us at:<br />
                Email: hello@ensaura.com<br />
                Phone: +91 8882930034
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}