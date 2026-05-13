HEAD
<h1>Afinador de Cuerdas Automático</h1>

.....

<h2>Prerequisitos</h2>

```
Node.js >= v20.20.0
npm
Python 3.12.X
FastAPI
```

<h3>Configuración del Backend (FastAPI)</h3>

Crear un entorno virtual con Python 3:

```
$ sudo apt install python3-venv
```

Crear el entorno virtual:

```
$ python3 -m venv FastAPI
```

Activar el entorno virtual:

```
$ source FastAPI/bin/activate
```

Instalación de fastapi dentro del entorno virtual:

```
(FastAPI) $ pip install "fastapi[standard]"
```

Abre una nueva terminal y navega al directorio del afinador_app/FastAPI:

```
$ cd FastAPI
```

Ejecuta el servidor de FastAPI:

```
$ fastapi dev main.py
```

Prueba tu API, Una vez que el servidor esté corriendo, puedes ver los resultados
en http://127.0.0.1:8000. Verás el JSON.

<h3>Configuración del Frontend (Nuxt)</h3>

Abre una nueva terminal y navega al directorio del afinador_app:

```
$ cd afinador_app
```

Instala las dependencias de Node.js:

```
$ npm install
```

Crea tu archivo de configuración local:

```
$ cp .env_example .env
```

Inicia el servidor de desarrollo de Nuxt:

```
$ npm run dev
```

La aplicación Nuxt estará disponible en http://localhost:3000/

Notas de desarrollo

Órdenes del backend para navegar en la app:

```
-1 Nivel se espera: 1,0
-2 Nivel se espera: 4,6,8,0
-3 Nivel se espera: 41,42,43,0
```

El json que se va a recibir del API será:

{
  "data":{
    "order":1,
    "frequency":210.0,
    "note":"A"
  }
}

-Las notas que se van a recibir son:
    -Nota A (LA)
    -Nota D (RE)
    -Nota F = F# (Fa#)
    -Nota B (Si)
=======
# Afinador-mobile
Aplicación desarrollada con nuxt.js, para dispositivos móviles usando android studios

Transformar el sistema del afinador en una aplicación móvil nativa para Android utilizando Capacitor

**Instala el núcleo y la CLI:**

```
npm install @capacitor/core @capacitor/cli @capacitor/android
```

**Inicializa Capacitor**

```
npx cap init
```

- **App name:** Nombre de la aplicación.
- **App ID:** Identificador único (ej: com.tuempresa.app).
- **Web asset directory:** Aquí es crucial poner la carpeta de salida del npm run generate (usualmente dist o .output/public).

**Generamos la carpeta de exportacion para que Capacitor sepa qué copiar**

```
npm run generate
```

**Agregar la plataforma Android**

```
npx cap add android
```

Esto crea una carpeta llamada /android en la raíz del proyecto.
Esta carpeta contiene el código nativo.

**Configurar el .gitignore**

Asegúrate de que tu .gitignore permita subir la carpeta /android, pero que ignore los archivos temporales de Gradle. Normalmente, el comando cap add ya crea un .gitignore dentro de la carpeta /android, así que no deberías tener problemas.

**Subir al repositorio**

```
git add .
git commit -m "Agregados Capacitor y la carpeta Android"
git push origin main
```

##Ahora desde android studios

**Instalar dependencias y sincronizar:**

```
npm install
npx cap sync
```

(Este comando es clave: actualiza los plugins y copia la última versión de la carpeta web a la carpeta de Android)


**Abrir el proyecto:**

Se puede abrir Android Studio y seleccionar la carpeta /android del proyecto, o simplemente ejecutar:

```
npx cap open android
```

**Generar el APK o ejecutar en emulador:**

- En Android Studio, debe ir a Build > Build Bundle(s) / APK(s) > Build APK(s).
- O simplemente darle al botón de Run para probarlo en su celular o emulador.

**Importante:**

Cada vez que se haga un cambio en el diseño/lógica de Nuxt: Debes hacer npm run generate y luego npx cap copy antes de subir al repo.

En caso de que se instale un plugin nuevo: Deben correr npm install [nombre-del-plugin] y luego npx cap sync.

Directorio de salida: Si notas que al abrir la app en Android sale una pantalla blanca, verifica que en el archivo capacitor.config.json el campo webDir coincida exactamente con la carpeta que genera Nuxt (ej: "webDir": "dist").
