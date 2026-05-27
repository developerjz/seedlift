type SectionHeaderProps = {
 eyebrow: string;
 title: string;
 description?: string;
 align?: 'left' | 'center';
};

export function SectionHeader({ eyebrow, title, description, align = 'left' }: SectionHeaderProps) {
 return (
  <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
   <p className="mb-4 text-xs font-semibold uppercase tracking-[0.42em] text-accent/90">{eyebrow}</p>
   <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">{title}</h2>
   {description ? <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">{description}</p> : null}
  </div>
 );
}
