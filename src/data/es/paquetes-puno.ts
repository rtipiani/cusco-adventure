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
            "Experimenta un full day excepcional descubriendo la auténtica vida de los Uros en sus islas flotantes y conociendo la rica cultura de Taquile, en un recorrido lleno de historia y paisajes impresionantes.",
        etiqueta: "OFERTA",
        imagen: "/paquetes-puno/uros-taquile.avif",
        itinerario: {
            horarios: "HORARIO: 7:30 AM A 04:00 PM",
            detalle: [
                "7:00 AM Traslado desde el hotel o terminal terrestre hacia el muelle de Puno. Desde allí, iniciaremos nuestra excursión lacustre con destino a las islas flotantes de los Uros. El recorrido en lancha turística desde el muelle hasta las islas toma aproximadamente 25 minutos.",
                "Los Uros, conocidos como “Ureños”, habitan en viviendas construidas sobre plataformas de totora —una planta acuática típica del lago Titicaca—, las cuales tienen un grosor promedio de 30 a 40 centímetros.",
                "10:30 AM Continuaremos hacia la Isla Taquile.",
                "En el viaje por lancha podrá apreciar la belleza natural del Lago Sagrado de los Incas, donde sus pobladores se caracterizan por conservar su cultura de creencias, costumbres y tradiciones; manifestándolas a través de su vestimenta, ritos, religión, etc.",
                "1:30 PM Arribamos a la isla de Taquile. Luego, usted podrá ver el traje típico del poblador taquileño, las casas rurales, arcos prehispánicos y los 550 escalones.",
                "Después degustaremos un almuerzo turístico que consiste en un plato típico de la isla: trucha acompañada con una sopa de quinua y un mate de coca o muña."
            ],
            incluye: [
                "Recojo del Hotel o Terminal de Buses y viceversa.",
                "Guía oficial de turismo profesional.",
                "Embarcaciones Turísticas (Lanchas).",
                "Ingreso a las Islas Flotantes de Uros y Taquile.",
                "Almuerzo Típico en Taquile.",
                "Transporte de Retorno al Hotel."
            ],
            noIncluye: [
                "Propinas.",
                "Gastos Personales.",
                "Alimentación.",
                "Paseo en Balsa (pago directo con los indígenas)."
            ]
        }
    },
    {
        dias: "2D/1N",
        titulo: "UROS, TAQUILE Y AMANTANI 2D/1N",
        slug: "uros-taquile-amantani-2d-1n",
        descripcion:
            "Vive una experiencia inolvidable explorando los enigmáticos Uros, descubriendo la auténtica esencia de Taquile y aventurándote al mágico Amantani, en un itinerario de 2 días y 1 noche repleto de emociones.",
        etiqueta: "",
        imagen: "/paquetes-puno/amantani.avif",
        itinerario: {
            horarios: "HORARIO: 7:00 AM A 03:30 PM",
            detalle: [
                "DÍA 1 – UROS + AMANTANÍ",
                "7:00 AM Recojo de la recepción del hotel con dirección al puerto principal de la ciudad de Puno.",
                "8:00 AM Traslado del muelle de Puno hacia las islas flotantes de los Uros. Viaje por lancha donde podrá apreciar la belleza natural del Lago Sagrado de los Incas y las costumbres locales.",
                "12:30 PM Llegada a la isla de Amantaní, donde seremos recibidos cálidamente por los pobladores locales. Posteriormente, nos acomodaremos en casas rurales, típicas de la zona, para vivir una experiencia auténtica.",
                "Tiempo libre para recorrer la isla, tomar fotografías y descubrir más sobre la cultura y el estilo de vida.",
                "2:30 PM Luego del almuerzo nos concentraremos en el lugar indicado para subir a los templos ceremoniales Pacha Tata y Pacha Mama, donde disfrutaremos del hermoso atardecer y las danzas típicas del lugar.",
                "6:30 PM Cena en casas familiares.",
                "8:00 PM Encuentro bailable con trajes típicos en compañía de la gente local.",
                "",
                "DÍA 2 – ISLA TAQUILE",
                "7:00 AM Desayuno en las casas familiares.",
                "8:30 AM Viaje hacia la Isla de Taquile.",
                "12:30 PM En el viaje por lancha podrá apreciar la belleza natural del Lago Sagrado de los Incas. Posteriormente, podrá ver el traje típico del poblador taquileño, las casas rurales, arcos prehispánicos y los 550 escalones.",
                "3:30 PM Finalización del tour en la ciudad de Puno."
            ],
            incluye: [
                "Recojo del Hotel o Terminal de Buses y viceversa.",
                "Guía oficial de turismo profesional.",
                "Embarcaciones Turísticas (Lanchas).",
                "Ingreso a las islas Uros, Taquile y Amantaní.",
                "1 Almuerzo, 1 Cena y 1 Desayuno típico.",
                "Casa familiar en Amantaní.",
                "Reunión bailable con trajes típicos.",
                "Transporte de Retorno al Hotel."
            ],
            noIncluye: [
                "Propinas.",
                "Gastos Personales.",
                "Alimentación extra.",
                "Paseo en Balsa (pago directo con los indígenas)."
            ]
        }
    }
];