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
    	titulo: "Cañón del Colca",
    	slug: "canon-del-colca",
    	descripcion:
      		"Tour al Cañón del Colca desde Arequipa: vive la experiencia de observar el vuelo del cóndor, pueblos andinos y paisajes impresionantes.",
    	etiqueta: "RECOMENDADO",
    	imagen: "/paquetes-arequipa/canon-del-colca.avif",
    	itinerario: {
      		horarios: "HORARIO: 3:30 AM – 05:00 PM",
      		detalle: [
        		"Inicia Muy temprano, desde las 3:00 a 3:30 am., pasaremos a recogerlo de su hospedaje (siempre que esté dentro del casco histórico de la ciudad) para dirigirnos al valle del Colca.",
        		" Luego de 3 horas aprox. llegaremos a Chivay donde tendremos el desayuno.",
        		"Luego nos dirigimos a la Cruz del Cóndor (tiempo de viaje: 1 1/2 horas aprox.). Este lugar, considerado sagrado y místico, es donde podremos apreciar uno de los cañones más profundos del mundo y donde se encuentra el Santuario del Cóndor, lugar de observación del espectacular vuelo del Cóndor.",
        		"Continuamos el tour haciendo paradas en todos los miradores, conociendo atractivos como andenerías pre-incas e incas.",
        		"Desde el mirador de Antahuilque, en el pueblo de Pinchollo, se aprecian tumbas colgantes y litomaquetas.",
        		"En el pueblo de Maca resalta la iglesia más bella de la época colonial: Santa Ana y en Yanque, cerca al río, podrán disfrutar de las aguas termo medicinales con temperaturas que oscilan entre los 30° a 34°.",
        		"Opcional: Encontramos actividades como el Zip Linning.",
        		"12:00 mediodía. El servicio de almuerzo buffet será en el pueblo pintoresco de Chivay.",
				"Luego retornamos a Arequipa.",
				"En el trayecto nos detendremos en el Mirador de los Volcanes (4,910 m.s.n.m.), desde donde se aprecia la cordillera de Chila, los nevados Ampato (donde se encontró a la niña inca Juanita) y Hualca Hualca, el volcán Sabancaya que está en actividad, la cadena de Chachani Misti y Pichu Pichu y otros.",
				"En la ruta encontramos deshielos, los Bofedales de Tocra (se aprecia diversidad de aves silvestres), llamas y alpacas en su hábitat y Pampa Cañahuas (Reserva Nacional de Aguada Blanca y Salinas) donde veremos las vicuñas en estado salvaje protegidas por las leyes del Perú.",
				"Arribo a Arequipa 5:00 pm. aprox.",
				"Fin de nuestros servicios, Tour Cañón del Colca desde Arequipa."
      		],
      		incluye: [
        		"Recojo del hotel (Centro de Arequipa).",
        		"Guía profesional de turismo.",
        		"Asistencia permanente.",
        		"Desayuno continental.",
        		"Movilidad turística."
      		],
      		noIncluye: [
        		" Boleto Turístico de acceso al Colca: Peruano: S/.40.00 / Estudiante (niño): S/.5.00, Extranjero: S/.70.00 / Estudiante (niño): S/.20.00, Ticket de ingreso a los Baños Termales (Opcional): S/.15.00",
       	 		"Regalos, souvenirs.",
        		"Snacks y bebidas durante el recorrido.",
        		"Propinas por servicio (opcionales, voluntarias).",
        		"Almuerzo servicio buffet."
      		]
    	}
  	},
  	{
    	dias: "Medio Día",
    	titulo: "Rafting en Arequipa – Río Chili",
    	slug: "rafting-rio-chili",
    	descripcion:
      		"Disfruta la adrenalina del rafting en el río Chili con rápidos clase II, III y IV, rodeado de paisajes impresionantes.",
    	etiqueta: "",
    	imagen: "/paquetes-arequipa/rafting.avif",
    	itinerario: {
      		horarios: "Duración del tour 3horas",
      		detalle: [
        		"Recogida y traslado Iniciaremos la aventura recogiendo a nuestros pasajeros en el punto de encuentro previamente acordado.",
        		"Desplazamiento al río Nos dirigiremos hacia el río Chili, ubicado a solo 20 minutos de la ciudad.",
        		"Charla de seguridad Antes de comenzar la actividad, realizaremos una breve sesión informativa sobre medidas de seguridad y técnicas para disfrutar al máximo la experiencia.",
        		"Equipamiento Entregaremos a cada participante la indumentaria necesaria para la actividad, asegurando un ajuste adecuado antes de ingresar al agua.",
        		"Inicio de la aventura Una vez acomodados en las balsas, iniciaremos el descenso por el río, enfrentando rápidos de niveles II, III y IV, que garantizan una experiencia emocionante y segura.",
        		"Equipo y seguridad Cada balsa estará guiada por un capitán experimentado. Adicionalmente, y dependiendo del tamaño del grupo, contaremos con kayakistas de seguridad, profesionales altamente capacitados que navegarán individualmente para brindar asistencia en caso necesario.",
        		"Disfrute del entorno Durante el recorrido, los participantes podrán admirar los impresionantes paisajes que ofrece el cañón del río Chili, convirtiendo la travesía en una experiencia inolvidable.",
				"Retorno Al finalizar la actividad, trasladaremos a los pasajeros de regreso al punto de partida, asegurando una experiencia completa y sin preocupaciones."
      		],
      		incluye: [
        		"Transporte en minibus (Ida y retorno).",
        		"Equipo completo de rafting.",
        		"Instructor en español.",
        		"Kayak de seguridad.",
        		"Guía de rafting.",
        		"Recojo del punto acordado."
      		],
      		noIncluye: [
        		"Fotografías de la experiencia.",
        		"Propinas.",
        		"Gastos extras.",
        		"Snacks.",
        		"Seguro de viaje.",
        		"Comida."
      		]
    	}
  	},
  	{
    	dias: "Full Day",
    	titulo: "Cataratas de Capua y Aguas Termales",
    	slug: "cataratas-capua",
    	descripcion:
      		"Explora la Catarata de Capua en Yura y relájate en sus aguas termales en un entorno natural único.",
    	etiqueta: "",
    	imagen: "/paquetes-arequipa/aguas-termales.avif",
    	itinerario: {
      		horarios: "HORARIO: 6:00 PM – 04:00 PM",
      		detalle: [
        		"Recojo y salida: El recorrido comienza con el recojo de los participantes en su hotel, ubicado cerca del Centro Histórico de Arequipa, a partir de las 6:00 a.m.",
        		"Traslado a Yura: Nos dirigiremos a la localidad de Yura, conocida por sus históricos hornos de cal y su encantador entorno natural.",
        		"Ruta de senderismo a la Catarata de Capua: Una vez en Yura, iniciaremos nuestra caminata hacia la impresionante Catarata de Capua.",
        		"Durante el recorrido, podrá disfrutar de paisajes excepcionales que incluyen riachuelos, un pequeño cañón, caídas de agua y grutas naturales.",
        		"Tiempo en la Catarata de Capua: Al llegar a las cataratas, tendrá tiempo libre para relajarse, explorar el entorno y capturar fotografías memorables de este maravilloso lugar.",
        		"Visita a las aguas termales y al Centro Histórico de Yura: Continuaremos nuestro recorrido hacia las Aguas Termales de Yura, reconocidas por sus propiedades medicinales.",
        		"También visitaremos el Centro Histórico de Yura para conocer más sobre su patrimonio y cultura.",
				"Retorno a Arequipa: Finalizaremos el tour con el regreso a Arequipa, con una hora estimada de llegada a las 4:00 p.m."
      		],
      		incluye: [
        		"Recojo del hotel en Arequipa(centro historico de la ciudad).",
        		"Transporte ida y vuelta.",
        		"Guía profesional de turismo.",
        		"Botiquín de primeros auxilios."
      		],
      		noIncluye: ["Gastos extras.", "Alimentación."]
    	}
  	},
  	{
    	dias: "Full Day",
    	titulo: "Laguna de Salinas de Arequipa",
    	slug: "laguna-de-salinas",
    	descripcion:
      		"Maravíllate con la Laguna de Salinas, espejos de agua y flamencos andinos en este tour natural cerca de Arequipa.",
    	etiqueta: "OFERTA",
    	imagen: "/paquetes-arequipa/laguna-de-salinas.avif",
    	itinerario: {
      		horarios: "HORARIO: 6:30 PM – 04:30 PM",
      		detalle: [
        		"Iniciamos el tour a la laguna salinas de Arequipa, con el recojo de los pasajeros desde sus hoteles, en especial de aquellos que esten ubicados en el centro de la ciudad.",
        		"Luego empezaremos nuestro recorrido hacia la laguna de Salinas, donde la primera parada será en el mirador de volcanes del distrito de Chiguata, permitiendonos obervar el volcán Misti, el Chachani y el Pichipichu.",
        		"Posteriormente visitaremos el pueblo de Chiguata, donde podremos realizar un pequeño city tour, así mismo en este pueblito mágico tendras tiempo de tomar tu desayuno.",
        		"Prosiguiendo con el tour pasaremos por alto Simbral que está ubicada a 4200 m.s.n.m. aproximadamente, donde ya se podrá observar la flora típica del lugar, recorriendo un pequeño tramos más llegaremos a la laguna Salinas, en el que podrás ver espejos de agua; claro si es que realizas el tour entre Enero y Marzo, además de la fauna local entre flamencos y llamas.",
        		"Incluso si realizas el tour entre los meses de Abril a Diciembre podrás visitar los centros de extracción de sal, el cual te posibilitará tomar excelentes fotografías.",
        		"Continuando con el recorrido nos dirigiremos hacia las aguas termales de Lojen para disfrutar de un baño relajante y como una actividad opcional está la visita la laguna y represa de Uzuña, donde hay actividades de kayak y pesca.",
        		"Posterior a acabar el tour habrá un tiempo en el pueblo de Chiguata para poder almorzar antes de retornar a la ciudad.",
        		"Finalmente para culminar el tour a la laguna Salinas de Arequipa, retornaremos a la ciudad aproximadamente a eso de las 17:00 horas, dejando a los pasajeros cerca a la plaza de armas."
      		],
      		incluye: [
        		"Recojo desde hotel.",
        		"Transporte compartido.",
        		"Guía profesional de turismo.",
        		"Kit de primeros auxilios."
      		],
      		noIncluye: [
        		"Alimentación (Almuerzo, desayuno).",
        		"Entrada a aguas termales.",
        		"Boleto de entrada al mini volcán Lojen (5 soles por persona).",
        		"Propinas.",
        		"Gastos extra."
      		]
    	}
  	},
  	{
    	dias: "Medio Día",
    	titulo: "City Tour Arequipa: Monasterio Santa Catalina",
    	slug: "city-tour-arequipa",
    	descripcion:
      		"Recorre la Plaza de Armas, templos coloniales y culmina con el Monasterio de Santa Catalina, joya de Arequipa.",
    	etiqueta: "MÁS VENDIDO",
    	imagen: "/paquetes-arequipa/monasterio-santa-catalina.avif",
    	itinerario: {
      		horarios: "HORARIO: 9:00 PM – 12:00 PM",
      		detalle: [
        		"Empezaremos el City Tour desde la Plaza de Armas de Arequipa en donde se dará una explicación detallada de la historia de la Catedral de Arequipa y de los portales que rodean a la Plaza de Armas.",
        		"Posteriormente nos dirigimos hacia la Iglesia de la Compañía de Jesús en donde daremos una breve explicación acerca de la historia de la iglesia y de su construcción.",
        		"Claustros de la Compañía de Jesús, Ubicado en el centro histórico, al costado izquierdo de la Iglesia de la Compañía, con arquería de sillar esculpido, hermosos corredores.",
        		"Casa Tristán del Pozo, es un edificio que para muchos estudiosos de la arquitectura, el frontón de la fachada de esta casona es el mejor exponente de la ornamentación típica de Arequipa, en el Perú.",
        		"Plaza e Iglesia de San Francisco, conforman una de las edificaciones más bellas de la ciudad, siendo el cuarto templo y la tercera casa de religiosos.",
        		"Visitaremos el Monasterio de Santa Catalina considerada una ciudadela colonial dentro de otra ciudad; ahí se pueden apreciar recintos que se construyeron de acuerdo a sus necesidades religiosas; posee calles y avenidas, además tiene su propio cementerio.",
        		"12:00pm – Finalizaremos el tour y los llevaremos de retorno a su hotel."
      		],
      		incluye: [
        		"Recogida en el hotel.",
        		"Guía profesional de turismo.",
        		"Entrada al Monasterio de Santa Catalina."
      		],
      		noIncluye: ["Alimentación.", "Souvenirs.", "Propinas."]
    	}
  	},
  	{
    	dias: "Medio Día",
    	titulo: "Ruta del Sillar",
    	slug: "ruta-del-sillar",
    	descripcion:
      		"Conoce las canteras de Añashuayco y Culebrillas, el origen del sillar y petroglifos milenarios en un recorrido cultural.",
    	etiqueta: "",
    	imagen: "/paquetes-arequipa/ruta-del-sillar.avif",
    	itinerario: {
      		horarios: "HORARIO: 9:00 PM – 13:00 PM",
      		detalle: [
        		"09:00am – Iniciamos nuestro recorrido hacia la Ruta del Sillar que es un recorrido turístico con mucha historia y cultura viva, en donde se visita canteras y zonas en donde se originó el sillar.",
        		"El primer punto en el que nos detendremos será la Cantera de Añashuayco; al cual llegaremos en 45 minutos aprox. Actualmente se encuentra en explotación, los canteros realizan sus labores desde muy temprano; en el lugar podremos apreciar un inmenso cañon con farallones (paredes de ignimbrita) que tienen varios metros de altura, formados por la extracción para la formación de los Sillares.",
        		"En este punto les contaremos la historia del sillar, la elaboración y el uso que se le ha dado desde siempre.",
        		"En esta cantera se podrá apreciar un Megatallado de la Iglesia de la Compañía de Jesús realizado por los propios canteros.",
        		"También podremos visitar a alguno de ellos para que nos puedan explicar cómo es su labor diaria y nos puedan hacer experimentar cortando nosotros mismo uno de sus bloques de piedra.",
        		"Seguidamente nos trasladaremos hacia la Quebrada de Culebrillas, que se encuentra a 30 minutos de distancia de Añashuayco.",
				"Llegando a éste punto haremos una caminata de aproximadamente 20 minutos dentro del pequeño cañón que se formo por el paso del agua , que tiene paredes de 15 a 20 metros, mientras nos adentramos en el mismo las paredes del cañoncito van aumentando de altura.",
				"Al final de la caminata podremos observar petroglifos hechos por la cultura Wari hace mas de mil años.",
				"Antes de retornar a la ciudad observaremos las Apachetas que son formaciones de piedra puestas una encima de la otra que son un símbolo de agradecimiento hacia la naturaleza y también atracción de buena suerte las cuales causan una sensación mística.",
				"12:00pm - Iniciaremos el recorrido de retorno hacia la ciudad de Arequipa.",
				"01:00pm – Llegaremos al centro de Arequipa y los dejaremos cerca a la plaza de armas."
      		],
      		incluye: [
        		"Recogida en el hotel.",
        		"Guía profesional de turismo.",
        		"Transporte Turístico para todo el recorrido."
      		],
      		noIncluye: [
        		"Entrada a las Canteras de Añashuayco: S/. 5.00 (soles por persona).",
        		"Entrada a las Canteras de Culebrillas: S/. 5.00 (soles por persona).",
        		"Alimentación.",
        		"Souvenirs.",
        		"Propinas."
      		]
    	}
  	}
];