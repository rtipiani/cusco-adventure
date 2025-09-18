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
    	titulo: "LAKE SANDOVAL",
    	slug: "lago-sandoval",
    	descripcion:
      		"Explore the Tambopata National Reserve by cruising the Madre de Dios River, hiking through the jungle, and discovering the majestic Sandoval Lake. A unique experience with flora and fauna, and an Amazonian lunch.",
    	etiqueta: "",
    	imagen: "/paquetes-puerto-maldonado/lago-sandoval.avif",
    	itinerario: {
      		horarios: "SCHEDULE: 9:00 AM – 5:00 PM",
      		detalle: [
        		"We begin the journey with a welcome at our office and a transfer to the port.",
        		"From there, we'll take a boat along the Madre de Dios River to the Tambopata National Reserve, enjoying a serene journey along the river's waters.",
        		"Upon arriving at the Reserve, we will follow a well-preserved path that will guide us for 3 kilometers (about an hour's walk) through the jungle.",
        		"On the tour, we'll be able to see a variety of animals, including up to four species of monkeys, snakes, tarantulas, tropical birds, and parrots, as we delve into the lush vegetation of the Amazon.",
        		"Upon arriving at Lake Sandoval, we will take a canoe to navigate its serene waters.",
        		"We'll walk along the right shore of the lake, where we'll investigate its biological diversity.",
        		"Here, we can observe tropical birds, herons, alligators, and, with luck, the famous giant river otter, an imposing mammal that can grow up to 2 meters in length.",
				"At noon, we'll enjoy an exquisite Amazonian meal, where we'll be able to sample typical dishes like juane, complemented by local beverages.",
				"After lunch, we will enjoy a pleasant rest in the lodge's hammocks.",
				"After the break, we'll return to the canoes to continue exploring the lake and its surrounding areas. On this section of the trip, we'll explore more wildlife species, including monkeys that often hop between the banks and other species that reside in the area.",
				"Finally, we'll begin our return to Puerto Maldonado on the boat waiting for us on the Madre de Dios River, concluding this incredible experience in the heart of the Amazon."
      		],
      		incluye: [
        		"Round-trip maritime transport across the Madre de Dios River.",
        		"Professional tour guide.",
        		"Entrance to the Tambopata National Reserve.",
        		"Local lunch."
      		],
      		noIncluye: [
        		"Meals not mentioned.",
        		"Extra expenses.",
        		"Drinks."
      		]
    	}
  	},
  	{
    	dias: "Medio Día",
    	titulo: "Piranha Fishing Tour on the Tambopata River",
    	slug: "pesca-piranas",
    	descripcion:
      		"Enjoy a unique experience fishing for piranhas in Lake Yacumama, surrounded by tropical birds, alligators, and a magical sunset.",
    	etiqueta: "",
    	imagen: "/paquetes-puerto-maldonado/pesca-de-piranas.avif",
    	itinerario: {
      		horarios:
        		"SCHEDULES: MORNING SHIFTS FROM 5:30 AM – 8:30 PM, AFTERNOON SHIFTS FROM 3:30 AM – 6:30 PM",
      		detalle: [
        		"The tour begins with pickup from your hotel in Puerto Maldonado at 3:20 p.m. We will begin our journey to Lake Yacumama, 25 minutes from the Puerto Maldonado plaza.",
        		"Transfer to Lake Yacumama (25 min from Puerto Maldonado).",
        		"Along the way you will have the opportunity to appreciate the landscape that the Madre de Dios River holds.",
        		"Upon arrival, a community member will greet us and provide us with eco-friendly rods and bait for piranha fishing.",
        		"We'll walk 7 minutes to the canoe that will take us across the waters of Lake Yacumama. You'll be able to observe a wide variety of tropical birds, including macaws, parrots, and flocks of parakeets flying freely in their natural habitat.",
        		"You'll also have the opportunity to see black caimans, which are mostly peaceful and come close enough for you to take photos.",
        		"At the end of the tour, you'll be able to witness a spectacular sunset over the lake, where the sky is filled with golden and orange hues, creating a magical atmosphere perfect for capturing unforgettable moments with your camera."
      		],
      		incluye: [
        		"Hotel transfers (round trip).",
        		"Professional tour guide.",
        		"Sun block.",
        		"Tickets to the sites to be visited."
      		],
      		noIncluye: [
        		"Tips.",
        		"Extra expenses."
      		]
    	}
  	},
  	{
    	dias: "Full Day",
    	titulo: "Macaw Clay Lick",
    	slug: "collpa-guacamayos",
    	descripcion:
      		"Visit the world's largest macaw clay lick in Tambopata, where you'll observe hundreds of birds in their natural habitat and enjoy a camping-style breakfast.",
    	etiqueta: "OFFER",
    	imagen: "/paquetes-puerto-maldonado/collpa-de-guacamayos.avif",
    	itinerario: {
      		horarios: "SCHEDULE: 3:30 AM – 4:00 PM",
      		detalle: [
        		"Pick up from centrally located hotels and take you by car along the interoceanic highway for a journey of approximately 2 hours until you reach the Tambopata River, where the motorboat awaits you and will take you for an hour and a half to the heart of the Tambopata National Reserve to reach the largest macaw clay lick in the world, the CHUNCHO Clay Lick, where hundreds of parrots and macaws gather to eat clay as a supplement to their daily diet and they do so on the side of the Tambopata River.",
        		"On the way to the clay lick, you'll have an incredible opportunity to see mammals such as capybaras, tapirs, deer, and sometimes the largest South American feline: the jaguar.",
        		"Then we have our camping breakfast.",
        		"Upon arriving at the parrot and macaw observation area, you will settle into chairs and wait for the natural bird show. Once the activity is over, you will return by boat to the HACIENDA TAMBOPATA lodge, where you will be served a delicious lunch and soft drinks, take a short break, and then take a walk in the beautiful jungle. Return to the lodge and then be transferred to the place from where you will begin your return to the city of Puerto Maldonado."
      		],
      		incluye: [
        		"Pick up from centrally located hotels.",
        		"Round-trip boat transportation.",
        		"Professional tour guide.",
        		"Eco lifeguard per person.",
        		"Rubber hiking boots.",
        		"01 camping-style breakfast per person.",
        		"01 lunch per person.",
        		"First aid kit.",
        		"Tourist SOAT insurance."
      		],
      		noIncluye: [
        		"Food not mentioned.",
        		"Personal expenses."
      		]
    	}
  	},
  	{
    	dias: "Full Day",
    	titulo: "Monkey Island – Kayak – Zipline",
    	slug: "isla-monos-kayak-tirolina",
    	descripcion:
      		"Combine adventure and nature with kayaking on the Tambopata River, ziplining through the jungle, and a visit to the famous Monkey Island.",
    	etiqueta: "",
    	imagen: "/paquetes-puerto-maldonado/isla-de-los-monos.avif",
    	itinerario: {
      		horarios: "START TIME: 9 AM – 5:30 PM",
      		detalle: [
        		"The Monkey Island + Kayak tour begins with hotel pickup at 9:00 a.m.",
        		"We'll head to the Puerto Maldonado Pier, where we'll board our kayaks and paddle for 30 minutes along the serene waters of the Tambopata River.",
        		"We continued down the river, keeping our eyes peeled for freshwater turtles, capybaras, and several species of native birds.",
        		"If we are lucky enough to have any of these fascinating creatures in their natural environment!",
        		"We'll head into the Peruvian jungle until we reach the zipline platforms, where we'll put on our harnesses and begin the adventure.",
        		"We'll then have a delicious lunch at a local restaurant, followed by a visit to the popular Monkey Island.",
        		"This place has been a refuge for various species of monkeys, including the friendly macaques. We will return to the city of Puerto Maldonado, arriving around 5:30 p.m."
      		],
      		incluye: [
        		"Round-trip maritime transport across the Madre de Dios River.",
        		"Professional tour guide.",
        		"Entrance to the places to visit.",
        		"Local lunch.",
        		"Equipment needed for each excursion."
      		],
      		noIncluye: [
        		"Meals not mentioned.",
        		"Extra expenses."
      		]
    	}
  	},
  	{
    	dias: "2D/1N",
    	titulo: "Macaw Clay Chuncho 2D/1N",
    	slug: "collpa-chuncho-2d1n",
    	descripcion:
      		"Explore the Amazon rainforest on a 2-day tour, observing nocturnal caimans, monkeys, and the impressive Chuncho macaw clay lick.",
    	etiqueta: "",
    	imagen: "/paquetes-puerto-maldonado/chuncho-de-guacamayos.avif",
    	itinerario: {
      		horarios: "SCHEDULE: 9:30 PM – 4:00 PM",
      		detalle: [
        		"Day 1 - Puerto Maldonado – Sunset – Night Caymaneo",
        		"We will start the tour with pick-up from your hotel in Puerto Maldonado between 9 and 9:30 am. We will have a 2-hour drive until we reach the Tambopata River.",
        		"Then we will board the boat and sail along the Tambopata River until we reach our Lodge, for 20 minutes.",
        		"During this first stretch, we'll have a good chance of spotting capybaras and numerous shorebirds along the riverbank. Upon arrival at the lodge, we'll have a refreshing welcome drink.",
        		"After lunch, we'll hike through the forest, which is surrounded by enormous trees and vines; you'll also be able to see different species of monkeys.",
        		"At the end of the hike, we will climb the highest canopy tower in Tambopata, a great place to view the Amazon basin. Watching the sunset from this spot is recommended.",
        		"At dusk, we will return to our lodge, take a night walk, and see black and white caimans along the banks of the Tambopata River.",
				"Finally we will have dinner and rest in our lodge.",
        		"",
        		"Day 2 - Chuncho Macaw Clay Lick – Puerto Maldonado",
        		"We start the day around 5 am, we will board a boat for 1 hour along the Tambopata River.",
        		"During the boat trip, there is a good chance of seeing shorebirds, capybaras, white caimans, and other jungle animals.",
        		"Upon reaching the clay lick, you can see green, red, blue, and yellow macaws, as well as parrots, feeding on the clay.",
        		"On the way back we will make a stop at the checkpoint, you will have the opportunity to visit the small museum.",
        		"Once at the lodge, we'll have some time to rest and pack our belongings.",
				"We will have a local lunch.",
				"We will then board the boat bound for Puerto Maldonado, then board the transport that will drop us off near the main square or hotel."
      		],
      		incluye: [
        		"Round-trip land and sea transportation.",
        		"Professional tour guide.",
        		"1 night lodge in Tambopata.",
        		"Water during the excursion.",
        		"Entrance to the Tambopata National Reserve.",
        		"2 lunches, 1 dinner, 1 breakfast.",
        		"Equipment needed for each excursion.",
				"Rubber boots (wellingtons) in the rainy season."
      		],
      		noIncluye: [
        		"Meals not mentioned.",
        		"Extra expenses.",
        		"Travel insurance.",
        		"Additional drinks."
      		]
    	}
  	}
];