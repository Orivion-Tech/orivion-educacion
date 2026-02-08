# **ORIVION — Cronograma de Ejecución del Piloto Educativo**

**Documento de Guía CPO | Año Lectivo 2026 — VERSIÓN AJUSTADA**





## **Grados y Materias del Piloto**



## **Vista General del Año Lectivo**



## **Estrategia Ejecutiva (Ajustada según Doctrina de Producto Orivion)**

Este piloto se estructura siguiendo la **Directiva de Innovación Silenciosa**: resolver dolores operativos reales del presente antes que promesas de futuro. Las primeras 8 semanas (Enero 26 – Marzo 22) se dedican a construir la base técnica y los módulos que atacan los dolores explícitos encontrados en el levantamiento de dolencias con las instituciones para el piloto: asistencia centralizada (su mayor dolor operativo), portal de padres con identidad digital propia, y sistema de notas básico.

De Abril a Diciembre, cada funcionalidad nueva debe pasar los **Value Gates** antes de ser visible al cliente:

**Gate A (Ahorro de Tiempo):** ¿Reduce horas de trabajo operativo?

**Gate B (Reducción de Fricción):** ¿Elimina un paso innecesario del flujo actual?

**Gate C (Control y Visibilidad):** ¿De datos que hoy no tienen para tomar decisiones?

**Toda innovación que no pase estos filtros vive en el Sandbox (Backlog B)** hasta que el mercado la solicite explícitamente.

**Principio de Flexibilidad Controlada:** Este cronograma permite ajustes, pero **solo para agregar funcionalidades que resuelvan dolores reales confirmados por la institución**. No se adelantan features futuristas sin validación de mercado.





# **FASE PRE-PILOTO: DESARROLLO BASE (Enero – Marzo 2026)**

Esta fase tiene como objetivo tener un sistema operativo mínimo listo para el 1 de Abril que resuelva los 3 dolores críticos reportados por la institución. El CPO entrega especificaciones centradas en alivio operativo, no en complejidad pedagógica.



## **FASE 1: Arquitectura Base e Identidad**

**Semanas 1-2 | 26 Ene – 8 Feb** Cimientos del sistema: autenticación, roles, modelo académico y carga de datos.



### **SEMANA 1 — 26 Ene – 1 Feb | Configuración & Modelo de Datos**

**CPO (Producto & Diseño):** Entrega el Diccionario de Datos Maestro con los campos por entidad (Usuario, Rol, Institución, Perfil). Entrega la Matriz de Permisos RBAC con las reglas de acceso por rol (Rector / Docente / Padre / Estudiante). Entrega los Wireframes Base: el Sitemap de navegación general y el Layout principal de la aplicación.

**CTO (Arquitectura & Backend):** Realiza el setup del micro servicio y la configuración de PostgreSQL en Google Cloud. Implementa las tablas core: Users, Roles, Institutions con sus relaciones base. Desarrolla el módulo de autenticación con JWT + Passport para login seguro. **Frontend & Integración:** Instala y configura el theming de PrimeNG + Tailwind CSS. Construye los componentes base: Layout, Navbar, Sidebar. Desarrolla la pantalla de Login conectada al API de autenticación.



### **SEMANA 2 — 2 Feb – 8 Feb | Estructura Académica & Carga de Datos**

**CPO (Producto & Diseño):** Diseña la plantilla de carga masiva (.csv estándar para instituciones). Entrega el diseño UI de las vistas 'Listado de Alumnos' y 'Gestión de Perfiles'. Define la jerarquía académica: Grado → Paralelo → Materia → Estudiante.

**CTO (Arquitectura & Backend):** Realiza el modelado de tablas académicas: Period, Level, Course, Enrollment. Desarrolla el motor de importación: endpoint para procesar CSV de estudiantes. **Frontend & Integración:** Desarrolla el CRUD de Usuarios (Crear, Editar, Eliminar). Implementa la interfaz de carga de archivos (Upload) con visualización de errores.





## **FASE 2: Módulos Operativos Críticos**

**Semanas 3-4 | 9 Feb – 22 Feb** Resuelve los dolores reales de la institución: asistencia centralizada, notas y portal de padres.



