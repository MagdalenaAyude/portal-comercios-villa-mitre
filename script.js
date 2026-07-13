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

    const comercios = [
        {
            nombre: "Heladería La Nueva",
            rubro: "alimentos", 
            descripcion: "Helados artesanales con historia y el cariño de siempre en Villa Mitre.",
            horario: "Todos los días: 12:00 a 00:00",
            whatsapp: "5492915094533",
            instagram: "heladerialemicro"
        },
        {
            nombre: "Panadería La Nueva",
            rubro: "alimentos",
            descripcion: "Panadería artesanales con historia y el cariño de siempre en Villa Mitre.",
            horario: "Todos los días: 12:00 a 00:00",
            whatsapp: "5492915094533",
            instagram: "heladerialemicro"
        },
        {
            nombre: "Ferretería El Trinitario",
            rubro: "hogar", 
            descripcion: "Todo lo que buscás para el hogar y la construcción. Atención personalizada.",
            horario: "Lunes a Viernes: 08:00 a 12:30 y 15:30 a 19:30",
            whatsapp: "5492913334444",
            instagram: "ferreteriaeltrini"
        }
    ];


    const contenedorComercios = document.getElementById("contenedor-comercios");

    function agregarComercio(listaComercios) {
        if (!contenedorComercios) return;
        contenedorComercios.innerHTML = "";

        if (listaComercios.length === 0) {
            const mensaje = document.createElement("p");
            mensaje.textContent = "No se encontraron comercios en este rubro ¡Sumá el tuyo!"; 
            mensaje.classList.add("lead"); 
            contenedorComercios.appendChild(mensaje);
            return;
        }

        listaComercios.forEach((comercio) => {
           const cardComercio = document.createElement("div");
cardComercio.classList.add("comercio-card");
cardComercio.innerHTML = `
    <h3>${comercio.nombre}</h3>
    
    <p class="comercio-descripcion">${comercio.descripcion}</p>
    
    <div class="comercio-info-block">
        <span class="horario-titulo">Horario:</span>
        <span class="horario-detalle">${comercio.horario}</span>
    </div>
    
    <div class="comercio-links">
        <a href="https://wa.me/${comercio.whatsapp}?text=Hola!%20Lo%20vi%20en%20la%20App%20de%20Villa%20Mitre" target="_blank" class="btn-whatsapp">
            <i class="fab fa-whatsapp"></i> WhatsApp
        </a>
        <a href="https://instagram.com/${comercio.instagram}" target="_blank" class="btn-instagram">
            <i class="fab fa-instagram"></i> Instagram
        </a>
    </div>

            `;
            contenedorComercios.appendChild(cardComercio);
        });
    }

    agregarComercio(comercios);


    const buscadorInput = document.querySelector(".buscador-comercio");

    if (buscadorInput) {
        buscadorInput.addEventListener("input", () => {
            const busqueda = buscadorInput.value.toLowerCase(); 
            const comerciosFiltrados = comercios.filter((comercio) => {
                return comercio.nombre.toLowerCase().includes(busqueda);
            });
            agregarComercio(comerciosFiltrados);
        });
    }



    const botonesFiltro = document.querySelectorAll(".btn-filtro");

    if (botonesFiltro.length > 0) {
        botonesFiltro.forEach((boton) => {
            boton.addEventListener("click", () => {
               
                const botonActivoAnterior = document.querySelector(".btn-filtro.active");
                if (botonActivoAnterior) {
                    botonActivoAnterior.classList.remove("active");
                }
                boton.classList.add("active");

                const rubroSeleccionado = boton.dataset.rubro;

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

