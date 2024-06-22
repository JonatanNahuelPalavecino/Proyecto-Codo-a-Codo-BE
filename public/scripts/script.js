

//======================================================================

document.addEventListener('DOMContentLoaded', function() {

  // Aca estan algunos elementos del formulario, me quedo afuera uno, que es lo la opcion!

  const contacto_form = document.querySelector(".contacto-formulario-form");
  const form_nombre = document.querySelector("#nombre");
  const form_telefono = document.querySelector("#telefono");
  const form_email = document.querySelector("#email");
  const form_mensaje = document.querySelector("#mensaje");


  // enviando el formulario!
  contacto_form.addEventListener("submit", async (event) => {
    event.preventDefault();

    // LO PUSE ACA LA CONSTANTE FORM_OPCION , PORQUER COM ISSO TOMA LA OPCION QUE FUE SELECIONADA ANTES DE ENVIAR EL FORMULARIO!juntamente com checked, para 
    // saber qual opcion fue selecionada.

    const form_opcion = document.querySelector('input[name="preferencia"]:checked');


    // aca podemos obtener los valores del formulario, con .trim()sacamos los espacios em blanco 
    const data = {
      nombre: form_nombre.value.trim(),
      telefono: form_telefono.value.trim(),
      email: form_email.value.trim(),
      mensaje: form_mensaje.value.trim(),
      opcion_de_contacto: form_opcion ? form_opcion.value.trim() : ''
    };


    // enviamos los datos con fetch al localhost
    try {
      const response = await fetch("http://localhost:3000/api/contacto", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        alert(result.message);
        console.log(result);

        // AQUI ESTA PARA RECARREGAR LA PAGINA DESPUES DE ENVIAR EL FORMULARIO
        window.location.reload(); 
        
      } else {
        alert("Error al enviar el formulario");
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      alert("Error al enviar el formulario");
    }
  });
});



