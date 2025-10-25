"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function CartPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to home — cart route has been removed
    router.replace('/');
  }, [router]);

  return null;
}


