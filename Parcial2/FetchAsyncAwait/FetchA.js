document.getElementById("Boton").addEventListener("click", async function(){
    let dato = await hacerPeticion();
    console.log(dato)
    document.getElementById('Imagen').src=dato.message

});
async function hacerPeticion(){
        let respuesta = await fetch("https://dog.ceo/api/breeds/image/random");
        let datajson = await respuesta.json();
        return datajson;
    }