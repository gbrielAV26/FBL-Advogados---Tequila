import { PracticeArea, TeamMember, Publication, Recognition, DepartmentContact, AdministrativeStaff } from '../types';
import heroImg from '../assets/images/hero_opt.jpg';
import heroGif from '../assets/images/Gif-video-opt.gif';
import quemSomosImg from '../assets/images/Professional_image_enhancement_2K_20260922161907.jpeg';
import bankingImg from '../assets/images/banca_financas_1790001390555.jpg';
import taxImg from '../assets/images/fiscal_tributario_1789999953402.jpg';
import realEstateImg from '../assets/images/imobiliario_opt.jpg';
import oilGasImg from '../assets/images/petroleo_opt.jpg';
import corporateImg from '../assets/images/societario_advocacia_1790087241001.jpg';
import litigationImg from '../assets/images/contencioso_civil_serio_1790087481831.jpg';
import criminalLitigationImg from '../assets/images/contencioso_penal_1790087294712.jpg';

export const DIRECT_IMAGES = {
  heroBg: heroGif,
  heroGif: heroGif,
  receptionDesk: heroImg,
  aboutLeadership: quemSomosImg,
  architectureFacade: realEstateImg,
  bankingFinance: bankingImg,
  taxCustoms: taxImg,
  realEstate: realEstateImg,
  oilGasEnergy: oilGasImg,
  corporateMAndA: corporateImg,
  litigationArbitration: litigationImg,
  criminalLitigation: criminalLitigationImg,
  logo: heroGif,
  heroOfficeBg: heroImg,
  // High-resolution architectural and courtroom reference imagery (lightweight optimized CDN)
  luandaSkyline: quemSomosImg,
  boardroomMeeting: corporateImg,
  lawLibrary: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=800&q=75",
  contractsDesk: corporateImg,
  energyPlatform: oilGasImg,
  bankingFinancial: bankingImg,
};

