# Romi Store EC - ¡Casi en vivo! 🚀

¡Felicidades! Ya subiste el código a GitHub. Ahora solo falta el último paso en la Consola de Firebase.

## Pasos Finales en la Consola (App Hosting)

### 1. ID del Backend
- Deja `romi-store` tal como está.

### 2. Configurar la IA (Variables de Entorno)
Para que las funciones de IA funcionen, necesitas tu clave de Gemini:
1. **Consigue tu clave:** Ve a [Google AI Studio](https://aistudio.google.com/app/apikey) y haz clic en **"Create API key"**.
2. **Copia la clave:** Es un código largo que empieza con `AIza...`.
3. **Regresa a Firebase:**
   - En **Clave**, pon: `MY_GEMINI_KEY`
   - En **Valor**, pega tu clave `AIza...`.
4. Haz clic en **"Finalizar"**.

## Cómo actualizar tu tienda en el futuro
Si quieres cambiar precios o fotos:
1. Edita el archivo `src/app/page.tsx` en este editor.
2. Guarda los cambios.
3. Ejecuta estos comandos en la terminal:
   ```bash
   git add .
   git commit -m "Cambios en mi tienda"
   git push
   ```
4. ¡Firebase detectará el cambio y actualizará la página automáticamente!

---
**Soporte:** Romi Store EC | MaryRuth's Organics Ecuador
