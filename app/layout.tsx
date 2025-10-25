import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ensaura - Mindful Wellness Products',
  description: 'Mindful apparel for conscious living',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
