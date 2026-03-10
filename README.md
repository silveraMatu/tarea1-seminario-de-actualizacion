### Guía de Ejecución - Sitio Simple

Este proyecto contiene un sitio web básico que permite cambiar colores de fondo y mostrar alertas con texto. Se puede ejecutar de tres maneras distintas:

#### 1. Ejecución Local
Para ver el sitio sin necesidad de configurar un servidor backend, utiliza los archivos en la carpeta js-puro.

*Doble clic*: Simplemente busca el archivo index.html en tu explorador de archivos y haz doble clic para abrirlo en el navegador.

*Live Server*: Si utilizas Visual Studio Code, puedes instalar la extensión "Live Server", abrir index.html y presionar el botón "Go Live" para ver los cambios en tiempo real.

#### 2. Servidor con Express (Node.js)
Esta opción utiliza Node.js para servir los archivos de forma estática.

Asegúrate de tener Node.js instalado.

Desde una terminal, navega a la carpeta sitio-simple/servidor-js.

Instala la dependencia de Express:

``` bash
npm install
```
Inicia el servidor ejecutando:

``` bash
node server.js
```
Accede a la aplicación en tu navegador a través de http://localhost:3000.

#### 3. Servidor con Flask (Python)
Esta opción utiliza Python para servir el sitio mediante el framework Flask.

*Requisito*: Debes tener Python instalado en tu equipo.

Navega a la carpeta sitio-simple/servidor-py.

Crear un ambiente virtual (venv) para mantener las dependencias limpias:

``` bash
python -m venv venv
```
Activar el ambiente virtual:

*En Windows*: 

```bash
venv\Scripts\activate
```

*En Linux/macOS*: 

``` bash
source venv/bin/activate
```
Instalar Flask:

``` bash
pip install flask
```
Iniciar el servidor:

``` bash
python server.py
```
El sitio estará disponible en http://localhost:5000.