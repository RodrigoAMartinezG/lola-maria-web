# Lola Maria - Pastelería & Comida Argentina

Sitio web para Lola Maria, una pastelería y restaurante de comida argentina tradicional.

## 🇦🇷 Sobre el Proyecto

Lola Maria es un sitio web minimal y moderno para una tienda de comida argentina que vende:
- Empanadas (carne, pollo, jamón y queso, verdura, humita)
- Canelones
- Pollo con papas al horno
- Pastelería fina (medialunas, facturas, tortas)
- Platos principales argentinos

## 🚀 Instalación

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

Abri [http://localhost:3000](http://localhost:3000) en tu navegador.

## 🛠️ Tecnologías

- **Next.js 14** - Framework React con App Router
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Estilos utility-first
- **Framer Motion** - Animaciones
- **Lucide React** - Iconos

## 📁 Estructura del Proyecto

```
lola-maria-web/
├── app/
│   ├── layout.tsx      # Layout principal
│   ├── page.tsx        # Página principal
│   └── globals.css     # Estilos globales
├── components/
│   ├── Navbar.tsx      # Barra de navegación
│   ├── Hero.tsx        # Sección hero
│   ├── About.tsx       # Sección nosotros
│   ├── Specials.tsx    # Especialidades
│   ├── Menu.tsx        # Menú completo
│   ├── Contact.tsx     # Contacto y ubicación
│   └── Footer.tsx      # Pie de página
├── public/
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## 🎨 Diseño

- **Estilo**: Minimal moderno
- **Paleta de colores**: Tonos cálidos tierra (crema, terracota, arena, oliva)
- **Tipografía**: Serif para títulos, Sans-serif para cuerpo
- **Inspiración**: Imágenes de la pastelería real

## 📝 Personalización

Para personalizar el sitio:

1. **Precios**: Editar `components/Menu.tsx`
2. **Horarios**: Editar `components/Contact.tsx`
3. **Dirección**: Editar `components/Contact.tsx`
4. **Redes sociales**: Actualizar los links en `components/Contact.tsx` y `components/Footer.tsx`
5. **Colores**: Modificar `tailwind.config.ts`
6. **Imágenes**: Agregar fotos reales en `public/` y actualizar los componentes

## 📦 Build

```bash
# Build de producción
npm run build

# Iniciar producción
npm start
```

## 📱 Responsive

El sitio es completamente responsive y se adapta a:
- Desktop (1280px+)
- Tablet (768px - 1279px)
- Mobile (< 768px)

## 📄 Licencia

Propiedad de Lola Maria. Todos los derechos reservados.