export const RECOGNITIONS: Recognition[] = [
  {
    id: "chambers",
    title: "Chambers",
    subtitle: "GLOBAL & PARTNERS",
    organization: "Chambers and Partners",
    year: "2024",
    rankTier: "Band 1 — General Business Law: Angola",
    quote: {
      pt: "A FBL Advogados é amplamente reconhecida como uma das firmas de referência em Angola, elogiada pela sua sofisticação técnica, rigor deontológico e capacidade de resposta imediata a operações transfronteiriças complexas.",
      en: "FBL Advogados is widely recognized as a premier benchmark firm in Angola, praised for its technical sophistication, ethical rigor, and prompt responsiveness in complex cross-border transactions."
    },
    badgeIcon: "workspace_premium"
  },
  {
    id: "legal500",
    title: "Legal 500",
    subtitle: "RECONHECIMENTO EMEA",
    organization: "The Legal 500",
    year: "2024",
    rankTier: "Tier 1 — Leading Law Firm: Angola",
    quote: {
      pt: "Uma sociedade com profunda inserção no tecido económico angolano e internacional, prestando assessoria jurídica de nível internacional aos maiores investidores dos sectores financeiro, petrolífero e de infraestruturas.",
      en: "A law firm deeply integrated into both Angolan and international business ecosystems, delivering top-tier counsel to leading investors across banking, oil & gas, and infrastructure sectors."
    },
    badgeIcon: "stars"
  },
  {
    id: "iflr1000",
    title: "IFLR1000",
    subtitle: "FINANCIAL & CORPORATE",
    organization: "IFLR1000",
    year: "2024",
    rankTier: "Top Tier Firm — Financial, Banking and M&A",
    quote: {
      pt: "Distinguida com classificação de topo pela sua liderança incontestável na estruturação de financiamentos de grandes projetos e operações de aquisição societária no mercado angolano.",
      en: "Awarded top tier ranking for undisputed leadership in structuring major project finance and corporate M&A transactions in the Angolan market."
    },
    badgeIcon: "military_tech"
  }
];

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: "corporate-investment-competition",
    title: {
      pt: "Societário, Investimento e Concorrência",
      en: "Corporate, Investment & Competition"
    },
    shortDescription: {
      pt: "Assessoria societária e empresarial, estruturação de investimento privado (AIPEX), fusões e aquisições e regulação da concorrência.",
      en: "Corporate counsel, private investment structuring (AIPEX), M&A transactions, and competition antitrust regulatory compliance."
    },
    fullDescription: {
      pt: "A equipa de Societário, Investimento e Concorrência da FBL assessora investidores nacionais e transnacionais em todas as fases da atividade económica. Acompanhamos a constituição de sociedades, acordos parassociais, projetos de investimento privado e regimes de benefícios fiscais e aduaneiros, operações de M&A, bem como matérias de controlo de concentrações e práticas restritivas da concorrência junto da ARC.",
      en: "FBL's Corporate, Investment & Competition team advises domestic and multinational clients through every stage of business operations. We advise on corporate incorporation, shareholder agreements, private investment structuring and incentive regimes, M&A, as well as merger control filings and competition compliance before the ARC."
    },
    highlights: {
      pt: [
        "Estruturação de investimentos privados e incentivos ao abrigo da Lei do Investimento Privado",
        "Fusões, cisões, aquisições e acordos parassociais complexos",
        "Notificações de operações de concentração e compliance perante a ARC",
        "Governação societária (Corporate Governance) e auditorias jurídicas (due diligence)"
      ],
      en: [
        "Private investment structuring and tax incentive regimes under the Private Investment Law",
        "Mergers, spin-offs, share acquisitions, and complex shareholder agreements",
        "Merger control notifications and antitrust compliance before the ARC",
        "Corporate governance frameworks, legal due diligence audits, and group reorganizations"
      ]
    },
    iconName: "business_center",
    leadPartner: "Paulette Lopes + Tatiana Serrão",
    responsiblePartners: ["Paulette Lopes", "Tatiana Serrão"],
    image: corporateImg
  },
  {
    id: "banking-finance",
    title: {
      pt: "Bancário e Financeiro",
      en: "Banking & Finance"
    },
    shortDescription: {
      pt: "Estruturação de financiamentos, operações cambiais junto do BNA, project finance e emissões na BODIVA.",
      en: "Loan syndication, foreign exchange compliance with BNA, debt/equity listings on BODIVA, and project finance."
    },
    fullDescription: {
      pt: "Com profundo conhecimento do sistema financeiro angolano, a FBL assessora bancos, instituições financeiras não bancárias, fundos de investimento e entidades tomadoras de crédito. Apoiamos operações de crédito sindicado, garantias bancárias, financiamento de projetos ('Project Finance'), regulação cambial e repatriação de capitais junto do Banco Nacional de Angola (BNA) e operações no mercado de valores mobiliários (BODIVA).",
      en: "With profound knowledge of the Angolan financial system, FBL advises commercial banks, non-banking financial institutions, investment funds, and corporate borrowers. We support syndicated loans, collateral packages, Project Finance facilities, foreign exchange compliance and capital repatriation with the National Bank of Angola (BNA), and securities market operations on BODIVA."
    },
    highlights: {
      pt: [
        "Financiamentos estruturados, créditos sindicados e pacotes de garantias",
        "Regulamentação cambial, operações com o BNA e transferências para o exterior",
        "Mercado de capitais: emissão de obrigações e admissão à cotação na BODIVA",
        "Conformidade regulamentar prudencial bancária e licenciamento financeiro"
      ],
      en: [
        "Structured finance, syndicated lending, and security collateral packages",
        "Foreign exchange regulations, BNA authorizations, and overseas capital transfers",
        "Capital markets: corporate bond issuances and debt/equity listings on BODIVA",
        "Prudential banking regulatory compliance and financial entity licensing"
      ]
    },
    iconName: "account_balance",
    leadPartner: "Guiomar Lopes + Neuza Melão Dias",
    responsiblePartners: ["Guiomar Lopes", "Neuza Melão Dias"],
    image: bankingImg
  },
  {
    id: "litigation-civil-commercial-arbitration",
    title: {
      pt: "Contencioso Civil, Comercial e Arbitragem",
      en: "Civil & Commercial Litigation and Arbitration"
    },
    shortDescription: {
      pt: "Patrocínio judiciário em litígios cíveis e comerciais de grande complexidade e procedimentos arbitrais nacionais e internacionais.",
      en: "High-stakes representation in complex civil and commercial litigation and domestic and international arbitration."
    },
    fullDescription: {
      pt: "A equipa de Contencioso Civil, Comercial e Arbitragem da FBL destaca-se pela sólida intervenção nos Tribunais de Comarca, Tribunais da Relação e no Tribunal Supremo de Angola, bem como em arbitragens comerciais sob as regras do CREL, CCI e LCIA. Atuamos em litígios societários, contratuais, bancários e na execução de sentenças judiciais e arbitrais estrangeiras.",
      en: "FBL's Civil, Commercial Litigation and Arbitration practice is renowned for robust representation before District Courts, Courts of Appeal, and the Angolan Supreme Court, as well as in commercial arbitrations under CREL, ICC, and LCIA rules. We handle complex shareholder disputes, contract enforcement, banking disputes, and the recognition of foreign arbitral awards."
    },
    highlights: {
      pt: [
        "Litígios societários, contratuais e comerciais perante todas as instâncias judiciais",
        "Arbitragem comercial nacional e internacional (CREL, CCI, LCIA)",
        "Recuperação de créditos, processos executivos e providências cautelares urgentes",
        "Revisão e confirmação de sentenças judiciais e laudos arbitrais estrangeiros"
      ],
      en: [
        "Corporate, contract, and banking dispute litigation before all judicial courts",
        "Domestic and international commercial arbitration (CREL, ICC, LCIA)",
        "Debt recovery, enforcement proceedings, and urgent provisional relief orders",
        "Recognition and enforcement of foreign judicial and arbitral awards"
      ]
    },
    iconName: "gavel",
    leadPartner: "Victor Ceita + Mara de Sá",
    responsiblePartners: ["Victor Ceita", "Mara de Sá"],
    image: litigationImg
  },
  {
    id: "energy-natural-resources-environment",
    title: {
      pt: "Energias, Recursos Naturais e Ambiente",
      en: "Energy, Natural Resources & Environment"
    },
    shortDescription: {
      pt: "Acompanhamento regulatório e contratual nos sectores petrolífero, mineiro, transição energética e conformidade ambiental.",
      en: "Regulatory and transactional counsel across upstream/downstream oil & gas, critical mining, energy transition, and environmental sustainability."
    },
    fullDescription: {
      pt: "Com ampla tradição no acompanhamento dos recursos naturais de Angola, a FBL presta assessoria especializada a operadoras de petróleo e gás, prestadores de serviços petrolíferos ('oilfield services'), concessionárias mineiras e promotores de projetos de energias renováveis e sustentabilidade ambiental, articulando com ANPG, MIREMPET e ANRM.",
      en: "With extensive pedigree in Angola's resource sectors, FBL provides specialized legal counsel to oil & gas concessionaires, oilfield service contractors, mining titleholders, and renewable energy developers, interfacing regularly with national regulatory entities (ANPG, MIREMPET, ANRM)."
    },
    highlights: {
      pt: [
        "Contratos de partilha de produção (PSA) e contratos de serviços com risco",
        "Regulamentação de Conteúdo Local ('Local Content') e conformidade ANPG",
        "Direito mineiro: licenças de prospecção, contratos de concessão e minerais críticos",
        "Transição energética, projetos solares e hídricos, e licenciamento ambiental"
      ],
      en: [
        "Production Sharing Agreements (PSA) and Risk Service Contracts",
        "Local Content regulatory compliance and Angolan workforce integration",
        "Mining concessions, exploration licensing, and critical mineral projects",
        "Energy transition, solar and hydroelectric utilities, and environmental permitting"
      ]
    },
    iconName: "local_gas_station",
    leadPartner: "Guiomar Lopes + Neuza Melão Dias",
    responsiblePartners: ["Guiomar Lopes", "Neuza Melão Dias"],
    image: oilGasImg
  },
  {
    id: "administrative-tax",
    title: {
      pt: "Administrativo e Fiscal",
      en: "Administrative & Tax"
    },
    shortDescription: {
      pt: "Planeamento fiscal estratégico, contencioso tributário perante a AGT, contratação pública e regulação administrativa.",
      en: "Strategic tax planning, contentious tax disputes with AGT, public procurement, and administrative regulatory law."
    },
    fullDescription: {
      pt: "A área de Administrativo e Fiscal combina o aconselhamento preventivo e o patrocínio contencioso perante a Administração Pública e os Tribunais Tributários e Administrativos. Apoiamos empresas na negociação de contratos públicos e concessões com o Estado angolano, bem como na gestão fiscal de impostos gerais (IVA, Imposto Industrial, IRT) e contestações de liquidações adicionais junto da AGT.",
      en: "The Administrative and Tax practice blends proactive advisory with robust litigation before the Angolan Public Administration and Administrative/Tax Courts. We counsel enterprises on public procurement and concession contracts with the state, alongside comprehensive tax advisory (VAT, Corporate Income Tax, Personal Income Tax) and tax assessment challenges before the AGT."
    },
    highlights: {
      pt: [
        "Planeamento fiscal estratégico e regimes fiscais especiais",
        "Contencioso tributário: reclamações graciosas, recursos hierárquicos e impugnações judiciais",
        "Contratação pública: concursos, propostas e execução de contratos com entidades públicas",
        "Contencioso administrativo e procedimentos sancionatórios perante entidades reguladoras"
      ],
      en: [
        "Strategic corporate tax planning and special investment tax regimes",
        "Tax litigation: administrative claims, hierarchical appeals, and court litigation before AGT",
        "Public procurement: tenders, bids, and contract execution with public entities",
        "Administrative contentious appeals and regulatory sanction defense"
      ]
    },
    iconName: "receipt_long",
    leadPartner: "Victor Ceita + Tatiana Serrão",
    responsiblePartners: ["Victor Ceita", "Tatiana Serrão"],
    image: taxImg
  },
  {
    id: "employment-labor",
    title: {
      pt: "Laboral",
      en: "Labor & Employment"
    },
    shortDescription: {
      pt: "Assessoria em relações individuais e coletivas de trabalho, contratação de quadros estrangeiros, vistos e contencioso do trabalho.",
      en: "Advisory on individual and collective labor relations, expatriate hiring, work permits, and employment dispute resolution."
    },
    fullDescription: {
      pt: "A equipa de Direito Laboral da FBL assessora empregadores nacionais e multinacionais na gestão das suas relações laborais em conformidade com a Lei Geral do Trabalho de Angola. Prestamos apoio na elaboração de contratos, regimes de turnos e offshore, regulamentos internos, processos disciplinares, reestruturações e rescisões contratuais, bem como em procedimentos com a Inspeção Geral do Trabalho (IGT) e vistos de trabalho para expatriados.",
      en: "FBL's Labor Law team advises domestic and multinational employers on managing employment relationships in strict compliance with the Angolan General Labor Law. We assist with drafting employment agreements, offshore/shift rotas, company regulations, disciplinary proceedings, workforce reorganizations, and termination procedures, as well as work permit applications for expatriates and audits by the General Labor Inspectorate (IGT)."
    },
    highlights: {
      pt: [
        "Contratos de trabalho, regimes especiais e regulamentos internos de empresa",
        "Processos disciplinares, despedimentos individuais e coletivos, e planos de reestruturação",
        "Contratação de trabalhadores expatriados, vistos de trabalho e cotas legais",
        "Mediação e contencioso judicial laboral nas salas de trabalho dos Tribunais de Comarca"
      ],
      en: [
        "Employment agreements, specialized rotas, and internal workplace regulations",
        "Disciplinary proceedings, individual/collective redundancies, and restructuring plans",
        "Expatriate workforce legal compliance, work permits, and mandatory local quotas",
        "Labor mediation and court litigation in District Court labor divisions"
      ]
    },
    iconName: "groups",
    leadPartner: "Neuza Melão Dias + Victor Ceita",
    responsiblePartners: ["Neuza Melão Dias", "Victor Ceita"],
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=75"
  },
  {
    id: "criminal-litigation",
    title: {
      pt: "Contencioso Penal",
      en: "Criminal Litigation"
    },
    shortDescription: {
      pt: "Defesa criminal estratégica, crimes económico-financeiros, cibercrime e programas de compliance penal corporativo.",
      en: "Strategic criminal defense, corporate white-collar crime, cybercrime, and corporate penal compliance programs."
    },
    fullDescription: {
      pt: "O departamento de Contencioso Penal da FBL assegura a defesa técnica e o patrocínio judiciário em inquéritos preliminares, instrução preparatória e julgamentos nas diversas instâncias jurisdicionais. Temos vasta experiência em matéria de crimes económico-financeiros, branqueamento de capitais, corrupção, infrações fiscais e alfandegárias, e implementação de programas de conformidade penal preventiva.",
      en: "FBL's Criminal Litigation department ensures rigorous technical defense and trial representation throughout preliminary investigations, pre-trial inquiries, and courtroom trials. We bring extensive expertise in corporate white-collar investigations, anti-money laundering, anti-corruption proceedings, fiscal and customs offenses, and preventative penal compliance frameworks."
    },
    highlights: {
      pt: [
        "Defesa em processos de crimes económico-financeiros e fiscais",
        "Acompanhamento em interrogatórios, buscas e medidas de coação pessoal",
        "Compliance penal corporativo e auditorias de prevenção de branqueamento de capitais",
        "Recursos penais perante o Tribunal da Relação, Tribunal Supremo e Tribunal Constitucional"
      ],
      en: [
        "Defense in economic, corporate, and fiscal white-collar prosecutions",
        "Representation during investigative interrogations, asset seizures, and bail measures",
        "Corporate penal compliance and anti-money laundering prevention audits",
        "Appeals before the Courts of Appeal, Supreme Court, and Constitutional Court"
      ]
    },
    iconName: "shield",
    leadPartner: "Adriano Cazenga + Victor Ceita",
    responsiblePartners: ["Adriano Cazenga", "Victor Ceita"],
    image: criminalLitigationImg
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  // -------------------------------------------------------------
  // 1. SÓCIOS (Ordem Oficial do Papel Timbrado da FBL Advogados)
  // -------------------------------------------------------------
  {
    id: "fernando-faria-de-bastos",
    name: "Fernando Faria de Bastos",
    role: {
      pt: "Sócio",
      en: "Partner"
    },
    category: "partners",
    level: "partner",
    oaaNumber: "Cédula OAA n.º 14",
    email: "fernando.fariadebastos@fbladvogados.com",
    phone: "+244 927 173 010",
    languages: ["Português", "Inglês"],
    initials: "FFB",
    bio: {
      pt: "Fernando Faria de Bastos é sócio fundador da FBL Advogados, tendo a sua actividade profissional se centrado particularmente na área de contencioso civil e penal.\n\nConta com uma vasta experiência em patrocínio de diversas acções judiciais, por motivo de infracção de direitos de propriedade industrial, incluindo imitação e contrafacção, em representação de multinacionais líderes de mercado. A sua prática em contencioso penal tem-se desenvolvido na representação de clientes em processos complexos, quer de natureza penal, quer de natureza contraordenacional, prestando uma assessoria jurídica especializada e personalizada.\n\nPresta também assessoria a grandes grupos económicos e de investimento privado em operações de investimento estrangeiro em Angola, com especial enfoque em projectos imobiliários.\n\nTem igualmente particular intervenção em assuntos relacionados com Direito da Propriedade Industrial, sendo um dos poucos especialistas nesta área em Angola.",
      en: "Fernando Faria de Bastos is a founding partner of FBL Advogados, with his professional practice centered particularly on civil and criminal litigation.\n\nHe has extensive experience in representing leading multinational companies in various judicial proceedings involving the infringement of industrial property rights, including trademark imitation and counterfeiting. His criminal litigation practice centers on representing clients in complex criminal and administrative offense proceedings, providing specialized and tailored legal advice.\n\nHe also advises major economic groups and private investors on foreign investment operations in Angola, with a particular focus on real estate projects.\n\nHe has distinguished expertise in Industrial Property Law, being one of the few recognized specialists in Angola."
    },
    practiceAreasCustom: {
      pt: ["Criminal e Compliance", "Contencioso e Arbitragem"],
      en: ["Criminal and Compliance", "Litigation and Arbitration"]
    },
    practiceAreaIds: ["criminal-litigation", "litigation-civil-commercial-arbitration"],
    experience: {
      pt: [
        "Assessoria a sociedade chinesa líder no mercado de jogos de internet e plataforma de mensagens instantâneas, em processo de imitação de marca;",
        "Assessoria a sociedade americana, líder de hardware informático, em processo de contrafacção de tinteiros para impressão;",
        "Defesa de arguidos politicamente perseguidos em processos crimes instaurados no Tribunal Popular Revolucionário e em tribunais de jurisdição comum;",
        "Intervenção em processo crime em S. Tomé e Príncipe, em representação de cidadão italiano acusado de uxoricídio;",
        "Execução de dívida, no valor de USD 100 milhões, em representação de banco chinês de grande dimensão;",
        "Execução de dívida contra banco angolano, em representação de sociedade imobiliária angolana;",
        "Gestão de mais de 30.000 processos de registo de marcas e de outros direitos de propriedade intelectual, incluindo o portfolio de propriedade industrial de mais de 50 conhecidas multinacionais;",
        "Assistência na constituição de grupo empresarial na área de seguros e resseguros, imobiliário e hotelaria, incluindo constituição de sociedades, operações de investimento estrangeiro e aquisição de imobiliário, em valor global superior a USD 200 milhões;",
        "Assistência a processo de investimento estrangeiro na área mineira em representação de sociedade da África do Sul, em valor superior a USD 60 milhões."
      ],
      en: [
        "Counsel to a leading Chinese internet gaming and instant messaging company in trademark imitation proceedings;",
        "Counsel to a leading American computer hardware corporation in printing ink cartridge counterfeiting proceedings;",
        "Defense of politically persecuted defendants in criminal proceedings brought before the Revolutionary People's Court and regular courts of jurisdiction;",
        "Representation of an Italian citizen accused of uxoricide in criminal proceedings in São Tomé and Príncipe;",
        "Enforcement of a USD 100 million debt on behalf of a major Chinese commercial bank;",
        "Debt enforcement against an Angolan bank on behalf of an Angolan real estate company;",
        "Management of over 30,000 trademark and IP registration proceedings, including the industrial property portfolios of over 50 renowned multinationals;",
        "Assistance in the formation of a corporate group in insurance, reinsurance, real estate, and hospitality, including company formation, FDI transactions, and real estate acquisitions exceeding USD 200 million;",
        "Assistance in a foreign investment process in the mining sector on behalf of a South African company, exceeding USD 60 million."
      ]
    },
    recognitions: ["Chambers and Partners", "Leaders League"],
    education: {
      pt: [
        "Faculdade de Direito da Universidade de Coimbra — Licenciatura em Direito (1977)"
      ],
      en: [
        "Faculty of Law, Universidade de Coimbra — Law Degree (1977)"
      ]
    }
  },
  {
    id: "paulette-lopes",
    name: "Paulette Lopes",
    role: {
      pt: "Sócia",
      en: "Partner"
    },
    category: "partners",
    level: "partner",
    oaaNumber: "Cédula OAA n.º 94",
    email: "paulette.lopes@fbladvogados.com",
    phone: "+244 927 173 010",
    languages: ["Português", "Inglês"],
    initials: "PL",
    bio: {
      pt: "Paulette Lopes é sócia fundadora da FBL Advogados, tendo a sua actividade profissional se centrado particularmente no Direito Societário e Comercial.\n\nTem particular intervenção em assuntos relacionados com investimento privado em Angola, assessorando grandes grupos económicos em projectos de investimento estrangeiro.\n\nConta ainda com uma vasta experiência na constituição de sociedades, assim como na privatização de empresas de direito angolano.\n\nÉ professora da Faculdade de Direito da Universidade Agostinho Neto, sendo actualmente responsável pela regência da cadeira de Direito Processual Civil III.\n\nPublica regularmente artigos científicos na área do Direito Societário, sendo co-autora da “Lei da Insolvência” e das “Notas para a actualização do Regime Jurídico de Falência em Angola” publicado no Número Especial Comemorativo do XXXV Aniversário da FDUAN.\n\nIniciou a sua carreira no Ministério da Informação, tendo na I República sido transferida para o Ministério da Justiça. Em 1976, integrou o Ministério das Relações Exteriores enquanto diplomata.",
      en: "Paulette Lopes is a founding partner of FBL Advogados, with her professional practice centered particularly on Corporate and Commercial Law.\n\nShe has extensive involvement in private investment matters in Angola, advising major economic groups on foreign investment projects.\n\nShe has vast experience in the incorporation of companies, as well as in the privatization of Angolan companies.\n\nShe is a professor at the Faculty of Law of the Universidade Agostinho Neto, currently responsible for lecturing Civil Procedural Law III.\n\nShe regularly publishes scholarly articles in Corporate Law, co-authoring the “Insolvency Law” and “Notes on the Updating of the Bankruptcy Legal Framework in Angola” published in the FDUAN 35th Anniversary Special Commemorative Issue.\n\nShe began her career at the Ministry of Information, being transferred during the First Republic to the Ministry of Justice. In 1976, she joined the Ministry of Foreign Affairs as a diplomat."
    },
    practiceAreasCustom: {
      pt: ["Societário, Comercial, M&A e Investimento Privado"],
      en: ["Corporate, Commercial, M&A and Private Investment"]
    },
    practiceAreaIds: ["corporate-investment-competition"],
    experience: {
      pt: [
        "Assessoria na constituição de várias empresas do sector mineiro, com investimento estrangeiro e nacional, no valor global de USD 150 milhões;",
        "Assessoria na privatização de empresa de direito angolano para torrefação e venda de café, com investimento estrangeiro, com o valor global de cerca de USD 20 milhões;",
        "Assessoria na constituição de empresa internacional para construção de barragens, no valor global de USD 10 milhões;",
        "Assessoria na constituição de empresa de catering para o ramo de aviação, no valor global de cerca de USD 20 milhões;",
        "Assessoria a empresa de energia em negociação com o Estado angolano com o valor global de cerca de USD 7 milhões;",
        "Assessoria na constituição de várias sociedades internacionais no ramo da indústria de bebidas, com projectos de investimento, no valor global de cerca de USD 250 milhões;",
        "Assessoria na constituição de Fundo de Apoio Social, no valor global de cerca de USD 20 milhões;",
        "Assessoria ao Ministério das Finanças de Angola para o primeiro lançamento de Eurobonds, no valor de USD 1.5 mil milhões."
      ],
      en: [
        "Counsel on the formation of several mining companies, involving domestic and foreign investment totaling USD 150 million;",
        "Counsel on the privatization of an Angolan coffee roasting and retail company with foreign investment, valued at approximately USD 20 million;",
        "Counsel on the incorporation of an international dam construction company valued at USD 10 million;",
        "Counsel on the incorporation of an aviation catering company valued at approximately USD 20 million;",
        "Counsel to an energy company in negotiations with the Angolan State totaling approximately USD 7 million;",
        "Counsel on the incorporation of several international beverage manufacturing companies with investment projects totaling approximately USD 250 million;",
        "Counsel on the establishment of a Social Support Fund valued at approximately USD 20 million;",
        "Counsel to the Angolan Ministry of Finance for the inaugural issuance of Eurobonds valued at USD 1.5 billion."
      ]
    },
    recognitions: ["Chambers and Partners", "Leaders League", "IFLR 1000"],
    education: {
      pt: [
        "Faculdade de Direito da Universidade Clássica de Lisboa — Licenciatura em Direito (1982)",
        "Faculdade de Direito da Universidade de Lisboa — Mestre em Direito (1998)"
      ],
      en: [
        "Faculty of Law, Universidade Clássica de Lisboa — Law Degree (1982)",
        "Faculty of Law, Universidade de Lisboa — Master of Laws (1998)"
      ]
    }
  },
  {
    id: "guiomar-lopes",
    name: "Guiomar Lopes",
    role: {
      pt: "Sócia",
      en: "Partner"
    },
    category: "partners",
    level: "partner",
    oaaNumber: "Cédula OAA n.º 68",
    email: "guiomar.lopes@fbladvogados.com",
    phone: "+244 927 173 010",
    languages: ["Português", "Inglês", "Francês"],
    initials: "GL",
    bio: {
      pt: "Guiomar Lopes é sócia fundadora da FBL Advogados, tendo a sua actividade profissional se centrado particularmente no Direito Financeiro e dos Recursos Naturais.\n\nAdvogada com vasta experiência em Direito do Petróleo e do Gás, com um percurso profissional feito ao longo de vários anos no sector petrolífero angolano, passando pela Concessionária Nacional (então, a Sonangol) e posteriormente pela ELF Exploration Angola, que viria a tornar-se Total E&P Angola.\n\nActualmente pratica essencialmente na área do Direito Financeiro. Ao longo de vários anos prestou assistência, directamente ou em colaboração com firmas internacionais ao Ministério das Finanças da República de Angola, em transacções relacionadas com financiamentos ao Estado.\n\nNo mesmo âmbito, vem assistindo vários bancos e instituições financeiras internacionais em transacções com entidades públicas ou privadas angolanas. Em particular, tem trabalhado regularmente em operações de financiamento de projectos de Oil & Gas em Angola.\n\nParticipou em vários processos de revisão/ reforma legislativa, nomeadamente no pacote inicial de legislação do sector petrolífero ainda vigente, na reforma do direito comercial, da legislação sobre actividades comerciais e na lei sobre a recuperação de empresas e insolvência.\n\nFoi durante vários anos, Monitora da cadeira de Direito Internacional Público. Mais recentemente, leccionou no âmbito do primeiro curso de mestrado em Direito do Mar da Faculdade de Direito da Universidade Agostinho Neto.",
      en: "Guiomar Lopes is a founding partner of FBL Advogados, with her professional practice centered particularly on Financial and Natural Resources Law.\n\nShe is a lawyer with extensive experience in Oil & Gas Law, having built her career over several years in the Angolan petroleum sector with the National Concessionaire (then Sonangol) and subsequently ELF Exploration Angola, which later became Total E&P Angola.\n\nShe currently practices primarily in Financial Law. Over several years, she provided assistance, directly or in collaboration with international law firms, to the Ministry of Finance of the Republic of Angola in transactions related to sovereign state financing.\n\nIn the same context, she advises several international banks and financial institutions on transactions with Angolan public and private entities. In particular, she regularly advises on Oil & Gas project finance transactions in Angola.\n\nShe participated in legislative review and reform processes, including the initial petroleum sector legislative package still in force, the commercial law reform, commercial activity legislation, and the corporate recovery and insolvency law.\n\nShe was for several years a teaching assistant in Public International Law. More recently, she lectured in the first Master's program in Law of the Sea at the Faculty of Law of the Universidade Agostinho Neto."
    },
    practiceAreasCustom: {
      pt: ["Financeiro e Bancário", "Societário, Comercial, M&A e Investimento Privado", "Recursos Naturais, Oil & Gas, Energia e Mining"],
      en: ["Banking and Financial", "Corporate, Commercial, M&A and Private Investment", "Natural Resources, Oil & Gas, Energy and Mining"]
    },
    practiceAreaIds: ["banking-finance", "corporate-investment-competition", "energy-natural-resources-environment"],
    experience: {
      pt: [
        "No sector petrolífero, assistência directa ou em colaboração com firmas internacionais em transacções de farm in ou farm out e outras de natureza diversa;",
        "Ainda neste sector, depois de ter participado nas negociações de parte significativa dos blocos ainda em actividade, prestou assistência jurídica generalista a vários dos principais operadores presentes no mercado angolano, bem como a outros operadores e associados em diferentes blocos petrolíferos, nacionais e estrangeiros;",
        "Assistência jurídica ao maior credor do Estado Angolano na China na negociação dos acordos de reestruturação da dívida, de valor superior a USD 15 mil milhões;",
        "Assessoria a bancos internacionais na alteração dos contratos de financiamento em vigor, para adopção de uma nova taxa de juro em virtude da descontinuação da taxa LIBOR;",
        "Assessoria em questões de direito angolano, no âmbito de um processo de arbitragem ICC, com o valor de mais de USD 100 milhões;",
        "Coordenação da equipa de assessoria a empresa pública na estruturação e lançamento de um empréstimo obrigacionista de valor equivalente a USD 150 milhões."
      ],
      en: [
        "In the petroleum sector, direct assistance or in collaboration with international law firms in farm-in/farm-out transactions and other matters of diverse nature;",
        "Also in this sector, having participated in negotiating a significant portion of the offshore blocks still active, provided general legal counsel to several major operators in the Angolan market, as well as other operators and partners across domestic and international petroleum concessions;",
        "Legal assistance to the Angolan State's largest creditor in China on debt restructuring agreements exceeding USD 15 billion;",
        "Counsel to international banks on amending existing loan agreements to adopt new reference interest rates following the discontinuation of LIBOR;",
        "Counsel on Angolan law matters within an ICC arbitration proceeding valued at over USD 100 million;",
        "Coordination of the advisory team to a public corporation in structuring and issuing a bond loan equivalent to USD 150 million."
      ]
    },
    recognitions: ["Chambers and Partners", "IFLR 1000"],
    education: {
      pt: [
        "Faculdade de Direito da Universidade Agostinho Neto — Licenciatura em Direito (1987)",
        "Faculdade de Direito da Universidade de Lisboa — Mestre em Direito (1998)"
      ],
      en: [
        "Faculty of Law, Universidade Agostinho Neto — Law Degree (1987)",
        "Faculty of Law, Universidade de Lisboa — Master of Laws (1998)"
      ]
    }
  },
  {
    id: "victor-ceita",
    name: "Victor Ceita",
    role: {
      pt: "Sócio",
      en: "Partner"
    },
    category: "partners",
    level: "partner",
    oaaNumber: "Cédula OAA n.º 584",
    email: "victor.ceita@fbladvogados.com",
    phone: "+244 927 173 010",
    languages: ["Português", "Inglês"],
    initials: "VC",
    bio: {
      pt: "Victor Ceita é sócio da FBL Advogados, tendo a sua actividade profissional se centrado particularmente na área de Contencioso e no Direito Administrativo e Fiscal.\n\nTem particular intervenção no acompanhamento judicial e extrajudicial de empresas nacionais e multinacionais, assim como na assessoria no âmbito contencioso fiscal perante a Autoridade Geral Tributária, quer na fase graciosa, quer na fase judicial.\n\nTem também experiência em litígios envolvendo Direito Imobiliário.\n\nConta ainda com uma vasta experiência enquanto consultor do Ministério da Justiça (2010 a 2012) e assessor do Tribunal Constitucional (2012 a 2015).\n\nVictor Ceita é atualmente docente de Direito Processual Civil na Faculdade de Direito da Universidade Metodista de Angola.",
      en: "Victor Ceita is a partner at FBL Advogados, with his professional activity focused particularly on Litigation, Administrative, and Tax Law.\n\nHe has particular involvement in judicial and extrajudicial representation of national and multinational companies, as well as advisory in tax litigation before the General Tax Administration (AGT), both in administrative and judicial phases.\n\nHe also possesses extensive experience in disputes involving Real Estate Law.\n\nHe further brings substantial experience as a consultant to the Ministry of Justice (2010–2012) and advisor to the Constitutional Court (2012–2015).\n\nVictor Ceita is currently a professor of Civil Procedural Law at the Faculty of Law of the Universidade Metodista de Angola."
    },
    practiceAreasCustom: {
      pt: ["Contencioso & Arbitragem", "Administrativo e Fiscal"],
      en: ["Litigation & Arbitration", "Administrative and Tax"]
    },
    practiceAreaIds: ["litigation-civil-commercial-arbitration", "administrative-tax"],
    experience: {
      pt: [
        "Assessoria a empresa seguradora e resseguradora na regularização de indemnização na sequência de acidente de aviação, no valor global de cerca de USD 3 milhões com aplicação de Convenções internacionais;",
        "Assessoria a empresa seguradora e resseguradora na regularização de indemnização na sequência de acidente de aviação, no valor global na ordem dos USD 750 mil com aplicação de Convenções internacionais;",
        "Assessoria a empresa seguradora e resseguradora na regularização de indemnização na sequência de acidente de aviação, no valor global na ordem dos USD 500 mil com aplicação de Convenções internacionais;",
        "Assessoria em processo judicial de defesa da posse de direito imobiliário de valor superior a USD 2 milhões;",
        "Acção declarativa seguida de execução de sentença condenatória do Estado em montante de USD 1.2 milhões por expropriação ilegal;",
        "Assessoria a pessoas singulares e colectivas no contencioso perante o Tribunal de Contas, na defesa contra responsabilidade financeira reitegratória de montante superior a EUR 6.5 milhões."
      ],
      en: [
        "Counsel to an insurance and reinsurance company on settlement of aviation accident indemnity totaling approx. USD 3 million under international conventions;",
        "Counsel to an insurance and reinsurance company on settlement of aviation accident indemnity in the range of USD 750,000 under international conventions;",
        "Counsel to an insurance and reinsurance company on settlement of aviation accident indemnity in the range of USD 500,000 under international conventions;",
        "Counsel in judicial proceedings for the defense of real estate possession valued at over USD 2 million;",
        "Declaratory action followed by execution of judgment against the State in the amount of USD 1.2 million for unlawful expropriation;",
        "Counsel to individuals and corporate entities in contentious proceedings before the Court of Auditors (Tribunal de Contas), defending against financial liability exceeding EUR 6.5 million."
      ]
    },
    education: {
      pt: [
        "Escola de Direito da Universidade do Minho — Licenciatura em Direito (2000)",
        "Instituto Superior de Gestão — Pós-Graduação em Contencioso Tributário (2005)",
        "Instituto de Direito Privado da Faculdade de Direito de Lisboa (IDP-FDUL) — Pós-Graduação em Direito da Responsabilidade Civil (2022)"
      ],
      en: [
        "School of Law, Universidade do Minho — Law Degree (2000)",
        "Instituto Superior de Gestão — Postgraduate in Tax Litigation (2005)",
        "Private Law Institute, Faculty of Law, Universidade de Lisboa (IDP-FDUL) — Postgraduate in Civil Liability Law (2022)"
      ]
    }
  },
  {
    id: "tatiana-serrao",
    name: "Tatiana Serrão",
    role: {
      pt: "Sócia",
      en: "Partner"
    },
    category: "partners",
    level: "partner",
    oaaNumber: "Cédula OAA n.º 846",
    email: "tatiana.serrao@fbladvogados.com",
    phone: "+244 927 173 010",
    languages: ["Português", "Inglês", "Italiano", "Francês"],
    initials: "TS",
    bio: {
      pt: "Tatiana Serrão é sócia da FBL Advogados, tendo a sua actividade profissional se centrado particularmente no Direito Administrativo e Fiscal, assim como o Direito Societário, Comercial e Investimento Privado.\n\nCo-coordena a área de prática de Societário e Investimento Privado, assistindo clientes dos mais variados sectores e de diversas jurisdições, que pretendam estabelecer-se em Angola.\n\nAo longo do seu percurso, tem assessorado diversas sociedades internacionais e clientes individuais em operações de constituição de sociedades com sede em Angola, em reestruturações societárias e em M&A, envolvendo vários sectores como o sector do comércio, nas suas variadas vertentes, incluindo a prestação de serviços diversos, o sector da indústria, os recursos minerais e a contratação pública.\n\nÉ desde 2014 membro do Grupo Técnico para as Questões Jurídicas e Legais do Conselho de Ministros.\n\nConta ainda com uma vasta experiência enquanto consultora jurídica do Ministério do Comércio e do Tribunal Constitucional de Angola.\n\nFoi docente de Direito Administrativo, Direito do Comércio Internacional e Direito Processual Civil I na Faculdade de Direito da Universidade Católica de Angola.",
      en: "Tatiana Serrão is a partner at FBL Advogados, with her professional activity focused particularly on Administrative and Tax Law, as well as Corporate, Commercial, and Private Investment Law.\n\nShe co-coordinates the Corporate and Private Investment practice area, assisting clients across varied sectors and jurisdictions seeking to establish in Angola.\n\nThroughout her career, she has advised multiple international companies and individual clients on the incorporation of companies headquartered in Angola, corporate restructurings, and M&A across sectors such as commerce, multi-service provision, industry, mineral resources, and public procurement.\n\nSince 2014, she has been a member of the Technical Group for Legal Affairs of the Council of Ministers.\n\nShe also brings extensive experience as a legal consultant to the Ministry of Commerce and the Constitutional Court of Angola.\n\nShe was a lecturer in Administrative Law, International Trade Law, and Civil Procedural Law I at the Faculty of Law of the Universidade Católica de Angola."
    },
    practiceAreasCustom: {
      pt: ["Societário, Comercial, M&A e Investimento Privado", "Administrativo e Fiscal"],
      en: ["Corporate, Commercial, M&A and Private Investment", "Administrative and Tax"]
    },
    practiceAreaIds: ["corporate-investment-competition", "administrative-tax"],
    experience: {
      pt: [
        "Assistência a diversas sociedades estrangeiras na constituição de sociedades via investimento estrangeiro, destacando-se investimentos realizados por empresa líder em Angola na produção de latas (investimento inicial de USD 19 milhões) e empresa líder em Angola na produção de detergentes (investimento inicial de EUR 10 milhões);",
        "Assistência corrente na reestruturação de sociedades diversas, estando em curso a acompanhar um processo de reestruturação de empresa líder na produção de bebidas em Angola, transacção que envolve um investimento de cerca de USD 20 milhões;",
        "Assistência a empresa líder na lapidação de diamantes em Angola, tendo sido uma das primeiras empresas multinacionais a estabelecer-se em Luanda, num investimento inicial de aproximadamente USD 10 milhões;",
        "Assistência a diversas empresas estrangeiras na elaboração de joint ventures com sociedades de direito angolano, destacando-se prestadoras de serviços ao sector petrolífero e sociedades exploradoras de outros recursos minerais, mormente diamantes;",
        "Assessoria a empresa pública angolana no processo de emissão de obrigações, num valor aproximado de USD 150 milhões;",
        "Assistência a grupo de investidor estrangeiro na reestruturação de cerca de 20 empresas, incluindo processos de M&A e dissoluções diversas."
      ],
      en: [
        "Counsel to multiple foreign companies in the incorporation of subsidiaries via foreign direct investment, notably a leading can manufacturing company in Angola (initial USD 19M investment) and a leading detergent manufacturing company in Angola (initial EUR 10M investment);",
        "Ongoing counsel in restructuring various companies, currently supervising the restructuring of a leading beverage manufacturer in Angola involving approx. USD 20 million;",
        "Counsel to a leading diamond polishing enterprise in Angola, among the earliest multinationals to establish operations in Luanda, with an initial investment of approx. USD 10 million;",
        "Counsel to international corporations in negotiating joint ventures with Angolan entities, particularly oilfield service providers and mining concessionaires, notably diamond ventures;",
        "Advisory to an Angolan state-owned enterprise on a bond issuance valued at approximately USD 150 million;",
        "Counsel to a foreign investor group in restructuring approximately 20 companies, including M&A transactions and liquidations."
      ]
    },
    education: {
      pt: [
        "Faculdade de Direito da Universidade Católica de Angola — Licenciatura em Direito (2006)",
        "Faculdade de Direito da Universidade Agostinho Neto — Pós-Graduação em Direito do Comércio Internacional (2006)",
        "Faculdade de Direito da Universidade Católica de Portugal — Pós-Graduação em Direito Contratual (2006)",
        "Faculdade de Direito da Universidade Católica de Portugal — Mestre em Direito (2009)"
      ],
      en: [
        "Faculty of Law, Universidade Católica de Angola — Law Degree (2006)",
        "Faculty of Law, Universidade Agostinho Neto — Postgraduate in International Trade Law (2006)",
        "Faculty of Law, Universidade Católica de Portugal — Postgraduate in Contract Law (2006)",
        "Faculty of Law, Universidade Católica de Portugal — Master of Laws (2009)"
      ]
    }
  },
  {
    id: "neuza-melao-dias",
    name: "Neuza Melão Dias",
    role: {
      pt: "Sócia",
      en: "Partner"
    },
    category: "partners",
    level: "partner",
    oaaNumber: "Cédula OAA n.º 545",
    email: "neuza.melaodias@fbladvogados.com",
    phone: "+244 927 173 010",
    languages: ["Português", "Inglês"],
    initials: "NMD",
    bio: {
      pt: "Neuza Melão Dias é sócia da FBL Advogados, tendo a sua actividade profissional se centrado particularmente no Direito Financeiro e Laboral.\n\nA sua actividade está centrada na prestação de consultoria às empresas, dos sectores público e privado, bem como a instituições públicas, com particular intervenção em matérias de Direito Financeiro.\n\nConta com vasta experiência na assessoria a entidades financeiras e investidores, no âmbito da montagem de estruturas envolvendo instrumentos financeiros derivados.\n\nA sua prática em Direito Laboral tem-se desenvolvido na assessoria em processos de lay off e na cessação do contrato de trabalho, designadamente por acordo, por despedimento individual ou coletivo.\n\nFoi Professora Assistente-Estagiária da cadeira de Direito Comercial, na Faculdade de Direito da Universidade Lusíada em Angola (2005/2006).",
      en: "Neuza Melão Dias is a partner at FBL Advogados, with her professional activity focused particularly on Financial and Labor Law.\n\nHer practice centers on corporate advisory to public and private sector companies and public institutions, with particular involvement in Financial Law matters.\n\nShe brings extensive experience advising financial institutions and investors on structuring complex derivatives and capital arrangements.\n\nHer Labor Law practice focuses on layoff procedures and termination of employment contracts, by mutual agreement, individual dismissal, or collective redundancy.\n\nShe was an Assistant Lecturer in Commercial Law at the Faculty of Law of the Universidade Lusíada de Angola (2005/2006)."
    },
    practiceAreasCustom: {
      pt: ["Financeiro e Bancário", "Laboral"],
      en: ["Banking and Financial", "Labor and Employment"]
    },
    practiceAreaIds: ["banking-finance", "employment-labor"],
    experience: {
      pt: [
        "Assessoria a empresa pública na estruturação e lançamento de empréstimo obrigacionista no valor de USD 150 milhões;",
        "Assessoria a entidade financiadora na celebração de contrato de leasing para aquisição de aeronave no valor de USD 44.8 milhões, incluindo avaliação das garantias associadas à transacção;",
        "Patrocínio judiciário no processo crime em que o Estado reclamava o pagamento de indemnização no valor de USD 2 mil milhões;",
        "Assessoria na estruturação de projectos de investimento no sector industrial avaliados em USD 20 milhões;",
        "Assessoria a entidade seguradora na sua constituição e implementação de projectos do sector;",
        "Assessoria de instituição financeira bancária no processo de despedimento de 400 trabalhadores, com pagamento de indemnizações no valor total de USD 10 milhões."
      ],
      en: [
        "Advisory to a state enterprise in structuring and issuing a bond loan valued at USD 150 million;",
        "Advisory to a financing institution in executing an aircraft leasing agreement valued at USD 44.8 million, including security assessment;",
        "Legal representation in criminal proceedings in which the State claimed indemnity of USD 2 billion;",
        "Advisory on structuring investment projects in the industrial sector valued at USD 20 million;",
        "Counsel to an insurance institution in its incorporation and regulatory licensing;",
        "Advisory to a commercial bank in the redundancy of 400 workers, with indemnity settlements totaling USD 10 million."
      ]
    },
    education: {
      pt: [
        "Faculdade de Direito da Universidade Agostinho Neto — Licenciatura em Direito (2004)",
        "Faculdade de Direito da Universidade Agostinho Neto — Pós-Graduação em Direito das Sociedades (2012)",
        "Faculdade de Direito da Universidade Agostinho Neto — Frequentou o curso de Mestrado em Direito Fiscal (2015/2016)"
      ],
      en: [
        "Faculty of Law, Universidade Agostinho Neto — Law Degree (2004)",
        "Faculty of Law, Universidade Agostinho Neto — Postgraduate in Corporate Law (2012)",
        "Faculty of Law, Universidade Agostinho Neto — Master's coursework in Tax Law (2015/2016)"
      ]
    }
  },
  {
    id: "mara-de-sa",
    name: "Mara de Sá",
    role: {
      pt: "Sócia",
      en: "Partner"
    },
    category: "partners",
    level: "partner",
    oaaNumber: "Cédula OAA n.º 1129",
    email: "mara.sa@fbladvogados.com",
    phone: "+244 927 173 010",
    languages: ["Português", "Inglês", "Francês"],
    initials: "MS",
    bio: {
      pt: "Mara de Sá é sócia da FBL Advogados desde 2025, atuando nas áreas de Imobiliário, Administrativo, Fiscal, Contencioso Civil e Comercial.\n\nTem uma ampla experiência na assistência a clientes de diversos sectores e jurisdições, prestando assessoria a sociedades nacionais e internacionais, bem como a clientes individuais, atuando ainda, no sector imobiliário, auxiliando sociedades e clientes na regularização de imóveis de várias naturezas, incluindo a constituição de condomínios e a regularização em regime de propriedade horizontal.\n\nA sua actuação estende-se ainda ao sector bancário, fiscal e aduaneiro, acompanhando processos extrajudiciais e judiciais nessas áreas. Possui experiência em contencioso civil e laboral, abrangendo a elaboração de diversos documentos jurídicos. Participa também em processos de natureza laboral, cível, marítima e de cobrança de dívidas, incluindo audiências.\n\nNo âmbito do direito comercial, civil e administrativo, elabora contratos comerciais, civis e administrativos, incluindo contratos de investimento privado, compra e venda, promessas, cessão de posição contratual, arrendamentos civil e comercial, constituição de direito de superfície, propriedade horizontal, registos e condomínios, bem como contratos de fornecimento e conta em participação.\n\nMara de Sá está inscrita na Ordem dos Advogados de Angola.",
      en: "Mara de Sá has been a partner at FBL Advogados since 2025, practicing in Real Estate, Administrative, Tax, Civil, and Commercial Litigation.\n\nShe boasts extensive experience assisting clients across diverse sectors and jurisdictions, providing counsel to domestic and international corporations as well as private clients. In real estate, she assists in property regularization, condominium constitution, and horizontal property regimes.\n\nHer practice spans banking, tax, and customs, handling extrajudicial and court proceedings, as well as civil and labor litigation, maritime law, and debt recovery.\n\nIn commercial, civil, and administrative law, she drafts complex commercial contracts, private investment contracts, leases, surface rights, supply contracts, and joint ventures.\n\nMara de Sá is registered with the Angolan Bar Association."
    },
    practiceAreasCustom: {
      pt: ["Imobiliário, Infraestruturas & Urbanismo", "Administrativo e Fiscal", "Contencioso & Arbitragem", "Comercial e Societário"],
      en: ["Real Estate, Infrastructure & Urban Planning", "Administrative and Tax", "Litigation & Arbitration", "Commercial and Corporate"]
    },
    practiceAreaIds: ["real-estate-urban-planning", "administrative-tax", "litigation-civil-commercial-arbitration", "corporate-investment-competition"],
    experience: {
      pt: [
        "Assessoria a empresas no sector da engenharia civil para aconselhamento fiscal, imobiliário e operações de investimento privado;",
        "Assessoria a empresas no sector da restauração, para aconselhamento fiscal, imobiliário e operações de investimento privado;",
        "Assessoria a empresas no sector da exploração florestal, para aconselhamento fiscal, imobiliário e operações de investimento privado;",
        "Assessoria na elaboração de petições iniciais, recursos, incidentes de instância e representação em tribunal;",
        "Assessoria na elaboração de contratos comerciais, civis e administrativos, incluindo contratos de investimento privado, compra e venda, promessas, cessão de posição contratual, arrendamentos civil e comercial, constituição de direito de superfície, propriedade horizontal, registos e condomínios, bem como contratos de fornecimento;",
        "Assessoria a sociedades nacionais e internacionais, bem como a clientes individuais, em operações de constituição de empresas com sede em Angola."
      ],
      en: [
        "Advisory to civil engineering companies on tax, real estate, and private investment transactions;",
        "Advisory to hospitality and restaurant companies on tax, real estate, and private investment transactions;",
        "Advisory to forestry exploration enterprises on tax, real estate, and private investment transactions;",
        "Drafting of court petitions, appeals, procedural motions, and courtroom representation;",
        "Drafting commercial, civil, and administrative contracts, including private investment, sale and purchase, leases, surface rights, and supply agreements;",
        "Advising domestic and international corporations as well as individual clients on the incorporation of companies in Angola."
      ]
    },
    education: {
      pt: [
        "Faculdade de Direito da Universidade Católica de Angola — Licenciatura em Direito (2008)",
        "ISCTE-IUL — MBA em Direito Empresarial (2012)",
        "Faculdade de Direito da Universidade Agostinho Neto — Pós-graduação em Direito Tributário (2024)"
      ],
      en: [
        "Faculty of Law, Universidade Católica de Angola — Law Degree (2008)",
        "ISCTE-IUL — MBA in Business Law (2012)",
        "Faculty of Law, Universidade Agostinho Neto — Postgraduate in Tax Law (2024)"
      ]
    }
  },
  {
    id: "adriano-cazenga",
    name: "Adriano Cazenga",
    role: {
      pt: "Sócio",
      en: "Partner"
    },
    category: "partners",
    level: "partner",
    oaaNumber: "Cédula OAA n.º 1768",
    email: "adriano.cazenga@fbladvogados.com",
    phone: "+244 927 173 010",
    languages: ["Português", "Inglês"],
    initials: "AC",
    bio: {
      pt: "Adriano Cazenga é sócio da FBL Advogados desde 2025 e tem actuação nas áreas de prática Penal, Civel, Comercial, Administrativo, Imobiliário e Urbanismo, assim como Registos e Notariado.\n\nAo longo do seu percurso, tem assessorado diversos clientes, pessoas colectivas e individuais, acompanhando processos criminais, cíveis, família, sucessório e laborais nas suas mais diversas fazes até ao julgamento, incidentes e recursos.\n\nTem acompanhado também operações de constituição de sociedades com sede em Angola, acompanhamento de processo de regularização jurídica de imóveis, desde o processos de concessão e transmissão de direito de superfície; compra e venda de imóveis; processos de constituição de Propriedade Horizontal; processos de loteamento; desanexações e vários outros no âmbito do vasto campo do imobiliário.\n\nAdriano encontra-se inscrito na Ordem dos Advogados de Angola.",
      en: "Adriano Cazenga has been a partner at FBL Advogados since 2025, practicing in Criminal, Civil, Commercial, Administrative, Real Estate, Urban Planning, and Notary & Registry Law.\n\nThroughout his career, he has advised corporate and private clients in criminal, civil, family, probate, and labor proceedings through trials, interlocutory motions, and appeals.\n\nHe has also guided company incorporations in Angola, property regularization, surface rights, sale and purchase of real estate, horizontal property, and urban land division.\n\nAdriano is registered with the Angolan Bar Association."
    },
    practiceAreasCustom: {
      pt: ["Comercial, Societário, M&A e Investimento Privado", "Criminal e Compliance", "Imobiliário e Propriedade e uso da Terra", "Contencioso e Arbitragem"],
      en: ["Commercial, Corporate, M&A and Private Investment", "Criminal and Compliance", "Real Estate and Land Use", "Litigation and Arbitration"]
    },
    practiceAreaIds: ["corporate-investment-competition", "criminal-litigation", "real-estate-urban-planning", "litigation-civil-commercial-arbitration"],
    experience: {
      pt: [
        "Elaboração de diversos documentos jurídicos, como petições iniciais, recursos, incidentes de instância e representação em Tribunal, participação em vários processos de natureza laboral, cível, marítima e cobranças de dívidas;",
        "Elaboração de contratos comerciais, civis, contratos administrativos, contratos de compra e venda, promessas, cessão de posição contratual, arrendamentos civil e comercial, constituição de direito de superfície, constituição de propriedade horizontal e registos, constituição de condomínio e contratos de fornecimento;",
        "Elaboração de diferentes memorandos, relacionados ao direito angolano;",
        "Constituição e transformação de sociedades comerciais;",
        "Elaboração de diferentes minutas de deliberações sociais, procurações e outros escritos comerciais;",
        "Elaboração de reclamações, recursos hierárquicos e recursos contenciosos."
      ],
      en: [
        "Drafting court pleadings, appeals, procedural motions, and courtroom advocacy across labor, civil, maritime, and debt recovery cases;",
        "Drafting commercial, civil, and administrative contracts, promissory agreements, assignments, leases, surface rights, horizontal property, and supply contracts;",
        "Authoring legal memoranda on Angolan law;",
        "Incorporation and corporate restructuring of commercial companies;",
        "Drafting corporate resolutions, powers of attorney, and governance documentation;",
        "Drafting administrative claims, hierarchical appeals, and contentious administrative appeals."
      ]
    },
    education: {
      pt: [
        "Faculdade de Direito da Universidade Agostinho Neto — Licenciatura em Direito, com especialização em Jurídico Civil (2010)",
        "CEJES – FDUAN — Pós Graduação em Direito e Gestão de Negócio de Petróleo e Gás (2022)"
      ],
      en: [
        "Faculty of Law, Universidade Agostinho Neto — Law Degree, Civil Legal specialization (2010)",
        "CEJES – FDUAN — Postgraduate in Oil & Gas Law and Business Management (2022)"
      ]
    }
  },

  // -------------------------------------------------------------
  // 2. ASSOCIADOS (Ordem Oficial da FBL Advogados)
  // -------------------------------------------------------------
  {
    id: "anacleta-cipriano",
    name: "Anacleta Cipriano",
    role: {
      pt: "Advogada Associada",
      en: "Associate Lawyer"
    },
    category: "associates",
    level: "associate",
    oaaNumber: "Cédula OAA n.º 613",
    email: "anacleta.cipriano@fbladvogados.com",
    phone: "+244 927 173 010",
    languages: ["Português", "Inglês"],
    initials: "AC",
    bio: {
      pt: "Advogada Associada na FBL Advogados com destacada intervenção em Direito Bancário, Financeiro, Societário e Comercial. Assessora instituições financeiras, emissões no mercado de capitais e operações de reestruturação empresarial em Angola.",
      en: "Associate Lawyer at FBL Advogados with distinguished practice in Banking, Finance, Corporate and Commercial Law. Advises financial institutions, capital markets issuances, and corporate debt restructurings in Angola."
    },
    education: {
      pt: [
        "Licenciatura em Direito pela Universidade Agostinho Neto",
        "Pós-Graduação em Direito Bancário e Mercado de Capitais",
        "Membro da Ordem dos Advogados de Angola"
      ],
      en: [
        "Law Degree, Universidade Agostinho Neto",
        "Postgraduate in Banking Law and Capital Markets",
        "Member of the Angolan Bar Association"
      ]
    },
    practiceAreaIds: ["banking-finance", "corporate-investment-competition"]
  },
  {
    id: "cecilia-mungongo",
    name: "Cecília Mungongo",
    role: {
      pt: "Advogada Associada",
      en: "Associate Lawyer"
    },
    category: "associates",
    level: "associate",
    oaaNumber: "Cédula OAA n.º 2169",
    email: "cecilia.mungongo@fbladvogados.com",
    phone: "+244 927 173 010",
    languages: ["Português", "Inglês"],
    initials: "CM",
    bio: {
      pt: "Cecilia Mungongo é associada da FBL Advogados, tendo a sua actividade profissional se centrado particularmente nas áreas de contencioso civil, contencioso penal e Direito Laboral.\n\nTem particular intervenção em processos de natureza penal, no âmbito de crimes contra pessoas singulares, propriedade e património em geral. Desenvolve também a sua actividade no âmbito da criminalidade económico-financeira, corrupção e branqueamento de capitais, em diversos sectores de actividade e indústrias.\n\nA sua prática em Direito Laboral tem-se desenvolvido particularmente na contratação, processos de conflito laboral, acidentes de trabalho e doenças profissionais, assim como no acompanhamento de processos disciplinares de natureza contra ordenacional e de contencioso judicial.\n\nConta ainda com uma vasta experiência em contencioso civil, com especial enfoque nas áreas do direito da família e menores, em matérias relacionadas com divórcio, regulação da autoridade paternal, cobrança de dívidas, responsabilidade civil.",
      en: "Cecilia Mungongo is an associate at FBL Advogados, with her professional practice centered particularly in Civil Litigation, Criminal Litigation, and Employment Law.\n\nShe has specialized intervention in criminal proceedings involving offenses against persons, property, and general assets. She also practices in white-collar crime, anti-corruption, and anti-money laundering across diverse industry sectors.\n\nHer Labor Law practice focuses on hiring, labor disputes, workplace accidents, occupational diseases, and disciplinary and judicial labor litigation.\n\nShe also has extensive experience in civil litigation, with a special emphasis on family and juvenile law, divorce, parental responsibility, debt collection, and civil liability."
    },
    practiceAreasCustom: {
      pt: ["Contencioso & Arbitragem", "Criminal e Compliance", "Laboral"],
      en: ["Litigation & Arbitration", "Criminal and Compliance", "Labor and Employment"]
    },
    practiceAreaIds: ["litigation-civil-commercial-arbitration", "criminal-litigation", "employment-labor"],
    experience: {
      pt: [
        "Assessoria na libertação de um cidadão português detido e preso preventivamente por alegada detenção de armas e munições proibidas, assim como armazenamento de armas não proibidas sujeitas a regulamentação;",
        "Assessoria a grupo português e angolano em um processo crime no qual são arguidos acusados de crimes relacionados com branqueamento de capitais, falsificação de documentos e infidelidade;",
        "Assessoria em várias empresas multinacionais em assuntos relacionados com direito do trabalho, cobrança de dívidas, contratos e crimes;",
        "Assessoria a empresas no sector segurador em matéria laboral, civil e criminal;",
        "Assessoria a uma empresa multinacional na indústria petrolífera no processo de convenção colectiva de trabalho;",
        "Assessoria a empresas do sector segurador na instrução de procedimentos disciplinares, em vários processos de acidentes de trabalho e doenças profissionais, em processos relacionados com a celebração, execução e cessação de contratos de parceria."
      ],
      en: [
        "Advisory in the release of a Portuguese citizen held in preventive detention for alleged firearm regulatory violations;",
        "Counsel to a Portuguese and Angolan corporate group in criminal proceedings involving allegations of money laundering, forgery, and breach of trust;",
        "Advising multiple multinational enterprises on employment law, debt recovery, contracts, and penal defense;",
        "Advising insurance sector companies on labor, civil, and criminal proceedings;",
        "Advising a multinational petroleum corporation on a collective bargaining agreement;",
        "Advising insurance sector corporations on disciplinary proceedings, occupational disease claims, and partnership contract execution and termination."
      ]
    },
    education: {
      pt: [
        "Faculdade de Direito da Universidade Católica de Angola — Licenciatura em Direito (2014)",
        "Universidade Agostinho Neto — Curso de extensão universitária sobre a reforma do Código de Processo Penal Angolano",
        "Associação Académica de Direito da Universidade Lusófona — Curso Breve de Direito Penal Económico",
        "Faculdade de Direito da Universidade de Lisboa — Curso avançado sobre Divórcio, Inventário e Partilha"
      ],
      en: [
        "Faculty of Law, Universidade Católica de Angola — Law Degree (2014)",
        "Universidade Agostinho Neto — University Extension Course on the Reform of the Angolan Criminal Procedure Code",
        "Universidade Lusófona Academic Association of Law — Intensive Course in Economic Criminal Law",
        "Faculty of Law, Universidade de Lisboa — Advanced Course on Divorce, Inventory, and Estate Division"
      ]
    }
  },
  {
    id: "jessica-ribeiro",
    name: "Jéssica Ribeiro",
    role: {
      pt: "Advogada Associada",
      en: "Associate Lawyer"
    },
    category: "associates",
    level: "associate",
    oaaNumber: "Cédula OAA n.º 3746",
    email: "jessica.ribeiro@fbladvogados.com",
    phone: "+244 927 173 010",
    languages: ["Português", "Inglês"],
    initials: "JR",
    bio: {
      pt: "Jéssica Ribeiro é Associada da FBL Advogados desde 2025, trabalhando essencialmente com contencioso, com foco, no direito laboral, penal, administrativo, imobiliário, fiscal, societário, direitos reais, direito da família e demais áreas do direito civil.\n\nTem particular intervenção em assuntos relacionados com regularização de imóveis, processos de dissolução de sociedades, por insolvência, bem como, a tramitação de todo o processo de extinção da relação laboral.\n\nConta ainda com alguma experiência em processo de licenciamento ambiental e concessões para agricultura.\n\nEstá inscrita na ordem dos Advogados de Angola.",
      en: "Jéssica Ribeiro has been an Associate at FBL Advogados since 2025, working primarily in litigation with a focus on labor, criminal, administrative, real estate, tax, corporate, property rights, family, and civil law.\n\nShe has specialized intervention in property regularization, corporate dissolutions through insolvency, and employment relationship terminations.\n\nShe also possesses experience in environmental licensing and agricultural land concessions.\n\nShe is registered with the Angolan Bar Association."
    },
    practiceAreasCustom: {
      pt: ["Contencioso & Arbitragem"],
      en: ["Litigation & Arbitration"]
    },
    practiceAreaIds: ["litigation-civil-commercial-arbitration"],
    education: {
      pt: [
        "Faculdade de Direito da Universidade Metodista de Angola — Licenciatura em Direito (2014)"
      ],
      en: [
        "Faculty of Law, Universidade Metodista de Angola — Law Degree (2014)"
      ]
    }
  },
  {
    id: "eugenio-vinevala",
    name: "Eugénio Vinevala",
    role: {
      pt: "Advogado Associado",
      en: "Associate Lawyer"
    },
    category: "associates",
    level: "associate",
    oaaNumber: "Cédula OAA n.º 1879",
    email: "eugenio.vinevala@fbladvogados.com",
    phone: "+244 927 173 010",
    languages: ["Português", "Inglês"],
    initials: "EV",
    bio: {
      pt: "Eugénio Vinevala é associado da FBL Advogados, tendo a sua actividade profissional se centrado particularmente nas áreas do Direito Laboral e de contencioso civil e penal, bem como Direito Societário, Comercial e Investimento Privado.\n\nTem particular intervenção em questões de Direito Laboral, com especial relevância na condução de processos de cessação do contrato de trabalho (despedimentos coletivos e de extinção do posto de trabalho). Conta ainda com experiência em todos os tipos de contencioso jurisdicional e contraordenacional laboral e de contencioso diverso, com reflexo nas relações de trabalho.\n\nConta também com experiência na assessoria a clientes nacionais e estrangeiros em litígios de natureza civil e comercial relacionados com incumprimentos contratuais, responsabilidade civil e recuperação de crédito.\n\nA sua prática no Direito Societário desenvolve-se particularmente na assessoria em transações do sector financeiro, da saúde e investimento imobiliário.",
      en: "Eugénio Vinevala is an associate at FBL Advogados, with his professional practice centered particularly on Labor Law and Civil & Criminal Litigation, as well as Corporate, Commercial, and Private Investment Law.\n\nHe has specialized experience in Labor Law, particularly in employment termination proceedings (collective redundancies and job extinguishment). He handles contentious and regulatory labor disputes before all jurisdictions.\n\nHe also advises domestic and international clients on civil and commercial litigation involving contract breaches, civil liability, and credit recovery.\n\nHis Corporate Law practice focuses on transactions across financial, healthcare, and real estate investment sectors."
    },
    practiceAreasCustom: {
      pt: ["Laboral", "Contencioso & Arbitragem", "Societário, Comercial, M&A e Investimento Privado"],
      en: ["Labor and Employment", "Litigation & Arbitration", "Corporate, Commercial, M&A and Private Investment"]
    },
    practiceAreaIds: ["employment-labor", "litigation-civil-commercial-arbitration", "corporate-investment-competition"],
    experience: {
      pt: [
        "Assessoria a empresas nacionais e multinacionais do sector petrolífero e da construção em negociações colectivas de trabalho;",
        "Assessoria jurídico laboral a várias empresas nacionais e internacionais em diversos sectores, acompanhamento de despedimentos colectivos, elaboração de regulamentos internos, contratos de trabalho e código de ética e deontologia e conduta profissional;",
        "Assessoria a clientes nacionais e multinacionais em processos judiciais civis e criminais de elevada complexidade;",
        "Assessoria a empresa multinacional, portuguesa do sector da indústria alimentar, nos processos de reclamações administrativas e recursos hierárquicos contra autoridades angolanas;",
        "Assistência corrente a empresas do sector bancário e de seguros na recuperação de créditos;",
        "Assessoria a empresas dos sectores bancário e seguros no processo de fusão e regularização de activos;",
        "Assessoria a empresa multinacional do sector bancário, no processo de regularização dos documentos necessários a implementação do projecto de investimento que visa a construção de hospital universitário, bem como a construção do primeiro centro nacional de medicina desportiva."
      ],
      en: [
        "Counsel to national and multinational companies in the oil and construction sectors on collective labor negotiations;",
        "Labor legal counsel to domestic and international corporations, overseeing collective dismissals, internal regulations, employment contracts, and codes of ethics;",
        "Advising domestic and multinational clients in high-complexity civil and criminal court proceedings;",
        "Counsel to a Portuguese multinational food company in administrative claims and hierarchical appeals before Angolan authorities;",
        "Ongoing assistance to banking and insurance corporations in debt and credit recovery;",
        "Counsel to banking and insurance institutions on merger operations and asset regularization;",
        "Advisory to a multinational banking institution in regulatory compliance for an investment project constructing a university hospital and the first national sports medicine center."
      ]
    },
    education: {
      pt: [
        "Faculdade de Ciências Jurídicas e Políticas da Universidade Gregório Semedo — Licenciatura em Direito (2012)"
      ],
      en: [
        "Faculty of Legal and Political Sciences, Universidade Gregório Semedo — Law Degree (2012)"
      ]
    }
  },
  {
    id: "miguel-cassopa",
    name: "Miguel Cassopa",
    role: {
      pt: "Advogado Associado",
      en: "Associate Lawyer"
    },
    category: "associates",
    level: "associate",
    oaaNumber: "Cédula OAA n.º 3984",
    email: "miguel.cassopa@fbladvogados.com",
    phone: "+244 927 173 010",
    languages: ["Português", "Inglês"],
    initials: "MC",
    bio: {
      pt: "Miguel Cassopa é associado da FBL Advogados, tendo a sua actividade profissional se centrado particularmente nas áreas de contencioso civil e administrativo, bem como em cobrança, com incidência na recuperação de créditos.\n\nTem particular intervenção na resolução de litígios, assessorando diversos clientes, nacionais e internacionais, tanto na fase extrajudicial, quanto na fase judicial, assim como na representação de clientes nas várias instâncias.\n\nConta também com experiência no acompanhamento de acções judicias em todas as fases da sua tramitação processual, participando frequentemente em diligências judiciais, designadamente, audiências preparatórias, inquirição e audiências de discussão e julgamento.\n\nA sua prática tem sido desenvolvida essencialmente nos sectores bancário, industrial, engenharia e construção civil.",
      en: "Miguel Cassopa is an associate at FBL Advogados, with his professional practice centered particularly on civil and administrative litigation, as well as collections with emphasis on debt recovery.\n\nHe intervenes in dispute resolution, advising domestic and international clients extrajudicially and judicially, and representing clients before various court instances.\n\nHe possesses deep experience monitoring court actions at all stages, frequently participating in preparatory hearings, witness depositions, and trial hearings.\n\nHis practice has been developed primarily in banking, industry, engineering, and civil construction sectors."
    },
    practiceAreasCustom: {
      pt: ["Contencioso & Arbitragem", "Administrativo e Fiscal"],
      en: ["Litigation & Arbitration", "Administrative and Tax"]
    },
    practiceAreaIds: ["litigation-civil-commercial-arbitration", "administrative-tax"],
    experience: {
      pt: [
        "Assessoria a empresa internacional que actua no sector de engenharia de construção civil, patrocinando acções judiciais que são movidas por ela ou contra a mesma em matéria civil;",
        "Representação judicial e assessoria jurídica a uma empresa nacional do sector industrial de relevo nacional em diversos processos laborais e criminais;",
        "Representação judicial e assessoria jurídica permanente a empresa internacional no âmbito do direito de marcas;",
        "Representação judicial e assessorial jurídica a grande instituição bancária na área de recuperação de crédito;",
        "Assessoria permanente a Instituto Público, vocacionado à área de formação e do emprego, com a responsabilidade de elaboração e acompanhamento do procedimento da contratação pública;",
        "Assessoria permanente a Administração Local em processos relacionados a direitos fundiários, bem como à Comissões de Moradores."
      ],
      en: [
        "Counsel to an international civil engineering corporation, representing it in civil actions brought by or against it;",
        "Judicial representation and legal counsel to a major national industrial company across diverse labor and criminal proceedings;",
        "Ongoing court advocacy and legal counsel to an international corporation in trademark law;",
        "Court representation and legal advisory to a major banking institution in credit recovery;",
        "Permanent advisory to a Public Institute focused on vocational training and employment, overseeing public procurement procedures;",
        "Ongoing legal advisory to Local Administration on land rights and residents' commissions."
      ]
    },
    education: {
      pt: [
        "Universidade Católica de Angola — Licenciatura em Direito (2016)",
        "Faculdade de Direito da Universidade Agostinho Neto — Pós-graduação em Direito das Sociedades Comerciais (2022)"
      ],
      en: [
        "Universidade Católica de Angola — Law Degree (2016)",
        "Faculty of Law, Universidade Agostinho Neto — Postgraduate in Commercial Corporate Law (2022)"
      ]
    }
  },
  {
    id: "arlindo-oliveira",
    name: "Arlindo Oliveira",
    role: {
      pt: "Advogado Associado",
      en: "Associate Lawyer"
    },
    category: "associates",
    level: "associate",
    oaaNumber: "Cédula OAA n.º 5134",
    email: "arlindo.oliveira@fbladvogados.com",
    phone: "+244 927 173 010",
    languages: ["Português", "Inglês"],
    initials: "AO",
    bio: {
      pt: "Arlindo Oliveira é associado da FBL Advogados, tendo a sua actividade profissional se centrado particularmente nas áreas de contencioso civil e do Direito Societário e Comercial.\n\nTem particular intervenção na assessoria a diversas sociedades e clientes individuais em operações de constituição, dissolução e todas as demais alterações de sociedades comerciais com sede em Angola, bem como na participação de preparação de peças processuais.\n\nArlindo Oliveira encontra-se inscrito na Ordem dos Advogados de Angola e o seu percurso académico inclui uma Pós-Graduação em Compliance e Combate ao Branqueamento de Capitais pela Universidade Agostinho Neto.",
      en: "Arlindo Oliveira is an associate at FBL Advogados, with his professional practice focused particularly in the areas of civil litigation and Corporate and Commercial Law.\n\nHe has specialized experience advising diverse companies and individual clients in incorporation, dissolution, and corporate amendments for companies headquartered in Angola, as well as participating in the drafting of procedural court filings.\n\nArlindo Oliveira is registered with the Angolan Bar Association and his academic background includes a Postgraduate Degree in Compliance and Anti-Money Laundering from Universidade Agostinho Neto."
    },
    practiceAreasCustom: {
      pt: ["Societário, Comercial, M&A e Investimento Privado", "Contencioso & Arbitragem"],
      en: ["Corporate, Commercial, M&A and Private Investment", "Litigation & Arbitration"]
    },
    practiceAreaIds: ["corporate-investment-competition", "litigation-civil-commercial-arbitration"],
    experience: {
      pt: [
        "Assessoria a sociedades nacionais para a elaboração de todos os documentos que constituem um procedimento disciplinar e participação na respectiva entrevista disciplinar;",
        "Assistência a empresa líder na produção de latas em Angola, em processo de aumento do capital social e transmissão de participações sociais."
      ],
      en: [
        "Advising domestic companies on the drafting of all documentation forming a disciplinary proceeding and participating in the respective disciplinary interview;",
        "Assisting a market-leading can-manufacturing company in Angola in share capital increase and share transfer transactions."
      ]
    },
    education: {
      pt: [
        "Universidade Independente de Angola — Licenciatura em Direito (2019)",
        "Universidade Agostinho Neto — Pós-graduação em Compliance e Combate ao Branqueamento de Capitais (2022)"
      ],
      en: [
        "Universidade Independente de Angola — Law Degree (2019)",
        "Universidade Agostinho Neto — Postgraduate Degree in Compliance and Anti-Money Laundering (2022)"
      ]
    }
  },
  {
    id: "eloisa-soares",
    name: "Eloisa Soares",
    role: {
      pt: "Associada Júnior",
      en: "Junior Associate"
    },
    category: "associates",
    level: "associate",
    oaaNumber: "Cédula OAA n.º 6325",
    email: "eloisa.soares@fbladvogados.com",
    phone: "+244 927 173 010",
    languages: ["Português", "Inglês"],
    initials: "ES",
    bio: {
      pt: "Eloisa Soares é associada júnior da FBL Advogados, tendo a sua actividade profissional se centrado particularmente nas áreas do Direito Societário e Comercial, assim como do Direito Laboral.\n\nTem particular intervenção na assessoria a empresas em alterações societárias, instauração de procedimentos disciplinares e emissão de pareceres sobre diversos temas laborais e societários.\n\nEloisa Soares encontra-se inscrita na Ordem dos Advogados de Angola.",
      en: "Eloisa Soares is a junior associate at FBL Advogados, with her professional practice centered particularly on Corporate and Commercial Law, as well as Labor Law.\n\nShe has specialized intervention in advising corporations on corporate charter amendments, disciplinary proceedings, and issuing legal opinions on labor and corporate matters.\n\nEloisa Soares is registered with the Angolan Bar Association."
    },
    practiceAreasCustom: {
      pt: ["Societário, Comercial, M&A e Investimento Privado", "Laboral"],
      en: ["Corporate, Commercial, M&A and Private Investment", "Labor and Employment"]
    },
    practiceAreaIds: ["corporate-investment-competition", "employment-labor"],
    experience: {
      pt: [
        "Assessoria a sociedades nacionais de diversos sectores para a alteração do seu pacto social, transformação e dissolução das sociedades;",
        "Assessoria a sociedades nacionais para a elaboração de todos os documentos que constituem um procedimento disciplinar e participação na respectiva entrevista disciplinar."
      ],
      en: [
        "Counsel to domestic companies across diverse sectors on amending articles of association, corporate conversions, and dissolutions;",
        "Counsel to domestic companies on drafting all documentation for disciplinary proceedings and participating in disciplinary interviews."
      ]
    },
    education: {
      pt: [
        "Universidade Católica de Angola — Licenciatura em Direito, na especialidade Jurídico-Económicas (2019)",
        "Faculdade de Direito da Universidade Agostinho Neto — Curso de extensão universitária em Direito Aduaneiro (2021)"
      ],
      en: [
        "Universidade Católica de Angola — Law Degree, Legal-Economic specialization (2019)",
        "Faculty of Law, Universidade Agostinho Neto — University Extension Course in Customs Law (2021)"
      ]
    }
  },
  {
    id: "elsa-matos",
    name: "Elsa Matos",
    role: {
      pt: "Advogada Associada",
      en: "Associate Lawyer"
    },
    category: "associates",
    level: "associate",
    oaaNumber: "Cédula OAA n.º 7454",
    email: "elsa.matos@fbladvogados.com",
    phone: "+244 927 173 010",
    languages: ["Português", "Inglês"],
    initials: "EM",
    bio: {
      pt: "Elsa Matos é associada da FBL Advogados, tendo a sua actividade profissional se centrado particularmente nas áreas de Contencioso Fiscal e Aduaneiro, Direito Administrativo, Laboral e Societário, bem como particular intervenção em questões relacionadas com a Dupla Tributação Internacional.\n\nTem particular intervenção na assessoria a diversas sociedades e clientes individuais em processos de impugnação de actos tributários e administrativos, bem como em processos de constituição e registo de associações. Presta igualmente assessoria na elaboração de memorandos sobre os mais variados temas de Direito.\n\nElsa Matos encontra-se inscrita na Ordem dos Advogados de Angola. O seu percurso académico inclui uma Licenciatura em Direito pela Faculdade de Direito da Universidade Lusófona e um Mestrado em Direito e Prática Jurídica, com especialidade em Direito Financeiro e Fiscal, pela Faculdade de Direito da Universidade de Lisboa.",
      en: "Elsa Matos is an associate at FBL Advogados, with her professional practice centered particularly on Tax and Customs Litigation, Administrative, Employment, and Corporate Law, as well as specific intervention in matters relating to International Double Taxation.\n\nShe has particular involvement in advising corporate and individual clients in proceedings challenging tax and administrative acts, as well as in incorporation and association registration procedures. She also provides counsel in preparing legal memorandums on diverse legal topics.\n\nElsa Matos is admitted to the Angolan Bar Association. Her academic background includes a Law Degree from the Faculty of Law of Universidade Lusófona and a Master's Degree in Law and Legal Practice, specializing in Financial and Tax Law, from the Faculty of Law of the University of Lisbon."
    },
    education: {
      pt: [
        "Faculdade de Direito da Universidade Lusófona (Lisboa) — Licenciatura em Direito (2019)",
        "Faculdade de Direito da Universidade de Lisboa — Mestrado em Direito e Prática Jurídica, com especialidade em Direito Financeiro e Fiscal (2023)"
      ],
      en: [
        "Faculty of Law of Universidade Lusófona (Lisbon) — Law Degree (2019)",
        "Faculty of Law of the University of Lisbon — Master's Degree in Law and Legal Practice, specializing in Financial and Tax Law (2023)"
      ]
    },
    experience: {
      pt: [
        "Assessoria em processos de impugnação de actos tributários e administrativos",
        "Assessoria em processos de constituição de sociedades e registo de associações",
        "Assessoria na elaboração de pareceres sobre diversos temas de Direito"
      ],
      en: [
        "Counsel in proceedings challenging tax and administrative acts",
        "Counsel in company incorporation and association registration procedures",
        "Drafting legal opinions across diverse areas of law"
      ]
    },
    practiceAreaIds: ["administrative-tax", "employment-labor", "corporate-investment-competition"],
    practiceAreasCustom: {
      pt: ["Contencioso Fiscal e Aduaneiro", "Direito Administrativo", "Direito Laboral", "Direito Societário", "Dupla Tributação Internacional"],
      en: ["Tax & Customs Litigation", "Administrative Law", "Labor Law", "Corporate Law", "International Double Taxation"]
    }
  },
  {
    id: "elisandra-albano",
    name: "Elisandra Albano",
    role: {
      pt: "Advogada Associada",
      en: "Associate Lawyer"
    },
    category: "associates",
    level: "associate",
    oaaNumber: "Cédula OAA n.º 7861",
    email: "elisandra.albano@fbladvogados.com",
    phone: "+244 927 173 010",
    languages: ["Português", "Inglês"],
    initials: "EA",
    bio: {
      pt: "Elisandra Albano é associada da FBL Advogados, tendo a sua actividade profissional se centrado particularmente nas áreas do Direito Laboral, Contencioso Civil assim como Societário e Comercial.\n\nTem particular intervenção em instrução e tramitação de procedimentos disciplinares, elaboração, revisão e análise de contratos de trabalho, assessoria jurídica a diversas sociedades comerciais, elaboração de peças processuais e acompanhamento de processos judiciais.\n\nElisandra, encontra-se inscrita na Ordem dos Advogados de Angola e o seu percurso académico inclui uma pós-graduação em Direito Societário e Fiscal das empresas pela Faculdade de Direito da Universidade de Lisboa.",
      en: "Elisandra Albano is an associate at FBL Advogados, with her professional practice centered particularly on Labor Law, Civil Litigation, as well as Corporate and Commercial Law.\n\nShe has specialized intervention in conducting and managing disciplinary proceedings, drafting, reviewing, and analyzing employment contracts, providing legal counsel to commercial companies, drafting procedural pleadings, and monitoring court proceedings.\n\nElisandra is admitted to the Angolan Bar Association and her academic background includes a Postgraduate Degree in Corporate and Tax Law from the Faculty of Law of the University of Lisbon."
    },
    education: {
      pt: [
        "Open Society Africa — Curso sobre o Sistema Regional e Internacional dos Direitos Humanos (2023)",
        "O.A.A - Centro de Estudo e Formação — Curso-Introdução à Auditoria Jurídica, Auditoria Jurídica Fiscal, Auditoria Jurídica Societária e Auditoria Jurídica Laboral (2023)",
        "Faculdade de Direito da Universidade de Lisboa em colaboração com o Centro Académico Digital de Angola — Pós-Graduação em Direito Angolano: Direito Societário e Direito Fiscal da Empresa (2023)",
        "Universidade Católica de Angola — Licenciatura em Direito, na especialidade Jurídico-Económicas (2022)"
      ],
      en: [
        "Open Society Africa — Course on the Regional and International Human Rights System (2023)",
        "O.A.A - Study and Training Center — Course on Introduction to Legal Auditing, Tax Legal Auditing, Corporate Legal Auditing, and Labor Legal Auditing (2023)",
        "Faculty of Law of the University of Lisbon in collaboration with Centro Académico Digital de Angola — Postgraduate Degree in Angolan Law: Corporate Law and Corporate Tax Law (2023)",
        "Catholic University of Angola — Law Degree, Legal-Economic specialization (2022)"
      ]
    },
    experience: {
      pt: [
        "Assessoria jurídica a empresas nacionais, com particular intervenção na instrução e tramitação de procedimentos disciplinares",
        "Elaboração de pareceres jurídicos em diversas áreas",
        "Elaboração e revisão de contratos de trabalho e acompanhamento de questões jurídico-laborais",
        "Elaboração de peças processuais e acompanhamento de processos judiciais"
      ],
      en: [
        "Legal counsel to national companies, with particular intervention in conducting and managing disciplinary proceedings",
        "Preparation of legal opinions across diverse practice areas",
        "Drafting and reviewing employment contracts and monitoring labor law matters",
        "Preparation of procedural pleadings and monitoring judicial proceedings"
      ]
    },
    practiceAreaIds: ["employment-labor", "litigation-civil-commercial-arbitration", "corporate-investment-competition"],
    practiceAreasCustom: {
      pt: ["Direito Laboral", "Contencioso Civil", "Societário e Comercial"],
      en: ["Labor Law", "Civil Litigation", "Corporate and Commercial"]
    }
  },

  // -------------------------------------------------------------
  // 3. ADVOGADOS ESTAGIÁRIOS
  // -------------------------------------------------------------
  {
    id: "helia-sousa",
    name: "Hélia Sousa",
    role: {
      pt: "Advogada Estagiária",
      en: "Trainee Lawyer"
    },
    category: "interns",
    level: "intern",
    email: "helia.sousa@fbladvogados.com",
    phone: "+244 927 173 010",
    languages: ["Português", "Inglês"],
    initials: "HS",
    bio: {
      pt: "Hélia Sousa é Advogada Estagiária da FBL Advogados, tendo a sua actividade profissional incidido particularmente nas áreas de Contencioso Civil e Fiscal, Direito Societário e Comercial, Direito Laboral, Direito da Família, Direito da Propriedade Intelectual e Arbitragem.\n\nTem particular intervenção na assessoria jurídica a sociedades nacionais e estrangeiras, nomeadamente na elaboração de pareceres e memorandos jurídicos, análise e revisão de contratos, preparação de peças processuais e acompanhamento de questões de natureza societária, laboral, fiscal e civil. Presta igualmente assessoria na instrução de procedimentos disciplinares a diversas empresas.\n\nActualmente, também exerce a função de Professora Assistente Estagiária na Faculdade de Direito da Universidade Católica de Angola, desde o ano de 2024, e aguarda pela sua inscrição definitiva na Ordem dos Advogados de Angola. O seu percurso académico inclui uma Licenciatura em Direito pela Universidade Católica de Angola, na especialidade jurídico-económica.",
      en: "Hélia Sousa is a trainee lawyer at FBL Advogados, with her professional practice centered particularly on Civil and Tax Litigation, Corporate and Commercial Law, Labor Law, Family Law, Intellectual Property, and Arbitration.\n\nShe has particular involvement in providing legal advice to national and foreign companies, including drafting legal opinions and memorandums, analyzing and revising contracts, preparing procedural briefs, and assisting on corporate, labor, tax, and civil issues. She also advises on disciplinary proceedings for various companies.\n\nCurrently, she also serves as a Trainee Assistant Lecturer at the Faculty of Law of the Catholic University of Angola since 2024, and awaits definitive registration with the Angolan Bar Association. Her academic background includes a Law Degree from the Catholic University of Angola, specializing in Legal-Economic studies."
    },
    education: {
      pt: [
        "Universidade Católica de Angola — Licenciatura em Direito, especialidade jurídico-económica (2019–2024)"
      ],
      en: [
        "Catholic University of Angola — Law Degree, Legal-Economic specialty (2019–2024)"
      ]
    },
    experience: {
      pt: [
        "Assessoria em processos judiciais de natureza cível, laboral e fiscal",
        "Assessoria jurídica a sociedades nacionais e estrangeiras em matérias de Direito Societário e Comercial, nomeadamente, alterações e dissoluções de sociedades",
        "Assessoria em matérias de Direito da Propriedade Intelectual, em registos de marcas",
        "Assessoria em matérias de Direito Laboral, instrução de procedimentos disciplinares, análise de contratos de trabalho e questões relacionadas com a cessação e suspensão da relação laboral",
        "Assessoria em Direito da Arbitragem, em constituição de Tribunais Arbitrais"
      ],
      en: [
        "Counsel in judicial proceedings of a civil, labor, and tax nature",
        "Legal advice to national and foreign companies on Corporate and Commercial Law, notably corporate amendments and dissolutions",
        "Counsel in Intellectual Property matters, trademark registrations",
        "Counsel in Labor Law matters, conducting disciplinary proceedings, employment contract reviews, and termination/suspension matters",
        "Counsel in Arbitration Law, establishment of Arbitral Tribunals"
      ]
    },
    practiceAreaIds: ["litigation-civil-commercial-arbitration", "administrative-tax", "corporate-investment-competition", "employment-labor"],
    practiceAreasCustom: {
      pt: ["Contencioso Civil e Fiscal", "Direito Societário e Comercial", "Direito Laboral", "Propriedade Intelectual", "Arbitragem"],
      en: ["Civil & Tax Litigation", "Corporate & Commercial Law", "Labor Law", "Intellectual Property", "Arbitration"]
    }
  },
  {
    id: "shelsia-guimaraes",
    name: "Shelsia Guimarães",
    role: {
      pt: "Advogada Estagiária",
      en: "Trainee Lawyer"
    },
    category: "interns",
    level: "intern",
    email: "shelsia.guimaraes@fbladvogados.com",
    phone: "+244 927 173 010",
    languages: ["Português", "Inglês"],
    initials: "SG",
    bio: {
      pt: "Shelsia Guimarães é advogada estagiária da FBL Advogados, tendo a sua actividade profissional incidido particularmente nas áreas de Contencioso Fiscal e Aduaneiro, Direito Societário e Comercial, Direito Laboral, Contencioso Civil, Direito Penal e Direito Financeiro.\n\nTem particular intervenção na assessoria jurídica a sociedades nacionais e estrangeiras, nomeadamente na elaboração de pareceres e memorandos jurídicos, análise e revisão de contratos, preparação de peças processuais e acompanhamento de questões de natureza societária, laboral, penal e financeira. Presta igualmente assessoria em variados temas de Direito.\n\nShelsia Guimarães encontra-se inscrita na Ordem dos Advogados de Angola. O seu percurso académico inclui uma Licenciatura em Direito pela Universidade Católica de Angola, com especialidade Jurídico-Forense.",
      en: "Shelsia Guimarães is a trainee lawyer at FBL Advogados, with her professional activity focusing particularly on Tax and Customs Litigation, Corporate and Commercial Law, Labor Law, Civil Litigation, Criminal Law, and Financial Law.\n\nShe has particular involvement in providing legal assistance to national and foreign companies, including preparing legal opinions and memorandums, reviewing contracts, drafting procedural pleadings, and monitoring corporate, labor, criminal, and financial matters. She also provides counsel on varied legal issues.\n\nShelsia Guimarães is admitted to the Angolan Bar Association. Her academic background includes a Law Degree from the Catholic University of Angola, specializing in Forensic Legal Practice."
    },
    education: {
      pt: [
        "Universidade Católica de Angola — Licenciatura em Direito, especialidade Jurídico-Forense (2020–2025)",
        "Centro de Direitos Humanos da Universidade Católica de Angola — Formação em Prática Processual Jurídico-Forense (2024)"
      ],
      en: [
        "Catholic University of Angola — Law Degree, Forensic Legal specialty (2020–2025)",
        "Human Rights Center of the Catholic University of Angola — Training in Forensic Procedural Practice (2024)"
      ]
    },
    experience: {
      pt: [
        "Assessoria em processos judiciais de natureza fiscal, penal, laboral e cível",
        "Assessoria jurídica a sociedades nacionais e estrangeiras em matérias de Direito Societário e Comercial",
        "Assessoria em matérias de Direito Financeiro, incluindo operações de financiamento",
        "Assessoria em matérias de Direito Laboral, incluindo acompanhamento de processos disciplinares, análise de contratos de trabalho e questões relacionadas com a cessação e suspensão da relação laboral"
      ],
      en: [
        "Counsel in judicial proceedings of a tax, criminal, labor, and civil nature",
        "Legal advice to national and foreign companies in Corporate and Commercial Law matters",
        "Counsel in Financial Law matters, including financing operations",
        "Counsel in Labor Law matters, including disciplinary proceedings, employment contract reviews, and issues concerning termination or suspension of employment relationships"
      ]
    },
    practiceAreaIds: ["administrative-tax", "corporate-investment-competition", "employment-labor", "litigation-civil-commercial-arbitration", "criminal-litigation", "banking-finance"],
    practiceAreasCustom: {
      pt: ["Contencioso Fiscal e Aduaneiro", "Direito Societário e Comercial", "Direito Laboral", "Contencioso Civil", "Direito Penal", "Direito Financeiro"],
      en: ["Tax & Customs Litigation", "Corporate & Commercial Law", "Labor Law", "Civil Litigation", "Criminal Law", "Financial Law"]
    }
  },
  {
    id: "erica-ferreira",
    name: "Érica Ferreira",
    role: {
      pt: "Advogada Estagiária",
      en: "Trainee Lawyer"
    },
    category: "interns",
    level: "intern",
    email: "erica.ferreira@fbladvogados.com",
    phone: "+244 927 173 010",
    languages: ["Português", "Inglês"],
    initials: "EF",
    bio: {
      pt: "Erica Ferreira é advogada estagiária da FBL Advogados, desenvolvendo a sua actividade profissional predominantemente nas áreas de Contencioso Civil e Laboral, com particular enfoque na assessoria jurídica a empresas em matéria de Direito do Trabalho.\n\nA sua prática profissional inclui o acompanhamento e a assessoria em processos judiciais de natureza civil e laboral, bem como a prestação de assessoria jurídica a diversas sociedades em questões relacionadas com as relações laborais, nomeadamente na interpretação e aplicação da legislação laboral, elaboração e revisão de documentos de natureza laboral e apoio na gestão de matérias decorrentes da relação entre empregadores e trabalhadores.\n\nPresta igualmente assessoria na elaboração de pareceres, memorandos e outros documentos jurídicos sobre diversas matérias de Direito. Actualmente, tem vindo a aprofundar a sua experiência na área de Direito Societário, nomeadamente no acompanhamento de matérias relacionadas com a dissolução de sociedades.\n\nErica Ferreira aguarda a sua inscrição na Ordem dos Advogados de Angola. O seu percurso académico inclui uma Licenciatura em Direito pela Faculdade de Direito da Universidade Metodista de Angola, na especialidade de Ciências Jurídico-Económicas.",
      en: "Erica Ferreira is a trainee lawyer at FBL Advogados, developing her professional activity predominantly in the areas of Civil and Labor Litigation, with a particular focus on legal counsel to companies in Employment Law.\n\nHer professional practice includes assisting and advising on civil and labor judicial proceedings, as well as providing legal advice to various companies on employment relations, namely the interpretation and application of labor legislation, drafting and reviewing labor documents, and supporting the management of matters arising from employer-employee relations.\n\nShe also provides counsel in drafting legal opinions, memorandums, and other legal documents on diverse matters of law. Currently, she has been expanding her experience in Corporate Law, specifically in matters concerning company dissolutions.\n\nErica Ferreira awaits registration with the Angolan Bar Association. Her academic background includes a Law Degree from the Faculty of Law of the Methodist University of Angola, specializing in Legal-Economic Sciences."
    },
    education: {
      pt: [
        "Faculdade de Direito da Universidade Metodista de Angola — Licenciatura em Direito, especialidade de Ciências Jurídico-Económicas (2025)"
      ],
      en: [
        "Faculty of Law of the Methodist University of Angola — Law Degree, Legal-Economic Sciences specialty (2025)"
      ]
    },
    experience: {
      pt: [
        "Acompanhamento e assessoria em processos de Contencioso Civil e Laboral",
        "Assessoria jurídica a empresas em matérias de Direito do Trabalho",
        "Assessoria em processos de habilitação de herdeiros",
        "Assessoria em processos de registo de marcas",
        "Elaboração de pareceres e memorandos jurídicos sobre diversas matérias de Direito",
        "Assessoria em matérias de Direito Societário, incluindo processos de dissolução de sociedades"
      ],
      en: [
        "Representation and counsel in Civil and Labor Litigation proceedings",
        "Legal advice to companies on Employment Law matters",
        "Counsel in inheritance and heirship qualification proceedings",
        "Counsel in trademark registration procedures",
        "Preparation of legal opinions and memorandums across various areas of law",
        "Counsel in Corporate Law, including company dissolution processes"
      ]
    },
    practiceAreaIds: ["litigation-civil-commercial-arbitration", "employment-labor", "corporate-investment-competition"],
    practiceAreasCustom: {
      pt: ["Contencioso Civil e Laboral", "Direito do Trabalho", "Direito Societário", "Propriedade Intelectual (Marcas)"],
      en: ["Civil & Labor Litigation", "Employment Law", "Corporate Law", "Intellectual Property (Trademarks)"]
    }
  }
];

