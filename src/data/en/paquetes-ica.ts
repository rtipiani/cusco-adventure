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
        titulo: "Paracas + Huacachina",
        slug: "paracas-huacachina-full-day",
        descripcion:
            "Visit Paracas and its Ballestas Islands, enjoy a vineyard in Ica with a wine tasting, the Huacachina oasis, and experience tubular and sandboarding.",
        etiqueta: "OFFER",
        imagen: "/paquetes-ica/paracas.avif",
        itinerario: {
            horarios: "HOURS: 4:30 AM – 9:20 PM",
            detalle: [
                "LIMA – PARACAS We take the highway south, and our guide will introduce us, showing us the entire route.",
                "Breakfast en route. We will make a short stop to purchase our breakfast and continue our journey to Paracas.",
                "9:00 AM PARACAS – BALLESTAS ISLANDS We will begin our tour in Paracas Ballestas Islands in modern boats, using life jackets.",
                "During the tour you will be able to appreciate El Candelabro (enormous geoglyph) and we will observe an important marine fauna, guano birds such as the guanay, the booby, the zarcillo, the famous sea lions and the friendly Humboldt penguins.",
                "During the tour you will be able to appreciate El Candelabro (enormous geoglyph) and we will observe an important marine fauna, guano birds such as the guanay, the booby, the zarcillo, the famous sea lions and the friendly Humboldt penguins.",
                "We return to Paracas Bay",
                "1:00 PM LUNCH - VINEYARD IN ICA - WINE AND PISCO TASTING We will tour its facilities and learn about the wine and pisco production process, we will taste different wines such as Burgundy wine, Mass Wine, Fruit Aging, Pisco among others.",
                "Each tasting is accompanied by typical local phrases. (Lunch at the passenger's expense.).",
                "3:00 PM OASIS HUACACHINA This oasis of Huacachina, this oasis arose from the emergence of underground water currents, which allows the existence of vegetation composed of palm trees, eucalyptus and carob trees.",
                "This is an ideal place to disconnect from routine and take a break.",
                "TUBULARES AND SANDBOARDING For lovers of adventure sports, you can take the famous Tubulares (sand cars) with which you can enjoy a beautiful tour on the sand dunes of different sizes and you can also try sandboarding (boarding on the sand).",
                "BODEGA RACIMO DE UVA OR EL GARRAFÓN – CHINCHA Where we will appreciate a music show and taste wines, matured wines, Chincha sweets such as strained beans and the famous patience cookie among other products."
            ],
            incluye: [
                "Tourist mobility Lima - Paracas - Ica – Chincha - Lima.",
                "Accident insurance (Soat).",
                "Official tourist guide.",
                "Boat to the Ballestas Islands.",
                "Life jackets during the tour.",
                "Marine wildlife observation.",
                "Visit to the vineyard in Ica.",
                "Wine and piscos tasting.",
                "Visit to the Huacachina oasis.",
                "Tasting of tejas and chocotejas.",
                "Visit to the Racimo de Uva vineyard with a music show."
            ],
            noIncluye: ["Tips.", "Personal expenses.", "Feeding."]
        }
    },
    {
        dias: "2D/1N",
        titulo: "Paracas + Huacachina 2D/1N",
        slug: "paracas-huacachina-2d1n",
        descripcion:
            "Enjoy Paracas, the Ballestas Islands, a vineyard in Ica, the Huacachina oasis with tubing and sandboarding, plus a night at a hotel in Ica.",
        etiqueta: "",
        imagen: "/paquetes-ica/paracas-huacachina.avif",
        itinerario: {
            horarios: "Departure time: 4:30 AM",
            detalle: [
                "DAY 1 – PARACAS + HUACACHINA",
                "4:30 AM LIMA – PARACAS We take the highway south, and our guide will introduce us, showing us the entire route.",
                "Breakfast en route. We will make a short stop to purchase our breakfast and continue our journey to Paracas.",
                "9: OO AM PARACAS – BALLESTAS ISLANDS We will start our tour in Paracas Ballestas Islands in modern boats, using life jackets.",
                "You can see it during the tour.",
                "At the Candelabro (a huge geoglyph), we will observe important marine fauna, guano birds such as the guanay, the booby, the zarcillo, the famous sea lions and the friendly Humboldt penguins.",
                "We return to Paracas Bay.",
                "1:00 PM VINEYARD IN ICA – WINE AND PISCO TASTING We will tour its facilities and learn about the wine and pisco production process, we will taste different wines such as Burgundy wine, Mass Wine, Fruit Aging, Pisco among others.",
                "Each tasting is accompanied by typical local phrases.",
                "Free lunch at the passenger's expense.",
                "3:00 PM - HUACACHINA OASIS This oasis emerged from the emergence of underground water currents, allowing for the growth of vegetation composed of palm trees, eucalyptus trees, and carob trees. This is an ideal place to disconnect from your routine and take a break.",
                "TUBULARES AND SANDBOARDING For lovers of adventure sports, you can take the famous Tubulares (sand cars) with which you can enjoy a beautiful tour on the sand dunes of different sizes and you can also try sandboarding (boarding on the sand).",
                "01 night Hotel in Ica.",
                "",
                "DAY 2 – FREE DAY",
                "BREAKFAST AT THE HOTEL",
                "After breakfast, we'll have the morning free to use the hotel facilities.",
                "Free lunch at the passenger's expense.",
                "The guide will contact you to coordinate your return trip to Lima.",
                "BODEGA RACIMO DE UVA OR EL GARRAFÓN – CHINCHA Where we will appreciate a music show and taste wines, matured wines, Chincha sweets such as strained beans and the famous patience cookie among other products."
            ],
            incluye: [
                "Tourist mobility Lima - Paracas - Ica – Chincha - Lima.",
                "Accident insurance (Soat).",
                "Official tourist guide.",
                "Boat to the Ballestas Islands.",
                "Life jackets during the tour.",
                "Observation of sea lions, Humboldt penguins and guano birds.",
                "Visit to the vineyard in Ica.",
                "Wine, macerated wines and piscos tasting.",
                "Visit to the Huacachina oasis.",
                "Entrance to the Tourist Pier in Paracas and Huacachina.",
                "Tubulars and Sandboarding.",
                "Tasting of tejas and chocotejas.",
                "1 Night Hotel in Ica.",
                "Breakfast per night at the hotel.",
                "Visit to the Racimo de Uva vineyard. Music show, weekends only."
            ],
            noIncluye: ["Tips.", "Personal expenses.", "Feeding."]
        }
    },
    {
        dias: "Full Day",
        titulo: "Nazca – Semi-private",
        slug: "nazca-full-day",
        descripcion:
            "Fly over the Nazca Lines and discover the mystery of their geoglyphs. Enjoy the Huacachina Oasis and adventure sports.",
        etiqueta: "RECOMMENDED",
        imagen: "/paquetes-ica/nazca.avif",
        itinerario: {
            horarios: "SCHEDULE: 3:30 AM – 10:00 PM",
            detalle: [
                "LIMA – NAZCA We take the road south towards Nazca.",
                "The Nazca Lines are ancient geoglyphs located between the desert plains of Palpa and Nazca. Fly over them and learn about these impressive figures.",
                "You will be able to appreciate the main figures such as The Hummingbird, The Spider, The Condor, The Whale, The Monkey and many more.",
                "They are only visible during overflights on board aircraft.",
                "According to archaeologist María Reiche, who dedicated her life to studying the Nazca Lines, they are believed to be an astronomical calendar, the largest in the world.",
                "Lunch (At the passenger's expense).",
                "HUACACHINA OASIS This oasis emerged from the emergence of underground water currents, which allows the existence of vegetation composed of palm trees, eucalyptus trees and carob trees.",
                "This is an ideal place to disconnect from routine and take a break.",
                "TUBULARES AND SANDBOARDING For adventure sports enthusiasts, you can take the famous Tubulares (sand carts) for a beautiful ride through the sand dunes of various sizes, and you can also try sandboarding. (Optional additional cost of 38 soles)."
            ],
            incluye: [
                "Tourist mobility.",
                "Accident insurance (Soat).",
                "Official tourist guide.",
                "Nazca Lines overflight.",
                "ourist taxes for overflight.",
                "Visit to the Huacachina oasis.",
                "Entrance to tourist attractions.",
                "First aid kit."
            ],
            noIncluye: ["Tips.", "Personal expenses.", "Feeding."]
        }
    },
    {
        dias: "Full Day",
        titulo: "Nazca with the Southern Cross",
        slug: "nazca-cruz-del-sur",
        descripcion:
            "Travel by Cruz del Sur bus to Nazca, fly over the famous lines, and discover one of the world's greatest mysteries.",
        etiqueta: "",
        imagen: "/paquetes-ica/nazca-cruz-del-sur.avif",
        itinerario: {
            horarios: "SCHEDULE: FROM 11 PM TO 10 PM (Departures one day earlier, arriving in Nazca at 5:30 AM)",
            detalle: [
                "5:30 AM - Once we arrive at Nazca, our transfer will take us to the airfield so we can have breakfast and then wait for the overflight.",
                "The Nazca Lines are ancient geoglyphs found between the desert plains of Palpa and Nazca.",
                "Fly over and learn about these impressive figures.",
                "You will be able to appreciate the main figures such as The Hummingbird, The Spider, The Condor, The Whale, The Monkey and many more.",
                "They are only visible during overflights on board aircraft.",
                "According to archaeologist María Reiche, who dedicated her life to studying the Nazca Lines, they are believed to be an astronomical calendar, the largest in the world.",
                "Lunch (Passenger's own expense)",
                "2:00 PM - NAZCA – LIMA Boarding Cruz del Sur Nazca – Lima."
            ],
            incluye: [
                "Cruz del Sur bus ticket Lima – Nazca – Lima.",
                "Transfer In & Out in Nazca.",
                "Nazca Lines overflight.",
                "Tourist taxes for overflight."
            ],
            noIncluye: [
                "Tourist tax for the Nazca overflight. 77 soles paid directly.",
                "Personal Expenses.",
                "Feeding."
            ]
        }
    },
    {
        dias: "2D/1N",
        titulo: "Paracas + Huacachina + Nazca 2D/1N",
        slug: "paracas-huacachina-nazca-2d1n",
        descripcion:
            "Combine Paracas, Huacachina, and the Nazca Lines flight into a complete package with transportation, adventure, and culture.",
        etiqueta: "MÁS VENDIDO",
        imagen: "/paquetes-ica/paracas-huacachina-nazca.avif",
        itinerario: {
            horarios: "TIME: DEPARTURE 4:30 AM",
            detalle: [
                "DAY 1 – PARACAS + HUACACHINA",
                "4:30 AM LIMA – PARACAS We take the highway south, and our guide will introduce us, showing us the entire route.",
                "Breakfast en route. We will make a short stop to purchase our breakfast and continue our journey to Paracas.",
                "9:30 AM PARACAS – BALLESTAS ISLANDS We will begin our tour in Paracas Ballestas Islands in modern boats, using life jackets.",
                "During the tour you will be able to appreciate El Candelabro (enormous geoglyph) and we will observe an important marine fauna, guano birds such as the guanay, the booby, the zarcillo, the famous sea lions and the friendly Humboldt penguins.",
                "We return to Paracas Bay.",
                "1:00 PM - VINEYARD IN ICA – WINE AND PISCO TASTING We will tour its facilities and learn about the wine and pisco production process. We will taste different wines such as Burgundy wine, Mass Wine, Fruit Aging, Pisco, among others.",
                "Each tasting is accompanied by typical local phrases.",
                "Free lunch at the passenger's expense.",
                "3:00 PM OASIS HUACACHINA This oasis emerged from the emergence of underground water currents, which allows the existence of vegetation composed of palm trees, eucalyptus trees and carob trees.",
                "This is an ideal place to disconnect from routine and take a break.",
                "TUBULARES AND SANDBOARDING For lovers of adventure sports, you can take the famous Tubulares (sand cars) with which you can enjoy a beautiful tour on the sand dunes of different sizes and you can also try sandboarding (boarding on the sand).",
                "1 night in Nazca – basic family House hotel with breakfast included.",
                "",
                "DAY 2 – NAZCA",
                "10:00 AM NAZCA LINES They are ancient geoglyphs found between the desert plains of Palpa and Nazca.",
                "Fly over and learn about these impressive figures.",
                "You will be able to appreciate the main figures such as The Hummingbird, The Spider, The Condor, The Whale, The Monkey and many more.",
                "They are only visible during overflights on board aircraft.",
                "According to archaeologist María Reiche, who dedicated her life to studying the Nazca Lines, they are believed to be an astronomical calendar, the largest in the world.",
                "Lunch (At the passenger's expense).",
                "2:00 PM NAZCA – LIMA Boarding Cruz del Sur Nazca – Lima."
            ],
            incluye: [
                "Tourist mobility Lima - Paracas - Ica – Nazca – Lima.",
                "Accident insurance (Soat).",
                "Official tourist guide.",
                "Boat to Ballestas Islands.",
                "Life jackets during the tour.",
                "Observation of sea lions, Humboldt penguins and guano birds.",
                "Visit to the vineyard in Ica.",
                "Entrance fees to the Tourist Pier in Paracas and Huacachina.",
                "Tubulars and Sandboarding.",
                "Wine, macerated wines and piscos tasting.",
                "Visit to the Huacachina oasis.",
                "Tasting of tejas and chocotejas.",
                "Cruz del Sur bus ticket Ica – Nazca.",
                "Cruz del Sur bus ticket Nazca – Lima.",
                "Transfer In & Out in Nazca.",
                "Nazca Lines overflight.",
                "Tourist taxes for the Nazca overflight."
            ],
            noIncluye: ["Tips.", "Personal expenses.", "Feeding."]
        }
    }
];