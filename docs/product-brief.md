---
stepsCompleted: [1, 2, 3, 4, 5]
inputDocuments:
  - /Users/tcotd/seb-lab/capsule/docs/index.md
  - /Users/tcotd/seb-lab/capsule/docs/project-overview.md
  - /Users/tcotd/seb-lab/capsule/docs/technology-stack.md
  - /Users/tcotd/seb-lab/capsule/docs/ui-component-inventory.md
date: 2026-01-17
author: Sebas
---

# Product Brief: capsule

<!-- Content will be appended sequentially through collaborative workflow steps -->

---

## Executive Summary and Core Vision

### Problema Central

**La Desconexión del Guardarropa**

Las personas poseen un inventario físico significativo de ropa y accesorios, pero existe una **desconexión fundamental** entre lo que tienen y cómo lo utilizan:

- **Inventario invisible**: No tienen visibilidad completa de su guardarropa
- **Decisión diaria fragmentada**: Cada mañana empiezan desde cero, sin contexto histórico
- **Compras reactivas**: Adquieren prendas duplicadas o incompatibles por falta de información
- **Capital subutilizado**: El 70% del guardarropa se usa solo el 30% del tiempo

**Consecuencia**: Fatiga de decisión matutina + compras impulsivas + sensación de "no tener nada que ponerme" pese a armarios llenos.

---

### Usuarios Objetivo

**Enfoque Dual con Priorización**

#### Primarios (Primeros 6 meses): Maximizador Pragmático

- **Perfil**: 25-45 años, profesionales urbanos, ingreso medio-alto
- **Comportamiento**: Ya optimizan tiempo y recursos, buscan herramientas para "hacer más con lo que tienen"
- **Pain point**: Sienten el dolor HOY - compran duplicados, pierden tiempo decidiendo, quieren ROI de su guardarropa
- **Valor**: Early adopters naturales, no requieren educación de mercado, generan datos de calidad

#### Secundarios: Usuario Casual

- **Perfil**: Más amplio demográficamente, enfoque en "quitarme un problema"
- **Comportamiento**: Buscan simplicidad, reducir carga mental
- **Pain point**: Fatiga de decisión diaria
- **Timing**: Post-validación con Maximizadores, cuando el producto esté pulido

**Estrategia go-to-market**: Maximizador Pragmático → validación → expansión al Usuario Casual.

---

### Visión de Solución

**"Shop Your Own Closet"**

Una aplicación que transforma tu guardarropa físico en un **inventario inteligente** que trabaja para ti:

**Flujo Ideal del Usuario:**

1. **Onboarding sin fricción**: Captura rápida de prendas (foto + reconocimiento IA)
2. **Inventario vivo**: Dashboard visual de todo lo que posees, categorizado y taggeado
3. **Sugerencias contextuales**: "Basado en el clima de hoy y tu reunión de las 2pm, aquí hay 3 opciones"
4. **Pre-compra inteligente**: Antes de comprar, consulta "¿va con lo que tengo?" → app muestra compatibilidad
5. **Insights pasivos**: "Esta chaqueta no la usas hace 4 meses, ¿donar o revivir?"

**Metáfora Core**: **Sommelier, no Chef**

- La IA NO decide por ti
- La IA EXPANDE tu criterio mostrándote posibilidades que no habías considerado
- El usuario mantiene agencia total, pero con superpoderes

---

### Diferenciadores Clave

#### 1. IA Invisible (UX Philosophy)

- **Problema de la industria**: IA visible que grita "mírame, soy inteligente"
- **Nuestro approach**: IA que se siente como un buen asistente - habla cuando aporta valor, calla cuando no
- **Resultado**: Usuario siente que ÉL es más inteligente, no que la app lo es

#### 2. Lima Factor (Founder-Market Fit)

- **Insight único**: Vivir en Lima (o ciudades con comercio desordenado) genera comportamiento de "compro por si acaso"
- **Ventaja**: Entendimiento visceral del problema que SF/NY founders no tienen
- **Aplicación**: UX diseñado para contextos donde la logística de devolución es mala

#### 3. Entrenamiento del Cachorro (Feedback Loop)

- **Problema de la industria**: Corrección de IA es frustrante o invisible
- **Nuestro approach**: Cada corrección se siente como "entrenar a tu mascota"
- **Resultado**: Error → Progreso emocional, no fricción

#### 4. Guardarropa Invisible

- **Magic moment**: Mostrar al usuario "tienes 14 prendas que nunca usas juntas pero funcionarían perfectamente"
- **Impacto**: Revelación de valor latente, no solo organización

---

### Brechas Competitivas

**Análisis de Soluciones Actuales:**

| Solución                   | Problema                                                         |
| -------------------------- | ---------------------------------------------------------------- |
| **Improvisación mental**   | Sin contexto histórico, sin optimización                         |
| **Apps existentes**        | Fricción de entrada alta (manual cataloging)                     |
| **Stylists humanos**       | No escala, solo para segmento premium                            |
| **Subscripciones de ropa** | Resuelve síntoma (qué ponerme) no causa (desconexión inventario) |

**Cuatro Fallas Críticas de Competidores:**

1. **IA Visible**: Soluciones que hacen la IA protagónica en lugar de invisible
2. **Sesgo Demográfico**: Diseñadas para realidades de devolución fácil (US/Europe)
3. **Desconexión Geográfica**: No entienden patrones de compra en mercados emergentes
4. **UX Tosca**: Apps tipo Pinterest con manual data entry

**Blue Ocean Validation:**

- No jugamos "mejor gestión de armario"
- Jugamos "optimización de activos personales a través de vestimenta"
- El océano es azul porque el job-to-be-done es diferente

---

### Ventajas Competitivas

#### Unfair Advantages

1. **Founder-Market Fit**: Experiencia visceral del problema en contexto latinoamericano
2. **Post-Hype AI Timing**: Entramos cuando la IA es infraestructura commodity, no novedad
3. **Network Effects Locales**: En mercados con comercio desordenado, cada usuario que valida su inventario genera datos más valiosos

#### Moat Sostenible

- **Datos de comportamiento**: Cada interacción entrena mejor la IA de sugerencias
- **Switching cost emocional**: Una vez que tu guardarropa está catalogado, cambiar es dolor
- **Efecto red de compatibilidad**: Si conoces el inventario de tu pareja/amigos, puedes hacer "outfit planning" colaborativo

#### Timing

**Por qué AHORA:**

- IA de reconocimiento visual es commodity (Vertex AI, GPT-4 Vision)
- Smartphones tienen cámaras suficientemente buenas
- Post-pandemia: gente valora más "hacer más con menos"
- Generación que creció con apps para TODO está lista para app de guardarropa

**Urgencia**: Ventana de 12-18 meses antes que grandes players (Google Photos, Pinterest) agreguen esta funcionalidad como feature.

---

### Scope Inicial (MVP)

**Core Features - Primeros 6 meses:**

1. **Captura de inventario**: Foto + reconocimiento IA básico
2. **Dashboard visual**: Ver todo lo que tengo, filtrar por categoría
3. **Pre-compra check**: "Subir foto de prenda en tienda" → compatibilidad con inventario
4. **Sugerencias simples**: "Outfits que nunca has probado con lo que tienes"

**NO en MVP:**

- Planificación de outfits semanales
- Integración con e-commerce
- Social features
- Reconocimiento avanzado de tejidos/marcas

**Criterio de éxito MVP:**

- Usuario sube 50+ prendas en primera sesión (onboarding fluido)
- Consulta app 2+ veces/semana
- Usa "pre-compra check" antes de comprar algo nuevo

---

### Visión a 5 Años

**Fase 1 (Año 1)**: Shop Your Own Closet

- App móvil con inventario + sugerencias básicas
- 10K usuarios Maximizadores en Lima/LATAM