export { NEWS_ITEMS } from './newsData';
export { NEWSLETTERS } from './newslettersData';

export const PUBLICATIONS: Publication[] = [
  {
    id: "pub-1",
    title: {
      pt: "Guia Prático do Investimento Privado em Angola: Oportunidades e Incentivos Fiscais",
      en: "Practical Guide to Private Investment in Angola: Opportunities & Tax Incentives"
    },
    summary: {
      pt: "Análise exaustiva da Lei do Investimento Privado (LIP) angolana e os benefícios fiscais atribuídos pelo regime contratual e de declaração prévia.",
      en: "Comprehensive analysis of the Angolan Private Investment Law (LIP) and tax incentives granted under contractual and prior-declaration regimes."
    },
    content: {
      pt: "O regime jurídico do investimento privado em Angola sofreu alterações profundas destinadas a desburocratizar a entrada de capital estrangeiro e fomentar a diversificação económica nacional. Neste artigo especial, a equipa da FBL analisa os mecanismos de repatriação de dividendos, a tramitação junto da AIPEX e os créditos fiscais em sede de Imposto Industrial concedidos nas zonas prioritárias de desenvolvimento (Zonas A, B, C e D).",
      en: "The legal framework for private investment in Angola has undergone major modernizations designed to cut red tape for foreign direct capital and drive national economic diversification. In this briefing, FBL's team examines dividend repatriation mechanisms, AIPEX expedited registration, and corporate tax credits across development priority zones (Zones A, B, C, and D)."
    },
    date: "14 Fevereiro 2024",
    category: {
      pt: "Investimento & Regulatório",
      en: "Investment & Regulatory"
    },
    author: "FBL",
    readTime: "6 min"
  },
  {
    id: "pub-2",
    title: {
      pt: "O Novo Regime Cambial do BNA para o Sector Petrolífero e Mineração",
      en: "BNA's New Foreign Exchange Regime for Oil & Gas and Mining Sectors"
    },
    summary: {
      pt: "Impactos das novas instruções e avisos do Banco Nacional de Angola nas contas de moeda estrangeira e liquidação de fornecedores internacionais.",
      en: "Key impacts of new Banco Nacional de Angola notices on foreign currency accounts and settlements for global contractors."
    },
    content: {
      pt: "As directivas do BNA têm introduzido maior flexibilidade cambial para as companhias operadoras e sociedades de serviços petrolíferos. O presente memorando detalha os procedimentos obrigatórios para a abertura e movimentação de contas off-shore e os limites de retenção cambial autorizados.",
      en: "Recent BNA notices introduce heightened forex operational flexibility for oil operators and service companies. This memo details mandatory procedures for offshore account management and allowable foreign currency retention thresholds."
    },
    date: "28 Janeiro 2024",
    category: {
      pt: "Bancário & Energia",
      en: "Banking & Energy"
    },
    author: "FBL",
    readTime: "8 min"
  },
  {
    id: "pub-3",
    title: {
      pt: "Arbitragem Comercial em Angola: Execução de Decisões Estrangeiras e o Papel do Tribunal Supremo",
      en: "Commercial Arbitration in Angola: Foreign Award Enforcement & Supreme Court Precedents"
    },
    summary: {
      pt: "Estudo sobre a aplicação da Convenção de Nova Iorque e a célere revisão de sentenças arbitrais estrangeiras em jurisdição angolana.",
      en: "Study on the application of the New York Convention and expedited recognition of foreign arbitral awards in Angolan jurisdiction."
    },
    content: {
      pt: "Com a adesão de Angola à Convenção de Nova Iorque de 1958, o país consolidou-se como uma jurisdição atrativa e segura para a arbitragem internacional. Analisamos os mais recentes acórdãos do Tribunal Supremo em matéria de homologação e ordem pública internacional.",
      en: "Following Angola's accession to the 1958 New York Convention, the country has reinforced its standing as an attractive and predictable jurisdiction for international arbitration. We analyze recent Supreme Court rulings on recognition and public policy exceptions."
    },
    date: "12 Janeiro 2024",
    category: {
      pt: "Contencioso & Arbitragem",
      en: "Litigation & Arbitration"
    },
    author: "FBL",
    readTime: "10 min"
  }
];

