import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Lora } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { SITE_CONFIG } from '@/lib/constants';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
  weight: ['600', '700'],
});

const lora = Lora({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-serif',
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: {
    template: '%s | SHAH MD. JALAL UDDIN',
    default: SITE_CONFIG.title,
  },
  description: SITE_CONFIG.description,
  authors: [{ name: SITE_CONFIG.author, url: SITE_CONFIG.url }],
  creator: SITE_CONFIG.author,
  publisher: SITE_CONFIG.author,
  keywords: [
    'computational chemistry',
    'molecular modeling',
    'graduate student',
    'research',
    'scientific computing',
    'web applications',
    'SMILES notation',
    'chemical informatics',
    'next.js',
    'typescript',
    'academic portfolio',
    'PhD applications',
    'MS applications',
    'molecular analyzer'
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    images: [
      {
        url: `${SITE_CONFIG.url}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.name} - Academic Portfolio`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    images: [`${SITE_CONFIG.url}/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  alternates: {
    canonical: SITE_CONFIG.url,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: SITE_CONFIG.name,
    jobTitle: 'Computational Chemistry Graduate Student',
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    email: SITE_CONFIG.email,
    knowsAbout: [
      'Computational Chemistry',
      'Molecular Modeling',
      'Scientific Computing',
      'Web Development',
      'Chemical Informatics',
      'SMILES Notation',
      'Python Programming',
      'TypeScript',
      'Next.js'
    ],
    alumniOf: {
      '@type': 'Organization',
      name: 'Academic Institution' // Update with actual institution
    },
    sameAs: [
      'https://github.com/shahjalal-shanto',
      'https://linkedin.com/in/shahjalal-shanto'
    ],
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': SITE_CONFIG.url
    }
  };

  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${lora.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <link rel="canonical" href={SITE_CONFIG.url} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0d47a1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`antialiased min-h-screen flex flex-col bg-background text-foreground font-serif`}
        suppressHydrationWarning={true}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}