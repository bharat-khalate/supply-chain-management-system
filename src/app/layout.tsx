import '@/app/globals.css';
import { LoadingProvider } from '@/lib/hooks';
import { cn } from "@/lib/utils";
import Store from '@/redux/Store';
import type { Metadata } from 'next';
import localFont from "next/font/local";
import { Toaster } from 'react-hot-toast';

const inter = localFont({
  src: [
    {
      path: "../fonts/Inter-VariableFont_opsz,wght.woff2",
      weight: "100 900",
      style: "normal",
    }
  ],
  variable: "--font-sans",
  display: "swap",
});

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
        <Toaster position="bottom-right" />
        <LoadingProvider>
          <Store>{children}</Store>
        </LoadingProvider>
      </body>
    </html>
  );
}