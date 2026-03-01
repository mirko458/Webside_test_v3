export type ReferenceItem = { industry: string; location: string; title: string; skills: string };

﻿import type { Locale } from '@/lib/utils'

type Service = { title: string; description: string }
type Step = { title: string; text: string }
type ContentModel = {
  nav: { about: string; services: string; approach: string; references: string; contact: string }
  hero: { badge: string; title: string; subtitle: string; motto: string; primaryCta: string; secondaryCta: string }
  about: { title: string; lead: string; points: string[] }
  services: { title: string; intro: string; items: Service[] }
  approach: { title: string; intro: string; steps: Step[] }
  references: { title: string; intro: string; items: ReferenceItem[] }
  contact: { title: string; intro: string; name: string; email: string; message: string; cta: string; success: string; error: string }
  footer: { line: string; impressum: string; datenschutz: string }
}

export const content: Record<Locale, ContentModel> = {
  de: {
    nav: {
      about: 'Über mich',
      services: 'Leistungen',
      approach: 'Methodik',
      references: 'Referenzen',
      contact: 'Kontakt'
    },
    hero: {
      badge: 'Mirko Quintern – SAP PLM Solution Architect',
      title: 'Quintern PLM Consulting',
      subtitle:
        '20+ Jahre SAP PLM Erfahrung',
      motto: '„Wir sind überzeugt, dass echte Innovation dort entsteht, wo Komplexes einfach wird“',
      primaryCta: 'Jetzt anfragen',
      secondaryCta: 'Leistungen ansehen'
    },
    about: {
      title: 'Über mich',
      lead:
        'Als <strong class="font-bold text-foreground">SAP PLM Solution Architect</strong>, Applikationsberater und Entwickler biete ich profunde Expertise in anspruchsvollen SAP-Landschaften, um Fachbereich und IT optimal zu verbinden.',
      points: [
        '<strong class="font-bold text-foreground">20+ Jahre</strong> SAP PLM Erfahrung, inklusive 8 Jahre direkt bei SAP in Walldorf',
        '<strong class="font-bold text-foreground">Spezialisiert</strong> auf Analyse, Konzeption und Umsetzung komplexer Systemintegrationen im SAP PLM Umfeld.',
        '<strong class="font-bold text-foreground">Branchenkenntnisse:</strong> Automotive, Automotive Zulieferer, Maschinenbau, Anlagenbau, Medizintechnik, Telekommunikation, Software',
        '<strong class="font-bold text-foreground">Fachliche Kernkompetenzen:</strong> iPPE (Integriertes Produkt- und Prozess-Engineering), Freigabe- und Reiefgradmanagement, Änderungsmanagement, Materiastamm, Stücklisten, Stücklistensynchronisation via GSS (Guides Structure Synchronization), Dokumentenverwaltung',
        '<strong class="font-bold text-foreground">IT-Kernkompetenzen:</strong> ABAP OO, SAP UI5, Fiori, SAP PDMI, HANA CDS Views,ABAP Web Dynpro, Floor Plan Manager (FPM), Excel VBA, Open SQL, SAP Script, Smartforms',
        '<strong class="font-bold text-foreground">Fokus</strong>  auf nachhaltige Architekturen, saubere Implementierung und verlässlichen Betrieb',
      ]
    },
    services: {
      title: 'Leistungen',
      intro: 'Ganzheitliche Betreuung – von der fachlichen Analyse und Konzeption über die Softwarearchitektur bis hin zur technischen Umsetzung.',
      items: [
        {
          title: 'Applikationsberatung',
          description: 'Tiefgreifendes prozessuales Fachwissen in SAP PLM und den dazugehörigen Objekten und Anwendungen.'
        },
        {
          title: 'Solution Architektur',
          description: 'Design und Konzeption hochskalierbarer SAP PLM-Lösungen und Systemlandschaften.'
        },
        {
          title: 'Softwareentwicklung',
          description: 'Hochwertige Implementierungen mit ABAP OO, SAP UI5, Fiori und HANA CDS Views.'
        },
        {
          title: 'Systemintegration',
          description: 'Sichere Anbindung von Drittsystemen, inklusive PDM/PLM-Integrationen wie Dassault 3DX und Siemens Teamcenter.'
        }
      ]
    },
references: {
      title: 'Referenzen',
      intro: 'Auswahl relevanter Integrations- und Entwicklungsprojekte:',
      items: [
          {
                  industry: 'Automotive',
                  location: 'England, Gaydon',
                  title: 'Schnittstelle Dassault 3DX Delmia zu SAP Material, Classic BOM & iPPE',
                  skills: 'SAP PDMI, iPPE, BOM, Materialstamm, Änderungsdienst, ABAP OO'
          },
          {
                  industry: 'Automotive Zulieferer',
                  location: 'Friedrichshafen',
                  title: 'Einführung der SAP GSS für eine vollautomatisierte EBOM-zu-MBOM-Synchronisation aus Teamcenter',
                  skills: 'GSS, BOM, Änderungsdienst, ABAP OO, Web Dynpro'
          },
          {
                  industry: 'Maschinenbau',
                  location: 'Zweibrücken',
                  title: 'Einführung von SAP GSS für die EBOM/MBOM-Synchronisation inklusive umfangreicher Migration von Bestandsdaten',
                  skills: 'GSS, BOM, Änderungsdienst, ABAP OO, Web Dynpro'
          },
          {
                  industry: 'Automotive Zulieferer',
                  location: 'Nürnberg',
                  title: 'Variantenkonfiguration mittels SAP iPPE für JIT-Abrufe sowie Schnittstelle von Siemens Capital zu SAP iPPE',
                  skills: 'iPPE, Änderungsdienst, ABAP OO'
          },
          {
                  industry: 'Anlagenbau',
                  location: 'München',
                  title: 'Entwicklung einer SAP UI5 / Fiori Web-Anwendung zur Lieferantenkommunikation für Großbestellungen',
                  skills: 'SAP UI5, Fiori, SAP HANA, CDS Views, ABAP OO'
          },
          {
                  industry: 'Medizintechnik',
                  location: 'Mannheim / Schweiz, Rotkreuz',
                  title: 'Globale Einführung von SAP Product Structure Management (PSM) für Produktkonfigurationen sowie PLM-Erweiterungen (ECR)',
                  skills: 'iPPE, SAP ECR, Materialstamm, ABAP OO, Web Dynpro'
          },
          {
                  industry: 'Software & Automotive',
                  location: 'Walldorf / China, Shanghai',
                  title: 'Lösungsarchitektur zder Entwicklungsstückliste mit Integration der geometrischen Prozesse durch Einbindung der Visualisierungsmöglichkeiten von SAP Visual Enterprise',
                  skills: 'SAP Visual Manufacturing Planner, ABAB OO'
          },
          {
                  industry: 'Medizintechnik',
                  location: 'Fulda',
                  title: 'Konzeption und Implementierung eines objektübergreifenden Status- und Reifegradmanagements im SAP PLM inkl. CAD Integration',
                  skills: 'SAP DVS, SAP ECTR, Materialstamm, Pronovia ConfigManagerABAP OO'
          },
          {
                  industry: 'Automotive',
                  location: 'München',
                  title: 'Langjährige Betreuung und Entwicklung von SAP-Zusatzfunktionen zur Abbildung komplexer Fahrzeug-Produktkonfigurationen in SAP iPPE',
                  skills: 'iPPE, BOM, Excel VBA, ABAP OO'
          },
          {
                  industry: 'Software (SAP)',
                  location: 'Walldorf',
                  title: 'Erstellung einer Schnittstelle für Manufacturing Stücklisten von Dassault 3DX Delmia zu SAP iPPE',
                  skills: 'iPPE, SAP PDMI,ABAP OO'
          },
          {
                  industry: 'Spezialglas',
                  location: 'Mainz',
                  title: 'Umsetzung von Anforderungen für Engineering Change Record, Process Route Workflows & DMS',
                  skills: 'DVS, SAP ECR, ABAP OO, Web Dynpro'
          },
          {
                  industry: 'Aerospace',
                  location: 'Herborn',
                  title: 'Allgemeine PLM Optimierungen im SAP System, u.a. Etablierung von Freigabeprozessen auf Dokument und Material',
                  skills: 'BOM, Materialstamm, Änderungsdienst, Excel VBA, SAP Script, Smartforms, Adobe Lifecycle Manager, ABAP OO'
          },
          {
                  industry: 'Automotive Zulieferer',
                  location: 'Deutschland',
                  title: 'Einführung der SAP GSS für eine iPPE zu BOM Synchronisation inkl. Migration von Bestandsdaten',
                  skills: 'ABAP OO, Web Dynpro'
          },
          {
                  industry: 'Aerospace',
                  location: 'Schweiz',
                  title: 'Implementierung eines genehmigenden Änderungsmanagements auf Basis des SAP PLM 7 Engineering Change Records',
                  skills: 'SAP PLM7, SAPO ECR, ABAP OO, Web Dynpro'
          },
          {
                  industry: 'Automotive',
                  location: 'Mannheim',
                  title: 'Migration der Variantenkonfigurationsdaten aus dem bestehenden Alt-System MATRIX in die SAP iPPE',
                  skills: 'iPPE, Änderungsdienst, ABAP OO, ABAP to XLSX, Excel VBA'
          },
          {
                  industry: 'Medizintechnik',
                  location: 'Hanau',
                  title: 'Migration von Stammdaten in ProNovia Konfigurationstypen im Rahmen einer PLM-Einführung',
                  skills: 'ProNovia Config Manager, ABAP OO'
          },
          {
                  industry: 'Öffentlicher Rundfunk',
                  location: 'Deutschland',
                  title: 'Einführung von EHP2 Employer Self Service (ESS) für SAP Travel Management im Portal',
                  skills: 'ABAP Web Dynpro, SAP FPM (Floor Plan Manager)'
          },
          {
                  industry: 'Versicherungen',
                  location: 'Braunschweig',
                  title: 'Erstellung einer Web-Dynpro Anwendung für den Außendienst zur Kunden-, Vertrags- und Schadenübersicht',
                  skills: 'ABAP Web Dynpro'
          }
  ]
    },
    approach: {
      title: 'Methodik',
      intro: 'Ein praxisbewährter Ansatz für effiziente und transparente Projektabwicklung.',
      steps: [
        {
          title: '1. Analyse',
          text: 'Bewertung der Ist-Situation, Anforderungsaufnahme inkl. Fit-Gap-Analyse und Definition des Zielzustands.'
        },
        {
          title: '2. Konzeption',
          text: 'Erstellung von Fach- und IT-Konzepten mit klaren Verantwortlichkeiten und Machbarkeitsprüfung.'
        },
        {
          title: '3. Umsetzung',
          text: 'Agile oder klassische Realisierung in ABAP, Fiori und SAP PLM mit höchstem Qualitätsanspruch.'
        },
        {
          title: '4. Go-Live & Support',
          text: 'Sicherer Know-how-Transfer, Stabilisierung der Systeme und Begleitung im produktiven Betrieb.'
        }
      ]
    },
    
    contact: {
      title: 'Kontakt',
      intro: 'Schreiben Sie mir kurz Ihr Vorhaben. Ich melde mich zeitnah mit einer strukturierten Ersteinschätzung.',
      name: 'Name',
      email: 'E-Mail',
      message: 'Nachricht',
      cta: 'Nachricht senden',
      success: 'Vielen Dank. Ihre Nachricht wurde erfolgreich übermittelt.',
      error: 'Die Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut.'
    },
    footer: {
      line: 'Quintern Consulting · Mirko Quintern · SAP PLM Solution Architect',
      impressum: 'Impressum',
      datenschutz: 'Datenschutz'
    }
  },
  en: {
    nav: {
      about: 'About',
      services: 'Services',
      approach: 'Approach',
      references: 'References',
      contact: 'Contact'
    },
    hero: {
      badge: 'Mirko Quintern – SAP PLM Solution Architect',
      title: 'Quintern PLM Consulting',
      subtitle:
        '20+ years of SAP PLM experience, including 8 years directly at SAP Walldorf. Specialized in the analysis and implementation of complex system integrations within the SAP PLM environment.',
      motto: '“I believe that true innovation happens where complex things become simple.”',
      primaryCta: 'Start a project',
      secondaryCta: 'View services'
    },
    about: {
      title: 'About Me',
      lead:
        'As an <strong class="font-bold text-foreground">SAP PLM Solution Architect</strong>, Application Consultant, and Developer, I offer deep expertise in demanding SAP environments to bridge the gap between business and IT.<br /><br /><strong class="font-bold text-foreground">Specialized</strong> in the analysis, design, and implementation of complex system integrations in the SAP PLM environment.',
      points: [
        '<strong class="font-bold text-foreground">20+ years</strong> of SAP PLM experience, including 8 years directly at SAP Walldorf',
        '<strong class="font-bold text-foreground">Industry expertise:</strong> Automotive, Automotive Supplier, Mechanical Engineering, Plant Engineering, Medical Technology, Telecoms, Software',
        '<strong class="font-bold text-foreground">Professional core skills:</strong> iPPE (Integrated Product and Process Engineering), Release and Maturity Management, Change Management, Material Master, Bills of Material (BOM), BOM synchronization via GSS (Guided Structure Synchronization), Document Management',
        '<strong class="font-bold text-foreground">IT core skills:</strong> ABAP OO, SAP UI5, Fiori, SAP PDMI, HANA CDS Views, ABAP Web Dynpro, Floor Plan Manager (FPM), Excel VBA, Open SQL, SAP Script, Smartforms',
        '<strong class="font-bold text-foreground">Focus</strong> on sustainable architectures, clean implementation, and reliable operations'
      ]
    },
    services: {
      title: 'Services',
      intro: 'End-to-end support from architecture design to technical realization.',
      items: [
        {
          title: 'Solution Architecture',
          description: 'Design and conceptualization of highly scalable SAP PLM solutions and system landscapes.'
        },
        {
          title: 'Software Development',
          description: 'High-quality implementation services utilizing ABAP OO, Fiori, and HANA CDS Views.'
        },
        {
          title: 'Application Consulting',
          description: 'In-depth process knowledge in SAP PLM, iPPE, and Guided Structure Synchronization (GSS).'
        },
        {
          title: 'System Integration',
          description: 'Secure connection of third-party systems, including PDM/PLM integrations like Dassault 3DX and Siemens Teamcenter.'
        }
      ]
    },
    approach: {
      title: 'Methodology',
      intro: 'A proven approach for efficient and transparent project delivery.',
      steps: [
        {
          title: '1. Analysis',
          text: 'Assessment of the current state, requirement gathering, and definition of the target architecture.'
        },
        {
          title: '2. Design',
          text: 'Creation of business and IT blueprints with clear responsibilities and feasibility checks.'
        },
        {
          title: '3. Implementation',
          text: 'Agile or traditional realization in ABAP, Fiori, and SAP PLM with the highest quality standards.'
        },
        {
          title: '4. Go-Live & Support',
          text: 'Secure knowledge transfer, system stabilization, and support during productive operations.'
        }
      ]
    },
    references: {
      title: 'References',
      intro: 'Excerpt of relevant integration and development projects:',
      items: [
          {
                  industry: 'Automotive',
                  location: 'UK',
                  title: 'Interface Dassault 3DX Delmia to SAP Material, Classic BOM & iPPE, based on SAP PDMI',
                  skills: 'ABAP OO'
          },
          {
                  industry: 'Automotive Supplier',
                  location: 'Germany',
                  title: 'Introduction of SAP GSS for fully automated EBOM to MBOM synchronisation from Teamcenter',
                  skills: 'ABAP OO, Web Dynpro'
          },
          {
                  industry: 'Mechanical Engineering',
                  location: 'Germany',
                  title: 'Implementation of SAP GSS for EBOM/MBOM synchronisation, including legacy data migration and custom enhancements',
                  skills: 'ABAP OO, Web Dynpro'
          },
          {
                  industry: 'Automotive Supplier',
                  location: 'Germany',
                  title: 'Introduction of variant configuration via SAP iPPE for JIT delivery schedules and Siemens Capital interface',
                  skills: ''
          },
          {
                  industry: 'Plant Engineering',
                  location: 'Germany',
                  title: 'Development of an SAP UI5 / Fiori web application for supplier communication based on SAP HANA',
                  skills: 'SAP HANA, SAP UI5, Fiori'
          },
          {
                  industry: 'Medical Technology',
                  location: 'Germany/Switzerland',
                  title: 'Global implementation of SAP Product Structure Management (PSM) and PLM enhancements for ECRs',
                  skills: ''
          },
          {
                  industry: 'Telecoms & Mechanical Eng.',
                  location: 'Germany',
                  title: 'Global SAP PLM implementation and web-app development incl. complex migration of 1.2m legacy records',
                  skills: ''
          },
          {
                  industry: 'Software & Automotive',
                  location: 'China/Germany',
                  title: 'Solution architecture for an SAP PLM project mapping engineering BOMs incl. CAD integration and Visual Enterprise',
                  skills: ''
          },
          {
                  industry: 'Medical Technology',
                  location: 'Germany',
                  title: 'Conception and implementation of cross-object status and maturity level management in SAP PLM',
                  skills: 'ABAP OO'
          },
          {
                  industry: 'Automotive',
                  location: 'Germany',
                  title: 'Long-term support and development of custom SAP enhancements for mapping complex vehicle configurations in SAP iPPE',
                  skills: ''
          },
          {
                  industry: 'Software (SAP)',
                  location: 'Germany',
                  title: 'Creation of an interface for manufacturing BOMs from Dassault 3DX Delmia to SAP iPPE based on SAP PDMI',
                  skills: 'ABAP OO'
          },
          {
                  industry: 'Special Glass',
                  location: 'Germany',
                  title: 'Implementation of requirements for Engineering Change Record, Process Route Workflows & DMS',
                  skills: 'ABAP OO, Web Dynpro'
          },
          {
                  industry: 'Aerospace',
                  location: 'Germany',
                  title: 'General PLM optimizations in the SAP system, including release processes for documents and materials',
                  skills: 'ABAP OO, SAP Script, Smartforms, Adobe LCM'
          },
          {
                  industry: 'Medical Technology',
                  location: 'Germany',
                  title: 'SAP ECTR implementation in connection with the Pronovia Configuration Manager',
                  skills: 'ABAP OO'
          },
          {
                  industry: 'Automotive Supplier',
                  location: 'Germany',
                  title: 'Introduction of SAP GSS for an iPPE to BOM synchronization incl. legacy data migration',
                  skills: 'ABAP OO, Web Dynpro'
          },
          {
                  industry: 'Aerospace',
                  location: 'Switzerland',
                  title: 'Implementation of an approval-based change management based on SAP PLM 7 Engineering Change Records',
                  skills: ''
          },
          {
                  industry: 'Mechanical Engineering',
                  location: 'Germany',
                  title: 'Custom enhancements for CAD-Desktop and Pronovia GCP',
                  skills: 'ABAP OO'
          },
          {
                  industry: 'Automotive',
                  location: 'Germany',
                  title: 'Migration of variant configuration data from the legacy system MATRIX to SAP iPPE',
                  skills: 'ABAP OO, ABAP to XLSX, Excel VBA'
          },
          {
                  industry: 'Plant Engineering',
                  location: 'Germany',
                  title: 'Creation of an application for purchase requisitions',
                  skills: 'ABAP OO'
          },
          {
                  industry: 'Medical Technology',
                  location: 'Germany',
                  title: 'Migration of master data to ProNovia configuration types as part of a PLM implementation',
                  skills: 'ABAP'
          },
          {
                  industry: 'Public Broadcasting',
                  location: 'Germany',
                  title: 'Introduction of EHP2 Employer Self Service (ESS) for SAP Travel Management in the Portal',
                  skills: 'ABAP Web Dynpro, Floor Plan Manager'
          },
          {
                  industry: 'Insurance',
                  location: 'Germany',
                  title: 'Creation of a Web-Dynpro application for the field service for customer, contract, and claims overviews',
                  skills: 'ABAP Web Dynpro'
          }
  ]
    },
    contact: {
      title: 'Contact',
      intro: 'Share your initiative in a few lines. I will respond with a structured first assessment shortly.',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      cta: 'Send message',
      success: 'Thank you. Your message was sent successfully.',
      error: 'Your message could not be sent. Please try again.'
    },
    footer: {
      line: 'Quintern Consulting · Mirko Quintern · SAP PLM Solution Architect',
      impressum: 'Imprint',
      datenschutz: 'Privacy Policy'
    }
  }
}

