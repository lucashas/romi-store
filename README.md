# Romi Store EC - Lanzamiento Oficial

Esta es la landing page optimizada para TikTok Ads de **Romi Store EC**.

## Solución al error "Repository not found" (Paso a Paso)

Si te sale "Repository not found" o "Authentication failed", ejecuta estos comandos exactos en la terminal:

### 1. Limpiar y Re-conectar (Copia y pega uno por uno)
```bash
git remote remove origin
git remote add origin https://github.com/lucashas/romi-store.git
git push -u origin main
```

### 2. Cuando te pida los datos:
- **Username**: `lucashas`
- **Password**: Pega el **Personal Access Token (PAT)** que generaste. 
  *(Recuerda: Al pegar el token NO se verán letras ni asteriscos, solo pégalo y presiona Enter).*

### IMPORTANTE: Verifica esto en GitHub
1. Entra a [https://github.com/lucashas/romi-store](https://github.com/lucashas/romi-store). Si te sale un error 404, es que **NO has creado el repositorio**. Créalo con el nombre `romi-store`.
2. Al crear tu Token (PAT), asegúrate de que la casilla **repo** esté marcada con un check azul. Sin eso, GitHub rechazará la conexión.

## Configuración Final en Firebase
Una vez que el comando `git push` diga "Done" o "100%":
1. Ve a la consola de Firebase > **App Hosting**.
2. Sigue los pasos. Selecciona el repositorio `lucashas/romi-store`.
3. ¡Tu página estará en vivo en minutos!
