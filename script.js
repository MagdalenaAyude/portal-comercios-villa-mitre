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
                },
                {
                direccion: "Brown 153",
                horario: "Lunes a Viernes 9:30 a 19:00hs",
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
                 horario: "Lunes a Viernes 9:30 a 13:00hs y de 16:30 a 20:00hs",
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
                }
             ],
                contacto: {
                whatsapp: "2914191224",
                email: "Ohanamultikiosco@gmail.com"
                }

            }
        ]

            



    function agregarComercio(listaComercios) {
        if (!contenedorComercios) return;
        contenedorComercios.innerHTML = ""; 

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
                return `
                    <div class="sucursal-bloque">
                        <p class="sucursal-direccion">📍 <strong>${sucursal.direccion}</strong></p>
                        <p class="sucursal-horario">${sucursal.horario}</p>
                    </div>
                `;
            }).join('');

            let linksHTML = `
                <a href="https://wa.me/549${comercio.contacto.whatsapp}?text=Hola!%20Lo%20vi%20en%20la%20App%20de%20Villa%20Mitre" target="_blank" class="btn-whatsapp">
                    <i class="fab fa-whatsapp"></i> WhatsApp
                </a>
            `;

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

    const contenedorComercios = document.getElementById("contenedor-comercios");
    const buscadorInput = document.querySelector(".buscador-comercio");
    const botonesFiltro = document.querySelectorAll(".btn-filtro");

    if (buscadorInput) {
        buscadorInput.addEventListener("input", () => {
            const busqueda = buscadorInput.value.toLowerCase().trim(); 
            
            const comerciosFiltrados = comercios.filter((comercio) => {
                return comercio.nombre.toLowerCase().includes(busqueda);
            });

            
            if (busqueda !== "") {
                botonesFiltro.forEach(btn => btn.classList.remove("active"));
            }

           
            if (comerciosFiltrados.length === 0) {
                contenedorComercios.innerHTML = `<p class="lead no-resultados" style="color: var(--text-muted); text-align: center; width: 100%; grid-column: 1/-1;">No se encontraron comercios que coincidan con la búsqueda.</p>`;
            } else {
                agregarComercio(comerciosFiltrados);
            }
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
                    agregarComercio(comercios);
                } else {
                    const comerciosFiltrados = comercios.filter((comercio) => {
                        return comercio.rubro === rubroSeleccionado;
                    });
                    agregarComercio(comerciosFiltrados);
                }
            });
        });
    }
});