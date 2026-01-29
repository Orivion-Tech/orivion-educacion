import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer className="bg-surface-1 border-t border-surface-3">
      <div className="container py-10 text-sm text-text-2 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p>2026 SAA. Educacion segura y adaptativa.</p>
        <div className="flex gap-4">
          <Link href="/privacy">Privacidad</Link>
          <Link href="/terms">Terminos</Link>
          <Link href="/login">Ingreso</Link>
        </div>
      </div>
    </footer>
  );
}
