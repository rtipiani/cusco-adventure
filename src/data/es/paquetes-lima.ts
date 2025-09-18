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
            "Conoce lo mejor de Lima: Parque del Amor en Miraflores, Huaca Pucllana, el Centro Histórico con la Plaza Mayor y San Martín, y el Convento de San Francisco con sus famosas catacumbas.",
        etiqueta: "OFERTA",
        imagen: "/paquetes-lima/parque-del-amor.avif",
        itinerario: {
            horarios: "HORARIOS: TURNOS MAÑANA DE 9 AM – 1PM , TURNOS TARDE DE 2 AM – 6PM",
            detalle:[
                "Iniciaremos nuestra excursión visitando el Parque del Amor ubicado en el Malecón Cisneros, al lado del puente Villena, en Miraflores. Aquí destaca la escultura denominada El Beso, obra del artista Víctor Delfín.", 
                "También apreciaremos muros con hermosos mosaicos exhibiendo frases amorosas en español y quechua, así como nombres de parejas famosas en la historia del amor y de otras que ayudaron a financiar su construcción.",
                "Seguiremos hacia Qenqo, un centro ceremonial inca con túneles y altares tallados en roca, y después conoceremos el Bosque de Qenqo, un lugar místico rodeado de formaciones rocosas. Más adelante visitaremos Puca Pucara, fortaleza militar que servía como punto de control y resguardo, y el complejo de Tambomachay, conocido como los baños del Inca por sus fuentes de agua cristalina.",
                "Continuando tendremos una vista panorámica de la Huaca Pucllana, magnífico centro ceremonial y administrativo considerado por los Incas como pueblo sagrado. Posteriormente nos trasladaremos al centro de lima donde visitaremos el Centro Histórico de Lima, donde apreciaremos edificios coloniales, destacando la Plaza San Martín, la Plaza Mayor, el Palacio de Gobierno, el Palacio Arzobispal, la Basílica Catedral, el Palacio Municipal entre otros.",
                "como nuestro último punto visitaremos es al museo Convento San Francisco, el cual constituye la mayor muestra de arte religioso colonial de América. Durante el recorrido visitaremos La Sala Coral, La Biblioteca, la Sacristía y las criptas subterráneas conocidas como 'Catacumbas'."
            ],
            incluye: [
                "Movilidad turística.",
                "Guía oficial de turismo.",
                "Ingresos a los destinos turísticos.",
                "Ingreso al museo de san francisco.",
                "Vista al parque del amor.",
                "Visita panorámica a Huaca Pucllana",
                "Asistencia durante todo el viaje."
            ],
            noIncluye: ["Propinas.", "Gastos personales.", "Alimentación."],
        },
    },
    {
        dias: "Full Day",
        titulo: "PACHACAMAC + BARRANCO",
        slug: "pachacamac-barranco",
        descripcion:
            "Explora el santuario de Pachacamac con sus templos y museo de sitio, y disfruta de Barranco con el Puente de los Suspiros, la Plazuela Chabuca Granda y el Mirador Catalina Recavarren.",
        etiqueta: "",
        imagen: "/paquetes-lima/barranco.avif",
        itinerario: {
            horarios: "HORARIOS: TURNOS MAÑANA DE 9 AM – 1PM , TURNOS TARDE DE 2 AM – 6PM",
            detalle:[
                "Comenzamos nuestro recorrido en Pachacamac a una hora al sur de Lima existe un complejo arqueológico de imponentes pirámides y templos construidos de adobe que hasta ahora conserva el misticismo y la religiosidad de su pasado, al visitarlo podrá sentir la mágica atracción de un santuario adonde llegaban millares de peregrinos para presentar sus ofrendas y consultar al oráculo de Pachacamac, quien miraba el pasado, el futuro y el destino.",
                "Visitaremos el gran templo conocido como el Acllahuasi donde vivían “Las escogidas del sol”, el Templo Pintado, El Palacio de Taurichumbi y el Templo del Sol entre otros. Visitaremos también el museo de sitio que guarda una copia del ídolo del dios Pachacamac, así como vestigios encontrados en la zona.",
                "Posteriormente visitaremos el famoso distrito de Barranco, donde destaca el puente de los suspiros, la plazuela Chabuca Granda, aquí observaremos la escultura en honor a la cantautora y folclorista peruana Chabuca Granda, nacida el 03 de setiembre de 1920 en Cotabambas – Apurímac.",
                "Ahí mismo podemos apreciar otra escultura dedicada al chalán José Antonio Lavalle y García, amigo personal de Chabuca Granda e inspiración de la canción José Antonio.",
                "Finalmente visitaremos el Mirador Catalina Recavarren, desde este lugar se tiene una magnífica vista hacia el mar. Es uno de los lugares preferidos por los enamorados."
            ],
            incluye: [
                "Movilidad turística servicio compartido.",
                "Guía oficial de turismo.",
                "Visita al centro Arqueológico de Pachacamac.",
                "Visita al museo de sitio de Pachacamac.",
                "Visita al puente de los suspiros en Barranco.",
                "Visita a la plazuela de Chabuca Granda.",
                "Visita al mirador de Catalina Recavarren.",
                "Ingreso a los atractivos turísticos.",
                "Asistencia permanente."
            ],
            noIncluye: ["Propinas.", "Gastos personales.", "Alimentación."],
        },
    },
    {
        dias: "Full Day",
        titulo: "CIRCUITO MÁGICO DEL AGUA",
        slug: "circuito-magico-del-agua",
        descripcion:
            "Vive el espectáculo nocturno del Parque de la Reserva: trece fuentes cibernéticas, música, luces láser e imágenes del Perú que convierten la noche limeña en pura magia y fantasía.",
        etiqueta: "MÁS VENDIDO",
        imagen: "/paquetes-lima/circuito-magico-del-agua.avif",
        itinerario: {
            horarios: "HORARIOS: TURNOS MAÑANA DE 9 AM – 1PM , TURNOS TARDE DE 2 AM – 6PM",
            detalle:[
                "Iniciamos la visita al Circuito Mágico del Agua, ubicado en el Parque de la Reserva, ícono de la ciudad de Lima y símbolo de la recuperación de los espacios públicos de Lima. Cuenta con trece fuentes cibernéticas, apoyadas con la más alta tecnología donde la música, el agua, el sonido y las luces láser se mezclan para presentarnos espectáculos únicos e increíbles.",
                "Conoceremos la fuente de la ilusión esta majestuosa obra que ostenta el reconocimiento y distinción mundial al haber obtenido el récord Guinness por ser el parque público de fuentes más grande del mundo y tener la fuente más alta del mundo.",
                "Disfrutaremos del espectáculo de la fuente de la fantasía de 120m de largo y más de 20m de ancho con una coreografía hidráulica que sincroniza el movimiento del agua, el color y la música.",
                "Sobre una gran pantalla de agua se pueden observar majestuosas imágenes del Perú, danzas y riqueza cultural.",
                "El juego de luces láser acompaña el espectáculo enriqueciéndola con fantásticas figuras de ensueño que contrastando con el agua producen un efecto multicolor llenando la noche emoción y fantasía para el visitante."
            ],
            incluye: [
                "Movilidad turística servicio compartido.",
                "Guía oficial de turismo.",
                "Visita al parque de la reserva.",
                "Visita a las 13 fuentes cibernéticas.",
                "Asistencia permanente.",
                "Botiquín de primeros auxilios."
            ],
            noIncluye: ["Propinas.", "Gastos personales.", "Alimentación."],
        },
    },
    {
        dias: "Full Day",
        titulo: "CITY NIGHT LIMA + CIRCUITO MÁGICO DEL AGUA",
        slug: "city-night-lima-circuito-magico",
        descripcion:
            "Descubre el Centro Histórico iluminado con la Plaza Mayor y San Martín, y disfruta del Circuito Mágico del Agua, reconocido mundialmente como el parque de fuentes más grande del mundo.",
        etiqueta: "",
        imagen: "/paquetes-lima/city-night-lima.avif",
        itinerario: {
            horarios: "HORARIO: TURNOS MAÑANA DE 6 PM – 10PM",
            detalle:[
                "18:00 horas, tomaremos rumbo hacia el centro histórico para poder apreciarlo en todo su esplendor con sus iglesias, casonas coloniales y republicanas, plazas y conventos todos totalmente iluminados para ofrecerle un recuerdo inolvidable.",
                "El centro histórico de Lima cuenta con varias plazas e iglesias llenas de historia entre ellas la Plaza San Martín lugar que fue fundado en honor al libertador Don José de San Martín por motivo del centenario de la independencia del Perú el año 1921, luego visitaremos la Plaza Mayor lugar que alberga casonas de la época colonial e inicios de la república en nuestro país entre los que destacan la imponente Catedral de Lima con su fachada de estilo barroco y el Palacio de Gobierno que fue antes la casa de Pizarro (fundador de la ciudad de Lima).",
                "Nuestro segundo lugar a conocer será el Circuito Mágico del Agua, ubicado en el Parque de la Reserva, es uno de los proyectos municipales de gran envergadura, ícono de la ciudad de Lima y símbolo de la recuperación de los espacios públicos de Lima.",
                "Cuenta con trece fuentes cibernéticas, apoyadas con la más alta tecnología donde la música, el agua, el sonido y las luces láser se mezclan para presentarnos espectáculos únicos e increíbles, cuenta con el reconocimiento y distinción mundial al haber obtenido el récord Guinness por ser el parque público de fuentes más grande del mundo y tener la fuente más alta del mundo."
            ],
            incluye: [
                "Movilidad turística servicio compartido.",
                "Guía oficial de turismo.",
                "Visita a la plaza de armas de Lima.",
                "Visita a la plaza San Martín.",
                "Visita al parque de la reserva.",
                "Visita a las 13 fuentes cibernéticas.",
                "Ingreso a los atractivos turísticos.",
                "Asistencia permanente.",
                "Botiquín de primeros auxilios."
            ],
            noIncluye: ["Propinas.", "Gastos Personales.", "Alimentación"],
        },
    },
    {
        dias: "Full Day",
        titulo: "MUSEO LARCO",
        slug: "museo-larco",
        descripcion:
            "Visita el Museo Larco, ubicado en una mansión virreinal del siglo XVIII, con una colección de más de 45,000 piezas precolombinas, galerías de oro, plata y su famosa sala de arte erótico.",
        etiqueta: "RECOMENDADO",
        imagen: "/paquetes-lima/museo-larco.avif",
        itinerario: {
            horarios: "HORARIOS: TURNOS MAÑANA DE 9 AM – 1PM , TURNOS TARDE DE 2 AM – 6PM ",
            detalle:[
                "Rodeado de hermosos jardines, se encuentra situado dentro de una mansión virreinal única en su género y que data del siglo XVIII, la cual fue a su vez, construida sobre una pirámide precolombina del siglo VII.",
                "Las obras de arte del Museo Larco son consideradas íconos del arte precolombino a nivel mundial.",
                "Presenta la más fina colección de oro y plata del antiguo Perú, así como la famosa colección de arte erótico, uno de los atractivos turísticos más visitados en el Perú. El Museo Larco es uno de los pocos museos en el mundo donde los visitantes pueden recorrer su depósito y apreciar los 45,000 objetos arqueológicos debidamente clasificados, lo cual constituye una experiencia inolvidable.",
                "La colección del Museo Larco ha sido vista por más de 5 millones de personas gracias a exposiciones realizadas en las más prestigiosas salas de exhibición, museos y centros culturales del mundo."
            ],
            incluye: [
                "Movilidad turística.",
                "Guía oficial de turismo.",
                "Ingresos al museo Larco.",
                "Asistencia durante todo el viaje."
            ],
            noIncluye: [
                "Propinas.",
                "Gastos Personales.",
                "Alimentación.",
            ],
        },
    }
];