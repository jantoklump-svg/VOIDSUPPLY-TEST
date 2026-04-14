const products = Object.freeze([
  {
    id: 1,
    name: "Produkt nicht gefunden.",
    price: "--.--",
    description: "-",
    image_1: "Placeholder.webp",
    image_2: "Placeholder.webp",
    inStock: false,
    rabbat: true,
    colors: ["Rot", "Blau", "Grün", "Weiß"],
    sizes: ["S", "M", "L", "XL"],
    images: {  // Bilder pro Farbe
      "Rot": "Placeholder.webp",
      "Blau": "Placeholder.webp",
      "Grün": "Placeholder.webp",
      "Weiß": "Placeholder.webp"
    }
  },
  
  {
    id: 2,
    name: "GuÇÇi Cap",
    price: 14.99,
    description: "Elegante Cap aus hochwertiger Baumwolle mit verstellbarem Riemen für perfekten Sitz. Dezentes Logo vorne, minimalistisches Design für einen modernen, luxuriösen Look. Ideal für Alltag und Streetstyle.",
    image_1: "gucci_cap.jpg",
    image_2: "gucci_cap2.jpg",
    inStock: true,
    rabbat: false,
    colors: ["Weiß", "Schwarz", "Pink", "Beige", "Beige-Blau"],
    sizes: ["Anpassbar"],
    images: {  // Bilder pro Farbe
      "Weiß": "gucci_cap6.jpg",
      "Schwarz": "gucci_cap5.jpg",
      "Pink": "gucci_cap3.jpg",
      "Beige": "gucci_cap2.jpg",
      "Beige-Blau": "gucci_cap4.jpg"
    }
  },
  
  {
    id: 3,
    name: "Louis Belt",
    price: 24.99,
    description: "Luxuriöser Gürtel aus feinstem Leder mit markantem Logo an der Schnalle. Zeitloses Design, verstellbar für optimalen Komfort. Perfektes Accessoire, das Eleganz und Stil in jedem Outfit unterstreicht.",
    image_1: "Lui_belt1.jpg",
    image_2: "Lui_belt2.jpg",
    inStock: true,
    rabbat: false,
    colors: ["Schwarz 1", "Schwarz 2", "Braun 1", "Braun 2"],
    sizes: ["100cm", "110cm", "120cm", "140cm"],
    images: {  // Bilder pro Farbe
      "Schwarz 1": "Lui_belt1.jpg",
      "Schwarz 2": "Lui_belt3.jpg",
      "Braun 1": "Lui_belt2.jpg",
      "Braun 2": "Lui_belt4.jpg"
    }
  },
  
  {
    id: 4,
    name: "Goʏard Cardholder",
    price: 14.99,
    description: "Schlanker Cardholder aus handgefertigtem Canvas mit Lederdetails. Kompaktes Design für Karten und Bargeld, stilvoll und funktional zugleich. Ein dezentes Luxus-Accessoire für jeden Tag.",
    image_1: "goyard_holder1.jpg",
    image_2: "goyard_holder2.jpg",
    inStock: true,
    rabbat: false,
    colors: ["Weiß", "Grau", "Grün", "Blau", "Schwarz"],
    sizes: ["Standard"],
    images: {  // Bilder pro Farbe
      "Weiß": "goyard_holder3.jpg",
      "Grau": "goyard_holder5.jpg",
      "Grün": "goyard_holder2.jpg",
      "Blau": "goyard_holder1.jpg",
      "Schwarz": "goyard_holder4.jpg"
    }
  },
  
  {
    id: 5,
    name: "Ralph Lauren Hoodie",
    price: 34.99,
    description: "Klassischer Hoodie aus weichem Baumwollmix mit Kapuze und Kängurutasche. Dezentes Reiter-Logo auf der Brust, gemütlicher Schnitt für Alltag und Freizeit. Komfort trifft zeitlosen Stil.",
    image_1: "Ralph_Lauren_zip1.jpg",
    image_2: "Ralph_Lauren_zip2.png",
    inStock: true,
    rabbat: false,
    colors: ["Weiß", "Grau", "Schwarz", "Dunkel Blau"],
    sizes: ["S", "M", "L", "XL"],
    images: {  // Bilder pro Farbe
      "Weiß": "Ralph_Lauren_zip3.jpg",
      "Grau": "Ralph_Lauren_zip1.jpg",
      "Schwarz": "Ralph_Lauren_zip2.png",
      "Dunkel Blau": "Ralph_Lauren_zip4.jpg"
    }
  },

  {
    id: 6,
    name: "Hermes Belt",
    price: 24.99,
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing ",
    image_1: "HermesBelt1.jpg",
    image_2: "HermesBelt4.jpg",
    inStock: true,
    rabbat: false,
    colors: ["Weiß", "Schwarz", "Dunkeles Leder", "Helles Leder"],
    sizes: ["100cm", "110cm", "120cm", "140cm"],
    images: {  // Bilder pro Farbe
      "Weiß": "HermesBelt5.jpg",
      "Helles Leder": "HermesBelt4.jpg",
      "Schwarz": "HermesBelt2.jpg",
      "Dunkeles Leder": "HermesBelt3.jpg"
    }
  },

  {
    id: 7,
    name: "Prada Belt",
    price: 19.99,
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing ",
    image_1: "PradaBelt1.jpg",
    image_2: "PradaBelt2.jpg",
    inStock: false,
    rabbat: true,
    colors: ["Schwarz"],
    sizes: ["100cm", "110cm", "120cm"],
    images: {  // Bilder pro Farbe
      "Schwarz": "PradaBelt2.jpg"
    }
  }
]);

