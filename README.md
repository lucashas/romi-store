# Romi Store EC - ¡Lanzamiento Exitoso! 🚀

¡Felicidades! Tu landing page optimizada para TikTok Ads ya está conectada con GitHub y lista para ser desplegada en Firebase App Hosting.

## Próximos Pasos en Firebase Console
1. **Paso 2 (Conectar Repo):** Busca y selecciona `lucashas/romi-store` en la lista.
2. **Configuración de Despliegue:** Deja los valores por defecto y haz clic en "Finish".
3. **Espera el Build:** Firebase tardará unos minutos en procesar el código de Next.js.
4. **Dominio:** Una vez termine, Firebase te dará una URL temporal (ej. `romi-store-ec.web.app`). Puedes conectar tu dominio `romi-store.com` en la pestaña "Settings" de App Hosting.

## Cómo actualizar tu tienda en el futuro
Si quieres cambiar precios o productos:
1. Edita el archivo `src/app/page.tsx` en este editor.
2. Guarda los cambios.
3. Ejecuta estos dos comandos en la terminal:
   ```bash
   git add .
   git commit -m "Actualización de precios"
   git push
   ```
4. ¡Firebase detectará el cambio y actualizará la página automáticamente!

## Soporte
- **Distribuidor:** Romi Store EC
- **Marca:** MaryRuth's Organics Ecuador
- **Plataforma:** Next.js + Firebase + ShadCN UI
