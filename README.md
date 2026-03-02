# Romi Store EC - ¡Casi en vivo! 🚀

¡Felicidades! El código ya está en GitHub. Ahora solo falta terminar la configuración en la Consola de Firebase.

## Pasos Finales en la Consola (App Hosting)
1. **ID del Backend:** Deja `romi-store`.
2. **Variables de Entorno:**
   - Haz clic en **"Agregar variable"**.
   - **Clave:** `GOOGLE_GENAI_API_KEY`
   - **Valor:** Pega tu API Key de Google AI Studio (Gemini).
   - *Nota:* Esto es necesario para que las funciones de IA (si las activas) funcionen correctamente.
3. **Desplegar:** Haz clic en "Finalizar". Firebase tardará unos 3-5 minutos en compilar tu tienda.

## Cómo actualizar tu tienda en el futuro
Si quieres cambiar precios o productos:
1. Edita el archivo `src/app/page.tsx` en este editor.
2. Guarda los cambios.
3. Ejecuta estos tres comandos en la terminal:
   ```bash
   git add .
   git commit -m "Actualización de productos"
   git push
   ```
4. ¡Firebase detectará el cambio y actualizará la página automáticamente!

## Soporte
- **Distribuidor:** Romi Store EC
- **Marca:** MaryRuth's Organics Ecuador
- **Plataforma:** Next.js + Firebase + ShadCN UI