**Fase 2 (Año 2-3)**: Optimización de Capital Personal

- Network effects: inventarios compartidos (parejas, roommates)
- Insights de sostenibilidad: "has reducido compras duplicadas 40%"
- Expansión Usuario Casual

**Fase 3 (Año 4-5)**: Plataforma de Estilo Personal

- Integración con e-commerce (affiliate revenue)
- Marketplace de intercambio entre usuarios
- IA que entiende evolución de estilo personal a largo plazo

---

**Validación del Equipo (Party Mode - Visión):**

- ✅ **PM (John)**: Enfoque en Maximizador Pragmático valida métricas trackables
- ✅ **Strategist (Victor)**: Blue Ocean confirmado, job-to-be-done es único
- ✅ **UX (Sally)**: Filosofía de agencia sobre automatización es coherente

---

## Target Users & Personas

### Filosofía de Segmentación

**Beachhead Strategy**: Ganar a un segmento específico profundamente antes de expandir. No intentamos ser para "todos" desde día 1.

**Priorización para MVP (Primeros 6 meses):**

1. **Carlos** - Tech Lead / Uniformidad Defensiva (PRIMARY BEACHHEAD)
2. Matías, Andrea - Observable personas para Fase 2
3. Usuario Casual - Post-validación, Fase 3+

---

### PRIMARY BEACHHEAD: Carlos (El Tech Lead / Uniformidad Defensiva)

**Demografía:**

- **Edad**: 32-38 años
- **Profesión**: Tech Lead, Senior Engineer, Engineering Manager
- **Ubicación**: Lima (Miraflores, San Isidro, Barranco)
- **Ingreso**: S/. 8,000 - 15,000 mensuales
- **Estado**: Soltero o en pareja, sin hijos mayormente

**Contexto de Vida:**

- Trabaja remoto o híbrido en startups/empresas tech
- Su día: 90% frente a pantalla, 10% presentaciones/meetings importantes
- **Comportamiento observable**: Viste hoodie negro/gris + jeans SIEMPRE - no por estilo, sino por **miedo a equivocarse**

**El Problema Emocional Central:**

**Síndrome del Impostor en Imagen:**

- _"Soy bueno en mi código, pero parezco un niño disfrazado cuando tengo que presentar"_
- Siente **inadecuación** entre su competencia técnica y su imagen profesional
- El armario tiene ropa variada, pero el miedo a combinar mal lo lleva a la **uniformidad defensiva**

**Workaround Actual:**

- **Minimalismo extremo**: Reduce su guardarropa a 3-4 outfits "seguros" que repite constantemente
- **Paralysis by Analysis**: Cuando intenta variar, pasa 20+ minutos frente al espejo dudando
- **Social Validation Esporádica**: Ocasionalmente pregunta a pareja/hermana "¿esto se ve bien?" pero no siempre disponibles

**Pain Points Específicos:**

1. **Pre-presentación anxiety**: Tiene pitch importante con clientes/investors → 30 minutos perdidos eligiendo outfit
2. **Infrautilización de armario**: Tiene ropa cara/buena que nunca usa por no saber combinar
3. **Compras duplicadas por miedo**: Compra "otra camisa azul" cuando ya tiene 3 porque no recuerda qué funciona
4. **Costo de oportunidad**: Tiempo mental gastado en ropa = tiempo no gastado en código/ideas

**Jobs-to-be-Done:**

- **Functional Job**: "Necesito verme profesional sin pensar"
- **Emotional Job**: "Necesito sentirme competente en mi imagen, no solo en mi código"
- **Social Job**: "Necesito que mi apariencia no sabotee mi credibilidad técnica"

**Momento "Aha!" para Carlos:**

**El "Outfit Canvas" con Validación Técnica:**

Abre Capsule antes de su 1-on-1 con el CEO. Selecciona contexto: "Meeting importante, oficina, tarde". La app muestra:

```
[Visual de outfit completo]

"Esta combinación funciona porque:
• El contraste de la camisa clara equilibra el tono neutro del pantalón
• La chaqueta añade estructura sin ser formal
• La silueta crea líneas verticales que proyectan autoridad

Confianza: 94% match con tu estilo histórico"
```

**Qué siente Carlos:**

- NO felicidad superficial
- SÍ **Seguridad (Competencia Social)**
- _"Ok, me veo profesional. Ahora puedo concentrarme en lo que voy a decir en la reunión, no en si mi camisa combina"_

**La emoción clave: RELIEF (alivio)**

- La ansiedad desaparece
- Se siente **armado** para la situación
- La app le dio un framework lógico, no solo un "te ves bien" vacío

**Métricas de Éxito con Carlos:**

- Varía su outfit 3+ veces por semana (vs 1 vez antes)
- Tiempo de decisión matutina: <3 minutos (vs 20+ antes)
- Usa "pre-compra check" antes de comprar → reducción de duplicados 40%
- NPS: 9-10 porque la app resuelve ansiedad visceral real

**Por Qué Carlos es el Beachhead Ideal:**

✅ **Problema solitario**: No necesita network effects para obtener valor (vs Matías que necesita social features)

✅ **Highest willingness to pay**: Tiene ingresos altos y el problema afecta su carrera - pagaría $10-20/mes sin dudar

✅ **Cleanest MVP scope**: Solo necesita Inventory + Suggestion Engine + Expert Validation - no social, no planning avanzado

✅ **Observable y escalable**: Existe en TODA ciudad con industria tech (Lima, CDMX, Bogotá, Buenos Aires, São Paulo)

✅ **Early adopter natural**: Es tech-savvy, no necesita educación sobre "apps" o "IA"

✅ **Success metric clara**: "Carlos deja de usar solo hoodie negro" es binario y medible

---

### Otras Personas Observables (Fase 2 Expansion)

#### Matías - "El Novio en Pánico"

**Perfil:**

- 28 años, Marketing Manager, ingreso medio
- Vive en San Miguel o Jesús María

**Workaround Observable:**

- Manda fotos por WhatsApp a su ex o mejor amiga: _"¿Esto combina?"_
- El problema: La amiga no siempre contesta, o contesta tarde

**Job-to-be-Done:**

- **Functional**: "Necesito validación rápida antes de salir"
- **Emotional**: "Necesito reducir ansiedad de elección"
- **Social**: "Necesito reemplazo de la amiga que no está disponible 24/7"

**Features que necesita (NO en MVP):**

- Compartir outfit con amigos para feedback real
- Quick validation: "Este outfit para cita, ¿sí o no?"
- Social proof: Ver qué combinaciones funcionan para otros

**Timing:** Mes 7-12 después de validar Carlos

---

#### Andrea - "La Consultora Viajera"

**Perfil:**

- 29 años, Consultora de negocios, viaja 2-3 veces/mes
- Ingreso alto, vive en San Isidro

**Workaround Observable:**

- Listas en iPhone Notes con "items para viaje a Arequipa", "items para conferencia"
- Siempre olvida algo o lleva de más

**Job-to-be-Done:**

- **Functional**: "Necesito empacar eficientemente sin olvidar nada"
- **Emotional**: "Necesito reducir stress pre-viaje"
- **Social**: "Necesito verme profesional en cualquier ciudad sin maleta gigante"

**Features que necesita (NO en MVP):**

- Packing lists inteligentes por destino y duración
- Outfit planning por días del viaje
- Integración con calendario para eventos

**Timing:** Año 2, cuando core está sólido

---

### Secondary User: Usuario Casual (Post-MVP)

**Perfil:**

- Demográficamente más amplio (25-50 años)
- Menor ingreso que Maximizador (S/. 3,000-6,000)
- No tech-savvy necesariamente

**Diferenciación vs Carlos/Maximizadores:**

