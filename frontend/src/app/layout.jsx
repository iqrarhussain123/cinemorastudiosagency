import './globals.css';
import GridLines from '@/components/GridLines';
import { Inter, Space_Grotesk } from 'next/font/google';

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-space-grotesk',
    weight: ['500', '600', '700'],
});

const fontVars = {
    '--font-sans': inter.style.fontFamily,
    '--font-grotesk': spaceGrotesk.style.fontFamily,
    '--font-display': `"Mattone", ${spaceGrotesk.style.fontFamily}`,
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
const metadataBase = siteUrl ? new URL(siteUrl) : undefined;

export const metadata = {
    title: 'Home | Cinemora Studios',
    description: 'A refined and high-end Framer website template crafted for agencies that want to look sharp and professional.',
    keywords: 'cinemora studios, digital agency, framer template, agency website, creative studio',
    ...(metadataBase ? { metadataBase } : {}),
    openGraph: {
        title: 'Home | Cinemora Studios',
        description: 'A refined and high-end Framer website template crafted for agencies that want to look sharp and professional.',
        type: 'website',
        ...(siteUrl ? { url: siteUrl } : {}),
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${inter.variable} ${spaceGrotesk.variable}`} style={fontVars}>
                <GridLines />
                {children}
            </body>
        </html>
    );
}
