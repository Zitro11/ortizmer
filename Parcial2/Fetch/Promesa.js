document.getElementById('Boton').addEventListener('click',function(){HacerPeticion();});
    function HacerPeticion()
    {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then( respuesta => respuesta.json()) 
        .then( datos => document.getElementById('Imagen').src = datos.message)
    } 