// Solicitar permisos de almacenamiento en Android al iniciar la app
document.addEventListener("deviceready", function() {
    if (cordova.plugins && cordova.plugins.permissions) {
        var permissions = cordova.plugins.permissions;
        permissions.checkPermission(permissions.WRITE_EXTERNAL_STORAGE, function(status) {
            if (!status.hasPermission) {
                // Solicitar permiso si no está concedido
                permissions.requestPermission(permissions.WRITE_EXTERNAL_STORAGE, function(status) {
                    if (status.hasPermission) {
                        console.log("Permiso de almacenamiento concedido");
                    } else {
                        console.log("Permiso de almacenamiento denegado");
                    }
                }, function() {
                    console.log("Error al solicitar permiso");
                });
            }
        }, function() {
            console.log("Error al verificar permiso");
        });
    } else {
        console.log("El plugin de permisos de Cordova no está disponible");
    }
});
const logosPath = {
    "AGS EU": "logos/AGS.png",
    "AGSV2 ESPORTS": "logos/AGS.png",
    "ALQAEDA": "logos/ALQ.png",
    "ALQ": "logos/ALQ.png",
    "ALQ PREMIER": "logos/ALQ.png",
    "ALQ MINOR": "logos/ALQ.png",
    "ALQ STORM": "logos/ALQ.png",
    "ALQ V2": "logos/ALQ.png",
    "ALYANZ E-SPORTS": "logos/ALYANZ.png",
    "ALYANZ GIRLS": "logos/ALYANZ.png",
    "ALYANZ UZK": "logos/ALYANZ.png",
    "AS": "logos/AS.png",
    "AS MOBILE": "logos/AS.png",
    "AS NUVS": "logos/AS.png",
    "AS PC": "logos/AS.png",
    "ASG MOB": "logos/ASG.png",
    "ASG PC": "logos/ASG.png",
    "ASG PROSHU": "logos/ASG.png",
    "ASGARD": "logos/ASG.png",
    "BLOODLUST": "logos/BLOODLUST.png",
    "CABRITAS": "logos/CABRITAS.png",
    "CLAN 666": "logos/CLAN_666.png",
    "CLS": "logos/CLS.png",
    "CLS BLACK": "logos/CLS.png",
    "CLS BLACKBOX": "logos/CLS.png",
    "CLS CUYS": "logos/CLS.png",
    "CLS MIX": "logos/CLS.png",
    "CLS PITUDOS": "logos/CLS.png",
    "CLS ROMA": "logos/CLS.png",
    "CLS ROMPEKKS": "logos/CLS.png",
    "CLS SIX9": "logos/CLS.png",
    "CLS UNNAMED": "logos/CLS.png",
    "CLS UNNAMED R": "logos/CLS.png",
    "CLARITY": "logos/CLY.png",
    "CRV": "logos/CRV.png",
    "CRV FEMININA": "logos/CRV.png",
    "DARK MYTH": "logos/DM.png",
    "DIENASTY": "logos/DNST.png",
    "DYNASTY": "logos/DYNASTY.png",
    "DRAGON LEGIONS": "logos/DL.png", // FALTA LOGO
    "E11 ELEVEN EXY": "logos/EXY_TOP.png",
    "ELITE": "logos/KENIT.png",
    "ELITE KENIT": "logos/KENIT.png",
    "KUERVOS": "logos/EXWNG.png",
    "EXY BIN PEN": "logos/EXY_SA.png",
    "EXY CREW": "logos/EXY_CREW.png",
    "EXY MOB": "logos/EXY_MOBILE.png",
    "EXY MOBILE": "logos/EXY_MOBILE.png",
    "EXY PRUEBAS": "logos/EXY_CREW.png",
    "EXY SA": "logos/EXY_SA.png",
    "EXY TOP": "logos/EXY_TOP.png",
    "FENIX": "logos/FENIX.png",
    "FENIX Z1": "logos/FENIX.png",
    "FXL": "logos/NO.png",
    "GAMERS ELITE": "logos/GE.png",
    "GK 1ST": "logos/GK.png",
    "GK ELITE PC": "logos/GK.png",
    "GK MOBILE": "logos/GK.png",
    "GK PC": "logos/GK.png",
    "GLIZZY GANG": "logos/GLIZZY.png",
    "GLIZZY GLOBANT": "logos/GLIZZY.png",
    "GS IMPERIAL": "logos/GS.png",
    "GZ ELITE": "logos/GLIZZY.png",
    "GZ MIDNIGHT": "logos/GLIZZY.png",
    "GZ NIGHT": "logos/GLIZZY.png",
    "GZ XZ": "logos/GLIZZY.png",
    "GTX": "logos/GTX.png",
    "GTX E-SPORTS": "logos/GTX.png",
    "GTX SPORTS": "logos/GTX.png",
    "IGZ": "logos/IGZ.png",
    "IGZ BLOODIE": "logos/IGZ.png",
    "IGZ ELITE": "logos/IGZ.png",
    "IGZ INFAMOUS": "logos/IGZ.png",
    "IGZ MOBILE": "logos/IGZ.png",
    "IGZ PC": "logos/IGZ.png",
    "IGZ SNIPER": "logos/IGZ.png",
    "INTERPOL": "logos/ITP.png",
    "ISD": "logos/ISD.png",
    "KENIT SPORTS": "logos/KENIT.png",
    "KIDS GANG": "logos/KGANG.png",
    "LEVIATANES": "logos/LEV.png",
    "METSU": "logos/METSU.png",
    "METSU ONI": "logos/METSU.png",
    "MS": "logos/METSU.png",
    "NEW": "logos/NEWBR.png",
    "NEW DRAGON": "logos/NEWDRAGON.png",
    "NEW MOB": "logos/NEWDRAGON.png",
    "NOT": "logos/NOT.png",
    "NOTHING": "logos/NTNG.png",
    "NOHAT": "logos/NOHAT.png",
    "NVIDIA": "logos/NVDIA.png",
    "NVIDIA GG": "logos/NVDIA.png",
    "NWG": "logos/NWG.png",
    "NWG ELITE": "logos/NWG.png",
    "NWG KING": "logos/NWG.png",
    "NWG MOBILE": "logos/NWG.png",
    "NWG PC": "logos/NWG.png",
    "NWA": "logos/NWA.png",
    "O22": "logos/O22.png",
    "PKB": "logos/PKB.png",
    "PKB F1": "logos/PKB.png",
    "PXS SPORTS": "logos/PXS.png",
    "R3": "logos/R3.png",
    "R6": "logos/RKN.png",
    "RAPTORS T": "logos/RT.png",
    "RAPTORS TEAM": "logos/RT.png",
    "REAL SMOKE": "logos/RS.png",
    "RKN": "logos/RKN.png",
    "RS": "logos/RS.png",
    "RS ELITE": "logos/RS.png",
    "SINEIRA": "logos/SN.png",
    "SUPERBBCHITOS": "logos/SB.png",
    "SILENCE": "logos/SCE.png",
    "T1": "logos/T1.png",
    "T1 PC": "logos/T1.png",
    "TEAM 21": "logos/TEAM21.png",
    "TTV": "logos/TTV.png",
    "TFO": "logos/TFO.png",
    "TFO NG": "logos/TFO.png",
    "ULT ELITE": "logos/ULT.png",
    "UNNAMED": "logos/UNNAMED.png",
    "UNNAMED R": "logos/UNNAMED.png",
    "UZX E-SPORTS": "logos/UZX_E-SPORT.png",
    "UZX TEAM": "logos/UZX_TEAM.png",
    "VIP E-SPORTS": "logos/VIP.png",
    "VIXENS FURY": "logos/VX.png",
    "VYPER TEAM": "logos/VYPER.png",
    "VENDETTA": "logos/VDT.png",
    "WHITE DEATH": "logos/WTH.png",
    "WTH DS": "logos/WTH.png",
    "WTH RD": "logos/WTH.png",
    "WZE": "logos/WZE.png",
    "WZE TEAM": "logos/WZE.png",
    "ZELTA": "logos/ZELTA.png",
    "ZENIN": "logos/ZENIN.png",
    "XS AURA": "logos/XS.png", // FALTA LOGO
    "X-ESPORTS": "logos/X.png", // FALTA LOGO
    "1SKT MOBILE": "logos/SKT.png",
    "21S": "logos/21S.png",
    "6XZ E-SPORTS": "logos/6XZ.png",
    "7Z GLIZZY": "logos/GLIZZY.png",
    "8GAY": "logos/GAY.png", // FALTA LOGO
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
            1: 35, 
            2: 30, 
            3: 25, 
            4: 20,
            5: 10, 
            6: 7, 
            7: 5, 
            8: 3,
            9: 2, 
            10: 1
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

            // Input para el nombre del equipo
            const nombreInput = document.createElement("input");
            nombreInput.placeholder = `Nombre del equipo ${letraEquipo}`;
            nombreInput.className = "nombre-equipo"; // Asigna la clase para el nombre del equipo
            equipoDiv.appendChild(nombreInput);

            // Crear un contenedor para las 4 salas (Kills y Tops)
            const salasDiv = document.createElement("div");
            salasDiv.className = "salas";

            for (let j = 0; j < 4; j++) {
                const salaDiv = document.createElement("div");
                salaDiv.className = "sala";

                // Crear inputs para Kills
                const killsLabel = document.createElement("label");
                killsLabel.textContent = `Sala ${j + 1} Kills:`;
                salaDiv.appendChild(killsLabel);

                const killsInput = document.createElement("input");
                killsInput.type = "number"; // Cambiar a number para validar la entrada
                killsInput.placeholder = `Kills Sala ${j + 1}`;
                killsInput.className = "kills-top"; // Asigna la clase para kills
                salaDiv.appendChild(killsInput);

                // Crear inputs para Tops
                const topLabel = document.createElement("label");
                topLabel.textContent = `Top:`;
                salaDiv.appendChild(topLabel);

                const topInput = document.createElement("input");
                topInput.type = "number"; // Cambiar a number para validar la entrada
                topInput.placeholder = `Top Sala ${j + 1} (1-15)`;
                topInput.className = "kills-top"; // Asigna la clase para tops
                salaDiv.appendChild(topInput);

                salasDiv.appendChild(salaDiv);
            }
            
            equipoDiv.appendChild(salasDiv);
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
        const nombre = input.querySelector("input[placeholder^='Nombre del equipo']").value;
        
        const equipo = new Equipo(nombre);
        for (let j = 0; j < 4; j++) {
            equipo.kills[j] = parseInt(input.querySelector(`input[placeholder='Kills Sala ${j + 1}']`).value) || 0;
            equipo.top[j] = parseInt(input.querySelector(`input[placeholder='Top Sala ${j + 1} (1-15)']`).value) || 0;
        }
        equipo.calcularTotales();
        equipos.push(equipo);
    });

    equipos.sort((a, b) => b.totalPuntaje - a.totalPuntaje);
    equipos.splice(8);  // Limitar a los 8 mejores equipos

    const resultsText = equipos.map(e => `${e.nombre},${e.totalKills},${e.totalTop},${e.totalPuntaje}`).join("\n");
    localStorage.setItem('resultados', resultsText);
    document.getElementById("imagenButton").disabled = false;
}

