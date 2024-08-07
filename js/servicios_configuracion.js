export const ObtenerDatosDeConfiguracion = async () => {
    const url = "/js/configuraciones.json"

    try {

        const response = await fetch(url);
        if (response.status == "200") {
        const data = await response.json();

            console.log(data);

        }else{
            console.log("Error al consultar la API"+ response.status)
        }
        

        

    } catch (error) {

        
        console.log("Error en la red "+ error);

    }

};