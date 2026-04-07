import type { Metadata } from 'next';
import '@/app/globals.css';
import Store from '@/store/Store'
import { Toaster } from 'react-hot-toast';

export const metadata: Metadata = {
  title: 'Atelier ERP',
  description: 'Supply Chain Management Dashboard',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Toaster
          position="bottom-right"
        />
        <Store>{children}</Store></body>
    </html>
  );
}
