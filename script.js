document.addEventListener("DOMContentLoaded", () => {
    
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    const navItems = document.querySelectorAll(".nav-links a");
    const nav = document.querySelector("nav");
    const section = document.querySelectorAll("main > section");
    const profesionalesSection = document.getElementById("contenedor-profesionales");
    const rubroprofesionales = document.getElementById("rubro-profesionales");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("abrir");
        });

        navItems.forEach((item) => {
            item.addEventListener("click", (event) => {
                navLinks.classList.remove("abrir");
                event.preventDefault();

                const targetId = item.getAttribute("href");
                console.log("Hiciste clic en:", targetId);
                
                if (targetId && targetId.startsWith("#")) {
                    const targetSection = document.querySelector(targetId);
                    
                    if (targetSection) {
                        section.forEach((sec) => {
                            sec.style.display = "none";
                        });
                        targetSection.style.display = "block";
                    }
                }
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
        "Peluquería": "fas fa-scissors",
        "Heladería": "fa-solid fa-ice-cream",
        "Petshop": "fa-solid fa-paw",
        "Consultorios": "fas fa-user-md",
        "Instituto de Inglés": "fas fa-graduation-cap"
    }; 

    const comercios = [
        {
            nombre: "Showtime Sport Store",
            rubro: "Indumentaria Deportiva", 
            descripcion: "Confección y venta de indumentaria y accesorios deportivos, zapatillas de básquet importadas directo de USA",
            sucursales: [
                {
                direccion: "Garibaldi 243",
                horario: "Lunes a Viernes 9:00 a 12:30hs <br> 16:00 a 20:00hs",
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
                 horario: "Lunes a Viernes 9:30 a 13:00hs <br> 16:30 a 20:00hs <br> Sábado 10:00 a 13:30hs y <br> 16:30 a 20:00hs",
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
                 horario:"Lunes a viernes 9:30 a 12:30hs <br> 16:30 a 19:30hs",
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
                 horario:"Lunes a viernes 9:30 a 13:00hs <br> 17:00 a 20:30hs <br> Domingo 10:00 a 13:00hs",
                 dias: [1,2,3,4,5,6,0], 
                 franjaHoraria: [
                 { apertura: "9:30" , cierre: "13:00"},
                 { apertura: "17:00" , cierre: "20:30"},
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
                 horario: "Lunes a Sábado 9:30 a 13:30hs <br> 16:00 a 20:00hs",
                 dias: [1,2,3,4,5,6],
                 franjaHoraria: [
                 { apertura: "9:30" , cierre: "13:30"},
                 { apertura: "16:00" , cierre: "20:00"}
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
                    horario: "Lunes a Viernes 8:00 a 21:00hs <br> Martes y Jueves 7:00 a 21:00hs",
                    dias: [1,2,3,4],
                    franjaHoraria: [
                        { apertura: "8:00" , cierre: "21:00" },
                        { apertura: "7:00" , cierre: "21:00" }
                    ]
                },
                {
                    direccion: "Remedios de Escalada 1043",
                    horario: "Lunes a Viernes 8:00 a 21:00 ",
                    dias: [1,2,3,4,5],
                    franjaHoraria: [
                        { apertura:"8:00" , cierre:"21:00" },
                    ]
                }
            ],
            contacto: {
                whatsapp: "2914416837",
                instagram:  "oxanapilates_"
            }
        },
        {
            nombre: "La Casa de las Especias",
            rubro: "Dietética y Especias",
            descripcion: "Empresa familiar con más de 100 años de tradición en Villa Mitre, lo mejor en especias nacionales e importadas de la ciudad.",
            sucursales: [
                {
                    direccion: "Drago 1698",
                    horario: "Lunes a Viernes 8:00 a 16:00hs <br> Sábado 8:30 a 12:30hs",
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
        },
        {
            nombre: "Estilo Diagonal",
            rubro: "Peluquería",
            descripcion: "NUEVA APERTURA EN VILLA MITRE <br> <br> Un espacio exclusivo donde el asesoramiento honesto, la sensibilidad y la salud de tu cabello son los protagonistas para reflejar tu verdadera esencia.",
            sucursales: [
                {
                    direccion: "Garibaldi 639",
                    horario: "Lunes a Sábados 10:00 a 19:00hs",
                    dias: [1, 2, 3, 4, 5, 6],
                    franjaHoraria: [
                        { apertura: "10:00", cierre: "19:00" },
                    ]
                }
            ],
            contacto: {
                whatsapp: "2915028928",
                instagram: "estilodiagonal"
            }
        },
        {
            nombre: "Alaia Pilates",
            rubro: "Actividad Física", 
            descripcion: "Somos un espacio donde el Pilates y el entrenamiento de fuerza se complementan para ayudarte a desarrollar un cuerpo fuerte, móvil y saludable. Trabajamos con grupos reducidos, lo que nos permite acompañar de forma cercana a cada persona y adaptar cada ejercicio a sus necesidades, objetivos y experiencia.",
            sucursales: [
                {
                direccion: "Estados Unidos 3",
                horario: "Lunes a Viernes 8:00 a 12:00hs <br> 14:00 a 21:00hs",
                dias: [1,2,3,4,5],
                franjaHoraria: [
                    { apertura: "8:00" , cierre: "12:00" },
                    { apertura: "14:00" , cierre: "21:00" }
                ]
                }
            ],
            contacto: {
                whatsapp: "2915346258",
                instagram: "alaia.pilates"
            }
        },
        {
            nombre: "Roma Heladería & Pastelería",
            rubro: "Heladería", 
            descripcion: "Especialistas en la venta de helados artesanales, postres y porciones. Además, contamos con tortas enteras por encargue y muchas delicias más para endulzar tus momentos.",
            sucursales: [
                {
                    direccion: "Maipú 2266",
                    horario: '<i class="fas fa-sun" style="margin-right: 6px;"></i>Lunes a Domingo: 12:00 a 00:00hs.<br><i class="fas fa-snowflake" style="margin-right: 6px;"></i>Lunes a Viernes: 17:00 a 22:00hs.<br><span style="display:inline-block; width:18px;"></span>Sábado: 16:00 a 00:00 hs.<br><span style="display:inline-block; width:18px;"></span>Domingo: 12:00 a 22:00hs.',
                    dias: [1,2,3,4,5,6,0],
                    franjaHoraria: [
                        { apertura: "12:00", cierre: "00:00" },
                        { apertura: "17:00", cierre: "22:00" },
                        { apertura: "16:00", cierre: "00:00" },
                        { apertura: "12:00", cierre: "22:00" }
                    ]
                }
            ],          
            contacto: {
                whatsapp: "2915268456",
                instagram: "romaheladeriapasteleria"
            }
        },
        {
            nombre: "Beto Mascotas",
            rubro: "Petshop", 
            descripcion: "Todo lo que necesitás para el bienestar y cuidado de tu mascota en un solo lugar. Encontrá una amplia variedad en alimentos de calidad, juguetes y accesorios.",
            sucursales: [
                {
                    direccion: "Garibaldi 251",
                    horario: "Lunes a Sábado 9:00 a 13:00hs <br> 17:00hs a 20:30hs.",
                    dias: [1,2,3,4,5,6],
                    franjaHoraria: [
                        { apertura: "9:00", cierre: "13:00" },
                        { apertura: "17:00", cierre: "20:30" }
                    ]
                }
            ],          
            contacto: {
                whatsapp: "2914130314",
                instagram: "betomascotas.petshop",
                facebook: "https://www.facebook.com/BetoMascotasPetshop?locale=es_LA "
            }
        },
        {
            nombre: "Mamá Cocina",
            rubro: "Gastronomía", 
            descripcion: "Sabor a hogar todos los días. Disfrutá platos elaborados con recetas de antes, ingredientes frescos y ese toque casero que te salva el almuerzo o la cena sin cocinar.",
            sucursales: [
                {
                    direccion: "Washington 377 ",
                    horario: "Lunes a Sábado 10:00 a 14:00hs <br> 19:00 a 23:00hs",
                    dias: [1,2,3,4,5,6],
                    franjaHoraria: [
                        { apertura: "10:00", cierre: "14:00" },
                        { apertura: "19:00", cierre: "23:00" }
                    ]
                }
            ],          
            contacto: {
                whatsapp: "2915089999",
                instagram: "mamacocina.vm",
            }
        },
        {
            nombre: "Kros",
            rubro: "Actividad Física", 
            descripcion: "Entrená, movete y disfrutá con actividades para todos.<br>Entrenamiento funcional y personalizado, Ritmos Fit, Aerobox, Bachata y gimnasia para adultos mayores.",
            sucursales: [
                {
                    direccion: "Washington 567",
                    horario: "Lunes a Viernes 7:00 a 10:00hs <br> 13:30 a 21:00hs",
                    dias: [1,2,3,4,5],
                    franjaHoraria: [
                        { apertura: "7:00", cierre: "10:00" },
                        { apertura: "13:30", cierre: "21:00" }
                    ]
                }
            ],          
            contacto: {
                whatsapp: "2915334322",
                instagram: "kros.gym",
            }
        }, 
        {
            nombre: "Amanda",
            rubro: "Lencería", 
            descripcion: "Lencería, corsetería y mallas para toda la familia.Encontrá bikinis todo el año, modelos reductores y telas anticloro.<br>¡Te acompañamos en cada etapa!",
            sucursales: [
                {
                    direccion: "Falucho 276",
                    horario: "Lunes a Sábado de 9:00 a 13:00hs <br> 16:30 a 20:30hs",
                    dias: [1,2,3,4,5,6],
                    franjaHoraria: [
                        { apertura: "9:00", cierre: "13:00" },
                        { apertura: "16:30", cierre: "20:30" }
                    ]
                }
            ],          
            contacto: {
                whatsapp1: "2916499992",
                whatsapp2: "2915220136", 
                instagram: "amandalenceria",
                facebook: "https://www.facebook.com/amanda.corseteria/"
            }
        },
        {
            nombre: "Big Ben English Institute",
            rubro: "Instituto de Inglés", 
            descripcion: "Instituto de inglés para todas las edades. ¡Aprendé inglés en un espacio pensado para vos!",
            sucursales: [
               {
                direccion: "Alberdi 1601",
                horario: "Lunes a jueves 16:00 a 20:30",
                dias: [1,2,3,4],
                franjaHoraria: [
                    { apertura: "16:00", cierre: "20:30" },
                ]
               }
            ],
            contacto: {
                whatsapp: "2915324924",
                instagram: "bbeibahiablanca"
            }
        },
        {
            nombre: "Patio Mitre",
            rubro: "Gastronomía", 
            descripcion: "Restaurante y parrilla. Un punto de encuentro ideal para disfrutar de los mejores platos a la parrilla y cocina tradicional. Combinamos un ambiente único y acogedor con la mejor atención, perfecto para almuerzos relajados o cenas inolvidables.",
            sucursales: [
               {
                direccion: "Castelar 1401", 
                horario: "Martes a Domingo 9:30 a 15:00hs <br> 17:30 a 01:00hs",
                dias: [1,2,3,4,5,6,0],
                franjaHoraria: [
                    { apertura: "9:30", cierre: "15:00" },
                    { apertura: "17:30", cierre: "01:00" }
                ]
               }
            ],
            contacto: {
                whatsappReservas: "2915130734",
                whatsappDelivery: "2915097787",
                instagram: "patiomitre"
            }
        },
        {
            nombre: "El Rey del Queso",
            rubro: "Fiambrería", 
            descripcion: "Calidad, variedad y buen precio. Ventas directo de fábrica. La mejor selección de quesos, fiambres y productos regionales para tus picadas y el día a día.",
            sucursales: [
                {
                    direccion: "Castelar 1608",
                    horario: "Lunes a Sábado 8:30 a 20:30hs",
                    dias: [1,2,3,4,5,6],
                    franjaHoraria: [
                        { apertura: "8:30", cierre: "20:30" },
                    ]
                }
            ],          
            contacto: {
                whatsapp: "2914743005",
                instagram: "elreydelqueso.bb" 
            }
        },
         {
            nombre: "Rock Bahia",
            rubro: "Indumentaría", 
            descripcion: "Local especializado en indumentaria urbana y rockera. Encontrá una amplia variedad de remeras, buzos y camperas con los mejores diseños de bandas y estilo clásicos.", 
            sucursales: [
                {
                    direccion: "Castelar 2281",
                    horario: "Lunes a Sábado 14:00 a 20:00hs",
                    dias: [1,2,3,4,5,6],
                    franjaHoraria: [
                        { apertura: "14:00", cierre: "20:00" },
                    ]
                }
            ],          
            contacto: {
                whatsapp: "2914293286",
                instagram: "remeras.rock.bahia" 
            }
        }
        ];
     
    
    const iconosPorRubroProfesionales = {
        "Psicología": "fas fa-brain",
        "Psicopedagoga": "fas fa-chalkboard-teacher",
       
    };

    const profesionales = [
        {
            nombre: "Lic. Valentina Croci",
            rubro: "Psicologo",
            descripcion: "Potenciá tu perfil profesional, tu CV y tu presencia en LinkedIn",
            ubicacion: "Espacio Haru - Necochea 321",
            modalidad: "Atención presencial con turno previo",
            contacto: {
            whatsapp: "2914234619",
            instagram: "vacro.psi"
        }
    },
        {
        nombre: "Lic. Paloma Cornejo",
        rubro: "Psicopedagogía",
        descripcion: "Evaluación, diagnóstico y tratamiento de dificultades en el aprendizaje, acompañamiento psicopedagógico para niños, adultos y jóvenes",
        ubicacion: "Espacio Haru – Alberdi 1878",
        modalidad: "Lunes a jueves 16:00 a 21:00hs.<br>Tratamientos particulares y obras sociales (CUD)",
        contacto: {
            whatsapp: "2915115710",
            instagram: "Palo.psp"
        }
    }
    ];
    

    function renderizarProfesionales(lista) {
        const contenedor = document.getElementById("contenedor-profesionales");
        if (!contenedor) return;

        contenedor.innerHTML = "";

        lista.forEach(prof => {
            const cardProfesional = document.createElement("div");
            cardProfesional.classList.add("profesional-card");
            
            const iconoClase = iconosPorRubroProfesionales[prof.rubro] || "fas fa-user-md";

            let linksHTML = '';

            if (prof.contacto.whatsapp) {
                linksHTML += `
                   <a href="https://wa.me/${prof.contacto.whatsapp}?text=Hola%2C%20vi%20tu%20perfil%20en%20Villa%20Mitre%20y%20quisiera%20consultar%20por%20un%20turno." target="_blank" class="btn-whatsapp"> 
                    <i class="fab fa-whatsapp"></i> Turnos
                    </a>
                `;
            }
           
            if (prof.contacto.instagram) {
                linksHTML += `
                    <a href="https://instagram.com/${prof.contacto.instagram}" target="_blank" class="btn-instagram">
                        <i class="fab fa-instagram"></i> Instagram
                    </a>
                `;
            }

            const tarjetaHTML = `
                <span class="rubro">
                    <i class="${iconoClase}"></i> 
                    ${prof.rubro}
                </span>
                <h3>${prof.nombre}</h3>
                <p class="descripcion">${prof.descripcion}</p>
                    
                <div class="sucursal-bloque">
                    <p class="sucursal-direccion"><i class="fas fa-map-marker-alt"></i> ${prof.ubicacion}</p>
                    <p class="sucursal-horario"><i class="fas fa-user-clock"></i> ${prof.modalidad}</p>
                </div>

                <div class="comercio-links">
                    ${linksHTML}
                </div>
            `;
            
            cardProfesional.innerHTML = tarjetaHTML;
            contenedor.appendChild(cardProfesional);
        });
    }
    
    renderizarProfesionales(profesionales);

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
                        <p class="sucursal-direccion"><i class="fas fa-map-marker-alt"></i>${sucursal.direccion}</p>
                        <p class="sucursal-horario"><i class="fas fa-clock"></i>${sucursal.horario}</p>
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
            if (comercio.contacto.whatsapp1) {
                linksHTML += `
                    <a href="https://wa.me/549${comercio.contacto.whatsapp1}?text=Hola!%20Lo%20vi%20en%20la%20App%20de%20Villa%20Mitre" target="_blank" class="btn-whatsapp">
                        <i class="fab fa-whatsapp"></i> WhatsApp 1
                    </a>
                `;
            }
            if (comercio.contacto.whatsapp2) {
                linksHTML += `
                    <a href="https://wa.me/549${comercio.contacto.whatsapp2}?text=Hola!%20Lo%20vi%20en%20la%20App%20de%20Villa%20Mitre" target="_blank" class="btn-whatsapp">
                        <i class="fab fa-whatsapp"></i> WhatsApp 2
                    </a>
                `;
            }
            if (comercio.contacto.whatsappReservas) {
                linksHTML += `
                <a href="https://wa.me/549${comercio.contacto.whatsappReservas}?text=Hola!%20Quisiera%20hacer%20una%20reserva" target="_blank" class="btn-whatsapp">
                <i class="fab fa-whatsapp"></i> Reservas
                </a>
                `;
            }
            if (comercio.contacto.whatsappDelivery) {
                linksHTML += `
                <a href="https://wa.me/549${comercio.contacto.whatsappDelivery}?text=Hola!%20Quisiera%20hacer%20un%20pedido" target="_blank" class="btn-whatsapp">
                <i class="fab fa-whatsapp"></i> Delivery
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

const eventDate = new Date("August 17, 2026 00:00:00").getTime();

const updateCountdown = setInterval(() => {
    const now = new Date().getTime();
    const timeLeft = eventDate - now;

    if (timeLeft < 0) {
        clearInterval(updateCountdown);
        document.getElementById("countdown").innerHTML = "<h3>¡Es Hoy! 🎉</h3>";
        return;
    }
    
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24)) + 2;
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    document.getElementById("days").innerText = days < 10 ? "0" + days : days;
    document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
}, 1000);