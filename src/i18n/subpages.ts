import type { Locale } from './config';

export type RichSection = { heading: string; body: string };

export type Subpage = {
  title: string;
  description: string;
  crumb: string;
  h1: string;
  lede: string;
  sections: RichSection[];
  related: SubpageKey[];
};

export type SubpageKey = 'entradas' | 'horarios' | 'comoLlegar' | 'fotos' | 'merloGuide';

export const slugFor: Record<SubpageKey, string> = {
  entradas: 'entradas',
  horarios: 'horarios',
  comoLlegar: 'como-llegar',
  fotos: 'fotos',
  merloGuide: 'que-hacer-en-merlo-san-luis',
};

// Localized short labels used for cross-linking cards
export const subpageLabel: Record<Locale, Record<SubpageKey, string>> = {
  es: {
    entradas: 'Entradas y Precios',
    horarios: 'Horarios',
    comoLlegar: 'Cómo llegar',
    fotos: 'Fotos',
    merloGuide: 'Qué hacer en Merlo',
  },
  en: {
    entradas: 'Tickets & Prices',
    horarios: 'Opening Hours',
    comoLlegar: 'How to get there',
    fotos: 'Photos',
    merloGuide: 'Things to do in Merlo',
  },
  zh: {
    entradas: '门票与价格',
    horarios: '开放时间',
    comoLlegar: '怎么去',
    fotos: '照片',
    merloGuide: '梅洛玩什么',
  },
  it: {
    entradas: 'Ingresso e Prezzi',
    horarios: 'Orari',
    comoLlegar: 'Come arrivare',
    fotos: 'Foto',
    merloGuide: 'Cosa fare a Merlo',
  },
};

