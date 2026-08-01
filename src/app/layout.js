import { Inter, Poppins, Instrument_Serif } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';


const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});
const poppins = Poppins({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});
const instrumentSerif = Instrument_Serif({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-instrument',
  display: 'swap',
});

export const metadata = {
  title: 'Elevare — Creative Digital Agency',
  description: 'Elevare is a creative agency turning ideas into impactful digital products.',
  // ... other metadata
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} ${instrumentSerif.variable}`}>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
