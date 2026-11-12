export type Lang = 'es' | 'en';

export type Service = {
  id: string;
  n: string;
  es: [string, string, string, string[]];
  en: [string, string, string, string[]];
};

export type Area = [group: number, es: string, en: string];
export type Faq = [question: string, answer: string];
export type LegalSection = [title: string, body: string];

export type Dictionary = {
  lang: Lang;
  other: 'EN' | 'ES';
  otherName: string;
  nav: [string, string, string, string];
  eyebrow: string;
  title: string;
  intro: string;
  discover: string;
  visit: string;
  scroll: string;
  line: string;
  workTag: string;
  workTitle: string;
  workIntro: string;
  details: string;
  close: string;
  projectTag: string;
  projectTitle: string;
  projectText: string;
  projectLink: string;
  projectNoteAvailable: string;
  projectNoteDevelopment: string;
  guideTitle: string;
  guideText: string;
  guideDisclaimer: string;
  guides: string;
  langs: string;
  companyTag: string;
  companyTitle: string;
  companyText: string;
  companyText2: string;
  companyPoint1: string;
  companyPoint2: string;
  companyPoint3: string;
  contactTag: string;
  contactTitle: string;
  contactText: string;
  contactCTA: string;
  contactNote: string;
  footer: string;
  legal: string;
  back: string;
  ehviTag: string;
  ehviTitle: string;
  ehviIntro: string;
  statusAvailable: string;
  statusDevelopment: string;
  tech: string;
  directory: string;
  directoryText: string;
  search: string;
  placeholder: string;
  all: string;
  results: string;
  empty: string;
  reset: string;
  aboutArea: string;
  areaText: string;
  areaAdult: string;
  areaLimits: string;
  areaPending: string;
  spaceTag: string;
  spaceTitle: string;
  spaceText: string;
  spaceButton: string;
  spacePending: string;
  spaceReady: string;
  openSpace: string;
  steps: [string, string][];
  notice: string;
  faqTitle: string;
  faqs: Faq[];
  legalTitle: string;
  legalSections: LegalSection[];
};

