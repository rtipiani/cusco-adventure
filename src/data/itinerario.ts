export type ItinerarioData = {
    dia: string;
    titulo?: string;
    descripcion: string[];
    atractivos?: { nombre: string; descripcion: string }[];
    descripcionFinal?: string;
    circuitos?: { nombre: string; descripcion: string; rutas: string[] }[];
    incluye?: string[];
    noIncluye?: string[];
    recomendaciones?: string[];
    imagen: string;
};

export type Lang = "es" | "en";

export const itinerario: Record<Lang, ItinerarioData[]> = {
    es: 
    [
        {
            dia: "CITY TOUR",
            titulo: "¡Bienvenida al Cusco!",
            descripcion: [
                `Recepción en el aeropuerto o terminal terrestre. A su llegada, nuestro personal lo estará esperando con un letrero de la empresa. El transfer, debidamente identificado con su credencial, le dará una breve explicación del programa mientras lo trasladamos al hotel. Al llegar, será recibido con un tradicional mate de coca mientras realizamos el check-in y lo acompañamos a su habitación para su acomodación.`,
                `Primer Tour – City Tour Arqueológico (Medio Día). Por la tarde iniciaremos nuestro primer recorrido. La movilidad turística pasará por su hotel para visitar los cinco complejos arqueológicos más importantes de Cusco. Este tour tiene una duración aproximada de cinco horas e incluye:`
            ],
            atractivos: [
                { nombre: "Qoricancha (Templo del Sol)", descripcion: "principal centro religioso inca." },
                { nombre: "Sacsayhuamán", descripcion: "majestuosa fortaleza con vista panorámica de la ciudad." },
                { nombre: "Qenqo", descripcion: "centro ceremonial dedicado a la Pachamama (Madre Tierra)." },
                { nombre: "Puka Pukara", descripcion: "antiguo centro militar y de control." },
                { nombre: "Tambomachay", descripcion: "conocido como el Templo del Agua, dedicado al culto al líquido vital." }
            ],
            descripcionFinal: `Finalmente, retornaremos a la Plaza de Armas del Cusco, donde concluirá el recorrido.`,
            incluye: [
                "Recepción en aeropuerto Jorge Chávez o terminal terrestre",
                "Traslado al hotel y asistencia en el check-in (11:00 am)",
                "Movilidad turística durante el tour",
                "Entradas a todos los atractivos",
                "Guía profesional bilingüe",
                "1 noche de alojamiento en Cusco"
            ],
            noIncluye: [
                "Alimentación",
                "Gastos personales extras"
            ],
            recomendaciones: [
                "Mochila pequeña",
                "Ropa abrigadora (según corresponda)",
                "Aperitivos para el camino",
                "Lentes de sol",
                "Bloqueador solar"
            ],
            imagen: "/cusco/qenqo.avif"
        },
        {
            dia: "TOUR A MACHU PICCHU DESDE CUSCO",
            descripcion: [
                `El segundo día de nuestro itinerario está dedicado al destino más esperado por todo viajero: la Ciudadela Inca de Machu Picchu, una de las 7 Maravillas del Mundo Moderno.`,
                `Iniciaremos con el traslado desde Cusco hacia Ollantaytambo para abordar el tren turístico rumbo a Aguas Calientes (Machu Picchu Pueblo), disfrutando de un recorrido escénico rodeado de montañas y paisajes andinos.`,
                `En Aguas Calientes podrá recorrer atractivos como el mercado artesanal, aguas termales, el mariposario y el Museo de Sitio de Machu Picchu antes de iniciar la visita guiada.`,
                `Nuestro guía lo acompañará en un recorrido de 2 a 3 horas dentro de Machu Picchu, descubriendo sus principales templos, andenes y la clásica vista panorámica desde la parte alta de la ciudadela. Después de la experiencia, descenderemos en bus hacia Aguas Calientes y finalmente retornaremos en tren a Ollantaytambo y en movilidad turística hacia Cusco.`,
                `🏔️ Circuitos y Rutas Disponibles en Machu Picchu: Actualmente, Machu Picchu cuenta con 3 tipos de circuitos oficiales, cada uno con rutas diferentes para que vivas la experiencia según tu preferencia. Los cupos son limitados y se agotan rápido, por lo que te recomendamos reservar con anticipación.`
            ],
            circuitos: [
                {
                    nombre: "Circuito 1 – Panorámico",
                    descripcion: "Perfecto para quienes buscan vistas espectaculares y paisajes inolvidables.",
                    rutas: ["Ruta 1-A: Montaña Machu Picchu", "Ruta 1-B: Terraza Superior", "Ruta 1-C: Portada Intipunku (solo temporada alta)", "Ruta 1-D: Puente Inka (solo temporada alta)"]
                },
                {
                    nombre: "Circuito 2 – Clásico",
                    descripcion: "El recorrido más popular, ideal para quienes visitan Machu Picchu por primera vez.",
                    rutas: ["Ruta 2-A: Ruta Clásica Diseñada", "Ruta 2-B: Terraza Inferior"]
                },
                {
                    nombre: "Circuito 3 – Machu Picchu Realeza",
                    descripcion: "Enfocado en rincones exclusivos y rutas menos concurridas.",
                    rutas: ["Ruta 3-A: Montaña Machu Picchu", "Ruta 3-B: Ruta Realeza Diseñada", "Ruta 3-C: Gran Caverna (solo temporada alta)", "Ruta 3-D: Huayna Picchu – Huchuy Picchu (solo temporada alta)"]
                }
            ],
            incluye: [
                "Desayuno o Box Lunch",
                "Traslado desde Cusco a Ollantaytambo (ida y retorno)",
                "Tren turístico (ida y retorno)",
                "Bus Consettur Aguas Calientes – Machu Picchu (ida y retorno)",
                "Boleto de ingreso a Machu Picchu",
                "Guía profesional bilingüe"
            ],
            noIncluye: [
                "Alimentación no mencionada",
                "Entradas a atractivos fuera del tour",
                "Gastos extras o personales"
            ],
            recomendaciones: [
                "Pasaporte o DNI vigente",
                "Mochila pequeña con aperitivos y agua",
                "Ropa ligera y abrigo según temporada",
                "Poncho de lluvia y repelente",
                "Dinero extra en soles"
            ],
            imagen: "/cusco/machu-picchu-cusco.avif"
        },
        {
            dia: "DÍA LIBRE + TRASLADO AL AEROPUERTO",
            descripcion: [
                `Disfruta de tu último día en Cusco a tu propio ritmo, recorriendo mercados, museos, plazas y calles históricas. Luego tendrás tu traslado al aeropuerto o terminal terrestre, con la opción de dejar tus maletas en el hotel hasta la hora de tu salida.`
            ],
            incluye: [
                "Desayuno en el hotel", 
                "Traslado al aeropuerto o terminal terrestre", 
                "Check-out a las 09:00 am", 
                "Storage en el hotel para maletas"
            ],
            noIncluye: [
                "Alimentos no mencionados", 
                "Gastos extras"
            ],
            recomendaciones: [
                "Confirmar horario de vuelo o bus",
                "Comprar souvenirs con anticipación",
                "Mantener a la mano su DNI o pasaporte"
            ],
            imagen: "/cusco/cusco-city.avif"
        }
    ],
    en: 
    [
        {
            dia: "CITY TOUR",
            titulo: "Welcome to Cusco!",
            descripcion: [
                `Reception at the airport or bus terminal. Upon arrival, our staff will be waiting for you with a company sign. The transfer, duly identified with their ID, will give you a brief explanation of the program while we transfer you to the hotel. Upon arrival, you will be greeted with a traditional coca tea while we check you in and escort you to your room for accommodation.`,
                `First Tour – Archaeological City Tour (Half Day). In the afternoon, we'll begin our first tour. The tour vehicle will pick you up from your hotel to visit the five most important archaeological sites in Cusco. This tour lasts approximately five hours and includes:`
            ],
            atractivos: [
                { nombre: "Qoricancha (Temple of the Sun)", descripcion: "main Inca religious center." },
                { nombre: "Sacsayhuamán", descripcion: "majestic fortress with panoramic views of the city." },
                { nombre: "Qenqo", descripcion: "ceremonial center dedicated to Pachamama (Mother Earth)." },
                { nombre: "Puka Pukara", descripcion: "former military and control center." },
                { nombre: "Tambomachay", descripcion: "known as the Temple of Water, dedicated to the worship of the vital liquid." }
            ],
            descripcionFinal: "Finally, we will return to the Plaza de Armas in Cusco, where the tour will conclude.",
            incluye: [
                "Reception at Jorge Chávez Airport or bus terminal",
                "Transfer to the hotel and assistance with check-in (11:00 am)",
                "Tourist mobility during the tour",
                "Tickets to all attractions",
                "Professional bilingual guide",
                "1 night's accommodation in Cusco"
            ],
            noIncluye: [
                "Feeding",
                "Extra personal expenses"
            ],
            recomendaciones: [
                "Small backpack",
                "Warm clothing (as appropriate)",
                "Snacks for the road",
                "sunglasses",
                "Sun block"
            ],
            imagen: "/cusco/qenqo.avif"
        },
        {
            dia: "TOUR TO MACHU PICCHU FROM CUSCO",
            descripcion: [
                `The second day of our itinerary is dedicated to the most anticipated destination for every traveler: the Inca Citadel of Machu Picchu, one of the New Seven Wonders of the World.`,
                `We'll begin with a transfer from Cusco to Ollantaytambo to board the tourist train to Aguas Calientes (Machu Picchu Town), enjoying a scenic tour surrounded by mountains and Andean landscapes.`,
                `In Aguas Calientes, you can visit attractions such as the artisan market, hot springs, the butterfly farm, and the Machu Picchu Site Museum before starting your guided tour.`,
                `Our guide will accompany you on a 2- to 3-hour tour of Machu Picchu, discovering its main temples, terraces, and the classic panoramic view from the top of the citadel. After the experience, we will descend by bus to Aguas Calientes and finally return by train to Ollantaytambo and then by tourist vehicle to Cusco.`,
                `🏔️ Tours and Routes Available at Machu Picchu: Currently, Machu Picchu offers three types of official tours, each with different routes so you can experience your favorites. Space is limited and fills up quickly, so we recommend booking in advance.`
            ],
            circuitos: [
                {
                    nombre: "Circuit 1 – Panoramic",
                    descripcion: "Perfect for those seeking spectacular views and unforgettable landscapes.",
                    rutas: ["Route 1-A: Machu Picchu Mountain", "Route 1-B: Upper Terrace", "Route 1-C: Intipunku Entrance (high season only)", "Route 1-D: Inka Bridge (high season only)"]
                },
                {
                    nombre: "Circuit 2 – Classic",
                    descripcion: "The most popular tour, ideal for first-time visitors to Machu Picchu.",
                    rutas: ["Route 2-A: Classic Designed Route", "Route 2-B: Lower Terrace"]
                },
                {
                    nombre: "Circuit 3 – Machu Picchu Royalty",
                    descripcion: "Focused on exclusive corners and less crowded routes.",
                    rutas: ["Route 3-A: Machu Picchu Mountain", "Route 3-B: Designed Royalty Route", "Route 3-C: Great Cavern (high season only)", "Route 3-D: Huayna Picchu – Huchuy Picchu (high season only)"]
                }
            ],
            incluye: [
                "Breakfast or Box Lunch",
                "Transfer from Cusco to Ollantaytambo (round trip)",
                "Tourist train (round trip)",
                "Consettur Bus Aguas Calientes – Machu Picchu (round trip)",
                "Entrance ticket to Machu Picchu",
                "Professional bilingual guide"
            ],
            noIncluye: [
                "Food not mentioned",
                "Tickets to attractions outside the tour",
                "Extra or personal expenses"
            ],
            recomendaciones: [
                "Valid passport or ID",
                "Small backpack with snacks and water",
                "Light clothing and coat depending on the season",
                "Rain poncho and repellent",
                "Extra money in soles"
            ],
            imagen: "/cusco/machu-picchu-cusco.avif"
        },
        {
            dia: "FREE DAY + TRANSFER TO THE AIRPORT",
            descripcion: [
                `Enjoy your last day in Cusco at your own pace, exploring markets, museums, plazas, and historic streets. You'll then be transferred to the airport or bus terminal, with the option of leaving your bags at your hotel until your departure time.`
            ],
            incluye: [
                "Breakfast at the hotel", 
                "Transfer to the airport or bus terminal", 
                "Check-out at 09:00 am", 
                "Hotel luggage storage"
            ],
            noIncluye: [
                "Foods not mentioned", 
                "Extra expenses"
            ],
            recomendaciones: [
                "Confirm flight or bus schedule",
                "Buy souvenirs in advance",
                "Keep your ID or passport handy"
            ],
            imagen: "/cusco/cusco-city.avif"
        }
    ]
};