// ─── Entradas (Tickets & Prices) ───────────────────────────────
const entradas: Record<Locale, Subpage> = {
  es: {
    title: 'Entradas y Precios de la Reserva Rincón del Este, Merlo',
    description:
      'Entrada y precios de la Reserva Florofaunística de Rincón del Este en Merlo, San Luis: arancel, dónde pagar, efectivo, niños, jubilados, residentes y cómo confirmar el valor actual.',
    crumb: 'Entradas',
    h1: 'Entradas y Precios de Rincón del Este',
    lede:
      'El ingreso a la **Reserva Florofaunística de Rincón del Este** suele tener una contribución simbólica destinada a la conservación y el mantenimiento del monte nativo. No es una entrada de pago comercial: es un aporte que ayuda a cuidar los senderos, la flora y la fauna.',
    sections: [
      {
        heading: '¿Cuánto cuesta la entrada?',
        body: 'El valor del ingreso es una contribución simbólica de conservación. **Precio actualizado: consultar directamente antes de la visita** al teléfono de la reserva **+542664361087**. No vendemos entradas en línea ni por este sitio: somos una guía independiente, no la administración oficial.',
      },
      {
        heading: 'Dónde pagar y cómo se abona',
        body: 'Por lo general se abona en el acceso, en el puesto de guardaparque o recepción de la reserva. Llevá **efectivo** (pesos argentinos): no espere pagos con tarjeta ni transferencias en el lugar. El comprobante suele entregarse en el ingreso.',
      },
      {
        heading: 'Niños, jubilados y residentes',
        body: 'En muchos espacios protegidos de la zona existen descuentos o exenciones para **menores, jubilados y residentes de Merlo**. Confirmá la situación actual de Rincón del Este por teléfono antes de tu visita para evitar sorpresas.',
      },
      {
        heading: 'Horario de acceso y confirmación',
        body: 'El horario habitual de apertura es de **10:00 a 20:00**. Como los días y actividades pueden cambiar por clima o temporada, recomendamos llamar al **+542664361087** para confirmar apertura, arancel y disponibilidad el día que pensás ir.',
      },
      {
        heading: 'Por qué se paga un arancel',
        body: 'El aporte colabora con la señalización de los senderos, el control de acceso, la protección de las especies y la limpieza de las áreas de uso público. Tu visita responsable sostiene la conservación del bosque nativo de las Sierras de los Comechingones.',
      },
    ],
    related: ['horarios', 'comoLlegar', 'fotos'],
  },
  en: {
    title: 'Tickets & Prices — Rincón del Este Reserve, Merlo',
    description:
      'Entry fee and prices for the Rincón del Este Flora & Fauna Reserve in Merlo, San Luis: fee, where to pay, cash, children, seniors, residents and how to confirm the current rate.',
    crumb: 'Tickets',
    h1: 'Tickets & Prices for Rincón del Este',
    lede: 'Entry to the **Rincón del Este Flora & Fauna Reserve** usually involves a symbolic conservation contribution used to maintain the native woodland. It is not a commercial ticket — it is a contribution that helps care for the trails, flora and fauna.',
    sections: [
      {
        heading: 'How much does entry cost?',
        body: 'Entry is a symbolic conservation contribution. **Current price: please confirm directly before your visit** on the reserve phone **+542664361087**. We do not sell tickets online or through this site: we are an independent guide, not the official administration.',
      },
      {
        heading: 'Where to pay and how',
        body: 'Payment is generally made at the entrance, at the ranger post or reception. Bring **cash** (Argentine pesos): do not expect card or transfer payments on site. A receipt is usually given at the gate.',
      },
      {
        heading: 'Children, seniors and residents',
        body: 'Many protected areas nearby offer discounts or exemptions for **children, seniors and Merlo residents**. Confirm the current policy for Rincón del Este by phone before you go to avoid surprises.',
      },
      {
        heading: 'Access hours and confirmation',
        body: 'Usual opening hours are **10:00 to 20:00**. Because days and activities can change with weather or season, we recommend calling **+542664361087** to confirm opening, fee and availability on the day you plan to visit.',
      },
      {
        heading: 'Why there is a fee',
        body: 'The contribution supports trail signage, access control, species protection and cleaning of public-use areas. Your responsible visit sustains the conservation of the native forest of the Comechingones range.',
      },
    ],
    related: ['horarios', 'comoLlegar', 'fotos'],
  },
  zh: {
    title: 'Rincón del Este 门票与价格（梅洛）',
    description:
      '阿根廷圣路易斯省梅洛 Rincón del Este 动植物保护区的入园费用与价格：收费标准、在哪里付款、现金、儿童、老人与居民优惠，以及如何确认最新价格。',
    crumb: '门票',
    h1: 'Rincón del Este 门票与价格',
    lede: '进入 **Rincón del Este 动植物保护区** 通常需支付一笔用于保护原生林的象征性保育费用。它不是商业门票，而是一笔用于维护步道、动植物与设施的捐赠。',
    sections: [
      {
        heading: '门票多少钱？',
        body: '入园为象征性保育捐赠。**最新价格：请于出行前直接致电保护区电话 +542664361087 确认**。本网站不在线售票，也不是官方管理机构，仅为独立旅行指南。',
      },
      {
        heading: '在哪里付款、怎么付',
        body: '一般在入口、护林员岗亭或接待处付款。请携带 **现金（阿根廷比索）**：现场不支持刷卡或转账。入口处通常会提供收据。',
      },
      {
        heading: '儿童、老人与居民',
        body: '梅洛周边许多保护区对 **儿童、老人与本地居民** 提供优惠或减免。出行前请电话确认 Rincón del Este 的现行政策，以免有误。',
      },
      {
        heading: '开放时间与确认',
        body: '常规开放时间为 **10:00 至 20:00**。因天气或季节，开放安排可能调整，建议拨打 **+542664361087** 在计划前往当天确认开放、收费与可入园情况。',
      },
      {
        heading: '为什么要收费',
        body: '这笔费用用于步道标识、入口管理、物种保护以及公共区域清洁。你的负责任游览有助于保护科梅琴戈内斯山脉的原生森林。',
      },
    ],
    related: ['horarios', 'comoLlegar', 'fotos'],
  },
  it: {
    title: 'Ingresso e Prezzi — Riserva Rincón del Este, Merlo',
    description:
      'Tariffa e prezzi della Riserva Florofaunistica di Rincón del Este a Merlo, San Luis: contributo, dove pagare, contanti, bambini, anziani, residenti e come confermare la tariffa attuale.',
    crumb: 'Ingresso',
    h1: 'Ingresso e Prezzi di Rincón del Este',
    lede: 'L’ingresso alla **Riserva Florofaunistica di Rincón del Este** prevede di solito un contributo simbolico di conservazione per la manutenzione del bosco nativo. Non è un biglietto commerciale: è un contributo che aiuta a curare sentieri, flora e fauna.',
    sections: [
      {
        heading: 'Quanto costa l’ingresso?',
        body: 'L’ingresso è un contributo simbolico di conservazione. **Tariffa aggiornata: confermare direttamente prima della visita** al telefono della riserva **+542664361087**. Non vendiamo biglietti online né tramite questo sito: siamo una guida indipendente, non l’amministrazione ufficiale.',
      },
      {
        heading: 'Dove pagare e come',
        body: 'Di solito si paga all’ingresso, presso il posto di guardaparco o la reception. Porta **contanti** (pesos argentini): non aspettarti pagamenti con carta o bonifico sul posto. La ricevuta viene di solito rilasciata all’ingresso.',
      },
      {
        heading: 'Bambini, anziani e residenti',
        body: 'Molte aree protette vicine offrono sconti o esenzioni per **minori, anziani e residenti di Merlo**. Conferma la politica attuale di Rincón del Este per telefono prima di andare per evitare sorprese.',
      },
      {
        heading: 'Orari di accesso e conferma',
        body: 'L’orario di apertura abituale è **10:00–20:00**. Poiché i giorni e le attività possono cambiare per clima o stagione, consigliamo di chiamare il **+542664361087** per confermare apertura, tariffa e disponibilità il giorno previsto.',
      },
      {
        heading: 'Perché si paga un contributo',
        body: 'Il contributo sostiene la segnaletica dei sentieri, il controllo degli accessi, la protezione delle specie e la pulizia delle aree pubbliche. La tua visita responsabile sostiene la conservazione del bosco nativo delle Sierras de los Comechingones.',
      },
    ],
    related: ['horarios', 'comoLlegar', 'fotos'],
  },
};

