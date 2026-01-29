const features = [
  {
    title: 'Multi-tenant real',
    description: 'Subdominios o rutas con branding, modulos y reglas por institucion.'
  },
  {
    title: 'IA preparada',
    description: 'Tutor virtual, recomendaciones y feedback automatizado sin exponer logica.'
  },
  {
    title: 'Seguridad critica',
    description: 'Controles de sesion, roles, consentimiento y privacidad de menores.'
  },
  {
    title: 'Render hibrido',
    description: 'SSR + SSG + ISR para rendimiento y SEO con contenido educativo.'
  }
];

export function FeatureSection() {
  return (
    <section className="bg-white">
      <div className="container py-16">
        <div className="max-w-2xl space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-text-2">Capacidades</p>
          <h2 className="text-3xl font-semibold">Arquitectura lista para crecer.</h2>
          <p className="text-text-2">
            Disenada para plataformas educativas de alto impacto con focus en seguridad y escalabilidad.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {features.map((feature) => (
            <div key={feature.title} className="rounded-2xl border border-surface-3 bg-surface-1 p-6">
              <h3 className="text-lg font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm text-text-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