export const OFFICE_INFO = {
  name: "FBL Advogados — Sociedade de Advogados, RL",
  building: "Edifício Kitanda",
  address: "Rua Cirilo da Conceição Silva, n.º 12, 2.º andar",
  city: "Luanda, Angola",
  fullAddress: "Edifício Kitanda, Rua Cirilo da Conceição Silva, n.º 12, 2.º andar, Luanda, Angola",
  phones: [
    "+244 927 754 297",
    "+244 927 754 298",
    "+244 927 173 010"
  ],
  phone: "+244 927 754 297",
  email: "fbl@fbladvogados.com",
  schedule: "Segunda a Sexta-feira: 08:30 – 18:00 (GMT+1)",
  googleMapsName: "Edifício Kitanda",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Edif%C3%ADcio+Kitanda+Rua+Cirilo+da+Concei%C3%A7%C3%A3o+Silva+Luanda",
  coordinates: {
    lat: -8.8147,
    lng: 13.2302
  }
};

export const DEPARTMENT_CONTACTS: DepartmentContact[] = [
  {
    id: "secretariado",
    name: {
      pt: "Secretariado Geral & Recepção",
      en: "General Secretariat & Reception"
    },
    email: "secretariado@fbladvogados.com",
    description: {
      pt: "Atendimento geral, expediente forense, acolhimento institucional e agendamento de reuniões.",
      en: "General office inquiries, legal correspondence, client reception, and meeting scheduling."
    }
  },
  {
    id: "facturacao",
    name: {
      pt: "Departamento de Facturação",
      en: "Billing & Invoicing Department"
    },
    email: "facturacao.fbl@fbladvogados.com",
    description: {
      pt: "Emissão e processamento de facturas, notas de despesas, adiantamentos e consultas fiscais de clientes.",
      en: "Issuance of invoices, statement of fee disbursements, retainer notes, and tax query handling."
    }
  },
  {
    id: "cobranca",
    name: {
      pt: "Departamento de Cobrança",
      en: "Credit & Collections Department"
    },
    email: "cobranca.fbl@fbladvogados.com",
    description: {
      pt: "Acompanhamento de contas correntes, confirmação de recebimentos e reconciliação financeira de processos.",
      en: "Accounts receivable management, payment receipts confirmation, and financial account reconciliation."
    }
  },
  {
    id: "arquivo",
    name: {
      pt: "Arquivo Central & Gestão Documental",
      en: "Central Archives & Document Records"
    },
    email: "arquivo.fbl@fbladvogados.com",
    description: {
      pt: "Custódia de processos findos, arquivo físico e digital, certidões judiciais e pedidos de desentranhamento.",
      en: "Custody of closed case files, physical & digital archiving, court records, and certified copies."
    }
  }
];