// ─── Horarios (Opening Hours) ──────────────────────────────────
const horarios: Record<Locale, Subpage> = {
  es: {
    title: 'Horarios de la Reserva Rincón del Este, Merlo | Apertura y Mejor Época',
    description:
      'Horarios de apertura de la Reserva Florofaunística de Rincón del Este en Merlo, San Luis, mejor época para visitar, duración recomendada y consejos según la estación.',
    crumb: 'Horarios',
    h1: 'Horarios de Rincón del Este',
    lede:
      'Planificar bien el horario es clave para disfrutar el monte nativo sin apuros. Acá reunimos el **horario de apertura**, la **mejor época** y la **duración recomendada** de la visita.',
    sections: [
      {
        heading: 'Horario de apertura',
        body: 'La reserva suele abrir de **10:00 a 20:00**. Confirmá el horario del día en el teléfono **+542664361087**, ya que puede variar por clima o temporada.',
      },
      {
        heading: 'Mejor época para visitar',
        body: '**Otoño e invierno** (sin extremo de calor) y las mañanas de **primavera** para avistamiento de aves son excelentes momentos. En verano, preferí la tarde temprano para escapar del sol fuerte de la sierra.',
      },
      {
        heading: 'Duración recomendada',
        body: 'Una visita completa —senderos interpretativos, mirador y área de picnic— lleva entre **2 y 4 horas**. Si sumás el traslado desde Merlo, calculá medio día.',
      },
      {
        heading: 'Consejos por estación',
        body: 'Llevá **agua, sombrero y protector solar** todo el año: la altura y el sol de la sierra son intensos. En verano sumá repelente; en invierno, una campera para la tarde. Respetá los senderos habilitados.',
      },
    ],
    related: ['entradas', 'comoLlegar', 'fotos'],
  },
  en: {
    title: 'Opening Hours — Rincón del Este Reserve, Merlo',
    description:
      'Opening times for the Rincón del Este Flora & Fauna Reserve in Merlo, San Luis: best season to visit, recommended duration and seasonal tips.',
    crumb: 'Hours',
    h1: 'Opening Hours of Rincón del Este',
    lede: 'Planning your timing well is key to enjoying the native woodland without rushing. Here we gather the **opening hours**, the **best season** and the **recommended duration**.',
    sections: [
      {
        heading: 'Opening hours',
        body: 'The reserve generally opens **10:00 to 20:00**. Confirm the day’s hours on **+542664361087**, as they may vary with weather or season.',
      },
      {
        heading: 'Best season to visit',
        body: '**Autumn and winter** (without extreme heat) and **spring** mornings for birdwatching are excellent. In summer, prefer early afternoon to escape the strong sierra sun.',
      },
      {
        heading: 'Recommended duration',
        body: 'A full visit —interpretive trails, viewpoint and picnic area— takes **2 to 4 hours**. Adding the transfer from Merlo, plan for half a day.',
      },
      {
        heading: 'Seasonal tips',
        body: 'Bring **water, a hat and sunscreen** all year: the altitude and sierra sun are intense. In summer add repellent; in winter a jacket for the afternoon. Stay on the open trails.',
      },
    ],
    related: ['entradas', 'comoLlegar', 'fotos'],
  },
  zh: {
    title: 'Rincón del Este 开放时间（梅洛）',
    description:
      '阿根廷圣路易斯省梅洛 Rincón del Este 动植物保护区开放时间：最佳游览季节、建议游玩时长与按季节的实用建议。',
    crumb: '开放时间',
    h1: 'Rincón del Este 开放时间',
    lede: '合理安排时间，才能从容享受原生林。这里汇总了 **开放时间**、**最佳季节** 与 **建议游玩时长**。',
    sections: [
      {
        heading: '开放时间',
        body: '保护区常规开放时间为 **10:00 至 20:00**。请拨打 **+542664361087** 确认当日时间，可能因天气或季节调整。',
      },
      {
        heading: '最佳游览季节',
        body: '**秋季与冬季**（无酷热）以及 **春季** 清晨适合观鸟，都非常理想。夏季建议选择午后早些时候，避开强烈的山地阳光。',
      },
      {
        heading: '建议游玩时长',
        body: '完整走完解说步道、观景台与野餐区约需 **2 至 4 小时**。加上从梅洛往返交通，建议预留半天。',
      },
      {
        heading: '按季节的建议',
        body: '全年都请携带 **水、帽子与防晒**——海拔与山地日照强烈。夏季加防虫；冬季午后加一件外套。请留在开放步道上。',
      },
    ],
    related: ['entradas', 'comoLlegar', 'fotos'],
  },
  it: {
    title: 'Orari — Riserva Rincón del Este, Merlo',
    description:
      'Orari di apertura della Riserva Florofaunistica di Rincón del Este a Merlo, San Luis: stagione migliore, durata consigliata e consigli per stagione.',
    crumb: 'Orari',
    h1: 'Orari di Rincón del Este',
    lede: 'Pianificare bene i tempi è la chiave per godersi il bosco nativo senza fretta. Qui riuniamo **orari di apertura**, **stagione migliore** e **durata consigliata**.',
    sections: [
      {
        heading: 'Orari di apertura',
        body: 'La riserva apre di solito **10:00–20:00**. Conferma l’orario del giorno al **+542664361087**, poiché può variare per clima o stagione.',
      },
      {
        heading: 'Stagione migliore',
        body: '**Autunno e inverno** (senza caldo estremo) e le mattinate di **primavera** per il birdwatching sono ottimi. In estate preferisci il primo pomeriggio per evitare il sole forte della sierra.',
      },
      {
        heading: 'Durata consigliata',
        body: 'Una visita completa —sentieri interpretativi, mirador e area picnic— richiede **2–4 ore**. Aggiungendo il trasferimento da Merlo, conta mezza giornata.',
      },
      {
        heading: 'Consigli per stagione',
        body: 'Porta **acqua, cappello e crema solare** tutto l’anno: altitudine e sole della sierra sono intensi. In estate aggiungi repellente; in inverno una giacca per il pomeriggio. Rimani sui sentieri aperti.',
      },
    ],
    related: ['entradas', 'comoLlegar', 'fotos'],
  },
};

