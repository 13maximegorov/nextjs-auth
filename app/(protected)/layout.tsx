import { Navbar } from '@/app/(protected)/_components/Navbar';
import type { ReactNode } from 'react';

interface ProtectedLayoutProps {
  children: ReactNode;
}

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-y-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-500 to-blue-800">
      <Navbar />
      {children}
    </div>
  );
};

export default ProtectedLayout;
