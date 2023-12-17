import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { startMoralisClient } from './_api/moralisClient';

const inter = Inter({ subsets: ['latin'] });

startMoralisClient();

export const metadata: Metadata = {
  title: 'Ethereum explorer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
