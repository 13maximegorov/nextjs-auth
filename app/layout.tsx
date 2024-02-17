import { auth } from '@/auth';
import { Toaster } from '@/components/ui/sonner';
import { cn } from '@/lib/utils';
import '@/styles/globals.css';
import type { Metadata } from 'next';
import { SessionProvider } from 'next-auth/react';
import { Inter } from 'next/font/google';

const fontSans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'NextJS Auth',
  description: 'Advanced authentication in NextJS application',
};

const RootLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <html
        lang="en"
        suppressHydrationWarning
      >
        <body
          className={cn(
            'min-h-screen bg-background font-sans',
            fontSans.variable,
          )}
        >
          <Toaster />
          {children}
        </body>
      </html>
    </SessionProvider>
  );
};

export default RootLayout;