export const ADMINISTRATIVE_TEAM: AdministrativeStaff[] = [
  {
    id: "eunice-guerra",
    name: "Eunice Guerra",
    role: {
      pt: "Apoio Administrativo & Gestão",
      en: "Administrative Management & Support"
    },
    email: "eunice.guerra@fbladvogados.com"
  },
  {
    id: "valdimiro-grao",
    name: "Valdimiro Grão",
    role: {
      pt: "Gestão Operacional & Apoio aos Serviços",
      en: "Operations & Administrative Services Support"
    },
    email: "valdimiro.grao@fbladvogados.com"
  },
  {
    id: "fabio-goncalves",
    name: "Fábio Gonçalves",
    role: {
      pt: "Serviços Técnicos & Suporte Operacional",
      en: "Technical Services & Operational Support"
    },
    email: "fabio.goncalves@fbladvogados.com"
  }
];

export const findTeamMemberByName = (name: string): TeamMember | undefined => {
  if (!name) return undefined;
  const normalize = (str: string) =>
    str
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/\b(dr[a]?\.|doutor[a]?)\s+/gi, '')
      .trim();

  const cleanTarget = normalize(name);
  return TEAM_MEMBERS.find((m) => {
    const cleanName = normalize(m.name);
    return cleanName === cleanTarget || cleanName.includes(cleanTarget) || cleanTarget.includes(cleanName);
  });
};
