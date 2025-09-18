export type Lang = "es" | "en";

interface Paquete {
    dias: string;
  	titulo: string;
  	descripcion: string;
  	etiqueta: string;
  	imagen: string;
  	url: string;
}

export const paquetes: Record<Lang, Paquete[]> = {
  	es: [
		{
			dias: "Cusco 3D/2N",
			titulo: "CUSCO TRADICIONAL",
			descripcion: "City Tour, Machupicchu",
			etiqueta: "OFERTA",
			imagen: "./Qoricancha1.avif",
			url: "cusco-tradicional-3d-2n"
		},
		{
			dias: "Cusco 6D/5N",
			titulo: "CUSCO MARAVILLOSO",
			descripcion: "City Tour, Valle Sagrado, Maras & Moray, Machupicchu, Montaña de 7 Colores, Laguna Humantay",
			etiqueta: "MÁS VENDIDO",
			imagen: "./Machupicchu-maravilla-del-mundo.avif",
			url: "cusco-maravilloso-6d-5n"
		},
		{
			dias: "Cusco 4D/3N",
			titulo: "CUSCO SAGRADO",
			descripcion: "City Tour, Valle Sagrado, Maras & Moray, Machupicchu",
			etiqueta: "MÁS VENDIDO",
			imagen: "./montana-de-colores-vinincunca-cusco.avif",
			url: "cusco-sagrado-4d-3n"
		},
		{
			dias: "Cusco 7D/6N",
			titulo: "CUSCO SORPRENDENTE",
			descripcion: "City Tour, Valle Sagrado, Maras & Moray, Machupicchu, Montaña de 7 Colores, Laguna Humantay, Valle Sur",
			etiqueta: "",
			imagen: "./Laguna-Humantay-cusco.avif",
			url: "cusco-sorprendente-7d-6n"
		},
		{
			dias: "Cusco 5D/4N",
			titulo: "CUSCO INCREIBLE",
			descripcion: "City Tour, Valle Sagrado, Maras & Moray, Machupicchu, Montaña de 7 Colores",
			etiqueta: "MÁS VENDIDO",
			imagen: "./Tambomachay-city-tour.avif",
			url: "cusco-increible-5d-4n"
		},
		{
			dias: "Cusco 8D/7N",
			titulo: "CUSCO EXTRAORDINARIO",
			descripcion: "City Tour, Valle Sagrado, Maras & Moray, Machupicchu, Montaña de 7 Colores, Laguna Humantay, Valle Sur, Morada",
			etiqueta: "MÁS VENDIDO",
			imagen: "./Morada-de-los-Dioses-cusco.avif",
			url: "cusco-extraordinario-8d-7n"
		}
  	],
  	en: [
		{
			dias: "Cusco 3D/2N",
			titulo: "TRADITIONAL CUSCO",
			descripcion: "City Tour, Machupicchu",
			etiqueta: "OFFER",
			imagen: "./Qoricancha1.avif",
			url: "traditional-cusco-3d-2n"
		},
		{
			dias: "Cusco 6D/5N",
			titulo: "WONDERFUL CUSCO",
			descripcion: "City Tour, Sacred Valley, Maras & Moray, Machupicchu, Rainbow Mountain, Humantay Lagoon",
			etiqueta: "BEST SELLER",
			imagen: "./Machupicchu-maravilla-del-mundo.avif",
			url: "wonderful-cusco-6d-5n"
		},
		{
			dias: "Cusco 4D/3N",
			titulo: "SACRED CUSCO",
			descripcion: "City Tour, Sacred Valley, Maras & Moray, Machupicchu",
			etiqueta: "BEST SELLER",
			imagen: "./montana-de-colores-vinincunca-cusco.avif",
			url: "sacred-cusco-4d-3n"
		},
		{
			dias: "Cusco 7D/6N",
			titulo: "SURPRISING CUSCO",
			descripcion: "City Tour, Sacred Valley, Maras & Moray, Machupicchu, Rainbow Mountain, Humantay Lagoon, South Valley",
			etiqueta: "",
			imagen: "./Laguna-Humantay-cusco.avif",
			url: "surprising-cusco-7d-6n"
		},
		{
			dias: "Cusco 5D/4N",
			titulo: "INCREDIBLE CUSCO",
			descripcion: "City Tour, Sacred Valley, Maras & Moray, Machupicchu, Rainbow Mountain",
			etiqueta: "BEST SELLER",
			imagen: "./Tambomachay-city-tour.avif",
			url: "incredible-cusco-5d-4n"
		},
		{
			dias: "Cusco 8D/7N",
			titulo: "EXTRAORDINARY CUSCO",
			descripcion: "City Tour, Sacred Valley, Maras & Moray, Machupicchu, Rainbow Mountain, Humantay Lagoon, South Valley, Morada",
			etiqueta: "BEST SELLER",
			imagen: "./Morada-de-los-Dioses-cusco.avif",
			url: "extraordinary-cusco-8d-7n"
		}
  	]
};

export const sectionText: Record<Lang, { title: string; description: string; button: string }> = {
  	es: {
    	title: "Paquetes Vacacionales Exclusivos en Cusco",
    	description:
      		"Descubre la magia de Cusco con nuestros paquetes personalizados. Explora sitios arqueológicos impresionantes como Machu Picchu, vive las tradiciones incaicas y disfruta de la exquisita gastronomía peruana. ¡Una experiencia inolvidable te espera!",
    	button: "Ver Itinerario"
  	},
  	en: {
    	title: "Exclusive Vacation Packages in Cusco",
    	description:
      		"Discover the magic of Cusco with our personalized packages. Explore impressive archaeological sites like Machu Picchu, experience Inca traditions, and enjoy exquisite Peruvian cuisine. An unforgettable adventure awaits you!",
    	button: "View Itinerary"
  	}
};