// ─── Cómo llegar (How to get there) ────────────────────────────
const comoLlegar: Record<Locale, Subpage> = {
  es: {
    title: 'Cómo llegar a la Reserva Rincón del Este, Merlo | Mapa y Estacionamiento',
    description:
      'Cómo llegar a la Reserva Florofaunística de Rincón del Este en Merlo, San Luis: desde el pueblo, en auto, estacionamiento, mapa y opciones de transporte.',
    crumb: 'Cómo llegar',
    h1: 'Cómo llegar a Rincón del Este',
    lede:
      'La reserva está en **El Rincón**, a pocos minutos de **Villa de Merlo**, en la provincia de San Luis. Lo más fácil es llegar primero a Merlo y luego tomar un vehículo hasta la entrada.',
    sections: [
      {
        heading: 'Desde Villa de Merlo',
        body: 'Desde el centro de Merlo, tomá la ruta hacia El Rincón y seguí la señalización hasta el acceso de la reserva. El tramo es corto y se hace en auto o taxi en **10–20 minutos** según el punto de partida.',
      },
      {
        heading: 'En auto y estacionamiento',
        body: 'Hay lugar para estacionar cerca de la entrada. Las rutas de la zona son de ripio en tramos; en días de lluvia conviene ir con precaución. No dejes basura y respetá la capacidad del predio.',
      },
      {
        heading: 'Desde San Luis capital o Córdoba',
        body: 'Podés acercarte a Merlo por ruta desde la capital sanluiseña o desde Córdoba. Merlo es la base habitual para visitar Rincón del Este y otras reservas de las Sierras de los Comechingones.',
      },
      {
        heading: 'Mapa y coordenadas',
        body: 'Usá el mapa integrado para ubicar la entrada. Coordenadas aproximadas: **-32.3475, -64.995**. Para navegación exacta, abrí el enlace de Google Maps desde esta página.',
      },
    ],
    related: ['entradas', 'horarios', 'fotos'],
  },
  en: {
    title: 'How to get to Rincón del Este Reserve, Merlo | Map & Parking',
    description:
      'How to get to the Rincón del Este Flora & Fauna Reserve in Merlo, San Luis: from town, by car, parking, map and transport options.',
    crumb: 'Getting there',
    h1: 'How to get to Rincón del Este',
    lede: 'The reserve is in **El Rincón**, a few minutes from **Villa de Merlo**, San Luis Province. The easiest way is to reach Merlo first and then take a vehicle to the entrance.',
    sections: [
      {
        heading: 'From Villa de Merlo',
        body: 'From central Merlo, take the road toward El Rincón and follow the signs to the reserve entrance. The stretch is short and takes **10–20 minutes** by car or taxi depending on the starting point.',
      },
      {
        heading: 'By car and parking',
        body: 'There is parking near the entrance. Some sections of local roads are gravel; after rain, drive with caution. Do not leave litter and respect the site capacity.',
      },
      {
        heading: 'From San Luis city or Córdoba',
        body: 'You can approach Merlo by road from San Luis city or from Córdoba. Merlo is the usual base to visit Rincón del Este and other reserves of the Comechingones range.',
      },
      {
        heading: 'Map and coordinates',
        body: 'Use the embedded map to locate the entrance. Approximate coordinates: **-32.3475, -64.995**. For exact navigation, open the Google Maps link from this page.',
      },
    ],
    related: ['entradas', 'horarios', 'fotos'],
  },
  zh: {
    title: '怎么去 Rincón del Este 保护区（梅洛）| 地图与停车',
    description:
      '阿根廷圣路易斯省梅洛 Rincón del Este 动植物保护区交通指南：从梅洛镇出发、自驾、停车、地图与交通方式。',
    crumb: '怎么去',
    h1: '怎么去 Rincón del Este',
    lede: '保护区位于 **El Rincón**，距 **梅洛镇（Villa de Merlo）** 仅几分钟车程，属圣路易斯省。最方便的方式是先到梅洛，再乘车前往入口。',
    sections: [
      {
        heading: '从梅洛镇出发',
        body: '从梅洛镇中心沿前往 El Rincón 的道路行驶，按指示牌抵达保护区入口。路程很短，自驾或出租车约 **10–20 分钟**，视起点而定。',
      },
      {
        heading: '自驾与停车',
        body: '入口附近可停车。部分路段为碎石路；雨天请谨慎驾驶。请勿留下垃圾，并遵守场地容量限制。',
      },
      {
        heading: '从圣路易斯省府或科尔多瓦',
        body: '可经公路从圣路易斯省府或科尔多瓦前往梅洛。梅洛是游览 Rincón del Este 及科梅琴戈内斯山脉其他保护区的常用基地。',
      },
      {
        heading: '地图与坐标',
        body: '使用本页内嵌地图定位入口。约略坐标：**-32.3475, -64.995**。如需精确导航，请打开本页的 Google 地图链接。',
      },
    ],
    related: ['entradas', 'horarios', 'fotos'],
  },
  it: {
    title: 'Come arrivare alla Riserva Rincón del Este, Merlo | Mappa e Parcheggio',
    description:
      'Come arrivare alla Riserva Florofaunistica di Rincón del Este a Merlo, San Luis: da paese, in auto, parcheggio, mappa e opzioni di trasporto.',
    crumb: 'Come arrivare',
    h1: 'Come arrivare a Rincón del Este',
    lede: 'La riserva si trova a **El Rincón**, a pochi minuti da **Villa de Merlo**, nella provincia di San Luis. Il modo più semplice è raggiungere prima Merlo e poi prendere un veicolo fino all’ingresso.',
    sections: [
      {
        heading: 'Da Villa de Merlo',
        body: 'Dal centro di Merlo, prendi la strada verso El Rincón e segui la segnaletica fino all’ingresso della riserva. Il tratto è breve e richiede **10–20 minuti** in auto o taxi a seconda della partenza.',
      },
      {
        heading: 'In auto e parcheggio',
        body: 'C’è parcheggio vicino all’ingresso. Alcuni tratti delle strade locali sono sterrati; dopo la pioggia guida con cautela. Non lasciare rifiuti e rispetta la capienza del sito.',
      },
      {
        heading: 'Da San Luis città o Córdoba',
        body: 'Puoi avvicinarti a Merlo per strada da San Luis città o da Córdoba. Merlo è la base abituale per visitare Rincón del Este e altre riserve delle Sierras de los Comechingones.',
      },
      {
        heading: 'Mappa e coordinate',
        body: 'Usa la mappa integrata per individuare l’ingresso. Coordinate approssimative: **-32.3475, -64.995**. Per la navigazione esatta, apri il link Google Maps da questa pagina.',
      },
    ],
    related: ['entradas', 'horarios', 'fotos'],
  },
};

