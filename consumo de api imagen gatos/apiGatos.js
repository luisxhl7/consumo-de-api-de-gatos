const cambiarImagen = () => {
    const API_RES = 'https://api.thecatapi.com/v1/images/search';
    
    fetch(`${API_RES}`)
        .then(response => response.json())
        .then(datosDeLaApi => {
            const imagen = document.querySelector('#imagenGato'); // se requiere capturar los id de los elementos que seran modificados
            const titulo = document.querySelector('#titulo');     // con los datos de la API
            const height = document.querySelector('#height');
            const width = document.querySelector('#width');
            const urlImg = document.querySelector('#urlImg');
    
            imagen.src = datosDeLaApi[0].url       //se define que dato de la api sera capturado en cada uno de los elementos
            titulo.value = datosDeLaApi[0].id      //ya que en este caso hay un objeto dentro de un arreglo se toma primero el arreglo y luego el objeto
            titulo.name = datosDeLaApi[0].id       //tambien se puede asignar el dato de la API como el name o el id
            urlImg.value = datosDeLaApi[0].url
            height.value = datosDeLaApi[0].height
            width.value = datosDeLaApi[0].width
            console.log(datosDeLaApi)
        }
    )
}













// para poder modificar el contenido de una api con funcion es de la siguiente manera
document.getElementById('boton').onclick = function () {
    cambiarImagen();
} 
