document.addEventListener("DOMContentLoaded", () => {
    
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    const navItems = document.querySelectorAll(".nav-links a");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("abrir");
        });

        navItems.forEach((item) => {
            item.addEventListener("click", () => {
                navLinks.classList.remove("abrir");
            });
        });
    }

    const iconosPorRubro = {
        "Indumentaria Deportiva": "fas fa-dumbbell",
        "Gastronomía": "fas fa-utensils",
        "Ferretería": "fas fa-hammer",
        "Almacén": "fas fa-shopping-basket",
        "Cosmética y Belleza": "fas fa-pump-soap",
        "Regalería y Juguetería": "fa-solid fa-gift",
        "Polirrubro y Servicios": "fa-solid fa-store",
        "Indumentaria": "fa-solid fa-shirt",
        "Fiambrería": "fa-solid fa-cheese",
        "Actividad Física": "fas fa-person-running",
        "Dietética y Especias": "fas fa-seedling",
    };

    const comercios = [
        {
            nombre: "Showtime Sport Store",
            rubro: "Indumentaria Deportiva", 
            descripcion: "Confección y venta de indumentaria y accesorios deportivos, zapatillas de básquet importadas directo de USA",
            sucursales: [
                {
                direccion: "Garibaldi 243",
                horario: "Lunes a Viernes 9:00 a 12:30hs y de 16:00 a 20:00hs",
                dias: [1,2,3,4,5],
                franjaHoraria: [
                    { apertura: "9:00" , cierre: "12:30" },
                    { apertura: "16:00" , cierre: "20:00" }
                ]
                },
                {
                direccion: "Brown 153",
                horario: "Lunes a Viernes 9:30 a 19:00hs",
                dias: [1,2,3,4,5],
                franjaHoraria:[
                    { apertura:"9:30" , cierre:"19:00" }
                ]
                }
            ],
            contacto: {
                whatsapp: "2915709281",
                instagram: "showtimesportsstore"
            }
        },
        {
            nombre: "Margarita Store",
            rubro: "Cosmética y Belleza",
            descripcion: "Venta de maquillaje, cuidado facial, cuidado capilar, accesorios de acero, insumos de uñas, pestañas y más",
            sucursales: [
                {
                direccion: "Castelar 1695",
                horario: "Lunes a Viernes 9:00hs a 20:30hs",
                dias:[1,2,3,4,5],
                franjaHoraria:[
                    { apertura: "9:00" , cierre: "20:30" }
                ]
                }
            ],
            contacto: {
                whatsapp: "2915276472",
                instagram: "margaritastorear",
                sitioWeb: "https://www.margaritastorear.com/"
            }
        },
        {
            nombre: "Vibra Bonito",
            rubro: "Regalería y Juguetería",
            descripcion: "Regalos que enamoran y juguetes para hacer felices a los más chicos. Todo lo lindo que buscás para regalar y regalarte.",
            sucursales: [
                {
                 direccion: "Washington 676",
                 horario: "Lunes a Viernes 9:30 a 13:00hs y de 16:30 a 20:00hs | Sábado 10:00 a 13:30hs y de 16:30 a 20:00hs",
                            
                 dias: [1,2,3,4,5,6],
                 franjaHoraria:[
                    { apertura: "9:30" , cierre: "13:00"},
                    { apertura: "16:30" , cierre: "20:00"},
                    { apertura: "10:00" , cierre: "13:30"},
                    { apertura: "16:30" , cierre: "20:00"}
                 ]
                }
            ],
            contacto: {
                whatsapp: "2914379375",
                instagram: "vibrabonito.regaleria"
            }
        },
        {
            nombre: "Ohana Multikiosco",
            rubro: "Polirrubro y Servicios",
            descripcion: "Tradición familiar y calidez de barrio. Encontrá panificados frescos, fiambres, comidas al paso, kiosco, librería y un servicio oficial exclusivo: somos Unidad Postal 1 de Correo Argentino",
            sucursales: [
                {
                 direccion: "Maipu 1664",
                 horario:"Lunes a viernes 7:00 a 17:00hs",
                 dias: [1,2,3,4,5],
                 franjaHoraria: [
                 { apertura: "7:00" , cierre: "17:00"},
                 ]
                }
            ],
            contacto: {
                whatsapp: "2914191224",
                email: "Ohanamultikiosco@gmail.com"
            }
        },
        {
            nombre: "Catarsis Moda Circular",
            rubro: "Indumentaria", 
            descripcion: "Espacio dedicado a la moda circular y al consumo consciente, donde encontrás prendas únicas seleccionadas con estilo.",
            sucursales: [
                {
                 direccion: "Alberdi 1729",
                 horario:"Lunes a viernes 9:30 a 12:30hs y de 16:30 a 19:30hs",
                 dias: [1,2,3,4,5],
                 franjaHoraria: [
                 { apertura: "9:30" , cierre: "12:30"},
                 { apertura: "16:30" , cierre: "19:30"}
                 ]
                }
            ],
            contacto: {
                instagram: "catarsis.bbca",
                facebook: "https://www.facebook.com/profile.php?id=61591973338783"
            }
        },
        {
            nombre: "La Esquinita",
            rubro: "Fiambrería",
            descripcion: "Nos especializamos en la venta de fiambres y quesos seleccionados de primera calidad. Vení a buscar lo rico para picar o resolver tus compras diarias.",
            sucursales: [
                {
                 direccion: "Alberdi 1691",
                 horario:"Lunes a viernes 9:30 a 13:00hs y de 16:30 a 19:30hs | Domingo 10:00 a 13:00hs",
                 dias: [1,2,3,4,5,6,0], 
                 franjaHoraria: [
                 { apertura: "9:30" , cierre: "13:00"},
                 { apertura: "16:30" , cierre: "19:30"},
                 { apertura: "10:00" , cierre: "13:00"}
                 ]
                }
            ],
            contacto: {
                whatsapp: "2916494992",
                instagram: "fiambrerialaesquinita" 
            }
        },
        {
            nombre: "Âme Cocot",
            rubro: "Indumentaria",
            descripcion: "Te acompañamos en cada temporada ofreciéndote productos cómodos y de excelente calidad para toda la familia. Contamos con una gran variedad en ropa interior para hombres, mujeres y niños/as, además de pijamas, mallas, indumentaria deportiva y prendas térmicas.",
            sucursales: [   
                {
                 direccion: "Rivadavia 1910",
                 horario: "Lunes a Sábado 9:30 a 13:30 y de 16:00 a 20:00hs",
                 dias: [1,2,3,4,5,6],
                 franjaHoraria: [
                 { apertura: "9:30" , cierre: "13:30"},
                 { apertura: "16:00" , cierre: "20:00"},
                 ]
                }
            ],
            contacto: {
                whatsapp: "2914186436",
                instagram: "ame.cocot" 
            }
        },
        {
            nombre: "Oxana",
            rubro: "Actividad Física",
            descripcion: "Estudio de Pilates Reformer, un entrenamiento integral para ganar fuerza, corregir la postura y mejorar tu movilidad. Ideal para sentirte bien todos los días.",
            sucursales: [
                {
                    direccion: "Washington 510",
                    horario: "Martes y Jueves de 7:00 a 21:00",
                    dias: [1,2,3,4],
                    franjaHoraria: [
                        { apertura: "7:00" , cierre: "21:00" }
                    ]
                },
                {
                    direccion: "Remedios de Escalada 1043",
                    horario: "Lunes a Viernes 8:00 a 21:00 ",
                    dias: [1,2,3,4,5],
                    franjaHoraria: [
                        { apertura:"8:00" , cierre:"21:00" }
                    ]
                }
            ],
            contacto: {
                whatsapp: "2914416837",
                instagram: "oxanapilates"
            }
        },
        {
            nombre: "La Casa de las Especias",
            rubro: "Dietética y Especias",
            descripcion: "Empresa familiar con más de 100 años de tradición en Villa Mitre, lo mejor en especias nacionales e importadas de la ciudad.",
            sucursales: [
                {
                    direccion: "Drago 1698",
                    horario: "Lunes a Viernes de 8:00 a 16:00 hs | Sábado de 8:30 a 12:30 hs",
                    dias: [1, 2, 3, 4, 5, 6],
                    franjaHoraria: [
                        { apertura: "8:00", cierre: "16:00" },
                        { apertura: "8:30", cierre: "12:30" }
                    ]
                }
            ],
            contacto: {
                whatsapp: "2915236678",
                instagram: "lacasadelasespeciasbb" 

            }
        }
    ];
        
      

    const contenedorComercios = document.getElementById("contenedor-comercios");
    const buscadorInput = document.querySelector(".buscador-comercio");
    const botonesFiltro = document.querySelectorAll(".btn-filtro");

    function agregarComercios(listaComercios) {
        if (!contenedorComercios) return;
        contenedorComercios.innerHTML = ""; 
        
        const statComercios = document.getElementById("stat-total-comercios");
        if (statComercios) {
            statComercios.textContent = listaComercios.length;
        }

        if (listaComercios.length === 0) {
            const mensaje = document.createElement("p");
            mensaje.textContent = "No se encontraron comercios en este rubro. ¡Sumá el tuyo!"; 
            mensaje.classList.add("lead", "no-resultados"); 
            contenedorComercios.appendChild(mensaje);
            return;
        }

        listaComercios.forEach((comercio) => {
            const cardComercio = document.createElement("div");
            cardComercio.classList.add("comercio-card");

            const iconoClase = iconosPorRubro[comercio.rubro] || "fas fa-store";

            const listaSucursalesHTML = comercio.sucursales.map(sucursal => {
                const estaAbierto = Abierto(sucursal);
                const estadoClase = estaAbierto ? "abierto" : "cerrado";
                const textoEstado = estaAbierto ? "Abierto" : "Cerrado";

                return `
                    <div class="sucursal-bloque">
                        <p class="sucursal-direccion">📍 <strong>${sucursal.direccion}</strong></p>
                        <p class="sucursal-horario">${sucursal.horario}</p>
                        <span class="badge ${estadoClase}">${textoEstado}</span>
                    </div>
                `;
            }).join('');

          let linksHTML = '';

            if (comercio.contacto.whatsapp) {
                linksHTML += `
                    <a href="https://wa.me/549${comercio.contacto.whatsapp}?text=Hola!%20Lo%20vi%20en%20la%20App%20de%20Villa%20Mitre" target="_blank" class="btn-whatsapp">
                        <i class="fab fa-whatsapp"></i> WhatsApp
                    </a>
                `;
            }

            if (comercio.contacto.instagram) {
                linksHTML += `
                    <a href="https://instagram.com/${comercio.contacto.instagram}" target="_blank" class="btn-instagram">
                        <i class="fab fa-instagram"></i> Instagram
                    </a>
                `;
            }

            if (comercio.contacto.sitioWeb) {
                linksHTML += `
                    <a href="${comercio.contacto.sitioWeb}" target="_blank" class="btn-web">
                        <i class="fas fa-globe"></i> Web
                    </a>
                `;
            }

            if (comercio.contacto.email) {
                linksHTML += `
                    <a href="mailto:${comercio.contacto.email}" class="btn-email">
                        <i class="fas fa-envelope"></i> Email
                    </a>
                `;
            }

            if (comercio.contacto.facebook) {
                linksHTML += `
                    <a href="${comercio.contacto.facebook}" target="_blank" class="btn-facebook">
                        <i class="fab fa-facebook"></i> Facebook
                    </a>
                `;
            }

            const tarjetaHTML = `
                <span class="rubro">
                    <i class="${iconoClase}"></i> 
                    ${comercio.rubro}
                </span>
                <h3>${comercio.nombre}</h3>
                <p class="descripcion">${comercio.descripcion}</p>
                    
                <div class="contenedor-sucursales">
                    ${listaSucursalesHTML}
                </div>

                <div class="comercio-links">
                    ${linksHTML}
                </div>
            `;
            
            cardComercio.innerHTML = tarjetaHTML;
            contenedorComercios.appendChild(cardComercio);
        });
    }
 
    agregarComercios(comercios);

    if (buscadorInput) {
        buscadorInput.addEventListener("input", () => {
            const busqueda = buscadorInput.value.toLowerCase().trim(); 
            
            const comerciosFiltrados = comercios.filter((comercio) => {
                return comercio.nombre.toLowerCase().includes(busqueda);
            });
            
            agregarComercios(comerciosFiltrados);
        });
    }

    if (botonesFiltro.length > 0) {
        botonesFiltro.forEach((boton) => {
            boton.addEventListener("click", () => {
                const botonActivoAnterior = document.querySelector(".btn-filtro.active");
                if (botonActivoAnterior) {
                    botonActivoAnterior.classList.remove("active");
                }
                boton.classList.add("active");

                const rubroSeleccionado = boton.dataset.rubro;

                if (buscadorInput) buscadorInput.value = "";

                if (rubroSeleccionado === "todos") {
                    agregarComercios(comercios);
                } else {
                    const comerciosFiltrados = comercios.filter((comercio) => {
                        return comercio.rubro === rubroSeleccionado;
                    });
                    agregarComercios(comerciosFiltrados);
                }
            });
        });
    }
});

function Abierto(sucursal) {
    const ahora = new Date();
    const diaActual = ahora.getDay();
    const horaActual = ahora.getHours();
    const minutosActuales = ahora.getMinutes();

    if (!sucursal.dias.includes(diaActual)) {
        return false;
    }

    const minutosTotalesActuales = (horaActual * 60) + minutosActuales; 
    let estaAbierto = false;
    
    sucursal.franjaHoraria.forEach((franja) => {
        const [horaApertura, minApertura] = franja.apertura.split(":").map(Number);
        const [horaCierre, minCierre] = franja.cierre.split(":").map(Number);

        const minutosAperturaTotal = (horaApertura * 60) + minApertura;
        const minutosCierreTotal = (horaCierre * 60) + minCierre;

        if (minutosTotalesActuales >= minutosAperturaTotal && minutosTotalesActuales <= minutosCierreTotal) {
            estaAbierto = true; 
        }
    });

    return estaAbierto;
}