// ─── Fotos (Photos) ───────────────────────────────────────────
const fotos: Record<Locale, Subpage> = {
  es: {
    title: 'Fotos de la Reserva Rincón del Este, Merlo | Paisajes, Senderos y Fauna',
    description:
      'Fotos de la Reserva Florofaunística de Rincón del Este en Merlo, San Luis: paisajes, senderos, flora, fauna, miradores y el arroyo. Galería por categorías.',
    crumb: 'Fotos',
    h1: 'Fotos de Rincón del Este',
    lede:
      'Recorré la reserva a través de nuestra galería: **paisajes**, **senderos**, **flora**, **fauna**, **miradores**, el **arroyo** y la **entrada**. Filtrá por categoría para inspirarte antes de la visita.',
    sections: [
      {
        heading: 'Galería por categorías',
        body: 'Usá los botones de filtro para ver paisajes, senderos, flora, fauna, miradores, el arroyo y la entrada. Todas las imágenes son de Rincón del Este, cerca de Merlo, San Luis.',
      },
      {
        heading: 'Para tu visita',
        body: 'Estas fotos muestran cómo es el monte nativo en distintas luces y estaciones. Si querés más detalles prácticos, visitá las páginas de **Horarios**, **Entradas** y **Cómo llegar**.',
      },
    ],
    related: ['horarios', 'entradas', 'comoLlegar'],
  },
  en: {
    title: 'Photos of Rincón del Este Reserve, Merlo | Landscapes, Trails & Fauna',
    description:
      'Photos of the Rincón del Este Flora & Fauna Reserve in Merlo, San Luis: landscapes, trails, flora, fauna, viewpoints and the stream. Category gallery.',
    crumb: 'Photos',
    h1: 'Photos of Rincón del Este',
    lede: 'Explore the reserve through our gallery: **landscapes**, **trails**, **flora**, **fauna**, **viewpoints**, the **stream** and the **entrance**. Filter by category to get inspired before your visit.',
    sections: [
      {
        heading: 'Gallery by category',
        body: 'Use the filter buttons to see landscapes, trails, flora, fauna, viewpoints, the stream and the entrance. All images are from Rincón del Este, near Merlo, San Luis.',
      },
      {
        heading: 'For your visit',
        body: 'These photos show the native woodland in different lights and seasons. For practical details, visit the **Opening Hours**, **Tickets** and **How to get there** pages.',
      },
    ],
    related: ['horarios', 'entradas', 'comoLlegar'],
  },
  zh: {
    title: 'Rincón del Este 照片（梅洛）| 风景、步道与动物',
    description:
      '阿根廷圣路易斯省梅洛 Rincón del Este 动植物保护区照片：风景、步道、植物、动物、观景台与溪流，按分类浏览。',
    crumb: '照片',
    h1: 'Rincón del Este 照片',
    lede: '通过我们的图库游览保护区：**风景**、**步道**、**植物**、**动物**、**观景台**、**溪流** 与 **入口**。按分类筛选，为出行获取灵感。',
    sections: [
      {
        heading: '按分类浏览',
        body: '使用筛选按钮查看风景、步道、植物、动物、观景台、溪流与入口。所有照片均拍摄于梅洛附近的 Rincón del Este。',
      },
      {
        heading: '为你的行程',
        body: '这些照片展示了原生林在不同光线与季节下的样貌。如需实用信息，请查看 **开放时间**、**门票** 与 **怎么去** 页面。',
      },
    ],
    related: ['horarios', 'entradas', 'comoLlegar'],
  },
  it: {
    title: 'Foto della Riserva Rincón del Este, Merlo | Paesaggi, Sentieri e Fauna',
    description:
      'Foto della Riserva Florofaunistica di Rincón del Este a Merlo, San Luis: paesaggi, sentieri, flora, fauna, mirador e il ruscello. Galleria per categoria.',
    crumb: 'Foto',
    h1: 'Foto di Rincón del Este',
    lede: 'Esplora la riserva attraverso la nostra galleria: **paesaggi**, **sentieri**, **flora**, **fauna**, **mirador**, il **ruscello** e l’**ingresso**. Filtra per categoria per ispirarti prima della visita.',
    sections: [
      {
        heading: 'Galleria per categoria',
        body: 'Usa i pulsanti di filtro per vedere paesaggi, sentieri, flora, fauna, mirador, il ruscello e l’ingresso. Tutte le immagini sono di Rincón del Este, vicino a Merlo, San Luis.',
      },
      {
        heading: 'Per la tua visita',
        body: 'Queste foto mostrano il bosco nativo in luci e stagioni diverse. Per dettagli pratici, visita le pagine **Orari**, **Ingresso** e **Come arrivare**.',
      },
    ],
    related: ['horarios', 'entradas', 'comoLlegar'],
  },
};

