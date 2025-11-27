// Cuando la página se carga, ejecutamos esta función
window.onload = function() {
    // a) Mostrar por defecto la URL de la propia página en la caja de texto
    document.getElementById("recurso").value = window.location.href;

    // Asociamos el evento "click" del botón a la función que hará la petición AJAX
    document.getElementById("enviar").onclick = cargarContenido;
};

// Función principal que realiza la petición AJAX
function cargarContenido() {
    // Obtenemos la URL escrita por el usuario en la caja de texto
    var url = document.getElementById("recurso").value;

    // Creamos el objeto XMLHttpRequest (motor AJAX)
    var xhr = new XMLHttpRequest();

    // c) Mostrar el estado de la petición en todo momento
    xhr.onreadystatechange = function() {
        // Estados posibles de readyState:
      
        var estados = [
            "0: No inicializada",
            "1: Conexión establecida",
            "2: Petición recibida",
            "3: Procesando petición",
            "4: Petición finalizada"
        ];
        document.getElementById("estados").innerText += estados[xhr.readyState] + "\n";

        // Cuando la petición está completada (readyState == 4)
        if (xhr.readyState === 4) {
            // b) Mostrar el contenido recibido en la zona "contenidos"
            document.getElementById("contenidos").innerText = xhr.responseText;

            // d) Mostrar todas las cabeceras HTTP de la respuesta
            document.getElementById("cabeceras").innerText = xhr.getAllResponseHeaders();

            // e) Mostrar el código y texto de estado de la respuesta
            document.getElementById("codigo").innerText = xhr.status + " " + xhr.statusText;
        }
    };

    // Configuramos la petición: método GET, URL indicada, asíncrona
    xhr.open("GET", url, true);


    xhr.send(null);
}
