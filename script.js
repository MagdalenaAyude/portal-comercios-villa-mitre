window.registrarClick = function(comercio, tipo) {
    console.log("Click:", comercio, tipo);

    if (typeof gtag === "function") {
        gtag('event', 'click_comercio', {
            comercio: comercio,
            tipo: tipo
     });
        console.log("Evento enviado a GA4");
    } else {
        console.log("ERROR: gtag no está disponible");
    }
};
document.addEventListener("DOMContentLoaded", () => {
    const buscador = document.querySelector(".buscador-comercio");
    const contenedorResultados = document.getElementById("contenedor-resultados");
    const seccionResultados = document.getElementById("seccion-resultados");
  

    const iconosRubros = {
    "Canto":"fa-solid fa-music",
    "Heladería": "fa-solid fa-ice-cream",
    "Nutrición": "fas fa-apple-alt",
    "Manejo Integral de Plagas": "fa-solid fa-bug",
    "Panificados": "fas fa-bread-slice",
    "Productos Biogreen": "fas fa-leaf",
    "Psicología": "fas fa-brain"
};


     
   

    const datos = [

  
    {
        nombre: "Alfredo Davies",
      
        tipo: "aprende",
        rubro: "Canto",
        logo: "assets/canto.jpg",
        descripcion: "Clases de canto lírico y popular. Aprendé a acompañar tus canciones con guitarra por acordes o lectura musical.",
        ubicacion: "Alberdi 1690",
        maps: "https://www.google.com/maps/@-38.7299948,-62.2436883,20a,75y,47.13h,90t/data=!3m7!1e1!3m5!1sxLlc3XPE4qa3cqdAO7oo4Q!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D0%26panoid%3DxLlc3XPE4qa3cqdAO7oo4Q%26yaw%3D47.13!7i16384!8i8192?entry=ttu&g_ep=EgoyMDI2MDkzMC4wIKXMDSoASAFQAw%3D%3D",
        horario: "A coordinar",
        contacto: {
            whatsapp: "5492915044894",
            youtube: "https://youtube.com/@alfredodavies?si=6hCfV9ZUWo6tJB6x"
        }
    },

    {
        nombre: "Spika",
        tipo: "variete",
        rubro: "Panificados",
        logo: "assets/spika.jpg",
        modalidad: "Artesano",
        participanteActivo: true,
        descripcion: "Panificados integrales y caseros, con opciones saludables y simples. También ofrecemos panificados elaborados con harina de almendras, tanto dulces como salados.",
        horario: "Lunes a Viernes 13:00 a 20:00hs",
        contacto: {
            whatsapp: "2915021127",
            instagram: "spika.bb"
        }
    },

    {
        nombre: "Juani Biogreen",

        tipo: "variete",
        rubro: "Productos Biogreen",
        logo: "assets/junai.jpg",
        modalidad: "Reventa",
        descripcion: "Distribuidora de productos Biogreen: aromatizantes de ambientes y textiles, difusores, perfumes personales, cosmética, productos de limpieza, aceites esenciales y mucho más. Calidad, seguridad y compromiso ambiental y social.",
        horario: "Lunes a Viernes 9:00 a 19:00hs",
        contacto: {
            whatsapp: "2915660703",
            instagram: "juanibiogreen"
        }
    },
    
    {
        nombre: "Lic. Claribel Springer",

        tipo: "profesional",
        rubro: "Psicología",
        logo: "assets/clari.jpg",
        matricula: "MP 2667",
        descripcion: "Atención a adolescentes y adultos desde una orientación psicoanalítica.",
        ubicacion: [
            {
                nombre: "Espacio Haru",
                direccion: "Necochea 321",
                maps: "https://www.google.com/maps/@-38.7356218,-62.2378866,18a,75y,130.03h,90t/data=!3m7!1e1!3m5!1sHFysjsxT5VJwHmh8DrI17w!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D0%26panoid%3DHFysjsxT5VJwHmh8DrI17w%26yaw%3D130.03!7i16384!8i8192?entry=ttu&g_ep=EgoyMDI2MDkyOS4wIKXMDSoASAFQAw%3D%3D",
                dias: "Miércoles 13:00hs a 17:00hs",
                
            },
            {
                nombre: "Centro Deportivo Club Villa Mitre",
                direccion: "Garibaldi 149",
                maps: "https://www.google.com/maps/@-38.7300482,-62.2484651,19a,75y,152.82h,90t/data=!3m7!1e1!3m5!1sCUH2lXomRAO00OdFdTTG9A!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D0%26panoid%3DCUH2lXomRAO00OdFdTTG9A%26yaw%3D152.82!7i16384!8i8192?entry=ttu&g_ep=EgoyMDI2MDkzMC4wIKXMDSoASAFQAw%3D%3D",
                dias: "Viernes 10:00hs a 12:00hs",
              
            }
        ],
        contacto: {
            turnos: "2915208890",
            instagram: "psico.clarispringer"
        }
    },
    {
        nombre: "Roma Heladería & Pastelería",
    
        tipo: "comercio",
        rubro: "Heladería",
        logo: "assets/roma.jpg",
        descripcion: "Especialistas en la venta de helados artesanales, postres y porciones. Además, contamos con tortas enteras por encargue y muchas delicias más para endulzar tus momentos.",
        sucursales: [
            {
                direccion: "Maipú 2266",
                maps: "https://www.google.com/maps/dir//Roma+Helader%C3%ADa+y+Pasteleria,+Maip%C3%BA+2264,+B8000+Bah%C3%ADa+Blanca,+Provincia+de+Buenos+Aires/@-38.726934,-62.2281202,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x95eda30068443583:0x28a893611fe961d8!2m2!1d-62.2401938!2d-38.7368413?entry=ttu&g_ep=EgoyMDI2MDgyNi4wIKXMDSoASAFQAw%3D%3D",
                horario:
                    "Lunes a Domingo 12:00 a 00:00hs.<br>Lunes a Viernes 17:00 a 22:00hs.<br>Sábado 16:00 a 00:00 hs.<br>Domingo 12:00 a 22:00hs.",
                dias: [1, 2, 3, 4, 5, 6, 0],
                horariosPorDia: {
                    1: { apertura: "12:00", cierre: "00:00" },
                    2: { apertura: "12:00", cierre: "00:00" },
                    3: { apertura: "12:00", cierre: "00:00" },
                    4: { apertura: "12:00", cierre: "00:00" },
                    5: { apertura: "12:00", cierre: "00:00" },
                    6: { apertura: "16:00", cierre: "00:00" },
                    0: { apertura: "12:00", cierre: "22:00" }
                }
            }
        ],
        contacto: {
            whatsapp: "2915268456",
            instagram: "romaheladeriapasteleria"
        }
    },

    

    {
        nombre: "Versus (M.I.P.)",
     
        tipo: "comercio",
        rubro: "Manejo Integral de Plagas",
        destacado: true,
        modalidad: "Servicios",
        logo: "assets/plagas.jpg",
        descripcion: "Técnico en Manejo Integral de Plagas y Técnico Agropecuario. Brindamos servicios de control de plagas y parquizado/desmalezado.",
        sucursales: [
            {
                direccion: "Atención a Domicilio",
                horario: "Lunes a Sábado 8:00 a 18:00hs",
                dias: [1, 2, 3, 4, 5, 6],
                franjaHoraria: [
                    {
                        apertura: "8:00",
                        cierre: "18:00"
                    }
                ]
            }
        ],
        contacto: {
            whatsapp: "2915665545",
            instagram: "versus_mip"
        }
    },
 {
            nombre:"Lic. Mara Alvarez Garza · Profesora de Educación Física",
     
            tipo: "profesional",
            rubro: "Nutrición",
            logo: "assets/mara.jpg",
            matricula: "MP 3793",
            descripcion: "Tratamiento nutricional y asesoramiento en actividad física. Recetarios, seguimiento personalizado mediante App, rutinas para realizar en casa o gimnasio y antropometría.",
            ubicacion: [
                {
                    nombre: "Mara Nuticionista",
                    direccion: "Chiclana 1602",
                    maps: "https://www.google.com/maps/@-38.7323398,-62.248669,18a,75y,58.11h,90t/data=!3m7!1e1!3m5!1srqaE3QzqHtcawiltXHJD-g!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D0%26panoid%3DrqaE3QzqHtcawiltXHJD-g%26yaw%3D58.11!7i16384!8i8192?entry=ttu&g_ep=EgoyMDI2MDkzMC4wIKXMDSoASAFQAw%3D%3D",
                    dias: "Lunes a Viernes 9:00hs a 12:00hs<br>17:00hs a 20:00hs",
                   
                }
            ],
            contacto: {
                sitioWeb: "https://maranutricionactiva.tuland.com.ar/",
                turnos: "2914044109",
                instagram: "maranutricionactiva"
                
            }
        },
        ];
   function buscar(texto) {
    const normalizar = texto =>
        texto
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");

    const termino = normalizar(texto.trim());

    if (!termino) {
        return [];
    }

    return datos.filter(item =>
        normalizar(item.nombre || "").includes(termino) ||
        normalizar(item.rubro || "").includes(termino) ||
        normalizar(item.tipo || "").includes(termino) ||
        normalizar(item.descripcion || "").includes(termino)
    );
}

        function generarLinksContacto(item) {
        let linksHTML = "";

    if (item.contacto?.whatsapp) {
        linksHTML += `
            <a 
                href="https://wa.me/${item.contacto.whatsapp}?text=Hola%2C%20vi%20tu%20perfil%20en%20Villa%20Mitre%20y%20quisiera%20consultar."
                target="_blank"
                class="inline-flex items-center justify-center gap-2 rounded-lg border border-vm-green/30 bg-vm-green/10 px-3 py-2 text-sm font-semibold text-vm-green transition hover:bg-vm-green hover:text-white"
                onclick="registrarClick('${item.nombre}', 'whatsapp')"
            >
                <i class="fab fa-whatsapp"></i> WhatsApp
            </a>
        `;
    }

    if (item.contacto?.instagram) {
        linksHTML += `
            <a 
                href="https://instagram.com/${item.contacto.instagram}"
                target="_blank"
                class="inline-flex items-center justify-center gap-2 rounded-lg bg-pink-500/10 border border-pink-500/30 px-3 py-2 text-sm font-semibold text-pink-400 transition hover:bg-pink-500 hover:text-white"
                onclick="registrarClick('${item.nombre}', 'instagram')"
            >
                <i class="fab fa-instagram"></i> Instagram
            </a>
        `;
    }

    if (item.contacto?.youtube) {
        linksHTML += `
            <a 
                href="${item.contacto.youtube}"
                target="_blank"
                class="inline-flex items-center justify-center gap-2 rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-2 text-sm font-semibold text-red-400 transition hover:bg-red-500 hover:text-white"
                onclick="registrarClick('${item.nombre}', 'youtube')"
            >
                <i class="fab fa-youtube"></i> YouTube
            </a>
        `;
    }

    if (item.contacto?.turnos) {
        linksHTML += `
            <a 
                href="https://wa.me/${item.contacto.turnos}?text=Hola%2C%20vi%20tu%20perfil%20en%20Villa%20Mitre%20y%20quisiera%20consultar%20por%20un%20turno."
                target="_blank"
                class="inline-flex items-center justify-center gap-2 rounded-lg border border-vm-green/30 bg-vm-green/10 px-3 py-2 text-sm font-semibold text-vm-green transition hover:bg-vm-green hover:text-white"
                onclick="registrarClick('${item.nombre}', 'turnos')"
            >
                <i class="fab fa-whatsapp"></i> Turnos
            </a>
        `;
    }

  

    if (item.contacto?.sitioWeb) {
        linksHTML += `
            <a 
                href="${item.contacto.sitioWeb}"
                target="_blank"
class="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-500/10 border border-blue-500/30 px-3 py-2 text-sm font-semibold text-blue-400 transition hover:bg-blue-500 hover:text-white"
                onclick="registrarClick('${item.nombre}', 'sitioWeb')"
            >
                <i class="fas fa-globe"></i> Sitio Web
            </a>
        `;
    }


    return linksHTML;
}
function Abierto(sucursal) {
    const ahora = new Date();
    const diaActual = ahora.getDay();
    const horaActual = ahora.getHours();
    const minutosActuales = ahora.getMinutes();

    if (!sucursal.dias?.includes(diaActual)) {
        return false;
    }

    const minutosTotalesActuales = (horaActual * 60) + minutosActuales;

    let franjas = [];

    if (sucursal.franjaHoraria) {
        franjas = sucursal.franjaHoraria;
    } 
    else if (sucursal.horariosPorDia) {
        const horario = sucursal.horariosPorDia[diaActual];

        if (horario) {
            franjas = Array.isArray(horario)
                ? horario
                : [horario];
        }
    }

    let estaAbierto = false;

    franjas.forEach((franja) => {
        const [horaApertura, minApertura] = franja.apertura.split(":").map(Number);
        const [horaCierre, minCierre] = franja.cierre.split(":").map(Number);

        const minutosAperturaTotal = (horaApertura * 60) + minApertura;
        const minutosCierreTotal = (horaCierre * 60) + minCierre;

        if (minutosCierreTotal < minutosAperturaTotal) {
            if (
                minutosTotalesActuales >= minutosAperturaTotal ||
                minutosTotalesActuales <= minutosCierreTotal
            ) {
                estaAbierto = true;
            }
        } 
        else {
            if (
                minutosTotalesActuales >= minutosAperturaTotal &&
                minutosTotalesActuales <= minutosCierreTotal
            ) {
                estaAbierto = true;
            }
        }
    });

    return estaAbierto;
}

function renderizarResultados(resultados) {
    contenedorResultados.innerHTML = "";

   

    if (resultados.length === 0) {
        contenedorResultados.innerHTML = `
            <p class="no-resultados">
                No se encontraron resultados.
            </p>
        `;
        return;
    }

    resultados.forEach(item => {
        const card = document.createElement("article");
        card.className = `
    group
    flex
    flex-col
    rounded-2xl
    border
    border-white/10
    bg-vm-dark-gray
    p-5
    transition-all
    duration-300
    hover:-translate-y-1
    hover:border-vm-green/40
    hover:shadow-xl
    hover:shadow-black/20
`;

        const icono = iconosRubros[item.rubro] || "fas fa-store";


        let ubicaciones = [];

     
        if (Array.isArray(item.sucursales)) {
            ubicaciones = item.sucursales;
        }

      
        else if (Array.isArray(item.ubicacion)) {
            ubicaciones = item.ubicacion;
        }

 
        else if (item.ubicacion) {
            ubicaciones = [
                {
                    direccion: item.ubicacion,
                    horario: item.horario,
                    maps: item.maps
                }
            ];
        }

        let ubicacionesHTML = "";

        if (ubicaciones.length > 0) {

            ubicacionesHTML = ubicaciones.map(ubicacion => {

                const abierto =
                    typeof Abierto === "function"
                        ? Abierto(ubicacion)
                        : null;
                const diasTexto = Array.isArray(ubicacion.dias)
                    ? ubicacion.dias.length === 6
                        ? "Lunes a Sábado"
                        : ubicacion.dias.length === 5
                            ? "Lunes a Viernes"
                            : ubicacion.dias.length === 7
                                ? "Lunes a Domingo"
                                : ubicacion.dias.map(dia => ({
                                    0: "Domingo",
                                    1: "Lunes",
                                    2: "Martes",
                                    3: "Miércoles",
                                    4: "Jueves",
                                    5: "Viernes",
                                    6: "Sábado"
                                }[dia] || dia)).join(", ")
                    : ubicacion.dias || "";
                const franja = ubicacion.franjaHoraria?.[0];
                const incluirDias = !ubicacion.horariosPorDia || !ubicacion.horario;

                return `
                    <div class="resultado-ubicacion">
                    ${ubicacion.nombre ? `
    <p class="mb-2 text-sm font-semibold text-white">
        ${ubicacion.nombre}
    </p>
` : ""}

${ubicacion.direccion ? `
    <p class="mb-2 flex items-start gap-2 text-sm text-gray-400">

        <i class="fas fa-map-marker-alt mt-0.5 shrink-0 text-vm-green"></i>

        ${ubicacion.maps ? `
            <a 
                href="${ubicacion.maps}"
                target="_blank"
                rel="noopener noreferrer"
                onclick="registrarClick('${item.nombre}', 'maps')"
                class="transition-colors hover:text-vm-green"
            >
                ${ubicacion.direccion}
            </a>
        ` : `
            <span>
                ${ubicacion.direccion}
            </span>
        `}

    </p>
` : ""}

${diasTexto || ubicacion.horario ? `
    <p class="mb-2 flex items-start gap-2 text-sm text-gray-400">

        <i class="fas fa-clock mt-0.5 shrink-0 text-vm-green"></i>

        <span>
            ${incluirDias && diasTexto
                ? `${diasTexto}${franja || ubicacion.horario ? ": " : ""}`
                : ""}

            ${franja
                ? `de ${franja.apertura}hs a ${franja.cierre}hs`
                : ubicacion.horario || ""}
        </span>

    </p>
` : ""}
${abierto !== null ? `
    <div class="flex justify-center">
        <p class="
            inline-flex
            w-fit
            items-center
            justify-center
            rounded-full
            px-3
            py-1
            text-xs
            font-semibold
            ${abierto
                ? "bg-vm-green/10 text-vm-green"
                : "bg-white/5 text-gray-500"
            }
        ">
            ${abierto ? "Abierto ahora" : "Cerrado"}
        </p>
    </div>
` : ""}
</div>
`;

}).join("");
        }

 




   
 


        const linksContacto = generarLinksContacto(item);

    card.innerHTML = `

           <span class="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-vm-green/20 bg-vm-green/10 px-3 py-1 text-xs font-semibold text-vm-green">
    <i class="${icono}"></i>
    ${item.rubro || ""}
</span>
        <div class="mb-4 flex items-center gap-4">
    <div class="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white p-2">
        <img
            src="${item.logo || ""}"
            alt="Logo de ${item.nombre || ""}"
            class="max-h-full max-w-full object-contain"
        >
    </div>

    <h3 class="text-xl font-bold leading-tight text-white">
        ${item.nombre || ""}
    </h3>
</div>

${item.matricula ? `
    <p class="mb-2 text-sm font-medium text-gray-400">
        ${item.matricula}
    </p>
` : ""}

${item.modalidad ? `
    <p class="mb-2 text-sm font-medium text-vm-green">
        ${item.modalidad}
    </p>
` : ""}

${item.descripcion ? `
    <p class="mb-4 text-sm leading-relaxed text-gray-400">
        ${item.descripcion}
    </p>
` : ""}

${ubicacionesHTML ? `
    <div class="mb-4 space-y-2">
        ${ubicacionesHTML}
    </div>
` : ""}


  ${linksContacto ? `
        <div class="mt-auto flex flex-wrap gap-2">
            ${linksContacto}
        </div>
    ` : ""}
`;

contenedorResultados.appendChild(card);
});

}




buscador.addEventListener("input", () => {
    const texto = buscador.value.trim();

    if (!texto) {
        seccionResultados.style.display = "none";
        contenedorResultados.innerHTML = "";
        return;
    }

    const resultados = buscar(texto);

    seccionResultados.style.display = "block";
    renderizarResultados(resultados);
});
const btnTodos = document.getElementById("btn-todos");

if (btnTodos) {
    btnTodos.addEventListener("click", () => {
        buscador.value = "";
        seccionResultados.style.display = "block";
        renderizarResultados(datos);
    });
}




const linkHistoria = document.querySelector(".link-historia");
const historia = document.getElementById("historia");

if (linkHistoria && historia) {
    linkHistoria.addEventListener("click", (e) => {
        e.preventDefault();

        historia.style.display = "block";

        setTimeout(() => {
            historia.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }, 50);
    });
}
if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("./service-worker.js")
            .then(registration => {
                console.log("Service Worker registrado:", registration);
            })
            .catch(error => {
                console.error("Error al registrar Service Worker:", error);
            });
    });
}
});
    
