# Romi Store EC - Landing Page

Esta es la landing page oficial de **Romi Store EC** para la promoción de productos de MaryRuth's Organics en Ecuador.

## Guía para subir tu código a GitHub (Si te saliste o falló)

GitHub requiere un **Token de Acceso Personal (PAT)** en lugar de tu contraseña normal. Sigue estos pasos:

### 1. Generar Token en GitHub
1. Ve a [GitHub Settings > Developer Settings](https://github.com/settings/tokens).
2. Haz clic en **Personal access tokens** -> **Tokens (classic)**.
3. Clic en **Generate new token (classic)**.
4. Nombre: `romi-store-token`.
5. Selecciona la casilla **repo**.
6. Clic en **Generate token** y **COPIA EL CÓDIGO** (no lo pierdas).

### 2. Comandos en la Terminal de Firebase Studio
Copia y pega uno por uno (reemplaza `TU_USUARIO` con tu nombre de usuario de GitHub):

```bash
git add .
git commit -m "Lanzamiento Romi Store"
git branch -M main
# Si ya pusiste el 'remote' antes, este paso dará error pero no importa, sigue al siguiente:
git remote add origin https://github.com/TU_USUARIO/romi-store.git 
git push -u origin main
```

**Cuando te pida:**
- **Username**: Tu usuario de GitHub.
- **Password**: Pega el **Token** que copiaste (no se verán los caracteres al pegar, es normal).

## Configuración en Firebase Console
Una vez que el comando termine con éxito:
1. Ve a **App Hosting** en la consola de Firebase.
2. Sigue los pasos 1 al 5. El repositorio `romi-store` ya aparecerá en la lista.
3. ¡Listo! Tu página se estará construyendo en `romi-store.com`.
