import { MostrarHTML } from "/js/Global.js"
import { ObtenerDatosDeConfiguracion, ObtenerDatosApiRick } from "/js/servicios_configuracion.js"
import { MostrarCard } from "/js/Card.js"

//componentes
document.addEventListener("DOMContentLoaded", ev => {
    MostrarHTML();
    ObtenerDatosDeConfiguracion ();
    ObtenerDatosApiRick();
    MostrarCard();

})

