export interface Itinerario {
    horarios: string;
    detalle: string | string[];
    incluye: string[];
    noIncluye: string[];
}

export interface Paquete {
    dias: string;
    titulo: string;
    slug: string;
    descripcion: string;
    etiqueta: string;
    imagen: string;
    itinerario?: Itinerario;
}

export const paquetes: Paquete[] = [
    {
        dias: "Full Day",
        titulo: "CITY TOUR VIP",
        slug: "city-tour-vip",
        descripcion:
            "Get to know the best of Cusco in a single day: Qoricancha, Sacsayhuamán, Qenqo, Puca Pucara, Tambomachay and Cristo Blanco viewpoint.",
        etiqueta: "OFFER",
        imagen: "/paquetes-cusco/qoricancha.avif",
        itinerario: {
            horarios: "SCHEDULES: MORNING SHIFTS FROM 8:50 AM – 2 PM, AFTERNOON SHIFTS FROM 1 PM – 6:00 PM",
            detalle:[
                "We'll begin the tour with pickup from your hotel in Cusco, then visit the Qoricancha or Temple of the Sun, one of the most important temples of the Inca Empire, where the fusion of Inca and colonial architecture amazes every visitor.", 
                "We'll then continue to the imposing Sacsayhuamán fortress, famous for its gigantic, perfectly assembled stone walls and the setting for the Inti Raymi festival.",
                "We'll continue to Qenqo, an Inca ceremonial center with tunnels and altars carved into the rock, and then visit the Qenqo Forest, a mystical place surrounded by rock formations. Later, we'll visit Puca Pucara, a military fortress that served as a checkpoint and security station, and the Tambomachay complex, known as the Inca Baths for its crystal-clear springs.",
                "Along the way, we'll also stop at a llama and alpaca factory, where we'll learn about llama and alpaca breeding and the Andean textile-making process. We'll end at the Cristo Blanco viewpoint, offering a spectacular panoramic view of Cusco.",
                "Finally, we will return to the historic center, near the Plaza de Armas."
            ],
            incluye: [
                "Pick up from hotel in Cusco.",
                "Tourist transportation.",
                "Professional tour guide.",
                "Entrance to tourist attractions (Partial Tourist Ticket and entrance to Qoricancha).",
                "Assistance during the tour.",
            ],
            noIncluye: ["Tips.", "Personal expenses.", "Food not mentioned."],
        },
    },
    {
        dias: "Full Day",
        titulo: "SACRED VALLEY MARAS + MORAY",
        slug: "valle-sagrado-maras-moray",
        descripcion:
            "Explore Chinchero, Moray, the Maras Salt Mines, Urubamba, Ollantaytambo, and Pisaq on a comprehensive tour of the Sacred Valley.",
        etiqueta: "",
        imagen: "/paquetes-cusco/valle-sagrado.avif",
        itinerario: {
            horarios: "SCHEDULE: 6:40 AM – 7:00 PM",
            detalle:[
                "We'll begin with pickup from your hotel in Cusco and head to Chinchero, a town steeped in tradition. We'll see its Inca walls, colonial church, and experience the textile center with local families.",
                "We'll continue to Moray, a group of circular terraces that the Incas used as an agricultural laboratory, a truly stunning site. Nearby, we'll visit the famous Maras Salt Mines, with more than 3,000 salt pits that create a unique landscape. In Urubamba, we'll enjoy a buffet lunch featuring the finest local cuisine.",
                "In the afternoon, we'll arrive at Ollantaytambo, known as `'The Last Living Inca City,'` where we'll tour its temples and cobblestone streets. Finally, we'll visit Písac, famous for its artisan market and archaeological site, from where you'll have one of the most impressive views of the Sacred Valley.",
                "We'll then return to Cusco, where the shuttle will drop you off just one block from the Plaza de Armas, in the heart of the city."
            ],
            incluye: [
                "Comfortable tourist mobility.",
                "Official professional tourism guide.",
                "Entrance fees to all the mentioned tourist attractions.",
                "Buffet lunch in Urubamba.",
            ],
            noIncluye: ["Tips.", "Personal expenses.", "Food not mentioned."],
        },
    },
    {
        dias: "Full Day",
        titulo: "TRADITIONAL SACRED VALLEY",
        slug: "valle-sagrado-tradicional",
        descripcion:
            "Discover Pisaq, Ollantaytambo, Chinchero, and the Corao Market on a cultural tour full of Andean history and tradition.",
        etiqueta: "BEST SELLER",
        imagen: "/paquetes-cusco/valle-sagrado-tradicional.avif",
        itinerario: {
            horarios: "SCHEDULE: 8:00 AM – 6:30 PM",
            detalle: [
                "We will begin with pickup from your hotel in Cusco, heading to the traditional Corao Market, where you can admire handicrafts, textiles, and local products.",
                "We will continue to the Taray Viewpoint, from where you will enjoy a spectacular view of the Sacred Valley and its agricultural terraces.",
                "Our tour then continues to the archaeological complex of Pisaq, famous for its terraces and Inca temples high on the mountain. Next, we will visit the town of Pisaq, known for its colorful handicraft market, ideal for purchasing souvenirs.",
                "Afterwards, we will head to Urubamba, where we will enjoy a delicious buffet lunch with the best flavors of the region.",
                "In the afternoon, we will visit the impressive fortress of Ollantaytambo, known as 'the last living Inca town,' with its temples, terraces, and stone streets that still preserve their ancestral essence.",
                "Finally, we will return to the city of Cusco, arriving near the Main Square (Plaza de Armas)."
            ],
            incluye: [
                "Pickup from hotel in Cusco.",
                "Round-trip tourist transportation.",
                "Official tour guide.",
                "Entrance to archaeological sites (Partial Tourist Ticket).",
                "Buffet lunch in Urubamba.",
            ],
            noIncluye: [
                "Tips.",
                "Personal expenses.",
                "Drinks at lunch."
            ],
        },
    },
    {
        dias: "Full Day",
        titulo: "MARAS + MORAY",
        slug: "maras-moray",
        descripcion:
            "Visit Chinchero, the agricultural laboratory of Moray, and the famous Maras Salt Mines on a full day surrounded by Andean landscapes.",
        etiqueta: "",
        imagen: "/paquetes-cusco/maras-moray.avif",
        itinerario: {
            horarios: "SCHEDULE: 8:30 AM – 2:30 PM",
            detalle: [
                "We will begin with pickup from your hotel in Cusco to head to the picturesque town of Chinchero, known as the 'land of the rainbow.' Here, we will visit a traditional textile center (Awana), where local families will show us the ancestral techniques of weaving and dyeing with natural products, keeping the Inca heritage alive.",
                "We will continue to the agricultural complex of Moray, an astonishing Inca laboratory composed of circular terraces that were used to experiment with different microclimates and crops.",
                "Next, we will head to the famous Maras Salt Mines, an impressive set of more than 3,000 salt ponds, exploited artisanally since pre-Inca times. The contrast of the white salt pools with the mountainous landscape makes it a perfect place for unforgettable photographs.",
                "Finally, we will return to the city of Cusco, arriving near the Main Square (Plaza de Armas)."
            ],
            incluye: [
                "Pickup from hotel in Cusco.",
                "Round-trip tourist transportation.",
                "Professional tour guide.",
                "Entrance ticket to Moray (Partial Tourist Ticket).",
                "Entrance ticket to Maras Salt Mines.",
            ],
            noIncluye: [
                "Souvenir purchases.",
                "Meals."
            ],
        },
    },
    {
        dias: "Full Day",
        titulo: "MACHU PICCHU",
        slug: "machu-picchu-full-day",
        descripcion:
            "Travel on a panoramic train, take the Consetur bus, and enjoy a guided tour of Machu Picchu, wonder of the modern world.",
        etiqueta: "RECOMMENDED",
        imagen: "/paquetes-cusco/machu-picchu.avif",
        itinerario: {
            horarios: "According to train schedule",
            detalle: [
                "Our tour begins with pickup from your hotel in Cusco according to the train schedule, then traveling to the Ollantaytambo station to enjoy a beautiful train ride (Expedition, Vistadome, Observatory) surrounded by Andean landscapes until arriving at the town of Aguas Calientes.",
                "From here, our assistant will accompany you to board the Consetur buses on a 30-minute journey that will take us to the entrance of the Sanctuary. Our professional tour guide will be waiting at the Machu Picchu gate to begin a guided tour of approximately 2.5 hours, exploring the temples, ceremonial precincts, terraces, and viewpoints that make this world wonder a unique place.",
                "At the end of the guided tour, you will have free time to explore on your own and take unforgettable photos. Afterwards, we will return by bus to Aguas Calientes, where you can use your time to visit places such as the Butterfly House, the Machu Picchu Museum, the Mandor waterfalls, or relax in the famous hot springs. Also, don’t forget to stroll through the town’s picturesque streets.",
                "➡️ Important: We recommend booking in advance, as access to Machu Picchu is limited and tickets sell out quickly. There are 3 available circuits, so it is essential to choose the one that best suits your interests to fully enjoy this experience.",
                "At the end of the day, we will board the return train and, from Ollantaytambo, a tourist transport will take you back to Cusco.",
                "An unforgettable experience that will forever remain in your travel memory."
            ],
            incluye: [
                "Pickup from hotel in Cusco.",
                "Tourist transport Cusco – Ollantaytambo – Cusco.",
                "Round-trip train tickets.",
                "Consetur bus tickets (Aguas Calientes – Machu Picchu – Aguas Calientes).",
                "Entrance ticket to Machu Picchu Sanctuary.",
                "Guided tour in Machu Picchu with professional guide.",
            ],
            noIncluye: [
                "Meals not mentioned.",
                "Entrance tickets to Museum, Waterfalls, Hot Springs, or Butterfly House.",
                "Personal expenses and tips.",
            ],
        },
    },
    {
        dias: "Full Day",
        titulo: "RAINBOW MOUNTAIN TREKKING",
        slug: "montana-colores-trekking",
        descripcion:
            "Trek to the impressive Rainbow Mountain – Vinicunca, surrounded by high-Andean landscapes and majestic glaciers.",
        etiqueta: "",
        imagen: "/paquetes-cusco/trekking-vinicunca.avif",
        itinerario: {
            horarios: "SCHEDULE: 4:30 AM – 5:00 PM",
            detalle: [
                "Very early, around 4:30 am, we will pick you up from your hotel in Cusco to begin the adventure towards the famous Rainbow Mountain – Vinicunca. After about two hours of travel in a tourist bus, we will arrive at the town of Cusipata, where a delicious buffet breakfast awaits us to give us the necessary energy for the hike.",
                "We will continue for one more hour by transport until we reach the starting point of the trek. From there, we will begin a hike of approximately 1 hour and 30 minutes, surrounded by impressive high-Andean landscapes, glaciers, and herds of llamas and alpacas that accompany the route.",
                "Upon reaching the summit, at more than 5,000 meters above sea level, we will encounter the wonderful Rainbow Mountain of Vinicunca, a unique natural spectacle that dazzles with its reddish, turquoise, and golden hues. Here, our guide will tell you about the history, geology, and cultural significance of this magical place, as well as give you enough time to take photos and enjoy the experience.",
                "We will then begin the descent back to Cusipata, where a buffet lunch will be waiting for us. Finally, we will return to Cusco, arriving at approximately 5:00 pm."
            ],
            incluye: [
                "Pickup from hotel in Cusco.",
                "Round-trip tourist transportation.",
                "Buffet breakfast and lunch in Cusipata.",
                "Professional tour guide.",
                "Entrance to the Mountain.",
                "Trekking poles.",
                "Oxygen tank.",
            ],
            noIncluye: [
                "Tips.",
                "Personal expenses.",
                "Horse or ATV rental.",
            ],
        },
    },
    {
        dias: "Full Day",
        titulo: "RAINBOW MOUNTAIN BY QUAD BIKE",
        slug: "montana-colores-cuatrimotos",
        descripcion:
            "Feel the adrenaline on a quad bike ride to the base of Rainbow Mountain and enjoy a unique landscape at over 5,000 m.a.s.l.",
        etiqueta: "",
        imagen: "/paquetes-cusco/cuatrimoto-en-motana-vinicunca.avif",
        itinerario: {
            horarios: "DEPARTURE TIMES: 3 AM, 4 AM, 6 AM, 8:30 AM, 10 AM",
            detalle: [
                "We will start very early with pickup from your hotel in Cusco to travel by tourist bus for about 2 hours to the town of Cusipata, where we will enjoy an energizing Andean buffet breakfast.",
                "We will then continue to the quad bike base, where we will receive a brief safety instruction and the necessary equipment (helmet and gloves). After a 15-minute practice, the most exciting part begins: a 30-minute quad bike ride through stunning high-Andean landscapes with mountains, valleys, and llamas, until reaching near the access to Rainbow Mountain.",
                "From there, we will take a short 7-minute hike to reach the summit of Vinicunca at over 5,000 m.a.s.l., where we will admire the mountain’s amazing natural colors and capture spectacular photos.",
                "At the end of the visit, we will return by quad bike to the base and then by transport back to Cusipata, where a delicious buffet lunch awaits us. Finally, we will return to Cusco around 5:00 pm, ending an unforgettable experience full of adrenaline and nature."
            ],
            incluye: [
                "Pickup from hotel in Cusco.",
                "Round-trip tourist transport.",
                "Quad bike (individual or shared).",
                "Safety equipment (helmet, gloves).",
                "Driving instruction and practice.",
                "Buffet breakfast and lunch in Cusipata.",
                "Professional tour guide.",
                "Entrance fee to the Mountain.",
                "Trekking poles.",
                "Oxygen tank.",
            ],
            noIncluye: [
                "Tips.",
                "Personal expenses.",
                "Horse or ATV rental.",
            ],
        },
    },
    {
        dias: "Full Day",
        titulo: "HUMANTAY LAKE TREKKING",
        slug: "laguna-humantay",
        descripcion:
            "Hike to the Humantay Lake, surrounded by glaciers and with breathtaking views of the Salkantay snow-capped mountain in the Andes.",
        etiqueta: "",
        imagen: "/paquetes-cusco/trekking-laguna-humantay.avif",
        itinerario: {
            horarios: "SCHEDULE: 4:30 AM – 4:45 PM",
            detalle: [
                "At 4:30 am we will pick you up from your hotel in Cusco to head by bus to the town of Mollepata (3,000 m.a.s.l.), where we will enjoy a buffet breakfast.",
                "We will then continue the journey through Andean landscapes until we reach Soraypampa camp (3,900 m.a.s.l.), the starting point of the hike. From here, we will begin the trek to Humantay Lake, an uphill route of approximately 1 hour and 30 minutes.",
                "Upon arriving at Humantay Lake (4,200 m.a.s.l.), we will admire its turquoise waters surrounded by glaciers and the imposing Salkantay snow-capped mountain. We will have time to rest, take photos, and enjoy this unique place.",
                "Afterwards, we will descend back to Soraypampa to return by bus to Mollepata, where a buffet lunch will be waiting for us. Finally, we will return to Cusco, arriving around 5:00 pm, where the transport will drop us off just one block from the Plaza de Armas."
            ],
            incluye: [
                "Pickup from hotel in Cusco.",
                "Round-trip tourist transport.",
                "Buffet breakfast and lunch in Mollepata.",
                "Professional tour guide.",
                "Entrance fee to Humantay Lake.",
                "Trekking poles.",
                "Oxygen tank.",
            ],
            noIncluye: [
                "Tips.",
                "Personal expenses.",
                "Optional horses for the ascent.",
            ],
        },
    },
    {
        dias: "Full Day",
        titulo: "MYSTICAL TOUR",
        slug: "tour-mistico",
        descripcion:
            "Spiritual connection and nature at the Abode of the Gods, City of Elves, Huasao Wetland, and the Forest of the Ents.",
        etiqueta: "",
        imagen: "/paquetes-cusco/humedal-de-huasao.avif",
        itinerario: {
            horarios: "SCHEDULE: 7:00 AM – 3:30 PM",
            detalle: [
                "Our journey begins at 8:30 AM with pickup from your hotel in Cusco. From there, we head to the Abode of the Gods, a mystical place where enormous stone-carved sculptures blend with the Andean nature, offering unique settings to admire and take photos.",
                "We continue to the magical City of Elves, an enchanted valley surrounded by ancient trees. Here, children can leave messages or offerings at the altars while enjoying an atmosphere full of stories and legends about these playful beings.",
                "Next, we head to the Huasao Wetland, a natural ecosystem full of life, perfect for birdwatching and spotting small animals. The adventure intensifies in the Forest of the Ents, where the trees seem to come alive with surprising faces and shapes.",
                "In addition, this place offers extreme activities such as giant swings and ATVs, ideal for those seeking an adrenaline rush.",
                "Finally, we return to Cusco after experiencing a journey full of magic, nature, and family fun."
            ],
            incluye: [
                "Pickup from hotel in Cusco.",
                "Round-trip tourist transport.",
                "Entrance fees to the mentioned attractions.",
                "Professional tour guide.",
            ],
            noIncluye: [
                "Meals and drinks.",
                "Optional activities in the Forest of the Ents (giant swings, ATVs, etc.).",
                "Tips or other personal expenses.",
            ],
        },
    },
    {
        dias: "Full Day",
        titulo: "SOUTH VALLEY",
        slug: "valle-sur",
        descripcion:
            "Explore the South Valley with visits to Tipón, Pikillacta, and the Sistine Chapel of Andahuaylillas on a journey full of culture.",
        etiqueta: "",
        imagen: "/paquetes-cusco/tipon.avif",
        itinerario: {
            horarios: "SCHEDULE: 9:00 AM – 3:30 PM",
            detalle: [
                "Our tour begins with pickup from your hotel in Cusco at 8:30 AM. We will travel southeast of the city to enter the South Valley.",
                "The first stop will be Tipón, an impressive Inca archaeological complex famous for its perfectly designed water channels and advanced hydraulic system, considered a true masterpiece of engineering.",
                "We continue to Pikillacta, an ancient pre-Inca city belonging to the Wari culture. Its large walls, streets, and plazas reveal the urban organization of one of the most important civilizations before the Incas.",
                "Next, we will visit the Church of Andahuaylillas, known as the 'Sistine Chapel of America,' due to the beauty of its murals, paintings, and baroque altars covered in gold leaf.",
                "Finally, we will make a stop in the picturesque town of Saylla, famous for its delicious chicharrones (optional for lunch). Afterwards, we will return half a block from Cusco’s main square with our hearts full of culture, history, and tradition."
            ],
            incluye: [
                "Pickup from hotel in Cusco.",
                "Round-trip tourist transport.",
                "Partial Cusco Tourist Ticket (BTC) for Tipón and Pikillacta.",
                "Entrance ticket to the Church of Andahuaylillas.",
                "Professional tour guide.",
                "Entrances to Tipón, Pikillacta, and Andahuaylillas (if purchasing the Tourist Ticket and church entrance)."
            ],
            noIncluye: [
                "Meals (optional in Saylla).",
                "Tips or other personal expenses."
            ],
        },
    },
    {
        dias: "Half Day",
        titulo: "SCENIC BUS 180°",
        slug: "bus-escenico-180",
        descripcion:
            "Enjoy a panoramic tour on a scenic bus through Cusco with live dances, culture, and interactive experiences.",
        etiqueta: "",
        imagen: "/paquetes-cusco/bus-escenico.avif",
        itinerario: {
            horarios: "SCHEDULE: 2:00 PM – 6:10 PM",
            detalle: [
                "We begin our tour at 2:00 PM in the historic center from the Plaza de Armas, where our guide will share the fascinating history of this magnificent place, one of the most beautiful in South America. We head along Av. El Sol towards the temple of Qoricancha, the golden enclosure of the Incas, receiving detailed explanations about its history.",
                "We continue our journey admiring the beautiful Great Historical Mural, a work by the renowned Cusco artist Juan Bravo Vizcarra. On Av. El Sol, we board the Scenic Bus to enjoy a panoramic view of the city until we reach the Cristo Blanco viewpoint, where we capture stunning images of the Historical Capital of Peru.",
                "As the bus moves forward, we are surprisingly greeted by iconic characters from the Paucartambo festival, such as Majeño, Pablitos, Saqras, and Kukuli, who delight us with their dances from the comfort of our seats until we arrive at Huayllarccocha Lagoon, where our cast stages the dramatization of Kukuli’s abduction. The experience culminates in a select tourist restobar, where we witness the preparation of the highlighted drink, the 'Pisco Sour,' internationally renowned.",
                "After its preparation, we taste this exquisite beverage with an excellent view of the city, and then return to the city of Cusco."
            ],
            incluye: [
                "Cusco Scenic Bus 180.",
                "Professional tour guide.",
                "Dances along the route.",
                "Dramatization of Kukuli’s abduction.",
                "Interaction with South American camelids.",
                "Pisco Sour demonstration and tasting."
            ],
            noIncluye: [
                "Meals not mentioned.",
                "Tips (optional)."
            ],
        },
    },
    {
        dias: "Half Day",
        titulo: "ABODE OF THE GODS ON ATV",
        slug: "morada-dioses-cuatrimoto",
        descripcion:
            "ATV adventure to the Abode of the Gods, a sacred space with stone-carved sculptures and unique landscapes.",
        etiqueta: "",
        imagen: "/paquetes-cusco/morada-de-los-dioses.avif",
        itinerario: {
            horarios: "DEPARTURES: 9 AM, 11 AM, 2 PM, 3 PM",
            detalle: [
                "We begin the adventure with pickup from your hotel, followed by a 20-minute private transfer to our base located in the Tica Tica sector. There you will receive a brief safety talk along with the necessary equipment (helmet and gloves), plus a quick practice session to familiarize yourself with the ATV.",
                "Once ready, we start the ride of approximately 35 minutes on ATVs through high-Andean landscapes that will take us to the Abode of the Gods, a space where stone-carved sculptures come to life, majestically depicting Andean gods, mythological figures, and symbols of Inca culture.",
                "Our professional guide will accompany you throughout the tour, sharing stories, legends, and the meaning behind each sculpture.",
                "You will have free time to explore on your own, take pictures, and connect with the energy of the place.",
                "Then, we will get back on the ATVs to return to the base, and from there our private transport will take us back to Cusco, finishing the tour at Plazoleta Regocijo, right in the historic center of the city."
            ],
            incluye: [
                "Pickup from the hotel.",
                "Private transportation Cusco – Base – Cusco.",
                "Individual or shared ATV.",
                "Safety equipment (helmet, gloves).",
                "Driving instruction and practice.",
                "Professional tour guide.",
                "Entrance ticket to the Abode of the Gods."
            ],
            noIncluye: [
                "Meals.",
                "Tips.",
                "Personal expenses or services not mentioned."
            ],
        },
    },
    {
        dias: "Half Day",
        titulo: "MARAS AND MORAY ON ATVS",
        slug: "maras-moray-cuatrimotos",
        descripcion:
            "Ride ATVs through the Sacred Valley landscapes, visiting Moray and the impressive Maras Salt Mines in half a day.",
        etiqueta: "",
        imagen: "/paquetes-cusco/maras-y-moray-en-cuatrimoto.avif",
        itinerario: {
            horarios: "SCHEDULES: MORNING SHIFT 6:50 AM – 1 PM, AFTERNOON SHIFT 1 PM – 6:30 PM",
            detalle: [
                "We will begin with pickup from your hotel in Cusco, traveling towards the Sacred Valley while enjoying views of snow-capped mountains, farmlands, and picturesque Andean villages.",
                "After about 1 hour and 30 minutes, we arrive at Cruzpata, the starting point of the adventure. Here you will receive your safety gear (helmet, gloves) and a brief driving lesson to get familiar with the ATV.",
                "The route starts toward Moray, riding along dirt roads surrounded by stunning landscapes. At this Inca archaeological site, we will discover the famous circular terraces, used as an agricultural laboratory in ancient times.",
                "We then continue to Maras, crossing beautiful Andean scenery. From there we transfer by tourist bus to the impressive Maras Salt Mines, a unique site with over 3,000 salt ponds that have been exploited artisanally since Inca times.",
                "At the end, we return on ATVs to Cruzpata and then by bus back to Cusco, arriving approximately at your hotel."
            ],
            incluye: [
                "Pickup from hotel in Cusco.",
                "Round-trip tourist transportation.",
                "Individual or shared ATV.",
                "Driving instruction and practice.",
                "Safety equipment (helmet, gloves).",
                "Professional tour guide.",
                "Entrance fees to Moray and Maras Salt Mines."
            ],
            noIncluye: [
                "Tips.",
                "Meals.",
                "Personal expenses."
            ],
        },
    },
    {
        dias: "Full Day",
        titulo: "QESWACHAKA BRIDGE",
        slug: "puente-qeswachaka",
        descripcion:
            "Visit the Inca suspension bridge of Q’eswachaka and enjoy the circuit of 4 lagoons surrounded by unique Andean landscapes.",
        etiqueta: "",
        imagen: "/paquetes-cusco/puente-qeswachaca.avif",
        itinerario: {
            horarios: "SCHEDULE: 4:30 AM – 5:30 PM",
            detalle: [
                "We begin with pickup from your hotel in the historic center of Cusco. We head south in tourist transport until we reach the town of Cusipata, where we will enjoy a delicious Andean breakfast.",
                "We continue to the Combapata Viewpoint, from where we can observe the impressive confluence of the Salcca and Vilcanota rivers. Then we visit Pampamarca Lagoon with a brief guided explanation and continue to the Pabellones Volcano, a natural spot ideal for exploring and taking photographs.",
                "Our next stop is the district of Yanaoca for a short break for services and purchases. We then head to the main attraction: the Inca Q’eswachaka Bridge, located over the Apurímac River at more than 3,700 m.a.s.l. Here we will enjoy a guided visit of about 1 hour to learn the history of this suspension bridge made of ichu (Andean grass), unique in the world and renewed every year by local communities. You will have free time to walk across the bridge, take photos, and live this ancestral experience.",
                "At midday, we continue towards Tungasuca and the 4 Andean lagoons: Pampamarca, Asnacocha, Acopia, and Pomacanchi, ideal places to connect with nature, observe birds, and enjoy unique landscapes. Afterwards, we will savor a countryside lunch.",
                "Finally, we return to Cusco, arriving around 5:00 p.m., concluding a cultural and natural journey full of Inca history and tradition."
            ],
            incluye: [
                "Pickup from hotel in Cusco.",
                "Round-trip tourist transportation.",
                "Professional tour guide.",
                "Entrance ticket to Q’eswachaka Bridge.",
                "Breakfast and buffet lunch.",
                "First aid kit and oxygen tank."
            ],
            noIncluye: [
                "Tips.",
                "Personal expenses."
            ],
        },
    },
    {
        dias: "Full Day",
        titulo: "SEVEN LAGOONS OF AUSANGATE",
        slug: "siete-lagunas-de-ausangate",
        descripcion:
            "Trek through the circuit of 7 lagoons at the foot of Ausangate mountain, surrounded by snow-capped peaks and relaxing hot springs.",
        etiqueta: "",
        imagen: "/paquetes-cusco/7-lagunas-de-ausangate.avif",
        itinerario: {
            horarios: "SCHEDULE: 4:30 AM – 6:40 PM",
            detalle: [
                "Our adventure begins very early with pickup from your hotel in Cusco to head in private transport towards the community of Pacchanta, located at the foot of the majestic Ausangate glacier. Upon arrival, a local family will welcome us with a traditional Andean breakfast to give us the energy needed to start the hike.",
                "We begin the trek through the Andean range towards the circuit of the 7 Lagoons of Ausangate, surrounded by unique landscapes with snow-capped mountains and impressive glaciers.",
                "The first stop will be at Comercocha Lagoon or 'green lagoon,' followed by the beautiful Patacocha, Azulcocha, and China Otorongo lagoons, each with colors ranging from turquoise, deep blue, to emerald green. We continue visiting the Otorongo Macho, Alqacocha, and Pucacocha lagoons, completing a route of approximately 15 km in pure nature.",
                "During the journey, our guide will share with you stories and traditions of the area, as well as provide time for photographs at each lagoon. Then we return to Pacchanta, where a typical regional lunch awaits us.",
                "To finish in the best way, those who wish can relax in the hot springs of Pacchanta, enjoying the view of Ausangate before returning to Cusco, arriving around 6:00 p.m."
            ],
            incluye: [
                "Pickup from hotel in Cusco.",
                "Round-trip tourist transportation.",
                "Traditional breakfast and lunch.",
                "Professional tour guide.",
                "Entrance fees for 7 Lagoons.",
                "First aid kit and oxygen tank."
            ],
            noIncluye: [
                "Entrance to Pacchanta hot springs.",
                "Tips (optional).",
                "Personal expenses not mentioned."
            ],
        }
    },
    {
        dias: "Full Day",
        titulo: "WAQRAPUKARA",
        slug: "waqrapukara",
        descripcion:
            "Trekking adventure to Waqrapukara, the imposing Inca fortress shaped like horns with spectacular views.",
        etiqueta: "",
        imagen: "/paquetes-cusco/wakrapukara.avif",
        itinerario: {
            horarios: "SCHEDULE: 4:30 AM – 6:00 PM",
            detalle: [
                "We begin the adventure very early with pickup from your hotel in Cusco around 4:30 a.m., then set out on a tourist transport trip of about 2 hours to Cusipata, where we will enjoy a delicious Andean buffet breakfast.",
                "We continue the route for approximately 2 more hours until we reach the town of Santa Lucía, from where we start a 1-hour hike through Andean landscapes, surrounded by valleys, mountains, and the typical flora and fauna of the region. At the highest point of the trek, we will pause to admire the spectacular panoramic views and take photos.",
                "Finally, we arrive at the impressive archaeological complex of Waqrapukara, considered an ancient Inca political and religious sanctuary. Our guide will provide a cultural and historical explanation about the importance of this site while we explore its terraces, enclosures, and natural viewpoints. You will also have free time to walk around and take unforgettable photos.",
                "After the visit, we return to Cusipata to enjoy a country-style lunch, and then head back to Cusco, arriving around 6:00 p.m., where the experience concludes at Plazoleta Regocijo."
            ],
            incluye: [
                "Pickup from hotel in Cusco.",
                "Round-trip tourist transportation.",
                "Buffet breakfast and lunch.",
                "Professional tour guide.",
                "First aid kit and oxygen tank.",
                "Entrance ticket to Waqrapukara.",
            ],
            noIncluye: [
                "Tips (optional).",
                "Personal expenses not mentioned."
            ],
        },
    }
];