# Inventario de Componentes UI - Capsule Design System

**Generado:** 2026-01-17
**Parte:** packages/ui
**Tipo:** Biblioteca de Componentes (Atomic Design)
**Total de Componentes:** 13 Atoms implementados · 5 Molecules especificadas (sin construir) · 6 Organisms especificados (sin construir)

---

## Resumen Ejecutivo

El design system de Capsule actualmente contiene **13 componentes atómicos** completamente implementados y testeados. Todos los componentes utilizan:

- **class-variance-authority (CVA)** para manejo de variantes
- **React forwardRef** para acceso a elementos DOM
- **TypeScript** para type safety completo
- **Tailwind CSS** para estilos utility-first
- **Storybook** para documentación interactiva
- **Vitest + Testing Library** para unit testing

**Estado del Design System:** 🟡 Fase Inicial

- ✅ Atoms: 13/13 implementados — auditoría de julio 2026 confirma que son suficientes, no falta ningún primitivo.
- ⚠️ Molecules: 0/5 implementadas (5 especificadas en palabras — ver [Molecules & Organisms](#molecules--organisms))
- ⚠️ Organisms: 0/6 implementados (6 especificados en palabras, 3 de ellos ya nombrados en el spec de UX desde enero 2026 sin construir)

---

## Componentes por Categoría

### Input & Forms (5 componentes)

- Button
- Input
- Checkbox
- Radio
- Switch

### Display & Feedback (4 componentes)

- Avatar
- Badge
- Tag
- Skeleton

### Navigation (1 componente)

- Link

### Layout & Structure (1 componente)

- Divider

### Loading States (1 componente)

- Spinner

### Utility (1 componente)

- IconButton

---

## Documentación Detallada por Componente

### 1. AVATAR

**Ubicación:** `packages/ui/src/components/atoms/Avatar/`

**Descripción:**
Componente para mostrar imágenes de perfil de usuario con fallback automático a iniciales cuando la imagen no está disponible.

**Props:**

```typescript
interface AvatarProps {
  src?: string; // URL de imagen
  name: string; // Nombre (REQUERIDO) - genera iniciales
  alt?: string; // Texto alternativo
  fallbackColor?: string; // Color de fallback personalizado
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  variant?: "circle" | "rounded" | "square";
}
```

**Variantes:**

- **size:**
  - xs: 24×24px (w-6 h-6)
  - sm: 32×32px (w-8 h-8)
  - md: 40×40px (w-10 h-10) [DEFAULT]
  - lg: 48×48px (w-12 h-12)
  - xl: 64×64px (w-16 h-16)
  - 2xl: 80×80px (w-20 h-20)
- **variant:**
  - circle: Completamente redondo [DEFAULT]
  - rounded: Esquinas redondeadas
  - square: Esquinas cuadradas

**Características Especiales:**

- ✨ Generación automática de iniciales (e.g., "John Doe" → "JD")
- 🎨 6 colores de fallback asignados consistentemente por hash del nombre
- 🖼️ Manejo automático de errores de carga de imagen
- ♿ Accesible con aria-label del nombre completo

**Estados:**

- `imageError` (useState): Detecta fallos de carga de imagen
- Fallback automático a iniciales si imagen falla

**Ejemplos de Uso:**

```tsx
<Avatar name="Sebastian Torres" />
<Avatar name="María García" src="/avatar.jpg" size="lg" />
<Avatar name="Admin User" variant="rounded" fallbackColor="bg-purple-500" />
```

---

### 2. BADGE

**Ubicación:** `packages/ui/src/components/atoms/Badge/`

**Descripción:**
Etiquetas pequeñas para mostrar estados, categorías o contar elementos.

**Props:**

```typescript
interface BadgeProps {
  removable?: boolean; // Permite remover el badge
  onRemove?: () => void; // Callback al remover
  dot?: boolean; // Muestra punto indicador
  variant?: "solid" | "outline" | "subtle";
  colorScheme?:
    | "primary"
    | "accent"
    | "success"
    | "warning"
    | "error"
    | "info"
    | "neutral";
  size?: "sm" | "md" | "lg";
}
```

**Variantes:**

- **variant:**
  - solid: Fondo de color, texto blanco [DEFAULT]
  - outline: Borde de color, fondo transparente
  - subtle: Fondo claro del color, texto oscuro
- **colorScheme:** 7 opciones (primary, accent, success, warning, error, info, neutral)
- **size:**
  - sm: px-2 py-0.5 text-xs
  - md: px-2.5 py-1 text-sm [DEFAULT]
  - lg: px-3 py-1.5 text-base

**Características Especiales:**

- ❌ Botón de remover opcional con ícono X
- 🔴 Indicador de punto opcional (dot)
- 🎨 21 combinaciones de color (3 variants × 7 colorSchemes)
- ♿ aria-label en botón de remover

**Subcomponentes:**

- `DotIndicator`: Círculo pequeño (1.5×1.5)
- `RemoveButton`: Botón X con hover states

**Ejemplos de Uso:**

```tsx
<Badge colorScheme="success">Activo</Badge>
<Badge variant="outline" colorScheme="warning">Pendiente</Badge>
<Badge removable onRemove={() => console.log('removed')} dot>Nuevo</Badge>
```

---

### 3. BUTTON

**Ubicación:** `packages/ui/src/components/atoms/Button/`

**Descripción:**
Botón primario de interacción con soporte para estados de carga y múltiples variantes visuales.

**Props (refactorizado julio 2026 — ver [Convención de variantes: Intent x Tone](#convención-de-variantes-intent-x-tone-julio-2026)):**

```typescript
interface ButtonProps {
  isLoading?: boolean; // Estado de carga
  intent?: "primary" | "neutral" | "danger"; // Significado semántico
  tone?: "solid" | "outline" | "ghost" | "text"; // Tratamiento visual
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean; // Ancho completo
  // + todas las props de HTMLButtonElement
}
```

**Variantes (estado actual — 12 combinaciones vía `compoundVariants`):**

- **intent:**
  - primary: Authority Blue [DEFAULT]
  - neutral: Greige oscuro/ink, para acciones sin carga emocional (ej. "Cancelar")
  - danger: Rust apagado (`error` token), acciones destructivas
- **tone:**
  - solid: New Neumorphism — `shadow-studio` + borde de precisión + relleno de color [DEFAULT]. Mapea a "Primary/Deploy" del spec de UX.
  - outline: Borde de precisión de 1px, fondo transparente
  - ghost: Glassmorphism real — `backdrop-blur-md` + fondo translúcido. Mapea a "Secondary/Choice" del spec de UX.
  - text: Sin chrome, `font-light`, tracking expandido. Mapea a "Tertiary/Support" del spec de UX.
- **size:**
  - sm: h-9 px-3 text-sm
  - md: h-11 px-6 text-base [DEFAULT]
  - lg: h-14 px-8 text-lg
- **fullWidth:** true/false

**Características Especiales:**

- ⏳ Estado de carga con spinner animado inline
- 🔒 Auto-deshabilitado cuando `isLoading=true`
- ⌨️ Focus ring visible para accesibilidad
- 🎯 Gap entre ícono y texto (gap-2)

**Estados de Loading:**

```tsx
// Renderiza spinner SVG con "Loading..." text
<Button isLoading>Guardar</Button>
```

**Ejemplos de Uso:**

```tsx
<Button>Guardar</Button>
<Button intent="danger" size="lg">Eliminar</Button>
<Button tone="outline" fullWidth>Cancelar</Button>
<Button intent="danger" tone="ghost">Eliminar (bajo énfasis)</Button>
<Button isLoading>Procesando...</Button>
```

---

### 4. CHECKBOX

**Ubicación:** `packages/ui/src/components/atoms/Checkbox/`

**Descripción:**
Casilla de verificación con soporte para estado indeterminado y labels opcionales.

**Props:**

```typescript
interface CheckboxProps {
  label?: string; // Texto del label
  indeterminate?: boolean; // Estado mixto (ni checked ni unchecked)
  size?: "sm" | "md" | "lg";
  colorScheme?: "primary" | "accent";
  // + props de <input type="checkbox">
}
```

**Variantes:**

- **size:**
  - sm: 16×16px (w-4 h-4)
  - md: 20×20px (w-5 h-5) [DEFAULT]
  - lg: 24×24px (w-6 h-6)
- **colorScheme:**
  - primary: Azul primario [DEFAULT]
  - accent: Color acento

**Características Especiales:**

- ➖ Estado indeterminado (línea horizontal)
- ✅ Ícono de check customizado (SVG)
- 🏷️ Label asociado opcional
- ♿ aria-checked="mixed" cuando indeterminate
- 📦 Gestión de ref interna para indeterminate

**Estados:**

- Normal: Sin check
- Checked: Con check ✓
- Indeterminate: Con línea ─

**Iconos Customizados:**

- `CheckIcon`: SVG path con checkmark, scale según size
- `IndeterminateIcon`: Línea horizontal, scale según size

**Ejemplos de Uso:**

```tsx
<Checkbox label="Acepto términos y condiciones" />
<Checkbox indeterminate label="Selección parcial" />
<Checkbox size="lg" colorScheme="accent" />
```

---

### 5. DIVIDER

**Ubicación:** `packages/ui/src/components/atoms/Divider/`

**Descripción:**
Línea divisoria horizontal o vertical con soporte opcional para label centrado.

**Props:**

```typescript
interface DividerProps {
  label?: string; // Texto centrado opcional
  orientation?: "horizontal" | "vertical";
  variant?: "solid" | "dashed";
}
```

**Variantes:**

- **orientation:**
  - horizontal: Línea horizontal completa [DEFAULT]
  - vertical: Línea vertical (requiere contenedor con altura)
- **variant:**
  - solid: Línea sólida [DEFAULT]
  - dashed: Línea punteada

**Características Especiales:**

- 🏷️ Label centrado opcional
- 📐 Adaptable a orientación
- ♿ role="separator" con label
- 🎨 Siempre color neutral-300

**Con Label:**

```
────── Label ──────
```

Dos líneas <hr> con flex-1 a cada lado del label

**Ejemplos de Uso:**

```tsx
<Divider />
<Divider label="O continúa con" />
<Divider orientation="vertical" />
<Divider variant="dashed" />
```

---

### 6. ICONBUTTON

**Ubicación:** `packages/ui/src/components/atoms/IconButton/`

**Descripción:**
Botón cuadrado o redondo que contiene solo un ícono, sin texto.

**Props:**

```typescript
interface IconButtonProps {
  icon: ReactElement; // Elemento de ícono (REQUERIDO)
  "aria-label": string; // Label accesible (REQUERIDO)
  variant?: "solid" | "outline" | "ghost";
  colorScheme?: "primary" | "accent" | "error" | "neutral";
  size?: "sm" | "md" | "lg";
  isRound?: boolean; // Completamente redondo
}
```

**Variantes:**

- **variant:**
  - solid: Fondo de color [DEFAULT]
  - outline: Solo borde
  - ghost: Sin fondo ni borde
- **colorScheme:** 4 opciones (primary, accent, error, neutral)
- **size:**
  - sm: 32×32px botón, ícono 16×16px
  - md: 40×40px botón, ícono 20×20px [DEFAULT]
  - lg: 48×48px botón, ícono 24×24px
- **isRound:** true (circular) / false (cuadrado con rounded-md) [DEFAULT: false]

**Características Especiales:**

- 🔄 Auto-redimensiona el ícono según size
- ♿ aria-label obligatorio para accesibilidad
- 🎨 12 combinaciones de estilos
- 🖱️ Focus ring visible

**Ejemplos de Uso:**

```tsx
<IconButton icon={<TrashIcon />} aria-label="Eliminar" variant="ghost" colorScheme="error" />
<IconButton icon={<PlusIcon />} aria-label="Agregar" isRound />
<IconButton icon={<EditIcon />} aria-label="Editar" size="sm" />
```

---

### 7. INPUT

**Ubicación:** `packages/ui/src/components/atoms/Input/`

**Descripción:**
Campo de entrada de texto con soporte para íconos izquierda/derecha y estados de validación.

**Props:**

```typescript
interface InputProps {
  leftIcon?: ReactNode; // Ícono izquierda
  rightIcon?: ReactNode; // Ícono derecha
  size?: "sm" | "md" | "lg";
  variant?: "default" | "error" | "success";
  fullWidth?: boolean;
  // + props de <input>
}
```

**Variantes:**

- **size:**
  - sm: h-9 px-3 text-sm
  - md: h-11 px-4 text-base [DEFAULT]
  - lg: h-14 px-6 text-lg
- **variant:**
  - default: Estilo normal [DEFAULT]
  - error: Rojo, fondo error-50
  - success: Verde, fondo success-50
- **fullWidth:** true/false

**Características Especiales:**

- 🔍 Íconos posicionables izquierda/derecha
- 📦 Wrapper automático cuando hay íconos
- 🎨 Padding automático para íconos (pl-10 / pr-10)
- 🔒 Estados disabled con opacity-50
- ⌨️ Focus ring con offset

**Subcomponentes:**

- `InputWrapper`: Contenedor relativo para posicionar íconos
- `InputIcon`: Posicionador absoluto del ícono (left-3 o right-3)

**Ejemplos de Uso:**

```tsx
<Input placeholder="Email" type="email" />
<Input leftIcon={<SearchIcon />} placeholder="Buscar..." />
<Input variant="error" placeholder="Campo inválido" />
<Input size="lg" fullWidth />
```

---

### 8. LINK

**Ubicación:** `packages/ui/src/components/atoms/Link/`

**Descripción:**
Enlace de navegación con soporte para links externos y variantes de estilo.

**Props:**

```typescript
interface LinkProps {
  isExternal?: boolean; // Abre en nueva pestaña
  variant?: "inline" | "standalone";
  colorScheme?: "primary" | "accent";
  // + props de <a>
}
```

**Variantes:**

- **variant:**
  - inline: Subrayado, para texto [DEFAULT]
  - standalone: Sin subrayado inicial, subraya en hover
- **colorScheme:**
  - primary: Azul primario [DEFAULT]
  - accent: Color acento

**Características Especiales:**

- 🔗 Detección automática de links externos
- 🔓 target="\_blank" + rel="noopener noreferrer" automáticos
- 📤 Ícono ExternalLink automático para links externos
- ⌨️ Focus ring visible
- 📏 Underline offset para mejor UX

**Ejemplos de Uso:**

```tsx
<Link href="/about">Acerca de</Link>
<Link href="https://example.com" isExternal>Sitio Externo</Link>
<Link variant="standalone" colorScheme="accent">Ver más</Link>
```

---

### 9. RADIO

**Ubicación:** `packages/ui/src/components/atoms/Radio/`

**Descripción:**
Botón de opción para selección única en grupos.

**Props:**

```typescript
interface RadioProps {
  label?: string; // Texto del label
  size?: "sm" | "md" | "lg";
  colorScheme?: "primary" | "accent";
  // + props de <input type="radio">
}
```

**Variantes:**

- **size:**
  - sm: 16×16px (w-4 h-4), dot 6×6px
  - md: 20×20px (w-5 h-5), dot 8×8px [DEFAULT]
  - lg: 24×24px (w-6 h-6), dot 10×10px
- **colorScheme:**
  - primary: Azul primario [DEFAULT]
  - accent: Color acento

**Características Especiales:**

- ⚫ Punto blanco interior cuando selected
- 🏷️ Label asociado opcional
- 🔵 border-2 con rounded-full
- ♿ Semántica correcta para grupos de radio

**Subcomponente:**

- `RadioDot`: Punto blanco interior, aparece con peer-checked

**Ejemplos de Uso:**

```tsx
<Radio name="plan" value="free" label="Plan Gratuito" />
<Radio name="plan" value="pro" label="Plan Pro" size="lg" />
<Radio name="plan" value="enterprise" label="Empresarial" colorScheme="accent" />
```

---

### 10. SKELETON

**Ubicación:** `packages/ui/src/components/atoms/Skeleton/`

**Descripción:**
Placeholder animado para indicar contenido en carga.

**Props:**

```typescript
interface SkeletonProps {
  width?: string | number; // Ancho (CSS o px)
  height?: string | number; // Alto (CSS o px)
  isLoaded?: boolean; // Si el contenido está cargado
  children?: React.ReactNode; // Contenido real a mostrar cuando loaded
  variant?: "text" | "circle" | "rect";
}
```

**Variantes:**

- **variant:**
  - text: h-4 rounded, para líneas de texto [DEFAULT]
  - circle: rounded-full, para avatares
  - rect: rounded-md, para imágenes/cards

**Características Especiales:**

- 🔄 Animación de pulso (animate-pulse)
- 📐 Dimensiones customizables (string o number)
- 🎭 Renderizado condicional basado en isLoaded
- ♿ aria-busy="true" + aria-live="polite"
- 🔊 "Loading..." para screen readers (sr-only)

**Comportamiento:**

- Si `isLoaded && children`: Renderiza children
- Si `isLoaded && !children`: Retorna null
- Si `!isLoaded`: Muestra skeleton

**Ejemplos de Uso:**

```tsx
<Skeleton width="200px" height="20px" />
<Skeleton variant="circle" width={64} height={64} />
<Skeleton variant="rect" width="100%" height="200px" />
<Skeleton isLoaded={loaded}>{actualContent}</Skeleton>
```

---

### 11. SPINNER

**Ubicación:** `packages/ui/src/components/atoms/Spinner/`

**Descripción:**
Indicador de carga animado (spinning circle).

**Props:**

```typescript
interface SpinnerProps {
  label?: string; // Label accesible para screen readers
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  colorScheme?: "primary" | "accent" | "white";
}
```

**Variantes:**

- **size:**
  - xs: 16×16px (w-4 h-4)
  - sm: 24×24px (w-6 h-6)
  - md: 32×32px (w-8 h-8) [DEFAULT]
  - lg: 48×48px (w-12 h-12)
  - xl: 64×64px (w-16 h-16)
- **colorScheme:**
  - primary: Azul primario [DEFAULT]
  - accent: Color acento
  - white: Blanco (para fondos oscuros)

**Características Especiales:**

- 🔄 Animación rotate con animate-spin
- 🎨 SVG hardcoded optimizado
- ♿ role="status" + aria-label
- 🔊 Label para screen readers (sr-only)
- 📏 viewBox="0 0 24 24" consistente

**SVG Anatomy:**

- Círculo exterior (opacity-25): Border estático
- Path interior (opacity-75): Segmento que rota

**Ejemplos de Uso:**

```tsx
<Spinner />
<Spinner size="lg" colorScheme="accent" />
<Spinner label="Cargando datos..." />
<Spinner size="sm" colorScheme="white" /> // Para fondos oscuros
```

---

### 12. SWITCH

**Ubicación:** `packages/ui/src/components/atoms/Switch/`

**Descripción:**
Toggle switch para opciones on/off, soporta modo controlado y no controlado.

**Props:**

```typescript
interface SwitchProps {
  checked?: boolean; // Estado checked (controlado)
  label?: string; // Texto del label
  labelPosition?: "left" | "right"; // Posición del label
  onChange?: (checked: boolean) => void;
  size?: "sm" | "md" | "lg";
  colorScheme?: "primary" | "accent";
}
```

**Variantes:**

- **size:**
  - sm: 20×36px track, thumb 16×16px
  - md: 24×44px track, thumb 20×20px [DEFAULT]
  - lg: 28×56px track, thumb 24×24px
- **colorScheme:**
  - primary: Azul primario [DEFAULT]
  - accent: Color acento
- **labelPosition:** left/right [DEFAULT: right]

**Características Especiales:**

- 🎛️ Modo controlado y no controlado
- 🏷️ Label posicionable izquierda/derecha
- 🔘 Thumb (botón blanco) con transición suave
- ♿ role="switch" + aria-checked
- 🎨 Colores: neutral-300 (off), primary/accent-500 (on)

**Estados Internos:**

- `uncontrolledChecked` (useState): Para modo no controlado
- `isControlled` (derived): Detecta si está en modo controlado
- useEffect para sync con props

**Modos:**

```tsx
// Controlado
<Switch checked={value} onChange={setValue} />

// No controlado
<Switch defaultChecked={false} />
```

**Ejemplos de Uso:**

```tsx
<Switch label="Notificaciones" />
<Switch checked={enabled} onChange={setEnabled} label="Activar" />
<Switch size="lg" labelPosition="left" label="Dark Mode" />
```

---

### 13. TAG

**Ubicación:** `packages/ui/src/components/atoms/Tag/`

**Descripción:**
Etiqueta categorizable con soporte para íconos y botón de cierre.

**Props:**

```typescript
interface TagProps {
  leftIcon?: ReactElement; // Ícono izquierda
  rightIcon?: ReactElement; // Ícono derecha
  onClose?: () => void; // Callback al remover
  variant?: "solid" | "outline" | "subtle";
  colorScheme?:
    | "primary"
    | "accent"
    | "success"
    | "warning"
    | "error"
    | "info"
    | "neutral";
  size?: "sm" | "md" | "lg";
}
```

**Variantes:**

- **variant:**
  - solid: Fondo de color, texto blanco [DEFAULT]
  - outline: Borde de color, fondo transparente
  - subtle: Fondo claro del color, texto oscuro
- **colorScheme:** 7 opciones (primary, accent, success, warning, error, info, neutral)
- **size:**
  - sm: px-2 py-0.5 text-xs, íconos 12×12px
  - md: px-2.5 py-1 text-sm, íconos 14×14px [DEFAULT]
  - lg: px-3 py-1.5 text-base, íconos 16×16px

**Características Especiales:**

- 🎨 21 combinaciones de estilos (3 variants × 7 colorSchemes)
- ◀️▶️ Íconos izquierda/derecha con auto-sizing
- ❌ Botón de cierre opcional con ícono X
- 🔄 Preserva className de íconos originales
- 📏 gap-1.5 entre elementos

**Subcomponente:**

- `CloseButton`: Botón X con hover opacity, stopPropagation, aria-label

**Ejemplos de Uso:**

```tsx
<Tag>React</Tag>
<Tag colorScheme="success" variant="subtle">Completado</Tag>
<Tag leftIcon={<StarIcon />} onClose={handleRemove}>Favorito</Tag>
<Tag size="lg" rightIcon={<ChevronRight />} colorScheme="accent">Siguiente</Tag>
```

---

## Análisis de Patrones y Consistencia

### Convención de variantes: Intent x Tone (julio 2026)

**Hallazgo:** `Badge` y `Tag` ya separan dos ejes independientes — `variant` (solid/outline/subtle, el _tratamiento visual_) y `colorScheme` (primary/success/warning/error/..., el _significado semántico_) — combinándolos con `compoundVariants` de CVA. `Button` es el único átomo interactivo que **no sigue ese patrón**: mete ambas cosas en un solo enum plano (`primary | secondary | outline | ghost | danger`), lo que genera dos problemas concretos:

1. **Combinaciones imposibles de expresar:** no existe forma de pedir un botón "danger" con tratamiento ghost (ej. "Eliminar prenda" de bajo énfasis) sin agregar una variante nueva a mano por cada combinación.
2. **No mapea 1:1 con el spec de UX:** "Button Hierarchy (Tactile Luxury)" define 3 niveles — Primary (Deploy), Secondary (Choice, ghost+blur), Tertiary (Support, texto) — pero el código tiene 5 variantes que no corresponden claramente a esos 3 niveles. `secondary` (color acento sólido) no aparece en ningún flujo documentado.

**Regla para este componente y los siguientes (`FormField`, `StatTile`, etc. incluidos):**

- **`intent`** — el significado semántico. Para Button: `primary` (Authority Blue) · `neutral` (acciones sin carga emocional, ej. "Cancelar") · `danger` (Deep Error/destructivo). No se incluye `secondary`/accento como intent propio salvo que aparezca un caso de uso real.
- **`tone`** — el tratamiento visual, independiente del color. Para Button: `solid` (New Neumorphism, emboss) · `outline` (borde de precisión 1px, fondo transparente) · `ghost` (Glassmorphism, `backdrop-blur`) · `text` (Tertiary, sin chrome).

Con esto, la jerarquía del spec de UX se expresa como combinaciones concretas: Primary/Deploy = `intent="primary" tone="solid"`; Secondary/Choice = `intent="primary" tone="ghost"`; Tertiary/Support = `tone="text"` (cualquier intent); un "Eliminar" de bajo énfasis = `intent="danger" tone="text"`.

**Estado: implementado (20 de julio de 2026).** `Button.tsx` fue refactorizado a `intent` ("primary" | "neutral" | "danger") x `tone` ("solid" | "outline" | "ghost" | "text"), combinados con `compoundVariants` de CVA — igual que `Badge`/`Tag`. El antiguo `variant="secondary"` (accento sólido) se eliminó por completo: no tenía caso de uso documentado y no había ningún consumidor real en `apps/web`. Los 3 niveles del spec de UX ahora son combinaciones directas: Primary/Deploy = `tone="solid"`, Secondary/Choice = `tone="ghost"` (glassmorphism real, `backdrop-blur-md`), Tertiary/Support = `tone="text"`. `IconButton` ya seguía un patrón equivalente (`variant` x `colorScheme`) y solo recibió el tratamiento de sombra/borde, sin cambio de API. 474 tests, `tsc` y `eslint` en verde tras el cambio. Todo componente nuevo (`FormField`, `StatTile`, `SearchBar`, etc.) debe nacer siguiendo `intent` x `tone` desde el inicio en vez de un enum plano.

### ✅ Patrones Comunes Implementados

**1. Class Variance Authority (CVA)**

- ✅ Todos los componentes usan CVA para variantes
- ✅ defaultVariants definidos en todos
- ✅ compoundVariants para combinaciones complejas (Badge, Tag, IconButton)

**2. Ref Forwarding**

- ✅ Todos los componentes usan `forwardRef`
- ✅ Acceso completo al elemento DOM subyacente

**3. Display Names**

- ✅ Todos usan `createDisplayName("ComponentName", "atom")`
- ✅ Mejora debugging en React DevTools

**4. TypeScript**

- ✅ Props interfaces completas
- ✅ Extends de tipos nativos HTML
- ✅ VariantProps<typeof variants> para inferencia

**5. Accesibilidad**

- ✅ aria-labels en componentes sin texto (IconButton, Spinner)
- ✅ role correctos (switch, separator, status)
- ✅ aria-hidden en elementos decorativos
- ✅ sr-only para screen readers

**6. Utility Class Merge**

- ✅ Todos usan `cn()` para merge de className
- ✅ Permite override desde props

### 📊 Distribución de Variantes

| Tipo de Variante | Componentes    | Opciones Típicas                  |
| ---------------- | -------------- | --------------------------------- |
| **size**         | 11 componentes | sm, md, lg (más xs/xl en algunos) |
| **variant**      | 7 componentes  | solid, outline, subtle/ghost      |
| **colorScheme**  | 6 componentes  | 2-7 opciones de color             |
| **fullWidth**    | 2 componentes  | true/false                        |
| **isRound**      | 1 componente   | true/false (IconButton)           |

### 🎨 Sistema de Colores

**Color Schemes Disponibles:**

1. **primary** - Azul primario (todos los componentes)
2. **accent** - Color acento (Badge, Tag, Checkbox, etc.)
3. **success** - Verde (Badge, Tag, Input)
4. **warning** - Amarillo/Naranja (Badge, Tag)
5. **error** - Rojo (Badge, Tag, Input, IconButton)
6. **info** - Azul claro (Badge, Tag)
7. **neutral** - Gris (Badge, Tag, IconButton)
8. **white** - Blanco (Spinner para fondos oscuros)

### 📏 Sistema de Tamaños

**Convenciones de Altura:**

- **sm:** 32-36px (h-8, h-9)
- **md:** 40-44px (h-10, h-11) [DEFAULT en mayoría]
- **lg:** 48-56px (h-12, h-14)
- **xs:** 16-24px (solo Avatar, Spinner)
- **xl/2xl:** 64-80px (solo Avatar, Spinner)

### 🔗 Dependencias de Íconos

**lucide-react utilizado en:**

- Badge (X icon para remover)
- IconButton (cualquier ícono pasado)
- Link (ExternalLink icon automático)
- Tag (X icon para close button)

**Íconos SVG inline:**

- Button (spinner de carga)
- Checkbox (check icon, indeterminate icon)
- Radio (radio dot)
- Spinner (círculo rotante)

---

## Estado de Testing

**Cobertura de Testing:**

- ✅ Cada componente tiene archivo `.test.tsx`
- ✅ Testing Library + Vitest configurado
- ✅ jsdom como environment de test
- ✅ @testing-library/jest-dom para matchers

**Tipo de Tests:**

- Unit tests por componente
- Tests de props y variantes
- Tests de interacción (clicks, cambios)
- Tests de accesibilidad básica

---

## Estado de Storybook

**Documentación Interactiva:**

- ✅ Cada componente tiene archivo `.stories.tsx`
- ✅ Storybook 9.1.13 configurado
- ✅ Addon de accesibilidad (axe-core)
- ✅ Addon de Vitest para component testing
- ✅ Playwright para browser testing

**Stories Típicas:**

- Default state
- Todas las variantes
- Todos los tamaños
- Estados especiales (loading, error, disabled)
- Con/sin elementos opcionales

---

## Gaps y Oportunidades

## Molecules & Organisms

> Auditoría de julio 2026: mapeo de los 13 átomos actuales contra los flujos de las Épicas 2-6 ([epics.md](../_bmad-output/planning-artifacts/epics.md)). Conclusión: **los 13 átomos alcanzan** — no falta ningún primitivo. Lo que falta es la capa intermedia; hoy cada feature compone sus propios átomos desde cero. Especificación en palabras, sin código todavía — construir antes de continuar con las historias de Épica 2 en adelante.

### Molecules

1. **FormField** — `Input`/`Checkbox`/`Radio`/`Switch` + label + mensaje de error/hint. Estados: default, focused, error, disabled. Usado transversalmente en toda captura de datos (Auth de Épica 1, Onboarding de Épica 2, Settings de Épica 6). Hoy cada formulario repite su propio wrapper de label + error a mano.
2. **AssetCard** — `SquircleBox`(elevated) + imagen (con `Skeleton` mientras carga) + `Tag`(estado Limpio/Sucio) + `Badge`(categoría) + `IconButton`(editar/eliminar). Estados: loading (shimmer), normal, seleccionado, "ghost" (ítem sugerido no poseído: opacidad reducida + borde punteado). Épica 3 (Stories 3.1 y 3.3) y Épica 4.6 (Ghost Items).
3. **StatTile** — número grande (JetBrains Mono) + label (Inter Light) + ícono opcional + indicador de tendencia. Épica 3.4 (Asset Counter & Value Stats).
4. **InlineEditableTag** — `Tag` que activa un `Input` superpuesto al tap. Es el mecanismo concreto detrás de "Zero-Modal Correction" ya descrito en el spec de UX. Épica 2.3 (1-Tap Correction Interface).
5. **SearchBar** — `Input`(leftIcon=Search) + `IconButton`(clear, condicional) + debounce de estado. Épica 3.2 (Filtrado instantáneo).

### Organisms

1. **AssetGrid** — grid virtualizado de `AssetCard`, con grid de `Skeleton` mientras carga y estado vacío. Épica 3.1 (Visual Inventory Grid).
2. **ContextFlowStepper** — wizard multi-paso (clima/evento) sobre `Divider` + `Button` + `Radio`/`Tag` de selección rápida. Ya nombrado en el spec de UX (Sprint 2), nunca construido. Épica 4.1.
3. **LogicScoreIndicator** — `conic-gradient` + tap-to-expand con breakdown de razones (cada una un `Tag`/`Badge`). Ya nombrado en el spec de UX, nunca construido. Épica 4.3-4.4.
4. **RefactorDiffView** — comparador lado a lado de dos `AssetCard` con "Luz de Precisión" resaltando cambios. Ya nombrado en el spec de UX, nunca construido. Épica 4.4.
5. **BottomActionSheet** — contenedor deslizable (spring physics) para acciones primarias/secundarias. Ya nombrado en el spec de UX (Sprint 2) pero se usa en más flujos de los que el roadmap original cubría: Deploy (4.5), swipe actions (Épica 5), overlays de Épica 6.
6. **SwipeDeck** — organismo tipo Tinder sobre `AssetCard`, con gestos de swipe y conversión "I Have It". Épica 5.1-5.2. No estaba nombrado en ningún documento anterior.

Dirección visual de todo lo anterior (New Neumorphism selectivo + Glassmorphism + squircle nativo): ver [ux-design-specification.md § Material Direction Refinement](../_bmad-output/planning-artifacts/ux-design-specification.md#material-direction-refinement-2026-update).

### ⚠️ Mejoras Potenciales

**Consistencia:**

1. **Unificar naming de props:**
   - `isLoading` (Button) vs `isLoaded` (Skeleton)
   - `removable`/`onRemove` (Badge) vs `onClose` (Tag)

2. **Extender colorScheme:**
   - Input solo tiene default/error/success
   - Button solo tiene variant, no colorScheme
   - Considerar unificar sistema

3. **Animation system:**
   - Algunos usan Tailwind transitions
   - Otros tienen animate-pulse/spin
   - Considerar sistema unificado

**Funcionalidades:**

1. **Dark Mode Support:**
   - No hay dark: variants detectados
   - Considerar estrategia de theming

2. **Responsive Variants:**
   - No hay variants responsive (sm:size-lg)
   - Considerar añadir soporte

3. **Compound Components:**
   - Input podría tener Input.Group, Input.Addon
   - Tag podría ser Tag.Group para spacing

4. **Composition Patterns:**
   - Considerar As prop para polimorfismo
   - Considerar render props para customización

---

## Utilidades y Helpers

**Ubicación:** `packages/ui/src/utils/`

### cn() - Class Name Merge

```typescript
// Combina clsx + tailwind-merge
import { cn } from "@capsule/ui/utils";

cn("px-4", "px-2"); // "px-2" (merge inteligente)
cn("text-red-500", someCondition && "text-blue-500");
```

### createDisplayName()

```typescript
// Genera display name consistente
createDisplayName("Button", "atom"); // "Capsule.Atom.Button"
```

---

## Tokens de Design

**Ubicación:** `packages/ui/src/tokens/`

**Tokens Esperados (por explorar):**

- Colores (primary, accent, success, etc.)
- Spacing
- Typography
- Border radius
- Shadows
- Breakpoints

---

## Exports Structure

**Exportación por Nivel:**

```typescript
// Import atoms individuales
import { Button } from "@capsule/ui/atoms/Button";
import { Input } from "@capsule/ui/atoms/Input";

// Import index general
import { Button, Input, Avatar } from "@capsule/ui";

// Import utils
import { cn } from "@capsule/ui/utils";

// Import styles
import "@capsule/ui/styles/globals.css";
```

---

## Recomendaciones de Uso

### ✅ Do's

1. **Usa variantes existentes** antes de customizar con className
2. **Proporciona aria-labels** en componentes sin texto visible
3. **Usa refs** cuando necesites acceso al DOM
4. **Combina componentes** para crear patterns (Input + Label)
5. **Revisa Storybook** para ver todas las variantes disponibles

### ❌ Don'ts

1. **No sobrescribas estilos base** directamente con className (usa variantes)
2. **No uses componentes sin tipo** (siempre import con types)
3. **No ignores warnings de accesibilidad** del addon a11y
4. **No mezcles colorSchemes** inconsistentemente en la misma UI

---

## Conclusión

El design system de Capsule tiene una **base sólida de 13 componentes atómicos** bien diseñados y consistentes. Los patrones implementados (CVA, forwardRef, TypeScript, testing) son excelentes y escalables.

**Estado Actual:** 🟢 Atoms completados y robustos (suficientes, confirmado julio 2026)
**Próximo Paso:** 🟡 Construir las 5 Molecules y 6 Organisms especificados en [Molecules & Organisms](#molecules--organisms) — antes de retomar las historias de Épica 2 en adelante
**Visión:** 🔵 Organismos completos para features end-to-end

El proyecto está listo para escalar al siguiente nivel de Atomic Design.
