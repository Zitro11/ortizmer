$(document).ready(function(){

    const opcionesAjax = {
        "async": true,
        "crossDomain": true,
        "url": "./grid.php",
        "method": "GET",
        "headers": {"Accept": "*/*"}
    };
    
    $.ajax(opcionesAjax).done(function (respuesta){
        let tabla = JSON.parse(respuesta);
        $("#jsGrid").jsGrid({
            width: "100%",
            height: "400px",
    
            inserting: true,
            editing: true,
            sorting: true,
            paging: true,
        
            data: tabla,
        
            fields: [
                { name: "id_empleado", type: "text", valueField: "Id", width: 150, validate: "required" },
                { name: "Nombre", type: "text", width: 150 },
                { name: "Apellido", type: "text", width: 150 },
                { name: "Telefono", type: "number", width:150},
                { name: "Edad", type: "number", width:150}
            ]
        });
    })     
});