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
            "Conoce lo mejor de Cusco en un solo día: Qoricancha, Sacsayhuamán, Qenqo, Puca Pucara, Tambomachay y mirador del Cristo Blanco.",
        etiqueta: "OFERTA",
        imagen: "/paquetes-cusco/qoricancha.avif",
        itinerario: {
            horarios: "HORARIOS: TURNOS MAÑANA DE 8:50 AM – 2PM , TURNOS TARDE DE 1 PM – 6:00PM",
            detalle:[
                "Iniciaremos el recorrido con el recojo desde su hotel en Cusco, para luego visitar el Qoricancha o Templo del Sol, uno de los templos más importantes del imperio inca, donde la fusión de arquitectura inca y colonial sorprende a cada visitante.", 
                "Luego continuaremos hacia la imponente fortaleza de Sacsayhuamán, famosa por sus gigantescos muros de piedra perfectamente ensamblados y escenario de la fiesta del Inti Raymi.",
                "Seguiremos hacia Qenqo, un centro ceremonial inca con túneles y altares tallados en roca, y después conoceremos el Bosque de Qenqo, un lugar místico rodeado de formaciones rocosas. Más adelante visitaremos Puca Pucara, fortaleza militar que servía como punto de control y resguardo, y el complejo de Tambomachay, conocido como los baños del Inca por sus fuentes de agua cristalina.",
                "En el trayecto también haremos una parada en una factoría de llamas y alpacas, donde aprenderemos sobre su crianza y el proceso de elaboración de tejidos andinos, y finalizaremos en el mirador del Cristo Blanco, desde donde se obtiene una vista panorámica espectacular de la ciudad del Cusco.",
                "Finalmente, retornaremos al centro histórico, cerca de la Plaza de Armas."
            ],
            incluye: [
                "Recojo desde hotel en Cusco.",
                "Transporte turístico.",
                "Guía profesional de turismo.",
                "Ingresos a los atractivos turísticos (Boleto Turístico Parcial y entrada a Qoricancha).",
                "Asistencia durante el recorrido.",
            ],
            noIncluye: ["Propinas.", "Gastos personales.", "Alimentación no mencionada."],
        },
    },
    {
        dias: "Full Day",
        titulo: "VALLE SAGRADO MARAS + MORAY",
        slug: "valle-sagrado-maras-moray",
        descripcion:
            "Explora Chinchero, Moray, las Salineras de Maras, Urubamba, Ollantaytambo y Pisaq en un recorrido completo por el Valle Sagrado.",
        etiqueta: "",
        imagen: "/paquetes-cusco/valle-sagrado.avif",
        itinerario: {
            horarios: "HORARIO: 6:40 AM – 7:00 PM",
            detalle:[
                "Comenzaremos con el recojo en su hotel en Cusco para dirigirnos a Chinchero, un pueblo lleno de tradición, donde veremos sus muros incas, la iglesia colonial y viviremos una experiencia en el centro textil con familias locales.",
                "Seguiremos hacia Moray, un conjunto de terrazas circulares que los Incas usaron como laboratorio agrícola, un lugar realmente sorprendente. Muy cerca visitaremos las famosas Salineras de Maras, con más de 3,000 pozos de sal que forman un paisaje único. En Urubamba disfrutaremos de un almuerzo buffet con la mejor gastronomía local.",
                "Por la tarde, llegaremos a Ollantaytambo, conocida como “La última ciudad Inca viviente”, donde recorreremos sus templos y calles de piedra. Para finalizar, visitaremos Písac, famoso por su mercado artesanal y su sitio arqueológico, desde donde se obtiene una de las vistas más impresionantes del Valle Sagrado.",
                "Luego estaremos retornando a Cusco, donde la movilidad lo dejará a solo una cuadra de la Plaza de Armas, en el corazón de la ciudad."
            ],
            incluye: [
                "Movilidad turística confortable.",
                "Guía oficial de turismo profesional.",
                "Ingresos a todos los atractivos turísticos mencionados.",
                "Almuerzo buffet en Urubamba.",
            ],
            noIncluye: ["Propinas.", "Gastos personales.", "Alimentación no mencionada."],
        },
    },
    {
        dias: "Full Day",
        titulo: "VALLE SAGRADO TRADICIONAL",
        slug: "valle-sagrado-tradicional",
        descripcion:
            "Descubre Pisaq, Ollantaytambo, Chinchero y el Mercado de Corao en un recorrido cultural lleno de historia y tradición andina.",
        etiqueta: "MÁS VENDIDO",
        imagen: "/paquetes-cusco/valle-sagrado-tradicional.avif",
        itinerario: {
            horarios: "HORARIO: 8:00 AM – 6:30 PM",
            detalle:[
                "Iniciaremos con el recojo desde su hotel en Cusco, para dirigirnos hacia el tradicional Mercado de Corao, donde podrá apreciar artesanías, tejidos y productos locales.",
                "Continuaremos hacia el Mirador de Taray, desde donde se disfruta de una vista espectacular del Valle Sagrado y sus terrazas de cultivo.",
                "Nuestro recorrido sigue hacia el complejo arqueológico de Pisaq, famoso por sus andenes y templos incas en lo alto de la montaña. Luego visitaremos el pueblo de Pisaq, conocido por su colorido mercado artesanal, ideal para adquirir recuerdos.",
                "Posteriormente nos trasladaremos a Urubamba, donde disfrutaremos de un delicioso almuerzo buffet con los mejores sabores de la región.",
                "Por la tarde, visitaremos la impresionante fortaleza de Ollantaytambo, conocida como “la última ciudad inca viviente”, con sus templos, andenes y calles de piedra que aún conservan su esencia ancestral.",
                "Finalmente, retornaremos a la ciudad del Cusco, llegando cerca de la Plaza de Armas."
            ],
            incluye: [
                "Recojo desde hotel en Cusco.",
                "Transporte turístico ida y vuelta.",
                "Guía oficial de turismo.",
                "Ingreso a los sitios arqueológicos (Boleto Turístico Parcial).",
                "Almuerzo buffet en Urubamba.",
            ],
            noIncluye: ["Propinas.", "Gastos personales.", "Bebidas en el almuerzo."],
        },
    },
    {
        dias: "Full Day",
        titulo: "MARAS + MORAY",
        slug: "maras-moray",
        descripcion:
            "Visita Chinchero, el laboratorio agrícola de Moray y las famosas Salineras de Maras en un full day rodeado de paisajes andinos.",
        etiqueta: "",
        imagen: "/paquetes-cusco/maras-moray.avif",
        itinerario: {
            horarios: "HORARIO: 8:30 AM – 2:30 PM",
            detalle:[
                "Empezaremos con el recojo desde su hotel en Cusco para dirigirnos al pintoresco pueblo de Chinchero, conocido como la “tierra del arcoíris”. Aquí visitaremos un centro textil tradicional (Awana), donde las familias locales nos mostrarán las técnicas ancestrales de tejido y teñido con productos naturales, manteniendo viva la herencia de los incas.",
                "Continuaremos hacia el complejo agrícola de Moray, un sorprendente laboratorio inca compuesto por terrazas circulares que servían para experimentar con distintos microclimas y cultivos.",
                "Luego nos dirigiremos a las famosas Salineras de Maras, un impresionante conjunto de más de 3,000 pozos de sal, explotados artesanalmente desde tiempos preincaicos. El contraste del color blanco de los pozos con el paisaje montañoso lo convierte en un lugar perfecto para fotografías inolvidables.",
                "Finalmente, retornaremos a la ciudad de Cusco, llegando cerca de la Plaza de Armas."
            ],
            incluye: [
                "Recojo desde el hotel en Cusco.",
                "Transporte turístico ida y vuelta.",
                "Guía profesional de turismo.",
                "Boleto de ingreso a Moray (Boleto Turístico Parcial).",
                "Boleto de ingreso a Salineras de Maras.",
            ],
            noIncluye: ["Compra de Souvenirs.", "Alimentos."],
        },
    },
    {
        dias: "Full Day",
        titulo: "MACHU PICCHU",
        slug: "machu-picchu-full-day",
        descripcion:
            "Viaja en tren panorámico, sube en bus Consetur y disfruta de un tour guiado en Machu Picchu, maravilla del mundo moderno.",
        etiqueta: "RECOMENDADO",
        imagen: "/paquetes-cusco/machu-picchu.avif",
        itinerario: {
            horarios: "Según horario de tren",
            detalle:[
                "Nuestro tour comienza con el recojo desde tu hotel en Cusco según el horario de tren, para luego viajar a la estación de Ollantaytambo y disfrutar de un hermoso recorrido en tren (Expedition, Vistadome, Observatory) rodeado de paisajes andinos hasta llegar al poblado de Aguas Calientes.",
                "Desde aquí,  nuestro asistente te acompañara a tomar los buses de Consetur, en un trayecto de unos 30 minutos, que nos conducirá hasta la entrada del Santuario. Nuestro guía oficial de turismo estará esperando en la puerta de Machu Picchu para iniciar un recorrido guiado de aproximadamente 2 horas y media, explorando los templos, recintos ceremoniales, terrazas y miradores que hacen de esta maravilla del mundo un lugar único.",
                "Al finalizar el guiado, tendrás tiempo libre para recorrer por tu cuenta y tomar fotografías inolvidables. Luego retornaremos en bus hacia Aguas Calientes, donde podrás aprovechar tu tiempo visitando lugares como el Mariposario, el Museo de Machu Picchu, las cataratas de Mandor o relajarte en las famosas aguas termales. Además, no olvides pasear por las pintorescas calles del pueblo.",
                "➡️ Importante: Te recomendamos reservar con anticipación, ya que el acceso a Machu Picchu está limitado y los boletos se agotan rápidamente. Existen 3 circuitos disponibles, por lo que es fundamental elegir el que más se acomode a tu interés para que disfrutes al máximo esta experiencia.",
                "Al final de la jornada, abordaremos nuevamente el tren de regreso y, desde Ollantaytambo, un transporte turístico lo llevará de vuelta a Cusco.",
                "Una experiencia inolvidable que quedará grabada para siempre en tu memoria viajera."
            ],
            incluye: [
                "Recojo desde el hotel en Cusco.",
                "Transporte turístico Cusco – Ollantaytambo – Cusco.",
                "Tickets de tren ida y vuelta.",
                "Tickets de bus Consetur (Aguas Calientes – Machu Picchu – Aguas Calientes).",
                "Entrada al Santuario de Machu Picchu.",
                "Tour guiado en Machu Picchu con guía profesional.",
            ],
            noIncluye: [
                "Alimentación no mencionada.",
                "Entradas a Museo, Cataratas, Aguas Termales o Mariposario.",
                "Gastos personales y propinas.",
            ],
        },
    },
    {
        dias: "Full Day",
        titulo: "MONTAÑA DE COLORES TREKKING",
        slug: "montana-colores-trekking",
        descripcion:
            "Trekking a la impresionante Montaña de 7 Colores – Vinicunca, rodeada de paisajes altoandinos y glaciares majestuosos.",
        etiqueta: "",
        imagen: "/paquetes-cusco/trekking-vinicunca.avif",
        itinerario: {
            horarios: "HORARIO: 4:30 AM – 5:00 PM",
            detalle:[
                "Muy temprano, entre las 04:30 am, pasaremos por tu hotel en Cusco para iniciar la aventura hacia la famosa Montaña de 7 Colores – Vinicunca. Después de unas dos horas de viaje en bus turístico, llegaremos al poblado de Cusipata, donde nos espera un delicioso desayuno buffet que nos dará la energía necesaria para la caminata.",
                "Continuaremos una hora más en transporte hasta llegar al punto de inicio del trekking. Desde allí comenzaremos una caminata de 1 hora y 30 minutos aproximadamente, rodeados de impresionantes paisajes altoandinos, glaciares, manadas de llamas y alpacas que acompañan el camino.",
                "Al llegar a la cima, a más de 5,000 m.s.n.m., nos encontraremos con la maravillosa Montaña Arcoíris de Vinicunca, un espectáculo natural único que deslumbra por sus tonalidades rojizas, turquesas y doradas. Aquí, nuestro guía te contará la historia, geología y el significado cultural de este mágico lugar, además de darte el tiempo suficiente para tomar fotografías y disfrutar la experiencia.",
                "Luego iniciaremos el descenso para retornar a Cusipata, donde nos esperará un almuerzo buffet. Finalmente, emprenderemos el viaje de regreso a Cusco, llegando aproximadamente a las 17:00 pm."
            ],
            incluye: [
                "Recojo desde hotel en Cusco.",
                "Transporte turístico ida y vuelta.",
                "Desayuno y almuerzo buffet en Cusipata.",
                "Guía profesional de turismo.",
                "Ingreso a la Montaña.",
                "Bastones de Trekking.",
                "Balón de Oxígeno.",
            ],
            noIncluye: [
                "Propinas.",
                "Gastos personales.",
                "Renta de Caballo o Moto Lineal.",
            ],
        },
    },
    {
        dias: "Full Day",
        titulo: "MONTAÑA DE COLORES EN CUATRIMOTOS",
        slug: "montana-colores-cuatrimotos",
        descripcion:
            "Vive la adrenalina en cuatrimoto hasta la base de la Montaña de Colores y disfruta de un paisaje único a más de 5,000 m.s.n.m.",
        etiqueta: "",
        imagen: "/paquetes-cusco/cuatrimoto-en-motana-vinicunca.avif",
        itinerario: {
            horarios: "HORARIOS DE SALIDA: 3 AM, 4 AM, 6 AM, 8:30 AM, 10 AM",
            detalle:[
                "Comenzaremos muy temprano con el recojo desde tu hotel en Cusco para viajar en bus turístico durante unas 2 horas hasta el poblado de Cusipata, donde disfrutaremos de un energético desayuno buffet andino.",
                "Luego continuaremos hacia la base de las cuatrimotos, donde recibiremos una breve instrucción de seguridad y el equipo necesario (casco y guantes). Tendremos una práctica de 15 minutos y después inicia la parte más emocionante: el recorrido en cuatrimoto por unos 30 minutos a través de impresionantes paisajes altoandinos con montañas, valles y llamas, hasta llegar cerca del acceso a la Montaña de Colores.",
                "Desde allí realizaremos una corta caminata de 7 minutos hasta alcanzar los 5,000 m.s.n.m. en la cima de Vinicunca, donde admiraremos los sorprendentes tonos naturales de la montaña y capturaremos fotografías espectaculares.",
                "Al finalizar la visita, regresaremos en cuatrimoto a la base y luego en transporte hasta Cusipata, donde nos espera un delicioso almuerzo buffet. Finalmente retornaremos a Cusco alrededor de las 17:00 hrs, culminando una experiencia inolvidable de adrenalina y naturaleza."
            ],
            incluye: [
                "Recojo desde hotel en Cusco.",
                "Transporte turístico ida y vuelta.",
                "Cuatrimoto individual o compartida.",
                "Equipo de seguridad (casco, guantes).",
                "Instrucción y práctica de manejo.",
                "Desayuno y almuerzo buffet en Cusipata.",
                "Guía profesional de turismo.",
                "Ingreso a la Montaña.",
                "Bastones de Trekking.",
                "Balón de Oxígeno.",
            ],
            noIncluye: [
                "Propinas.",
                "Gastos personales.",
                "Renta de Caballo o Moto Lineal.",
            ],
        },
    },
    {
        dias: "Full Day",
        titulo: "LAGUNA HUMANTAY TREKKING",
        slug: "laguna-humantay",
        descripcion:
            "Caminata hacia la Laguna Humantay, rodeada de glaciares y con impresionantes vistas del nevado Salkantay en plena cordillera.",
        etiqueta: "",
        imagen: "/paquetes-cusco/trekking-laguna-humantay.avif",
        itinerario: {
            horarios: "HORARIO: 4:30 AM – 4:45 PM",
            detalle:[
                "A las 4:30 am pasaremos a recogerlos de su hotel en Cusco para dirigirnos en bus hacia el poblado de Mollepata (3,000 m.s.n.m.), donde disfrutaremos de un desayuno buffet.",
                "Luego continuaremos el viaje por paisajes andinos hasta llegar al campamento de Soraypampa (3,900 m.s.n.m.), punto de inicio de la caminata. Desde aquí empezaremos el trekking hacia la Laguna Humantay, una ruta de 1 hora y 30 minutos aproximadamente en ascenso.",
                "Al llegar a la Laguna Humantay (4,200 m.s.n.m.), podremos apreciar sus aguas turquesas rodeadas de glaciares y la imponencia del nevado Salkantay. Tendremos tiempo para descansar, tomar fotografías y disfrutar de este lugar único.",
                "Posteriormente descenderemos hacia Soraypampa para retornar en bus a Mollepata, donde nos espera un almuerzo buffet. Finalmente, regresaremos a Cusco, llegando alrededor de las 5:00 pm, donde la movilidad nos dejara a solo una cuadra de la Plaza de Armas."
            ],
            incluye: [
                "Recojo desde hotel en Cusco.",
                "Transporte turístico ida y vuelta.",
                "Desayuno y almuerzo buffet en Mollepata.",
                "Guía profesional de turismo.",
                "Ingreso a la Laguna Humantay.",
                "Bastones de Trekking.",
                "Balón de Oxígeno.",
            ],
            noIncluye: ["Propinas.", "Gastos personales.", "Caballos opcionales para el ascenso."],
        },
    },
    {
        dias: "Full Day",
        titulo: "TOUR MÍSTICO",
        slug: "tour-mistico",
        descripcion:
            "Conexión espiritual y naturaleza en la Morada de los Dioses, Ciudad de Duendes, Humedal de Huasao y Bosque de los Ents.",
        etiqueta: "",
        imagen: "/paquetes-cusco/humedal-de-huasao.avif",
        itinerario: {
            horarios: "HORARIO: 7:00 AM – 3:30 PM",
            detalle:[
                "Nuestro recorrido inicia a las 08:30 AM con el recojo desde tu hotel en Cusco. Desde allí partimos hacia la Morada de los Dioses, un espacio místico donde enormes esculturas talladas en piedra se mezclan con la naturaleza andina, ofreciendo escenarios únicos para admirar y tomarse fotografías.",
                "Continuamos hacia la mágica Ciudad de los Duendes, un valle encantado rodeado de árboles centenarios. Aquí, los más pequeños podrán dejar mensajes u ofrendas en los altares, mientras disfrutan de un ambiente lleno de historias y leyendas sobre estos seres juguetones.",
                "Seguiremos el recorrido hacia el Humedal de Huasao, un ecosistema natural lleno de vida, perfecto para la observación de aves y pequeños animales. La aventura se intensifica en el Bosque de los Ents, donde los árboles parecen cobrar vida con rostros y formas sorprendentes.",
                "Además, este lugar ofrece actividades extremas como columpios gigantes y cuatrimotos, ideales para quienes buscan un toque de adrenalina.",
                "Finalmente, regresamos a Cusco después de haber vivido un viaje lleno de magia, naturaleza y diversión en familia."
            ],
            incluye: [
                "Recojo desde hotel en Cusco.",
                "Transporte turístico ida y retorno.",
                "Ingreso a los atractivos mencionados.",
                "Guía profesional de turismo.",
            ],
            noIncluye: [
                "Alimentación y bebidas.",
                "Actividades opcionales en el Bosque de los Ents (columpios, cuatrimotos, etc.).",
                "Propinas u otros gastos personales.",
            ],
        },
    },
    {
        dias: "Full Day",
        titulo: "VALLE SUR",
        slug: "valle-sur",
        descripcion:
            "Explora el Valle Sur con visitas a Tipón, Pikillacta y la Capilla Sixtina de Andahuaylillas en un recorrido lleno de cultura.",
        etiqueta: "",
        imagen: "/paquetes-cusco/tipon.avif",
        itinerario: {
            horarios: "HORARIO: 9:00 AM – 3:30 PM",
            detalle:[
                "A Nuestro recorrido inicia con el recojo en tu hotel en Cusco a las 08:30 AM. Viajaremos hacia el sureste de la ciudad para adentrarnos en el Valle Sur.",
                "La primera parada será en Tipón, un impresionante complejo arqueológico inca famoso por sus canales de agua perfectamente diseñados y su avanzado sistema hidráulico, considerado una verdadera obra maestra de ingeniería.",
                "Continuamos hacia Pikillacta, antigua ciudad preinca perteneciente a la cultura Wari. Sus grandes murallas, calles y plazas revelan la organización urbana de una de las civilizaciones más importantes antes de los incas.",
                "Más adelante visitaremos la Iglesia de Andahuaylillas, conocida como la “Capilla Sixtina de América”, por la belleza de sus murales, lienzos y altares barrocos cubiertos de pan de oro.",
                "Finalmente, realizaremos una parada en el pintoresco poblado de Saylla, famoso por sus deliciosos chicharrones (opcional para almorzar). Después, retornaremos a media cuadra de la plaza de armas de Cusco con el corazón lleno de cultura, historia y tradición."
            ],
            incluye: [
                "Recojo desde hotel en Cusco.",
                "Transporte turístico ida y retorno.",
                "Boleto Turístico Parcial del Cusco (BTC) para Tipón y Pikillacta.",
                "Boleto de ingreso a la Iglesia de Andahuaylillas.",
                "Guía profesional de turismo.",
                "Ingresos a Tipón, Pikillacta y Andahuaylillas (si se adquiere el Boleto Turístico y el ingreso a la iglesia)."
            ],
            noIncluye: ["Alimentación (opcional en Saylla).", "Propinas u otros gastos personales."],
        },
    },
    {
        dias: "Medio día",
        titulo: "BUS ESCÉNICO 180°",
        slug: "bus-escenico-180",
        descripcion:
            "Disfruta de un recorrido panorámico en bus escénico por Cusco con danzas en vivo, cultura y experiencias interactivas.",
        etiqueta: "",
        imagen: "/paquetes-cusco/bus-escenico.avif",
        itinerario: {
            horarios: "HORARIO: 2:00 PM – 6:10 PM",
            detalle:[
                "Comenzamos nuestro recorrido a las 14:00 hrs. en el centro histórico desde la Plaza de Armas, donde nuestra guía compartirá la fascinante historia de este magnifico lugar, uno de los más bellos de Sudamérica. Nos dirigimos por Av. El Sol hacia el templo de Qoricancha, el recinto dorado de los Incas, recibiendo explicaciones detalladas sobre su historia.",
                "Continuamos nuestro trayecto admirando el hermoso Gran Mural Histórico, obra del gran artista cusqueño Juan Bravo Vizcarra. En la Av. El Sol, abordamos el Bus Escénico para disfrutar de una vista panorámica de la ciudad hasta llegar al mirador de Cristo Blanco, donde capturamos impresionantes imágenes de la Capital Histórica del Perú.",
                "A medida que avanza el bus, sorpresivamente nos encontramos con personajes icónicos de la festividad de Paucartambo, como Majeño, Pablitos, Saqras y la Kukuli, quienes nos deleitan con sus danzas desde la comodidad de nuestros asientos hasta llegar a Laguna de Huayllarccocha, donde nuestro elenco realiza la escenificación del rapto de Kukuli. La experiencia culmina en un selecto restobar turístico, donde presenciamos la preparación de la bebida destacada, el 'Pisco Sour', reconocido internacionalmente.",
                "Tras su elaboración, degustamos esta exquisita bebida con una excelente vista de la ciudad, acto seguido retornaremos a la ciudad del Cusco."
            ],
            incluye: [
                "Bus Cusco 180.",
                "Guía profesional de turismo.",
                "Danzas en ruta.",
                "Escenificación del rapto de kukuli.",
                "Convivencia con camélidos sudamericanos.",
                "Demostración y degustación de Pisco sour."
            ],
            noIncluye: ["Alimentos no mencionados.", "Propinas(opcional)."],
        },
    },
    {
        dias: "Medio Día",
        titulo: "MORADA DE LOS DIOSES EN CUATRIMOTO",
        slug: "morada-dioses-cuatrimoto",
        descripcion:
            "Aventura en cuatrimoto hasta la Morada de los Dioses, un espacio sagrado con esculturas talladas en piedra y paisajes únicos.",
        etiqueta: "",
        imagen: "/paquetes-cusco/morada-de-los-dioses.avif",
        itinerario: {
            horarios: "SALIDAS: 9 AM, 11 AM, 2 PM, 3 PM",
            detalle:[
                "Iniciamos la aventura con el recojo desde tu hotel, para trasladarnos en transporte privado durante 20 minutos hasta nuestra base ubicada en el sector de Tica Tica. Allí recibirás una breve charla de seguridad junto con el equipo necesario (casco y guantes), además de una práctica rápida para que te familiarices con la cuatrimoto.",
                "Una vez listos, comenzaremos el recorrido de aproximadamente 35 minutos en cuatrimotos a través de paisajes altoandinos que nos llevarán hasta la Morada de los Dioses, un espacio donde las esculturas talladas en piedra cobran vida mostrando de manera majestuosa a los dioses andinos, personajes mitológicos y símbolos de la cultura inca.",
                "Nuestro guía profesional te acompañará durante todo el recorrido, compartiendo historias, leyendas y el significado de cada escultura.",
                "Tendrás tiempo libre para recorrer por tu cuenta, tomarte fotos y conectar con la energía del lugar.",
                "Luego, abordaremos nuevamente las cuatrimotos para retornar a la base y desde allí nuestro transporte privado nos llevará de regreso a Cusco, finalizando el tour en la Plazoleta Regocijo, en pleno centro histórico de la ciudad."
            ],
            incluye: [
                "Recojo desde el hotel.",
                "Transporte privado Cusco – Base – Cusco.",
                "Cuatrimoto individual o compartida.",
                "Equipo de seguridad (casco, guantes).",
                "Instrucción y práctica de manejo.",
                "Guía profesional de turismo.",
                "Ticket de ingreso a la Morada de los Dioses."
            ],
            noIncluye: ["Alimentación.", "Propinas.", "Gastos personales o servicios no mencionados."],
        },
    },
    {
        dias: "Medio Día",
        titulo: "MARAS Y MORAY EN CUATRIMOTOS",
        slug: "maras-moray-cuatrimotos",
        descripcion:
            "Recorre en cuatrimoto los paisajes del Valle Sagrado, visitando Moray y las impresionantes Salineras de Maras en media jornada.",
        etiqueta: "",
        imagen: "/paquetes-cusco/maras-y-moray-en-cuatrimoto.avif",
        itinerario: {
            horarios: "HORARIOS: TURNOS MAÑANA DE 6:50 AM – 1PM , TURNOS TARDE DE 1 PM – 6:30PM",
            detalle:[
                "Iniciaremos con el recojo desde tu hotel en Cusco, viajando hacia el Valle Sagrado mientras disfrutamos de vistas a nevados, campos de cultivo y pintorescos pueblos andinos.",
                "Después de 1 hora y 30 minutos, llegaremos a Cruzpata, punto de inicio de la aventura. Aquí recibirás tu equipo de seguridad (casco, guantes) y una breve charla de manejo para familiarizarte con la cuatrimoto.",
                "La ruta comienza rumbo a Moray, donde recorreremos caminos de tierra rodeados de paisajes espectaculares. En este sitio arqueológico inca conoceremos las famosas terrazas circulares, utilizadas como centro agrícola en tiempos ancestrales.",
                "Luego continuaremos hacia Maras, atravesando escenarios andinos de gran belleza. Desde allí nos trasladaremos en bus turístico a las impresionantes Salineras de Maras, un lugar único con más de 3,000 pozos de sal explotados artesanalmente desde la época inca.",
                "Al finalizar, retornaremos en cuatrimoto hasta Cruzpata y desde allí en bus hacia Cusco, llegando aproximadamente a tu hotel."
            ],
            incluye: [
                "Recojo desde hotel en Cusco.",
                "Transporte turístico ida y vuelta.",
                "Cuatrimoto individual o compartida.",
                "Instrucción y práctica de manejo.",
                "Equipo de seguridad (casco, guantes).",
                "Guía profesional de turismo.",
                "Ingresos a Moray y Salineras de Maras."
            ],
            noIncluye: ["Propinas.", "Alimentación.", "Gastos personales."],
        },
    },
    {
        dias: "Full Day",
        titulo: "PUENTE QESWACHAKA",
        slug: "puente-qeswachaka",
        descripcion:
            "Visita el puente colgante inca de Q’eswachaka y disfruta del circuito de 4 lagunas rodeado de paisajes andinos únicos.",
        etiqueta: "",
        imagen: "/paquetes-cusco/puente-qeswachaca.avif",
        itinerario: {
            horarios: "HORARIO: 4:30 AM – 5:30 PM",
            detalle:[
                "Iniciamos con el recojo desde tu hotel en el centro histórico de Cusco. Partiremos rumbo al sur en transporte turístico hasta llegar al poblado de Cusipata, donde disfrutaremos de un delicioso desayuno andino.",
                "Continuamos hacia el Mirador de Combapata, desde donde observaremos la impresionante unión de los ríos Salcca y Vilcanota. Luego visitaremos la Laguna de Pampamarca, con una breve explicación guiada, y seguiremos hasta el Volcán de Pabellones, un punto natural ideal para explorar y tomar fotografías.",
                "Nuestra siguiente parada será en el distrito de Yanaoca, donde tendremos un breve descanso para servicios y compras. Seguidamente nos dirigiremos hacia el atractivo principal: el Puente Inca Q’eswachaka, ubicado sobre el río Apurímac a más de 3,700 m.s.n.m. Aquí disfrutaremos de una visita guiada de aproximadamente 1 hora para conocer la historia de este puente colgante de fibra vegetal de ichu, único en el mundo y renovado cada año por las comunidades locales. Tendrás tiempo libre para caminar sobre el puente, tomar fotos y vivir esta experiencia ancestral.",
                "Al mediodía, continuaremos hacia Tungasuca y las 4 lagunas andinas: Pampamarca, Asnacocha, Acopia y Pomacanchi, lugares ideales para conectarse con la naturaleza, observar aves y disfrutar de paisajes únicos. Posteriormente, degustaremos un almuerzo campestre.",
                "Finalmente, retornaremos hacia Cusco, llegando alrededor de las 17:00 hrs, concluyendo un recorrido cultural y natural lleno de historia y tradición inca."
            ],
            incluye: [
                "Recojo desde hotel en Cusco.",
                "Transporte turístico ida y retorno.",
                "Guía profesional de turismo.",
                "Ticket de ingreso al Puente Q’eswachaka.",
                "Desayuno y almuerzo buffet.",
                "Botiquín de primeros auxilios y balón de oxígeno.",
            ],
            noIncluye: ["Propinas.", "Gastos personales."],
        },
    },
    {
        dias: "Full Day",
        titulo: "SIETE LAGUNAS DE AUSANGATE",
        slug: "siete-lagunas-de-ausangate",
        descripcion:
            "Trekking por el circuito de 7 lagunas al pie del nevado Ausangate, rodeado de montañas nevadas y relajantes aguas termales.",
        etiqueta: "",
        imagen: "/paquetes-cusco/7-lagunas-de-ausangate.avif",
        itinerario: {
            horarios: "HORARIO: 4:30 AM – 6:40 PM",
            detalle: [
                "Nuestra aventura comienza muy temprano con el recojo desde tu hotel en Cusco para dirigirnos en transporte privado hacia la comunidad de Pacchanta, ubicada al pie del majestuoso nevado Ausangate. Al llegar, una familia local nos recibirá con un desayuno andino tradicional que nos dará la energía necesaria para iniciar el recorrido.",
                "Empezamos la caminata por la cordillera andina hacia el circuito de las 7 Lagunas de Ausangate, rodeados de paisajes únicos con montañas nevadas y glaciares impresionantes.",
                "La primera parada será en la laguna Comercocha o “laguna verde”, seguida de las hermosas lagunas Patacocha, Azulcocha y China Otorongo, cada una con colores que varían entre turquesa, azul profundo y esmeralda. Continuamos visitando las lagunas Otorongo Macho, Alqacocha y Pucacocha, completando así un recorrido de aproximadamente 15 km en plena naturaleza.",
                "Durante el trayecto, nuestro guía te compartirá historias y tradiciones de la zona, además de ofrecerte tiempo para fotografías en cada laguna. Luego retornaremos a Pacchanta, donde nos espera un almuerzo típico de la región.",
                "Para cerrar con broche de oro, quienes lo deseen podrán relajarse en las aguas termales de Pacchanta, disfrutando de la vista al nevado Ausangate antes de emprender el retorno a Cusco, llegando alrededor de las 18:00 hrs."
            ],
            incluye: [
                "Recojo desde hotel en Cusco.",
                "Transporte turístico ida y retorno.",
                "Desayuno y almuerzo tradicional.",
                "Guía profesional de turismo.",
                "Ingresos para 7 Lagunas.",
                "Botiquín de primeros auxilios y balón de oxígeno."
            ],
            noIncluye: ["Ingreso a las aguas termales de Pacchanta.", "Propinas (opcionales).", "Gastos personales no mencionados."],
        }
    },
    {
        dias: "Full Day",
        titulo: "WAQRAPUKARA",
        slug: "waqrapukara",
        descripcion:
            "Aventura de trekking hacia Waqrapukara, la imponente fortaleza inca con forma de cuernos y vistas espectaculares.",
        etiqueta: "",
        imagen: "/paquetes-cusco/wakrapukara.avif",
        itinerario: {
            horarios: "HORARIO: 4:30 AM A 06:00 PM",
            detalle:[
                "Iniciamos la aventura muy temprano con el recojo desde tu hotel en Cusco entre las 04:30 a.m., para luego emprender un viaje en transporte turístico por unas 2 horas hasta Cusipata, donde disfrutaremos de un delicioso desayuno buffet andino.",
                "Continuamos la ruta por aproximadamente 2 horas más hasta llegar al pueblo de Santa Lucía, desde donde iniciaremos una caminata de 1 hora en medio de paisajes andinos, rodeados de valles, montañas y la flora y fauna típica de la región. En el punto más alto del trayecto haremos una pausa para contemplar las espectaculares vistas panorámicas y tomar fotografías.",
                "Finalmente llegaremos al imponente complejo arqueológico de Waqrapukara, considerado un antiguo santuario político y religioso inca. Nuestro guía nos brindará una explicación cultural e histórica sobre la importancia de este sitio, mientras exploramos sus andenes, recintos y miradores naturales. Tendrás tiempo libre para recorrer y tomar fotos inolvidables.",
                "Después de la visita, retornaremos hacia Cusipata para disfrutar de un almuerzo campestre, y luego emprenderemos el viaje de regreso a Cusco, llegando alrededor de las 18:00 hrs, donde concluiremos la experiencia en la Plazoleta Regocijo."
            ],
            incluye: [
                "Recojo desde hotel en Cusco.",
                "Transporte turístico ida y retorno.",
                "Desayuno buffet y almuerzo.",
                "Guía profesional de turismo.",
                "Botiquín de primeros auxilios y balón de oxígeno.",
                "Ticket de ingreso a Waqrapukara.",
            ],
            noIncluye: ["Propinas (opcionales).", "Gastos personales no mencionados."],
        },
    }
];