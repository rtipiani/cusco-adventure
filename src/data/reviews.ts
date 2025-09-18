export type Lang = "es" | "en";

interface Review {
  	titulo: string;
  	paquete: string;
  	autor: string;
  	fecha: string;
  	estrellas: number;
  	descripcion: string;
  	imagen: string;
  	alt: string;
  	link: string;
}

export const reviewsCarouselData: Record<Lang, Review[]> = {
  	es: [
		{
			titulo: "¡REGALO DE CUMPLEAÑOS!",
			paquete: "CUSCO SAGRADO 4 DIAS / 3 NOCHES",
			autor: "Pedro Cayo",
			fecha: "Mayo",
			estrellas: 5,
			descripcion:
				"Mi familia y yo estamos muy agradecidos con la agencia por el servicio de calidad brindado tal cual se nos indicaron...",
			imagen: "/reseñas/review1.webp",
			alt: "Una familia con Machupicchu de fondo",
			link: "#",
		},
		{
			titulo: "¡SERVICIO DE CALIDAD!",
			paquete: "CUSCO EXTRAORDINARIO 7 DIAS / 6 NOCHES",
			autor: "Juan Portilla",
			fecha: "Junio",
			estrellas: 5,
			descripcion:
				"Recomendando al 100% la agencia, esta es mi segunda visita al Cusco y fue increíble en todos los sentidos...",
			imagen: "/reseñas/review2.webp",
			alt: "Selfie de una pareja con Machupicchu de fondo",
			link: "#",
		},
		{
			titulo: "¡VIAJE ENTRE AMIGOS!",
			paquete: "CUSCO SORPRENDENTE 8 DIAS / 7 NOCHES",
			autor: "Claudia Lozano",
			fecha: "Abril",
			estrellas: 5,
			descripcion:
				"¡Excelente Servicio! Nuestro grupo tuvo una buena experiencia en toda la estadía en Cusco, cumplieron con...",
			imagen: "/reseñas/review3.webp",
			alt: "Selfie de un grupo con la roca sagrada de fondo",
			link: "#",
		},
		{
			titulo: "¡CON LOS MEJORES GUÍAS TURÍSTICOS!",
			paquete: "CUSCO EXTRAORDINARIO 8 DIAS / 7 NOCHES",
			autor: "Juan Mori",
			fecha: "Diciembre",
			estrellas: 5,
			descripcion:
				"Estoy tan agradecida con la agencia por brindarme un viaje inolvidable, desde el primer día de mi llegada a Lima...",
			imagen: "/reseñas/review4.webp",
			alt: "Una familia con Machupicchu de fondo",
			link: "#",
		},
		{
			titulo: "¡CON LOS MEJORES GUÍAS TURÍSTICOS!",
			paquete: "CUSCO MARAVILLOSO 5 DIAS / 4 NOCHES",
			autor: "Jacquelin Cárdenas",
			fecha: "Noviembre",
			estrellas: 5,
			descripcion:
				"Recomendando al 100% la agencia, esta es mi segunda visita al Cusco y fue increíble en todos los sentidos Muy agradecidos...",
			imagen: "/reseñas/review5.webp",
			alt: "Selfie de una pareja con Machupicchu de fondo",
			link: "#",
		},
		{
			titulo: "¡CON LOS MEJORES GUÍAS TURÍSTICOS!",
			paquete: "CUSCO INCREIBLE 6 DIAS / 5 NOCHES",
			autor: "Sandra Abarca",
			fecha: "Octubre",
			estrellas: 5,
			descripcion:
				"Fuimos a la ciudad de Cusco durante 6 días y a Ica por 2 días con la esperanza de ver todos los increíbles ecosistemas del Perú...",
			imagen: "/reseñas/review3.webp",
			alt: "Selfie de un grupo con la roca sagrada de fondo",
			link: "#",
		},
  	],
  	en: [
		{
			titulo: "BIRTHDAY GIFT!",
			paquete: "SACRED VALLEY CUSCO 4 DAYS / 3 NIGHTS",
			autor: "Pedro Cayo",
			fecha: "May",
			estrellas: 5,
			descripcion:
				"My family and I are very grateful to the agency for the high-quality service provided as promised...",
			imagen: "/reseñas/review1.webp",
			alt: "A family with Machu Picchu in the background",
			link: "#",
		},
		{
			titulo: "QUALITY SERVICE!",
			paquete: "EXTRAORDINARY CUSCO 7 DAYS / 6 NIGHTS",
			autor: "Juan Portilla",
			fecha: "June",
			estrellas: 5,
			descripcion:
				"Highly recommending the agency, this is my second visit to Cusco and it was amazing in every way...",
			imagen: "/reseñas/review2.webp",
			alt: "Selfie of a couple with Machu Picchu in the background",
			link: "#",
		},
		{
			titulo: "TRIP WITH FRIENDS!",
			paquete: "SURPRISING CUSCO 8 DAYS / 7 NIGHTS",
			autor: "Claudia Lozano",
			fecha: "April",
			estrellas: 5,
			descripcion:
				"Excellent service! Our group had a great experience during our stay in Cusco, everything was as promised...",
			imagen: "/reseñas/review3.webp",
			alt: "Selfie of a group with the Sacred Rock in the background",
			link: "#",
		},
		{
			titulo: "WITH THE BEST TOUR GUIDES!",
			paquete: "EXTRAORDINARY CUSCO 8 DAYS / 7 NIGHTS",
			autor: "Juan Mori",
			fecha: "December",
			estrellas: 5,
			descripcion:
				"I am so thankful to the agency for providing me with an unforgettable trip, from the first day I arrived in Lima...",
			imagen: "/reseñas/review4.webp",
			alt: "A family with Machu Picchu in the background",
			link: "#",
		},
		{
			titulo: "WITH THE BEST TOUR GUIDES!",
			paquete: "WONDERFUL CUSCO 5 DAYS / 4 NIGHTS",
			autor: "Jacquelin Cárdenas",
			fecha: "November",
			estrellas: 5,
			descripcion:
				"Highly recommending the agency, this is my second visit to Cusco and it was incredible in every way...",
			imagen: "/reseñas/review5.webp",
			alt: "Selfie of a couple with Machu Picchu in the background",
			link: "#",
		},
		{
			titulo: "WITH THE BEST TOUR GUIDES!",
			paquete: "INCREDIBLE CUSCO 6 DAYS / 5 NIGHTS",
			autor: "Sandra Abarca",
			fecha: "October",
			estrellas: 5,
			descripcion:
				"We spent 6 days in Cusco and 2 days in Ica, hoping to see all the incredible ecosystems of Peru...",
			imagen: "/reseñas/review3.webp",
			alt: "Selfie of a group with the Sacred Rock in the background",
			link: "#",
		},
  	],
};