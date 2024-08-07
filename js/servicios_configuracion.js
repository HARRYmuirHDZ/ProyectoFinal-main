export const ObtenerDatosDeConfiguracion = async () => {
    const url = "/js/configuraciones.json"

    try {

        const response = await fetch(url);
        if (response.status == "200") {
        const data = await response.json();

            console.table(data);
            return data

        }else{
            console.log("Error al consultar la API"+ response.status)
        }
        

        

    } catch (error) {


        console.log("Error en la red "+ error);

    }

};


export const ObtenerDatosApiRick= async () => {
    const url = "https://rickandmortyapi.com/api/character"

    try {

        const response = await fetch(url);
        if (response.status == "200") {
        const data = await response.json();

            console.warn(data.results);
            return data.results

        }else{
            console.log("Error al consultar la API"+ response.status)
        }
        

        

    } catch (error) {


        console.log("Error en la red "+ error);

    }

};