### **SEMANA 3 — 9 Feb – 15 Feb | Gestión de Asistencia**

**CPO (Producto & Diseño):** Define las reglas de negocio: cálculo de asistencia y tipos de justificación. Entrega los mockups del **Panel Directivo Centralizado** (esto resuelve el dolor #1 de Erika: "ver asistencia clase por clase en Teams"). Diseña la vista mobile del reporte de asistencia para padres.

**CTO (Arquitectura & Backend):** Desarrolla el backend de Asistencia: tablas Attendance_Record y Justifications. Optimiza las queries SQL para generación de reportes en tiempo real (la Rectora debe ver TODO en 1 click). **Frontend & Integración:** Implementa la interfaz 'Toma de Lista' para docentes (DataTable editable). Integra los Charts en el Dashboard Directivo **con enfoque en métricas de control** (ausentismo por curso, tendencias semanales).

**✅ Value Gate C cumplido:** Control y Visibilidad — La rectora puede ver toda la asistencia centralizada sin entrar clase por clase.



### **SEMANA 4 — 16 Feb – 22 Feb | Calificaciones & Portal de Padres**

**CPO (Producto & Diseño):** Define las escalas de evaluación según el sistema del colegio (cuantitativo/cualitativo). Entrega el diseño UI del boletín de calificaciones y grid de ingreso de notas. Redacta las plantillas de correo para **comunicación directa a padres** (resuelve dolor #2 y #3 de Erika).

**CTO (Arquitectura & Backend):** Desarrolla el backend de Notas: tablas Grades, Activities, Subjects. Implementa la lógica de cálculo de promedios ponderados. **Frontend & Integración:** Desarrolla el Grid de Notas (componente tipo Excel con validaciones). Implementa el **Portal de Padres v1 con identidad digital propia**: el padre tiene su propio usuario y recibe notificaciones directas (ya no depende del estudiante).

**✅ Value Gate B cumplido:** Reducción de Fricción — Los padres reciben información directamente sin intermediarios.





## **FASE 3: Sistema de Alertas Tempranas y Comunicación**

**Semanas 5-6 | 23 Feb – 8 Mar** **OBJETIVO AJUSTADO:** En lugar de "personalización pedagógica", enfocamos en **alertas automáticas de riesgo** que dan control a la institución.



### **SEMANA 5 — 23 Feb – 1 Mar | Configuración de Alertas de Riesgo**

**CPO (Producto & Diseño):** Define las **reglas de negocio para alertas automáticas**:

Riesgo de Asistencia: 3 faltas consecutivas o 5 faltas en el mes

Riesgo Académico: Nota < 7/10 en 2+ actividades consecutivas

Tarea no entregada: 24h antes del vencimiento

Diseña el panel de configuración de alertas para el Rector (simple ON/OFF por tipo de alerta).

**CTO (Arquitectura & Backend):** Implementa **triggers automáticos en la base de datos** que detectan estas condiciones. Desarrolla el sistema de cola de notificaciones (email + in-app).

**Frontend & Integración:** Desarrolla el panel de configuración de alertas para Rectorado. Implementa las notificaciones in-app para padres y docentes.

**✅ Value Gate C cumplido:** Control — La institución sabe quién está en riesgo sin esperar al fin de bimestre.

**🚫 Eliminado del roadmap visible:** Wizard de Onboarding para "estilos de aprendizaje" (esto es innovación no pedida que añade fricción al estudiante).



### **SEMANA 6 — 2 Mar – 8 Mar | Centro de Notificaciones y QA**

**CPO (Producto & Diseño):** Diseña las **plantillas de correo oficiales** para:

"Aviso de Falta Injustificada"

"Alerta de Tarea Pendiente"

"Boletín de Calificaciones Disponible"

Ejecuta QA funcional enfocado en: ¿Las alertas llegan a tiempo? ¿Los padres las entienden sin confusión?

**CTO (Arquitectura & Backend):** Automatiza el envío de notificaciones según los triggers configurados. Pruebas de carga del sistema de emails (500 padres recibirán notificaciones simultáneamente).

**Frontend & Integración:** Implementa la **Bandeja de Entrada para Padres** (sin chat social, solo avisos oficiales del colegio). Pruebas de usabilidad mobile (los padres usan principalmente el celular).

**✅ Value Gate B cumplido:** Reducción de Fricción — Ya no hay que llamar a los padres uno por uno para informar faltas.



## **FASE 4: Preparación Final Pre-Go Live**

**Semanas 7-8 | 9 Mar – 22 Mar** Ajustes finales, datos demo completos, validación con institución y lanzamiento preparado.



### **SEMANA 7 — 9 Mar – 15 Mar | Ajustes y Validación**

**CPO (Producto & Diseño):** Realiza **demostración en vivo con la Rectora Erika** usando datos demo que simulan sus dolores reales:

Mostrar cómo ve asistencia centralizada (vs. Teams clase por clase)

Mostrar cómo los padres reciben alertas automáticas

Mostrar el ahorro de tiempo en ingreso de notas

Aplica ajustes de UX según el feedback. Prepara la documentación de onboarding **operativo** (no pedagógico): cómo cargar estudiantes, cómo tomar lista, cómo calificar.

**CTO (Arquitectura & Backend):** Carga datos demo completos que repliquen la estructura real del colegio (500 estudiantes, aunque solo 100 en piloto). Ejecuta pruebas de seguridad y roles. Configura el entorno de producción en Google Cloud.

**Frontend & Integración:** Aplica ajustes visuales según feedback de la rectora. Ejecuta pruebas en dispositivos mobile reales (iPhone y Android de gama baja, común en Ecuador).



### **SEMANA 8 — 16 Mar – 22 Mar | Pre-Lanzamiento**

**CPO (Producto & Diseño):** Coordina la firma de alianza con 25 de Marzo. Prepara el **plan de comunicación al colegio** enfocado en alivio operativo:

"Ya no necesitan entrar clase por clase para ver asistencia"

"Los padres reciben alertas automáticas sin intermediarios"

"El sistema calcula promedios automáticamente"

Define el esquema de **soporte nivel 1 durante las primeras 2 semanas** (respuesta en 24h máximo).

**CTO (Arquitectura & Backend):** Realiza el deploy final a producción. Ejecuta monitoreo de estabilidad durante 48 horas. Prepara el **plan de contingencia** en caso de incidentes en el go-live (rollback, comunicación de downtime).

**Frontend & Integración:** Ejecuta revisión final de todos los flujos en producción. Realiza smoke tests completos por rol: Rector, Docente, Padre y Estudiante.



# **FASE OPERATIVA: AÑO LECTIVO DEL PILOTO (Abril – Diciembre 2026)**

Una vez en producción, el sistema evoluciona en ciclos de desarrollo **validados por Value Gates**. El objetivo NO es mostrar "capacidad técnica", sino **medir impacto en ahorro de tiempo y control operativo**.



## **ABRIL 2026: Go Live & Estabilización**

**Semanas 9-12** El piloto opera. Se recopila feedback enfocado en: ¿Ahorra tiempo? ¿Da control? ¿Reduce fricción?

**CPO:** Monitoreo diario de adopción centrado en métricas de alivio operativo:

¿Cuántas veces por semana la Rectora entra al dashboard? (debe ser diario si resuelve el dolor)

¿Los docentes toman asistencia más rápido que en Teams?

¿Los padres abren las notificaciones? (tasa de apertura de emails)

Ejecuta la **primera encuesta de satisfacción** en semana 2 del piloto:

Pregunta clave a la Rectora: "¿Cuántas horas semanales ahorra vs. Teams?"

Pregunta clave a Docentes: "¿El sistema facilita o complica su trabajo?"

Pregunta clave a Padres: "¿Recibe información a tiempo?"

Documenta las primeras fricciones reportadas (bugs, confusiones de UX) para priorizar fixes.

**CTO:** Soporte técnico nivel 1 con respuesta en 24h. Monitoreo de performance (tiempo de carga de páginas < 3 segundos). Fix de bugs críticos en máximo 48h. Prepara el entorno staging para desarrollo de Mayo.

**Producto:** Inicio de desarrollo iterativo **solo basado en feedback del piloto** (no en ideas internas). Ajuste de notificaciones según comportamiento real de padres (si no las abren, cambiar frecuencia o redacción). Refinamiento del portal de padres según uso real observado.



## **MAYO – JUNIO 2026: Automatización de Tarea Docente**

**Semanas 13-20** **OBJETIVO AJUSTADO:** En lugar de "IA y Personalización", enfocamos en **Asistente de Creación de Evaluaciones** que ahorra tiempo a docentes.

**CPO:** Valida el dolor antes de construir: "¿Cuánto tiempo tardan los docentes en crear un examen?". Si es significativo (>1 hora), procede.

Diseña el **Generador de Evaluaciones** (internamente usa IA, externamente se vende como herramienta de productividad):

El docente selecciona: Materia, Tema, Dificultad, Cantidad de Preguntas

El sistema genera un banco de 10-20 preguntas tipo quiz

El docente revisa, edita y publica

Ejecuta la **primera medición de impacto bimestral**:

Comparación grupo piloto vs grupo control: ¿Hay diferencia en rendimiento académico? (probablemente aún no, es muy pronto)

**Métrica más importante:** Comparación de satisfacción docente (piloto vs resto del colegio que usa Teams)

**CTO:** Implementa el **motor de generación de preguntas** usando IA generativa (internamente puede ser GPT-4 API o modelo local). Asegura que el contenido generado sea **revisable y editable** (nunca auto-publicado sin revisión humana).

**🛠️ Sandbox (Backlog B - Invisible al cliente):** El CTO empieza a construir el motor de recomendación adaptativa usando los datos del piloto (qué estudiantes fallan en qué temas, patrones de error). **Esto NO se muestra al cliente todavía**, solo se recopilan datos para validar hipótesis internas.

**Producto:** Implementa el **"Asistente de Creación de Exámenes"** en el panel docente. Permite crear un quiz de 10 preguntas en 1 click (ahorro estimado: 45 minutos por examen). Mejora el dashboard institucional con métricas de adopción real (cuántos docentes usan el generador vs cuántos siguen creando manual).

**✅ Value Gate A cumplido:** Ahorro de Tiempo — Si un docente crea 2 exámenes al mes, ahorra 1.5 horas mensuales.

**🚫 Eliminado del roadmap visible:** "Contenido personalizado por estilo de aprendizaje" (esto vive en Sandbox hasta que el colegio lo pida explícitamente).



## **JULIO – SEPTIEMBRE 2026: Consolidación de Evaluaciones y Banco de Recursos**

**Semanas 21-30** **OBJETIVO AJUSTADO:** Priorizamos el **Banco de Preguntas Institucional** sobre "clases en vivo" (que no es un dolor confirmado).

**CPO:** **Validación crítica antes de desarrollar módulo de video:**

Pregunta a la Rectora: "¿Teams les ha fallado para clases en vivo? ¿Es caro, complejo o inestable?"

Si la respuesta es NO → No desarrollamos módulo propio, solo agregamos botón de "Enlace a Teams" en el calendario

Si la respuesta es SÍ → Entonces sí consideramos desarrollar (pero con cautela, es un proyecto grande)

**Prioridad real:** Diseña el **Repositorio Digital del Colegio**:

Centraliza todas las preguntas generadas en el bimestre anterior

Los docentes pueden buscar por materia, tema, dificultad

Pueden reutilizar preguntas de otros docentes (con permiso)

**Ahorro masivo:** Ya no crean material desde cero cada bimestre

Ejecuta la **medición trimestral** enfocada en:

Rendimiento académico grupo piloto vs control (3 meses de datos)

**Encuesta de satisfacción docente:** "¿El banco de preguntas ahorra tiempo?"

Tasa de reutilización de preguntas (cuántos docentes usan preguntas del banco vs crear nuevas)

**CTO:** Optimiza el almacenamiento y búsqueda de recursos (índices en base de datos para búsquedas rápidas). Asegura que el sistema soporte picos de carga durante exámenes bimestrales (múltiples docentes calificando al mismo tiempo).

**Producto:** Implementa el **Repositorio de Preguntas** con búsqueda avanzada. Implementa la funcionalidad de "Reutilizar Evaluación" (1 click para duplicar un examen anterior y editarlo). Dashboard institucional con nueva métrica: "Horas ahorradas por reutilización de material".

**✅ Value Gate A cumplido:** Ahorro de Tiempo — Si cada docente ahorra 2 horas/mes por reutilización, en 8 docentes son 16 horas/mes ahorradas al colegio.

**🛠️ Sandbox (Backlog B):** El CTO refina el modelo de predicción de deserción usando los datos acumulados del trimestre. Identifica patrones: "Estudiantes con >5 faltas en el primer mes tienen 70% de probabilidad de desertar". **Esto se valida internamente pero NO se muestra como feature todavía.**

**🚫 Eliminado del roadmap visible:** Módulo de clases en vivo (a menos que pase el Value Gate B de Reducción de Fricción).



## **OCTUBRE – DICIEMBRE 2026: Cierre de Año y Evidencia de Impacto**

**Semanas 31-39** **OBJETIVO AJUSTADO:** Preparar el **Reporte de Impacto Anual** que demuestre ahorro operativo y asegure la renovación del contrato.

**CPO:** Recopila la data de todo el año para construir el **"Dashboard de Impacto Anual"** que será presentado a la Rectora en diciembre:

**Métricas obligatorias:**

**Ahorro de Tiempo Documentado:
**

Horas semanales ahorradas por el dashboard de asistencia centralizado

Horas mensuales ahorradas por el generador de evaluaciones

Horas ahorradas por reutilización de banco de preguntas

**Total anual:** "X horas ahorradas = Y días de trabajo"

**Mejora en Control Operativo:
**

Reducción en tiempo de respuesta a ausencias (antes vs después)

Tasa de apertura de alertas por parte de padres

Estudiantes identificados en riesgo y atendidos a tiempo

**Comparación Grupo Piloto vs Control:
**

Rendimiento académico final (notas promedio)

Asistencia promedio

Tasa de entrega de tareas a tiempo

Prepara la funcionalidad de **Pre-matrícula Simplificada** para el siguiente año lectivo:

Los datos ya están en el sistema, solo hay que "promover de grado"

Ahorro: no hay que cargar todo desde cero en febrero 2027

**CTO:** Prepara el sistema para el cierre de año académico:

Generación masiva de libretas finales (boletines anuales)

Promoción automática de estudiantes al siguiente grado

Backup completo de datos del año lectivo 2026

**🛠️ Sandbox (Backlog B):** El CTO corre los modelos de predicción de deserción con la data histórica completa. Genera un documento interno (solo para CPO y CEO) que muestre:

"El modelo predijo correctamente 8 de 10 deserciones"

"Si hubiéramos intervenido en julio, se podrían haber retenido 6 estudiantes"

**Esto sirve para validar la hipótesis, pero NO se presenta al cliente todavía.** Se guarda como evidencia para cuando el colegio diga "queremos predecir deserción" (entonces ya está listo).

**Producto:** Implementa el **Dashboard de Resultados Finales** para presentación a la institución. Incluye visualizaciones claras de:

Ahorro operativo anual

Mejoras en comunicación con padres

Eficiencia en gestión académica

Prepara la propuesta de roadmap para 2027 **basada en dolores reales identificados durante el piloto**, no en features futuristas.

**✅ Value Gate cumplido:** Evidencia de Impacto — La Rectora puede justificar la renovación del contrato con datos concretos de ahorro.

**🚫 Eliminado completamente del roadmap visible:**

Sistema de Perfilamiento Vocacional (vive en Sandbox como se indica en los casos simulados)

Predicción de deserción (se valida internamente pero no se presenta como feature)

Contenido multiformato avanzado (no hubo demanda explícita)



# **MATRIZ DE PRIORIZACIÓN AJUSTADA**

## **Must-Have (debe estar en Abril — Pasan Value Gates)**

## **Should-Have (se desarrolla durante el piloto — Solo si pasan Value Gates)**

## **Backlog B — Sandbox (Innovación Silenciosa — NO visible al cliente)**



# **PLAN DE MEDICIÓN DE IMPACTO (Ajustado a Value Gates)**

**Nota crítica:** Si para Julio no hay mejora medible en **al menos 2 de los primeros 3 KPIs** (Ahorro de Tiempo, Eficiencia Docente, Adopción de Padres), el piloto está en riesgo. Priorizar fixes de UX antes que agregar features nuevas.



# **MAPA DE RIESGOS AJUSTADO**



# **DECISIONES DE PRODUCTO CRÍTICAS (Basadas en Doctrina Orivion)**

## **✅ Decisiones Correctas (Alineadas con Value Gates)**

**Priorizamos Dashboard de Asistencia Centralizado** → Resuelve dolor #1 de la Rectora

**Portal de Padres con identidad digital propia** → Resuelve dolores #2 y #3

**Generador de Evaluaciones antes que Personalización** → Pasa Gate A (ahorro de tiempo docente)

**Banco de Preguntas antes que Clases en Vivo** → Pasa Gate A (ahorro masivo por reutilización)

**Reporte de Impacto Anual** → Asegura renovación del contrato

## **🚫 Decisiones Descartadas (No pasan Value Gates)**

**Wizard de Onboarding para estilos de aprendizaje** → No resuelve dolor operativo, añade fricción

**Contenido personalizado por IA en Mayo** → Promesa futurista sin validación de mercado

**Perfilamiento Vocacional en Octubre** → Riesgo de interpretación pedagógica compleja

**Clases en Vivo para reemplazar Teams** → Teams no es un dolor confirmado (si funciona, integrarse es mejor que competir)

## **🛠️ Decisiones en Sandbox (Backlog B — Innovación Silenciosa)**

**Motor de Recomendación Adaptativa** → Se construye internamente con datos del piloto, pero no se presenta como feature

**Modelos de Predicción de Deserción** → Se validan internamente, se presentan al cliente solo si piden "alertas tempranas avanzadas"

**Sistema de Contenido Multiformato** → Se diseña la arquitectura pero no se activa hasta que haya demanda explícita



## **Resumen del Nuevo Roadmap Visible al Cliente**

**Trimestre 1 (Ene-Mar):** Asistencia Centralizada, Notas y Alertas de Riesgo
**Trimestre 2 (Abr-Jun):** Estabilización + Generador de Evaluaciones
**Trimestre 3 (Jul-Sep):** Banco de Preguntas y Reutilización de Material
**Trimestre 4 (Oct-Dic):** Cierre de Año + Dashboard de Impacto

**Todo lo demás vive en Sandbox hasta que el mercado lo pida explícitamente.**



**Versión:** 2.0 Ajustada según Doctrina de Producto Orivion
**Fecha:** 31 Enero 2026
**Próxima revisión:** Después del Go Live (Abril 2026) según feedback real del piloto







| Institución Piloto | Período | Go Live | Estudiantes Piloto |

| --- | --- | --- | --- |

| Unidad Educativa 25 de Marzo | Enero – Diciembre 2026 | 1 de Abril 2026 | ~100 estudiantes / 2 materias |





| Grado | Materia 1 | Materia 2 | Nota |

| --- | --- | --- | --- |

| 4to Básica | Matemáticas | Lenguaje y Literatura | Solo si ofrecen estas materias |

| 7mo Básica | Matemáticas | Lenguaje y Literatura | Solo si ofrecen estas materias |

| 10mo Bachillerato | Matemáticas | Lenguaje y Literatura | Solo si ofrecen estas materias |

| 3ro Bachillerato | Matemáticas | Lenguaje y Literatura | Solo si ofrecen estas materias |





| ENE – MAR | ABR – JUN | JUL – SEP | OCT – DIC |

| --- | --- | --- | --- |

| Desarrollo Pre-Piloto | Operación + Alertas | Automatización Docente | Cierre e Impacto |





| Funcionalidad | Gate | Cuando | Justificación |

| --- | --- | --- | --- |

| Login + Roles (4 roles) | Base | Abril | Base del sistema |

| Portal de Padres con identidad digital | B, C | Abril | Dolor #2 y #3 de Erika (comunicación directa) |

| Alertas y Notificaciones a Padres | B, C | Abril | Reducen fricción de llamar uno por uno |

| Dashboard de Asistencia Centralizado | C | Abril | Dolor #1 de Erika ("clase por clase en Teams") |

| Sistema de Notas básico | A | Abril | Ahorra tiempo vs Excel/Teams |

| Carga masiva de estudiantes (CSV) | B | Abril | Reduce fricción vs ingreso manual |





| Funcionalidad | Gate | Cuando | Justificación |

| --- | --- | --- | --- |

| Alertas de Riesgo Automáticas | C | Marzo | Control preventivo (detecta antes que pase el problema) |

| Generador de Evaluaciones | A | Mayo-Jun | Ahorra tiempo docente (45 min por examen) |

| Banco de Preguntas Institucional | A | Jul-Sep | Ahorro masivo por reutilización de material |

| Pre-matrícula Simplificada | A | Oct-Dic | Ahorra tiempo en inicio de año 2027 |





| Funcionalidad | Por qué en Sandbox | Cuándo sale |

| --- | --- | --- |

| Motor de Recomendación Adaptativa | No resuelve dolor operativo hoy | Cuando el colegio diga "queremos personalización" |

| Predicción de Deserción | Riesgo de interpretación clínica sin evidencia | Cuando tengamos 2 años de datos y el colegio lo pida |

| Perfilamiento Vocacional | Riesgo de complejidad pedagógica | Cuando esté validado con psicólogos educativos |

| Contenido Multiformato Avanzado | No hubo demanda explícita | Cuando los docentes pidan "más tipos de material" |





| KPI | Qué mides | Cómo | Cuándo | Gate |

| --- | --- | --- | --- | --- |

| Ahorro de Tiempo Operativo | Horas semanales ahorradas por la Rectora en gestión de asistencia | Entrevista + log de uso del dashboard | Mensual | A |

| Eficiencia Docente | Tiempo promedio de creación de exámenes (antes vs después del generador) | Encuesta + métricas de uso | Mayo, Julio, Octubre | A |

| Adopción de Padres | % padres que abren notificaciones en < 24h | Métricas de email + in-app | Mensual | B |

| Control Operativo | Tiempo de respuesta a ausencias (detección → acción del padre) | Comparar timestamps en el sistema | Bimestral | C |

| Rendimiento Académico | Notas promedio grupo piloto vs grupo control | Comparación directa de notas en el sistema | Bimestral, Anual | — |

| Satisfacción Institucional | ¿La Rectora renovaría el contrato? (NPS) | Entrevista trimestral | Abril, Julio, Octubre | — |





| Riesgo | Probabilidad | Impacto | Plan de Contingencia |

| --- | --- | --- | --- |

| El sistema NO ahorra tiempo real vs Teams | Media | Crítico | Si en Mayo la Rectora dice "sigo tardando lo mismo", pausar nuevas features y optimizar UX de asistencia/notas. Pivotear a integración con Teams en lugar de reemplazo. |

| Adopción baja de padres (< 30% abre notificaciones) | Media | Alto | Cambiar frecuencia y tono de notificaciones. Validar si prefieren WhatsApp vs Email. Si no mejora, considerar integración con WhatsApp Business API. |

| La institución pide "IA adaptativa" antes de tiempo | Baja | Medio | Explicar el riesgo de complejidad pedagógica. Ofrecer primero el generador de evaluaciones (que usa IA pero es simple). Si insisten, mostrar el Sandbox pero aclarar que es experimental. |

| Bugs críticos frenan la adopción | Media | Alto | Prioridad absoluta en fixes durante primeras 2 semanas. CTO dedica 100% a estabilidad. Si es necesario, pausar desarrollo de nuevas features. |

| El colegio no renueva el contrato | Baja | Crítico | Si a Octubre no hay evidencia de ahorro operativo, ofrecer descuento en año 2 a cambio de testimonial. Usar el Dashboard de Impacto como herramienta de retención. |

