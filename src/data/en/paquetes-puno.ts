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
        titulo: "UROS Y TAQUILE",
        slug: "uros-y-taquile",
        descripcion:
            "Experience an exceptional full-day experience, discovering the authentic life of the Uros people on their floating islands and learning about the rich culture of Taquile, on a tour steeped in history and breathtaking landscapes.",
        etiqueta: "OFFER",
        imagen: "/paquetes-puno/uros-taquile.avif",
        itinerario: {
            horarios: "SCHEDULE: 7:30 AM TO 4:00 PM",
            detalle: [
                "7:00 AM Transfer from your hotel or bus terminal to the Puno pier. From there, we'll begin our lake excursion to the Uros floating islands. The tour boat ride from the pier to the islands takes approximately 25 minutes.",
                "The Uros, known as “Ureños,” live in dwellings built on platforms of totora reeds—a typical aquatic plant of Lake Titicaca—which have an average thickness of 30 to 40 centimeters.",
                "10:30 AM We will continue towards Taquile Island.",
                "On the boat trip, you'll appreciate the natural beauty of the Sacred Lake of the Incas, where its inhabitants preserve their culture of beliefs, customs, and traditions, manifesting them through their clothing, rituals, religion, and more.",
                "1:30 PM We arrive at Taquile Island. Then, you'll see the traditional dress of the Taquile people, the rural houses, pre-Hispanic arches, and the 550 steps.",
                "Afterwards, we will enjoy a tourist lunch consisting of a typical island dish: trout accompanied by quinoa soup and coca or muña tea."
            ],
            incluye: [
                "Pick up from the hotel or bus terminal and vice versa.",
                "Official professional tourism guide.",
                "Tourist Boats (Lanchas).",
                "Entrance to the Floating Islands of Uros and Taquile.",
                "Typical Lunch in Taquile.",
                "Return transportation to the hotel."
            ],
            noIncluye: [
                "Tips.",
                "Personal Expenses.",
                "Feeding.",
                "Raft ride (direct payment to the indigenous people)."
            ]
        }
    },
    {
        dias: "2D/1N",
        titulo: "UROS, TAQUILE Y AMANTANI 2D/1N",
        slug: "uros-taquile-amantani-2d-1n",
        descripcion:
            "Enjoy an unforgettable experience exploring the enigmatic Uros Mountains, discovering the authentic essence of Taquile, and venturing to the magical Amantani on a thrilling 2-day, 1-night itinerary.",
        etiqueta: "",
        imagen: "/paquetes-puno/amantani.avif",
        itinerario: {
            horarios: "HOURS: 7:00 AM TO 3:30 PM",
            detalle: [
                "DAY 1 – UROS + AMANTANÍ",
                "7:00 AM Pick up from the hotel reception heading to the main port of the city of Puno.",
                "8:00 AM Transfer from the Puno dock to the floating islands of the Uros. Travel by boat to appreciate the natural beauty of the Sacred Lake of the Incas and local customs.",
                "12:30 PM Arrival on Amantaní Island, where we will be warmly welcomed by the locals. Afterward, we will settle into typical rural houses for an authentic experience.",
                "Free time to explore the island, take photographs, and learn more about the culture and lifestyle.",
                "2:30 PM After lunch, we will gather at the designated location to climb the ceremonial temples of Pacha Tata and Pacha Mama, where we will enjoy the beautiful sunset and typical local dances.",
                "6:30 PM Dinner at family homes.",
                "8:00 PM Dance party in traditional costumes with local people.",
                "",
                "DAY 2 – TAQUILE ISLAND",
                "7:00 AM Breakfast at family homes.",
                "8:30 AM Travel to Taquile Island.",
                "12:30 PM On the boat trip, you'll appreciate the natural beauty of the Sacred Lake of the Incas. Afterward, you'll see the traditional dress of the Taquileños, rural houses, pre-Hispanic arches, and the 550 steps.",
                "3:30 PM End of the tour in the city of Puno."
            ],
            incluye: [
                "Pick up from the hotel or bus terminal and vice versa.",
                "Official professional tourism guide.",
                "Tourist Boats (Lanchas).",
                "Entrance to the Uros, Taquile and Amantaní islands.",
                "1 Lunch, 1 Dinner and 1 typical Breakfast.",
                "Family home in Amantaní.",
                "Dance meeting with traditional costumes.",
                "Return transportation to the hotel."
            ],
            noIncluye: [
                "Tips.",
                "Personal Expenses.",
                "Extra feeding.",
                "Raft ride (direct payment to the indigenous people)."
            ]
        }
    }
];