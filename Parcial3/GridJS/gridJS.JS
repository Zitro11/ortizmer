async function TraerDatos(){
    let headersList = { "Accept": "*/*"}

    let response = await fetch("http://localhost/ortizmer/Parcial3/GridJS/gridJS.php", { 
      method: "GET",
      headers: headersList
    });

    let datos = await response.json();

    new gridjs.Grid({
            columns: ["id_empleado", "Nombre", "Apellido", "Telefono", "Edad"],
            data: datos 
            }).render(document.getElementById("wrapper"));
}
TraerDatos();