export const dictionaries: Record<Lang, Dictionary> = {
  es: {
    lang: 'es',
    other: 'EN',
    otherName: 'Read in English',
    nav: ['Áreas de trabajo', 'EHVI', 'La empresa', 'Contacto'],
    eyebrow: 'VIBRA IA BIOTECH · ESTADOS UNIDOS',
    title: 'Tecnología para la vida<br>y los <em>negocios.</em>',
    intro:
      'Inteligencia artificial, software y desarrollo comercial. Conectamos proyectos de salud digital, nutrición y comercio con las herramientas que necesitan para avanzar.',
    discover: 'Explora nuestro trabajo',
    visit: 'Conoce EHVI',
    scroll: 'Descubre VIBRA',
    line: 'Una empresa. Distintas formas de aplicar la tecnología.',
    workTag: '01 / QUÉ HACEMOS',
    workTitle: 'De la idea<br>a su aplicación.',
    workIntro:
      'Nuestra actividad reúne desarrollo tecnológico, servicios digitales y operaciones comerciales. Estas son nuestras líneas de trabajo.',
    details: 'Ver enfoque',
    close: 'Cerrar',
    projectTag: '02 / PROYECTO DESTACADO',
    projectTitle: 'EHVI. Un espacio para<br>explorar la salud.',
    projectText:
      'El Espacio Hospitalario Virtual Interactivo es un proyecto de VIBRA IA BIOTECH desarrollado con la tecnología de COGNITUS BIOTECH. Su versión actual se centra en guías de IA para acceder a información general sobre salud.',
    projectLink: 'Explorar el espacio EHVI',
    projectNoteAvailable: 'Disponible con código · Información general con IA',
    projectNoteDevelopment: 'Proyecto en desarrollo · Información general con IA',
    guideTitle: 'Un punto de entrada.<br>48 áreas para explorar.',
    guideText:
      'Recepción, selección de un área y una experiencia compartida en español e inglés.',
    guideDisclaimer:
      'EHVI no es un hospital ni una consulta médica. No ofrece diagnóstico, tratamiento o valoración de urgencia, ni cuenta con supervisión clínica.',
    guides: 'Áreas de información',
    langs: 'Español e inglés',
    companyTag: '03 / LA EMPRESA',
    companyTitle: 'VIBRA IA BIOTECH LLC',
    companyText:
      'Una empresa estadounidense con actividad en tecnología, servicios digitales y comercio. Trabajamos en proyectos propios y en colaboración con especialistas para desarrollar software, contenidos y oportunidades de mercado.',
    companyText2:
      'En salud digital, VIBRA impulsa EHVI y el desarrollo de avatares personalizados con tecnología de COGNITUS BIOTECH. Nuestra actividad comercial incluye la venta de EMMERY Zero en Estados Unidos a través de Amazon.',
    companyPoint1: 'Tecnología y software',
    companyPoint2: 'Servicios y mercados',
    companyPoint3: 'Comercio electrónico',
    contactTag: '04 / CONVERSEMOS',
    contactTitle: '¿En qué estás<br>trabajando?',
    contactText:
      'Cuéntanos el objetivo de tu proyecto, el mercado al que te diriges y qué necesitas desarrollar.',
    contactCTA: 'Escríbenos',
    contactNote: 'Proyectos · Colaboración tecnológica · Consultas comerciales',
    footer: 'Tecnología, servicios digitales y comercio.',
    legal: 'Información y privacidad',
    back: 'Volver a VIBRA',
    ehviTag: 'UN PROYECTO DE VIBRA IA BIOTECH',
    ehviTitle: 'Un espacio digital.<br>Una forma de <em>explorar.</em>',
    ehviIntro:
      'EHVI · Espacio Hospitalario Virtual Interactivo. Conoce las 48 áreas de su catálogo y accede con código a información general sobre salud con guías de IA.',
    statusAvailable: 'Disponible con código',
    statusDevelopment: 'En desarrollo',
    tech: 'Con la tecnología de',
    directory: 'Explora las áreas',
    directoryText:
      'Busca un área o filtra por temática. El acceso a la conversación con avatares está disponible con código.',
    search: 'Buscar un área',
    placeholder: 'Por ejemplo: nutrición, pediatría…',
    all: 'Todas las áreas',
    results: 'áreas',
    empty: 'No hay áreas con ese término. Prueba otro nombre o elige otra categoría.',
    reset: 'Limpiar búsqueda',
    aboutArea: 'Sobre esta guía',
    areaText:
      'La guía de IA de {area} está planteada para explorar conceptos generales de esta área y preparar preguntas para un profesional sanitario. No evalúa casos personales ni ofrece recomendaciones clínicas.',
    areaAdult: 'La guía de pediatría está dirigida a cuidadores adultos.',
    areaLimits:
      'Es información general con IA. No es un profesional sanitario y no hay supervisión clínica.',
    areaPending: 'Conversación disponible con código',
    spaceTag: 'EL ESPACIO INTERACTIVO',
    spaceTitle: 'El próximo paso:<br>conversar y explorar.',
    spaceText:
      'La experiencia empieza en recepción y permite elegir una guía temática. El acceso a EHVI está disponible con código.',
    spaceButton: 'Solicitar acceso',
    spacePending: 'El servicio de conversación aún no está conectado.',
    spaceReady: 'Acceso al espacio interactivo',
    openSpace: 'Entrar en EHVI',
    steps: [
      ['Recepción', 'Un punto de entrada para conocer el espacio y elegir un tema.'],
      ['Guías por áreas', 'Un catálogo común con 48 áreas y una interfaz compartida.'],
      ['Dos idiomas', 'La experiencia está diseñada en español e inglés.'],
    ],
    notice:
      'Todo es IA. No hay médicos atendiendo, supervisando ni respaldando las respuestas. EHVI no sustituye a un profesional sanitario. No debe utilizarse para atender emergencias.',
    faqTitle: 'Antes de entrar',
    faqs: [
      [
        '¿EHVI es un hospital real?',
        'No. EHVI es el nombre de un proyecto de información general sobre salud con inteligencia artificial. No es una clínica, un hospital ni una consulta médica.',
      ],
      [
        '¿Puedo hablar ya con un avatar?',
        'Sí. El acceso a EHVI está disponible con código. El servicio se abre en una nueva pestaña y requiere el código facilitado por VIBRA.',
      ],
      [
        '¿Puedo solicitar citas o un diagnóstico?',
        'No. Esta versión no incluye profesionales, citas, historias clínicas, pagos, diagnóstico, tratamiento ni valoración de urgencia.',
      ],
      [
        '¿Qué relación tienen VIBRA y Cognitus?',
        'EHVI es un proyecto de VIBRA IA BIOTECH que utiliza tecnología de COGNITUS BIOTECH.',
      ],
    ],
    legalTitle: 'Información del sitio y privacidad',
    legalSections: [
      [
        'Responsable del sitio',
        'Este sitio corporativo presenta la actividad de VIBRA IA BIOTECH LLC, empresa estadounidense. Para consultas sobre el sitio, sus contenidos o privacidad utiliza el contacto indicado al pie.',
      ],
      [
        'Uso de la web',
        'La web ofrece información sobre las líneas de trabajo y proyectos de la empresa. La descripción de una línea de actividad no implica que todos sus desarrollos estén disponibles como productos terminados.',
      ],
      [
        'EHVI',
        'El directorio de EHVI presenta el proyecto. El acceso al servicio interactivo requiere un código y se abre en un dominio externo. No proporciona servicios sanitarios, asesoramiento médico ni diagnóstico. No introduzcas información clínica o datos de pacientes en comunicaciones comerciales.',
      ],
      [
        'Datos y herramientas',
        'Esta versión no incorpora analítica publicitaria, cookies de seguimiento ni formularios que envíen datos a un servidor. La búsqueda de áreas se realiza en el navegador. El proveedor de alojamiento puede tratar datos técnicos de conexión según su configuración y sus condiciones.',
      ],
      [
        'Contacto por correo',
        'Los enlaces de contacto abren tu aplicación de correo. Los datos que decidas enviar se utilizarán para atender tu consulta. Puedes utilizar el mismo contacto para solicitar información o plantear una petición sobre tus datos.',
      ],
      [
        'Servicio interactivo de EHVI',
        'El acceso a EHVI requiere un código y se abre en un dominio externo. Las condiciones y la información sobre el tratamiento de datos aplicables al servicio se publican en ese espacio. La conexión de audio y avatares depende de la configuración del servicio.',
      ],
    ],
  },
  en: {
    lang: 'en',
    other: 'ES',
    otherName: 'Leer en español',
    nav: ['Our work', 'EHVI', 'The company', 'Contact'],
    eyebrow: 'VIBRA IA BIOTECH · UNITED STATES',
    title: 'Technology for life<br>and <em>business.</em>',
    intro:
      'Artificial intelligence, software and business development. We connect digital health, nutrition and commerce projects with the tools they need to move forward.',
    discover: 'Explore our work',
    visit: 'Discover EHVI',
    scroll: 'Discover VIBRA',
    line: 'One company. Different ways to put technology to work.',
    workTag: '01 / WHAT WE DO',
    workTitle: 'From an idea<br>to its application.',
    workIntro:
      'Our activity brings together technology development, digital services and commercial operations. Explore our areas of work.',
    details: 'Explore this area',
    close: 'Close',
    projectTag: '02 / FEATURED PROJECT',
    projectTitle: 'EHVI. A space to<br>explore health.',
    projectText:
      'EHVI, the Interactive Virtual Hospital Space, is a VIBRA IA BIOTECH project developed with technology from COGNITUS BIOTECH. Its current scope focuses on AI guides for exploring general health information.',
    projectLink: 'Explore the EHVI space',
    projectNoteAvailable: 'Available with access code · General information with AI',
    projectNoteDevelopment: 'In development · General information with AI',
    guideTitle: 'One starting point.<br>48 areas to explore.',
    guideText:
      'Reception, topic selection and a shared experience in Spanish and English.',
    guideDisclaimer:
      'EHVI is not a hospital or a medical consultation. It does not diagnose, treat or assess urgency, and has no clinical oversight.',
    guides: 'Information areas',
    langs: 'Spanish and English',
    companyTag: '03 / THE COMPANY',
    companyTitle: 'VIBRA IA BIOTECH LLC',
    companyText:
      'A US company working in technology, digital services and commerce. We work on our own projects and collaborate with specialists to develop software, content and market opportunities.',
    companyText2:
      'In digital health, VIBRA advances EHVI and personalized avatar development using COGNITUS BIOTECH technology. Our commercial activity includes selling EMMERY Zero in the United States through Amazon.',
    companyPoint1: 'Technology and software',
    companyPoint2: 'Services and markets',
    companyPoint3: 'E-commerce',
    contactTag: '04 / LET’S TALK',
    contactTitle: 'What are you<br>working on?',
    contactText:
      'Tell us about your project, your target market and what you need to develop.',
    contactCTA: 'Get in touch',
    contactNote: 'Projects · Technology partnerships · Business enquiries',
    footer: 'Technology, digital services and commerce.',
    legal: 'Site information & privacy',
    back: 'Back to VIBRA',
    ehviTag: 'A VIBRA IA BIOTECH PROJECT',
    ehviTitle: 'A digital space.<br>A way to <em>explore.</em>',
    ehviIntro:
      'EHVI · Interactive Virtual Hospital Space. Discover its 48 information areas and access general health information with AI guides using an access code.',
    statusAvailable: 'Available with access code',
    statusDevelopment: 'In development',
    tech: 'Powered by',
    directory: 'Explore the areas',
    directoryText:
      'Search for an area or filter by topic. Access to avatar conversations is available with an access code.',
    search: 'Search for an area',
    placeholder: 'For example: nutrition, pediatrics…',
    all: 'All areas',
    results: 'areas',
    empty: 'No areas match this search. Try a different name or category.',
    reset: 'Clear search',
    aboutArea: 'About this guide',
    areaText:
      'The {area} AI guide is intended to help explore general concepts in this field and prepare questions for a healthcare professional. It does not assess personal cases or provide clinical recommendations.',
    areaAdult: 'The pediatrics guide is intended for adult caregivers.',
    areaLimits:
      'General information with AI. Not a healthcare professional. No clinical oversight.',
    areaPending: 'Conversation available with access code',
    spaceTag: 'THE INTERACTIVE SPACE',
    spaceTitle: 'The next step:<br>talk and explore.',
    spaceText:
      'The experience starts at reception and lets visitors choose a topic guide. Access to EHVI is available with an access code.',
    spaceButton: 'Request access',
    spacePending: 'The conversation service is not connected yet.',
    spaceReady: 'Access the interactive space',
    openSpace: 'Enter EHVI',
    steps: [
      ['Reception', 'A starting point to discover the space and choose a topic.'],
      ['Topic guides', 'A shared catalogue of 48 areas within one interface.'],
      ['Two languages', 'The experience is designed in Spanish and English.'],
    ],
    notice:
      'Everything is AI. No doctors provide, supervise or clinically endorse the responses. EHVI does not replace a healthcare professional. It must not be used for emergencies.',
    faqTitle: 'Before you enter',
    faqs: [
      [
        'Is EHVI a real hospital?',
        'No. EHVI is the name of an AI project for general health information. It is not a clinic, a hospital or a medical consultation.',
      ],
      [
        'Can I talk to an avatar now?',
        'Yes. Access to EHVI is available with an access code. The service opens in a new tab and requires the code provided by VIBRA.',
      ],
      [
        'Can I book an appointment or request a diagnosis?',
        'No. This version does not include healthcare professionals, appointments, medical records, payments, diagnosis, treatment or urgency assessment.',
      ],
      [
        'How are VIBRA and Cognitus involved?',
        'EHVI is a VIBRA IA BIOTECH project using technology from COGNITUS BIOTECH.',
      ],
    ],
    legalTitle: 'Site information and privacy',
    legalSections: [
      [
        'Site operator',
        'This corporate website presents the activity of VIBRA IA BIOTECH LLC, a US company. For enquiries about this site, its content or privacy, use the contact shown below.',
      ],
      [
        'Using this website',
        'This website describes the company’s areas of work and projects. Describing an area of activity does not mean that all its developments are available as completed products.',
      ],
      [
        'EHVI',
        'The EHVI directory presents the project. Access to the interactive service requires an access code and opens on an external domain. It does not provide healthcare, medical advice or diagnosis. Do not include clinical information or patient data in business enquiries.',
      ],
      [
        'Data and tools',
        'This version has no advertising analytics, tracking cookies or forms that send data to a server. Area searches run in your browser. The hosting provider may process technical connection data according to its configuration and terms.',
      ],
      [
        'Email contact',
        'Contact links open your email application. Information you choose to send will be used to address your enquiry. You may use the same contact to request information or raise a question about your data.',
      ],
      [
        'EHVI interactive service',
        'Access to EHVI requires an access code and opens on an external domain. The terms and data processing information applicable to the service are published in that space. Audio and avatar connections depend on the service configuration.',
      ],
    ],
  },
};

