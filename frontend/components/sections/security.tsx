const safeguards = [
  'Segregacion de datos por institucion y por rol',
  'Proteccion XSS/CSRF y headers de seguridad',
  'Consentimiento guardian requerido para menores',
  'Auditoria UI para accesos sensibles'
];

export function SecuritySection() {
  return (
    <section className="bg-surface-1">
      <div className="container py-16">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1fr]">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-text-2">Seguridad</p>
            <h2 className="text-3xl font-semibold">Privacidad para menores, control empresarial.</h2>
            <p className="text-text-2">
              El frontend aplica politicas estrictas sin exponer datos sensibles ni logica critica.
            </p>
          </div>
          <ul className="grid gap-4">
            {safeguards.map((item) => (
              <li key={item} className="rounded-2xl border border-surface-3 bg-white p-5 text-sm">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
