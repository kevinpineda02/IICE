# 🏛️ IICES - Iglesia Internacional de Cristo El Salvador

Una página web moderna y responsiva para la **Iglesia Internacional de Cristo El Salvador** (IICES), construida con **Next.js 15**, **TypeScript** y **Tailwind CSS**.

![IICES Logo](./public/Logo.png)

## 🌟 Descripción

Este proyecto presenta el sitio web oficial de IICES, una comunidad de fe comprometida con el amor, la esperanza y el servicio a Dios y al prójimo. La página web incluye información sobre servicios, ministerios, estudios bíblicos, galería de fotos y ubicación de la iglesia.

## ✨ Características

- 📱 **Diseño Responsivo**: Optimizado para todos los dispositivos
- ⚡ **Rendimiento Optimizado**: Construido con Next.js 15 para máxima velocidad
- 🎨 **Interfaz Moderna**: Diseño elegante con Tailwind CSS y shadcn/ui
- 🔄 **Animaciones Suaves**: Transiciones y efectos visuales atractivos
- 📍 **Integración con Google Maps**: Ubicación interactiva de la iglesia
- 📧 **Formulario de Contacto**: Comunicación directa con la congregación
- 🔗 **Enlaces a Redes Sociales**: Facebook e Instagram
- 🌐 **SEO Optimizado**: Metadatos para mejor posicionamiento web

## 🏗️ Tecnologías Utilizadas

- **Framework**: Next.js 15.2.4
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **Componentes UI**: shadcn/ui con Radix UI
- **Iconos**: Lucide React
- **Fuentes**: DM Sans (Google Fonts)
- **Gestor de Paquetes**: pnpm
- **Deploy**: Vercel (recomendado)

## 📦 Dependencias Principales

```json
{
  "next": "15.2.4",
  "react": "19.0.0",
  "typescript": "^5.8.4",
  "tailwindcss": "^3.4.17",
  "lucide-react": "^0.454.0",
  "@radix-ui/react-*": "Componentes UI varios"
}
```

## 🚀 Instalación y Configuración

### Prerrequisitos

- Node.js 18+ 
- pnpm (recomendado) o npm

### Pasos de Instalación

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/iices-church.git
   cd iices-church
   ```

2. **Instala las dependencias**
   ```bash
   pnpm install
   # o
   npm install
   ```

3. **Ejecuta el servidor de desarrollo**
   ```bash
   pnpm dev
   # o
   npm run dev
   ```

4. **Abre tu navegador**
   
   Visita [http://localhost:3000](http://localhost:3000) para ver la aplicación.

## 📋 Scripts Disponibles

- `pnpm dev` - Inicia el servidor de desarrollo
- `pnpm build` - Construye la aplicación para producción
- `pnpm start` - Inicia el servidor de producción
- `pnpm lint` - Ejecuta el linter de código

## 🏛️ Secciones de la Página

### 🏠 Inicio (Hero)
Página de bienvenida con el mensaje principal de la iglesia y call-to-action.

### ⛪ Servicios
- **Domingo**: 10:30 AM - 12:00 PM (Servicio General)
- **Miércoles**: 6:00 PM - 7:00 PM (Servicio de Oración)

### 👥 Ministerios
- Ministerio GR (Grupos de Restauración)
- Ministerio de AE (Acción Estudiantil)
- Ministerio Nohemys (Mujeres)
- Ministerio de Medios
- Ministerio de Alabanza
- Ministerio de Familia
- Ministerio de Solteros
- Ministerio de Niños

### 📖 Estudios Bíblicos
Información sobre los estudios bíblicos semanales para el crecimiento espiritual.

### 🖼️ Galería
Galería fotográfica de actividades y eventos de la iglesia.

### 📍 Ubicación
Mapa interactivo con la ubicación de la iglesia en San Salvador.

## 🎨 Personalización

### Colores y Tema
Los colores principales se pueden modificar en `tailwind.config.js` y las variables CSS en `app/globals.css`.

### Imágenes
- Logo de la iglesia: `/public/Logo.png`
- Imágenes de fondo: `/public/Fondo.jpg`, `/public/IICES.jpg`, etc.
- Fotos de ministerios: `/public/[nombre-ministerio].jpg`

### Contenido
El contenido principal se encuentra en `app/page.tsx` y puede ser editado directamente.

## 📱 Redes Sociales

- **Facebook**: [IICES.SV](https://www.facebook.com/IICES.SV)
- **Instagram**: [@iices.sv](https://www.instagram.com/iices.sv)

## 🚀 Despliegue

### Vercel (Recomendado)

1. Conecta tu repositorio de GitHub con Vercel
2. Configura las variables de entorno si es necesario
3. Despliega automáticamente con cada push a la rama principal

### Otras Plataformas

El proyecto es compatible con cualquier plataforma que soporte Next.js:
- Netlify
- Railway
- Heroku
- AWS Amplify

## 📞 Contacto

**Iglesia Internacional de Cristo El Salvador (IICES)**
- **Dirección**: 79 Avenida Norte, San Salvador, El Salvador
- **Servicios**: Domingos 10:30 AM | Miércoles 6:00 PM

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Haz fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-caracteristica`)
3. Commit tus cambios (`git commit -m 'Agregar nueva característica'`)
4. Push a la rama (`git push origin feature/nueva-caracteristica`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

## 🙏 Agradecimientos

- Comunidad de IICES por su apoyo y feedback
- [shadcn/ui](https://ui.shadcn.com/) por los componentes UI
- [Lucide](https://lucide.dev/) por los iconos
- [Tailwind CSS](https://tailwindcss.com/) por el sistema de estilos

---

**Hecho con ❤️ para la comunidad de IICES**

> *"Una comunidad de fe comprometida con el amor, la esperanza y el servicio a Dios y al prójimo."*