import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ReactNode } from 'react';

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
  target?: string;
};

export function ButtonLink({ href, children, variant = 'primary', className = '', target }: ButtonLinkProps) {
  const variants = {
    primary:
      'bg-white text-ink shadow-glow hover:bg-blue-100 border border-white/20',
    secondary:
      'bg-white/7 text-white hover:bg-white/12 border border-white/12 backdrop-blur',
    ghost: 'text-slate-200 hover:text-white hover:bg-white/8 border border-transparent',
  };

  const isExternal = href.startsWith('http');

  return (
    <Link
      href={href}
      target={target ?? (isExternal ? '_blank' : undefined)}
      rel={isExternal ? 'noreferrer' : undefined}
      className={`group inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition duration-300 hover:-translate-y-0.5 ${variants[variant]} ${className}`}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
    </Link>
  );
}
