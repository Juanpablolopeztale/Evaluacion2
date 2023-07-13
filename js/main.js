fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))

async function obtenerDatosDeAPI() {
    try {
      const respuesta = await fetch('https://jsonplaceholder.typicode.com/todos');
      const datos = await respuesta.json();
      return datos;
    } catch (error) {
      console.log('Error:', error);
    }
  }
  
  async function mostrarDatosEnIndex() {
    const datos = await obtenerDatosDeAPI();
    const datosDiv = document.getElementById('datos-api');
  
    if (datos) {
      for (let i = 0; i < datos.length; i++) {
        const item = datos[i];
        const itemComponent = document.createElement('div');
        itemComponent.classList.add('item');
        itemComponent.innerHTML = `
          <p>Usuario ID: ${item.userId}</p>
          <p>ID: ${item.id}</p>
          <p>Título: ${item.title}</p>
          <p>Completado: ${item.completed}</p>
        `;
        datosDiv.appendChild(itemComponent);
      }
    }
  }
  
  mostrarDatosEnIndex();
  