| Aspecto            | Carlos (Maximizador)                      | Usuario Casual                            |
| ------------------ | ----------------------------------------- | ----------------------------------------- |
| **Motivación**     | Optimización + ROI del guardarropa        | "Quitarme un problema"                    |
| **Engagement**     | Revisa stats, entrena IA, experimenta     | Usa solo cuando necesita                  |
| **Features clave** | Inventory profundo, analytics, pre-compra | Modo "botón de pánico" para outfit rápido |
| **Interés**        | Eficiencia + competencia                  | Simplicidad + cero gestión                |
| **Pricing**        | Pagaría $10-20/mes                        | Pagaría $3-5/mes o freemium               |

**Comportamiento:**

- Interacción transaccional: _"Tengo una cita, dime qué ponerme"_
- No le interesa compartir outfits ni curar colecciones
- Valora mucho: **Economía Circular Local** (dónde donar, arreglar, renovar en su distrito)

**Features Específicos (Fase 3+):**

- Onboarding ultra-simplificado (AI hace catalogación automática sin validación)
- Modo "Quick Pick" - 3 opciones en <10 segundos
- Integración con servicios locales (lavanderías, sastres, donación)

**Timing:** Post-validación con Maximizadores, cuando producto esté pulido

---

### Ecosistema de Usuarios

#### Parejas / Roommates (Futuro - Fase 2)

**Caso de Uso:**

- _"¿Qué se va a poner mi pareja al evento?"_ para combinar niveles de formalidad
- Compartir inventarios para evitar "looks incompatibles" en fotos

**Network Effects:**

- Inventarios compartidos aumentan valor para ambos usuarios
- Switching cost aumenta: "Si dejo Capsule, mi pareja pierde visibilidad de mi guardarropa"

**Timing:** Mes 12-18

---

#### Retailers (DESCARTADO para MVP y mediano plazo)

**Decisión Estratégica:**

❌ **NO integración directa de retailers "husmeando" el inventario**

**Razones:**

1. **Privacy concern**: Capsule debe ser **santuario privado**, no plataforma de spam
2. **Trust erosion**: Si retailers pueden ver mi inventario, dejan de confiar en las recomendaciones ("¿Me sugiere esto porque le pagan comisión?")
3. **Product positioning**: Queremos "Quiet Luxury" y confianza, no marketplace ruidoso

**Relación correcta con retail (Fase 4+):**

- **Outbound ONLY**: Usuario busca activamente ("Quiero comprar zapatos marrones") → Capsule sugiere tiendas
- **Affiliate pasivo**: Revenue por referral, pero NUNCA push notifications de tiendas
- **User-initiated**: El usuario controla cuándo y cómo interactúa con e-commerce

---

### User Journey Detallado: Carlos (Beachhead)

#### Fase 1: Discovery - "The No-Hype Aesthetic"

**Channel:**

- Ads segmentados en Instagram/TikTok (donde la moda vive)
- Estética: **Diseño de software, NO de fashion blogger**
- Visual: Mockups de UI limpia, mucho whitespace, tipografía sans-serif minimalista

**The Hook:**

- NO promesa de "IA revolucionaria" o "transforma tu estilo"
- SÍ promesa de **Orden y Eficiencia**

**Copy que convierte a Carlos:**

```
"Tu código es Senior.
Que tu imagen no parezca Junior.

Capsule - Tu guardarropa, pero organizado."
```

**Por qué funciona:**

- Habla a su **síndrome del impostor** sin atacarlo
- Aspiracional sin ser cruel
- Posiciona la ropa como problema de "sistema" (lenguaje que entiende)

**Conversion Trigger:**

- Ve screenshots en App Store: UI limpia, no hay influencers, no hay filtros de Instagram
- Lee reviews: "Finalmente una app de ropa que no parece app de moda"
- **La ausencia de buzzwords agresivos** le dice: "Esto es herramienta seria, no juguete"

**Momento de instalación:**

- Jueves 8pm, procrastinando en su departamento
- Tiene presentación importante el viernes, no sabe qué ponerse
- Busca "app outfit" → encuentra Capsule → instala por curiosidad

---

#### Fase 2: Onboarding - "The Single-Item Ritual"

**Minuto 0-5: Primera Impresión**

**Bienvenida:**

```
[Animación sobria, fluida - estilo Apple]

"Hola Carlos,

Capsule te ayuda a sacarle más provecho a tu guardarropa.

Empecemos con 1 prenda que uses frecuentemente."
```

**Estrategia: Calidad > Cantidad**

**Por qué NO batch upload de 50 fotos:**

- Riesgo de 20 errores de etiquetado → frustración → uninstall
- Loss aversion: Carlos prefiere 1 item perfecto que 50 items al 80%

**Por qué SÍ foto por foto:**

1. Usuario sube 1 foto → IA analiza al instante (wow moment de velocidad)
2. Usuario valida/corrige categoría, color, formalidad (sensación de **control**)
3. Ve item renderizado como **"asset digital" hermoso** en dashboard
4. Satisfacción inmediata - ha "completado" algo

**El Loop de Gamification:**

Después de subir primera prenda (ej: su hoodie negro favorito):

```
[Renderizado limpio del hoodie en dashboard]

"Genial, ahora sabemos que tienes este hoodie.

¿Tienes algo que combine con él?

[Botón: Añadir otra prenda]"
```

**Innovación Clave: "Ghost Items" (Inferencia Hallucinada)**

**El Problema:** Si solo tiene 3 prendas subidas, ¿cómo dar valor?

**La Solución:**

Después de subir hoodie + jeans + camisa, la app muestra:

```
[OUTFIT CANVAS]

Outfit sugerido para: Casual Office

• Hoodie negro (tuyo) ✓
• Jeans oscuros (tuyo) ✓
• Camisa blanca (tuyo) ✓
• Sneakers blancos (Ghost Item - recomendado) 👻

"Este outfit funciona bien para calls informales.
Te faltarían sneakers blancos para completarlo."
```

**Interacción con Ghost Items (Tinder-Style Swipes):**

Usuario ve el "sneaker blanco Ghost Item" y puede:

1. **Swipe Right** ("Lo tengo"):
   - Abre cámara inmediatamente
   - _"¡Genial! Tómale una foto rápida para añadirlo al outfit"_
   - **Resultado**: Convierte gap → inventario real

2. **Swipe Up** ("Lo quiero"):
   - Añade a "Wishlist Inteligente"
   - _"Guardado para compra futura. Te avisaremos cuando encuentres buenas opciones"_
   - **Resultado**: Prepara monetización futura (affiliate)

3. **Swipe Left** ("No es mi estilo"):
   - IA aprende preferencia
   - Recalcula outfit con otra opción (ej: "botas Chelsea negras")
   - **Resultado**: Training data de gustos

**Dopamine Hit en Item #3:**

- Carlos NO siente que está "llenando base de datos"
- Carlos SÍ siente que está "completando un rompecabezas"
- **La motivación pasa de laboral → lúdica**

**Objetivo de Onboarding:**

- NO forzar 50+ items de golpe
- Crear ritual zen de catalogación que se siente premium, no tedioso
- Dar valor desde item #3 con Ghost Items

---

#### Fase 3: Core Usage - "Contextual & Just-in-Time"

**Patrón de Uso: El Asistente Silencioso**

Carlos NO navega sin rumbo en la app. Abre app con **intención específica**.

**Escenario Típico (Jueves 6pm - Meetup a las 8pm):**

1. **Trigger**: Carlos recuerda que tiene tech meetup esta noche
2. **Abre Capsule** (ya tiene 35 prendas catalogadas)
3. **Usa "Context Flow"** (árbol de decisión rápido):

   ```
   ¿Para qué evento?
   → Tech Meetup

   ¿Qué momento del día?
   → Noche

   ¿Nivel de formalidad?
   → Smart Casual
   ```

