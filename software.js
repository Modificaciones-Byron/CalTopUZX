const logosPath = {
    "AS PC": "logos/AS.png",
    // Agrega más equipos y rutas de logos aquí
};

const positions = {
    logo: [
        [605, 915], [605, 1160], [605, 1400], [605, 1640],
        [605, 1880], [605, 2120], [605, 2360], [605, 2600],
    ],
    equipo: [
        [1060, 1099], [1060, 1335], [1060, 1578], [1060, 1815],
        [1060, 2059], [1060, 2299], [1060, 2539], [1060, 2782],
    ],
    kills: [
        [2115, 1110], [2115, 1347], [2115, 1585], [2115, 1826],
        [2115, 2065], [2115, 2305], [2115, 2547], [2115, 2786],
    ],
    top: [
        [2571, 1110], [2571, 1347], [2571, 1585], [2571, 1826],
        [2571, 2065], [2571, 2305], [2571, 2547], [2571, 2786],
    ],
    total: [
        [3020, 1110], [3020, 1347], [3020, 1585], [3020, 1826],
        [3020, 2065], [3020, 2305], [3020, 2547], [3020, 2786],
    ]
};

class Equipo {
    constructor(nombre) {
        this.nombre = nombre;
        this.kills = Array(4).fill(0);
        this.top = Array(4).fill(0);
        this.totalKills = 0;
        this.totalTop = 0;
        this.totalPuntaje = 0;
    }

    calcularTotales() {
        this.totalKills = this.kills.reduce((a, b) => a + b, 0);
        this.totalTop = this.top.reduce((a, b) => a + this.calcularPuntosTop(b), 0);
        this.totalPuntaje = this.totalKills + this.totalTop;
    }

    calcularPuntosTop(posicion) {
        const puntos = {
            1: 35, 2: 30, 3: 25, 4: 20,
            5: 10, 6: 7, 7: 5, 8: 3,
            9: 2, 10: 1
        };
        return puntos[posicion] || 0;
    }
}

let equipos = [];
let numEquipos = 0;
const abecedario = "ABCDEFGHIJKLMNO"; // Letras del abecedario
function iniciar() {
    numEquipos = parseInt(document.getElementById("numEquipos").value);
    if (numEquipos >= 1 && numEquipos <= 15) {
        const form = document.getElementById("equiposForm");
        form.innerHTML = "";  // Limpiar entradas anteriores
        for (let i = 0; i < numEquipos; i++) {
            const equipoDiv = document.createElement("div");
            equipoDiv.className = "equipo";

            // Crear etiqueta con la letra correspondiente
            const letraEquipo = abecedario[i]; // Obtener letra del abecedario
            const nombreLabel = document.createElement("label");
            nombreLabel.textContent = `Equipo ${i + 1} - ${letraEquipo}:`;
            equipoDiv.appendChild(nombreLabel);

            const nombreInput = document.createElement("input");
            nombreInput.placeholder = `Nombre del equipo ${letraEquipo}`;
            equipoDiv.appendChild(nombreInput);

            for (let j = 0; j < 4; j++) {
                const killsInput = document.createElement("input");
                killsInput.placeholder = `Sala ${j + 1} Kills:`;
                killsInput.type = "number";
                killsInput.min = "0";
                equipoDiv.appendChild(killsInput);

                const topInput = document.createElement("input");
                topInput.placeholder = `Sala ${j + 1} Top (1-10):`;
                topInput.type = "number";
                topInput.min = "1";
                topInput.max = "15";
                equipoDiv.appendChild(topInput);
            }
            form.appendChild(equipoDiv);
        }
        document.getElementById("resultadosButton").disabled = false;
    } else {
        alert("El número de equipos debe estar entre 1 y 15.");
    }
}

function generarResultados() {
    equipos.length = 0;  // Reiniciar el array de equipos
    const inputs = document.querySelectorAll(".equipo");
    inputs.forEach(input => {
        // Cambia esta línea para obtener el valor del nombre correctamente
        const nombre = input.querySelector("input[placeholder^='Nombre del equipo']").value;
        
        const equipo = new Equipo(nombre);
        for (let j = 0; j < 4; j++) {
            // Cambiar el orden de acceso para kills y top
            equipo.kills[j] = parseInt(input.children[2 * j + 2].value) || 0; // Antes era [2 * j + 1]
            equipo.top[j] = parseInt(input.children[2 * j + 1].value) || 0;   // Antes era [2 * j + 2]
        }
        equipo.calcularTotales();
        equipos.push(equipo);
    });

    equipos.sort((a, b) => b.totalPuntaje - a.totalPuntaje);
    equipos.splice(8);  // Limitar a los 8 mejores equipos

    // Generar resultados en archivo de texto
    const resultsText = equipos.map(e => `${e.nombre},${e.totalKills},${e.totalTop},${e.totalPuntaje}`).join("\n");

    // Aquí guardamos el archivo en la memoria (internamente)
    localStorage.setItem('resultados', resultsText);

    // Desbloquear el botón para generar la imagen
    document.getElementById("imagenButton").disabled = false;
}



