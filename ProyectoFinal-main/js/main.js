import { MostrarHTML} from "/js/crearHTML.js"

//componentes
document.addEventListener("DOMContentLoaded", ev => {
    MostrarHTML()
    MostarDatosConfiguraciones()
})



function MostarDatosConfiguraciones() {
    //truco  !fetch
    let url ="/js/Configuraciones.json"
    fetch(url)
    
        .then(response => response.json())
    
        .then(data => console.log(data));

}