//Modularizar Exportar e importar
///0-

//Main -Secciones 1 Noticias 
const  CrearTarjetaNoticias =()=> {
  let html = `

   <section class=" banner  col-lg-4 ">
        <div class="card h-100">
          <img src="img/1-Noticia.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Lorem ipsum dolor.</h5>
            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <a href="#" class="btn btn-primary">Más información <i class="fas fa-angle-double-right"></i></a>
          </div>
        </div>
      </section>

  `

  return html
}

const CrearParrafo=()=> {
  let texto = "Genesis"

  let html = `<p>${texto} </p>`

  return html;
}


function CrearTabla() {
  let html = `
<!-- Tabla-->
<div class="spaced-div">
  <section class="banner banner-tarjetas-dos ">
    <div class="container">

      <!-- b4-form-inline
  b4-form-group -->
      <h2>Tabla Datos</h2>
      <table class="table table-striped table-inverse table-responsive container col-6 text-white" id="Tabla">


  <thead class="thead-inverse">
          <tr>
            <th>Id</th>
            <th>Nombre</th>
          
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>asas</td>
            <td>asas</td>
          
          </tr>
          
        </tbody>




      </table>
  </section>
`

  return html;
}


const CrearBanner1 =()=> {
  let html = `
    <div class="spaced-div">
      <div class="container">
        <h2>Lorem ipsum dolor.</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut qui laudantium id quam magni accusantium,
          veritatis, ipsam labore, reprehenderit dolore repudiandae nemo sint deserunt! Suscipit facilis qui
          inventore
          consequatur fugit.</p>
        <a href="#" class="boton">Más información <i class="fas fa-chevron-right"></i></a>
      </div>
    </div>



  `

  return html
}




