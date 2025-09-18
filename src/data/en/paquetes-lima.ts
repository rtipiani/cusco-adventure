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
        titulo: "CITY TOUR LIMA",
        slug: "city-tour-lima",
        descripcion:
            "Discover the best of Lima: Parque del Amor in Miraflores, Huaca Pucllana, the Historic Center with Plaza Mayor and San Martín, and the Convent of San Francisco with its famous catacombs.",
        etiqueta: "OFFER",
        imagen: "/paquetes-lima/parque-del-amor.avif",
        itinerario: {
            horarios: "HOURS: MORNING SHIFTS FROM 9 AM – 1 PM, AFTERNOON SHIFTS FROM 2 AM – 6 PM",
            detalle:[
                "We'll begin our excursion by visiting Love Park, located on the Malecón Cisneros, next to the Villena Bridge in Miraflores. The sculpture The Kiss, by artist Víctor Delfín, stands out here.", 
                "We'll also appreciate walls with beautiful mosaics displaying loving phrases in Spanish and Quechua, as well as the names of famous couples in the history of love and others who helped finance its construction.",
                "We'll continue to Qenqo, an Inca ceremonial center with tunnels and altars carved into the rock, and then visit the Qenqo Forest, a mystical place surrounded by rock formations. Later, we'll visit Puca Pucara, a military fortress that served as a checkpoint and security station, and the Tambomachay complex, known as the Inca Baths for its crystal-clear springs.",
                "Continuing, we'll have a panoramic view of Huaca Pucllana, a magnificent ceremonial and administrative center considered a sacred site by the Incas. Afterward, we'll head to downtown Lima, where we'll visit Lima's Historic Center, where we'll appreciate colonial buildings, including Plaza San Martín, Plaza Mayor, the Government Palace, the Archbishop's Palace, the Cathedral Basilica, and the Municipal Palace, among others.",
                "Our last stop is the San Francisco Convent Museum, which is the largest display of colonial religious art in the Americas. During the tour, we'll visit the Choral Room, the Library, the Sacristy, and the underground crypts known as the Catacombs."
            ],
            incluye: [
                "Tourist mobility.",
                "Official tourist guide.",
                "Income to tourist destinations.",
                "Entrance to the San Francisco Museum.",
                "View of the park of love.",
                "Panoramic visit to Huaca Pucllana",
                "Assistance throughout the trip."
            ],
            noIncluye: ["Tips.", "Personal expenses.", "Feeding."],
        },
    },
    {
        dias: "Full Day",
        titulo: "PACHACAMAC + BARRANCO",
        slug: "pachacamac-barranco",
        descripcion:
            "Explore the Pachacamac sanctuary with its temples and on-site museum, and enjoy Barranco with the Bridge of Sighs, the Chabuca Granda Square, and the Catalina Recavarren Lookout.",
        etiqueta: "",
        imagen: "/paquetes-lima/barranco.avif",
        itinerario: {
            horarios: "HOURS: MORNING SHIFTS FROM 9 AM – 1 PM, AFTERNOON SHIFTS FROM 2 AM – 6 PM",
            detalle:[
                "We begin our tour in Pachacamac, an hour south of Lima. There is an archaeological complex of imposing pyramids and temples built of adobe that still preserves the mysticism and religiosity of its past. When you visit it, you will feel the magical attraction of a sanctuary where thousands of pilgrims came to present their offerings and consult the oracle of Pachacamac, who saw the past, the future and destiny.",
                "We will visit the great temple known as Acllahuasi, where the 'chosen ones of the sun' lived; the Painted Temple; the Palace of Taurichumbi; and the Temple of the Sun, among others. We will also visit the on-site museum, which houses a copy of the idol of the god Pachacamac, as well as vestiges found in the area.",
                "Later we will visit the famous Barranco district, where the Bridge of Sighs stands out, the Chabuca Granda square, here we will observe the sculpture in honor of the Peruvian singer-songwriter and folklorist Chabuca Granda, born on September 3, 1920 in Cotabambas – Apurímac.",
                "There we can see another sculpture dedicated to the laborer José Antonio Lavalle y García, a personal friend of Chabuca Granda and inspiration for the song José Antonio.",
                "Finally, we'll visit the Catalina Recavarren Lookout, from which you can enjoy magnificent views of the sea. It's a favorite spot for lovers."
            ],
            incluye: [
                "Tourist mobility shared service.",
                "Official tourist guide.",
                "Visit to the Pachacamac Archaeological Center.",
                "Visit to the Pachacamac site museum.",
                "Visit to the Bridge of Sighs in Barranco.",
                "Visit to the Chabuca Granda square.",
                "Visit to the Catalina Recavarren viewpoint.",
                "Entrance to tourist attractions.",
                "Permanent assistance."
            ],
            noIncluye: ["Tips.", "Personal expenses.", "Feeding."],
        },
    },
    {
        dias: "Full Day",
        titulo: "MAGIC WATER CIRCUIT",
        slug: "circuito-magico-del-agua",
        descripcion:
            "Experience the nighttime spectacular at Parque de la Reserva: thirteen cybernetic fountains, music, laser lights, and images of Peru that transform the Lima night into pure magic and fantasy.",
        etiqueta: "MÁS VENDIDO",
        imagen: "/paquetes-lima/circuito-magico-del-agua.avif",
        itinerario: {
            horarios: "HOURS: MORNING SHIFTS FROM 9 AM – 1 PM, AFTERNOON SHIFTS FROM 2 AM – 6 PM",
            detalle:[
                "We begin our visit to the Magic Water Circuit, located in Parque de la Reserva, an icon of Lima and a symbol of the recovery of Lima's public spaces. It features thirteen cybernetic fountains, powered by cutting-edge technology, where music, water, sound, and laser lights combine to present unique and incredible shows.",
                "We'll explore the Fountain of Illusion, a majestic work of art that holds worldwide recognition and distinction, having earned the Guinness World Record for being the world's largest public fountain park and having the world's tallest fountain.",
                "We'll enjoy the spectacle of the 120-meter-long and over 20-meter-wide fantasy fountain, featuring a hydraulic choreography that synchronizes the movement of water, color, and music.",
                "On a large water screen, you can see majestic images of Peru, dances, and cultural richness.",
                "The laser light show accompanies the show, enriching it with fantastic, dreamlike figures that, contrasting with the water, produce a multi-colored effect, filling the night with excitement and fantasy for the visitor."
            ],
            incluye: [
                "Tourist mobility shared service.",
                "Official tourist guide.",
                "Visit to the reserve park.",
                "Visit to the 13 cybernetic sources.",
                "Permanent assistance.",
                "First aid kit."
            ],
            noIncluye: ["Tips.", "Personal expenses.", "Feeding."],
        },
    },
    {
        dias: "Full Day",
        titulo: "CITY NIGHT LIMA + MAGIC WATER CIRCUIT",
        slug: "city-night-lima-circuito-magico",
        descripcion:
            "Discover the illuminated Historic Center with the Plaza Mayor and San Martín Squares, and enjoy the Magic Water Circuit, recognized worldwide as the largest fountain park in the world.",
        etiqueta: "",
        imagen: "/paquetes-lima/city-night-lima.avif",
        itinerario: {
            horarios: "SCHEDULE: MORNING SHIFTS FROM 6 PM – 10 PM",
            detalle:[
                "At 6:00 PM, we'll head toward the historic center to appreciate it in all its splendor, with its churches, colonial and republican mansions, plazas, and convents, all fully illuminated to offer you an unforgettable memory.",
                "The historic center of Lima has several squares and churches full of history, including Plaza San Martín, a place that was founded in honor of the liberator Don José de San Martín on the occasion of the centenary of Peru's independence in 1921. Then we will visit the Plaza Mayor, a place that houses mansions from the colonial era and the beginning of the republic in our country, among which the imposing Lima Cathedral with its baroque-style façade and the Government Palace, which was previously the home of Pizarro (founder of the city of Lima) stand out.",
                "Our second attraction will be the Magic Water Circuit, located in Parque de la Reserva. It is one of Lima's largest municipal projects, an icon of Lima and a symbol of the recovery of Lima's public spaces.",
                "It has thirteen cybernetic fountains, supported by the latest technology where music, water, sound and laser lights blend to present unique and incredible shows. It has earned worldwide recognition and distinction by having obtained the Guinness record for being the largest public fountain park in the world and having the tallest fountain in the world."
            ],
            incluye: [
                "Tourist mobility shared service.",
                "Official tourist guide.",
                "Visit to Lima's main square.",
                "Visit to San Martín Square.",
                "Visit to the reserve park.",
                "Visit to the 13 cyber sources.",
                "Entrance to tourist attractions.",
                "Permanent assistance.",
                "First aid kit."
            ],
            noIncluye: ["Tips.", "Personal Expenses.", "Feeding."],
        },
    },
    {
        dias: "Full Day",
        titulo: "LARCO MUSEUM",
        slug: "museo-larco",
        descripcion:
            "Visit the Larco Museum, located in an 18th-century colonial mansion, with a collection of more than 45,000 pre-Columbian pieces, gold and silver galleries, and its famous erotic art room.",
        etiqueta: "RECOMMENDED",
        imagen: "/paquetes-lima/museo-larco.avif",
        itinerario: {
            horarios: "HOURS: MORNING SHIFTS FROM 9 AM – 1 PM, AFTERNOON SHIFTS FROM 2 AM – 6 PM",
            detalle:[
                "Surrounded by beautiful gardens, it is located within a unique viceregal mansion dating from the 18th century, which was in turn built on a pre-Columbian pyramid from the 7th century.",
                "The works of art at the Larco Museum are considered icons of pre-Columbian art worldwide.",
                "It houses the finest collection of gold and silver from ancient Peru, as well as the famous collection of erotic art, one of Peru's most visited tourist attractions. The Larco Museum is one of the few museums in the world where visitors can tour its repository and appreciate the 45,000 properly classified archaeological objects, an unforgettable experience.",
                "The Larco Museum's collection has been seen by more than 5 million people through exhibitions held in the world's most prestigious exhibition halls, museums, and cultural centers."
            ],
            incluye: [
                "Tourist mobility.",
                "Official tourist guide.",
                "Entrance to the Larco Museum.",
                "Assistance throughout the trip."
            ],
            noIncluye: [
                "Tips.",
                "Personal Expenses.",
                "Feeding.",
            ],
        },
    }
];