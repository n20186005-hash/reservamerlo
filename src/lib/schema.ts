export function generateSchema(locale: string, baseUrl: string) {
  const localUrl = `${baseUrl}/${locale}/`;

  const name =
    locale === 'es'
      ? 'Reserva Florofaunística de Rincón del Este'
      : locale === 'zh'
        ? 'Rincón del Este 动植物保护区（Reserva Florofaunística de Rincón del Este）'
        : locale === 'it'
          ? 'Riserva Florofaunistica di Rincón del Este'
          : 'Rincón del Este Flora & Fauna Reserve';

  const description =
    locale === 'es'
      ? 'Reserva Florofaunística de Rincón del Este en Merlo, San Luis, Argentina. Refugio de flora y fauna nativa en las Sierras de los Comechingones, ideal para avistamiento de aves, senderismo y ecoturismo.'
      : locale === 'zh'
        ? '阿根廷圣路易斯省梅洛的 Rincón del Este 动植物保护区：坐落于科梅琴戈内斯山脉中的原生动植物庇护地，适合观鸟、徒步与生态旅游。'
        : locale === 'it'
          ? 'Riserva Florofaunistica di Rincón del Este a Merlo, San Luis, Argentina. Rifugio di flora e fauna native nelle Sierras de los Comechingones, ideale per birdwatching, trekking ed ecoturismo.'
          : 'Rincón del Este Flora & Fauna Reserve in Merlo, San Luis, Argentina. A refuge of native flora and fauna in the Comechingones range, ideal for birdwatching, hiking and ecotourism.';

  const faqByLocale = {
    zh: [
      {
        q: 'Rincón del Este 动植物保护区在哪里？怎么去？',
        a: '保护区位于阿根廷圣路易斯省梅洛（Villa de Merlo）附近的 El Rincón，地处科梅琴戈内斯山脉（Sierras de los Comechingones）。最方便的方式是先抵达梅洛镇，再自驾或乘坐当地出租车/接驳前往保护区入口；也可从圣路易斯省府或科尔多瓦方向经公路转往梅洛。',
      },
      {
        q: 'Rincón del Este 的开放时间和门票是怎样的？',
        a: '保护区常规开放时间为 10:00–20:00。入园通常收取象征性的保护与维护费用（具体金额以现场公示或电话咨询为准）。建议出行前拨打园区电话 +542664361087 确认当日开放与活动安排。',
      },
      {
        q: '在 Rincón del Este 可以做什么？适合带小孩吗？',
        a: '园区以原生动植物观赏、观鸟、自然步道徒步、骑马与生态摄影见长，也有适合家庭的解说步道与野餐区域。步道平缓、氛围宁静，非常适合亲子与自然爱好者；请看护好儿童，并全程不走入未开放区域。',
      },
    ],
    en: [
      {
        q: 'Where is the Rincón del Este Reserve and how do I get there?',
        a: 'The reserve lies near El Rincón, by Villa de Merlo, in San Luis Province, Argentina, within the Comechingones range. The easiest way is to reach the town of Merlo first, then drive or take a local taxi/transfer to the reserve entrance; you can also approach Merlo by road from San Luis city or Córdoba.',
      },
      {
        q: 'What are the opening hours and entry fees?',
        a: 'The reserve is generally open 10:00–20:00. Entry usually involves a symbolic conservation and maintenance fee (amount shown on site or by phone). We recommend calling +542664361087 before your visit to confirm the day’s opening and activities.',
      },
      {
        q: 'What can I do at Rincón del Este, and is it family-friendly?',
        a: 'The reserve is known for native flora and fauna watching, birdwatching, nature-trail hiking, horseback riding and eco-photography, with gentle interpretive trails and picnic areas for families. The paths are calm and suitable for children — please supervise them and stay on open trails.',
      },
    ],
    es: [
      {
        q: '¿Dónde está la Reserva de Rincón del Este y cómo llego?',
        a: 'La reserva está cerca de El Rincón, junto a Villa de Merlo, en la provincia de San Luis, Argentina, dentro de las Sierras de los Comechingones. Lo más fácil es llegar primero a la localidad de Merlo y luego manejar o tomar un taxi/traslado local a la entrada; también se accede por ruta desde la capital sanluiseña o desde Córdoba.',
      },
      {
        q: '¿Cuál es el horario y el arancel de ingreso?',
        a: 'La reserva suele abrir de 10:00 a 20:00. El ingreso suele tener una contribución simbólica de conservación y mantenimiento (monto según cartelería o teléfono). Recomendamos llamar al +542664361087 antes de la visita para confirmar apertura y actividades del día.',
      },
      {
        q: '¿Qué se puede hacer en Rincón del Este y es apto para familias?',
        a: 'La reserva destaca por la observación de flora y fauna nativa, el avistamiento de aves, el senderismo, el paseo a caballo y la fotografía de naturaleza, con senderos interpretativos y áreas de picnic para familias. Los caminos son tranquilos y aptos para niños: supervisalos y no te salgas de los senderos habilitados.',
      },
    ],
    it: [
      {
        q: 'Dove si trova la Riserva di Rincón del Este e come ci arrivo?',
        a: 'La riserva si trova vicino a El Rincón, accanto a Villa de Merlo, nella provincia di San Luis, Argentina, nelle Sierras de los Comechingones. Il modo più semplice è raggiungere prima la località di Merlo e poi guidare o prendere un taxi/trasferimento locale fino all’ingresso; si arriva anche via strada da San Luis città o da Córdoba.',
      },
      {
        q: 'Quali sono gli orari e la tariffa di ingresso?',
        a: 'La riserva è generalmente aperta dalle 10:00 alle 20:00. L’ingresso prevede di solito un contributo simbolico per conservazione e manutenzione (importo indicato in loco o per telefono). Consigliamo di chiamare il +542664361087 prima della visita per confermare apertura e attività del giorno.',
      },
      {
        q: 'Cosa si può fare a Rincón del Este ed è adatto alle famiglie?',
        a: 'La riserva è nota per l’osservazione di flora e fauna native, il birdwatching, il trekking, le passeggiate a cavallo e la fotografia naturalistica, con sentieri interpretativi e aree picnic per le famiglie. I percorsi sono tranquilli e adatti ai bambini: sorvegliateli e restate sui sentieri aperti.',
      },
    ],
  } as const;

  const tripByLocale = {
    zh: {
      name: 'Rincón del Este 半日自然探秘路线',
      description: '从梅洛镇出发前往保护区，沿解说步道观赏原生动植物、观鸟并登上观景台，半日至一日即可尽兴。',
      difficulty: '轻松',
      duration: 'PT4H',
      distance: '约 8 公里（梅洛镇至保护区入口）',
    },
    en: {
      name: 'Rincón del Este Half-Day Nature Route',
      description: 'From Merlo to the reserve, follow the interpretive trails to watch native flora and fauna, enjoy birdwatching and reach the viewpoint — a half to full day trip.',
      difficulty: 'Easy',
      duration: 'PT4H',
      distance: 'Approx. 8 km (Merlo town to reserve entrance)',
    },
    es: {
      name: 'Ruta de Medio Día en Rincón del Este',
      description: 'Desde Merlo hasta la reserva, recorré los senderos interpretativos para observar flora y fauna nativa, avistar aves y llegar al mirador: un recorrido de medio a día completo.',
      difficulty: 'Fácil',
      duration: 'PT4H',
      distance: 'Aprox. 8 km (Merlo a la entrada de la reserva)',
    },
    it: {
      name: 'Itinerario di Mezza Giornata a Rincón del Este',
      description: 'Da Merlo alla riserva, sui sentieri interpretativi per osservare flora e fauna native, fare birdwatching e raggiungere il mirador: un giro di mezza a intera giornata.',
      difficulty: 'Facile',
      duration: 'PT4H',
      distance: 'Circa 8 km (Merlo all’ingresso della riserva)',
    },
  } as const;

  const trip = tripByLocale[locale as keyof typeof tripByLocale] || tripByLocale.en;
  const faq = faqByLocale[locale as keyof typeof faqByLocale] || faqByLocale.en;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['TouristAttraction', 'Place'],
        name,
        alternateName: [
          'Reserva Florofaunística de Rincón del Este',
          'Rincón del Este',
          'Rincón del Este Flora and Fauna Reserve',
          'Rincón del Este 动植物保护区',
        ],
        description,
        url: localUrl,
        image: `${baseUrl}/gallery/reservamerlo-1.jpg`,
        geo: {
          '@type': 'GeoCoordinates',
          latitude: -32.3475,
          longitude: -64.995,
        },
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Rincón del Este, El Rincón',
          addressLocality: 'Merlo',
          addressRegion: 'San Luis',
          addressCountry: 'AR',
        },
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '10:00',
          closes: '20:00',
        },
        priceRange: 'ARS',
        telephone: '+542664361087',
        isAccessibleForFree: false,
        mainEntityOfPage: localUrl,
        additionalProperty: [
          { '@type': 'PropertyValue', name: 'geoCoordinate', value: 'Merlo, San Luis, Argentina' },
          { '@type': 'PropertyValue', name: 'type', value: 'Reserva natural / Refugio de flora y fauna' },
          { '@type': 'PropertyValue', name: 'range', value: 'Sierras de los Comechingones' },
          { '@type': 'PropertyValue', name: 'gatewayTown', value: 'Villa de Merlo' },
        ],
        sameAs: [
          'https://maps.app.goo.gl/cUvY92vJJYcx1b9n7',
          'https://villademerlo.tur.ar/',
          'https://ambiente.sanluis.gov.ar/',
          'https://sib.gob.ar/',
          'https://prestadoresturisticos.sanluis.gov.ar/',
          'https://www.argentina.travel/',
        ],
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.6',
          reviewCount: '12209',
          bestRating: '5',
        },
      },
      {
        '@type': 'FAQPage',
        '@id': `${localUrl}#faq`,
        url: `${localUrl}#faq`,
        inLanguage:
          locale === 'es' ? 'es-AR' : locale === 'zh' ? 'zh-CN' : locale === 'it' ? 'it-IT' : 'en-US',
        mainEntity: faq.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.a,
          },
        })),
      },
      {
        '@type': 'TouristTrip',
        '@id': `${localUrl}#trail`,
        name: trip.name,
        description: trip.description,
        touristType:
          locale === 'zh'
            ? ['自然爱好者', '亲子家庭']
            : locale === 'es'
              ? ['amantes de la naturaleza', 'familias']
              : locale === 'it'
                ? ['amanti della natura', 'famiglie']
                : ['nature lovers', 'families'],
        itinerary: {
          '@type': 'ItemList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name:
                locale === 'zh'
                  ? '梅洛镇（门户）'
                  : locale === 'es'
                    ? 'Merlo (Base)'
                    : locale === 'it'
                      ? 'Merlo (Base)'
                      : 'Merlo (Base)',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name:
                locale === 'zh'
                  ? '接待中心与解说步道'
                  : locale === 'es'
                    ? 'Centro de Recepción y Senderos'
                    : locale === 'it'
                      ? 'Centro di Ricezione e Sentieri'
                      : 'Reception & Trails',
            },
            {
              '@type': 'ListItem',
              position: 3,
              name:
                locale === 'zh'
                  ? '观景台与原生林'
                  : locale === 'es'
                    ? 'Mirador y Bosque Nativo'
                    : locale === 'it'
                      ? 'Mirador e Bosco Nativo'
                      : 'Viewpoint & Native Woodland',
            },
          ],
        },
        provider: {
          '@type': 'Organization',
          name: 'Rincón del Este Guide',
        },
        offers: {
          '@type': 'Offer',
          availability: 'https://schema.org/InStock',
          priceCurrency: 'ARS',
        },
        additionalProperty: [
          { '@type': 'PropertyValue', name: 'difficulty', value: trip.difficulty },
          { '@type': 'PropertyValue', name: 'estimatedDuration', value: trip.duration },
          { '@type': 'PropertyValue', name: 'distance', value: trip.distance },
          {
            '@type': 'PropertyValue',
            name: 'safetyFocus',
            value:
              locale === 'zh'
                ? '强日照、补水、防虫与不走入未开放区域'
                : locale === 'es'
                  ? 'sol fuerte, hidratación, repelente y no salir de los senderos'
                  : locale === 'it'
                    ? 'sole forte, idratazione, repellente e non uscire dai sentieri'
                    : 'strong sun, hydration, insect repellent and stay on trails',
          },
        ],
      },
      {
        '@type': 'WebPage',
        '@id': localUrl,
        url: localUrl,
        name,
        description,
        isPartOf: {
          '@type': 'WebSite',
          '@id': `${localUrl}#website`,
        },
        about: {
          '@id': localUrl,
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${localUrl}#website`,
        url: localUrl,
        name,
        inLanguage:
          locale === 'es' ? 'es-AR' : locale === 'zh' ? 'zh-CN' : locale === 'it' ? 'it-IT' : 'en-US',
        isAccessibleForFree: true,
        publisher: {
          '@type': 'Organization',
          name: 'Rincón del Este Guide',
        },
      },
    ],
  };
}
