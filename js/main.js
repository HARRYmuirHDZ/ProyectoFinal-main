import { MostrarHTML } from "/js/Global.js"
import { ObtenerDatosDeConfiguracion, ObtenerDatosApiRick } from "/js/servicios_configuracion.js"


//componentes
document.addEventListener("DOMContentLoaded", ev => {
    MostrarHTML();
    //ObtenerDatosDeConfiguracion ();
    ObtenerDatosApiRick();

});

