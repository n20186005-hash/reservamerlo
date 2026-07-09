export type Locale = `zh` | `en` | `es` | `it`;
export type LinkItem = { name: string; url: string };
export type FAQItem = { question: string; answer: string };
export type TransportOption = { name: string; time: string; price: string; steps: string[] };

export type Translations = {
  nav: { history: string; architecture: string; monuments: string; eco: string; visiting: string; transportation: string; gallery: string; reviews: string; faq: string; location: string };
  hero: { tags: string[]; tagline: string; title: string; subtitle: string; cta: string; description: { address: string; phone: string; category: string } };
  rating: { reviews: string; source: string };
  history: { title: string; intro: string };
  myths: { title: string; intro: string; items: { title: string; content: string }[] };
  curiosities: { title: string; content: string };
  eco: { title: string; intro: string; items: string[] };
  architecture: { title: string; intro: string; specs: { structure: { title: string; content: string }; design: { title: string; content: string }; optics: { title: string; content: string } }; plaque: { title: string; items: { label: string; value: string }[] } };
  monuments: { title: string; intro: string; items: { name: string; description: string }[] };
  contrast: { title: string; intro: string; before: string; after: string };
  visiting: { title: string; intro: string; hours: { title: string; content: string; note: string }; price: { title: string; content: string; note: string }; duration: { title: string; content: string; note: string }; tips: { title: string; items: string[] }; essentials: { icon: string; title: string; text: string }[] };
  transportation: { title: string; airport: { title: string; content: string; options: TransportOption[] }; publicTransport?: { title: string; content: string; options: { name: string; description: string; steps: string[] }[] }; city: { title: string; content: string; steps: string[] }; tips: { title: string; items: string[] } };
  gallery: { title: string; viewMore: string; categories: { key: string; label: string }[] };
  reviews: { title: string; subtitle: string; viewMore: string; nearbyTitle: string; nearbyIntro: string; nearbyItems: { name: string; description: string }[] };
  faq: { title: string; subtitle: string; items: FAQItem[] };
  location: { title: string; address: string; openMaps: string };
  siteMap: { title: string; intro: string; hint: string; cta: string; zones: { key: string; name: string; desc: string }[] };
  itinerary: { title: string; intro: string; steps: { time: string; title: string; text: string }[] };
  ctaBand: { title: string; subtitle: string; buttons: string[] };
  footer: { callToAction: string; text: string; made: string; linksTitle: string; links: LinkItem[] };
};

const LINK_DEFS: { url: string; names: Record<Locale, string> }[] = [
  {
    url: `https://villademerlo.tur.ar/`,
    names: {
      zh: `梅洛市官方旅游局 (Villa de Merlo Turismo)`,
      en: `Merlo Tourism Board (Villa de Merlo Turismo)`,
      es: `Turismo de Villa de Merlo`,
      it: `Assessorato al Turismo di Merlo`,
    },
  },
  {
    url: `https://ambiente.sanluis.gov.ar/`,
    names: {
      zh: `圣路易斯省环境秘书处 (Secretaría de Ambiente)`,
      en: `San Luis Ministry of Environment`,
      es: `Secretaría de Ambiente de San Luis`,
      it: `Segretariato dell'Ambiente di San Luis`,
    },
  },
  {
    url: `https://sib.gob.ar/`,
    names: {
      zh: `阿根廷国家生物多样性信息系统 (SIB)`,
      en: `Argentina National Biodiversity Information System (SIB)`,
      es: `Sistema de Información de Biodiversidad (SIB)`,
      it: `Sistema di Informazione sulla Biodiversità (SIB)`,
    },
  },
  {
    url: `https://prestadoresturisticos.sanluis.gov.ar/`,
    names: {
      zh: `圣路易斯省旅游服务官方管理平台`,
      en: `San Luis Official Tourism Providers Platform`,
      es: `Plataforma de Prestadores Turísticos de San Luis`,
      it: `Piattaforma dei Fornitori Turistici di San Luis`,
    },
  },
  {
    url: `https://www.argentina.travel/`,
    names: {
      zh: `阿根廷国家旅游门户 (Argentina.travel)`,
      en: `Argentina.travel — National Tourism Portal`,
      es: `Argentina.travel — Turismo de Argentina`,
      it: `Argentina.travel — Turismo dell'Argentina`,
    },
  },
];

const LINKS_BY_LOCALE: Record<Locale, LinkItem[]> = {
  zh: LINK_DEFS.map((d) => ({ name: d.names.zh, url: d.url })),
  en: LINK_DEFS.map((d) => ({ name: d.names.en, url: d.url })),
  es: LINK_DEFS.map((d) => ({ name: d.names.es, url: d.url })),
  it: LINK_DEFS.map((d) => ({ name: d.names.it, url: d.url })),
};

