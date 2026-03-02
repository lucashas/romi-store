# Romi Store EC - Lanzamiento Oficial

Esta es la landing page optimizada para TikTok Ads de **Romi Store EC**.

## Solución al error de GitHub (Paso a Paso)

Si te sale "Invalid username or token", ejecuta esto en la terminal:

### 1. Limpiar y Re-conectar
Copia y pega uno por uno:
```bash
git remote remove origin
git remote add origin https://github.com/lucashas/romi-store.git
git push -u origin main
```

### 2. Cuando te pida los datos:
- **Username**: `lucashas`
- **Password**: Pega el **Personal Access Token (PAT)** que generaste en GitHub. 
  *(Recuerda: Al pegar el token NO se verán letras ni asteriscos, solo pégalo y presiona Enter).*

### ¿Cómo generar un nuevo Token si el anterior no sirve?
1. Ve a [GitHub Tokens Settings](https://github.com/settings/tokens).
2. Clic en **Generate new token (classic)**.
3. Nombre: `romi-store-key`.
4. Selecciona la casilla **repo**.
5. Clic en **Generate token** al final de la página.
6. **COPIA EL CÓDIGO** y úsalo como tu password en la terminal.

## Configuración Final en Firebase
Una vez que el comando `git push` diga "Done":
1. Ve a la consola de Firebase > **App Hosting**.
2. Sigue los 5 pasos. Selecciona el repositorio `romi-store`.
3. Al terminar, tu página estará en vivo.
