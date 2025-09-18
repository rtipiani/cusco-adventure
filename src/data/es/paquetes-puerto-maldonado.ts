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
    	titulo: "LAGO SANDOVAL",
    	slug: "lago-sandoval",
    	descripcion:
      		"Explora la Reserva Nacional Tambopata navegando por el río Madre de Dios, caminando por la selva y descubriendo el majestuoso Lago Sandoval. Una experiencia única con fauna, flora y un almuerzo amazónico.",
    	etiqueta: "",
    	imagen: "/paquetes-puerto-maldonado/lago-sandoval.avif",
    	itinerario: {
      		horarios: "HORARIO: 9:00 AM – 05:00 PM",
      		detalle: [
        		"Comenzamos la travesía con la acogida en nuestra oficina y un desplazamiento hasta el puerto.",
        		"A partir de ese lugar, tomaremos un bote para recorrer el río Madre de Dios hasta la Reserva Nacional de Tambopata, disfrutando de un viaje sereno por las aguas del río.",
        		" Al llegar a la Reserva, nos dirigiremos por un camino bien preservado que nos guiará durante 3 kilómetros (cerca de 1 hora de caminata) por la selva.",
        		"En el recorrido, podremos contemplar una diversidad de animales, que incluyen hasta 4 especies de monos, serpientes, tarántulas, aves tropicales y loros, mientras nos adentramos en la frondosa vegetación de la Amazonía.",
        		"Al llegar al Lago Sandoval, tomaremos una canoa para navegar sus serenas aguas.",
        		"Vamos por la costa derecha del lago, donde investigaremos su diversidad biológica.",
        		"En este lugar, podremos observar aves tropicales, garzas, caimanes y, con suerte, el famoso lobo de río, un imponente mamífero que puede alcanzar hasta 2 metros de longitud.",
				"Al mediodía, tendremos una exquisita comida amazónica, podremos degustar platos típicos como el juane, complementados con bebidas autóctonas.",
				"Tras el almuerzo, disfrutaremos de un descanso agradable en las hamacas del lodge.",
				"Luego del descanso, recuperaremos las canoas para seguir explorando el lago y sus zonas circundantes. En esta sección del viaje, exploraremos más especies de fauna, entre ellas monos que a menudo saltan entre las riberas, y otras especies que residen en la zona.",
				"Por último, iniciaremos la vuelta a Puerto Maldonado en el barco que nos aguarda en el río Madre de Dios, concluyendo esta increíble experiencia en el corazón de la Amazonía."
      		],
      		incluye: [
        		"Transporte marítimo de ida y vuelta a través del río Madre de Dios.",
        		"Guía profesional de turismo.",
        		"Entrada a la Reserva Nacional Tambopata.",
        		"Almuerzo local."
      		],
      		noIncluye: [
        		"Comidas no mencionadas.",
        		"Gastos extras.",
        		"Bebidas."
      		]
    	}
  	},
  	{
    	dias: "Medio Día",
    	titulo: "Tour Pesca de Pirañas en el Río Tambopata",
    	slug: "pesca-piranas",
    	descripcion:
      		"Disfruta de una experiencia única pescando pirañas en el Lago Yacumama, rodeado de aves tropicales, caimanes y un atardecer mágico.",
    	etiqueta: "",
    	imagen: "/paquetes-puerto-maldonado/pesca-de-piranas.avif",
    	itinerario: {
      		horarios:
        		"HORARIOS: TURNOS MAÑANA DE 5:30 AM –  8:30 PM, TURNOS TARDE DE 03:30 AM – 6:30 PM",
      		detalle: [
        		"El tour inicia con el recojo de su hotel en Puerto Maldonado a las 03:20 pm iniciaremos nuestro viaje hacia el Lago Yacumama, 25 minutos desde la plaza de puerto Maldonado.",
        		"Traslado al Lago Yacumama (25 min desde Puerto Maldonado).",
        		"Durante el camino tendra la oportunidad de apreciar el paisaje que alberga el rio Madre de Dios.",
        		"Al llegar, un miembro de la comunidad nos recibira y nos proporcionara las cañas ecologicas y la carnada para la pesca de Pirañas.",
        		"Caminaremos 7 minutos hasta la canoa que nos llevara por las aguas del lago Yacumama.podrás observar una gran variedad de aves tropicales, incluyendo guacamayos, loros y bandadas de pericos que vuelan libres en su hábitat natural.",
        		"También tendra la oportunidad de ver caimanes negros, que, en su mayoría, son tranquilos y se acercan lo suficiente para que puedas tomarles fotos.",
        		"Al final del recorrido, podra observar un espectacular atardecer en el lago, donde el cielo se llena de tonos dorados y anaranjados, creando un ambiente mágico y perfecto para capturar momentos inolvidables con tu cámara."
      		],
      		incluye: [
        		"Traslados desde el hotel (ida y vuelta).",
        		"Guía profesional de turismo.",
        		"Bloqueador solar.",
        		"Entradas a los sitios a visitar."
      		],
      		noIncluye: [
        		"Propinas.",
        		"Gastos extras."
      		]
    	}
  	},
  	{
    	dias: "Full Day",
    	titulo: "Collpa de Guacamayos",
    	slug: "collpa-guacamayos",
    	descripcion:
      		"Visita la collpa de guacamayos más grande del mundo en Tambopata, observando cientos de aves en su hábitat natural y disfrutando de un desayuno tipo camping.",
    	etiqueta: "OFERTA",
    	imagen: "/paquetes-puerto-maldonado/collpa-de-guacamayos.avif",
    	itinerario: {
      		horarios: "HORARIO:3:30 AM – 04:00 PM",
      		detalle: [
        		"Recojo desde hoteles céntricos para llevarlos en una movilidad por la carretera interoceánica por un recorrido de 2 horas aproximadamente hasta llegar al río Tambopata donde la embarcación con motor lo espera y lo llevará por una hora y media hasta el corazón de la Reserva Nacional Tambopata para llegar a la collpa de guacamayos más grande del mundo, la Collpa CHUNCHO, donde cientos de loros y guacamayos se juntan a comer arcilla como suplemento a su dieta diaria y lo hacen al costado del río Tambopata.",
        		"En el trayecto a la collpa, tendrá una oportunidad increíble de ver mamíferos como los capibaras, también los tapires, venados y a veces el Felino sudamericano más grande: el jaguar.",
        		"Luego tenemos nuestro desayuno tipo camping.",
        		"Al llegar al área de observación de los loros y guacamayos se acomodarán en las silletas y esperarán el show natural de aves, una vez terminada la actividad retornarán por bote al albergue HACIENDA TAMBOPATA, donde le servirán un delicioso almuerzo + refresco, breve descanso y a hacer una caminata en la hermosa selva, retornar al albergue y luego ser trasladados al lugar desde donde emprenderá su retorno a la ciudad de Puerto Maldonado."
      		],
      		incluye: [
        		"Recojo desde hoteles céntricos.",
        		"Transporte en bote ida y vuelta.",
        		"Guía profesional de turismo.",
        		"Eco salvavidas por persona.",
        		"Botas de jebe para caminata.",
        		"01 desayuno tipo camping por persona.",
        		"01 almuerzo por persona.",
        		"Botiquín de primeros auxilios.",
        		"Seguro SOAT turístico."
      		],
      		noIncluye: [
        		"Alimentación no mencionada.",
        		"Gastos personales."
      		]
    	}
  	},
  	{
    	dias: "Full Day",
    	titulo: "Isla de los Monos – Kayak – Tirolina",
    	slug: "isla-monos-kayak-tirolina",
    	descripcion:
      		"Combina aventura y naturaleza con kayak en el río Tambopata, tirolina en la selva y la visita a la famosa Isla de los Monos.",
    	etiqueta: "",
    	imagen: "/paquetes-puerto-maldonado/isla-de-los-monos.avif",
    	itinerario: {
      		horarios: "HORARIO DE INICIO: 9 AM – 05:30PM",
      		detalle: [
        		"El tour Tour Isla de los Monos + Kayak inicia con el recojo del hotel a las 9:00 a.m.",
        		"Saldremos con direccion al  Muelle de Puerto Maldonado, aqui subiremos a los kayaks y navegaremos durante 30 minutos, por las serenas aguas del río Tambopata.",
        		"Continuamos descendiendo por el río, manteniendo los ojos bien despiertos en la búsqueda de tortugas de agua dulce, capibaras y varias especies de aves autóctonas.",
        		"Si tenemos la suerte de tener alguna de estas fascinantes criaturas en su entorno natural!",
        		"Nos adentraremos a la selva peruana hasta llegar a las plataformas de tirolina, donde nos colocaremos el arnés y empezarmos la aventura.",
        		"Luego tendremos un delicioso almuerzo en un restaurante local, seguidamente nos espera la visita a la popular Isla de los Monos.",
        		"Este lugar ha sido el refugio de diferentes especies de monos como los simpáticos macacos. Retornaremos a la ciudad de Puerto Maldonado, hora de llegada 17:30 p.m. aproximadamente."
      		],
      		incluye: [
        		"Transporte marítimo de ida y vuelta a través del río Madre de Dios.",
        		"Guía profesional de turismo.",
        		"Entrada a los lugares a visitar.",
        		"Almuerzo local.",
        		"Equipo necesario para cada excursión."
      		],
      		noIncluye: [
        		"Comidas no mencionadas.",
        		"Gastos extras."
      		]
    	}
  	},
  	{
    	dias: "2D/1N",
    	titulo: "Collpa Chuncho de Guacamayos 2D/1N",
    	slug: "collpa-chuncho-2d1n",
    	descripcion:
      		"Explora la selva amazónica en un tour de 2 días, observando caimanes nocturnos, monos y la impresionante collpa de guacamayos Chuncho.",
    	etiqueta: "",
    	imagen: "/paquetes-puerto-maldonado/chuncho-de-guacamayos.avif",
    	itinerario: {
      		horarios: "HORARIO: 9:30 PM – 04:00 PM",
      		detalle: [
        		"Día 1 ¬- Puerto Maldonado – Atardecer – Caimaneo Nocturno",
        		"Iniciaremos el tour con el recojo de su  hotel en Puerto Maldonado entre 9 a 9:30 am Tendremos un viaje de 2 horas en auto hasta llegar al rio Tambopata.",
        		"Luego abordaremos el bote y navegaremos po rel rio Tambopata hasta llegar a nuestro Lodge, durante 20 minutos.",
        		"Durante este primer tramo tendremos buenas posibilidades de observar capibaras y muchas aves playeras a lo largo de la orilla del río, llegando al lodge tendremos una refrescante bebida de bienvenida.",
        		"Despues del almuerzo haremos una caminata por el bosque que estan rodeados de enormes arboles y lianas; tambien sera posible ver diferentes especies de monos.",
        		"Al final de la caminata, subiremos a la torre de Canopy más alta de Tambopata, un gran lugar para ver la cuenca del Amazonas, se recomienda ver la puesta de sol desde este punto.",
        		"Al anochecer retornaremos a nuestro lodge, tendremos un paseo nocturno y podremos apreciar caimanes blancos y negrosa lo largo de la orilla del rio tambopata.",
				"Finalmente cenaremos y descansaremos en nuestro lodge.",
        		"",
        		"Dia 2 - Collpa de Guacamayos Chuncho – Puerto Maldonado",
        		"Iniciamos el dia alrededor de las 5 am, abordaremos un bote durante 1 hora por el rio Tambopata.",
        		"Durante el viaje en bote hay muchas posibilidades de ver aves playeras, capibaras, caimanes blancos y otros animales de la selva.",
        		"Al llegar a la collpa, se puede observar a los guacamayos verdes, rojos, azules y amarillos, así como loros, alimentándose de la arcilla.",
        		"Al retornar haremoso una parada en el punto de control, tendra la oportunidad de visitar el pequeño museo.",
        		"Una vez en el lodge tendremos un tiempo para descansar y alistar sus pertenencias.",
				"Tendremos un almuerzo local.",
				"Luego abordaremos el bote con destino hacia Puerto Maldonado, luego nos subiremos al transporte que nos dejare cerca de la plaza de armas u hotel."
      		],
      		incluye: [
        		"Transporte terrestre y marítimo ida y vuelta.",
        		"Guía profesional de turismo.",
        		"1 noche de lodge en tambopata.",
        		"Agua durante la excursion.",
        		"Entrada a la Reserva Nacional de Tambopata.",
        		"2 almuerzos, 1 cena, 1 desayuno.",
        		"Equipo necesario para cada excursión.",
				"Botas de goma (wellingtons) en la temporada de lluvias."
      		],
      		noIncluye: [
        		"Comidas no mencionadas.",
        		"Gastos extras.",
        		"Seguro de viaje.",
        		"Bebidas adicionales."
      		]
    	}
  	}
];