export const translations: Record<Locale, Translations> = {
  es: {
    nav: { history: `Visión General`, architecture: `Paisaje y Ecología`, monuments: `Actividades`, eco: `Conservación`, visiting: `Información de Visita`, transportation: `Cómo Llegar`, gallery: `Galería`, reviews: `Opiniones`, faq: `Preguntas Frecuentes`, location: `Ubicación` },
    hero: {
      tags: [`Reserva natural de San Luis`, `Sierras de los Comechingones`, `Ecoturismo en Merlo`],
      tagline: `Argentina · San Luis · Merlo`,
      title: `Reserva Florofaunística de Rincón del Este`,
      subtitle: `Refugio de flora y fauna · Sierras Comechingones · Ecoturismo`,
      cta: `Explora la Reserva`,
      description: {
        address: `Rincón del Este, El Rincón, Merlo, San Luis, Argentina`,
        phone: `Tel: +542664361087`,
        category: `Reserva natural · Flora y fauna · Ecoturismo`
      }
    },
    rating: { reviews: `opiniones`, source: `Opiniones de Google` },
    history: {
      title: `Un refugio en las Sierras Comechingones`,
      intro: `La **Reserva Florofaunística de Rincón del Este** es uno de los espacios naturales mejor cuidados de Merlo, en el corazón de la provincia de San Luis. Se extiende por las estribaciones de las **Sierras de los Comechingones**, una cadena serrana que corre al pie de la gran Sierra Pampeana y que concentra buena parte de la biodiversidad del centro de Argentina.

El paisaje y su gente
Merlo es conocida por su microclima seco y soleado, sus artesanos y su ritmo tranquilo, lo que le valió el mote de "pequeña Suiza" de San Luis. En sus alrededores, la naturaleza se vuelve más densa: bosques de algarrobos, chañares y jarillas, arroyos de montaña y una fauna que despierta al amanecer. Rincón del Este nació precisamente para proteger ese equilibrio.

Una decisión de conservación
A diferencia de un parque público tradicional, Rincón del Este es una reserva de flora y fauna que combina el cuidado del ecosistema con la visita responsable. Su propósito es mantener muestras representativas del monte nativo, dar refugio a aves y mamíferos locales, y ofrecer a quien llega una experiencia de naturaleza auténtica, sin grandes intervenciones.

Merlo, puerta de las sierras
La localidad de Merlo —fundada en 1797— es el punto de partida natural para conocer la Reserva. Desde allí, un corto trayecto conduce a El Rincón, donde la reserva abre sus senderos al público. Por eso la historia de Rincón del Este no se entiende sin la de Merlo y de los pueblos originarios que habitaron estas sierras mucho antes que la villa.`
    },
    myths: {
      title: `Historia, pueblos y leyendas`,
      intro: `Las Sierras de los Comechingones guardan una de las huellas culturales más antiguas de la región. Antes de la colonización, estos cerros fueron territorio de los **comechingones**, cazadores recolectores que dejaron su marca en piedra y en la memoria del lugar.`,
      items: [
        {
          title: `Los comechingones y la piedra pintada`,
          content: `Los comechingones habitaron gran parte de las sierras centrales de Argentina. En la región de Merlo y las Comechingones se conservan **piedras pintadas y petrogliros** — motivos geométricos y figuras grabadas en la roca — que dan cuenta de su mirada del mundo. Caminar por estas sierras es, en cierto modo, recorrer un museo a cielo abierto.

Aunque la villa de Merlo se fundó en 1797, la presencia humana en estas montañas es muy anterior. Respetar esos sitios es parte de visitar Rincón del Este: la reserva protege no solo la naturaleza viva, sino también el paisaje que los pueblos originarios reconocieron como propio.`
        },
        {
          title: `La leyenda del choique (ñandú)`,
          content: `En la tradición de la zona, el **choique** (o ñandú, el avestruz americano) es una figura recurrente. Cuenta la leyenda que el choique corre en círculos para confundir a quien lo persigue y así proteger a sus crías entre el monte. En Rincón del Este, avistar uno de estos grandes pájaros sin vuelo es un encuentro con esa misma astucia de la naturaleza.

Los guías locales suelen evocar estas historias en los senderos: no son solo anécdotas, sino una forma de enseñar a respetar los ciclos de la fauna serrana, especialmente en época de cría.`
        },
        {
          title: `El espíritu de la sierra (folclore)`,
          content: `El folclore de San Luis habla a menudo de la sierra como un lugar con ánimo propio: dicen que al atardecer, cuando el sol tiñe de oro las rocas, la montaña "respira" y se hace más silenciosa. Los pobladores aconsejan caminar despacio y hablar bajo, no por miedo, sino por respeto a quienes habitan el monte.

Estas creencias, medio paganas y medio cristianas, acompañan hasta hoy las caminatas en Rincón del Este y recuerdan algo esencial: se trata de un refugio, no de un escenario.`
        }
      ]
    },
    curiosities: {
      title: `Datos de naturaleza`,
      content: `Un microclima singular
Merlo y sus alrededores tienen uno de los índices de radiación solar más altos del país y un aire muy seco. Esa combinación favorece una luz nítida y una vegetación adaptada a la aridez: jarilla, chañar, algarrobo y cactus.

Aves, muchas aves
La reserva es un punto fantástico para el **avistamiento de aves**: desde el pequeño jilguero hasta el chimango, sin olvidar a los zorzales y a las paradas migratorias de colibríes. Quien lleva binoculares, se queda.

Mariposas y polinizadores
En primavera y verano, los claros de monte se llenan de mariposas y abejas nativas. La reserva protege precisamente esos corredores de polinización, clave para que el bosque siga dando frutos.

Cerca de la Quebrada del Condorito
La región forma parte del sistema de sierras donde anida el **cóndor andino**. A pocas horas, la Quebrada del Condorito (Córdoba) es el santuario más famoso de esta ave, pero el horizonte de Rincón del Este ya anticipa esos cielos de montaña.`
    },
    eco: {
      title: `Conservación de la Reserva`,
      intro: `Rincón del Este es un ecosistema sensible que sostiene flora y fauna nativa. Como guía educativa independiente sin fines de lucro, promovemos visitarlo de la manera más responsable posible.`,
      items: [
        `Quedate en el sendero: transitá solo las trochas habilitadas y no pises el monte abierto`,
        `Sin dejar rastro: llevate toda tu basura, incluida la orgánica como cáscaras o huesos`,
        `No alimentes animales: la comida humana enferma a la fauna y cambia sus hábitos`,
        `Respetá la flora: no cortes ramas ni extraigas plantas, semillas o piedras`,
        `Sos fuego y humo: está prohibido hacer fuego en el monte; un solo descuido basta para un incendio`,
        `Apoyá lo local: preferí guías y prestadores de Merlo, y compartí el cuidado del lugar`
      ]
    },
    architecture: {
      title: `Paisaje y Ecología`,
      intro: `Para entender Rincón del Este no hace falta hablar de edificios, sino de **relieve, vegetación y agua**. Estos tres factores explican por qué esta porción de sierra es tan rica en vida.`,
      specs: {
        structure: { title: `Relieve y Suelos`, content: `Las Sierras de los Comechingones son sierras cristalinas, más antiguas que los Andes, formadas por el plegamiento de la Sierra Pampeana. En Rincón del Este el terreno ondula entre lomadas, piedras basálticas y pequeñas quebradas. Los suelos son poco profundos y arenosos, lo que obliga a la vegetación a ser tenaz y económica con el agua.

Por eso el paisaje se ve "abierto": no hay selva, sino un monte bajo y espinoso que deja ver el cielo y la piedra, un tipo de belleza muy distinto al de la selva o la pradera.` },
        design: { title: `Comunidades Vegetales`, content: `El bosque nativo de Rincón del Este es una comunidad de **xerófitas** — plantas resistentes a la sequía—. Dominan el algarrobo, el chañar, la jarilla y el molle, acompañados de cactus y pastizales duros. En primavera florecen especies que en pocas semanas pintan el suelo de amarillo y violeta.

Esta diversidad de plantas es la base de la cadena: da frutos, sombra y refugio a aves, insectos y mamíferos pequeños. Conocer el monte es entender quién come de quién y cómo todo se sostiene.` },
        optics: { title: `Aguas y Arroyos`, content: `El agua en la sierra es escasa y preciosa. Pequeños **arroyos temporarios** corren tras las lluvias y alimentan vertientes y bebederos naturales. Esos hilos de agua son el punto más vivo de la reserva: allí se reúnen las aves al amanecer y al atardecer.

Proteger las nacientes es, por tanto, proteger a toda la fauna. Por eso la reserva cuida especialmente las zonas de curso de agua y pide a quien visita no alterarlas.` }
      },
      plaque: {
        title: `Datos Clave`,
        items: [
          { label: `Nombre`, value: `Reserva Florofaunística de Rincón del Este` },
          { label: `Ubicación`, value: `El Rincón, Merlo, San Luis, Argentina` },
          { label: `Provincia`, value: `San Luis` },
          { label: `Tipo`, value: `Reserva natural / Refugio de flora y fauna` },
          { label: `Acceso`, value: `Desde Villa de Merlo (少数 km)` },
          { label: `Localidad puerta`, value: `Villa de Merlo` }
        ]
      }
    },
    monuments: {
      title: `Qué hacer en Rincón del Este`,
      intro: `La reserva combina contemplación y actividad suave. Estas experiencias son las que más disfrutan quienes buscan naturaleza sin complicaciones.`,
      items: [
        { name: `Avistamiento de aves y fauna`, description: `Rincón del Este es un punto excelente para la observación de aves y mamíferos pequeños. Con binoculares y paciencia, al amanecer es fácil ver chimangos, zorzales, colibríes e incluso vizcachas en las rocas. Es la actividad estrella de la reserva.` },
        { name: `Senderismo interpretativo`, description: `La reserva propone senderos señalizados que recorren el monte nativo y llegan a miradores sobre la quebrada. A lo largo del camino, carteles y guías explican qué planta es cada una y qué animal la habita. Ideal para familias y para quien quiere aprender.` },
        { name: `Paseos a caballo`, description: `En los alrededores de Merlo es común recorrer las sierras a caballo. Algunos prestadores locales incluyen tramos cerca de la reserva, permitiendo sentir el ritmo lento de la montaña sin fatiga. Consultá en el centro de recepción por operadores habilitados.` },
        { name: `Fotografía de naturaleza`, description: `La luz seca y dorada de San Luis convierte cada roca y cada cactus en motivo fotográfico. Desde los primeros planos de flora hasta los panoramas de la sierra, la reserva es un estudio al aire libre para aficionados y profesionales.` }
      ]
    },
    contrast: {
      title: `Bosque nativo y cielo abierto`,
      intro: `La belleza de Rincón del Este está en el contraste entre lo que crece y lo que se ve. Bajo el follaje del monte, la vida se esconde; arriba, la sierra abre un cielo inmenso. Dos caras de un mismo refugio.`,
      before: `Bosque Nativo`,
      after: `Cielo de la Sierra`
    },
    visiting: {
      title: `Planificá tu Visita`,
      intro: `La reserva se visita todo el año, aunque la primavera y el otoño son las estaciones más cómodas. Una mañana o una tarde alcanzan para recorrer los senderos principales. Lo siguiente ayuda a planificar.`,
      hours: { title: `Horario`, content: `La reserva abre en horario diurno, generalmente de **10:00 a 20:00**.\nLas primeras horas de la mañana y el atardecer son los mejores momentos para ver fauna y para la fotografía.`, note: `El horario puede ajustarse por temporada o eventos; confirmá por teléfono (+542664361087) antes de tu visita.` },
      price: { title: `Ingreso`, content: `El ingreso suele tener una contribución simbólica de conservación y mantenimiento, que se abona en la entrada.\nLos montos se informan en el lugar; llevá efectivo por si las redes fallan en la sierra.`, note: `Consultá si hay tarifas diferenciadas para escolares, jubilados o residentes de Merlo.` },
      duration: { title: `Duración sugerida`, content: `Recorrido de senderos principales + mirador: unas **2 a 4 horas**.\nSumando picnic y avistamiento pausado, podés pasar la mañana o la tarde completa.`, note: `Combiná con Villa de Merlo y el Valle de Conlara para armar una escapada de 1 a 2 días en la región.` },
      tips: { title: `Consejos y Notas`, items: [
        `Sol y sequedad: la radiación en Merlo es muy alta; llevá sombrero, lentes y protector solar`,
        `Hidratate: el aire seco deshidrata rápido; llevá al menos 1 L de agua por persona`,
        `Calzado: usá zapatillas cerradas o botas bajas; el suelo tiene piedra suelta y espinas`,
        `Repelente: en primavera y verano conviene repelente para mosquitos y garrapatas`,
        `No te salgas del sendero: protegé el monte y evitá perderte en la quebrada`,
        `Llegá temprano: las aves y mamíferos son más activos al amanecer`
      ] },
      essentials: [
        { icon: `☀️`, title: `Sol fuerte`, text: `Radiación solar muy alta en Merlo: sombrero, lentes y protector son imprescindibles.` },
        { icon: `👟`, title: `Calzado`, text: `Zapatillas cerradas o botas bajas: el suelo tiene piedra suelta y espinas.` },
        { icon: `💧`, title: `Hidratación`, text: `Aire seco y calor: llevá al menos 1 L de agua por persona.` },
        { icon: `🐜`, title: `Repelente`, text: `En primavera/verano, repelente para mosquitos y garrapatas en el monte.` }
      ]
    },
    transportation: {
      title: `Cómo Llegar`,
      airport: { title: `✈️ Desde San Luis o Córdoba`, content: `La ciudad de San Luis (capital provincial) queda a poco más de 100 km de Merlo y tiene el aeropuerto más cercano con vuelos regionales. Córdoba, con aeropuerto internacional, queda a unas 4–5 horas en auto.`, options: [
        { name: `Auto propio / Alquiler (Recomendado)`, price: `aprox. 1,5–2 h`, time: `desde San Luis`, steps: [`Desde San Luis ciudad tomá la ruta hacia Merlo (RN-148 / accesos provinciales)`, `Llegá a Villa de Merlo y seguí los carteles a El Rincón`, `La entrada a la reserva está a pocos km del centro de Merlo`] },
        { name: `Ómnibus + traslado local`, price: `aprox. 2–3 h`, time: `San Luis → Merlo`, steps: [`Tomá un ómnibus de San Luis a Villa de Merlo (Terminal de Merlo)`, `Desde la terminal, reservá remís/taxi o una excursión local`, `El tramo final a la reserva es corto y se hace en auto`] },
        { name: `Vuelo a Córdoba + auto`, price: `4–5 h en auto`, time: `desde Córdoba`, steps: [`Volá a Córdoba (Pajas Blancas)`, `Alquilá auto y bajá por ruta hacia el sur hasta Merlo, San Luis`, `Desde Merlo, seguí a El Rincón y a la reserva`] }
      ]},
      publicTransport: {
        title: `🚌 Ómnibus / Transporte público`,
        content: `Quien no maneja suele ir primero a Villa de Merlo en ómnibus desde San Luis (o Córdoba con combinación) y luego tomar un remís o excursión local para el último tramo.`,
        options: [
          {
            name: `San Luis → Merlo (ómnibus)`,
            description: `Línea regular entre la capital provincial y Villa de Merlo, la opción más común sin auto.`,
            steps: [`Andá a la terminal de San Luis`, `Comprá boleto a Villa de Merlo`, `Al llegar, tomá remís o excursión local a la reserva`]
          },
          {
            name: `Merlo → Reserva (último tramo)`,
            description: `La reserva queda a pocos km del centro de Merlo; el tramo final se hace en remís o excursión.`,
            steps: [`Reservá remís/taxi en Merlo o una excursión local`, `Pedí destino "Rincón del Este"`, `La entrada está señalizada desde El Rincón`]
          }
        ]
      },
      city: { title: `🏘️ Desde Villa de Merlo`, content: `La Reserva de Rincón del Este se encuentra a pocos kilómetros de Villa de Merlo, en la zona de El Rincón. Lo más simple es auto, remís o una excursión de un operador local.`, steps: [`Desde el centro de Merlo seguí los carteles a El Rincón`, `Avanzá unos pocos km hasta la entrada señalizada de la reserva`, `Estacioná y dirigite al centro de recepción`] },
      tips: { title: `Consejos de transporte y viaje`, items: [
        `Localidad base: Villa de Merlo es el punto de partida, con alojamiento, comida y servicios`,
        `San Luis capital queda a poco más de 100 km; presupuestá unas 2 h de ruta`,
        `Cargá nafta y efectivo en Merlo: en la sierra la señal y los medios pueden fallar`,
        `Combiná con el Valle de Conlara y las Sierras Comechingones para una escapada regional`,
        `En temporada alta (enero, julio) reservá excursiones con anticipación`
      ] }
    },
    gallery: { title: `Galería de Fotos`, viewMore: `Ver más fotos en Google Maps`, categories: [ { key: `flora`, label: `Flora` }, { key: `fauna`, label: `Fauna` }, { key: `landscape`, label: `Paisaje` }, { key: `trails`, label: `Senderos` } ] },
    reviews: {
      title: `Opiniones de Visitantes`,
      subtitle: `Voces de Rincón del Este: testimonios reales de Google Maps`,
      viewMore: `Ver más opiniones en Google Maps`,
      nearbyTitle: `Atracciones cercanas`,
      nearbyIntro: `Después de conocer Rincón del Este, podés sumar estas paradas cercanas en la región de Merlo y las Comechingones:`,
      nearbyItems: [
        { name: `Villa de Merlo`, description: `La "pequeña Suiza" de San Luis, famosa por su microclima seco, su Camino de los Artesanos y su ritmo tranquilo. Ideal para alojarse y recorrerla a pie antes o después de la reserva.` },
        { name: `Sierras de los Comechingones`, description: `El sistema de sierras que aloja a la reserva y a la Quebrada del Condorito (Córdoba). Miradores, piedras pintadas y cielos de montaña para quien busca naturaleza.` },
        { name: `Valle de Conlara y Lago Potrero de la Hoya`, description: `Un valle serrano cercano a Merlo con un embalse de aguas tranquilas, ideal para una caminata costera o una tarde de descanso tras la visita.` }
      ]
    },
    faq: { title: `Preguntas Frecuentes`, subtitle: `Saber más sobre Rincón del Este`, items: [
      { question: `¿Dónde está la Reserva de Rincón del Este y cómo llego?`, answer: `Está cerca de El Rincón, en Villa de Merlo, provincia de San Luis, dentro de las Sierras de los Comechingones. Lo más fácil es llegar a Merlo (desde San Luis capital a poco más de 100 km, o desde Córdoba en auto) y luego tomar un remís o excursión local de pocos km hasta la entrada.` },
      { question: `¿Cuál es el horario y el arancel de ingreso?`, answer: `La reserva suele abrir de 10:00 a 20:00 e incorpora una contribución simbólica de conservación en la entrada. Los montos se informan en el lugar; recomendamos llamar al +542664361087 para confirmar el día de tu visita.` },
      { question: `¿Qué se puede hacer y es apto para familias con niños?`, answer: `Es un lugar ideal para avistamiento de aves, senderismo interpretativo, paseos a caballo y fotografía de naturaleza. Los senderos son tranquilos y aptos para familias; supervisá a los niños y no te salgas de los senderos habilitados.` },
      { question: `¿Se puede hacer picnic o acampar dentro de la reserva?`, answer: `La reserva permite el descanso en zonas habilitadas; el picnic suele estar permitido en áreas designadas. Por protección del monte, está prohibido hacer fuego y se recomienda consultar en recepción sobre acampada o uso de instalaciones.` },
      { question: `¿Qué debo llevar para visitar Rincón del Este?`, answer: `Llevá sombrero, lentes y protector solar (la radiación en Merlo es muy alta), al menos 1 L de agua por persona, calzado cerrado, repelente en primavera/verano y, si te gustan las aves, binoculares. Llegá temprano para ver más fauna.` }
    ]},
    location: { title: `Ubicación en el Mapa`, address: `Rincón del Este, El Rincón\nMerlo, Provincia de San Luis\nArgentina`, openMaps: `Ver en Google Maps` },
    footer: { callToAction: `Rincón del Este es uno de los refugios de flora y fauna más queridos de Merlo, un equilibrio frágil entre el monte nativo y el cielo de la sierra. Visitemoslo con cuidado para que las próximas generaciones también lo encuentren vivo.`, text: `© 2026 Rincón del Este Guide · Todos los derechos reservados.\nEste sitio es una guía educativa independiente sin fines de lucro dedicada a difundir información precisa sobre la Reserva Florofaunística de Rincón del Este. No estamos afiliados con el gobierno argentino ni con ninguna autoridad oficial.`, made: `Este es un proyecto educativo independiente no profit, creado para amantes de la naturaleza, familias y viajeros slow.`, linksTitle: `Enlaces`, links: LINKS_BY_LOCALE.es },
    siteMap: {
      title: `Mapa de la Reserva`,
      intro: `Pasá el cursor (o tocá) los marcadores del mapa para explorar las áreas clave de Rincón del Este.`,
      hint: `Pasa para prever · Tocá para fijar`,
      cta: `Ver el mapa completo`,
      zones: [
        { key: `entrada`, name: `Centro de Recepción`, desc: `La entrada y el punto de informes: aquí se abona el ingreso, se retiran folletos y se coordina la visita con los guardaparques o guías.` },
        { key: `iglesia`, name: `Senderos Interpretativos`, desc: `Trochas señalizadas que recorren el monte nativo y explican la flora y la fauna. La columna vertebral de la visita.` },
        { key: `monumento`, name: `Mirador de la Quebrada`, desc: `Un punto elevado desde el que se abre el paisaje de la sierra y se ve el curso de agua entre las rocas. Ideal para fotos y avistamiento.` },
        { key: `corrales`, name: `Jardín de Aves y Mariposas`, desc: `Claros de monte donde la luz y las flores atraen colibríes, mariposas y pequeños pájaros. Llevá binoculares.` },
        { key: `necrópolis`, name: `Arroyo y Bosque Nativo`, desc: `La franja de agua y vegetación más densa, refugio de la fauna al amanecer y al atardecer. Respetá la zona y no te metas en el curso.` }
      ]
    },
    itinerary: {
      title: `Itinerario Sugerido`,
      intro: `Una mañana alcanza para lo esencial de Rincón del Este; una tarde completa permite ir más despacio. Usá esta línea de tiempo como referencia.`,
      steps: [
        { time: `09:30`, title: `Llegada a Merlo`, text: `Cargá agua, protector y algo de efectivo; confirms el horario si no lo hiciste. El centro de Merlo es tu última parada de suministros.` },
        { time: `10:00`, title: `Ingreso y Recepción`, text: `Abonás el ingreso y retirás el mapa de senderos. Los guías te orientan sobre el estado del día y las zonas abiertas.` },
        { time: `10:30`, title: `Senderos Interpretativos`, text: `Recorrés el monte nativo leyendo las señalizaciones: algarrobo, chañar, jarilla y cactus, y quién vive de ellos.` },
        { time: `12:00`, title: `Mirador de la Quebrada`, text: `Subís al mirador para ver la sierra abierta y el hilo de agua entre las rocas. Buen momento para fotos.` },
        { time: `13:00`, title: `Picnic y avistamiento`, text: `Descansás en el área habilitada y, con paciencia, observás aves y mariposas en los claros del monte.` },
        { time: `15:30`, title: `Regreso a Merlo`, text: `Volvés a la villa al atardecer, cuando la luz dorada tiñe las sierras y cierra la jornada en la reserva.` }
      ]
    },
    ctaBand: {
      title: `Planificá tu Visita a Rincón del Este`,
      subtitle: `Desde el horario y el ingreso hasta los senderos y el avistamiento de aves.`,
      buttons: [`Horario e Ingreso`, `Consejos de Visita`, `Ver en el Mapa`]
    }
  },
  en: {
    nav: { history: `Overview`, architecture: `Landscape & Ecology`, monuments: `Activities`, eco: `Conservation`, visiting: `Visit Info`, transportation: `Getting There`, gallery: `Gallery`, reviews: `Reviews`, faq: `FAQ`, location: `Location` },
    hero: {
      tags: [`San Luis Nature Reserve`, `Comechingones Range`, `Ecotourism in Merlo`],
      tagline: `Argentina · San Luis · Merlo`,
      title: `Rincón del Este Flora & Fauna Reserve`,
      subtitle: `Native flora & fauna refuge · Comechingones Range · Ecotourism`,
      cta: `Explore the Reserve`,
      description: {
        address: `Rincón del Este, El Rincón, Merlo, San Luis, Argentina`,
        phone: `Tel: +542664361087`,
        category: `Nature reserve · Flora & fauna · Ecotourism`
      }
    },
    rating: { reviews: `reviews`, source: `Google Reviews` },
    history: {
      title: `A refuge in the Comechingones Range`,
      intro: `The **Rincón del Este Flora & Fauna Reserve** is one of the best-kept natural spaces around Merlo, in the heart of San Luis Province. It spreads across the foothills of the **Sierras de los Comechingones**, a mountain chain at the foot of the great Sierra Pampeana that concentrates much of central Argentina's biodiversity.

The landscape and its people
Merlo is known for its dry, sunny microclimate, its artisans and its slow pace — which earned it the nickname "little Switzerland" of San Luis. Around it the nature grows denser: forests of carob, chañar and jarilla, mountain streams and wildlife that wakes at dawn. Rincón del Este was created precisely to protect that balance.

A conservation choice
Unlike a traditional public park, Rincón del Este is a flora and fauna reserve that combines ecosystem care with responsible visiting. Its purpose is to keep representative samples of the native woodland, give shelter to local birds and mammals, and offer visitors an authentic nature experience with minimal intervention.

Merlo, gateway to the hills
The town of Merlo — founded in 1797 — is the natural starting point to discover the reserve. From there a short drive leads to El Rincón, where the reserve opens its trails to the public. That is why the history of Rincón del Este cannot be told without the history of Merlo and of the Indigenous peoples who lived in these hills long before the village.`
    },
    myths: {
      title: `History, Peoples and Legends`,
      intro: `The Sierras de los Comechingones hold one of the region's oldest cultural marks. Before colonisation, these mountains were territory of the **comechingones**, hunter-gatherers who left their sign on stone and in the memory of the place.`,
      items: [
        {
          title: `The Comechingón and the painted stone`,
          content: `The comechingones inhabited much of central Argentina's sierras. In the Merlo and Comechingones region, **painted and engraved stones** survive — geometric motifs and figures carved in rock — that reveal how they saw the world. Walking these hills is, in a way, walking an open-air museum.

Although the village of Merlo was founded in 1797, human presence in these mountains is far older. Respecting those sites is part of visiting Rincón del Este: the reserve protects not only living nature, but also the landscape the original peoples called their own.`
        },
        {
          title: `The legend of the choique (rhea)`,
          content: `In local tradition the **choique** (the rhea, or American ostrich) is a recurring figure. Legend says the choique runs in circles to confuse whoever chases it and so protects its chicks among the bush. In Rincón del Este, spotting one of these flightless birds is an encounter with that same cunning of nature.

Local guides often tell these stories on the trails: they are not just anecdotes, but a way of teaching respect for the rhythms of the mountain fauna, especially in the breeding season.`
        },
        {
          title: `The spirit of the sierra (folklore)`,
          content: `The folklore of San Luis often speaks of the sierra as a place with a spirit of its own: they say that at dusk, when the sun gilds the rocks, the mountain "breathes" and grows quieter. Villagers advise walking slowly and speaking softly — not out of fear, but out of respect for those who live in the bush.

These beliefs, half pagan and half Christian, still accompany walks in Rincón del Este and remind us of something essential: this is a refuge, not a stage.`
        }
      ]
    },
    curiosities: {
      title: `Nature Facts`,
      content: `A singular microclimate
Merlo and its surroundings have one of the country's highest solar-radiation indexes and very dry air. That combination favours crisp light and vegetation adapted to aridity: jarilla, chañar, carob and cactus.

Birds, many birds
The reserve is a fantastic spot for **birdwatching** — from the small goldfinch to the chimango, not to mention thrushes and hummingbird stopovers. Whoever brings binoculars stays a while.

Butterflies and pollinators
In spring and summer the woodland clearings fill with butterflies and native bees. The reserve protects exactly those pollination corridors, which are key for the forest to keep bearing fruit.

Close to the Condorito Gorge
The region belongs to the mountain system where the **Andean condor** nests. A few hours away, the Quebrada del Condorito (Córdoba) is the best-known sanctuary of this bird, but the horizon of Rincón del Este already anticipates those mountain skies.`
    },
    eco: {
      title: `Reserve Conservation`,
      intro: `Rincón del Este is a sensitive ecosystem that sustains native flora and fauna. As an independent non-profit educational guide, we promote visiting it as responsibly as possible.`,
      items: [
        `Stay on the trail: use only the marked paths and do not tread the open bush`,
        `Leave no trace: take all your rubbish with you, including organic waste like peels or pits`,
        `Do not feed animals: human food sickens wildlife and changes its habits`,
        `Respect the flora: do not cut branches or remove plants, seeds or stones`,
        `No fire or smoke: making fire in the bush is forbidden; one careless moment can cause a wildfire`,
        `Support locals: prefer Merlo guides and providers, and share the care of the place`
      ]
    },
    architecture: {
      title: `Landscape & Ecology`,
      intro: `To understand Rincón del Este you need no talk of buildings, but of **relief, vegetation and water**. These three factors explain why this slice of sierra is so rich in life.`,
      specs: {
        structure: { title: `Relief and Soils`, content: `The Sierras de los Comechingones are crystalline mountains, older than the Andes, formed by the folding of the Sierra Pampeana. In Rincón del Este the terrain undulates between hills, basalt stones and small ravines. Soils are shallow and sandy, forcing the vegetation to be tough and economical with water.

That is why the landscape looks "open": there is no jungle, but a low, thorny woodland that reveals sky and stone — a kind of beauty quite different from forest or prairie.` },
        design: { title: `Plant Communities`, content: `The native woodland of Rincón del Este is a community of **xerophytes** — drought-resistant plants. Carob, chañar, jarilla and molle dominate, alongside cacti and tough grasses. In spring, species bloom that in a few weeks paint the ground yellow and violet.

This plant diversity is the base of the chain: it gives fruit, shade and shelter to birds, insects and small mammals. Knowing the bush is understanding who eats whom and how everything holds together.` },
        optics: { title: `Waters and Streams`, content: `Water in the sierra is scarce and precious. Small **seasonal streams** run after the rains and feed springs and natural watering holes. Those threads of water are the liveliest point of the reserve: birds gather there at dawn and dusk.

Protecting the springs therefore means protecting all the wildlife. That is why the reserve pays special attention to the watercourse zones and asks visitors not to disturb them.` }
      },
      plaque: {
        title: `Key Facts`,
        items: [
          { label: `Name`, value: `Rincón del Este Flora & Fauna Reserve` },
          { label: `Location`, value: `El Rincón, Merlo, San Luis, Argentina` },
          { label: `Province`, value: `San Luis` },
          { label: `Type`, value: `Nature reserve / Flora & fauna refuge` },
          { label: `Access`, value: `From Villa de Merlo (few km)` },
          { label: `Gateway town`, value: `Villa de Merlo` }
        ]
      }
    },
    monuments: {
      title: `What to do at Rincón del Este`,
      intro: `The reserve mixes contemplation with gentle activity. These are the experiences most enjoyed by those looking for nature without complications.`,
      items: [
        { name: `Birdwatching & wildlife`, description: `Rincón del Este is an excellent spot for observing birds and small mammals. With binoculars and patience, at dawn it is easy to see chimangos, thrushes, hummingbirds and even vizcachas on the rocks. It is the reserve's flagship activity.` },
        { name: `Interpretive hiking`, description: `The reserve offers signposted trails through the native woodland up to viewpoints over the ravine. Along the way, signs and guides explain which plant is which and which animal lives in it. Ideal for families and for those who want to learn.` },
        { name: `Horseback riding`, description: `Around Merlo it is common to ride the sierras on horseback. Some local providers include stretches near the reserve, letting you feel the slow rhythm of the mountain without effort. Ask at reception for authorised operators.` },
        { name: `Nature photography`, description: `The dry, golden light of San Luis turns every rock and cactus into a photographic subject. From close-ups of flora to sierra panoramas, the reserve is an open-air studio for amateurs and professionals.` }
      ]
    },
    contrast: {
      title: `Native Woodland and Open Sky`,
      intro: `The beauty of Rincón del Este lies in the contrast between what grows and what is seen. Beneath the woodland canopy, life hides; above, the sierra opens an immense sky. Two faces of one refuge.`,
      before: `Native Woodland`,
      after: `Sierra Sky`
    },
    visiting: {
      title: `Plan Your Visit`,
      intro: `The reserve can be visited all year, though spring and autumn are the most comfortable seasons. A morning or an afternoon is enough to walk the main trails. The following helps you plan.`,
      hours: { title: `Opening Hours`, content: `The reserve opens in daytime, generally **10:00 to 20:00**.\nThe early morning and dusk are the best moments to see wildlife and for photography.`, note: `Hours may shift by season or events; call (+542664361087) before your visit to confirm.` },
      price: { title: `Entry`, content: `Entry usually involves a symbolic conservation and maintenance contribution, paid at the gate.\nAmounts are posted on site; carry cash in case networks fail in the sierra.`, note: `Ask about differentiated rates for students, pensioners or Merlo residents.` },
      duration: { title: `Suggested Duration`, content: `Main trails + viewpoint: about **2 to 4 hours**.\nAdding a picnic and slow wildlife watching, you can spend a full morning or afternoon.`, note: `Combine with Villa de Merlo and the Conlara Valley for a 1–2 day regional getaway.` },
      tips: { title: `Tips & Notes`, items: [
        `Sun and dryness: radiation in Merlo is very high; bring hat, glasses and sunscreen`,
        `Hydrate: dry air dehydrates fast; carry at least 1 L of water per person`,
        `Footwear: wear closed shoes or low boots; the ground has loose stone and thorns`,
        `Repellent: in spring and summer, repellent helps against mosquitoes and ticks`,
        `Stay on the trail: protect the bush and avoid getting lost in the ravine`,
        `Arrive early: birds and mammals are most active at dawn`
      ] },
      essentials: [
        { icon: `☀️`, title: `Strong Sun`, text: `Very high solar radiation in Merlo: hat, glasses and sunscreen are essential.` },
        { icon: `👟`, title: `Footwear`, text: `Closed shoes or low boots: the ground has loose stone and thorns.` },
        { icon: `💧`, title: `Hydration`, text: `Dry air and heat: carry at least 1 L of water per person.` },
        { icon: `🐜`, title: `Repellent`, text: `In spring/summer, repellent for mosquitoes and ticks in the bush.` }
      ]
    },
    transportation: {
      title: `Getting There`,
      airport: { title: `✈️ From San Luis or Córdoba`, content: `The city of San Luis (provincial capital) is a little over 100 km from Merlo and has the nearest airport with regional flights. Córdoba, with an international airport, is about 4–5 hours by car.`, options: [
        { name: `Self-drive / Rental (Recommended)`, price: `approx. 1.5–2 h`, time: `from San Luis`, steps: [`From San Luis city take the route to Merlo (RN-148 / provincial roads)`, `Reach Villa de Merlo and follow signs to El Rincón`, `The reserve entrance is a few km from Merlo centre`] },
        { name: `Bus + local transfer`, price: `approx. 2–3 h`, time: `San Luis → Merlo`, steps: [`Take a bus from San Luis to Villa de Merlo (Merlo terminal)`, `From the terminal, book a remís/taxi or a local tour`, `The final stretch to the reserve is short by car`] },
        { name: `Fly to Córdoba + drive`, price: `4–5 h drive`, time: `from Córdoba`, steps: [`Fly to Córdoba (Pajas Blancas)`, `Rent a car and head south to Merlo, San Luis`, `From Merlo, continue to El Rincón and the reserve`] }
      ]},
      publicTransport: {
        title: `🚌 Bus / Public transport`,
        content: `Those without a car usually go first to Villa de Merlo by bus from San Luis (or Córdoba with a connection) and then take a remís or local tour for the final stretch.`,
        options: [
          {
            name: `San Luis → Merlo (bus)`,
            description: `Regular line between the provincial capital and Villa de Merlo, the most common option without a car.`,
            steps: [`Go to San Luis terminal`, `Buy a ticket to Villa de Merlo`, `On arrival, take a remís or local tour to the reserve`]
          },
          {
            name: `Merlo → Reserve (last leg)`,
            description: `The reserve is a few km from Merlo centre; the final stretch is by remís or tour.`,
            steps: [`Book a remís/taxi in Merlo or a local tour`, `Ask for destination "Rincón del Este"`, `The entrance is signposted from El Rincón`]
          }
        ]
      },
      city: { title: `🏘️ From Villa de Merlo`, content: `The Rincón del Este Reserve is a few kilometres from Villa de Merlo, in the El Rincón area. The simplest is a car, remís or a local operator's tour.`, steps: [`From Merlo centre follow signs to El Rincón`, `Advance a few km to the signposted reserve entrance`, `Park and head to the reception centre`] },
      tips: { title: `Transport & Travel Tips`, items: [
        `Base town: Villa de Merlo is the starting point, with lodging, food and services`,
        `San Luis capital is a little over 100 km away; budget about 2 h of driving`,
        `Fill the tank and carry cash in Merlo: signal and payment may fail in the sierra`,
        `Combine with the Conlara Valley and Comechingones Range for a regional escape`,
        `In high season (January, July) book tours in advance`
      ] }
    },
    gallery: { title: `Photo Gallery`, viewMore: `View More Photos on Google Maps`, categories: [ { key: `flora`, label: `Flora` }, { key: `fauna`, label: `Fauna` }, { key: `landscape`, label: `Landscape` }, { key: `trails`, label: `Trails` } ] },
    reviews: {
      title: `Visitor Reviews`,
      subtitle: `Voices from Rincón del Este: real Google Maps testimonials`,
      viewMore: `View More Reviews on Google Maps`,
      nearbyTitle: `Nearby Attractions`,
      nearbyIntro: `After visiting Rincón del Este, you can add these nearby stops in the Merlo and Comechingones region:`,
      nearbyItems: [
        { name: `Villa de Merlo`, description: `The "little Switzerland" of San Luis, famous for its dry microclimate, its Artisans' Route and its calm pace. Great to stay and walk before or after the reserve.` },
        { name: `Sierras de los Comechingones`, description: `The mountain system hosting the reserve and the Quebrada del Condorito (Córdoba). Viewpoints, painted stones and mountain skies for nature seekers.` },
        { name: `Conlara Valley & Lago Potrero de la Hoya`, description: `A serran valley near Merlo with a calm-water reservoir, ideal for a shore walk or a restful afternoon after the visit.` }
      ]
    },
    faq: { title: `Frequently Asked Questions`, subtitle: `Learn more about Rincón del Este`, items: [
      { question: `Where is the Rincón del Este Reserve and how do I get there?`, answer: `It is near El Rincón, in Villa de Merlo, San Luis Province, within the Sierras de los Comechingones. The easiest way is to reach Merlo (a little over 100 km from San Luis city, or by car from Córdoba) and then take a remís or local tour of a few km to the entrance.` },
      { question: `What are the opening hours and entry fee?`, answer: `The reserve generally opens 10:00–20:00 and charges a symbolic conservation contribution at the gate. Amounts are posted on site; we recommend calling +542664361087 to confirm the day of your visit.` },
      { question: `What can I do, and is it family-friendly?`, answer: `It is ideal for birdwatching, interpretive hiking, horseback riding and nature photography. The trails are calm and suitable for families; supervise children and stay on the marked paths.` },
      { question: `Can I picnic or camp inside the reserve?`, answer: `The reserve allows rest in designated areas; picnics are usually permitted in assigned zones. To protect the bush, making fire is forbidden and we recommend asking at reception about camping or facility use.` },
      { question: `What should I bring to visit Rincón del Este?`, answer: `Bring a hat, glasses and sunscreen (radiation in Merlo is very high), at least 1 L of water per person, closed footwear, repellent in spring/summer, and binoculars if you like birds. Arrive early to see more wildlife.` }
    ]},
    location: { title: `Map Location`, address: `Rincón del Este, El Rincón\nMerlo, San Luis Province\nArgentina`, openMaps: `View on Google Maps` },
    footer: { callToAction: `Rincón del Este is one of Merlo's most beloved flora and fauna refuges, a fragile balance between native woodland and sierra sky. Let us visit it with care so that future generations also find it alive.`, text: `© 2026 Rincón del Este Guide · All rights reserved.\nThis website is an independent non-profit educational guide dedicated to sharing accurate information about the Rincón del Este Flora & Fauna Reserve. We are not affiliated with the Argentine government or any official authority.`, made: `This is an independent non-profit educational project, made for nature lovers, families and slow travellers.`, linksTitle: `Links`, links: LINKS_BY_LOCALE.en },
    siteMap: {
      title: `Reserve Map`,
      intro: `Hover over (or tap) the map markers to explore the key areas of Rincón del Este.`,
      hint: `Hover to preview · Tap to pin`,
      cta: `View the full map`,
      zones: [
        { key: `entrada`, name: `Reception Centre`, desc: `The entrance and info point: here you pay entry, pick up leaflets and coordinate the visit with rangers or guides.` },
        { key: `iglesia`, name: `Interpretive Trails`, desc: `Signposted paths through the native woodland explaining the flora and fauna. The backbone of the visit.` },
        { key: `monumento`, name: `Ravine Viewpoint`, desc: `An elevated point opening the sierra landscape and showing the watercourse between the rocks. Great for photos and wildlife.` },
        { key: `corrales`, name: `Birds & Butterflies Garden`, desc: `Woodland clearings where light and flowers attract hummingbirds, butterflies and small birds. Bring binoculars.` },
        { key: `necrópolis`, name: `Stream & Native Woodland`, desc: `The densest water-and-vegetation strip, shelter for wildlife at dawn and dusk. Respect the zone and do not enter the watercourse.` }
      ]
    },
    itinerary: {
      title: `Suggested Itinerary`,
      intro: `A morning covers the essentials of Rincón del Este; a full afternoon lets you go slower. Use this timeline as a reference.`,
      steps: [
        { time: `09:30`, title: `Arrival in Merlo`, text: `Fill water, sunscreen and some cash; confirm hours if you have not. Merlo centre is your last supply stop.` },
        { time: `10:00`, title: `Entry & Reception`, text: `Pay entry and pick up the trail map. Guides brief you on the day's conditions and open areas.` },
        { time: `10:30`, title: `Interpretive Trails`, text: `Walk the native woodland reading the signs: carob, chañar, jarilla and cactus, and who lives on them.` },
        { time: `12:00`, title: `Ravine Viewpoint`, text: `Climb to the viewpoint for the open sierra and the water thread among the rocks. Good moment for photos.` },
        { time: `13:00`, title: `Picnic & Wildlife`, text: `Rest in the designated area and, with patience, watch birds and butterflies in the clearings.` },
        { time: `15:30`, title: `Return to Merlo`, text: `Head back to the village at dusk, when the golden light gilds the sierras and closes the day at the reserve.` }
      ]
    },
    ctaBand: {
      title: `Plan Your Visit to Rincón del Este`,
      subtitle: `From hours and entry to trails and birdwatching.`,
      buttons: [`Hours & Entry`, `Visit Tips`, `View on Map`]
    }
  },
  zh: {
    nav: { history: `保护区概览`, architecture: `地貌与生态`, monuments: `体验活动`, eco: `生态保护`, visiting: `参观信息`, transportation: `交通指南`, gallery: `照片集锦`, reviews: `游客评价`, faq: `常见问题`, location: `地图位置` },
    hero: {
      tags: [`圣路易斯自然保护区`, `科梅琴戈内斯山脉`, `梅洛生态旅游`],
      tagline: `阿根廷 · 圣路易斯省 · 梅洛`,
      title: `Rincón del Este 动植物保护区`,
      subtitle: `原生动植物庇护地 · 科梅琴戈内斯山脉 · 生态旅游`,
      cta: `探索保护区`,
      description: {
        address: `Rincón del Este, El Rincón, 梅洛, 圣路易斯省, 阿根廷`,
        phone: `电话：+542664361087`,
        category: `自然保护区 · 动植物 · 生态旅游`
      }
    },
    rating: { reviews: `条评价`, source: `Google 评论` },
    history: {
      title: `科梅琴戈内斯山脉中的庇护地`,
      intro: `**Rincón del Este 动植物保护区**是梅洛（Merlo）周边保护得最好的自然空间之一，位于圣路易斯省腹地。它延展于**科梅琴戈内斯山脉（Sierras de los Comechingones）**的山麓——这条山脉坐落于大潘佩拉纳山系（Sierra Pampeana）脚下，集中了阿根廷中部大量的生物多样性。

地貌与人文
梅洛以干燥、晴朗的小气候、手工艺人与慢节奏而闻名，被称为圣路易斯的"小瑞士"。在它周围，自然变得更为茂密：阿尔加罗沃树（algarrobo）、恰尼亚尔树（chañar）与哈拉利拉灌丛（jarilla）组成的丛林、山间溪流，以及黎明苏醒的野生动物。Rincón del Este 正是为了保护这份平衡而生。

一项保护抉择
与传统的城市公园不同，Rincón del Este 是一座将生态保护与负责任游览结合的动植物保护区。它的宗旨是保留原生丛林的代表性片段、为本地鸟类与小型哺乳类提供庇护，并以最小的人工干预，为来访者提供一段真实的自然体验。

梅洛：群山的门户
梅洛镇始建于 1797 年，是探索保护区最自然的起点。从镇上出发，短短一段车程便抵达 El Rincón，保护区在那里向游客敞开步道。正因如此，Rincón del Este 的故事，离不开梅洛，也离不开那些早在小镇建立之前就栖居于此山的原住民族群。`
    },
    myths: {
      title: `历史、族群与传说`,
      intro: `科梅琴戈内斯山脉留存着本地区最古老的文化印记之一。在殖民之前，这些山岭是**科梅琴戈内斯人（comechingones）**的领地——他们是以狩猎采集为生的族群，把痕迹留在岩石上，也留在了这片土地记忆之中。`,
      items: [
        {
          title: `科梅琴戈内斯人与"彩绘之石"`,
          content: `科梅琴戈内斯人曾广泛居住在阿根廷中部的群山中。在梅洛与科梅琴戈内斯一带，至今保存着**彩绘与刻凿的石头**——刻在岩壁上的几何纹样与图形，透露着他们看待世界的方式。行走于这些山间，某种程度上便是在走访一座露天博物馆。

尽管梅洛镇建于 1797 年，人类在这些山脉中的足迹却远早于此。尊重这些遗迹，是探访 Rincón del Este 的一部分：保护区守护的不仅是活着的自然，还有原住民族群视为家园的那片风景。`
        },
        {
          title: ` choique（美洲鸵）的传说`,
          content: `在当地传统中，**choique**（即 ñandú，美洲鸵、美洲鸵鸟）是一个反复出现的形象。传说 choique 会绕圈奔跑以迷惑追捕者，从而在灌木丛中保护雏鸟。在 Rincón del Este，遇见这种不会飞的大鸟，便是与大自然的这份机敏不期而遇。

当地向导常在步道上讲述这些故事：它们不只是轶闻，更是一种教导——教人尊重山林动物的节律，尤其在繁殖季节。`
        },
        {
          title: `山魂（民间传说）`,
          content: `圣路易斯的民间传说常把群山描绘成有"性灵"的地方：据说黄昏时分，当夕阳把岩石染成金色，山便开始"呼吸"，也变得更加安静。山民建议放慢脚步、低声交谈——不是出于恐惧，而是出于对山林居民的敬意。

这些半异教、半基督教的信仰，至今仍伴随着 Rincón del Este 的徒步，并提醒人们一件要紧的事：这里是一处庇护地，而非一座舞台。`
        }
      ]
    },
    curiosities: {
      title: `自然趣闻`,
      content: `独特的小气候
梅洛及周边是全国太阳辐射指数最高、空气极为干燥的地区之一。这种组合造就了清透的光线，也造就了适应干旱的植被：哈拉利拉、恰尼亚尔、阿尔加罗沃与仙人掌。

鸟，很多鸟
保护区是**观鸟**的绝佳地点——从小型金翅雀到灰 Chimango  Caracara，还有鸫鸟与蜂鸟的迁徙停歇。带上双筒望远镜的人，往往流连忘返。

蝴蝶与传粉者
春夏时节，林间空地满是蝴蝶与本土蜜蜂。保护区守护的，正是这些传粉"走廊"——它们是森林持续结果的关键。

靠近神鹰峡谷
本地区属于安第斯神鹰（cóndor）筑巢的山系。几小时车程外的 Quebrada del Condorito（科尔多瓦省）是这种鸟最著名的庇护所，而 Rincón del Este 的天际线，已悄然预告了那些山间的天空。`
    },
    eco: {
      title: `保护区生态保护`,
      intro: `Rincón del Este 是一个支撑原生动植物生存的敏感生态系统。作为独立的非盈利科普指南，我们倡导以尽可能负责任的方式探访此地。`,
      items: [
        `沿步道而行：只走已标识的小径，不要踩踏开阔的灌丛`,
        `不留痕迹：带走你所有的垃圾，包括果皮、果核等有机物`,
        `不投喂动物：人类食物会让野生动物生病并改变其习性`,
        `尊重植物：不折枝，不带走植物、种子或石头`,
        `禁火禁烟：山林中严禁生火，一次疏忽便可能引发林火`,
        `支持本地：优先选择梅洛的向导与服务方，共同守护此地`
      ]
    },
    architecture: {
      title: `地貌与生态`,
      intro: `理解 Rincón del Este 不需要谈建筑，而要谈**地形、植被与水**。这三者解释了为何这片山坡如此充满生机。`,
      specs: {
        structure: { title: `地形与土壤`, content: `科梅琴戈内斯山脉是结晶岩山脉，比安第斯更古老，由潘佩拉纳山系的褶皱形成。在 Rincón del Este，地形在丘陵、玄武岩巨石与小峡谷之间起伏。土壤浅薄而多沙，迫使植被坚韧、善于节约用水。

正因如此，这里看起来"开阔"：没有密林，而是一片低矮带刺的丛林，露出天空与岩石——这与森林或草原是截然不同的一种美。` },
        design: { title: `植物群落`, content: `Rincón del Este 的原生丛林是一个**旱生植物**群落——耐旱的植物。阿尔加罗沃、恰尼亚尔、哈拉利拉与摩尔树（molle）为主，伴生仙人掌与硬草。春季，一些植物会在短短几周内把地面染成黄与紫。

这种植物的多样性是食物链的基础：它提供果实、荫蔽与庇护，供养鸟类、昆虫与小型哺乳类。认识这片丛林，便是理解谁以谁为食、一切如何相互支撑。` },
        optics: { title: `水系与溪流`, content: `山间的水稀少而珍贵。细小的**季节性溪流**在雨后流淌，补给泉眼与天然的饮水处。这些水线是保护区最有生气的地方：鸟类在黎明与黄昏聚于此。

因此，保护泉眼便是保护所有的野生动物。这也是为何保护区格外呵护水道区域，并请游客不要扰动它们。` }
      },
      plaque: {
        title: `基本信息`,
        items: [
          { label: `名称`, value: `Rincón del Este 动植物保护区` },
          { label: `位置`, value: `El Rincón, 梅洛, 圣路易斯省, 阿根廷` },
          { label: `省份`, value: `圣路易斯省` },
          { label: `类型`, value: `自然保护区 / 动植物庇护地` },
          { label: `抵达`, value: `自梅洛镇出发（数公里）` },
          { label: `门户城镇`, value: `梅洛镇 Villa de Merlo` }
        ]
      }
    },
    monuments: {
      title: `在 Rincón del Este 可以做什么`,
      intro: `保护区将静观与轻量活动融为一体。以下是寻求"无负担自然体验"的游客最喜爱的项目。`,
      items: [
        { name: `观鸟与观赏野生动物`, description: `Rincón del Este 是观察鸟类与小型哺乳类的绝佳地点。带上双筒望远镜、保持耐心，黎明时分很容易看到灰 Caracara、鸫鸟、蜂鸟，甚至岩石上的 vizcacha（草原兔鼠）。这是保护区的招牌活动。` },
        { name: `解说步道徒步`, description: `保护区设有标识清晰的小径，穿过原生丛林并通向峡谷观景台。沿途的标牌与向导会讲解每种植物的名字，以及栖息其间的动物。适合亲子家庭，也适合想学习的人。` },
        { name: `骑马漫游`, description: `梅洛周边常有人在群山中骑行。部分本地服务方会安排靠近保护区的路段，让你无需费力便能感受山林缓慢的节奏。可在接待中心咨询有资质的经营方。` },
        { name: `自然摄影`, description: `圣路易斯干燥而金黄的光线，把每一块岩石、每一株仙人掌都变成摄影题材。从植物的特写到山脉全景，保护区是业余与专业摄影师的露天工作室。` }
      ]
    },
    contrast: {
      title: `原生丛林与开阔天空`,
      intro: `Rincón del Este 的美，在于"生长之物"与"所见之景"的对照。丛林树冠之下，生命藏匿；头顶之上，群山敞开无垠的天空。同一处庇护地的两面。`,
      before: `原生丛林`,
      after: `群山天空`
    },
    visiting: {
      title: `参观信息指南`,
      intro: `保护区全年可访，但春季与秋季最为舒适。一个上午或一个下午，便足以走完主要步道。以下信息帮助你从容规划。`,
      hours: { title: `开放时间`, content: `保护区在白天开放，通常为 **10:00 至 20:00**。\n清晨与黄昏是观察野生动物与摄影的最佳时段。`, note: `开放时间可能因季节或活动调整；出行前请电话（+542664361087）确认。` },
      price: { title: `入园`, content: `入园通常收取一笔象征性的保护与维护费用，于入口处缴纳。\n具体金额以现场公示为准；山区网络可能不稳，建议携带现金。`, note: `可咨询学生、退休者或梅洛居民是否有优惠票价。` },
      duration: { title: `建议游览时长`, content: `主要步道 + 观景台：约 **2 至 4 小时**。\n若加上野餐与从容的观鸟，可消磨整个上午或下午。`, note: `可与梅洛镇、孔拉拉山谷（Conlara Valley）串联，安排 1–2 日区域游。` },
      tips: { title: `游览贴士与注意事项`, items: [
        `日照与干燥：梅洛紫外线极强，请备宽檐帽、墨镜与高倍防晒`,
        `补水：干燥空气易脱水，每人每日至少携带 1 升饮水`,
        `鞋履：穿包裹性好的运动鞋或低帮靴；地面有松动石块与尖刺`,
        `驱虫：春夏建议备驱虫剂，防蚊与蜱`,
        `不偏离步道：保护丛林，也避免在大峡谷中迷路`,
        `早到：鸟类与兽类在黎明最为活跃`
      ] },
      essentials: [
        { icon: `☀️`, title: `强日照`, text: `梅洛太阳辐射极高：宽檐帽、墨镜与防晒霜必不可少。` },
        { icon: `👟`, title: `鞋履`, text: `包裹性好的鞋或低帮靴：地面有松动石块与尖刺。` },
        { icon: `💧`, title: `补水`, text: `空气干燥炎热：每人至少携带 1 升饮水。` },
        { icon: `🐜`, title: `驱虫`, text: `春夏在丛林中备驱虫剂，防蚊与蜱。` }
      ]
    },
    transportation: {
      title: `交通指南`,
      airport: { title: `✈️ 自圣路易斯或科尔多瓦出发`, content: `圣路易斯省府距梅洛约 100 余公里，拥有最近、有区域航班的机场。科尔多瓦有国际机场，自驾约 4–5 小时。`, options: [
        { name: `自驾 / 租车（推荐）`, price: `约 1.5–2 小时`, time: `自圣路易斯`, steps: [`从圣路易斯市区沿公路前往梅洛（RN-148 / 省级公路）`, `抵达梅洛镇后，按路标驶向 El Rincón`, `保护区入口距梅洛镇中心仅数公里`] },
        { name: `长途巴士 + 当地接驳`, price: `约 2–3 小时`, time: `圣路易斯 → 梅洛`, steps: [`从圣路易斯乘巴士前往梅洛镇（梅洛客运站）`, `抵达后预约 remís/出租车或参加当地一日游`, `最后一段前往保护区路程很短`] },
        { name: `飞抵科尔多瓦 + 自驾`, price: `自驾 4–5 小时`, time: `自科尔多瓦`, steps: [`飞抵科尔多瓦（Pajas Blancas 机场）`, `租车向南前往圣路易斯省梅洛`, `自梅洛继续前往 El Rincón 与保护区`] }
      ]},
      publicTransport: {
        title: `🚌 长途巴士 / 公共交通`,
        content: `不自驾的游客通常先乘巴士从圣路易斯（或经转乘自科尔多瓦）到梅洛镇，再乘 remís 或参加当地一日游走完最后一段。`,
        options: [
          {
            name: `圣路易斯 → 梅洛（巴士）`,
            description: `省府与梅洛镇之间的固定线路，是不自驾时最常用的方式。`,
            steps: [`前往圣路易斯客运站`, `购买前往梅洛镇的车票`, `抵达后乘 remís 或当地游前往保护区`]
          },
          {
            name: `梅洛 → 保护区（最后一段）`,
            description: `保护区距梅洛镇中心数公里，最后一段乘 remís 或一日游完成。`,
            steps: [`在梅洛预约 remís/出租车或当地一日游`, `目的地写"Rincón del Este"`, `入口自 El Rincón 起即有标识`]
          }
        ]
      },
      city: { title: `🏘️ 自梅洛镇出发`, content: `Rincón del Este 保护区位于梅洛镇数公里外的 El Rincón 一带。最方便的是自驾、remís 或参加当地经营方的一日游。`, steps: [`自梅洛镇中心按路标驶向 El Rincón`, `前行数公里至标识清晰的保护区入口`, `停车后前往接待中心`] },
      tips: { title: `交通与出行小贴士`, items: [
        `门户城镇：梅洛镇是起点，食宿与补给齐全`,
        `圣路易斯省府约 100 余公里，预留约 2 小时车程`,
        `在梅洛加满油并备现金：山区信号与支付可能不稳`,
        `可与孔拉拉山谷、科梅琴戈内斯山脉串联成区域游`,
        `旺季（1 月、7 月）请提前预约一日游`
      ] }
    },
    gallery: { title: `照片集锦`, viewMore: `在 Google Maps 查看更多照片`, categories: [ { key: `flora`, label: `植物` }, { key: `fauna`, label: `动物` }, { key: `landscape`, label: `地貌` }, { key: `trails`, label: `步道` } ] },
    reviews: {
      title: `游客评价`,
      subtitle: `来自 Rincón del Este 的声音：Google Maps 真实评价`,
      viewMore: `在 Google Maps 查看更多评价`,
      nearbyTitle: `周边值得一游`,
      nearbyIntro: `探访完 Rincón del Este 后，你可以在梅洛与科梅琴戈内斯一带顺道造访以下目的地：`,
      nearbyItems: [
        { name: `梅洛镇 Villa de Merlo`, description: `圣路易斯的"小瑞士"，以干燥的小气候、手工艺人之路（Camino de los Artesanos）与慢节奏闻名。非常适合在保护区前后徒步与住宿。` },
        { name: `科梅琴戈内斯山脉`, description: `容纳保护区与 Quebrada del Condorito（科尔多瓦省）的山系。观景台、彩绘石与山间天空，献给自然爱好者。` },
        { name: `孔拉拉山谷与 Potrero de la Hoya 湖`, description: `梅洛附近一处宁静的山谷，有水面平缓的水库，适合沿岸散步，或在探访之后悠闲度过一个下午。` }
      ]
    },
    faq: { title: `常见问题`, subtitle: `深入了解 Rincón del Este`, items: [
      { question: `Rincón del Este 动植物保护区在哪里？怎么去？`, answer: `它位于阿根廷圣路易斯省梅洛镇附近的 El Rincón，地处科梅琴戈内斯山脉之中。最方便的方式是先到梅洛（自圣路易斯省府约 100 余公里，或自驾自科尔多瓦），再乘 remís 或当地一日游走数公里抵达入口。` },
      { question: `开放时间和入园费用是怎样的？`, answer: `保护区通常 10:00–20:00 开放，入口处收取一笔象征性的保护贡献费。具体金额以现场公示为准；建议出行前致电 +542664361087 确认当日开放情况。` },
      { question: `有哪些活动？适合亲子家庭吗？`, answer: `这里是观鸟、解说步道徒步、骑马与自然摄影的理想之地。步道平缓、氛围宁静，非常适合家庭；请看护儿童，并全程不走入未开放区域。` },
      { question: `可以在保护区内野餐或露营吗？`, answer: `保护区允许在指定区域休息；野餐通常可在划定区域进行。为保护丛林，严禁生火，是否可露营或使用设施建议向接待中心咨询。` },
      { question: `参观 Rincón del Este 需要带什么？`, answer: `请携带宽檐帽、墨镜与防晒霜（梅洛紫外线极强）、每人至少 1 升饮水、包裹性好的鞋、春夏驱虫剂；若喜欢鸟类，带上双筒望远镜。早到能看到更多动物。` }
    ]},
    location: { title: `地图位置`, address: `Rincón del Este, El Rincón\n梅洛, 圣路易斯省\n阿根廷`, openMaps: `在 Google Maps 查看位置` },
    footer: { callToAction: `Rincón del Este 是梅洛最受人珍爱的动植物庇护地之一，是原生丛林与群山天空之间脆弱的平衡。请带着呵护之心探访，让下一代也能见到它生机勃勃的模样。`, text: `© 2026 Rincón del Este 指南 · 保留所有权利。\n本网站是一个独立的第三方非盈利科普指南项目，致力于准确传播 Rincón del Este 动植物保护区的信息。我们与阿根廷政府或任何官方机构均无隶属关系。`, made: `本网站是一个独立的非盈利科普项目，为自然爱好者、亲子家庭与慢旅行者而建。`, linksTitle: `友情链接`, links: LINKS_BY_LOCALE.zh },
    siteMap: {
      title: `保护区地图`,
      intro: `将鼠标悬停（或点按）下方地图中的标记，即可探索 Rincón del Este 的核心区域。`,
      hint: `悬停查看 · 点击锁定`,
      cta: `查看完整地图`,
      zones: [
        { key: `entrada`, name: `接待中心`, desc: `入口与咨询点：在此缴纳入园费、领取手册，并与护林员或向导协调行程。` },
        { key: `iglesia`, name: `解说步道`, desc: `穿过原生丛林、讲解动植物知识的标识小径，是整段探访的主干。` },
        { key: `monumento`, name: `峡谷观景台`, desc: `可俯瞰群山、看见岩石间水线的高点。适合拍照与观察野生动物。` },
        { key: `corrales`, name: `鸟类与蝴蝶园`, desc: `光线与花朵吸引蜂鸟、蝴蝶与小鸟的林间空地。请带上双筒望远镜。` },
        { key: `necrópolis`, name: `溪流与原生林`, desc: `植被最密、水线所在之处，是黎明与黄昏动物的庇护所。请尊重该区域，勿进入水道。` }
      ]
    },
    itinerary: {
      title: `建议行程规划`,
      intro: `一个上午足以领略 Rincón del Este 的精华；一个完整的下午则能走得更从容。以下时间轴供你参考。`,
      steps: [
        { time: `09:30`, title: `抵达梅洛`, text: `补水、涂防晒并备些现金；若尚未确认时间请先确认。梅洛镇中心是你最后的补给站。` },
        { time: `10:00`, title: `入园与接待`, text: `缴纳入园费、领取步道地图。向导会介绍当日状况与开放区域。` },
        { time: `10:30`, title: `解说步道`, text: `沿原生丛林阅读标牌：阿尔加罗沃、恰尼亚尔、哈拉利拉与仙人掌，以及以它们为生的动物。` },
        { time: `12:00`, title: `峡谷观景台`, text: `登上观景台，俯瞰开阔的群山与岩石间的水线。拍照的好时机。` },
        { time: `13:00`, title: `野餐与观鸟`, text: `在划定区域休息，从容观察林间空地的鸟类与蝴蝶。` },
        { time: `15:30`, title: `返回梅洛`, text: `黄昏时分返回小镇，金色余晖染上山脊，为保护区的一天画上句点。` }
      ]
    },
    ctaBand: {
      title: `规划你的 Rincón del Este 之旅`,
      subtitle: `从开放时间与入园，到步道与观鸟。`,
      buttons: [`开放时间与入园`, `参观贴士`, `在地图查看位置`]
    }
  },
  it: {
    nav: { history: `Panoramica`, architecture: `Paesaggio ed Ecologia`, monuments: `Attività`, eco: `Conservazione`, visiting: `Info di Visita`, transportation: `Come Arrivare`, gallery: `Galleria`, reviews: `Recensioni`, faq: `FAQ`, location: `Posizione` },
    hero: {
      tags: [`Riserva naturale di San Luis`, `Sierras de los Comechingones`, `Ecoturismo a Merlo`],
      tagline: `Argentina · San Luis · Merlo`,
      title: `Riserva Florofaunistica di Rincón del Este`,
      subtitle: `Rifugio di flora e fauna · Sierras Comechingones · Ecoturismo`,
      cta: `Esplora la Riserva`,
      description: {
        address: `Rincón del Este, El Rincón, Merlo, San Luis, Argentina`,
        phone: `Tel: +542664361087`,
        category: `Riserva naturale · Flora e fauna · Ecoturismo`
      }
    },
    rating: { reviews: `recensioni`, source: `Recensioni Google` },
    history: {
      title: `Un rifugio nelle Sierras Comechingones`,
      intro: `La **Riserva Florofaunistica di Rincón del Este** è uno degli spazi naturali meglio curati di Merlo, nel cuore della provincia di San Luis. Si estende sulle pendici delle **Sierras de los Comechingones**, una catena montuosa ai piedi della grande Sierra Pampeana che concentra buona parte della biodiversità dell'Argentina centrale.

Il paesaggio e la sua gente
Merlo è nota per il suo microclima secco e soleggiato, i suoi artigiani e il suo ritmo tranquillo, che le sono valsi il soprannome di "piccola Svizzera" di San Luis. Intorno, la natura si fa più densa: boschi di algarrobo, chañar e jarilla, ruscelli di montagna e fauna che si sveglia all'alba. Rincón del Este è nato proprio per proteggere questo equilibrio.

Una scelta di conservazione
A differenza di un parco pubblico tradizionale, Rincón del Este è una riserva di flora e fauna che unisce la cura dell'ecosistema alla visita responsabile. Il suo scopo è conservare campioni rappresentativi del monte nativo, dare rifugio a uccelli e mammiferi locali e offrire a chi arriva un'esperienza di natura autentica, con interventi minimi.

Merlo, porta delle sierras
La località di Merlo — fondata nel 1797 — è il punto di partenza naturale per conoscere la riserva. Da lì, un breve tragitto conduce a El Rincón, dove la riserva apre i suoi sentieri al pubblico. Ecco perché la storia di Rincón del Este non si capisce senza quella di Merlo e dei popoli originari che abitavano queste montagne molto prima del villaggio.`
    },
    myths: {
      title: `Storia, Popoli e Leggende`,
      intro: `Le Sierras de los Comechingones custodiscono uno dei segni culturali più antichi della regione. Prima della colonizzazione, questi monti furono territorio dei **comechingones**, cacciatori-raccoglitori che lasciarono il segno sulla pietra e nella memoria del luogo.`,
      items: [
        {
          title: `I comechingones e la pietra dipinta`,
          content: `I comechingones abitarono gran parte delle sierras centrali dell'Argentina. Nella regione di Merlo e delle Comechingones sopravvivono **pietre dipinte e incise** — motivi geometrici e figure scolpite nella roccia — che raccontano il loro sguardo sul mondo. Camminare in queste montagne è, in un certo senso, percorrere un museo a cielo aperto.

Sebbene il villaggio di Merlo sia stato fondato nel 1797, la presenza umana in queste montagne è molto più antica. Rispettare quei siti fa parte della visita a Rincón del Este: la riserva protegge non solo la natura viva, ma anche il paesaggio che i popoli originari riconobbero come proprio.`
        },
        {
          title: `La leggenda del choique (ñandú)`,
          content: `Nella tradizione locale il **choique** (lo ñandú, lo struzzo americano) è una figura ricorrente. Narra la leggenda che il choique corra in cerchio per confondere chi lo insegue e così proteggere i suoi piccoli tra il monte. A Rincón del Este, avvistare uno di questi grandi uccelli senza volo è un incontro con quell'astuzia della natura.

Le guide locali raccontano spesso queste storie sui sentieri: non sono solo aneddoti, ma un modo di insegnare il rispetto dei ritmi della fauna di montagna, specialmente nel periodo della riproduzione.`
        },
        {
          title: `Lo spirito della sierra (folclore)`,
          content: `Il folclore di San Luis parla spesso della sierra come di un luogo con un animo proprio: si dice che al tramonto, quando il sole dorà le rocce, la montagna "respiri" e si faccia più silenziosa. I abitanti consigliano di camminare piano e parlare a bassa voce, non per paura, ma per rispetto a chi vive nel monte.

Queste credenze, a metà fra paganesimo e cristianesimo, accompagnano ancora oggi le passeggiate a Rincón del Este e ricordano qualcosa di essenziale: questo è un rifugio, non un palcoscenico.`
        }
      ]
    },
    curiosities: {
      title: `Curiosità della Natura`,
      content: `Un microclima singolare
Merlo e i suoi dintorni hanno uno degli indici di radiazione solare più alti del paese e un aria molto secca. Questa combinazione favorisce una luce nitida e una vegetazione adattata all'aridità: jarilla, chañar, algarrobo e cactus.

Uccelli, tanti uccelli
La riserva è un punto fantastico per il **birdwatching** — dal piccolo cardellino al chimango, senza dimenticare tordi e soste migratorie di colibrì. Chi porta il binocolo, resta.

Farfalle e impollinatori
In primavera ed estate, le radure del monte si riempiono di farfalle e api native. La riserva protegge proprio quei corridoi di impollinazione, chiave perché il bosco continui a dare frutti.

Vicino alla Quebrada del Condorito
La regione fa parte del sistema montuoso dove nidifica il **condor andino**. A poche ore, la Quebrada del Condorito (Córdoba) è il santuario più famoso di questo uccello, ma l'orizzonte di Rincón del Este anticipa già quei cieli di montagna.`
    },
    eco: {
      title: `Conservazione della Riserva`,
      intro: `Rincón del Este è un ecosistema sensibile che sostiene flora e fauna native. Come guida educativa indipendente senza scopo di lucro, promuoviamo di visitarlo nel modo più responsabile possibile.`,
      items: [
        `Resta sul sentiero: percorri solo i sentieri segnalati e non calpestare il monte aperto`,
        `Lascia senza tracce: porta via tutti i rifiuti, inclusi quelli organici come bucce o noccioli`,
        `Non nutrire gli animali: il cibo umano ammala la fauna e ne cambia le abitudini`,
        `Rispetta la flora: non tagliare rami né rimuovere piante, semi o pietre`,
        `Niente fuoco né fumo: fare fuoco nel monte è vietato; un solo errore basta per un incendio`,
        `Sostieni il locale: preferisci guide e fornitori di Merlo, e condividi la cura del luogo`
      ]
    },
    architecture: {
      title: `Paesaggio ed Ecologia`,
      intro: `Per capire Rincón del Este non serve parlare di edifici, ma di **rilievo, vegetazione e acqua**. Questi tre fattori spiegano perché questa porzione di sierra è così ricca di vita.`,
      specs: {
        structure: { title: `Rilievo e Suoli`, content: `Le Sierras de los Comechingones sono montagne cristalline, più antiche degli Andes, formate dal piegamento della Sierra Pampeana. A Rincón del Este il terreno ondula tra colline, pietre basaltiche e piccole gole. I suoli sono poco profondi e sabbiosi, costringendo la vegetazione a essere tenace e parca con l'acqua.

Ecco perché il paesaggio appare "aperto": non c'è giungla, ma un monte basso e spinoso che lascia vedere il cielo e la pietra, una bellezza molto diversa da foresta o prateria.` },
        design: { title: `Comunità Vegetali`, content: `Il bosco nativo di Rincón del Este è una comunità di **xerofite** — piante resistenti alla siccità. Dominano algarrobo, chañar, jarilla e molle, accompagnati da cactus e gramigne dure. In primavera fioriscono specie che in poche settimane dipingono il suolo di giallo e viola.

Questa diversità vegetale è la base della catena: dà frutti, ombra e rifugio a uccelli, insetti e piccoli mammiferi. Conoscere il monte è capire chi mangia chi e come tutto si sostiene.` },
        optics: { title: `Acque e Ruscelli`, content: `L'acqua in sierra è scarsa e preziosa. Piccoli **ruscelli temporanei** scorrono dopo le piogge e alimentano sorgenti e abbeveratoi naturali. Quei fili d'acqua sono il punto più vivo della riserva: gli uccelli si radunano lì all'alba e al tramonto.

Proteggere le sorgenti significa dunque proteggere tutta la fauna. Per questo la riserva cura particolarmente le zone di corso d'acqua e chiede ai visitatori di non alterarle.` }
      },
      plaque: {
        title: `Dati Chiave`,
        items: [
          { label: `Nome`, value: `Riserva Florofaunistica di Rincón del Este` },
          { label: `Ubicazione`, value: `El Rincón, Merlo, San Luis, Argentina` },
          { label: `Provincia`, value: `San Luis` },
          { label: `Tipo`, value: `Riserva naturale / Rifugio di flora e fauna` },
          { label: `Accesso`, value: `Da Villa de Merlo (pochi km)` },
          { label: `Centro porta`, value: `Villa de Merlo` }
        ]
      }
    },
    monuments: {
      title: `Cosa fare a Rincón del Este`,
      intro: `La riserva unisce contemplazione e attività soft. Queste sono le esperienze che piacciono a chi cerca natura senza complicazioni.`,
      items: [
        { name: `Birdwatching e fauna`, description: `Rincón del Este è un punto eccellente per osservare uccelli e piccoli mammiferi. Con il binocolo e pazienza, all'alba è facile vedere chimangos, tordi, colibrì e persino vizcachas tra le rocce. È l'attività di punta della riserva.` },
        { name: `Trekking interpretativo`, description: `La riserva propone sentieri segnalati che attraversano il monte nativo e arrivano a mirador sulla gola. Lungo il percorso, cartelli e guide spiegano quale pianta è e quale animale la abita. Ideale per le famiglie e per chi vuole imparare.` },
        { name: `Passeggiate a cavallo`, description: `Intorno a Merlo è comune percorrere le sierras a cavallo. Alcuni fornitori locali includono tratti vicino alla riserva, permettendo di sentire il ritmo lento della montagna senza fatica. Chiedi in reception per operatori abilitati.` },
        { name: `Fotografia naturalistica`, description: `La luce secca e dorata di San Luis trasforma ogni roccia e cactus in un soggetto fotografico. Dai primi piani di flora ai panorami di sierra, la riserva è uno studio all'aria aperta per amatori e professionisti.` }
      ]
    },
    contrast: {
      title: `Bosco Nativo e Cielo Aperto`,
      intro: `La bellezza di Rincón del Este sta nel contrasto tra ciò che cresce e ciò che si vede. Sotto la chioma del monte, la vita si nasconde; sopra, la sierra apre un cielo immenso. Due volti di un solo rifugio.`,
      before: `Bosco Nativo`,
      after: `Cielo della Sierra`
    },
    visiting: {
      title: `Pianifica la Tua Visita`,
      intro: `La riserva si visita tutto l'anno, anche se la primavera e l'autunno sono le stagioni più comode. Una mattina o un pomeriggio bastano per percorrere i sentieri principali. Quello che segue aiuta a pianificare.`,
      hours: { title: `Orario`, content: `La riserva apre di giorno, generalmente **dalle 10:00 alle 20:00**.\nI primi momenti del mattino e il tramonto sono i migliori per vedere la fauna e per la fotografia.`, note: `L'orario può variare per stagione o eventi; chiama (+542664361087) prima della visita per confermare.` },
      price: { title: `Ingresso`, content: `L'ingresso prevede di solito un contributo simbolico di conservazione e manutenzione, pagato all'ingresso.\nGli importi sono indicati in loco; porta contanti nel caso le reti falliscano in sierra.`, note: `Chiedi se ci sono tariffe differenziate per studenti, pensionati o residenti di Merlo.` },
      duration: { title: `Durata Consigliata`, content: `Sentieri principali + mirador: circa **2–4 ore**.\nAggiungendo picnic e osservazione lenta, puoi passare una mattina o un pomeriggio intero.`, note: `Combina con Villa de Merlo e la Valle de Conlara per una fuga regionale di 1–2 giorni.` },
      tips: { title: `Consigli e Note`, items: [
        `Sole e secchezza: la radiazione a Merlo è molto alta; porta cappello, occhiali e crema`,
        `Idratati: l'aria secca disidrata in fretta; porta almeno 1 L d'acqua a persona`,
        `Calzature: usa scarpe chiuse o scarponcini bassi; il suolo ha pietra mobile e spine`,
        `Repellente: in primavera e estate aiuta contro zanzare e zecche`,
        `Non uscire dal sentiero: proteggi il monte ed evita di perderti nella gola`,
        `Arriva presto: uccelli e mammiferi sono più attivi all'alba`
      ] },
      essentials: [
        { icon: `☀️`, title: `Sole Forte`, text: `Radiazione solare molto alta a Merlo: cappello, occhiali e crema sono indispensabili.` },
        { icon: `👟`, title: `Calzature`, text: `Scarpe chiuse o scarponcini bassi: il suolo ha pietra mobile e spine.` },
        { icon: `💧`, title: `Idratazione`, text: `Aria secca e caldo: porta almeno 1 L d'acqua a persona.` },
        { icon: `🐜`, title: `Repellente`, text: `In primavera/estate, repellente per zanzare e zecche nel monte.` }
      ]
    },
    transportation: {
      title: `Come Arrivare`,
      airport: { title: `✈️ Da San Luis o Córdoba`, content: `La città di San Luis (capoluogo) dista poco più di 100 km da Merlo e ha l'aeroporto più vicino con voli regionali. Córdoba, con aeroporto internazionale, dista circa 4–5 ore in auto.`, options: [
        { name: `Auto propria / Noleggio (Consigliato)`, price: `ca. 1,5–2 h`, time: `da San Luis`, steps: [`Da San Luis città prendi la strada per Merlo (RN-148 / provinciali)`, `Raggiungi Villa de Merlo e segui i cartelli per El Rincón`, `L'ingresso della riserva è a pochi km dal centro di Merlo`] },
        { name: `Pullman + trasferimento locale`, price: `ca. 2–3 h`, time: `San Luis → Merlo`, steps: [`Prendi un pullman da San Luis a Villa de Merlo (terminal di Merlo)`, `Dalla terminale, prenota remís/taxi o un tour locale`, `L'ultimo tratto per la riserva è breve in auto`] },
        { name: `Volo a Córdoba + auto`, price: `4–5 h in auto`, time: `da Córdoba`, steps: [`Vola a Córdoba (Pajas Blancas)`, `Noleggia auto e scendi a sud verso Merlo, San Luis`, `Da Merlo, prosegui a El Rincón e alla riserva`] }
      ]},
      publicTransport: {
        title: `🚌 Pullman / Trasporto pubblico`,
        content: `Chi non guida di solito arriva prima a Villa de Merlo in pullman da San Luis (o Córdoba con coincidenza) e poi prende un remís o un tour locale per l'ultimo tratto.`,
        options: [
          {
            name: `San Luis → Merlo (pullman)`,
            description: `Linea regolare fra il capoluogo e Villa de Merlo, l'opzione più comune senza auto.`,
            steps: [`Vai alla terminal di San Luis`, `Compra biglietto per Villa de Merlo`, `All'arrivo, prendi remís o tour locale per la riserva`]
          },
          {
            name: `Merlo → Riserva (ultimo tratto)`,
            description: `La riserva dista pochi km dal centro di Merlo; l'ultimo tratto si fa in remís o tour.`,
            steps: [`Prenota remís/taxi a Merlo o un tour locale`, `Chiedi destinazione "Rincón del Este"`, `L'ingresso è segnalato da El Rincón`]
          }
        ]
      },
      city: { title: `🏘️ Da Villa de Merlo`, content: `La Riserva di Rincón del Este si trova a pochi chilometri da Villa de Merlo, nella zona di El Rincón. Il più semplice è auto, remís o un tour di un operatore locale.`, steps: [`Dal centro di Merlo segui i cartelli per El Rincón`, `Avanza di pochi km fino all'ingresso segnalato della riserva`, `Parcheggia e vai al centro di ricezione`] },
      tips: { title: `Consigli su Trasporto e Viaggio`, items: [
        `Centro base: Villa de Merlo è il punto di partenza, con alloggio, cibo e servizi`,
        `Il capoluogo San Luis dista poco più di 100 km; budget circa 2 h di guida`,
        `Fai il pieno e porta contanti a Merlo: segnale e pagamenti possono fallire in sierra`,
        `Combina con la Valle de Conlara e le Sierras Comechingones per una fuga regionale`,
        `In alta stagione (gennaio, luglio) prenota i tour in anticipo`
      ] }
    },
    gallery: { title: `Galleria Fotografica`, viewMore: `Vedi altre foto su Google Maps`, categories: [ { key: `flora`, label: `Flora` }, { key: `fauna`, label: `Fauna` }, { key: `landscape`, label: `Paesaggio` }, { key: `trails`, label: `Sentieri` } ] },
    reviews: {
      title: `Recensioni dei Visitatori`,
      subtitle: `Voci da Rincón del Este: veri testimoni di Google Maps`,
      viewMore: `Vedi altre recensioni su Google Maps`,
      nearbyTitle: `Attrazioni Vicine`,
      nearbyIntro: `Dopo aver visitato Rincón del Este, puoi aggiungere queste tappe vicine nella regione di Merlo e delle Comechingones:`,
      nearbyItems: [
        { name: `Villa de Merlo`, description: `La "piccola Svizzera" di San Luis, famosa per il microclima secco, la Strada degli Artigiani e il ritmo tranquillo. Ideale per alloggiare e passeggiare prima o dopo la riserva.` },
        { name: `Sierras de los Comechingones`, description: `Il sistema montuoso che ospita la riserva e la Quebrada del Condorito (Córdoba). Mirador, pietre dipinte e cieli di montagna per gli amanti della natura.` },
        { name: `Valle de Conlara e Lago Potrero de la Hoya`, description: `Una valle serrana vicino a Merlo con un embalse di acque calme, ideale per una passeggiata sulla sponda o un pomeriggio di riposo dopo la visita.` }
      ]
    },
    faq: { title: `Domande Frequenti`, subtitle: `Saperne di più su Rincón del Este`, items: [
      { question: `Dove si trova la Riserva di Rincón del Este e come ci arrivo?`, answer: `Si trova vicino a El Rincón, a Villa de Merlo, provincia di San Luis, nelle Sierras de los Comechingones. Il modo più semplice è raggiungere Merlo (poco più di 100 km da San Luis città, o in auto da Córdoba) e poi prendere un remís o un tour locale di pochi km fino all'ingresso.` },
      { question: `Quali sono gli orari e la tariffa di ingresso?`, answer: `La riserva apre generalmente 10:00–20:00 e prevede un contributo simbolico di conservazione all'ingresso. Gli importi sono indicati in loco; consigliamo di chiamare il +542664361087 per confermare il giorno della visita.` },
      { question: `Cosa si può fare ed è adatto alle famiglie?`, answer: `È ideale per birdwatching, trekking interpretativo, passeggiate a cavallo e fotografia naturalistica. I sentieri sono tranquilli e adatti alle famiglie; sorveglia i bambini e resta sui sentieri segnalati.` },
      { question: `Posso fare picnic o campeggio nella riserva?`, answer: `La riserva consente il riposo in aree designate; il picnic è di solito permesso in zone assegnate. Per proteggere il monte, fare fuoco è vietato e si consiglia di chiedere in reception su campeggio o uso delle strutture.` },
      { question: `Cosa devo portare per visitare Rincón del Este?`, answer: `Porta cappello, occhiali e crema solare (la radiazione a Merlo è molto alta), almeno 1 L d'acqua a persona, calzature chiuse, repellente in primavera/estate e, se ami gli uccelli, il binocolo. Arriva presto per vedere più fauna.` }
    ]},
    location: { title: `Posizione sulla Mappa`, address: `Rincón del Este, El Rincón\nMerlo, Provincia di San Luis\nArgentina`, openMaps: `Vedi su Google Maps` },
    footer: { callToAction: `Rincón del Este è uno dei rifugi di flora e fauna più amati di Merlo, un equilibrio fragile tra il monte nativo e il cielo della sierra. Visitelo con cura perché le prossime generazioni lo trovino ancora vivo.`, text: `© 2026 Rincón del Este Guide · Tutti i diritti riservati.\nQuesto sito è una guida educativa indipendente senza scopo di lucro dedicata a diffondere informazioni accurate sulla Riserva Florofaunistica di Rincón del Este. Non siamo affiliati con il governo argentino né con alcuna autorità ufficiale.`, made: `Questo è un progetto educativo indipendente non profit, creato per amanti della natura, famiglie e viaggiatori slow.`, linksTitle: `Link`, links: LINKS_BY_LOCALE.it },
    siteMap: {
      title: `Mappa della Riserva`,
      intro: `Passa il cursore (o tocca) i marcatori sulla mappa per esplorare le aree chiave di Rincón del Este.`,
      hint: `Passa per anteprima · Tocca per fissare`,
      cta: `Vedi la mappa completa`,
      zones: [
        { key: `entrada`, name: `Centro di Ricezione`, desc: `L'ingresso e il punto informazioni: qui si paga l'ingresso, si ritirano opuscoli e si coordina la visita con guardaparco o guide.` },
        { key: `iglesia`, name: `Sentieri Interpretativi`, desc: `Sentieri segnalati che attraversano il monte nativo e spiegano flora e fauna. La colonna portante della visita.` },
        { key: `monumento`, name: `Mirador sulla Gola`, desc: `Un punto elevato da cui si apre il paesaggio della sierra e si vede il corso d'acqua tra le rocce. Ideale per foto e fauna.` },
        { key: `corrales`, name: `Giardino di Uccelli e Farfalle`, desc: `Radure dove luce e fiori attirano colibrì, farfalle e uccellini. Porta il binocolo.` },
        { key: `necrópolis`, name: `Ruscelo e Bosco Nativo`, desc: `La fascia più densa di acqua e vegetazione, rifugio della fauna all'alba e al tramonto. Rispetta la zona e non entrare nel corso.` }
      ]
    },
    itinerary: {
      title: `Itinerario Consigliato`,
      intro: `Una mattina basta per l'essenza di Rincón del Este; un pomeriggio intero permete di andare più piano. Usa questa linea temporale come riferimento.`,
      steps: [
        { time: `09:30`, title: `Arrivo a Merlo`, text: `Riempi acqua, crema e un po' di contanti; conferma l'orario se non l'hai fatto. Il centro di Merlo è l'ultima tappa di rifornimento.` },
        { time: `10:00`, title: `Ingresso e Ricezione`, text: `Paga l'ingresso e ritira la mappa dei sentieri. Le guide ti orientano sulle condizioni del giorno e le zone aperte.` },
        { time: `10:30`, title: `Sentieri Interpretativi`, text: `Percorri il monte nativo leggendo le segnalazioni: algarrobo, chañar, jarilla e cactus, e chi vive di loro.` },
        { time: `12:00`, title: `Mirador sulla Gola`, text: `Sali al mirador per il sierra aperto e il filo d'acqua tra le rocce. Buon momento per le foto.` },
        { time: `13:00`, title: `Picnic e Fauna`, text: `Riposa nell'area indicata e, con pazienza, osserva uccelli e farfalle nelle radure.` },
        { time: `15:30`, title: `Ritorno a Merlo`, text: `Torni al villaggio al tramonto, quando la luce dorata tinge le sierras e chiude la giornata in riserva.` }
      ]
    },
    ctaBand: {
      title: `Pianifica il Tuo Viaggio a Rincón del Este`,
      subtitle: `Dagli orari e l'ingresso ai sentieri e al birdwatching.`,
      buttons: [`Orari e Ingresso`, `Consigli di Visita`, `Vedi sulla Mappa`]
    }
  },
};
