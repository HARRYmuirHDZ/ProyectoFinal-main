import { MostrarHTML} from "/js/crearHTML.js"

//componentes
document.addEventListener("DOMContentLoaded", ev => {
    MostrarHTML()
    MostarDatosConfiguraciones()
})



function MostarDatosConfiguraciones() {
    //truco  !fetch
    let url ;
    fetch(url)
    
        .then(response => response.json())
    
        .then(data => console.log(data));

}