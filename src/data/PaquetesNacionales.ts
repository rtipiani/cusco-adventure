export interface Paquete {
  	dias: string;
  	titulo: string;
  	descripcion: string;
  	etiqueta: string;
  	imagen: string;
  	url: string;
}

export const paquetesNacionales: Record<"es" | "en", Paquete[]> = {
  	es: [
		{
			dias: "Full day",
			titulo: "Paracas + Huacachina",
			descripcion: "Explora las Islas Ballestas y relájate en el oasis de Huacachina",
			etiqueta: "MÁS VENDIDO",
			imagen: "./Tubulares-huacachina-ica.avif",
			url: "/es/ica",
		},
		{
			dias: "Full day",
			titulo: "Machu Picchu",
			descripcion: "Descubre la maravilla Inca de Machupicchu, un viaje fascinante a la historia y cultura ancestral.",
			etiqueta: "MÁS VENDIDO",
			imagen: "./machupicchu-cusco.avif",
			url: "/es/cusco",
		},
		{
			dias: "Full day",
			titulo: "City Tour Lima",
			descripcion: "Parque de las Aguas, Museo Larco Herrera, Ruinas de Pachacamac",
			etiqueta: "",
			imagen: "./parque-de-las-aguas-lima-peru.avif",
			url: "/es/lima",
		},
		{
			dias: "Full day",
			titulo: "Uros + Taquile",
			descripcion: "Descubre la cultura viva de los Uros y la belleza tradicional de Taquile en el majestuoso Lago Titicaca",
			etiqueta: "MÁS VENDIDO",
			imagen: "./uros-taquile.avif",
			url: "/es/puno",
		},
		{
			dias: "Full day",
			titulo: "Cañón del Colca",
			descripcion: "Explora el esplendor del Cañón del Colca, un destino natural y cultural de vistas impresionantes.",
			etiqueta: "",
			imagen: "./canon-del-colca.avif",
			url: "/es/arequipa",
		},
		{
			dias: "Full day",
			titulo: "Lago Sandoval",
			descripcion: "Descubre la magia del Lago Sandoval, un oasis natural rodeado de exuberante vegetación y tranquilidad incomparable.",
			etiqueta: "",
			imagen: "./lago-sandoval.avif",
			url: "/es/puerto-maldonado",
		},
		{
			dias: "Full day",
			titulo: "Valle Sagrado + Maras y Moray",
			descripcion: "Explora la riqueza del Valle Sagrado, admira las estructuras circulares de Moray y descubre las salinas ancestrales de Maras en una experiencia cultural única.",
			etiqueta: "",
			imagen: "./valle-sagrado.avif",
			url: "/es/cusco",
		},
		{
			dias: "Full day",
			titulo: "Montaña de Colores en Cuatrimotos",
			descripcion: "Disfruta de una aventura única recorriendo las vibrantes montañas de colores en cuatrimoto, para vivir una experiencia llena de adrenalina y paisajes inolvidables.",
			etiqueta: "",
			imagen: "./montana-de-colores-cuatrimotos.avif",
			url: "/es/cusco",
		}
  	],
  	en: [
		{
			dias: "Full day",
			titulo: "Paracas + Huacachina",
			descripcion: "Explore the Ballestas Islands and relax in the Huacachina oasis",
			etiqueta: "BEST SELLER",
			imagen: "./Tubulares-huacachina-ica.avif",
			url: "/en/ica",
		},
		{
			dias: "Full day",
			titulo: "Machu Picchu",
			descripcion: "Discover the Inca wonder of Machu Picchu, a fascinating journey into ancient history and culture.",
			etiqueta: "BEST SELLER",
			imagen: "./machupicchu-cusco.avif",
			url: "/en/cusco",
		},
		{
			dias: "Full day",
			titulo: "Lima City Tour",
			descripcion: "Water Park, Larco Museum, Pachacamac Ruins",
			etiqueta: "",
			imagen: "./parque-de-las-aguas-lima-peru.avif",
			url: "/en/lima",
		},
		{
			dias: "Full day",
			titulo: "Uros + Taquile",
			descripcion: "Discover the living culture of the Uros and the traditional beauty of Taquile on the majestic Lake Titicaca",
			etiqueta: "BEST SELLER",
			imagen: "./uros-taquile.avif",
			url: "/en/puno",
		},
		{
			dias: "Full day",
			titulo: "Colca Canyon",
			descripcion: "Explore the splendor of Colca Canyon, a natural and cultural destination with breathtaking views.",
			etiqueta: "",
			imagen: "./canon-del-colca.avif",
			url: "/en/arequipa",
		},
		{
			dias: "Full day",
			titulo: "Lake Sandoval",
			descripcion: "Discover the magic of Lake Sandoval, a natural oasis surrounded by lush vegetation and unparalleled tranquility.",
			etiqueta: "",
			imagen: "./lago-sandoval.avif",
			url: "/en/puerto-maldonado",
		},
		{
			dias: "Full day",
			titulo: "Sacred Valley + Maras & Moray",
			descripcion: "Explore the richness of the Sacred Valley, admire the circular structures of Moray, and discover the ancestral salt mines of Maras in a unique cultural experience.",
			etiqueta: "",
			imagen: "./valle-sagrado.avif",
			url: "/en/cusco",
		},
		{
			dias: "Full day",
			titulo: "Rainbow Mountain on ATVs",
			descripcion: "Enjoy a unique adventure riding through the vibrant Rainbow Mountains on ATVs, for an adrenaline-filled and unforgettable experience.",
			etiqueta: "",
			imagen: "./montana-de-colores-cuatrimotos.avif",
			url: "/en/cusco",
		}
  	],
};