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
    
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    const navItems = document.querySelectorAll(".nav-links a");
    const section = document.querySelectorAll("main > section");
    const contenedorComercios = document.getElementById("contenedor-comercios");
    const contenedorDestacados = document.getElementById("contenedor-destacados");
    const contenedorNovedades = document.getElementById("contenedor-novedades");

   
    

   if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("abrir");
        });

        navItems.forEach((item) => {
            item.addEventListener("click", (event) => {
                const targetId = item.getAttribute("href");

                if (targetId && targetId.startsWith("#")) {
                    event.preventDefault(); 
                    navLinks.classList.remove("abrir");

                    const targetSection = document.querySelector(targetId);
                    
                    if (targetSection) {
                        section.forEach((sec) => {
                            sec.style.display = "none";
                        });
                        targetSection.style.display = "block";
                    }
                } else {
                    
                    navLinks.classList.remove("abrir");
                    
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
        "Instituto de Inglés": "fas fa-graduation-cap",
        "Accesorios": "fa-solid fa-gem",
        "Lencería": "fas fa-heart"
    }; 

    const novedades = [
        {
            categoria: "Arte en el Barrio",
            titulo: "¡Más color para nuestro barrio!",
            descripcion: "Entre todos podemos hacerlo posible",
            imagen: "assets/pintura.jpg",
            
        },
        
        ];

        contenedorNovedades.innerHTML = novedades.map(novedad => `
            <div class="novedad">
                <img src="${novedad.imagen}" alt="${novedad.titulo}">
                <span class="novedad-categoria">${novedad.categoria}</span>
                <h3>${novedad.titulo}</h3>
                <p>${novedad.descripcion}</p>
            </div>
        `).join("");




    const comercios = [
        
        {
            nombre: "Margarita Store",
            rubro: "Cosmética y Belleza",
           
            logo: "assets/margarita.jpg",
            descripcion: "Venta de maquillaje, cuidado facial, cuidado capilar, accesorios de acero, insumos de uñas, pestañas y más",
            sucursales: [
                {
                direccion: "Castelar 1695",
                maps: "https://www.google.com/maps/dir//MARGARITA+STORE,+Castelar+1695,+B8000+Bah%C3%ADa+Blanca,+Provincia+de+Buenos+Aires/@-38.726934,-62.227839,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x95eda30022e2c84b:0x43725e5f3e31dbaf!2m2!1d-62.2427111!2d-38.7293241?entry=ttu&g_ep=EgoyMDI2MDgyNi4wIKXMDSoASAFQAw%3D%3D",
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
            nombre: "Ohana Multikiosco",
            rubro: "Polirrubro y Servicios",
            logo: "assets/ohana.jpg",
            
            descripcion: "Tradición familiar y calidez de barrio. Encontrá panificados frescos, fiambres, comidas al paso, kiosco, librería y un servicio oficial exclusivo: somos Unidad Postal 1 de Correo Argentino",
            sucursales: [
                {
                 direccion: "Maipu 1664",
                 maps: "https://www.google.com/maps/dir//Multikiosco+OHANA+(Correo+Argentino+UP1),+Maip%C3%BA+1664,+B8001AYF+Bah%C3%ADa+Blanca,+Provincia+de+Buenos+Aires/@-38.726934,-62.2277949,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x95eda34b75d3cf53:0xfef46b0223f7f09!2m2!1d-62.2468371!2d-38.7320365?entry=ttu&g_ep=EgoyMDI2MDgyNi4wIKXMDSoASAFQAw%3D%3D",
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
            nombre: "Estilo Diagonal",
            rubro: "Peluquería",
            destacado: true,
            logo: "assets/estilo.jpg",
            descripcion: "Un espacio exclusivo donde el asesoramiento honesto, la sensibilidad y la salud de tu cabello son los protagonistas para reflejar tu verdadera esencia.",
            sucursales: [
                {
                    direccion: "Garibaldi 639",
                    maps: "https://www.google.com/maps/dir//Estilo+Diagonal,+Garibaldi+638,+B8001GWN+Bah%C3%ADa+Blanca,+Provincia+de+Buenos+Aires/@-38.726934,-62.2281202,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x95eda3d3512f5fbd:0x4c35fcb2a08c1ccc!2m2!1d-62.243889!2d-38.7261487?entry=ttu&g_ep=EgoyMDI2MDgyNi4wIKXMDSoASAFQAw%3D%3D",
                    horario: "Lunes a Sábados 10:00 a 19:00hs",
                    dias: [1,2,3,4,5,6],
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
            nombre: "Mamá Cocina",
            destacado: true,
            rubro: "Gastronomía",
            logo:"assets/mamacocina.jpg", 
            descripcion: "Sabor a hogar todos los días. Disfrutá platos elaborados con recetas de antes, ingredientes frescos y ese toque casero que te salva el almuerzo o la cena sin cocinar.",
            sucursales: [
                {
                    direccion: "Washington 377 ",
                    maps: "https://www.google.com/maps/dir//Mam%C3%A1+Cocina+Villa+Mitre,+Washington+377,+B8000+Bah%C3%ADa+Blanca,+Provincia+de+Buenos+Aires/@-38.726934,-62.228228,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x95eda31b2638cc75:0x226f15827c99badb!2m2!1d-62.2449848!2d-38.7294558?entry=ttu&g_ep=EgoyMDI2MDgyNi4wIKXMDSoASAFQAw%3D%3D",
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
            nombre: "La Casa de las Especias",
            rubro: "Dietética y Especias",
            
            logo: "assets/lacasa.jpg",
            descripcion: "Empresa familiar con más de 100 años de tradición en Villa Mitre, lo mejor en especias nacionales e importadas de la ciudad.",
            sucursales: [
                {
                    direccion: "Drago 1698",
                    maps: "https://www.google.com/maps/dir//La+Casa+De+Las+Especias,+Luis+Mar%C3%ADa+Drago+1698,+B8000+Bah%C3%ADa+Blanca,+Provincia+de+Buenos+Aires/@-38.726934,-62.2277489,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x95eda3251e4afb57:0x934387d3ee5d5017!2m2!1d-62.2482007!2d-38.7335925?entry=ttu&g_ep=EgoyMDI2MDgyNi4wIKXMDSoASAFQAw%3D%3D",
                    horario: "Lunes a Viernes 8:00 a 16:00hs <br> Sábado 8:30 a 12:30hs",
                    dias: [1,2,3,4,5,6],
                    horariosPorDia: {
                        1: [
                            { apertura: "8:00", cierre: "16:00" }
                        ],
                        2: [
                            { apertura: "8:00", cierre: "16:00" }
                        ],
                        3: [
                            { apertura: "8:00", cierre: "16:00" }
                        ],
                        4: [
                            { apertura: "8:00", cierre: "16:00" }
                        ],
                        5: [
                            { apertura: "8:00", cierre: "16:00" }
                        ],
                        6: [
                            { apertura: "8:30", cierre: "12:30" }
                        ]
                    }
                }
            ],
            contacto: {
                whatsapp: "2915236678",
                instagram: "lacasadelasespeciasbb" 
            }
        },
        {
            nombre: "Roma Heladería & Pastelería",
            rubro: "Heladería", 
            destacado: true,
            logo: "assets/roma.jpg",
            descripcion: "Especialistas en la venta de helados artesanales, postres y porciones. Además, contamos con tortas enteras por encargue y muchas delicias más para endulzar tus momentos.",
            sucursales: [
                {
                    direccion: "Maipú 2266",
                    maps: "https://www.google.com/maps/dir//Roma+Helader%C3%ADa+y+Pasteleria,+Maip%C3%BA+2264,+B8000+Bah%C3%ADa+Blanca,+Provincia+de+Buenos+Aires/@-38.726934,-62.2281202,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x95eda30068443583:0x28a893611fe961d8!2m2!1d-62.2401938!2d-38.7368413?entry=ttu&g_ep=EgoyMDI2MDgyNi4wIKXMDSoASAFQAw%3D%3D",
                    horario:
                        '<i class="fas fa-sun" style="margin-right: 6px;"></i>Lunes a Domingo: 12:00 a 00:00hs.<br>' +
                        '<i class="fas fa-snowflake" style="margin-right: 6px;"></i>Lunes a Viernes: 17:00 a 22:00hs.<br>' +
                        '<span style="display:inline-block; width:18px;"></span>Sábado: 16:00 a 00:00 hs.<br>' +
                        '<span style="display:inline-block; width:18px;"></span>Domingo: 12:00 a 22:00hs.',

                    dias: [1,2,3,4,5,6,0],
                    horariosPorDia: {
                        1: [
                            { apertura: "12:00", cierre: "00:00" }
                        ],
                        2: [
                            { apertura: "12:00", cierre: "00:00" }
                        ],
                        3: [
                            { apertura: "12:00", cierre: "00:00" }
                        ],
                        4: [
                            { apertura: "12:00", cierre: "00:00" }
                        ],
                        5: [
                            { apertura: "12:00", cierre: "00:00" }
                        ],
                        6: [
                            { apertura: "16:00", cierre: "00:00" }
                        ],
                        0: [
                            { apertura: "12:00", cierre: "22:00" }
                        ]
                    }
                }
            ],   
            contacto: {
                whatsapp: "2915268456",
                instagram: "romaheladeriapasteleria"
            }
        },
          {
            nombre: "Kros",
            rubro: "Actividad Física", 
            
            logo:"assets/kross.jpg",
            descripcion: "Entrená, movete y disfrutá con actividades para todos.<br>Entrenamiento funcional y personalizado, Ritmos Fit, Aerobox, Bachata y gimnasia para adultos mayores.",
            sucursales: [
                {
                    direccion: "Washington 567",
                    maps: "https://www.google.com/maps/@-38.7277518,-62.2430833,3a,75y,224.05h,90t/data=!3m7!1e1!3m5!1sS_DXIQSe5VUXiV7tgM4hMA!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D0%26panoid%3DS_DXIQSe5VUXiV7tgM4hMA%26yaw%3D224.05!7i16384!8i8192?entry=ttu&g_ep=EgoyMDI2MDgyNi4wIKXMDSoASAFQAw%3D%3D",
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
            nombre: "Vibra Bonito",
            rubro: "Regalería y Juguetería",
            logo: "assets/vibra.jpg",
            descripcion: "Regalos que enamoran y juguetes para hacer felices a los más chicos. Todo lo lindo que buscás para regalar y regalarte.",
            sucursales: [
                {
                 direccion: "Washington 676",
                 maps: "https://www.google.com/maps/dir//Vibra+bonito,+Washington+676,+B8000+Bah%C3%ADa+Blanca,+Provincia+de+Buenos+Aires/@-38.726934,-62.2277949,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x95eda3c4693eb493:0xf02aa679eeab172f!2m2!1d-62.2422532!2d-38.726929?entry=ttu&g_ep=EgoyMDI2MDgyNi4wIKXMDSoASAFQAw%3D%3D",
                 horario: "Lunes a Viernes 9:30 a 13:00hs <br> 16:30 a 20:00hs <br> Sábado 10:00 a 13:30hs y <br> 16:30 a 20:00hs",
                 dias: [1,2,3,4,5,6],
                 horariosPorDia: {
                        1: [
                            { apertura: "9:30", cierre: "13:00" },
                            { apertura: "16:30", cierre: "20:00" }
                        ],
                        2: [
                            { apertura: "9:30", cierre: "13:00" },
                            { apertura: "16:30", cierre: "20:00" }
                        ],
                        3: [
                            { apertura: "9:30", cierre: "13:00" },
                            { apertura: "16:30", cierre: "20:00" }
                        ],
                        4: [
                            { apertura: "9:30", cierre: "13:00" },
                            { apertura: "16:30", cierre: "20:00" }
                        ],
                        5: [
                            { apertura: "9:30", cierre: "13:00" },
                            { apertura: "16:30", cierre: "20:00" }
                        ],
                        6: [
                            { apertura: "10:00", cierre: "13:30" },
                            { apertura: "16:30", cierre: "20:00" }
                        ]
                    }
                }
            ],
            contacto: {
                whatsapp: "2914379375",
                instagram: "vibrabonito.regaleria"
            }
        },
        {
            nombre: "Rock Bahia",
            rubro: "Indumentaria", 
            logo: "assets/rockbahia.jpg",
            descripcion: "Local especializado en indumentaria urbana y rockera. Encontrá una amplia variedad de remeras, buzos y camperas con los mejores diseños de bandas y estilo clásicos.", 
            sucursales: [
                {
                    direccion: "Castelar 2281",
                    maps: "https://www.google.com/maps/@-38.7341031,-62.2363632,3a,75y,315.02h,90t/data=!3m7!1e1!3m5!1s6HxXTjo9Ovb81CCp4wu9UA!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D0%26panoid%3D6HxXTjo9Ovb81CCp4wu9UA%26yaw%3D315.02!7i16384!8i8192?entry=ttu&g_ep=EgoyMDI2MDgyNi4wIKXMDSoASAFQAw%3D%3D",
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
        },
        {
            nombre: "Merlina Beauty",
            rubro: "Cosmética y Belleza", 
            logo: "assets/merlina.jpg",
            descripcion: "Lashista, cosmetóloga y lashmaker. Servicios de belleza personalizados para realzar tu mirada y cuidar tu piel.",
            sucursales: [
                {
                direccion: "Cramer 625 - dep interno",
                maps: "https://www.google.com/maps/dir//Merlina+beauty,+Cramer+625,+B8000+Bah%C3%ADa+Blanca,+Provincia+de+Buenos+Aires/@-38.726934,-62.2279568,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x95eda366580abac5:0x46a8df25a634bfb1!2m2!1d-62.2324845!2d-38.7350019?entry=ttu&g_ep=EgoyMDI2MDgyNi4wIKXMDSoASAFQAw%3D%3D", 
                horario: "Atención con turno previo",
                dias: [1,2,3,4,5,6],
                }
            ],
            contacto: {
                Turnos: "https://www.fresha.com/es/a/merlina-beauty-bahia-blanca-cramer-625-q5v3v3h4/booking?menu=true&pId=2525121&dppub=true&fbclid=PAcGRvZgJleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA85MzY2MTk3NDMzOTI0NTkAAafzI2ifsD3G-mMGopYTQQ_d4PXRMveC6Rmu0oh19LCIVMcgQ8WcLDfKneIDWg_aem_TRuiVz_PuioNFQAzNK9_NQ&utm_source=ig&utm_medium=social&utm_content=link_in_bio&utm_id=97760_v0_s00_e0_tv3&employeeId=4593644&cartId=6fdf7997-51a0-433e-8d6e-0d3409a65589",
                instagram: "merlinabeautyce"
            }
        },
         {
            nombre: "El Rey del Queso",
            rubro: "Fiambrería", 
            logo:"assets/elrey.jpg",
            descripcion: "Calidad, variedad y buen precio. Ventas directo de fábrica. La mejor selección de quesos, fiambres y productos regionales para tus picadas y el día a día.",
            sucursales: [
                {
                    direccion: "Castelar 1608",
                    maps: "https://www.google.com/maps/dir//El+rey+del+Queso,+Castelar+1608,+B8000+Bah%C3%ADa+Blanca,+Provincia+de+Buenos+Aires/@-38.726934,-62.2279568,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x95eda38a7adc8f87:0xbd9443771ab4cb2!2m2!1d-62.2435565!2d-38.7283163?entry=ttu&g_ep=EgoyMDI2MDgyNi4wIKXMDSoASAFQAw%3D%3D",
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
            nombre: "Luz & Armonía",
            rubro: "Accesorios",
            logo: "assets/luz.jpg",
            descripcion: "Bijouterie artesanal en piedras naturales. Piezas únicas hechas a mano que combinan diseño, naturaleza y la energía de los cristales.", 
            sucursales: [
                {
                    direccion: "Washington 181",
                    maps: "https://www.google.com/maps/dir//Luz+y+Armon%C3%ADa,+Washington+181,+B8001+Bah%C3%ADa+Blanca,+Provincia+de+Buenos+Aires/@-38.726934,-62.2279568,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x95eda3006a328507:0x90ca57de825bdd94!2m2!1d-62.2469386!2d-38.7309537?entry=ttu&g_ep=EgoyMDI2MDgyNi4wIKXMDSoASAFQAw%3D%3D",
                    horario: "Martes a Viernes 9:00 a 12:00hs <br> 16:00 a 20:00hs",
                    dias: [2,3,4,5],
                    franjaHoraria: [
                        { apertura: "9:00", cierre: "12:00" },
                        { apertura: "16:00", cierre: "20:00" }
                    ]
                }
            ],          
            contacto: {
                whatsapp: "2914731497", 
                instagram: "luz_y_armonia.bb" 
            }
        },
        {
            nombre: "Catarsis Moda Circular",
            rubro: "Indumentaria", 
            logo:"assets/catarsis.jpg",
            descripcion: "Espacio dedicado a la moda circular y al consumo consciente, donde encontrás prendas únicas seleccionadas con estilo.",
            sucursales: [
                {
                 direccion: "Alberdi 1729",
                 maps: "https://www.google.com/maps/dir//Catarsis,+Alberdi+1729,+B8001+Bah%C3%ADa+Blanca,+Provincia+de+Buenos+Aires/@-38.726934,-62.2277524,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x95eda30019a70c51:0x24cd8a1053c479d4!2m2!1d-62.2432806!2d-38.7304626?entry=ttu&g_ep=EgoyMDI2MDgyNi4wIKXMDSoASAFQAw%3D%3D",
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
            logo:"assets/laesquinita.jpg",
            descripcion: "Nos especializamos en la venta de fiambres y quesos seleccionados de primera calidad. Vení a buscar lo rico para picar o resolver tus compras diarias.",
            sucursales: [
                {
                 direccion: "Alberdi 1691",
                 maps: "https://www.google.com/maps/dir//La+esquinita.+Almac%C3%A9n+de+quesos+y+fiambres,+Alberdi+1691+B8001BPK,+B8001BPK+Bah%C3%ADa+Blanca,+Provincia+de+Buenos+Aires/@-38.726934,-62.2277524,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x95eda3f3b93a32e3:0x502f71ddd64676ae!2m2!1d-62.2437091!2d-38.7300493?entry=ttu&g_ep=EgoyMDI2MDgyNi4wIKXMDSoASAFQAw%3D%3D",
                 horario:"Lunes a viernes 9:30 a 13:00hs <br> 17:00 a 20:30hs <br> Domingo 10:00 a 13:00hs",
                 dias: [1,2,3,4,5,6,0], 
                 horariosPorDia: {
                        1: [
                            { apertura: "9:30", cierre: "13:00" },
                            { apertura: "17:00", cierre: "20:30" }
                        ],
                        2: [
                            { apertura: "9:30", cierre: "13:00" },
                            { apertura: "17:00", cierre: "20:30" }
                        ],
                        3: [
                            { apertura: "9:30", cierre: "13:00" },
                            { apertura: "17:00", cierre: "20:30" }
                        ],
                        4: [
                            { apertura: "9:30", cierre: "13:00" },
                            { apertura: "17:00", cierre: "20:30" }
                        ],
                        5: [
                            { apertura: "9:30", cierre: "13:00" },
                            { apertura: "17:00", cierre: "20:30" }
                        ],
                        0: [
                            { apertura: "10:00", cierre: "13:00" }
                        ]
                    }
                }
            ],
                contacto: {
                whatsapp: "2916494992",
                instagram: "fiambrerialaesquinita" 
            }
        },
      
       
        {
            nombre: "Beto Mascotas",
            rubro: "Petshop",
            logo:"assets/beto.jpg",
            descripcion: "Todo lo que necesitás para el bienestar y cuidado de tu mascota en un solo lugar. Encontrá una amplia variedad en alimentos de calidad, juguetes y accesorios.",
            sucursales: [
                {
                    direccion: "Garibaldi 251",
                    maps: "https://www.google.com/maps/dir//Beto+Mascotas+Petshop,+Garibaldi+251,+B8000+Bah%C3%ADa+Blanca,+Provincia+de+Buenos+Aires/@-38.726934,-62.2281202,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x95eda38980a9c8fb:0x53c5c9ddf9f6acea!2m2!1d-62.2473298!2d-38.7293471?entry=ttu&g_ep=EgoyMDI2MDgyNi4wIKXMDSoASAFQAw%3D%3D",
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
            nombre: "Amanda",
            rubro: "Lencería", 
            logo: "assets/amanda.jpg",
            descripcion: "Lencería, corsetería y mallas para toda la familia.Encontrá bikinis todo el año, modelos reductores y telas anticloro.<br>¡Te acompañamos en cada etapa!",
            sucursales: [
                {
                    direccion: "Falucho 276",
                    maps: "https://www.google.com/maps/place/Amanda/@-38.729615,-62.248799,17z/data=!3m1!4b1!4m6!3m5!1s0x95eda33a5a134865:0x847b8ab3ade3a1f4!8m2!3d-38.729615!4d-62.248799!16s%2Fg%2F11b7hynns9?entry=ttu&g_ep=EgoyMDI2MDgyNi4wIKXMDSoASAFQAw%3D%3D",
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
            logo: "assets/big.jpg",
            descripcion: "Instituto de inglés para todas las edades. ¡Aprendé inglés en un espacio pensado para vos!",
            sucursales: [
               {
                direccion: "Alberdi 1601",
                maps: "https://www.google.com/maps/dir//Big+Ben+English+Institute,+Alberdi+1601,+B8000+Bah%C3%ADa+Blanca,+Provincia+de+Buenos+Aires/@-38.726934,-62.2277132,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x95999e384cfa1deb:0x442f7fd6e84a8090!2m2!1d-62.2446436!2d-38.7293588?entry=ttu&g_ep=EgoyMDI2MDgyNi4wIKXMDSoASAFQAw%3D%3D",
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
            nombre: "Âme Cocot",
            rubro: "Indumentaria",
            logo:"assets/ame.jpg",
            descripcion: "Te acompañamos en cada temporada ofreciéndote productos cómodos y de excelente calidad para toda la familia. Contamos con una gran variedad en ropa interior para hombres, mujeres y niños/as, además de pijamas, mallas, indumentaria deportiva y prendas térmicas.",
            sucursales: [   
                {
                 direccion: "Rivadavia 1910",
                 maps: "https://www.google.com/maps/dir//Cocot+Villa+Mitre,+Rivadavia+1910,+B8001BFV+Bah%C3%ADa+Blanca,+Provincia+de+Buenos+Aires/@-38.726934,-62.2277524,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x95eda300d1176663:0x5c8f37dcc1f4ba02!2m2!1d-62.24221!2d-38.7325476?entry=ttu&g_ep=EgoyMDI2MDgyNi4wIKXMDSoASAFQAw%3D%3D",
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
            nombre: "Alaia Pilates",
            rubro: "Actividad Física", 
            logo: "assets/alaia.jpg",
            descripcion: "Somos un espacio donde el Pilates y el entrenamiento de fuerza se complementan para ayudarte a desarrollar un cuerpo fuerte, móvil y saludable. Trabajamos con grupos reducidos, lo que nos permite acompañar de forma cercana a cada persona y adaptar cada ejercicio a sus necesidades, objetivos y experiencia.",
            sucursales: [
                {
                direccion: "Estados Unidos 3",
                maps: "https://www.google.com/maps/@-38.7333272,-62.2475348,3a,75y,310.68h,90t/data=!3m7!1e1!3m5!1sJC7jFNdtLPKimmA8CVs_Ig!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D0%26panoid%3DJC7jFNdtLPKimmA8CVs_Ig%26yaw%3D310.68!7i16384!8i8192?entry=ttu&g_ep=EgoyMDI2MDgyNi4wIKXMDSoASAFQAw%3D%3D",
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
            nombre: "Showtime Sport Store",
            rubro: "Indumentaria Deportiva", 
            logo: "assets/time.jpg",
            descripcion: "Confección y venta de indumentaria y accesorios deportivos, zapatillas de básquet importadas directo de USA",
            sucursales: [
                {
                direccion: "Garibaldi 243",
                maps: "https://www.google.com/maps/dir//SHOWTIME+SPORTS+STORE,+GARIBALDI+243,+Brown+153,+B8001GWE+Bah%C3%ADa+Blanca,+Provincia+de+Buenos+Aires/@-38.726934,-62.227839,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x95eda33bac19d21f:0xe8de7a9d468fe0b8!2m2!1d-62.2666988!2d-38.7213116?entry=ttu&g_ep=EgoyMDI2MDgyNi4wIKXMDSoASAFQAw%3D%3D",
                horario: "Lunes a Viernes 9:00 a 12:30hs <br> 16:00 a 20:00hs",
                dias: [1,2,3,4,5],
                franjaHoraria: [
                    { apertura: "9:00" , cierre: "12:30" },
                    { apertura: "16:00" , cierre: "20:00" }
                ]
                },
                {
                direccion: "Brown 153",
                maps: "https://www.google.com/maps/dir//SHOWTIME+SPORTS+STORE,+GARIBALDI+243,+Brown+153,+B8001GWE+Bah%C3%ADa+Blanca,+Provincia+de+Buenos+Aires/@-38.726934,-62.227839,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x95eda33bac19d21f:0xe8de7a9d468fe0b8!2m2!1d-62.2666988!2d-38.7213116?entry=ttu&g_ep=EgoyMDI2MDgyNi4wIKXMDSoASAFQAw%3D%3D",
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
            nombre: "Oxana",
            rubro: "Actividad Física",
            logo:"assets/oxana.jpg",
            descripcion: "Estudio de Pilates Reformer, un entrenamiento integral para ganar fuerza, corregir la postura y mejorar tu movilidad. Ideal para sentirte bien todos los días.",
            sucursales: [
                {
                    direccion: "Washington 510",
                    maps: "https://www.google.com/maps/place/Oxana+pilates/@-38.7281579,-62.2483484,17z/data=!3m1!4b1!4m6!3m5!1s0x95eda30034a2cc67:0xa5f2c5fbae76943a!8m2!3d-38.7281622!4d-62.243735!16s%2Fg%2F11zgs6dxg1?entry=ttu&g_ep=EgoyMDI2MDgyNi4wIKXMDSoASAFQAw%3D%3D",
                    horario: "Lunes a Viernes 8:00 a 21:00hs <br> Martes y Jueves 7:00 a 21:00hs",
                    dias: [1,2,3,4,5],
                    horariosPorDia: {
                        1: [
                            { apertura: "8:00", cierre: "21:00" }
                        ],
                        2: [
                            { apertura: "7:00", cierre: "21:00" }
                        ],
                        3: [
                            { apertura: "8:00", cierre: "21:00" }
                        ],
                        4: [
                            { apertura: "7:00", cierre: "21:00" }
                        ],
                        5: [
                            { apertura: "8:00", cierre: "21:00" }
                        ]
                    }
                },
                {
                    direccion: "Remedios de Escalada 1043",
                    maps: "https://www.google.com/maps/dir//Taller+Overhaulin',+Remedios+de+Escalada+1043,+B8000+Bah%C3%ADa+Blanca,+Provincia+de+Buenos+Aires/@-38.726934,-62.2279568,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x95eda31617f60851:0x76ce0e04984c0c27!2m2!1d-62.2374941!2d-38.7255694?entry=ttu&g_ep=EgoyMDI2MDgyNi4wIKXMDSoASAFQAw%3D%3D",
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
            nombre: "Patio Mitre",
            rubro: "Gastronomía", 
            logo: "assets/patiomitre.jpg",
            descripcion: "Restaurante y parrilla. Un punto de encuentro ideal para disfrutar de los mejores platos a la parrilla y cocina tradicional. Combinamos un ambiente único y acogedor con la mejor atención, perfecto para almuerzos relajados o cenas inolvidables.",
            sucursales: [
               {
                direccion: "Castelar 1401", 
                maps: "https://www.google.com/maps/dir//Patio+mitre,+Castelar+1401,+B8001+Bah%C3%ADa+Blanca,+Provincia+de+Buenos+Aires/@-38.726934,-62.2277132,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x95eda30000816aa1:0xe1eda123422cab54!2m2!1d-62.2463292!2d-38.7265484?entry=ttu&g_ep=EgoyMDI2MDgyNi4wIKXMDSoASAFQAw%3D%3D", 
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
        }
    ];

 
    
    
    
        
     
    
    const iconosPorRubroProfesionales = {
        "Psicología": "fas fa-brain",
        "Psicopedagogía": "fas fa-chalkboard-teacher",
        "Nutrición": "fas fa-apple-alt",
        "Kinesiología": "fas fa-running"
       
    };

    const profesionales = [
       
        {
            nombre: "Lic. Claribel Springer",
            rubro: "Psicología",
            matricula:"MP 2667",
            descripcion: "Atención a adolescentes y adultos desde una orientación psicoanalítica.",
            ubicacion: [
        {
            nombre: "Espacio Haru",
            direccion: "Necochea 321",
            dias: "Miércoles",
            horario: "13:00 a 17:00hs"
        },
        {
            nombre: "Centro Deportivo Club Villa Mitre",
            direccion: "Garibaldi 149",
            dias: "Viernes",
            horario: "10:00 a 12:00hs o a convenir",
        }
    ],
        contacto: {
        whatsapp: "2915208890",
        instagram: "psico.clarispringer"
    }
},
        {
        nombre: "Lic. Paloma Cornejo",
        rubro: "Psicopedagogía",
        descripcion:"Evaluación, diagnóstico y tratamiento de dificultades en el aprendizaje, acompañamiento psicopedagógico para niños, adolescentes y adultos · Tratamientos particulares y obras sociales (CUD)", 
        ubicacion: [
            {
              nombre:"Espacio Haru",
              direccion: "Alberdi 1878",
              dias: "Lunes y jueves",
              horario: "16:00 a 21:00hs",
            }
        ],
        contacto: {
            whatsapp: "2915115710",
           }
    },
    {
    nombre: "Lic. Johanna De la Canal",
    rubro: "Psicopedagogía",
    matricula: "MP 198051",
    descripcion: "Evaluación, diagnóstico y tratamiento, atención particular y obras sociales OSECAC y DOSEM · Prestadora directa | Otras · Reintegro",
    ubicacion: [
        {
            nombre: "Espacio Haru",
            direccion: "Alberdi 1878",
            dias: "Lunes y jueves",
            horario: "17:00 a 21:00hs"
        },
       ],
    contacto: {
        whatsapp: "2914054187",
        email: "johanna0197@hotmail.com",
    }
},
     {
    nombre: "Lic. Candela Zalazar",
    rubro: "Kinesiología",
    matricula: "MP 10675",
    descripcion: "Rehabilitación traumatológica y neurorehabilitación en adultos. Rehabilitación de la marcha, acondicionamiento físico del adulto mayor y drenaje linfático manual.",
    
    atencionDomicilio: true,
    
    ubicacion: [
      {
            nombre: "Espacio Haru",
            direccion: "Necochea 321",
           },
        {
            nombre: "Eki Kinesiología",
            direccion: "Necochea 774",
           }
    ],
    contacto: {
        whatsapp: "2915127024",
       }
},
    
    

 {
    nombre: "Lic. Gimena Andriach",
    rubro: "Nutrición",
    matricula: "MP 8085",
    descripcion: "Atención nutricional integral con enfoque no pesocentrista. Formación en enfermedad celíaca, intolerancia al gluten y SIBO.",
    ubicacion: [
        {
            nombre: "Espacio Haru",
            direccion: "Alberdi 1878",
            dias: "Sábado",
            horario: "08:00 a 14:00hs"
        }
    ],
    contacto: {
        whatsapp: "2915046476",
        instagram: "lic.gimenaandriach"
    }
},
  {
            nombre: "Lic. Valentina Croci",
            rubro: "Psicología",
            matricula: "MP 2591",
            descripcion: "Potenciá tu perfil profesional, tu CV y tu presencia en LinkedIn",
            ubicacion: [
                {
                    nombre: "Espacio Haru",
                    direccion: "Necochea 321",
                    dias: "Atención presencial con turno previo"
                }
            ],
            contacto: {
                whatsapp: "2914234619",
                instagram: "vacro.psi"
        }
    },
    
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
            if (prof.contacto.email) {
                linksHTML += `
                    <a href="mailto:${prof.contacto.email}" target="_blank" class="btn-email">
                        <i class="fas fa-envelope"></i> Email  
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
                ${prof.atencionDomicilio ? `
    <p class="atencion-domicilio">
        <i class="fas fa-home"></i> Atención a domicilio
    </p>
` : ''}

<div class="ubicaciones-profesional">
    ${Array.isArray(prof.ubicacion)
    ? prof.ubicacion.map(ubicacion => `
        <div class="ubicacion-profesional">

            <p class="sucursal-nombre">
                <strong>${ubicacion.nombre}</strong>
            </p>

            <p class="sucursal-direccion">
                <i class="fas fa-map-marker-alt"></i> ${ubicacion.direccion}
            </p>

            ${ubicacion.dias && ubicacion.horario ? `
                <p class="sucursal-horario">
                    <i class="fas fa-user-clock"></i> ${ubicacion.dias} de ${ubicacion.horario}
                </p>
            ` : ''}

        </div>
    `).join('')
    : `
        <div class="ubicacion-profesional">

            <p class="sucursal-direccion">
                <i class="fas fa-map-marker-alt"></i> ${prof.ubicacion}
            </p>

            <p class="sucursal-horario">
                <i class="fas fa-user-clock"></i> ${prof.modalidad}
            </p>

        </div>
    `}
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

    
    const buscadorInput = document.querySelector(".buscador-comercio");
    const botonesFiltro = document.querySelectorAll(".btn-filtro");

     function agregarComercios(listaComercios) {
    if (!contenedorComercios || !contenedorDestacados) return;

    contenedorComercios.innerHTML = "";
    contenedorDestacados.innerHTML = "";

    const statComercios = document.getElementById("stat-total-comercios");

    if (statComercios) {
        statComercios.textContent = comercios.length + profesionales.length + 1;
    }

    if (listaComercios.length === 0) {
        const mensaje = document.createElement("p");
        mensaje.textContent = "No se encontraron comercios en este rubro. ¡Sumá el tuyo!";
        mensaje.classList.add("lead", "no-resultados");
        contenedorComercios.appendChild(mensaje);
        return;
    }

    const comerciosDestacados = listaComercios.filter(
        comercio => comercio.destacado === true
    );

    const comerciosComunes = listaComercios.filter(
        comercio => comercio.destacado !== true
    );

    const listaOrdenada = [
        ...comerciosDestacados,
        ...comerciosComunes
    ];

    listaOrdenada.forEach((comercio) => {

        const cardComercio = document.createElement("div");
        cardComercio.classList.add("comercio-card");
        const iconoClase = iconosPorRubro[comercio.rubro] || "fas fa-store";

            const listaSucursalesHTML = comercio.sucursales.map(sucursal => {
                const estaAbierto = Abierto(sucursal);
                const estadoClase = estaAbierto ? "abierto" : "cerrado";
                const textoEstado = estaAbierto ? "Abierto" : "Cerrado";
                 
            const direccionMaps = sucursal.maps;

            return `
        <div class="sucursal-bloque">

        <p class="sucursal-direccion">
            <i class="fas fa-map-marker-alt"></i>${sucursal.direccion}
        </p>

        <p class="sucursal-horario">
            <i class="fas fa-clock"></i>${sucursal.horario}
        </p>

        <span class="badge ${estadoClase}">
            ${textoEstado}
        </span>

        </div>

        <a 
            href="${direccionMaps}"
            class="btn-maps"
            onclick="registrarClick('${comercio.nombre}', 'maps')">
            <i class="fas fa-map-marker-alt"></i> Cómo llegar

        </a>

    </div>
    `;
    }).join('');

            let linksHTML = '';
            if (comercio.contacto.whatsapp) {
                linksHTML += `
                <a href="https://wa.me/549${comercio.contacto.whatsapp}?text=Hola!%20Lo%20vi%20en%20la%20App%20de%20Villa%20Mitre"
                target="_blank"
                class="btn-whatsapp"
                onclick="registrarClick('${comercio.nombre}', 'whatsapp')">
                <i class="fab fa-whatsapp"></i> WhatsApp
                </a>
            `;
        }
            
            if (comercio.contacto.whatsapp1) {
                linksHTML += `
                <a href="https://wa.me/549${comercio.contacto.whatsapp1}?text=Hola!%20Lo%20vi%20en%20la%20App%20de%20Villa%20Mitre"
                target="_blank"
                class="btn-whatsapp"
                onclick="registrarClick('${comercio.nombre}', 'whatsapp1')">
                <i class="fab fa-whatsapp"></i> WhatsApp 1
                </a>
            `;
        }

        if (comercio.contacto.whatsapp2) {
            linksHTML += `
            <a href="https://wa.me/549${comercio.contacto.whatsapp2}?text=Hola!%20Lo%20vi%20en%20la%20App%20de%20Villa%20Mitre"
           target="_blank"
           class="btn-whatsapp"
           onclick="registrarClick('${comercio.nombre}', 'whatsapp2')">
            <i class="fab fa-whatsapp"></i> WhatsApp 2
            </a>
        `;
        
        }

        if (comercio.contacto.whatsappReservas) {
            linksHTML += `
            <a href="https://wa.me/549${comercio.contacto.whatsappReservas}?text=Hola!%20Quisiera%20hacer%20una%20reserva"
           target="_blank"
           class="btn-whatsapp"
           onclick="registrarClick('${comercio.nombre}', 'reservas')">
            <i class="fab fa-whatsapp"></i> Reservas
            </a>
        `;

        }

        if (comercio.contacto.whatsappDelivery) {
            linksHTML += `
        <a href="https://wa.me/549${comercio.contacto.whatsappDelivery}?text=Hola!%20Quisiera%20hacer%20un%20pedido"
           target="_blank"
           class="btn-whatsapp"
           onclick="registrarClick('${comercio.nombre}', 'delivery')">
            <i class="fab fa-whatsapp"></i> Delivery
        </a>
        `;
        
        }

        if (comercio.contacto.instagram) {
            linksHTML += `
        <a href="https://instagram.com/${comercio.contacto.instagram}"
           target="_blank"
           class="btn-instagram"
           onclick="registrarClick('${comercio.nombre}', 'instagram')">
            <i class="fab fa-instagram"></i> Instagram
        </a>
        `;

        }

        if (comercio.contacto.sitioWeb) {
            linksHTML += `
        <a href="${comercio.contacto.sitioWeb}"
           target="_blank"
           class="btn-web"
           onclick="registrarClick('${comercio.nombre}', 'sitioWeb')">
            <i class="fas fa-globe"></i> Web
        </a>
    `;
    
    }

    if (comercio.contacto.email) {
        linksHTML += `
        <a href="mailto:${comercio.contacto.email}"
           class="btn-email"
           onclick="registrarClick('${comercio.nombre}', 'email')">
            <i class="fas fa-envelope"></i> Email
        </a>
    `;
    
    }

    if (comercio.contacto.facebook) {
        linksHTML += `
        <a href="${comercio.contacto.facebook}"
           target="_blank"
           class="btn-facebook"
           onclick="registrarClick('${comercio.nombre}', 'facebook')">
            <i class="fab fa-facebook"></i> Facebook
        </a>
    `;
    
    }

    if (comercio.contacto.Turnos) {
        linksHTML += `
        <a href="${comercio.contacto.Turnos}"
           target="_blank"
           class="btn-whatsapp"
           onclick="registrarClick('${comercio.nombre}', 'Turnos')">
            <i class="fab fa-whatsapp"></i> Turnos
        </a>
    `;
    
    }
    
  const tarjetaHTML = `
    <span class="rubro">
        <i class="${iconoClase}"></i> 
        ${comercio.rubro}
    </span>

    <div class="logo-container">
        <img 
            src="${comercio.logo}" 
            alt="Logo de ${comercio.nombre}" 
            class="comercio-logo">
    </div>

    <h3>${comercio.nombre}</h3>

    <div class="comercio-contenido">

        <p class="descripcion">
            ${comercio.descripcion}
        </p>

        <div class="contenedor-sucursales">
            ${listaSucursalesHTML}
        </div>

    </div>

    <div class="comercio-links">
        ${linksHTML}
    </div>
`;
            
            cardComercio.innerHTML = tarjetaHTML;
               if (comercio.destacado === true) {
            contenedorDestacados.appendChild(cardComercio);
        } else {
            contenedorComercios.appendChild(cardComercio);
        }
    });
}
    agregarComercios(comercios);

   if (buscadorInput) {
    buscadorInput.addEventListener("input", () => {
        const busqueda = buscadorInput.value.toLowerCase().trim();

        const comerciosFiltrados = comercios.filter((comercio) => {
            const nombre = (comercio.nombre || "").toLowerCase();
            const rubro = (comercio.rubro || "").toLowerCase();
            const descripcion = (comercio.descripcion || "").toLowerCase();

            return (
                nombre.includes(busqueda) ||
                rubro.includes(busqueda) ||
                descripcion.includes(busqueda)
            );
        });

        agregarComercios(comerciosFiltrados);
    });
}

    function Abierto(sucursal) {
    const ahora = new Date();
    const diaActual = ahora.getDay();
    const horaActual = ahora.getHours();
    const minutosActuales = ahora.getMinutes();

    if (!sucursal.dias.includes(diaActual)) {
        return false;
    }

    const minutosTotalesActuales = (horaActual * 60) + minutosActuales;

    let franjas = [];

    if (sucursal.franjaHoraria) {
        franjas = sucursal.franjaHoraria;
    } 
    else if (sucursal.horariosPorDia) {
        franjas = sucursal.horariosPorDia[diaActual] || [];
    }

    let estaAbierto = false;

    franjas.forEach((franja) => {
        const [horaApertura, minApertura] = franja.apertura.split(":").map(Number);
        const [horaCierre, minCierre] = franja.cierre.split(":").map(Number);

        const minutosAperturaTotal = (horaApertura * 60) + minApertura;
        const minutosCierreTotal = (horaCierre * 60) + minCierre;

        if (
            minutosTotalesActuales >= minutosAperturaTotal &&
            minutosTotalesActuales <= minutosCierreTotal
        ) {
            estaAbierto = true;
        }
    });

    return estaAbierto;
}
});

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