4. **App procesa** (2 segundos)
5. **Muestra 3 opciones de outfits completos**
6. **Carlos selecciona uno** - listo
7. **Tiempo total: <3 minutos**

**Frecuencia de Interacción:**

| Trigger                | Frecuencia  | Duración Sesión |
| ---------------------- | ----------- | --------------- |
| **Event-Triggered**    | 2-3x/semana | 2-6 min         |
| **Shopping-Triggered** | 1x/mes      | 1-2 min         |
| **Browse Mode**        | Raro        | 5-10 min        |

**Características de Engagement:**

- Sesiones **cortas pero profundas** (utilidad > entretenimiento)
- NO doom-scrolling - **utilidad pura**
- Cada interacción resuelve problema específico
- High intent, low time waste

**Shopping-Triggered Use Case:**

Carlos está en tienda Zara, ve chaqueta que le gusta. Antes compraría impulsivamente o pasaría.

**Con Capsule:**

1. Abre app
2. Toma foto de la chaqueta en tienda
3. App muestra: _"Ya tienes 2 chaquetas similares: [fotos]. Esta añadiría variedad porque es más estructurada."_
4. Decisión informada en 30 segundos

**Resultado:** Reduce compras duplicadas 40%

---

#### Fase 4: Success Moment - "The Proposal"

**Cuándo Ocurre:**

- **Segundos** después de completar el "Context Flow"
- Primera vez que ve un outfit que "sabe" que funciona sin dudar

**Qué Ve (The Outfit Canvas):**

```
[Visualización limpia - NO lista de texto]

OUTFIT: Smart Casual - Tech Meetup

┌─────────────────────────────┐
│                             │
│   [Camisa celeste]          │
│   [Chaqueta gris oscuro]    │
│   [Jeans oscuros]           │
│   [Sneakers blancos]        │
│                             │
└─────────────────────────────┘

POR QUÉ FUNCIONA:
• El celeste de la camisa equilibra el tono neutro de la chaqueta
• El contraste entre formal (chaqueta) y casual (jeans + sneakers)
  es perfecto para networking tech
• La silueta crea líneas verticales que proyectan competencia

Confianza: 92% match con tu estilo histórico
Usado última vez: Hace 2 semanas
```

**Qué Piensa Carlos:**
_"Okay, esto se ve bien y tiene sentido LÓGICO. Problema resuelto."_

**Qué SIENTE Carlos:**

**NO:**

- ❌ Felicidad superficial
- ❌ "La app es mi amiga"
- ❌ Emoción efusiva

**SÍ:**

- ✅ **RELIEF (Alivio)**: La fricción de pensar desaparece
- ✅ **COMPETENCE (Competencia)**: Se siente preparado, armado
- ✅ **TRUST (Confianza)**: La explicación lógica le da seguridad

**El Insight Crucial: "Expert Validation" > "Fake Affection"**

**Lo que NO funciona:**

```
"¡Te ves increíble, Carlos! 😍"
```

→ Uncanny valley, se siente fake, uninstall

**Lo que SÍ funciona:**

```
"Esta combinación funciona porque el contraste equilibra
la silueta y proyecta autoridad profesional."
```

→ Knowledge transfer, Carlos se siente **empoderado**

**Tono de la IA: "Sastre Experto" / "Arquitecto"**

- NO es "amiga cariñosa" dando halagos vacíos
- SÍ es "asesor técnico" explicando POR QUÉ funciona
- Carlos prefiere **evidencia** sobre **afecto**

**Resultado Emocional:**

- Carlos no siente que la app es inteligente
- Carlos siente que **ÉL es más inteligente** usando la app
- La app le dio framework mental que puede usar incluso sin ella

---

#### Fase 5: Long-term - "Cognitive Offloading"

**Semana 4+: De Herramienta → Extensión Mental**

**Cambio de Relación:**

| Semana 1-2          | Semana 4+                        |
| ------------------- | -------------------------------- |
| "App que pruebo"    | "Sistema en el que confío"       |
| Consulta ocasional  | Consulta antes de CADA evento    |
| Duda de sugerencias | Confía en sugerencias            |
| Gestión consciente  | **Cognitive offload automático** |

**Nuevo Comportamiento Observable:**

1. **Gatekeeper de Compras:**
   - ANTES: Ve camisa en tienda → compra impulsivamente
   - AHORA: Ve camisa → abre Capsule → consulta compatibilidad → decisión informada
   - **Consulta Capsule como quien consulta su calendario antes de aceptar reunión**

2. **Variación sin Ansiedad:**
   - ANTES: Hoodie negro todos los días por miedo
   - AHORA: Varía outfit 3-4x/semana sin pensar
   - **La app eliminó el switching cost mental de variar**

3. **Pre-evento Confidence:**
   - ANTES: 30 min de ansiedad frente al espejo antes de pitch importante
   - AHORA: 2 min en Capsule → outfit seleccionado → enfoque en contenido del pitch
   - **Mental space liberado para lo que importa**

4. **Inventory Awareness:**
   - ANTES: No sabía qué tenía, compraba duplicados
   - AHORA: Sabe exactamente qué tiene y qué necesita
   - **Compras se vuelven estratégicas, no reactivas**

**El Lock-in Emocional (Switching Cost):**

**Por qué Carlos NO puede dejar Capsule:**

- NO es lock-in técnico (puede exportar fotos)
- NO es lock-in contractual (puede cancelar suscripción)
- SÍ es **lock-in cognitivo y emocional**:

  _"Volver a decidir 'a ciegas' frente al armario físico se siente ARCAICO E INEFICIENTE ahora que sé que existe una mejor manera."_

- Ha **externalizado la carga cognitiva** de su imagen
- Regresar significa **re-internalizar** esa carga → too painful

**Métricas de Éxito Long-term (Mes 3+):**

| Métrica                | Antes de Capsule | Con Capsule | Delta                      |
| ---------------------- | ---------------- | ----------- | -------------------------- |
| Tiempo decisión outfit | 20+ min          | <3 min      | **-85%**                   |
| Variación semanal      | 1-2 outfits      | 4-5 outfits | **+200%**                  |
| Compras duplicadas     | 3-4/año          | 0-1/año     | **-75%**                   |
| % guardarropa usado    | 40%              | 75%         | **+35pp**                  |
| Pre-evento anxiety     | Alta             | Baja        | **Subjetivo pero crítico** |

**Nivel de Confianza:**

- Mes 1: Prueba las sugerencias con escepticismo
- Mes 2: Confía en 70% de sugerencias
- Mes 3: Confía en 90% de sugerencias, rara vez las ignora
- Mes 6: **Capsule es su default**, pensar manualmente es la excepción

**El Estado Final:**

- Carlos ha delegado la "gestión de imagen" a un sistema confiable
- Recuperó bandwidth mental para código, ideas, relaciones
- Se siente **competente socialmente** sin esfuerzo consciente
- **Capsule es infraestructura invisible** - solo lo nota cuando no está

---

### Mapa Emocional Consolidado

**El Arco Emocional de Carlos a través del Journey:**

```
INADECUACIÓN → ESPERANZA/CONTROL → RELIEF → COMPETENCIA → CONFIANZA

Discovery:     "Parezco niño disfrazado, no profesional"
Onboarding:    "Estoy domando el caos, esto tiene sentido"
First Success: "Esto funciona, puedo relajarme"
Core Usage:    "Estoy preparado, me veo competente"
Long-term:     "Ya ni pienso en esto, funciona solo"
```

**Insight Clave:**

Capsule NO vende:

- ❌ Ropa organizada (feature)
- ❌ Sugerencias de IA (tecnología)
- ❌ Ahorro de tiempo (beneficio genérico)

Capsule SÍ vende:

- ✅ **El fin del síndrome del impostor en imagen**
- ✅ **Cognitive offloading de competencia social**
- ✅ **Confianza para enfocarse en lo que importa**

