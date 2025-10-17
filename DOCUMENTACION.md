# Documentación - Juan Pinta Fotografía Website

## 📋 Descripción General

Sitio web profesional para **Juan Diego Bolaños** (Juan Pinta Fotografía - Studio Pinta), fotógrafo especializado en eventos especiales ubicado en Chachagüí, Nariño, Colombia.

## 🏗️ Arquitectura del Proyecto

### Tecnologías Utilizadas
- **Framework**: Astro 5.14.6
- **Estilos**: Tailwind CSS 4.1.14
- **Iconos**: Lucide Icons
- **Fuentes**: Google Fonts (Inter + Playfair Display)
- **Lenguaje**: HTML5, CSS3, JavaScript ES6

### Estructura de Archivos
```
juan-pinta-website/
├── src/
│   ├── pages/
│   │   └── index.astro          # Página principal
│   ├── styles/
│   │   └── global.css           # Estilos globales (Tailwind)
│   └── data/
│       └── info - pagina/
│           └── informacion sobre juandiego.md
├── public/
│   ├── images/                  # Recursos visuales
│   │   ├── fomato horizontal/   # Imágenes horizontales del portafolio
│   │   ├── fomato vertical/     # Imágenes verticales del portafolio
│   │   ├── fondo presentacion/  # Imagen de fondo del hero
│   │   ├── logo/               # Logos de redes sociales
│   │   ├── logo de marca/      # Logos de la marca
│   │   └── perfil/             # Fotos de perfil de Juan Diego
│   └── favicon.svg
├── package.json
├── astro.config.mjs
└── DOCUMENTACION.md            # Este archivo
```

## 🎨 Secciones de la Página

### 1. Header/Navegación
- **Ubicación**: Fijo en la parte superior
- **Elementos**: Logo, menú de navegación, menú móvil
- **Funcionalidad**: Navegación suave entre secciones

### 2. Hero Section (#inicio)
- **Imagen de fondo**: `/images/fondo presentacion/fondo presentacion 1.jpg`
- **Elementos**: 
  - Foto de perfil circular
  - Título principal "Juan Pinta Fotografía"
  - Descripción del servicio
  - Botones de acción (CTA)
  - Enlaces a redes sociales
- **Efectos**: Parallax en scroll

### 3. Sobre Mí (#sobre-mi)
- **Imagen principal**: `/images/perfil/perfil formato vertical.png`
- **Contenido**:
  - Historia personal y profesional
  - Formación académica (Diplomado Megafoto, Mercadeo)
  - Experiencia profesional
  - Filosofía de trabajo
- **Diseño**: Layout de dos columnas (imagen + contenido)

### 4. Servicios (#servicios)
- **Servicios ofrecidos**:
  - XV Años (servicio destacado)
  - Matrimonios
  - Bautizos
  - Primeras Comuniones
  - Fiestas Infantiles
  - Sesiones Personalizadas
- **Diseño**: Grid responsivo con tarjetas coloridas
- **CTA**: Sección de llamada a la acción al final

### 5. Portafolio (#portafolio)
- **Filtros**: Todos, Formato Horizontal, Formato Vertical
- **Imágenes**: 
  - Horizontales: `/images/fomato horizontal/`
  - Verticales: `/images/fomato vertical/`
- **Funcionalidad**: Filtrado dinámico con JavaScript
- **Efectos**: Hover con zoom y overlay

### 6. Contacto (#contacto)
- **Información de contacto**:
  - Teléfonos: 317 705 3277 (Reservas), 321 879 2531 (Contacto)
  - Emails: diegitobolaods@gmail.com, juanbolaods2050@gmail.com
  - Ubicación: Chachagüí, Nariño, Colombia
- **Redes sociales**: Instagram, Facebook, TikTok
- **Formulario**: Formulario de contacto completo
- **Diseño**: Layout de dos columnas

### 7. Footer
- **Elementos**: Logo, enlaces rápidos, información de contacto
- **Copyright**: © 2024 Juan Pinta Fotografía - Studio Pinta

## 🎯 Funcionalidades JavaScript

