export interface Seo {
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
  siteName: string;
  keywords: string[];
}

export function getSeo(locale: string): Seo {
  const map: Record<string, Seo> = {
    es: {
      title: 'Reserva Florofaunística de Rincón del Este — Merlo, San Luis, Argentina',
      description:
        'Guía de la Reserva Florofaunística de Rincón del Este en Merlo, San Luis. Descubrí su flora y fauna, los senderos de las Sierras de los Comechingones, el avistamiento de aves y el ecoturismo.',
      ogTitle: 'Reserva Florofaunística de Rincón del Este — Merlo, San Luis, Argentina',
      ogDescription:
        'Guía de Rincón del Este: una reserva natural de flora y fauna en las Sierras de los Comechingones, cerca de Merlo, San Luis.',
      siteName: 'Guía de Rincón del Este',
      keywords: [
        'Reserva Florofaunística de Rincón del Este',
        'Rincón del Este',
        'Merlo',
        'San Luis tourism',
        'Argentina tourism',
        'Sierras de los Comechingones',
        'ecoturismo',
        'avistamiento de aves',
        'reserva natural',
        '圣路易斯旅游',
        '梅洛',
        ' naturaleza Argentina',
      ],
    },
    en: {
      title: 'Rincón del Este Flora & Fauna Reserve — Merlo, San Luis, Argentina',
      description:
        'A guide to the Rincón del Este Flora & Fauna Reserve in Merlo, San Luis. Explore its native flora and fauna, the Comechingones mountain trails, birdwatching and ecotourism.',
      ogTitle: 'Rincón del Este Flora & Fauna Reserve — Merlo, San Luis, Argentina',
      ogDescription:
        'A guide to Rincón del Este: a native flora and fauna reserve in the Comechingones range near Merlo, San Luis.',
      siteName: 'Rincón del Este Guide',
      keywords: [
        'Rincón del Este Flora and Fauna Reserve',
        'Rincón del Este',
        'Merlo',
        'San Luis tourism',
        'Argentina tourism',
        'Comechingones mountains',
        'ecotourism',
        'birdwatching',
        'nature reserve',
        '圣路易斯旅游',
        'Merlo Argentina',
        'Argentina nature',
      ],
    },
    zh: {
      title: 'Rincón del Este 动植物保护区（Reserva Florofaunística de Rincón del Este）— 阿根廷圣路易斯省梅洛',
      description:
        'Rincón del Este 动植物保护区旅行指南，位于阿根廷圣路易斯省梅洛。探索原生动植物、科梅琴戈内斯山脉步道、观鸟与生态旅游。',
      ogTitle: 'Rincón del Este 动植物保护区 — 阿根廷圣路易斯省梅洛',
      ogDescription: 'Rincón del Este 旅行指南——梅洛近郊科梅琴戈内斯山脉中的原生动植物保护区。',
      siteName: 'Rincón del Este 保护区指南',
      keywords: [
        'Rincón del Este',
        'Rincón del Este 动植物保护区',
        '梅洛',
        '圣路易斯旅游',
        '阿根廷旅游',
        '科梅琴戈内斯山脉',
        '生态旅游',
        '观鸟',
        '自然保护区',
        'Merlo Argentina',
        'Argentina nature',
      ],
    },
    it: {
      title: 'Riserva Florofaunistica di Rincón del Este — Merlo, San Luis, Argentina',
      description:
        'Guida alla Riserva Florofaunistica di Rincón del Este a Merlo, San Luis. Scopri la flora e la fauna native, i sentieri delle Sierras de los Comechingones, il birdwatching e l’ecoturismo.',
      ogTitle: 'Riserva Florofaunistica di Rincón del Este — Merlo, San Luis, Argentina',
      ogDescription:
        'Guida a Rincón del Este: una riserva di flora e fauna native nelle Sierras de los Comechingones, vicino a Merlo, San Luis.',
      siteName: 'Guida di Rincón del Este',
      keywords: [
        'Riserva Florofaunistica di Rincón del Este',
        'Rincón del Este',
        'Merlo',
        'San Luis tourism',
        'Argentina tourism',
        'Sierras de los Comechingones',
        'ecoturismo',
        'birdwatching',
        'riserva naturale',
        'turismo San Luis',
        'natura Argentina',
      ],
    },
  };
  return map[locale] || map.es;
}