function crearImagen() {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.src = "Plantilla/Tabla.png";  // Ruta a la imagen de la plantilla

    // Cargar la fuente personalizada "impact.ttf" antes de dibujar
    const font = new FontFace('Impact', 'url(Plantilla/impact.ttf)');
    
    font.load().then(function(loadedFont) {
        // Agregar la fuente al documento
        document.fonts.add(loadedFont);

        img.onload = function () {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);

            let logosCargados = 0;

            equipos.forEach((equipo, index) => {
                const logo = new Image();
                logo.src = logosPath[equipo.nombre] || "logos/default.png"; // logo por defecto si no se encuentra

                logo.onload = function () {
                    ctx.drawImage(logo, ...positions.logo[index], 260, 260);  // Dibujar logo

                    // Cambiar color para el primer equipo
                    ctx.fillStyle = (index === 0) ? "yellow" : "white";  // Nombre en amarillo para el primer equipo

                    // Establecer la fuente cargada y el tamaño correctos para los nombres de equipos
                    ctx.font = "95px Impact";

                    // Dibujar nombres de equipos (alineación izquierda)
                    ctx.textAlign = "left";
                    ctx.fillText(equipo.nombre, ...positions.equipo[index]);

                    // Cambiar color de kills, top y total para el primer equipo
                    ctx.fillStyle = (index === 0) ? "black" : "white";  // Kills, top y total en negro para el primer equipo

                    // Establecer la fuente y el tamaño correctos para los números (kills, tops, y total)
                    ctx.font = "125px Impact";  // Tamaño de fuente para kills, top y total
                    ctx.textAlign = "center";   // Centramos el texto horizontalmente

                    // Dibujar kills centrados
                    ctx.fillText(equipo.totalKills, positions.kills[index][0], positions.kills[index][1]);

                    // Dibujar top centrados
                    ctx.fillText(equipo.totalTop, positions.top[index][0], positions.top[index][1]);

                    // Dibujar total puntaje centrado
                    ctx.fillText(equipo.totalPuntaje, positions.total[index][0], positions.total[index][1]);

                    logosCargados++;
                    if (logosCargados === equipos.length) {
                        setTimeout(() => {
                            const imgURL = canvas.toDataURL("image/png");
                            const link = document.createElement("a");
                            link.href = imgURL;
                            link.download = "Tabla_Resultados.png";
                            link.click();
                        }, 1000);  // Asegurarse de que todos los elementos se hayan dibujado
                    }
                };

                logo.onerror = function () {
                    ctx.fillStyle = (index === 0) ? "yellow" : "white";  // Nombre en amarillo para el primer equipo

                    // Dibujar nombres de equipos
                    ctx.font = "95px Impact";
                    ctx.textAlign = "left";
                    ctx.fillText(equipo.nombre, ...positions.equipo[index]);

                    ctx.fillStyle = (index === 0) ? "black" : "white";  // Kills, top y total en negro para el primer equipo

                    // Dibujar kills, top y total centrados con el tamaño adecuado
                    ctx.font = "125px Impact";  // Tamaño correcto para los números
                    ctx.textAlign = "center";

                    ctx.fillText(equipo.totalKills, positions.kills[index][0], positions.kills[index][1]);
                    ctx.fillText(equipo.totalTop, positions.top[index][0], positions.top[index][1]);
                    ctx.fillText(equipo.totalPuntaje, positions.total[index][0], positions.total[index][1]);

                    logosCargados++;
                    if (logosCargados === equipos.length) {
                        setTimeout(() => {
                            const imgURL = canvas.toDataURL("image/png");
                            const link = document.createElement("a");
                            link.href = imgURL;
                            link.download = "Tabla_Resultados.png";
                            link.click();
                        }, 1000);
                    }
                };
            });
        };
    }).catch(function(error) {
        console.error("Error loading font: ", error);
    });
}


document.getElementById("iniciarButton").onclick = iniciar;
document.getElementById("resultadosButton").onclick = generarResultados;
document.getElementById("imagenButton").onclick = crearImagen;