// ─── Qué hacer en Merlo (Merlo destination guide) ──────────────
export type MerloPlace = { name: string; desc: Record<Locale, string> };
export type MerloStep = { time: string; title: Record<Locale, string>; text: Record<Locale, string> };

export const merloGuide: Record<Locale, Subpage> = {
  es: {
    title: 'Qué hacer en Merlo, San Luis: 15 Lugares y Paseos Imprescindibles',
    description:
      'Qué hacer en Merlo, San Luis: 15 lugares y paseos imprescindibles, desde la Reserva Rincón del Este hasta miradores, arroyos, sierras y rutas panorámicas. Itinerarios de 1 y 2 días.',
    crumb: 'Merlo',
    h1: 'Qué hacer en Merlo, San Luis',
    lede:
      'Merlo, en las Sierras de los Comechingones, es la base ideal para naturaleza y turismo lento. Reunimos **15 lugares y paseos** para armar tu agenda, más itinerarios de **1 y 2 días**.',
    sections: [
      {
        heading: 'Por qué visitar Merlo',
        body: 'A 900 m de altura, Merlo combina monte nativo, clima seco y miradores serranos. Es puerta de la **Reserva Rincón del Este** y de varias reservas y pueblos de las Comechingones.',
      },
      {
        heading: '15 lugares y paseos',
        body: 'Desde la reserva hasta miradores, arroyos, sierras, piedras coloradas y rutas panorámicas: abajo encontrás la lista con una línea de contexto para cada uno.',
      },
      {
        heading: 'Itinerarios sugeridos',
        body: 'Si tenés poco tiempo, hacé el recorrido de 1 día centrado en Rincón del Este y los miradores. Si podés quedarte, el de 2 días suma sierras, arroyos y pueblos cercanos.',
      },
    ],
    related: ['entradas', 'horarios', 'fotos'],
  },
  en: {
    title: 'Things to do in Merlo, San Luis: 15 Unmissable Places & Walks',
    description:
      'Things to do in Merlo, San Luis: 15 unmissable places and walks, from the Rincón del Este Reserve to viewpoints, streams, sierras and scenic routes. 1- and 2-day itineraries.',
    crumb: 'Merlo',
    h1: 'Things to do in Merlo, San Luis',
    lede:
      'Merlo, in the Comechingones range, is the ideal base for nature and slow travel. We gathered **15 places and walks** to build your agenda, plus **1- and 2-day** itineraries.',
    sections: [
      {
        heading: 'Why visit Merlo',
        body: 'At 900 m elevation, Merlo blends native woodland, dry climate and mountain viewpoints. It is the gateway to the **Rincón del Este Reserve** and several reserves and villages of the Comechingones.',
      },
      {
        heading: '15 places and walks',
        body: 'From the reserve to viewpoints, streams, sierras, red rocks and scenic routes: below is the list with a line of context for each.',
      },
      {
        heading: 'Suggested itineraries',
        body: 'Short on time? Do the 1-day route focused on Rincón del Este and the viewpoints. Staying longer? The 2-day route adds sierras, streams and nearby villages.',
      },
    ],
    related: ['entradas', 'horarios', 'fotos'],
  },
  zh: {
    title: '梅洛玩什么（圣路易斯）：15 个必去景点与散步路线',
    description:
      '圣路易斯梅洛玩什么：15 个必去景点与散步路线，从 Rincón del Este 保护区到观景台、溪流、山脉与全景公路，含 1 日与 2 日行程。',
    crumb: '梅洛',
    h1: '梅洛（圣路易斯）玩什么',
    lede: '梅洛位于科梅琴戈内斯山脉，是亲近自然与慢旅行的理想基地。我们整理了 **15 个景点与散步路线** 帮你安排行程，并附 **1 日与 2 日** 路线。',
    sections: [
      {
        heading: '为什么来梅洛',
        body: '梅洛海拔约 900 米，原生林、干燥气候与山地观景台兼具，是前往 **Rincón del Este 保护区** 及科梅琴戈内斯山脉多处保护区的门户。',
      },
      {
        heading: '15 个景点与散步路线',
        body: '从保护区到观景台、溪流、山脉、红色岩石与全景公路，下方为各景点的一句话介绍。',
      },
      {
        heading: '建议行程',
        body: '时间紧可选以 Rincón del Este 与观景台为主的 1 日路线；若可停留，2 日路线增加山脉、溪流与周边村镇。',
      },
    ],
    related: ['entradas', 'horarios', 'fotos'],
  },
  it: {
    title: 'Cosa fare a Merlo, San Luis: 15 Luoghi e Passeggiate Imperdibili',
    description:
      'Cosa fare a Merlo, San Luis: 15 luoghi e passeggiate imperdibili, dalla Riserva Rincón del Este a mirador, ruscelli, sierras e rotte panoramiche. Itinerari di 1 e 2 giorni.',
    crumb: 'Merlo',
    h1: 'Cosa fare a Merlo, San Luis',
    lede:
      'Merlo, nelle Sierras de los Comechingones, è la base ideale per la natura e il turismo lento. Abbiamo raccolto **15 luoghi e passeggiate** per programmare, più itinerari di **1 e 2 giorni**.',
    sections: [
      {
        heading: 'Perché visitare Merlo',
        body: 'A 900 m di quota, Merlo unisce bosco nativo, clima secco e mirador serrani. È la porta della **Riserva Rincón del Este** e di varie riserve e paesi delle Comechingones.',
      },
      {
        heading: '15 luoghi e passeggiate',
        body: 'Dalla riserva a mirador, ruscelli, sierras, rocce rosse e rotte panoramiche: qui sotto l’elenco con una riga di contesto per ciascuno.',
      },
      {
        heading: 'Itinerari consigliati',
        body: 'Poco tempo? Fai il giro di 1 giorno centrato su Rincón del Este e i mirador. Più giorni? Il giro di 2 giorni aggiunge sierras, ruscelli e paesi vicini.',
      },
    ],
    related: ['entradas', 'horarios', 'fotos'],
  },
};

