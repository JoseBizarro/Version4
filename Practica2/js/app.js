if ("serviceWorker" in navigator) {
    navigator.serviceWorker
        .register("../sw.js")
        .then(function (registration) {
            console.log("Service Worker registrado con éxito:", registration);
        })
        .catch(function (error) {
            console.log("Error al registrar el Service Worker:", error);
        });
  }
  // Importa la biblioteca PouchDB
const PouchDB = require('pouchdb');

// Crea una nueva instancia de la base de datos
const db = new PouchDB('personajes');
  
  const personajeSelect = document.getElementById("personajeSelect");
        const versionPersonajeSelect = document.getElementById("versionPersonaje");
        const nombrePersonaje = document.getElementById("nombrePersonaje");
        const imagenPersonaje = document.getElementById("imagenPersonaje");
        const imagenVersion = document.getElementById("imagenVersion");
        const versionDescription = document.querySelector(".version-description");
const versionDescriptionText = document.getElementById("versionDescriptionText");

        const personajes = {
            Aquaman: ["Tierra0", "FlashPoint", "Tierra2"],
            Batman: ["Tierra1", "Tierra2", "Tierra10"],
            Cyborg: ["Tierra0", "Tierra42", "FlashPoint"],
            Flash: ["FlashPoint", "Tierra2", "Tierra50"],
            Linterna: ["Versión1", "Versión2", "NuevaTierra"],
            Superman: ["Tierra1", "FlashPoint", "Tierra29"],
            Wonderwoman: ["Tierra0", "FlashPoint", "Tierra22"],
        };

        // Función para actualizar el segundo select con las versiones disponibles
        function actualizarVersiones(selectedCharacter) {
            versionPersonajeSelect.innerHTML = ""; // Borra opciones anteriores
        
            // Agrega una opción por defecto en el segundo select que no se puede seleccionar
            const defaultOption = document.createElement("option");
            defaultOption.text = "Selecciona una versión";
            defaultOption.value = "default";
            defaultOption.disabled = true;
            defaultOption.selected = true;
            versionPersonajeSelect.appendChild(defaultOption);
        
            if (selectedCharacter !== "default") {
                const versions = personajes[selectedCharacter];
                versions.forEach((version) => {
                    const option = document.createElement("option");
                    option.value = version;
                    option.textContent = version;
                    versionPersonajeSelect.appendChild(option);
                });
            }
        }
        

        personajeSelect.addEventListener("change", function () {
            const selectedCharacter = personajeSelect.value;

    // Restablece el segundo select a la opción por defecto
    versionPersonajeSelect.innerHTML = ""; // Borra las opciones anteriores

    // Agrega una opción por defecto en el segundo select que no se puede seleccionar
    const defaultOption = document.createElement("option");
    defaultOption.text = "Selecciona una versión";
    defaultOption.value = "default";
    defaultOption.disabled = true;
    defaultOption.selected = true;
    versionPersonajeSelect.appendChild(defaultOption);

            switch (selectedCharacter) {
                case "default":
                    nombrePersonaje.textContent = "";
                    imagenPersonaje.src = "img/default.png";
                    imagenVersion.src = "img/default_version.png";
                    break;
                case "Aquaman":
                    nombrePersonaje.textContent = "Aquaman";
                    imagenPersonaje.src = "img/Aquaman.png";
                    imagenVersion.src = "img/default_version.png";
                    break;
                case "Batman":
                    nombrePersonaje.textContent = "Batman";
                    imagenPersonaje.src = "img/Batman.png";
                    imagenVersion.src = "img/default_version.png";
                    break;
                case "Cyborg":
                    nombrePersonaje.textContent = "Cyborg";
                    imagenPersonaje.src = "img/Cyborg.png";
                    imagenVersion.src = "img/default_version.png";
                    break;
                case "Flash":
                    nombrePersonaje.textContent = "Flash";
                    imagenPersonaje.src = "img/Flash.png";
                    imagenVersion.src = "img/default_version.png";
                    break;
                case "Linterna":
                    nombrePersonaje.textContent = "Linterna Verde";
                    imagenPersonaje.src = "img/Linterna.png";
                    imagenVersion.src = "img/default_version.png";
                    break;
                case "Superman":
                    nombrePersonaje.textContent = "Superman";
                    imagenPersonaje.src = "img/Superman.png";
                    imagenVersion.src = "img/default_version.png";
                    break;
                case "Wonderwoman":
                    nombrePersonaje.textContent = "Wonder Woman";
                    imagenPersonaje.src = "img/WW.png";
                    imagenVersion.src = "img/default_version.png";
                    break;
                default:
                    nombrePersonaje.textContent = "";
                    imagenPersonaje.src = "img/default.png";
                    imagenVersion.src = "img/default_version.png";
            }

            // Actualiza las versiones disponibles
            actualizarVersiones(selectedCharacter);
        });

        versionPersonajeSelect.addEventListener("change", function () {
            const selectedVersion = versionPersonajeSelect.value;
            const selectedCharacter = personajeSelect.value;

            switch (selectedCharacter) {
                case "Aquaman":
                    if (selectedVersion === "default") {
                        imagenVersion.src = "img/default_version.png";
                    } else {
                        imagenVersion.src = `img/Aquaman_${selectedVersion}.png`;
                    }
                    break;
                case "Batman":
                    if (selectedVersion === "default") {
                        imagenVersion.src = "img/default_version.png";
                    } else {
                        imagenVersion.src = `img/Batman_${selectedVersion}.png`;
                    }
                    break;
                case "Cyborg":
                    if (selectedVersion === "default") {
                        imagenVersion.src = "img/default_version.png";
                    } else {
                        imagenVersion.src = `img/Cyborg_${selectedVersion}.png`;
                    }
                    break;
                case "Flash":
                    if (selectedVersion === "default") {
                        imagenVersion.src = "img/default_version.png";
                    } else {
                        imagenVersion.src = `img/Flash_${selectedVersion}.png`;
                    }
                    break;
                case "Linterna":
                    if (selectedVersion === "default") {
                        imagenVersion.src = "img/default_version.png";
                    } else {
                        imagenVersion.src = `img/Linterna_${selectedVersion}.png`;
                    }
                    break;
                case "Superman":
                    if (selectedVersion === "default") {
                        imagenVersion.src = "img/default_version.png";
                    } else {
                        imagenVersion.src = `img/Superman_${selectedVersion}.png`;
                    }
                    break;
                case "Wonderwoman":
                    if (selectedVersion === "default") {
                        imagenVersion.src = "img/default_version.png";
                    } else {
                        imagenVersion.src = `img/Wonderwoman_${selectedVersion}.png`;
                    }
                    break;
                default:
                    imagenVersion.src = "img/default_version.png";
            }
        });
        // Agrega el evento hover para mostrar la descripción de la versión