**Jobs-to-be-Done Emocional:**
_"Contrato Capsule para sentirme competente en mi imagen profesional sin robarle ancho de banda a mi mente técnica."_

---

### Validación del Equipo (Party Mode - Target Users)

**Sally (UX Designer):**

- ✅ **Ghost Items con swipes Tinder-style**: Resuelve onboarding friction, convierte data entry en juego
- ✅ **Outfit Canvas visual**: Success moment claro y visceral
- ✅ **Dopamine hit en item #3**: No espera a 50 items para dar valor

**John (PM):**

- ✅ **Carlos como beachhead**: Problema solitario, cleanest MVP scope, highest willingness to pay
- ✅ **Personas observables reales**: Matías, Andrea existen y son escalables
- ✅ **Métricas trackables**: Variación semanal, tiempo de decisión, compras duplicadas

**Maya (Design Thinking Coach):**

- ✅ **Mapa emocional completo**: Inadecuación → Control → Competencia
- ✅ **Tono "Expert Validation"**: Sastre Experto > Amiga Cariñosa resuelve uncanny valley
- ✅ **Copy de marketing**: "Tu código es Senior, que tu imagen no parezca Junior" nombra el pain sin atacar

**Consensus del equipo:**

- User personas son **reales, observables, y accionables**
- Journey está **emocionalmente mapeado**, no solo funcionalmente
- UX innovations (Ghost Items, Expert tone) están **validadas**
- Beachhead strategy (Carlos first) es **correcta y defendible**

---

## Success Metrics & KPIs

### North Star Metric

**Weekly Active Outfits Generated (WAOG)**

**Definición:** Número de outfits que usuarios marcan como "Wear" por semana

**Por qué es North Star:**

- Conecta activación (necesitas prendas subidas para generar outfits)
- Conecta engagement (uso frecuente del core value)
- Conecta retención (si generas outfits semanalmente, te quedas)
- Conecta business (usuarios activos generando value → conversión a paid)

**Target por fase:**

- **Mes 3** (100 usuarios beta): 150-200 WAOG total (1.5-2 outfits/usuario/semana)
- **Mes 6** (1K MAU): 2,000 WAOG total (2 outfits/usuario/semana)
- **Mes 12**: Escala con MAU

---

### User Success Metrics

#### 1. Activation (Getting to Value)

**Objetivo:** Llevar a Carlos desde signup hasta "Tercer Outfit Generado" (Aha Moment)

| Métrica                             | Target       | Timeframe     | Measurement                                 |
| ----------------------------------- | ------------ | ------------- | ------------------------------------------- |
| **Time to First Item Uploaded**     | <60 segundos | First session | Timestamp signup → first photo upload       |
| **Items Uploaded in First Session** | 3 items      | First session | Count items with status "validated"         |
| **Time to First Outfit Generated**  | <5 minutos   | First session | Timestamp signup → first outfit generated   |
| **Activation Rate**                 | >35%         | Within 7 days | % signups reaching "Third Outfit Generated" |

**Success Criteria:**

- Si 35%+ de signups llegan a "Tercer Outfit Generado" en D7, la activación funciona
- Si average time to first outfit es <5 min, el onboarding es lo suficientemente fluido

---

#### 2. Engagement Quality (Utility Over Vanity)

**Objetivo:** Medir uso que realmente resuelve el problema de Carlos

| Métrica                            | Target         | Measurement                               |
| ---------------------------------- | -------------- | ----------------------------------------- |
| **Session Intent Success Rate**    | >50%           | % sessions ending in "Wear" action        |
| **Ghost Item Interaction Rate**    | >40%           | % outfits where user swipes on Ghost Item |
| **Pre-Purchase Check Usage**       | >15% MAU/month | % MAU using "photo in store" ≥1x/month    |
| **Saved Ghost Items**              | Track baseline | # Ghost Items added to wishlist           |
| **Session Length (Decision Time)** | <3 min average | Time from outfit request → "Wear" action  |

**Success Criteria:**

- Si >50% de sesiones terminan en "Wear", la sugerencia es útil (no solo browsing)
- Si >40% interactúa con Ghost Items, la IA está sugiriendo cosas relevantes
- Si session length promedio <3 min, estamos cumpliendo la promesa de eficiencia

---

#### 3. Retention & Habit Formation

**Objetivo:** Carlos usa Capsule 2x/semana (frecuencia mágica del hábito)

| Métrica                       | Target       | Phase          | Measurement                           |
| ----------------------------- | ------------ | -------------- | ------------------------------------- |
| **D7 Retention**              | >50%         | MVP            | % activated users returning in Week 1 |
| **D30 Retention**             | >40%         | MVP validation | % activated users active in Month 1   |
| **Weekly Active Users (WAU)** | Track growth | Ongoing        | # users generating ≥1 outfit/week     |
| **Frequency (Sessions/Week)** | 2+ sessions  | Steady state   | Avg sessions per active user          |

**Success Criteria:**

- D30 retention >40% valida que el producto es sticky
- Si usuarios activos promedian 2+ sesiones/semana, el hábito se formó

---

#### 4. User Outcome Metrics (Carlos's Real Results)

**Objetivo:** Medir si Capsule está resolviendo el problema emocional y práctico de Carlos

