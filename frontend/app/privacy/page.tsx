export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-surface-1">
      <div className="container py-16 space-y-6">
        <h1 className="text-3xl font-semibold">Politica de privacidad</h1>
        <p className="text-text-2">
          Este sistema protege datos personales de menores y adultos. Se muestra
          solo la informacion necesaria segun rol e institucion.
        </p>
        <div className="rounded-2xl border border-surface-3 bg-white p-6 text-sm text-text-2">
          <p>
            - Datos sensibles minimizados.
          </p>
          <p>
            - Consentimiento guardian obligatorio.
          </p>
          <p>
            - Logs de acceso y auditoria disponibles.
          </p>
        </div>
      </div>
    </div>
  );
}