export const services: Service[] = [
  {
    id: 'ai',
    n: '01',
    es: [
      'Inteligencia artificial y avatares',
      'Software e interfaces conversacionales',
      'Trabajamos en soluciones de software con inteligencia artificial y en experiencias de interacción mediante avatares. El desarrollo de avatares personalizados a partir de una base de conocimiento individual forma parte de nuestra colaboración tecnológica con Cognitus.',
      [
        'Inteligencia artificial y procesamiento del lenguaje',
        'Avatares y bases de conocimiento',
        'Interfaces de información y conversación',
      ],
    ],
    en: [
      'Artificial intelligence & avatars',
      'Software and conversational interfaces',
      'We work on AI software and avatar-based interaction. Developing personalized avatars based on an individual knowledge base forms part of our technology collaboration with Cognitus.',
      [
        'Artificial intelligence and language processing',
        'Avatars and knowledge bases',
        'Information and conversation interfaces',
      ],
    ],
  },
  {
    id: 'health',
    n: '02',
    es: [
      'Nutrición, deporte y salud digital',
      'Herramientas para proyectos especializados',
      'Desarrollo de software para nutrición y entrenamiento, con enfoques que incluyen IA, procesamiento del lenguaje, análisis de datos y modelos metabólicos. EHVI amplía esta línea hacia el acceso a información general de salud.',
      [
        'Software de nutrición y entrenamiento',
        'Análisis de datos y modelos',
        'EHVI: información general sobre salud',
      ],
    ],
    en: [
      'Nutrition, sport & digital health',
      'Tools for specialist projects',
      'Software development for nutrition and training, with approaches including AI, language processing, data analysis and metabolic models. EHVI extends this area into access to general health information.',
      [
        'Nutrition and training software',
        'Data analysis and models',
        'EHVI: general health information',
      ],
    ],
  },
  {
    id: 'blockchain',
    n: '03',
    es: [
      'Blockchain y soluciones de datos',
      'Transacciones e información digital',
      'Una línea de desarrollo orientada a aplicar blockchain a transacciones y gestión de datos, con especial atención al comercio electrónico. El alcance técnico se define según las necesidades de cada proyecto.',
      [
        'Aplicaciones de blockchain',
        'Gestión de datos y transacciones',
        'Soluciones para comercio electrónico',
      ],
    ],
    en: [
      'Blockchain & data solutions',
      'Digital transactions and information',
      'A development area focused on applying blockchain to transactions and data management, with particular attention to e-commerce. Technical scope is defined around each project’s requirements.',
      [
        'Blockchain applications',
        'Data and transaction management',
        'E-commerce solutions',
      ],
    ],
  },
  {
    id: 'marketing',
    n: '04',
    es: [
      'Marketing digital',
      'Contenidos, posicionamiento y campañas',
      'Servicios de marketing digital para marcas y productos, especialmente en nutrición, salud y deporte: posicionamiento, contenidos y campañas. También impulsamos un proyecto de automatización de publicaciones en distintas redes mediante IA y controles de calidad.',
      [
        'Posicionamiento y presencia digital',
        'Contenidos y campañas',
        'Proyecto de automatización de publicaciones',
      ],
    ],
    en: [
      'Digital marketing',
      'Content, search presence and campaigns',
      'Digital marketing services for brands and products, particularly in nutrition, health and sport: search positioning, content and campaigns. We are also pursuing a project to automate publishing across social networks using AI and quality controls.',
      [
        'Search visibility and online presence',
        'Content and campaigns',
        'Social publishing automation project',
      ],
    ],
  },
  {
    id: 'markets',
    n: '05',
    es: [
      'Desarrollo y representación internacional',
      'Conocimiento técnico y comercial',
      'Asesoramiento y representación técnica y comercial en mercados internacionales. Esta actividad se complementa con investigación de oportunidades y análisis de nuevos mercados en nutrición, deporte y salud.',
      [
        'Asesoramiento técnico y comercial',
        'Representación internacional',
        'Investigación y análisis de mercados',
      ],
    ],
    en: [
      'International business development',
      'Technical and commercial expertise',
      'Technical and commercial advisory and representation in international markets. This activity includes researching opportunities and analysing new markets in nutrition, sport and health.',
      [
        'Technical and commercial advisory',
        'International representation',
        'Market research and analysis',
      ],
    ],
  },
  {
    id: 'commerce',
    n: '06',
    es: [
      'Comercio electrónico',
      'Operaciones en el mercado estadounidense',
      'Comercialización de productos a través de canales digitales. Nuestra actividad en Estados Unidos incluye la venta de bebidas sin alcohol EMMERY Zero en Amazon.',
      [
        'Venta en marketplaces',
        'Operaciones comerciales en Estados Unidos',
        'EMMERY Zero',
      ],
    ],
    en: [
      'E-commerce',
      'Operations in the US market',
      'Product sales through digital channels. Our activity in the United States includes selling EMMERY Zero non-alcoholic beverages on Amazon.',
      [
        'Marketplace sales',
        'Commercial operations in the United States',
        'EMMERY Zero',
      ],
    ],
  },
  {
    id: 'research',
    n: '07',
    es: [
      'Investigación y desarrollo aplicado',
      'Nutrición, deporte y salud',
      'Servicios de investigación y desarrollo vinculados a nutrición, deporte y salud. Nuestra experiencia documentada incluye elaboración y ajuste de dietas, pruebas y preparación de modelos metabólicos como apoyo a proyectos de terceros.',
      [
        'Desarrollo y ajuste de herramientas dietéticas',
        'Pruebas y modelos metabólicos',
        'Investigación de tendencias y oportunidades',
      ],
    ],
    en: [
      'Applied research & development',
      'Nutrition, sport and health',
      'Research and development services related to nutrition, sport and health. Our documented experience includes preparing and adjusting diets, testing and developing metabolic models to support third-party projects.',
      [
        'Dietary tool development and refinement',
        'Testing and metabolic models',
        'Research into trends and opportunities',
      ],
    ],
  },
];

