'use client';
import { Sora } from 'next/font/google';
import '@src/app/globals.css';
import { ThemeProvider } from '@src/theme/providers';
import Header from '@src/components/header';

const sora = Sora({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  weight: ['200', '300', '400', '600', '700']
});

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Header />
      </head>
      <body className={sora.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
