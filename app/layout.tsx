import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Tharamanakatte Boys - Cooking Adventures',
  description: 'Join us on our beautifull journey as we explore amazing recipes together',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50`}>
        <Navbar />
        <main>{children}</main>
        <footer className="bg-white border-t border-gray-100 py-8 mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-gray-600 text-sm">
              © 2025 Tharamanakatte Boys. Made with ❤️ and lots of spices.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}