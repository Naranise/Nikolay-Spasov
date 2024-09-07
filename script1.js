document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que el formulario recargue la página

    // Recoge los valores del formulario
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    // Enviar el correo usando EmailJS
    emailjs.send('service_bwodqdf', 'template_bmfw7kh', {
        from_name: nombre,
        reply_to: email,
        message: mensaje
    })
    .then(function(response) {
        alert('Mensaje enviado con éxito!');
    }, function(error) {
        alert('Error al enviar el mensaje, por favor intenta de nuevo.');
    });
});
