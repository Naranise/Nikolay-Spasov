// document.addEventListener('DOMContentLoaded', function() {
//     const citasContainer = document.querySelector('.citas-container');
//     const citas = [
//         {
//             texto: "Cuando los sentimientos se volvían insoportables y la mente estaba demasiado embotada para leer, comencé a escribir.",
//             detalle: "Esta cita proviene del capítulo donde el protagonista enfrenta un momento crucial de su vida. Aquí, la escritura se convierte en un escape y un método de autoexploración."
//         },
//         {
//             texto: "¿Te acuerdas del último día que nos vimos?",
//             detalle: "Esta pregunta marca el reencuentro de dos personajes principales después de años de separación, poniendo en escena la nostalgia y los cambios sufridos."
//         },
//         {
//             texto: "El deslumbramiento: Hasta la primavera de mi vida me encontraba en Bulgaria...",
//             detalle: "Una reflexión sobre la juventud y los orígenes del protagonista, destacando cómo el entorno influye en la formación de nuestro carácter."
//         },
//         {
//             texto: "No estoy aquí para siempre. El trabajo en las obras era pesado, cargaba mis pulmones con polvo...",
//             detalle: "Una declaración de la temporaneidad de la existencia y las condiciones a menudo duras de la vida laboral."
//         }
//     ];

//     // Añadir citas al contenedor
//     citas.forEach(cita => {
//         const citaDiv = document.createElement('div');
//         citaDiv.classList.add('cita');
//         citaDiv.textContent = cita.texto;
//         citasContainer.appendChild(citaDiv);
//     });

//     var modal = document.getElementById("citaModal");
//     var citasDivs = document.querySelectorAll('.cita');
//     var span = document.getElementsByClassName("close")[0];

//     // Asignar evento de clic a cada cita
//     citasDivs.forEach((cita, index) => {
//         cita.onclick = function() {
//             modal.style.display = "block";
//             document.getElementById("modalText").innerHTML = `<strong>Cita:</strong> ${citas[index].texto}<br/><strong>Detalle:</strong> ${citas[index].detalle}`;
//         }
//     });

//     // Cerrar el modal al hacer clic en (x)
//     span.onclick = function() {
//         modal.style.display = "none";
//     };

//     // Cerrar el modal al hacer clic fuera de él
//     window.onclick = function(event) {
//         if (event.target == modal) {
//             modal.style.display = "none";
//         }
//     };

//     // Evento para mostrar una cita al azar
//     document.querySelector('.dice-btn').addEventListener('click', () => {
//         const randomIndex = Math.floor(Math.random() * citas.length);
//         alert(`${citas[randomIndex].texto} Detalle: ${citas[randomIndex].detalle}`);
//     });
// });