imagenVersion.addEventListener("mouseover", function () {
    const selectedVersion = versionPersonajeSelect.value;
    const selectedCharacter = personajeSelect.value;

    if (selectedVersion !== "default" && selectedCharacter !== "default") {
        // Muestra la descripción de la versión correspondiente
        const description = obtenerDescripcionVersion(selectedCharacter, selectedVersion);
        versionDescriptionText.textContent = description;
        versionDescription.style.display = "block";
    }
});

// Agrega el evento para ocultar la descripción de la versión al quitar el mouse de la imagen
imagenVersion.addEventListener("mouseout", function () {
    versionDescription.style.display = "none";
});

// Agrega el evento click a la imagen de la versión
imagenVersion.addEventListener("click", function () {
    const selectedVersion = versionPersonajeSelect.value;
    const selectedCharacter = personajeSelect.value;

    if (selectedVersion !== "default" && selectedCharacter !== "default") {
        // Obtén la descripción de la versión
        const description = obtenerDescripcionVersion(selectedCharacter, selectedVersion);

        // Redirige a la página de descripción de la versión
        window.location.href = "version.html";

        // Almacena la información de la versión en localStorage para mostrar en la nueva página
        localStorage.setItem("selectedVersion", selectedVersion);
        localStorage.setItem("selectedCharacter", selectedCharacter);
        localStorage.setItem("versionDescription", description);
    }
});

// ... (código existente)

