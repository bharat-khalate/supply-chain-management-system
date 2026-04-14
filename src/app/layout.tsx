import type { Metadata } from 'next';
import '@/app/globals.css';
import Store from '@/redux/Store'
import { Toaster } from 'react-hot-toast';
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { LoadingProvider } from '@/lib/hooks';
const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
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
    <html lang="en" className={cn("font-sans", inter.variable)}>
      <body>
        <Toaster
          position="bottom-right"
        />
        <LoadingProvider>
          <Store>{children}</Store>
        </LoadingProvider>
      </body>
    </html >
  );
}