export const subpages: Record<SubpageKey, Record<Locale, Subpage>> = {
  entradas,
  horarios,
  comoLlegar,
  fotos,
  merloGuide,
};

// Merlo guide structured data (place names are locale-invariant proper nouns)
export const merloPlaces: MerloPlace[] = [
  { name: 'Reserva Florofaunística de Rincón del Este', desc: { es: 'El protagonista: monte nativo, avistamiento de aves y senderos interpretativos.', en: 'The star: native woodland, birdwatching and interpretive trails.', zh: '主角：原生林、观鸟与解说步道。', it: 'Il protagonista: bosco nativo, birdwatching e sentieri interpretativi.' } },
  { name: 'Villa de Merlo', desc: { es: 'El pueblo base, con artesanías, gastronomía y paseos tranquilos.', en: 'The base town, with crafts, food and gentle strolls.', zh: '基地小镇，有手工艺、美食与悠闲散步。', it: 'Il paese base, con artigianato, cucina e passeggiate tranquille.' } },
  { name: 'Mirador de la Cruz', desc: { es: 'Vista panorámica clásica de Merlo y las sierras.', en: 'Classic panoramic view of Merlo and the sierras.', zh: '俯瞰梅洛与群山的经典观景点。', it: 'Vista panoramica classica di Merlo e delle sierras.' } },
  { name: 'Cerro de Oro', desc: { es: 'Cumbre con miradores y rutas serranas.', en: 'Peak with viewpoints and mountain routes.', zh: '带观景台与山地路线的山峰。', it: 'Cima con mirador e rotte di montagna.' } },
  { name: 'Sierras de los Comechingones', desc: { es: 'Cordón montañoso para senderismo y fotografía.', en: 'Mountain range for hiking and photography.', zh: '适合徒步与摄影的山脉。', it: 'Catena montuosa per trekking e fotografia.' } },
  { name: 'Piedras Blancas', desc: { es: 'Formaciones rocosas y miradores colorados.', en: 'Rock formations and red-hued viewpoints.', zh: '岩石地貌与红色调观景台。', it: 'Formazioni rocciose e mirador rossastri.' } },
  { name: 'Arroyo El Tigre', desc: { es: 'Arroyo serrano ideal para una tarde fresca.', en: 'Mountain stream ideal for a cool afternoon.', zh: '适合清凉午后的山间溪流。', it: 'Ruscello di montagna ideale per un pomeriggio fresco.' } },
  { name: 'Balneario El Trigal', desc: { es: 'Balcón al río y la naturaleza.', en: 'Balcony over the river and nature.', zh: ' overlooking 河流与自然的观景阳台。', it: 'Balcone sul fiume e sulla natura.' } },
  { name: 'Reserva Natural Parque Lago', desc: { es: 'Espejo de agua y caminatas familiares.', en: 'Water mirror and family walks.', zh: '水面与亲子散步。', it: 'Specchio d’acqua e passeggiate in famiglia.' } },
  { name: 'Cascada de los Venados', desc: { es: 'Caída de agua en entorno serrano.', en: 'Waterfall in a mountain setting.', zh: '山地环境中的瀑布。', it: 'Cascata in ambiente di montagna.' } },
  { name: 'Capilla Vieja', desc: { es: 'Rincón histórico y fotografiable.', en: 'Historic, photogenic corner.', zh: '具历史感、适合拍照的角落。', it: 'Angolo storico e fotogenico.' } },
  { name: 'Feria Artesanal Merlo', desc: { es: 'Artesanías locales y productos regionales.', en: 'Local crafts and regional products.', zh: '本地手工艺与区域特产。', it: 'Artigianato locale e prodotti regionali.' } },
  { name: 'Ruta Panorámica San Luis–Merlo', desc: { es: 'Tramo de ruta con vistas de las sierras.', en: 'Road stretch with sierra views.', zh: '沿途可见山脉的公路段。', it: 'Tratto di strada con viste sulle sierras.' } },
  { name: 'Reserva de la Bioesfera Sierras de San Luis', desc: { es: 'Área protegida más amplia de la región.', en: 'Broader protected area of the region.', zh: '该地区更大的保护区。', it: 'Area protetta più ampia della regione.' } },
  { name: 'Pueblo de San Javier', desc: { es: 'Pueblo serrano cercano con encanto.', en: 'Nearby mountain village with charm.', zh: '附近有魅力的山间小镇。', it: 'Vicino paese di montagna con fascino.' } },
];

