# Romi Store EC - Landing Page

Esta es la landing page oficial de **Romi Store EC** para la promoción de productos de MaryRuth's Organics en Ecuador.

## Despliegue en Firebase App Hosting

Para conectar este código con tu dominio `romi-store.com`, sigue estos pasos:

### 1. Subir a GitHub
Si aún no has subido el código, usa estos comandos en la **Terminal** (búscala en la parte inferior de esta pantalla):
```bash
git init
git add .
git commit -m "Initial deployment"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/romi-store.git
git push -u origin main
```
*(Recuerda cambiar TU_USUARIO por tu nombre de usuario de GitHub)*

### 2. Configurar en Firebase Console
1. Ve a **App Hosting** en la consola de Firebase.
2. Crea un nuevo **Backend**.
3. Conecta tu cuenta de GitHub y selecciona el repositorio `romi-store`.
4. Elige la región `us-central1` o `us-east4`.
5. Vincula la App Web de Firebase.
6. Una vez desplegado, añade tu dominio personalizado `romi-store.com` en la pestaña de configuración del dominio.

## Características
- Optimizado para tráfico de TikTok Ads.
- Formulario de pedido con pago contra entrega.
- Registro automático en Firebase Firestore.
- Diseño 100% móvil.
