import { Concept } from '../../modules/arquitectura-software/interface/concept.interface';

/**
 * Conceptos clave del tema "Arquitectura de Software",
 * sintetizados a partir del contenido visto en clase (Partes I, II y III).
 */
export const ARQUITECTURA_SOFTWARE_CONFIG: Concept[] = [
  // --- Parte I: Fundamentos --
  {
    id: 1,
    title: '¿Qué es la Arquitectura de Software?',
    summary: 'Conjunto de decisiones estructurales que definen cómo está organizado un sistema y cómo colaboran sus componentes para cumplir objetivos funcionales y no funcionales. No es un lujo: es un habilitador del éxito del software.',
    category: 'Parte I',
  },
  {
    id: 2,
    title: '¿Por qué es importante?',
    summary: 'Las decisiones arquitectónicas impactan el desempeño, la velocidad de desarrollo, la calidad del producto y la viabilidad del negocio. Una mala arquitectura no siempre se nota al inicio, pero siempre se paga al final.',
    category: 'Parte I',
  },
  {
    id: 3,
    title: 'Objetivos de la Arquitectura',
    summary: 'Alinear el sistema con las necesidades del negocio, permitir que el software evolucione, asegurar atributos de calidad y servir como guía técnica para el equipo de desarrollo.',
    category: 'Parte I',
  },
  {
    id: 4,
    title: 'Propósitos de la Arquitectura',
    summary: 'Reduce riesgos desde el inicio, acelera el desarrollo (patrones reutilizables), mejora la calidad técnica y funcional, crea un lenguaje común en el equipo, e impacta directamente en los costos del proyecto.',
    category: 'Parte I',
  },
  {
    id: 5,
    title: 'Atributos de Calidad',
    summary: 'Características que describen cómo se comporta el sistema (rendimiento, escalabilidad, disponibilidad, seguridad, mantenibilidad, usabilidad, interoperabilidad), no qué hace. Un sistema puede funcionar y aun así ser un mal sistema si falla en estos atributos.',
    category: 'Parte I',
  },
  {
    id: 6,
    title: 'Rendimiento (Performance)',
    summary: 'Capacidad del sistema para responder rápido y usar bien los recursos: tiempo de respuesta, uso de CPU/memoria, peticiones por segundo. Ejemplo: Google apunta a menos de 1 segundo de respuesta; si tarda más, los usuarios abandonan.',
    category: 'Parte I',
  },
  {
    id: 7,
    title: 'Escalabilidad Vertical vs. Horizontal',
    summary: 'Vertical (scale up): aumentar la capacidad del mismo servidor (más RAM/CPU); fácil de implementar pero con límite físico, costoso y punto único de falla. Horizontal (scale out): agregar más servidores con balanceador de carga; mayor complejidad pero alta escalabilidad y disponibilidad. Netflix usa escalamiento horizontal con miles de servidores.',
    category: 'Parte I',
  },
  {
    id: 8,
    title: 'Disponibilidad',
    summary: 'Tiempo en que el sistema está operativo y accesible, medido en porcentaje (99%, 99.9%, 99.99%). Un 99.9% equivale a unas 8 horas de caída al año. Crítico en sistemas bancarios: si cae, no hay transferencias, pagos ni retiros.',
    category: 'Parte I',
  },
  {
    id: 9,
    title: 'Seguridad, Usabilidad e Interoperabilidad',
    summary: 'Seguridad: proteger información y prevenir ataques (autenticación, cifrado, HTTPS). Usabilidad: qué tan fácil es aprender y usar el sistema. Interoperabilidad: capacidad de integrarse con otros sistemas (APIs, pasarelas de pago como PayPal o Stripe).',
    category: 'Parte I',
  },

  // --- Parte II: Arquitectura y Negocio ---
  {
    id: 10,
    title: 'Arquitectura y Negocio',
    summary: 'La arquitectura no existe por sí sola: existe para habilitar los objetivos del negocio. Cuando la arquitectura domina al negocio en vez de servirlo, aparecen restricciones innecesarias, costos excesivos y productos que no responden al mercado.',
    category: 'Parte II',
  },
  {
    id: 11,
    title: 'Business Drivers',
    summary: 'Factores que impulsan las decisiones de arquitectura: crecimiento (usuarios, regiones), velocidad de entrega (time-to-market), reducción de costos, experiencia del usuario y escalabilidad del negocio.',
    category: 'Parte II',
  },
  {
    id: 12,
    title: 'Arquitectura y Estrategia de Producto',
    summary: 'La arquitectura define qué tan rápido puede evolucionar un producto; la estrategia define hacia dónde debe evolucionar. Una buena estrategia sin arquitectura adecuada es solo una idea; una buena arquitectura sin estrategia clara es solo un gasto.',
    category: 'Parte II',
  },
  {
    id: 13,
    title: 'Impacto de una Arquitectura Mal Alineada',
    summary: 'Lentitud para lanzar funcionalidades, costos elevados de mantenimiento, pérdida de clientes, dificultad para escalar y dependencia excesiva de ciertos equipos o tecnologías. Ejemplo: empresas que adoptaron microservicios sin necesitarlo terminaron con más complejidad y fallos.',
    category: 'Parte II',
  },
  {
    id: 14,
    title: 'Modelos de Negocio del Software',
    summary: 'El modelo de negocio (producto tradicional, SaaS, PaaS) condiciona qué exige la arquitectura. Producto tradicional: estable, predecible, fácil de instalar. SaaS: alta disponibilidad, seguridad y escalabilidad en la nube. PaaS: confiable, escalado automático, APIs claras (ej. Firebase, AWS).',
    category: 'Parte II',
  },
  {
    id: 15,
    title: 'Otros Modelos de Negocio',
    summary: 'Freemium (Spotify, Dropbox), publicidad/ad-supported (YouTube), open source con soporte (WordPress), marketplace (Uber, Airbnb), suscripción por contenido (Netflix) y pay-per-use (AWS): cada uno impone requisitos arquitectónicos distintos.',
    category: 'Parte II',
  },

  // --- Parte III: El Arquitecto de Software ---
  {
    id: 16,
    title: 'El Arquitecto de Software',
    summary: 'Profesional responsable del diseño de sistemas, que conecta las necesidades del negocio, la tecnología y el equipo de desarrollo, garantizando la calidad y viabilidad técnica del sistema.',
    category: 'Parte III',
  },
  {
    id: 17,
    title: 'Habilidades del Arquitecto',
    summary: 'Combina habilidades estratégicas (comunicación, visión sistémica, negociación, liderazgo técnico) con toma de decisiones basada en requerimientos funcionales, atributos de calidad, restricciones, costos, tiempos y riesgos.',
    category: 'Parte III',
  },
  {
    id: 18,
    title: 'Proceso de Decisión Arquitectónica',
    summary: 'Seis pasos: 1) identificar el problema, 2) generar alternativas técnicas, 3) evaluar sus consecuencias, 4) documentar (contexto, alternativas, decisión, justificación), 5) validar con prototipos y 6) ajustar con retroalimentación.',
    category: 'Parte III',
  },
  {
    id: 19,
    title: 'Monolito vs. Microservicios',
    summary: 'Monolito: más simple y económico al inicio, pero con escalabilidad limitada y riesgo de acoplamiento. Microservicios: alta escalabilidad y mejor aislamiento de fallos, a cambio de mayor complejidad y costo operativo.',
    category: 'Parte III',
  },
];