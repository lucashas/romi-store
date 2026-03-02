# 🚀 Guía Final de Lanzamiento - Romi Store EC

Para que Firebase detecte tu tienda, sigue estos pasos exactos en tu terminal:

### 1. Encuentra la carpeta de tu proyecto
Si `cd romi-store` no funciona, usa este comando para saber dónde estás:
```bash
ls -F
```
Busca una carpeta que tenga el archivo `package.json`. Cuando la veas, entra en ella:
```bash
cd NOMBRE_DE_LA_CARPETA
```

### 2. Genera el archivo de bloqueo (Crítico)
Una vez dentro de la carpeta, ejecuta:
```bash
npm install
```
Esto creará el archivo `package-lock.json` que Firebase necesita para no dar error.

### 3. Sube todo a GitHub
```bash
git add .
git commit -m "Solución definitiva: Standalone + Lockfile"
git push
```

### 4. Verifica la Clave en Firebase
En la consola de Firebase, pestaña "Configuración", la clave debe llamarse `MY_GEMINI_KEY`.

---
**Soporte:** Romi Store EC | MaryRuth's Organics Ecuador
"Salud líquida, resultados reales."
