window.onload=function()
{
    document.getElementById("btnMenu").addEventListener("click",function()
    {
        console.log("click en el boton, funcion de javascript realizada con exito");

        document.getElementsByClassName("sidebar",)[0].classList.toggle("escondido");
    })
}