### Navegación
- **Menú móvil**: Toggle responsive
- **Scroll suave**: Navegación entre secciones
- **Header fijo**: Permanece visible al hacer scroll

### Portafolio
- **Filtros dinámicos**: Mostrar/ocultar imágenes por categoría
- **Animaciones**: Transiciones suaves al filtrar
- **Efectos hover**: Zoom y overlay en imágenes

### Efectos Visuales
- **Parallax**: Efecto en la imagen de fondo del hero
- **Animaciones de scroll**: Elementos aparecen al entrar en viewport
- **Transiciones**: Efectos suaves en botones y enlaces

## 🎨 Paleta de Colores y Diseño

### Colores Principales
- **Primario**: Gris 900 (#111827)
- **Secundario**: Blanco (#FFFFFF)
- **Acentos**: Gradientes coloridos para servicios
- **Texto**: Gris 600-900 según contexto

### Tipografía
- **Títulos**: Playfair Display (serif)
- **Cuerpo**: Inter (sans-serif)
- **Pesos**: 300, 400, 500, 600, 700

### Espaciado
- **Secciones**: py-20 (padding vertical)
- **Contenedores**: max-w-6xl mx-auto
- **Elementos**: Espaciado consistente con Tailwind

## 📱 Responsividad

### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Adaptaciones
- **Navegación**: Menú hamburguesa en móvil
- **Grid**: Columnas adaptables según pantalla
- **Tipografía**: Tamaños escalables
- **Imágenes**: Responsive y optimizadas

## 🔧 Cómo Modificar Contenido

### Información Personal
**Archivo**: `src/data/info - pagina/informacion sobre juandiego.md`
- Actualizar datos de contacto
- Modificar servicios ofrecidos
- Cambiar información biográfica

### Imágenes
**Carpetas en public/images/**:
- `perfil/`: Fotos de Juan Diego
- `fomato horizontal/`: Imágenes horizontales del portafolio
- `fomato vertical/`: Imágenes verticales del portafolio
- `fondo presentacion/`: Imagen de fondo del hero
- `logo de marca/`: Logos de la marca
- `logo/`: Iconos de redes sociales

### Servicios
**Ubicación**: Sección "SERVICIOS" en `index.astro`
- Agregar nuevos servicios duplicando estructura de tarjeta
- Modificar colores cambiando clases de gradiente
- Actualizar iconos usando Lucide Icons

### Portafolio
**Para agregar imágenes**:
1. Subir imágenes a carpetas correspondientes
2. Agregar elementos HTML en la galería
3. Asignar clase `horizontal` o `vertical` para filtros

### Contacto
**Información de contacto**: Actualizar en múltiples ubicaciones
- Hero section (redes sociales)
- Sección de contacto
- Footer

## 🚀 Comandos de Desarrollo

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Vista previa de producción
npm run preview
```

## 📈 SEO y Optimización

### Meta Tags
- Título optimizado
- Descripción meta
- Open Graph para redes sociales
- Twitter Cards
- Keywords relevantes

### Performance
- Imágenes optimizadas
- CSS minificado con Tailwind
- JavaScript eficiente
- Carga asíncrona de recursos

### Accesibilidad
- Alt text en imágenes
- Estructura semántica HTML5
- Contraste de colores adecuado
- Navegación por teclado

## 🔄 Futuras Ampliaciones

### Funcionalidades Sugeridas
1. **Blog/Noticias**: Sección para compartir trabajos recientes
2. **Galería ampliada**: Más categorías de servicios
3. **Testimonios**: Sección de reseñas de clientes
4. **Reservas online**: Sistema de citas integrado
5. **Multiidioma**: Soporte para inglés

### Integraciones Posibles
- **WhatsApp Business**: Chat directo
- **Google Analytics**: Seguimiento de visitas
- **Google Maps**: Ubicación del estudio
- **Formularios**: Integración con servicios de email

## 📞 Información de Contacto del Desarrollador

Para modificaciones técnicas o soporte, contactar al desarrollador que implementó esta solución.

---

**Última actualización**: Diciembre 2024
**Versión**: 1.0.0
**Estado**: Producción Ready