function crearImagen() {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.src = "Plantilla/Tabla.png";  // Ruta a la imagen de la plantilla

    const font = new FontFace('Impact', 'url(Plantilla/impact.ttf)');
    
    font.load().then(function(loadedFont) {
        document.fonts.add(loadedFont);

        img.onload = function () {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);

            let logosCargados = 0;

            equipos.forEach((equipo, index) => {
                const logo = new Image();
                logo.src = logosPath[equipo.nombre] || "logos/default.png"; 

                logo.onload = function () {
                    ctx.drawImage(logo, ...positions.logo[index], 260, 260);

                    ctx.fillStyle = (index === 0) ? "yellow" : "white"; 
                    ctx.font = "95px Impact";
                    ctx.textAlign = "left";
                    ctx.fillText(equipo.nombre, ...positions.equipo[index]);

                    ctx.fillStyle = (index === 0) ? "black" : "white"; 
                    ctx.font = "125px Impact";
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
                logo.onerror = function () {
                    ctx.fillStyle = (index === 0) ? "yellow" : "white"; 
                    ctx.font = "95px Impact";
                    ctx.textAlign = "left";
                    ctx.fillText(equipo.nombre, ...positions.equipo[index]);

                    ctx.fillStyle = (index === 0) ? "black" : "white"; 
                    ctx.font = "125px Impact"; 
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