// Función para obtener la descripción de la versión (puedes personalizar esto según tus necesidades)
function obtenerDescripcionVersion(character, version) {
    // Define las descripciones para cada personaje y versión
    const descripciones = {
    Aquaman: {
        Tierra0: "Arthur Curry, conocido como Aquaman, es el hijo de Atlanna y Thomas Curry. Desarrolla poderes acuáticos, se convierte en rey de la Atlántida y lidera un equipo llamado The Others. Se enamora de Mera, a pesar de que ella inicialmente intentó matarlo.",
        FlashPoint: "En Flashpoint, Aquaman es un líder atlante beligerante. Se enamora de Wonder Woman, pero su boda se cancela debido a la muerte de la madre de Diana, lo que desencadena una guerra entre Atlantis y las Amazonas. Aquaman hunde parte de Europa, hace una alianza con Ocean Master y se revela un complot. La intervención de héroes, como Flash, evita una catástrofe global.",
        Tierra2: "Merella, la reina de la Atlántida, fue capturada por el Ejército Mindial de Mando de Arkham. Batman la liberó y la convirtió en Aquawoman. Antes de regresar al océano, le dio una caracola mágica a Batman para pedir su ayuda en el futuro.",
    },
    Batman: {
        Tierra1: "Batman: el Devastador, un antiguo héroe de la Tierra -1, se convierte en un villano monstruoso para detener a Superman y más tarde se une a Barbatos para conquistar otra Tierra donde Superman es adorado, con el fin de revelar los peligros de la esperanza falsa.",
        Tierra2: "En la Tierra 2 de DC Comics, Thomas Wayne sobrevive y se convierte en Batman en lugar de su hijo Bruce. Lucha contra villanos y protege la Tierra 2, a menudo colaborando con la Cazadora, la nieta de Tornado Rojo.",
        Tierra10: "Bruce Wayne nació en Ciudad Gótica y presenció el asesinato de sus padres a manos de un ladrón. Esta tragedia lo impulsó a convertirse en Batman para luchar contra el crimen en la ciudad.",
    },
    Cyborg: {
        Tierra0: "Victor, un estudiante destacado en fútbol americano, recibía ofertas de becas universitarias, pero su padre, ocupado en los Laboratorios S.T.A.R., no apoyaba su interés en el deporte, lo que lo hacía sentirse deprimido.",
        Tierra42: "En un mundo de héroes en miniatura, Superman y Batman son asesinados por Superdoomsday. Dick Grayson se convierte en Batman y descubre que los héroes son robots controlados por Empty Hand para espiar a la House of Heroes y servir a sus planes.",
        FlashPoint: "Cyborg, un héroe cibernético, enfrenta a enemigos y se une a otros superhéroes para detener una guerra entre Atlántida y Themyscira. La historia termina con incertidumbre sobre el destino de Cyborg.",
    },
    Flash: {
        FlashPoint: "Barry Allen se despierta en un mundo alterno sin poderes, con su madre viva y sin héroes como Superman. Trata de arreglar las cosas, descubre que Reverse-Flash es el culpable, luchan y Barry viaja al pasado para corregir su error, restaurando su mundo original y entregando una carta a Bruce Wayne.",
        Tierra2: "Jason Garrick, estudiante universitario, obtiene súper velocidad y reflejos sobrehumanos tras inhalar vapores de agua dura en un accidente. Se convierte en Flash de Tierra-2 en la Era Dorada, y luego Barry Allen, Flash de otro universo, aparece en la Edad de Plata.",
        Tierra50: "Su muerte a manos de Lex Luthor fue lo que finalmente llevó a sus compañeros al límite.",
    },
    Superman: {
        Tierra1: "Superman, Kal-El, un bebé de Krypton, llega a la Tierra debido a la destrucción de su planeta natal. Fue adoptado por los Kent, creció con superpoderes y se convirtió en el héroe Superman en Metrópolis.",
        FlashPoint: "Barry Allen cambia la realidad y crea un mundo donde Superman, llamado Sujeto Uno, es un super soldado del Proyecto Superman. Kal-El se entrena con Sujeto Cero y se une a Lois. Cero intenta matar a Lois, pero terminan atrapados en la Zona Fantasma. Kal usa sus poderes para dibujar a Lois en su celda.",
        Tierra29: "En esta historia, Bizarro y la Liga de la Injusticia enfrentan amenazas de extraños visitantes y Metallo. Bizarro se convierte en Doomzarro, infectando su mundo, pero finalmente, con gran fuerza de voluntad, se deshace de la amenaza. Más tarde, es secuestrado junto a otros Superhombres, pero son liberados por la Justicia Encarnada.",
    },
    Wonderwoman: {
        Tierra0: "En la línea de tiempo original, Wonder Woman se unió a otros superhéroes para detener a Reverse Flash y evitar una explosión en el Museo Flash. En una línea de tiempo alternativa, Diana se convirtió en la reina de las Amazonas, desencadenando una guerra con los atlantes. Mató a Aquaman y activó un dispositivo destructivo, pero Flash restauró la línea temporal, borrando estos eventos.",
        FlashPoint: "Diana, la hija de Zeus y la reina de las amazonas, es una hábil guerrera. Ayuda a Steve Trevor y se convierte en embajadora en Londres, donde tiene un romance con él. Luego, se une a la Justice League. Protege a Zola, desafía a dioses y se convierte en la diosa de la guerra. Enfrenta amenazas y resuelve conflictos, incluyendo la Guerra de la Trinidad y un enfrentamiento con First Born. Finalmente, lidera a la Justice League en la lucha contra Mobius y descubre secretos familiares, como la existencia de un hermano llamado Jason.",
        Tierra22: "Diana, creada en Paradise Island, se convirtió en Wonder Woman, luchó en la Liga de la Justicia y se volvió violenta, siendo exiliada. Después, se casó con Superman, tuvieron hijos, y lucharon en eventos como Convergencia. Mantuvo una relación con Batman.",
    },
};


    // Devuelve la descripción correspondiente
    return descripciones[character][version] || "Descripción no disponible";
}