| Métrica                    | Baseline (Before) | Target (After 3 months) | Measurement Method                              |
| -------------------------- | ----------------- | ----------------------- | ----------------------------------------------- |
| **Tiempo decisión outfit** | 20+ min           | <3 min                  | User survey + session length data               |
| **Variación semanal**      | 1-2 outfits       | 4-5 outfits             | Asset Utilization Rate (unique items worn/week) |
| **Compras duplicadas**     | 3-4/año           | 0-1/año                 | User survey (self-reported)                     |
| **% guardarropa usado**    | 40%               | 75%                     | (# items worn in 30 days) / (total inventory)   |
| **Pre-evento anxiety**     | Alta              | Baja                    | User survey (1-10 scale)                        |

**Success Criteria:**

- Si users reportan -85% tiempo de decisión, estamos cumpliendo eficiencia
- Si Asset Utilization sube de 40% → 75%, estamos revelando valor latente del guardarropa
- Si pre-evento anxiety baja significativamente, estamos resolviendo el job emocional

---

### Business Objectives

#### Fase 1: MVP Validation (Mes 1-3)

**Objetivo:** Validar que el producto resuelve el problema de Carlos de manera sticky

| Objetivo             | Target                | Success Criteria                               |
| -------------------- | --------------------- | ---------------------------------------------- |
| **Beta Users**       | 100 "Carlos" activos  | Recruited via Lima tech community              |
| **D30 Retention**    | >40%                  | 40+ users still active after 30 days           |
| **NPS Score**        | Baseline              | Survey beta cohort, establish benchmark        |
| **Feedback Quality** | 50+ detailed sessions | User interviews, bug reports, feature requests |
| **Monetization**     | $0 (free beta)        | Focus on product validation, not revenue       |

**Milestone:** Si D30 retention >40% + feedback cualitativo es positivo → lanzar público

---

#### Fase 2: Product-Market Fit (Mes 4-6)

**Objetivo:** Validar PMF en el nicho Lima tech/professional, activar monetización

| Objetivo                       | Target    | Success Criteria                       |
| ------------------------------ | --------- | -------------------------------------- |
| **Monthly Active Users (MAU)** | 1,000 MAU | Organic growth via content + community |
| **NPS Score**                  | >50       | Strong product-market fit indicator    |
| **Activation Rate**            | >35%      | Onboarding is effective                |
| **Weekly Active Users (WAU)**  | 600+ WAU  | 60% of MAU weekly active               |
| **Free → Pro Conversion**      | 5%        | 50 paying users @ $4.99/mo = $250 MRR  |
| **CAC (Blended)**              | <$5       | Organic-first strategy working         |

**Milestone:** Si NPS >50 + conversion 5% → PMF validado, escalar adquisición

---

#### Fase 3: Growth & Sustainability (Mes 7-12)

**Objetivo:** Alcanzar "Ramen Profitability" ($2-3K MRR) y saturar nicho Lima

| Objetivo                            | Target               | Success Criteria                       |
| ----------------------------------- | -------------------- | -------------------------------------- |
| **Monthly Recurring Revenue (MRR)** | $2,000 - $3,000      | 400-600 Pro users @ $4.99/mo           |
| **Total Active Users**              | 1,000+ MAU           | Market penetration in Lima tech scene  |
| **Free → Pro Conversion**           | 5-8%                 | Improving as value prop solidifies     |
| **Churn Rate (Monthly)**            | <4%                  | Emotional lock-in validated            |
| **Referral Rate**                   | >15%                 | Organic word-of-mouth working          |
| **Partnership Activations**         | 2 strategic partners | Local boutiques/brands for Ghost Items |

**Milestone:** Si MRR >$2K + churn <4% → proyecto es autosostenible, considerar expansión

---

### Key Performance Indicators (Consolidated)

#### Acquisition (Organic-First Strategy)

| KPI                                 | Target | Phase    | Notes                                     |
| ----------------------------------- | ------ | -------- | ----------------------------------------- |
| **CAC (Customer Acquisition Cost)** | <$5    | Mes 4-12 | Content marketing + community             |
| **Signup Source Breakdown**         | Track  | Ongoing  | TikTok/Reels, tech communities, referrals |
| **Landing Page Conversion**         | >15%   | Mes 4+   | Visitor → signup                          |
| **Referral Rate**                   | >15%   | Mes 7+   | % Pro users referring ≥1 friend           |

---

#### Activation & Onboarding

| KPI                        | Target  | Phase | Notes                               |
| -------------------------- | ------- | ----- | ----------------------------------- |
| **Time to First Item**     | <60s    | All   | Speed is critical                   |
| **Items in First Session** | 3 items | All   | Minimum for Ghost Items             |
| **Time to First Outfit**   | <5 min  | All   | Immediate value delivery            |
| **Activation Rate (D7)**   | >35%    | All   | % reaching "Third Outfit Generated" |

---

#### Engagement & Retention

| KPI                        | Target | Phase        | Notes                       |
| -------------------------- | ------ | ------------ | --------------------------- |
| **D7 Retention**           | >50%   | All          | Week 1 stickiness           |
| **D30 Retention**          | >40%   | All          | Month 1 validation          |
| **Sessions per WAU**       | 2+     | Steady state | Habit formation             |
| **Session Intent Success** | >50%   | All          | % sessions ending in "Wear" |
| **Ghost Item Interaction** | >40%   | All          | AI relevance validation     |

---

#### Monetization & Unit Economics

| KPI                                 | Target           | Phase                 | Notes                          |
| ----------------------------------- | ---------------- | --------------------- | ------------------------------ |
| **Free → Pro Conversion**           | 5-8%             | Mes 4+                | Conversion to paid tier        |
| **MRR (Monthly Recurring Revenue)** | $250 → $2K → $3K | M6 → M9 → M12         | Progressive growth             |
| **LTV (Lifetime Value)**            | $50              | Based on 10-month avg | Conservative estimate          |
| **LTV:CAC Ratio**                   | >10:1            | Sustainable           | Exceptional for organic growth |
| **Churn Rate (Monthly)**            | <4%              | Mes 6+                | Emotional lock-in              |
| **ARPU (Avg Revenue Per User)**     | Track            | Ongoing               | MRR / paying users             |

---

#### Product Performance

| KPI                                | Target      | Phase             | Notes                                       |
| ---------------------------------- | ----------- | ----------------- | ------------------------------------------- |
| **Average Inventory Size**         | 30-50 items | Steady state      | Free tier caps at 30                        |
| **Asset Utilization Rate**         | 75%         | User outcome      | % inventory used monthly                    |
| **Outfit Generation Success**      | >80%        | All               | % generated outfits user deems "acceptable" |
| **AI Accuracy (User Corrections)** | <10%        | Improve over time | % items user corrects after upload          |

---

### Unit Economics Model (Indie Hacker Bootstrap)

**Revenue Model: Freemium Restringido**

**Free Tier:**

- Up to 30 items
- Basic outfit generation
- Ghost Items visibility (but no advanced wishlist)

**Pro Tier ($4.99/month or $49/year):**

- Unlimited items
- Advanced stats (Asset Utilization, style insights)
- Personalized Ghost Items + wishlist
- Pre-purchase check unlimited
- Priority support

**Secondary Revenue (Future - Mes 12+):**

- Affiliate commissions from Ghost Item purchases (Amazon, local boutiques)
- Lead gen for partner retailers

---

**Unit Economics Assumptions (Conservative):**

| Metric                           | Value     | Notes                        |
| -------------------------------- | --------- | ---------------------------- |
| **CAC**                          | $5        | Organic content + community  |
| **Conversion Rate (Free → Pro)** | 5%        | After activation             |
| **ARPU (Monthly)**               | $4.99     | Pro subscription             |
| **Avg Customer Lifetime**        | 10 months | Conservative for utility app |
| **LTV**                          | $50       | 10 months × $4.99            |
| **LTV:CAC**                      | 10:1      | Highly profitable            |
| **Monthly Churn**                | 4%        | Strong lock-in               |
| **Gross Margin**                 | ~90%      | SaaS economics, low COGS     |

**Path to $3K MRR:**

- Need 600 Pro users @ $4.99/mo = $2,994 MRR
- If conversion is 5%, need 12,000 total signups
- At 40% D30 retention, need ~4,800 MAU base
- Timeline: Month 12 with organic growth

---

### Success Metrics Framework Summary

**How We Know We're Winning:**

**User Level:**

- Carlos activates in <5 min and genera Third Outfit within D7 (>35% activation rate)
- Carlos uses Capsule 2x/week and marks "Wear" in >50% of sessions (habit formed)
- Carlos reports -85% decision time and +200% outfit variation after 3 months (problem solved)

**Business Level:**

- D30 retention >40% validates product stickiness (Mes 3)
- NPS >50 validates product-market fit (Mes 6)
- $2-3K MRR with <4% churn validates sustainability (Mes 12)
- LTV:CAC >10:1 validates organic growth strategy is working

**Strategic Level:**

- 1,000 active users in Lima tech scene = significant market penetration
- 15%+ referral rate = word-of-mouth flywheel activated
- 2 strategic partnerships = affiliate revenue model validated

---

**Emotional Arc → Metrics Mapping:**

```
INADECUACIÓN → ESPERANZA → RELIEF → COMPETENCIA → CONFIANZA
     ↓              ↓          ↓           ↓            ↓
  Signup      Activation   First      Habit      Retention
            (Third Outfit) "Wear"   (2x/week)    (D30 >40%)
```

---

## MVP Scope & Future Vision

### Philosophy: Minimum Viable Excellence

**MVP Mindset:**

- El MVP NO es "versión incompleta" - es la **versión más simple que resuelve el core problem de Carlos completamente**
- Cada feature incluida debe servir directamente al aha moment: "Tercer Outfit Generado" con confianza algorítmica
- Scope agresivo pero no temerario - incluye lo crítico para utility, excluye lo nice-to-have

---

### Core MVP Features (Mes 1-6)

#### 1. Onboarding & Inventory Management

**Feature: Smart Photo Upload**

- **Descripción:** Single-item upload con análisis IA instantáneo
- **Flow:** Usuario toma foto → IA analiza (categoría, color, formalidad, tipo de prenda) → Usuario valida/corrige
- **Innovación:** "Ghost Items" aparecen desde item #3 para crear outfits completos
- **Critical UX:** <60s to first item uploaded, <5 min to first outfit generated

**Feature: Manual Tagging & Correction**

- **Descripción:** Fallback manual cuando IA falla o usuario quiere override
- **Razón:** La IA fallará inevitablemente - necesitamos safety net para no frustrar usuario
- **Attributes editables:**
  - Categoría (camisa, pantalón, zapatos, etc.)
  - Color (primario y secundario)
  - Formalidad (casual, smart casual, formal, black tie)
  - Tipo específico (manga larga/corta, cuello, fit)
  - Ocasión sugerida (trabajo, social, deporte)

**Feature: Inventory Dashboard**

- **Descripción:** Vista visual de todo el guardarropa con filtros
- **Filters:** Por categoría, color, formalidad, uso reciente
- **Search:** Búsqueda por texto ("camisa azul", "zapatos formales")
- **CRUD Operations:** Editar metadata, eliminar items, marcar como donado/perdido
- **Visual:** Grid view con thumbnails limpios, estilo minimalista (no Pinterest)

**Feature: Basic Stats (Asset Utilization)**

- **Descripción:** Métricas simples visibles para usuario
- **Stats incluidas:**
  - % del guardarropa usado este mes (Target: 75%)
  - Items más/menos usados
  - Distribución de colores y categorías
- **UX:** No abrumar con data - una pantalla simple, no dashboard complejo
- **Hook de retención:** Para Carlos (engineer mindset), ver métricas es engaging

---

#### 2. Outfit Generation Engine

**Feature: Context Flow (Smart Outfit Suggestion)**

- **Descripción:** Árbol de decisión rápido para generar outfits contextuales
- **Inputs:**
  - Tipo de evento (trabajo, social, networking, cita, casual)
  - Momento del día (mañana, tarde, noche)
  - Nivel de formalidad deseado
  - Clima actual (integración weather API)
- **Output:** 3 opciones de outfits completos con "Outfit Canvas" visual
- **Time to result:** <3 segundos desde input completo

**Feature: Weather Integration**

- **Descripción:** Sugerencias adaptadas al clima de Lima en tiempo real
- **API:** OpenWeatherMap o similar
- **Logic:**
  - Temperatura >25°C → no sugiere chaquetas pesadas
  - Lluvia probable → incluye impermeables/paraguas si usuario tiene
  - Noche fría (<15°C) → prioriza capas
- **Razón crítica:** Recomendar casaca en verano es error fatal de UX

**Feature: Ghost Items (Inferencia Hallucinada)**

- **Descripción:** IA "alucina" items faltantes para completar outfits desde item #3
- **Interacción:** Tinder-style swipes
  - Swipe Right ("Lo tengo"): Abre cámara para añadir al inventario
  - Swipe Up ("Lo quiero"): Añade a wishlist inteligente
  - Swipe Left ("No es mi estilo"): IA aprende y recalcula
- **Training:** Cada interacción mejora precisión de sugerencias futuras
- **Gamification:** Convierte inventory building en rompecabezas, no data entry

**Feature: Outfit Canvas (Visual Proposal)**

- **Descripción:** Renderizado limpio del outfit sugerido con explicación lógica
- **Componentes:**
  - Visual de cada prenda en el outfit
  - Explicación del "por qué funciona" (tone: Expert Validation)
  - Score de confianza (% match con estilo histórico)
  - Última vez usado (evitar repeticiones)
- **CTA:** Botón "Wear" prominente (métrica: Session Intent Success)

**Feature: Outfit History (Logbook)**

- **Descripción:** Registro simple de qué se puso cuándo
- **Funcionalidad:**
  - Ver outfits usados por fecha
  - Buscar "¿qué usé martes pasado?"
  - Evitar repeticiones (app sugiere "esto lo usaste hace 3 días")
- **Storage:** Lightweight - solo outfit_id + date + event_type
- **UX:** No complicar - calendario simple con thumbnail de outfit por día

---

#### 3. Pre-Purchase Check (Shopping Assistant)

**Feature: In-Store Compatibility Analysis**

- **Descripción:** Foto de prenda en tienda → análisis de compatibilidad con inventario
- **Sophistication Level:** **Alto** - análisis semántico/estilístico, no solo color match
- **Output examples:**
  - ✅ "Esta camisa añadiría variedad porque el cuello mao la hace más informal que tus camisas actuales"
  - ⚠️ "Ya tienes 2 camisas azules similares. Esta es casi idéntica a la que compraste en Diciembre."
  - ✅ "Esta chaqueta combinaría bien con 8 de tus outfits existentes, especialmente para eventos de noche"
- **Tone:** Sastre experto asesorando, no juez criticando
- **Goal:** Reducir compras duplicadas 40% (métrica trackeable)

**Feature: Ghost Item Wishlist**

- **Descripción:** Lista inteligente de items sugeridos que usuario marcó "lo quiero"
- **Funcionalidad básica MVP:**
  - Ver lista de Ghost Items guardados
  - Marcar como comprado (trigger: añadir foto del item real)
  - Eliminar de wishlist
- **NO en MVP:** Affiliate links, price tracking, notificaciones de ofertas (Fase 2)

---

### Out of Scope for MVP (The Anti-Roadmap)

**Estas features son valuable pero explícitamente FUERA del MVP para evitar scope creep:**

#### Postponed to Phase 2 (Mes 7-12)

❌ **Calendar Integration**

- **Razón:** Añade complejidad de auth (Google Calendar API) sin afectar core value
- **Cuando:** Post-PMF cuando planificación semanal sea feature request top

❌ **Packing Lists & Travel Planning**

- **Razón:** Sirve a Andrea (consultora viajera), no a Carlos (beachhead)
- **Cuando:** Mes 12+ al expandir a segundo user segment

❌ **Collaborative Closets (Parejas/Roommates)**

- **Razón:** Requiere network effects y multi-user auth - MVP es single-player
- **Cuando:** Mes 12-18 cuando tengamos critical mass de usuarios

❌ **Care Labels Scanning (Instrucciones de Lavado)**

- **Razón:** Desvía foco de "elegir outfit" a "gestionar lavandería" - job diferente
- **Cuando:** Posible Fase 3 si users lo piden consistentemente

❌ **Laundry Tracking / Estado de Suciedad**

- **Razón:** Overhead operacional alto (usuario debe marcar "sucio/limpio" constantemente)
- **Cuando:** Solo si automation es posible (ej: IoT integration con lavadora)

#### Postponed to Phase 3+ (Año 2+)

❌ **Social Features (Share Outfits, Like, Comment)**

- **Razón:** Transforma utility app en social network - diferente value prop
- **Cuando:** Si PMF sólido y users piden explícitamente social layer

❌ **Style Evolution Tracking**

- **Razón:** Requiere 12+ meses de data para ser meaningful
- **Cuando:** Año 2+ cuando tengamos cohorts con tenure largo

❌ **Advanced E-commerce Integration**

- **Razón:** MVP mantiene privacy-first - no queremos retailers husmeando inventario
- **Cuando:** Fase 4+ con modelo outbound (user busca) no inbound (tienda spamea)

❌ **Multi-closet Management (Casa + Oficina + Casa de Padres)**

- **Razón:** Edge case para beachhead (Carlos work-from-home tiene 1 closet)
- **Cuando:** Si segment expansion trae usuarios con múltiples ubicaciones

❌ **AR Try-On / Virtual Wardrobe Visualization**

- **Razón:** Tech complexity alto, value incremental vs core problem
- **Cuando:** Si hay budget para R&D y competencia lo hace commodity

---

### MVP Success Criteria (Go/No-Go Gates)

**Definición de gates de validación para decidir si escalar, pivotar, o iterar**

#### Gate 1: Beta Validation (Mes 3)

**Objetivo:** Validar que el producto resuelve el problema de Carlos de manera sticky

**Success Criteria:**

- ✅ **D30 Retention >40%** (40+ de 100 beta users activos después de 30 días)
- ✅ **Activation Rate >35%** (35+ users llegan a "Third Outfit Generated" en D7)
- ✅ **Feedback Cualitativo Positivo** (50+ entrevistas detalladas con insights accionables)
- ✅ **Core Flow Funciona** (Time to first outfit <5 min promedio)

**Go Decision:**

- Si 3/4 criteria met → **Lanzar público** (activar monetización)
- Si 2/4 criteria met → **Iterar 1 mes más** con mejoras específicas
- Si <2/4 criteria met → **Pivotar** o considerar pause para re-think

**No-Go Signals:**

- D30 retention <25% (producto no es sticky)
- Activation <20% (onboarding roto)
- Feedback: "Es interesante pero no lo necesito" (problema no es real)

---

#### Gate 2: Product-Market Fit (Mes 6)

**Objetivo:** Validar PMF en nicho Lima tech/professional y que monetización funciona

**Success Criteria:**

- ✅ **NPS >50** (strong PMF indicator)
- ✅ **Free → Pro Conversion 5%** (50 paying users @ $4.99 = $250 MRR)
- ✅ **CAC <$5** (organic-first strategy working)
- ✅ **Weekly Active Users 60% of MAU** (600 WAU / 1K MAU)

**Go Decision:**

- Si 4/4 criteria met → **Escalar adquisición agresivamente** (content marketing, paid ads)
- Si 3/4 criteria met → **Optimizar conversion funnel** antes de escalar spend
- Si <3/4 criteria met → **Re-evaluar pricing o value prop**

**No-Go Signals:**

- NPS <30 (users lukewarm, no strong love)
- Conversion <3% (price resistance o value prop unclear)
- CAC >$10 (organic not working, paid too expensive)

---

#### Gate 3: Sustainability (Mes 12)

**Objetivo:** Alcanzar "Ramen Profitability" y validar modelo es sostenible long-term

**Success Criteria:**

- ✅ **MRR >$2,000** (400-600 Pro users paying $4.99/mo)
- ✅ **Monthly Churn <4%** (emotional lock-in validated)
- ✅ **LTV:CAC >10:1** (unit economics exceptionally profitable)
- ✅ **Referral Rate >15%** (word-of-mouth flywheel activated)

**Go Decision:**

- Si 4/4 criteria met → **Considerar contratar ayuda** (eng, designer) o **expandir geográficamente**
- Si 3/4 criteria met → **Optimizar operaciones** para llegar a 4/4 en Q2
- Si <3/4 criteria met → **Mantener como side project**, no full-time commitment

**No-Go Signals:**

- MRR <$1K (no reaching critical mass)
- Churn >8% (lock-in not working, users leaving)
- LTV:CAC <5:1 (unit economics don't justify scaling)

---

### Future Vision (Post-MVP Roadmap)

**Si alcanzamos Mes 12 con $3K MRR y 1K usuarios en Lima, ¿qué construimos?**

**Priorización definida:**

#### Priority 1: Features Expansion (Mes 13-18)

**Objetivo:** Atender a Andrea (Consultora Viajera) y aumentar utilidad para Carlos

**Features:**

1. **Packing Lists Inteligentes**
   - Input: Destino, duración, tipo de viaje (trabajo/vacaciones)
   - Output: Lista de outfits sugeridos con prendas específicas del inventario
   - Value: Reduce stress pre-viaje, evita over-packing

2. **Outfit Planning Calendar**
   - Planificación de outfits por días (integración con Google Calendar opcional)
   - "¿Qué me pongo lunes→viernes esta semana?"
   - Evita repeticiones, balancea formalidad según eventos

3. **Advanced Stats & Insights**
   - Cost-per-wear (si usuario añade precio de compra)
   - Seasonal rotation tracking
   - "Prendas zombies" (no usadas en 6+ meses con sugerencia de donar)

**Expected Impact:**

- Increase MAU→WAU conversion (más utility = más uso)
- Reduce churn (más features = más switching cost)
- Attract Andrea segment (expand TAM)

---

#### Priority 2: Revenue Diversification (Mes 19-24)

**Objetivo:** Activar affiliate revenue de Ghost Items wishlist

**Features:**

1. **Affiliate Link Integration**
   - Ghost Items en wishlist → links a Amazon, tiendas locales (Ripley, Saga Falabella)
   - Commission: 5-10% por compra referida
   - User experience: "Ver dónde comprar" button

2. **Strategic Partnerships (Local Boutiques)**
   - 2-3 tiendas locales en Lima (básicos de calidad + streetwear local)
   - Exclusive discounts para Pro users
   - Lead gen revenue: tienda paga por usuarios que visitan con código Capsule

3. **Tiered Pricing Adjustment**
   - Introducir tier "Premium" ($9.99/mo):
     - Todo lo de Pro
     - Personal styling session mensual (async via chat)
     - Early access a partnerships/discounts

**Expected Impact:**

- Diversify beyond subscriptions (reduce reliance on single revenue stream)
- MRR increase: $3K → $5K+ (affiliate + premium tier)
- Validate partnerships model before scaling

---

#### Priority 3: Segment Expansion (Año 2)

**Objetivo:** Expandir de Carlos (Tech Lead) → Usuario Casual más amplio

**Strategy:**

1. **Simplify Onboarding for Casual User**
   - Batch photo upload (scan whole closet at once)
   - AI does categorization without user validation
   - "Quick Pick" mode: outfit en <10 segundos sin Context Flow

2. **Local Services Integration**
   - Economía circular local: dónde donar, arreglar, renovar en su distrito
   - Partner con lavanderías, sastres locales
   - Discovery feature: "servicios cerca de ti"

3. **Pricing Adjustment**
   - Introduce tier "Basic" ($2.99/mo) para Usuario Casual:
     - Hasta 50 items (vs 30 free)
     - Quick Pick mode
     - No advanced stats
   - Keep Pro ($4.99) para Carlos with all features

**Expected Impact:**

- TAM expansion: De 10K (Lima tech) → 100K+ (Lima professional class)
- Lower ARPU but higher volume
- Validate product appeals beyond early adopter niche

---

#### Priority 4: Geographic Expansion (Año 3)

**Objetivo:** Replicar éxito de Lima en otras ciudades LATAM

**Target Cities (in order):**

1. **Ciudad de México** (tech scene fuerte, similar pain point)
2. **Bogotá** (emerging tech hub, urbano)
3. **Buenos Aires** (fashion-conscious, profesional)
4. **São Paulo** (massive market, pero requiere Portuguese localization)

**Go-to-Market Strategy:**

- Same playbook: organic content + tech community
- Partner con co-working spaces (WeWork, etc.) para beta users
- Localize weather integration por ciudad
- Mantener pricing en USD (evitar currency complexity)

**Expected Impact:**

- 4x TAM (de 1K Lima → 4K across LATAM)
- MRR: $5K → $20K+ (ramen profitable → sustainable income)
- Validate model scales beyond single city

---

### Long-Term Vision (Año 3-5): Platform Evolution

**Si todo va excepcionalmente bien, Capsule evoluciona de utility app → platform:**

**Potential Pivots:**

1. **B2B2C Model:** Partner con retailers para ofrecer Capsule como value-add a sus clientes
2. **Stylist Marketplace:** Connect users con stylists profesionales que usan Capsule como tool
3. **Sustainability Platform:** Focus en economía circular - swap marketplace, rental integration
4. **White-label Solution:** License technology a fashion brands para sus customer apps

**Key Decision Point:**

- Solo considerar platform evolution si:
  - MRR >$20K (prueba de scale)
  - Team >3 people (can't build platform solo)
  - Clear market pull (users/partners pidiendo esto activamente)

---
