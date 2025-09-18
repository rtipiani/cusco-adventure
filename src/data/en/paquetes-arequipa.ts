export interface Itinerario {
  	horarios: string;
  	detalle: string[];
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
    	titulo: "Colca Canyon",
    	slug: "canon-del-colca",
    	descripcion:
      		"Colca Canyon Tour from Arequipa: Experience the condor's flight, Andean villages, and breathtaking landscapes.",
    	etiqueta: "RECOMMENDED",
    	imagen: "/paquetes-arequipa/canon-del-colca.avif",
    	itinerario: {
      		horarios: "SCHEDULE: 3:30 AM – 5:00 PM",
      		detalle: [
        		"It starts very early, from 3:00 to 3:30 am. We will pick you up from your accommodation (as long as it is within the historic center of the city) to head to the Colca Valley.",
        		"After approximately 3 hours, we will arrive in Chivay, where we will have breakfast.",
        		"We then head to the Cruz del Cóndor (travel time: approximately 1.5 hours). This sacred and mystical site is where we can admire one of the deepest canyons in the world and is home to the Condor Sanctuary, a viewing point for the spectacular flight of the Condor.",
        		"We continue the tour, stopping at all the viewpoints and exploring attractions such as pre-Inca and Inca terraces.",
        		"From the Antahuilque viewpoint, in the town of Pinchollo, hanging tombs and lithomodels can be seen.",
        		"In the town of Maca, the most beautiful colonial-era church stands out: Santa Ana. In Yanque, near the river, you can enjoy thermal medicinal waters with temperatures ranging from 30° to 34°.",
        		"Optional: We find activities such as Zip Lining.",
        		"12:00 noon. The buffet lunch will be served in the picturesque town of Chivay.",
				"Then we returned to Arequipa.",
				"On the way we will stop at the Mirador de los Volcanes (4,910 m.a.s.l.), from where you can see the Chila mountain range, the snow-capped mountains of Ampato (where the Inca girl Juanita was found) and Hualca Hualca, the active Sabancaya volcano, the Chachani Misti and Pichu Pichu chains, and others.",
				"Along the route, we'll find thawing ice sheets, the Tocra Wetlands (where you can see a variety of wild birds), llamas and alpacas in their habitat, and Pampa Cañahuas (Aguada Blanca and Salinas National Reserve), where we'll see wild vicuñas protected by Peruvian law.",
				"Arrival in Arequipa at approximately 5:00 p.m.",
				"End of our services, Colca Canyon Tour from Arequipa."
      		],
      		incluye: [
        		"Pick up from your hotel (Arequipa Center).",
        		"Professional tour guide.",
        		"Permanent assistance.",
        		"Continental breakfast.",
        		"Tourist mobility."
      		],
      		noIncluye: [
        		"Tourist Ticket to access Colca: Peruvian: S/.40.00 / Student (child): S/.5.00, Foreigner: S/.70.00 / Student (child): S/.20.00, Entrance ticket to the Hot Springs (Optional): S/.15.00",
       	 		"Gifts, souvenirs.",
        		"Snacks and drinks during the tour.",
        		"Tips for service (optional, voluntary).",
        		"Lunch buffet service."
      		]
    	}
  	},
  	{
    	dias: "Medio Día",
    	titulo: "Rafting in Arequipa – Chili River",
    	slug: "rafting-rio-chili",
    	descripcion:
      		"Enjoy the adrenaline rush of rafting on the Chili River with class II, III, and IV rapids, surrounded by breathtaking scenery.",
    	etiqueta: "",
    	imagen: "/paquetes-arequipa/rafting.avif",
    	itinerario: {
      		horarios: "Tour duration: 3 hours",
      		detalle: [
        		"Pick-up and transfer We will begin the adventure by picking up our passengers at the previously agreed meeting point.",
        		"Travel to the river We will head towards the Chili River, located just 20 minutes from the city.",
        		"Safety Briefing Before starting the activity, we will hold a briefing on safety measures and techniques to ensure you enjoy the experience to the fullest.",
        		"Equipment We will provide each participant with the necessary clothing for the activity, ensuring a proper fit before entering the water.",
        		"Beginning of the Adventure Once settled in the rafts, we will begin the descent down the river, facing level II, III and IV rapids, which guarantee an exciting and safe experience.",
        		"Equipment and Safety: Each raft will be guided by an experienced captain. Additionally, and depending on the group size, we will have safety kayakers, highly trained professionals who will navigate individually to provide assistance if necessary.",
        		"Enjoy the surroundings During the tour, participants will be able to admire the impressive landscapes offered by the Chili River Canyon, making the journey an unforgettable experience.",
				"Return At the end of the activity, we will transfer passengers back to the starting point, ensuring a complete and worry-free experience."
      		],
      		incluye: [
        		"Minibus transportation (round trip).",
        		"Complete rafting equipment.",
        		"Spanish instructor.",
        		"Safety kayak.",
        		"Rafting guide.",
        		"Pick up from the agreed point."
      		],
      		noIncluye: [
        		"Photographs of the experience.",
        		"Tips.",
        		"Extra expenses.",
        		"Snacks.",
        		"Travel insurance.",
        		"Meal."
      		]
    	}
  	},
  	{
    	dias: "Full Day",
    	titulo: "Capua Falls and Hot Springs",
    	slug: "cataratas-capua",
    	descripcion:
      		"Explore the Capua Waterfall in Yura and relax in its hot springs in a unique natural setting.",
    	etiqueta: "",
    	imagen: "/paquetes-arequipa/aguas-termales.avif",
    	itinerario: {
      		horarios: "SCHEDULE: 6:00 PM – 4:00 PM",
      		detalle: [
        		"Pickup and Departure: The tour begins with pickup from your hotel, located near Arequipa's Historic Center, starting at 6:00 a.m.",
        		"Transfer to Yura: We will head to the town of Yura, known for its historic lime kilns and charming natural surroundings.",
        		"Hiking route to Capua Waterfall: Once in Yura, we will begin our hike to the impressive Capua Waterfall.",
        		"During the tour, you can enjoy exceptional landscapes that include streams, a small canyon, waterfalls, and natural caves.",
        		"Time at Capua Falls: Upon arrival at the falls, you'll have free time to relax, explore the surroundings, and capture memorable photographs of this wonderful place.",
        		"Visit to the hot springs and the historic center of Yura: We will continue our tour to the Yura hot springs, renowned for their medicinal properties.",
        		"We'll also visit Yura's Historic Center to learn more about its heritage and culture.",
				"Return to Arequipa: We will conclude the tour with the return to Arequipa, with an estimated arrival time of 4:00 p.m."
      		],
      		incluye: [
        		"Pick up from your hotel in Arequipa (historic city center).",
        		"Round trip transportation.",
        		"Professional tour guide.",
        		"First aid kit."
      		],
      		noIncluye: ["Extra expenses.", "Feeding."]
    	}
  	},
  	{
    	dias: "Full Day",
    	titulo: "Salinas Lagoon of Arequipa",
    	slug: "laguna-de-salinas",
    	descripcion:
      		"Marvel at the Salinas Lagoon, its natural habitats, and Andean flamingos on this nature tour near Arequipa.",
    	etiqueta: "OFFER",
    	imagen: "/paquetes-arequipa/laguna-de-salinas.avif",
    	itinerario: {
      		horarios: "SCHEDULE: 6:30 PM – 4:30 PM",
      		detalle: [
        		"We begin the tour to Arequipa's Salinas Lagoon with pickup from their hotels, especially those located in the city center.",
        		"We will then begin our tour to Salinas Lagoon, where our first stop will be the volcano viewpoint in the Chiguata district, allowing us to observe the Misti, Chachani, and Pichipichu volcanoes.",
        		"Afterwards, we'll visit the town of Chiguata, where we'll be able to take a short city tour. You'll also have time to enjoy breakfast in this magical little town.",
        		"Continuing the tour, we'll pass Simbral, located at approximately 4,200 meters above sea level, where you can observe the typical flora of the area. After a short walk, we'll reach Salinas Lagoon, where you can see reflecting pools—if you take the tour between January and March, of course—as well as the local fauna, including flamingos and llamas.",
        		"Even if you take the tour between April and December, you'll be able to visit the salt extraction centers, which will allow you to take excellent photographs.",
        		"Continuing our tour, we'll head toward the Lojen hot springs for a relaxing soak. An optional activity is a visit to the Uzuña lagoon and dam, where kayaking and fishing are available.",
        		"After finishing the tour, there will be time in the town of Chiguata for lunch before returning to the city.",
        		"Finally, to conclude the tour to Arequipa's Salinas Lagoon, we will return to the city at approximately 5:00 p.m., dropping off passengers near the main square."
      		],
      		incluye: [
        		"Pick up from hotel.",
        		"Shared transportation.",
        		"Professional tour guide.",
        		"First aid kit."
      		],
      		noIncluye: [
        		"Food (Lunch, breakfast).",
        		"Entrance to hot springs.",
        		"Entrance ticket to the Lojen mini volcano (5 soles per person).",
        		"Tips.",
        		"Extra expenses."
      		]
    	}
  	},
  	{
    	dias: "Medio Día",
    	titulo: "City Tour Arequipa: Santa Catalina Monastery",
    	slug: "city-tour-arequipa",
    	descripcion:
      		"Tour the Plaza de Armas, colonial temples, and culminate at the Monastery of Santa Catalina, the jewel of Arequipa.",
    	etiqueta: "BEST SELLER",
    	imagen: "/paquetes-arequipa/monasterio-santa-catalina.avif",
    	itinerario: {
      		horarios: "SCHEDULE: 9:00 PM – 12:00 PM",
      		detalle: [
        		"We will begin the City Tour from Arequipa's Plaza de Armas, where we will provide a detailed explanation of the history of Arequipa Cathedral and the portals surrounding the Plaza de Armas.",
        		"Afterwards, we will head to the Church of the Society of Jesus, where we will give a brief explanation about the history of the church and its construction.",
        		"Cloisters of the Society of Jesus, located in the historic center, on the left side of the Church of the Society, with carved ashlar arches and beautiful corridors.",
        		"Tristán del Pozo House is a building that, for many architectural scholars, the pediment on the façade of this mansion is the best example of the typical ornamentation of Arequipa, Peru.",
        		"The Plaza and Church of San Francisco are one of the most beautiful buildings in the city, being the fourth temple and the third religious house.",
        		"We will visit the Monastery of Santa Catalina, considered a colonial citadel within a city. There you can see buildings built to meet the city's religious needs. It has streets and avenues, and also has its own cemetery.",
        		"12:00pm – We will conclude the tour and return you to your hotel."
      		],
      		incluye: [
        		"Pick up at the hotel.",
        		"Professional tour guide.",
        		"Entrance to the Monastery of Santa Catalina."
      		],
      		noIncluye: ["Feeding.", "Souvenirs.", "Tips."]
    	}
  	},
  	{
    	dias: "Medio Día",
    	titulo: "Sillar Route",
    	slug: "ruta-del-sillar",
    	descripcion:
      		"Discover the Añashuayco and Culebrillas quarries, the origin of ashlar, and ancient petroglyphs on a cultural tour.",
    	etiqueta: "",
    	imagen: "/paquetes-arequipa/ruta-del-sillar.avif",
    	itinerario: {
      		horarios: "SCHEDULE: 9:00 PM – 1:00 PM",
      		detalle: [
        		"9:00 a.m. – We begin our tour of the Sillar Route, a sightseeing tour steeped in history and living culture, where we visit quarries and areas where sillar originated.",
        		"The first stop we'll make is the Añashuayco Quarry, which we'll reach in approximately 45 minutes. It's currently in operation, with the quarrymen working early in the morning. Here, we can admire an immense canyon with cliffs (ignimbrite walls) several meters high, formed by the extraction process to form the Ashlars.",
        		"At this point, we'll tell you the history of ashlar, its production, and how it has always been used.",
        		"In this quarry you can see a megacarving of the Church of the Society of Jesus made by the stonemasons themselves.",
        		"We can also visit some of them so they can explain their daily work to us and show us how we can try cutting one of their stone blocks ourselves.",
        		"Next, we will head towards the Culebrillas Gorge, which is 30 minutes away from Añashuayco.",
				"Arriving at this point we will walk for approximately 20 minutes inside the small canyon that was formed by the passage of water, which has walls of 15 to 20 meters, as we enter it the walls of the canyon increase in height.",
				"At the end of the hike, we can see petroglyphs made by the Wari culture more than a thousand years ago.",
				"Before returning to the city, we will observe the Apachetas, which are stone formations placed one on top of the other. They are a symbol of gratitude toward nature and also attract good luck, creating a mystical sensation.",
				"12:00pm - We will begin the return journey to the city of Arequipa.",
				"1:00 p.m. – We will arrive in downtown Arequipa and drop you off near the main square."
      		],
      		incluye: [
        		"Pick up at the hotel.",
        		"Professional tour guide.",
        		"Tourist transportation for the entire tour."
      		],
      		noIncluye: [
        		"Entrance to the Añashuayco Quarries: S/. 5.00 (soles per person).",
        		"Entrance to the Culebrillas Quarries: S/. 5.00 (soles per person).",
        		"Feeding.",
        		"Souvenirs.",
        		"Tips."
      		]
    	}
  	}
];