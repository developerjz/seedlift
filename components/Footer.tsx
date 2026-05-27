import { site } from '@/lib/site';

export function Footer() {
 return (
  <footer className="border-t border-line bg-panel/40 px-5 py-10 lg:px-8">
   <div className="mx-auto flex max-w-7xl flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
    <a href="#top" className="flex items-center gap-3" aria-label={`${site.name} home`}>
     <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent text-sm font-black text-white">S</span>
     <span className="text-lg font-semibold tracking-tight text-white">{site.name}</span>
    </a>
    <div className="flex flex-col gap-3 text-sm text-slate-400 sm:flex-row sm:items-center sm:gap-6">
     <a className="hover:text-white" href={`mailto:${site.email}`}>{site.email}</a>
     <a className="hover:text-white" href={site.twitter} target="_blank" rel="noreferrer">Twitter</a>
     <span>© 2025 {site.name}</span>
    </div>
   </div>
  </footer>
 );
}
