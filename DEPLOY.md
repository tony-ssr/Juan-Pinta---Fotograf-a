# 🚀 Guía de Despliegue - Juan Pinta Fotografía

## 📋 Configuración Completada

✅ **Astro configurado** para GitHub Pages  
✅ **GitHub Actions** configurado para despliegue automático  
✅ **Rutas optimizadas** para el repositorio  

## 🔧 Pasos para Desplegar

### 1. **Subir el código a GitHub**
```bash
# Inicializar git (si no está inicializado)
git init

# Agregar el repositorio remoto
git remote add origin https://github.com/tony-ssr/Juan-Pinta---Fotograf-a.git

# Agregar todos los archivos
git add .

# Hacer commit
git commit -m "🎉 Sitio web Juan Pinta Fotografía completo"

# Subir a GitHub
git push -u origin main
```

### 2. **Configurar GitHub Pages**
1. Ve a tu repositorio: `https://github.com/tony-ssr/Juan-Pinta---Fotograf-a`
2. Click en **Settings** (Configuración)
3. Scroll hacia abajo hasta **Pages**
4. En **Source**, selecciona **GitHub Actions**
5. ¡Listo! El despliegue será automático

### 3. **URL Final**
Tu sitio estará disponible en:
```
https://tony-ssr.github.io/Juan-Pinta---Fotograf-a/
```

## 🔄 Actualizaciones Futuras

Cada vez que hagas `git push` a la rama `main`, el sitio se actualizará automáticamente.

```bash
# Para futuras actualizaciones
git add .
git commit -m "Descripción de los cambios"
git push
```

## 📊 Ventajas de GitHub Pages

✅ **Gratuito** - Sin costos de hosting  
✅ **Automático** - Despliegue con cada push  
✅ **Rápido** - CDN global de GitHub  
✅ **Seguro** - HTTPS automático  
✅ **Confiable** - 99.9% uptime  

## 🛠️ Alternativas de Despliegue

Si prefieres otras opciones:

### **Netlify** (Recomendado)
- Más fácil de configurar
- Mejor para principiantes
- Formularios gratuitos

### **Vercel**
- Excelente para proyectos React/Next.js
- Deploy automático desde GitHub

### **Surge.sh**
- Súper simple para sitios estáticos
- Un solo comando: `surge`

## 📞 Soporte

Si tienes problemas con el despliegue, revisa:
1. Que el repositorio sea público
2. Que GitHub Pages esté habilitado
3. Que el workflow de Actions se ejecute correctamente

¡Tu sitio web profesional estará online en minutos! 🎉