import Footer from './components/Footer';
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Oceanic Advisors',
  description: 'Trusted maritime consultancy services worldwide.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}
      <Footer />
      </body>
    </html>
  );
}
