'use client';

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function Container({ children, className, ...props }: ContainerProps) {
  return (
    <div
      className={cn(
        'mx-auto w-full max-w-[1400px] px-4 md:px-6 lg:px-8 overflow-x-hidden',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
