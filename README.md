##Proyectos



## Ejercicios de AJAX y Validación

### 🔹 – **Carga asíncrona de archivo de texto**
Se proporciona una página web que tiene un `<div>` llamado **info**.  
Se debe implementar el código necesario para acceder de manera asíncrona a una página de texto llamada **“Ejercicio 8.1.txt”** y mostrar su contenido dentro del div **info**.  
Tanto el archivo **formulario** como la solución deben estar en el directorio **htdocs** de XAMPP.

---

### 🔹 **Visualización de contenidos y estados de petición**
Se proporciona una página web:  
- Al cargar la página, la caja de texto debe mostrar por defecto la **URL de la misma página**.  
- Al pulsar el botón **“Mostrar Contenidos”**, se debe descargar mediante peticiones AJAX el contenido correspondiente a la URL introducida por el usuario y mostrarlo en la zona **“Contenidos del archivo”**.  
- En la zona **“Estados de la petición”** se debe mostrar en todo momento el estado en que se encuentra la petición (No inicializada, cargando, completada, etc.).  
- Mostrar el contenido de todas las **cabeceras HTTP** de la respuesta del servidor en la zona correspondiente.  
- Mostrar el **código y texto de estado** de la respuesta en la zona “Código de estado”.  


---

### 🔹 **Ticker de noticias con AJAX periódico**
La página HTML proporcionada incluye una zona llamada **ticker** en la que se deben mostrar noticias generadas por el servidor.  
Se debe añadir el código JavaScript necesario para:  
- Realizar peticiones periódicas al servidor (por ejemplo, cada 5 segundos) mediante AJAX y mostrar el contenido en la zona de noticias.  
- Mostrar también la **hora de recepción** de la respuesta.  
- Al pulsar el botón **“Detener”**, se deben detener las peticiones periódicas; al volver a pulsarlo, se reanudan.  
- Implementar la lógica de los botones **“Anterior”** y **“Siguiente”** para navegar entre contenidos recibidos.  
- Resaltar visualmente la zona **ticker** cada vez que se recibe una respuesta.  
- Usar **continuamente el mismo objeto XMLHttpRequest** para todas las peticiones.  
Tanto el archivo **Ejercicio 8.3.php** como la solución deben estar en el servidor **XAMPP**.

---

### 🔹  – **Validación de disponibilidad de usuario**
Ejemplo de validación compleja: comprobar si un nombre de usuario elegido está libre o ya lo utiliza otro.  
Como requiere una base de datos grande, no se puede realizar en el navegador del cliente.  
Se debe:  
1. Crear un script que compruebe con AJAX y el servidor si el nombre elegido está libre.  
2. El script del servidor se llama **“Ejercicio 8.4.php”** y el parámetro con el nombre se llama **login**.  
3. La respuesta del servidor será **“sí”** o **“no”**, según disponibilidad.  
4. Mostrar un mensaje al usuario indicando el resultado.  
Tanto el archivo **Ejercicio 8.4.php** como la solución deben estar en el servidor **XAMPP**.

---

### 🔹 – **Validación con alternativas y formatos XML/JSON**
Normalmente, al validar la disponibilidad de un nombre de usuario, se muestran alternativas si el nombre elegido no está disponible.  

**Parte a – Versión XML**  
- Modificar el ejercicio anterior para mostrar una lista de valores alternativos devueltos por el servidor.  
- Hacer una versión con el método tradicional (versión 1) y otra con **fetch()** (versión 2).  
- El script del servidor se llama **“Ejercicio 8.5-a.php”** y el parámetro es **login**.  
- La respuesta del servidor será un documento XML con la estructura:  
  - Si está libre: `<disponible>si</disponible>`  
  - Si está ocupado: `<disponible>no</disponible>` y una lista `<alternativas>` con varios `<login>`.  
- Los nombres alternativos deben mostrarse como lista (`<ul>`).  

**Parte b – Versión JSON**  
- Realizar el mismo ejercicio pero ahora la información se recibe en formato **JSON**.  
- Hacer también dos versiones: tradicional (versión 1) y con **fetch()** (versión 2).  
- El script del servidor se llama **“Ejercicio 8.5-b.php”** y el parámetro es **login**.  

---

## ✅ Resumen con nombres de cada ejercicio
| Nº | Nombre del ejercicio |
|----|----------------------|
| 8.1 | Carga asíncrona de archivo de texto |
| 8.2 | Visualización de contenidos y estados de petición |
| 8.3 | Ticker de noticias con AJAX periódico |
| 8.4 | Validación de disponibilidad de usuario |
| 8.5 | Validación con alternativas y formatos XML/JSON |