export const merloItineraries: MerloStep[][] = [
  [
    { time: '09:00', title: { es: 'Reserva Rincón del Este', en: 'Rincón del Este Reserve', zh: 'Rincón del Este 保护区', it: 'Riserva Rincón del Este' }, text: { es: 'Senderos interpretativos y mirador.', en: 'Interpretive trails and viewpoint.', zh: '解说步道与观景台。', it: 'Sentieri interpretativi e mirador.' } },
    { time: '13:00', title: { es: 'Almuerzo en Villa de Merlo', en: 'Lunch in Villa de Merlo', zh: '梅洛镇午餐', it: 'Pranzo a Villa de Merlo' }, text: { es: 'Gastronomía y artesanías.', en: 'Food and crafts.', zh: '美食与手工艺。', it: 'Cucina e artigianato.' } },
    { time: '16:00', title: { es: 'Mirador de la Cruz', en: 'Mirador de la Cruz', zh: '十字观景台', it: 'Mirador de la Cruz' }, text: { es: 'Vista panorámica al atardecer.', en: 'Sunset panoramic view.', zh: '日落全景。', it: 'Vista panoramica al tramonto.' } },
  ],
  [
    { time: 'Día 1', title: { es: 'Rincón del Este + Merlo', en: 'Rincón del Este + Merlo', zh: 'Rincón del Este + 梅洛', it: 'Rincón del Este + Merlo' }, text: { es: 'Reserva por la mañana y pueblo por la tarde.', en: 'Reserve in the morning, town in the afternoon.', zh: '上午保护区，下午小镇。', it: 'Riserva al mattino, paese al pomeriggio.' } },
    { time: 'Día 2', title: { es: 'Sierras y arroyos', en: 'Sierras and streams', zh: '山脉与溪流', it: 'Sierras e ruscelli' }, text: { es: 'Cerro de Oro, Piedras Blancas y Arroyo El Tigre.', en: 'Cerro de Oro, Piedras Blancas and Arroyo El Tigre.', zh: 'Cerro de Oro、Piedras Blancas 与 Arroyo El Tigre。', it: 'Cerro de Oro, Piedras Blancas e Arroyo El Tigre.' } },
  ],
];
