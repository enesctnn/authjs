'use client';

import Link from 'next/link';
import { Button, buttonVariants } from '../ui/button';
import { cn } from '@/lib/utils';

interface BackButtonProps {
  href: string;
  label: string;
}

export const BackButton = ({ href, label }: BackButtonProps) => {
  return (
    <Link
      href={href}
      className={cn(
        buttonVariants({
          variant: 'link',
          className: 'font-normal w-full',
          size: 'sm',
        })
      )}
    >
      {label}
    </Link>
  );
};