export const groupNames: Record<Lang, string[]> = {
  es: [
    'Salud general',
    'Corazón y respiración',
    'Mente y sistema nervioso',
    'Áreas médicas',
    'Cuerpo y sentidos',
    'Familia',
    'Apoyo y hábitos',
  ],
  en: [
    'General health',
    'Heart and breathing',
    'Mind and nervous system',
    'Medical areas',
    'Body and senses',
    'Family',
    'Support and habits',
  ],
};

export const areas: Area[] = [
  [0, 'Salud general', 'General health'],
  [0, 'Medicina interna', 'Internal medicine'],
  [0, 'Prevención', 'Prevention'],
  [0, 'Geriatría', 'Geriatrics'],
  [1, 'Cardiología', 'Cardiology'],
  [1, 'Medicina vascular', 'Vascular medicine'],
  [1, 'Neumología', 'Pulmonology'],
  [1, 'Sueño', 'Sleep'],
  [2, 'Neurología', 'Neurology'],
  [2, 'Psicología', 'Psychology'],
  [2, 'Psiquiatría', 'Psychiatry'],
  [2, 'Neuropsicología', 'Neuropsychology'],
  [2, 'Adicciones', 'Addictions'],
  [2, 'Dolor', 'Pain'],
  [3, 'Digestivo', 'Gastroenterology'],
  [3, 'Hepatología', 'Hepatology'],
  [3, 'Endocrinología', 'Endocrinology'],
  [3, 'Diabetes', 'Diabetes'],
  [3, 'Nefrología', 'Nephrology'],
  [3, 'Reumatología', 'Rheumatology'],
  [3, 'Alergia', 'Allergy'],
  [3, 'Inmunología', 'Immunology'],
  [3, 'Infecciosas', 'Infectious diseases'],
  [3, 'Hematología', 'Hematology'],
  [3, 'Oncología', 'Oncology'],
  [4, 'Dermatología', 'Dermatology'],
  [4, 'Oftalmología', 'Ophthalmology'],
  [4, 'Otorrinolaringología', 'Ear, nose and throat'],
  [4, 'Audiología', 'Audiology'],
  [4, 'Traumatología', 'Orthopedics'],
  [4, 'Medicina deportiva', 'Sports medicine'],
  [4, 'Rehabilitación', 'Rehabilitation'],
  [4, 'Fisioterapia', 'Physiotherapy'],
  [4, 'Terapia ocupacional', 'Occupational therapy'],
  [4, 'Odontología', 'Dentistry'],
  [4, 'Podología', 'Podiatry'],
  [5, 'Ginecología', 'Gynecology'],
  [5, 'Obstetricia', 'Obstetrics'],
  [5, 'Urología', 'Urology'],
  [5, 'Salud sexual', 'Sexual health'],
  [5, 'Fertilidad', 'Fertility'],
  [5, 'Menopausia', 'Menopause'],
  [5, 'Pediatría', 'Pediatrics'],
  [5, 'Genética', 'Genetics'],
  [6, 'Nutrición', 'Nutrition'],
  [6, 'Logopedia', 'Speech and language'],
  [6, 'Cuidados paliativos', 'Palliative care'],
  [6, 'Apoyo a cuidadores', 'Caregiver support'],
];

export function areaName(area: Area, lang: Lang): string {
  return lang === 'es' ? area[1] : area[2];
}

export function areaSearch(area: Area): string {
  return `${area[1]} ${area[2]}`;
}
