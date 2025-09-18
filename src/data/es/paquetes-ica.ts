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
            "Visita Paracas con sus Islas Ballestas, disfruta de un viñedo en Ica con degustación, el oasis de Huacachina y la experiencia de tubulares y sandboarding.",
        etiqueta: "OFERTA",
        imagen: "/paquetes-ica/paracas.avif",
        itinerario: {
            horarios: "HORARIO: DE 4:30 AM – 9:20 PM",
            detalle: [
                "LIMA – PARACAS Tomamos la carretera al sur, tendremos la presentación de nuestra guía a cargo, donde nos indicará todo el recorrido.",
                "Desayuno en ruta tendremos una pequeña parada para poder comprar nuestro desayuno y continuar con el recorrido hasta llegar a Paracas.",
                "9:00 AM PARACAS – ISLAS BALLESTAS Iniciaremos nuestro tour en Paracas Islas Ballestas en modernas embarcaciones, utilizando chalecos salvavidas.",
                "Durante el recorrido se podrá apreciar El Candelabro (enorme geoglifo) observaremos una importante fauna marina, aves guaneras como el guanay, el piquero, el zarcillo, a los famosos lobos marinos y los simpáticos pingüinos de Humboldt.",
                "Durante el recorrido se podrá apreciar El Candelabro (enorme geoglifo) observaremos una importante fauna marina, aves guaneras como el guanay, el piquero, el zarcillo, a los famosos lobos marinos y los simpáticos pingüinos de Humboldt.",
                "Retornamos a la bahía de Paracas",
                "1:00 PM ALMUERZO - VIÑEDO EN ICA – DEGUSTACION DE VINOS Y PISCO Recorreremos sus instalaciones y conoceremos el proceso de elaboración de vinos y piscos, degustaremos diferentes vinos como el vino Borgoña, Vino de Misa, Amacerado de Fruta, Pisco entre otros.",
                "Cada degustación acompañada de sus frases típicas lugareñas. (almuerzo por cuenta del pasajero).",
                "3:00 PM OASIS HUACACHINA Este oasis de la Huacachina, este oasis surgió por el afloramiento de corrientes subterráneas de agua, que permite la existencia de vegetación compuesta de palmeras, eucaliptos y algarrobo.",
                "Este es un lugar ideal para desconectarse de la rutina y darse un descanso.",
                "TUBULARES Y SANDBOARDING Para los amantes de los deportes de aventura podrán realizar los famosos Tubulares (carros areneros) con lo cual pueden disfrutar de un bello recorrido en las dunas de arena de diferentes tamaños y también podrán realizar el sandboarding (Tabla en la arena).",
                "BODEGA RACIMO DE UVA O EL GARRAFÓN – CHINCHA Donde apreciaremos Show de música y degustaremos vinos, amacerados, dulces chinchanos como el frejol colado y la famosa galleta paciencia entre otros productos."
            ],
            incluye: [
                "Movilidad turística Lima - Paracas - Ica – Chincha - Lima.",
                "Seguro contra accidentes (Soat).",
                "Guía oficial de turismo.",
                "Embarcación a las Islas Ballestas.",
                "Chalecos salvavidas durante el recorrido.",
                "Observación de fauna marina.",
                "Visita al viñedo en Ica.",
                "Degustación de vinos y piscos.",
                "Visita al oasis de la Huacachina.",
                "Degustación de tejas y chocotejas.",
                "Visita al viñedo Racimo de Uva con show de música."
            ],
            noIncluye: ["Propinas.", "Gastos personales.", "Alimentación."]
        }
    },
    {
        dias: "2D/1N",
        titulo: "Paracas + Huacachina 2D/1N",
        slug: "paracas-huacachina-2d1n",
        descripcion:
            "Disfruta de Paracas, las Islas Ballestas, un viñedo en Ica, el oasis de Huacachina con tubulares y sandboarding, más una noche de hotel en Ica.",
        etiqueta: "",
        imagen: "/paquetes-ica/paracas-huacachina.avif",
        itinerario: {
            horarios: "Horario de salida: 4:30 AM",
            detalle: [
                "DÍA 1 – PARACAS + HUACACHINA",
                "4:30 AM LIMA – PARACAS Tomamos la carretera al sur, tendremos la presentación de nuestra guía a cargo, donde nos indicará todo el recorrido.",
                "Desayuno en ruta tendremos una pequeña parada para poder comprar nuestro desayuno y continuar con el recorrido hasta llegar a Paracas.",
                "9: OO AM PARACAS – ISLAS BALLESTAS Iniciaremos nuestro tour en Paracas Islas Ballestas en modernas embarcaciones, utilizando chalecos salvavidas.",
                "Durante el recorrido se podrá apreciar.",
                "El Candelabro (enorme geoglifo) observaremos una importante fauna marina, aves guaneras como el guanay, el piquero, el zarcillo, a los famosos lobos marinos y los simpáticos pingüinos de Humboldt.",
                "Retornamos a la bahía de Paracas.",
                "1:00 PM VIÑEDO EN ICA – DEGUSTACION DE VINOS Y PISCO Recorreremos sus instalaciones y conoceremos el proceso de elaboración de vinos y piscos, degustaremos diferentes vinos como el vino Borgoña, Vino de Misa, Amacerado de Fruta, Pisco entre otros.",
                "Cada degustación acompañada de sus frases típicas lugareñas.",
                "Almuerzo libre por cuenta del pasajero.",
                "3:00 PM - OASIS HUACACHINA Este oasis surgió por el afloramiento de corrientes subterráneas de agua, que permite la existencia de vegetación compuesta de palmeras, eucaliptos y algarrobo. Este es un lugar ideal para desconectarse de la rutina y darse un descanso.",
                "TUBULARES Y SANDBOARDING Para los amantes de los deportes de aventura podrán realizar los famosos Tubulares (carros areneros) con lo cual pueden disfrutar de un bello recorrido en las dunas de arena de diferentes tamaños y también podrán realizar el sandboarding (Tabla en la arena).",
                "01 noche Hotel en Ica.",
                "",
                "DÍA 2 – DÍA LIBRE",
                "DESAYUNO EN EL HOTEL",
                "Después del desayuno tendremos la mañana libre para poder hacer uso de las instalaciones del hotel.",
                "Almuerzo libre por cuenta del pasajero.",
                "El guía se comunicará para coordinar su abordo de retorno a Lima.",
                "BODEGA RACIMO DE UVA O EL GARRAFÓN – CHINCHA Donde apreciaremos Show de música y degustaremos vinos, amacerados, dulces chinchanos como el frejol colado y la famosa galleta paciencia entre otros productos."
            ],
            incluye: [
                "Movilidad turística Lima - Paracas - Ica – Chincha - Lima.",
                "Seguro contra accidentes (Soat).",
                "Guía oficial de turismo.",
                "Embarcación a las Islas ballestas.",
                "Chalecos salvavidas durante el recorrido.",
                "Observación de lobos marinos, pingüinos de Humboldt y aves guaneras.",
                "Visita al viñedo en Ica.",
                "Degustación de vinos, amacerados y piscos.",
                "Visita al oasis de la Huacachina.",
                "Ingresos a Muelle Turístico en Paracas y Huacachina.",
                "Tubulares y Sandboarding.",
                "Degustación de tejas y chocotejas.",
                "1 Noche de Hotel en Ica.",
                "Desayuno por noche de Hotel.",
                "Visita al viñedo Racimo de Uva. Show de música, solo los fines de semana."
            ],
            noIncluye: ["Propinas.", "Gastos personales.", "Alimentación."]
        }
    },
    {
        dias: "Full Day",
        titulo: "Nazca – Semiprivado",
        slug: "nazca-full-day",
        descripcion:
            "Sobrevuela las Líneas de Nazca y descubre el misterio de sus geoglifos, además disfruta del oasis de Huacachina y deportes de aventura.",
        etiqueta: "RECOMENDADO",
        imagen: "/paquetes-ica/nazca.avif",
        itinerario: {
            horarios: "HORARIO: 3:30 AM – 10:00 PM",
            detalle: [
                "LIMA – NAZCA Tomamos la carretera al sur en dirección a Nazca.",
                "Las Líneas de Nazca son geoglifos antiguos que se encuentran entre las llanuras desérticas de Palpa y Nazca. Sobrevuela y aprende sobre estas impresionantes figuras.",
                "Podrás apreciar las figuras principales como El Colibrí, La Araña, El Cóndor, La Ballena, El Mono y muchos más.",
                "Solo son visibles en sobrevuelos a bordo de aviones.",
                "Según la arqueóloga María Reiche, quien dedicó su vida al estudio de las Líneas de Nazca, estas serían un calendario astronómico, el más grande del mundo.",
                "Almuerzo (Por cuenta del pasajero).",
                "OASIS HUACACHINA Este oasis surgió por el afloramiento de corrientes subterráneas de agua, que permite la existencia de vegetación compuesta de palmeras, eucaliptos y algarrobo.",
                "Este es un lugar ideal para desconectarse de la rutina y darse un descanso.",
                "TUBULARES Y SANDBOARDING Para los amantes de los deportes de aventura podrán realizar los famosos Tubulares (carros areneros) con lo cual pueden disfrutar de un bello recorrido en las dunas de arena de diferentes tamaños y también podrán realizar el sandboarding (Tabla en la arena). (Opcional costo adicional de 38 soles)."
            ],
            incluye: [
                "Movilidad turística.",
                "Seguro contra accidentes (Soat).",
                "Guía oficial de turismo.",
                "Sobrevuelo de Líneas de Nazca.",
                "Tasas turísticas para el sobrevuelo.",
                "Visita al oasis Huacachina.",
                "Ingreso a atractivos turísticos.",
                "Botiquín de primeros auxilios."
            ],
            noIncluye: ["Propinas.", "Gastos personales.", "Alimentación."]
        }
    },
    {
        dias: "Full Day",
        titulo: "Nazca con Cruz del Sur",
        slug: "nazca-cruz-del-sur",
        descripcion:
            "Viaja en bus Cruz del Sur a Nazca, realiza el sobrevuelo de las famosas líneas y conoce uno de los misterios más grandes del mundo.",
        etiqueta: "",
        imagen: "/paquetes-ica/nazca-cruz-del-sur.avif",
        itinerario: {
            horarios: "HORARIOS: DE 11PM A 10 PM (Se sale un día antes llegando a nazca 5:30 AM)",
            detalle: [
                "5:30 AM - Una vez que lleguemos a nazca nuestro trasladista nos llevara al aeródromo, para poder desayunar y luego esperar para el sobrevuelo.",
                "Las Líneas de Nazca son geoglifos antiguos que se encuentran entre las llanuras desérticas de Palpa y Nazca.",
                "Sobrevuela y aprende sobre estas impresionantes figuras.",
                "Podrás apreciar las figuras principales como El Colibrí, La Araña, El Cóndor, La Ballena, El Mono y muchos más.",
                "Solo son visibles en sobrevuelos a bordo de aviones.",
                "Según la arqueóloga María Reiche, quien dedicó su vida al estudio de las Líneas de Nazca, estas serían un calendario astronómico, el más grande del mundo.",
                "Almuerzo (Por cuenta del pasajero)",
                "2:00 PM - NAZCA – LIMA Embarque Cruz del Sur Nazca – Lima."
            ],
            incluye: [
                "Boleto de bus Cruz del Sur Lima – Nazca – Lima.",
                "Transfer In & Out en Nazca.",
                "Sobrevuelo de Líneas de Nazca.",
                "Tasas turísticas para el sobrevuelo."
            ],
            noIncluye: [
                "Tasas Turísticas para el sobrevuelo en Nazca. 77 soles se pagan directo.",
                "Gastos Personales.",
                "Alimentación."
            ]
        }
    },
    {
        dias: "2D/1N",
        titulo: "Paracas + Huacachina + Nazca 2D/1N",
        slug: "paracas-huacachina-nazca-2d1n",
        descripcion:
            "Combina Paracas, Huacachina y el sobrevuelo de las Líneas de Nazca en un paquete completo con transporte, aventura y cultura.",
        etiqueta: "MÁS VENDIDO",
        imagen: "/paquetes-ica/paracas-huacachina-nazca.avif",
        itinerario: {
            horarios: "HORARIO: DE SALIDA 4:30 AM",
            detalle: [
                "DÍA 1 – PARACAS + HUACACHINA",
                "4:30 AM LIMA – PARACAS Tomamos la carretera al sur, tendremos la presentación de nuestra guía a cargo, donde nos indicará todo el recorrido.",
                "Desayuno en ruta tendremos una pequeña parada para poder comprar nuestro desayuno y continuar con el recorrido hasta llegar a Paracas.",
                "9:30 AM PARACAS – ISLAS BALLESTAS Iniciaremos nuestro tour en Paracas Islas Ballestas en modernas embarcaciones, utilizando chalecos salvavidas.",
                "Durante el recorrido se podrá apreciar El Candelabro (enorme geoglifo) observaremos una importante fauna marina, aves guaneras como el guanay, el piquero, el zarcillo, a los famosos lobos marinos y los simpáticos pingüinos de Humboldt.",
                "Retornamos a la bahía de Paracas.",
                "1:00 PM - VIÑEDO EN ICA – DEGUSTACION DE VINOS Y PISCO Recorreremos sus instalaciones y conoceremos el proceso de elaboración de vinos y piscos, degustaremos diferentes vinos como el vino Borgoña, Vino de Misa, Amacerado de Fruta, Pisco entre otros.",
                "Cada degustación acompañada de sus frases típicas lugareñas.",
                "Almuerzo libre por cuenta del pasajero.",
                "3:00 PM OASIS HUACACHINA Este oasis surgió por el afloramiento de corrientes subterráneas de agua, que permite la existencia de vegetación compuesta de palmeras, eucaliptos y algarrobo.",
                "Este es un lugar ideal para desconectarse de la rutina y darse un descanso.",
                "TUBULARES Y SANDBOARDING Para los amantes de los deportes de aventura podrán realizar los famosos Tubulares (carros areneros) con lo cual pueden disfrutar de un bello recorrido en las dunas de arena de diferentes tamaños y también podrán realizar el sandboarding (Tabla en la arena).",
                "1 noche en nazca – hotel básico familia House con desayuno incluido.",
                "",
                "DÍA 2 – NAZCA",
                "10:00 AM LINEAS DE NAZCA Son geoglifos antiguos que se encuentran entre las llanuras desérticas de Palpa y Nazca.",
                "Sobrevuela y aprende sobre estas impresionantes figuras.",
                "Podrás apreciar las figuras principales como El Colibrí, La Araña, El Cóndor, La Ballena, El Mono y muchos más.",
                "Solo son visibles en sobrevuelos a bordo de aviones.",
                "Según la arqueóloga María Reiche, quien dedicó su vida al estudio de las Líneas de Nazca, estas serían un calendario astronómico, el más grande del mundo.",
                "Almuerzo (Por cuenta del pasajero).",
                "2:00 PM NAZCA – LIMA Embarque Cruz del Sur Nazca – Lima."
            ],
            incluye: [
                "Movilidad turística Lima - Paracas - Ica – Nazca – Lima.",
                "Seguro contra accidentes (Soat).",
                "Guía oficial de turismo.",
                "Embarcación a Islas Ballestas.",
                "Chalecos salvavidas durante el recorrido.",
                "Observación de lobos marinos, pingüinos de Humboldt y aves guaneras.",
                "Visita al viñedo en Ica.",
                "Ingresos a Muelle Turístico en Paracas y Huacachina",
                "Tubulares y Sandboarding.",
                "Degustación de vinos, amacerados y piscos.",
                "Visita al oasis de la Huacachina.",
                "Degustación de tejas y chocotejas.",
                "Boleto de bus Cruz del Sur Ica – Nazca.",
                "Boleto de bus Cruz del Sur Nazca – Lima.",
                "Transfer In & Out en Nazca.",
                "Sobrevuelo de las Líneas de Nazca.",
                "Tasas Turísticas para el sobrevuelo en Nazca."
            ],
            noIncluye: ["Propinas.", "Gastos personales.", "Alimentación."]
        }
    }
];