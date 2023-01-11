export default {
  global: {
    componenteFormativo: 'Documentación aplicada a la seguridad digital',
    descripcionCurso:
      'En este componente formativo, se desarrollan dos temas importantes para el procedimiento de la administración de la seguridad digital: extraer y comprender la información obtenida en las fichas técnicas de los activos del sistema de seguridad digital, y revisar algunas técnicas y recomendaciones, para que la documentación y otra clase de informes, cumplan con los parámetros básicos de la calidad.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Documentación técnica',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Elaboración de reportes',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Documentación técnica',
      referencia:
        'Araujo A. (2021). <em>Creando un inventario de activos en 4 sencillos pasos [+Plantilla gratis].</em> Hackmetrix. ',
      tipo: 'Página web.',
      link:
        'https://blog.hackmetrix.com/inventario-de-activos-seguridad-de-la-informacion/#:~:text=Algunos%20ejemplos%20de%20activos%20de,y%20las%20de%20tu%20equipo. ',
    },
    {
      tema: 'Elaboración de reportes',
      referencia: 'Milformatos. (2022). <em>Bitácora.</em>',
      tipo: 'Página web.',
      link: 'https://milformatos.com/empresas-y-negocios/bitacora/ ',
    },
    {
      tema: 'Elaboración de reportes',
      referencia:
        'Crehana. (2021). <em>Plantilla para reporte ejecutivo en Word.</em>',
      tipo: 'Página web.',
      link:
        'https://www.crehana.com/recursos/herramientas/plantilla-reporte-ejecutivo/ ',
    },
    {
      tema: 'Elaboración de reportes',
      referencia:
        'Caja de la Vivienda popular. (2019). <em>Informe técnico diagnóstico del modelo de seguridad y privacidad de la información-MSPI.</em>',
      tipo:
        'Artículo PDF descargable, lectura y ejemplo de informe técnico recomendado.',
      link:
        'https://www.cajaviviendapopular.gov.co/sites/default/files/208-TIC-Mn-11%20INFORME%20TE%CC%81CNICO%20DIAGNO%CC%81STICO%20DEL%20MSPI%20V1.pdf ',
    },
    {
      tema: 'Elaboración de reportes',
      referencia:
        'El tío estadístico. (2020).<em> Cómo crear gráficos estadísticos en Excel 2019 -sesión completa </em>(video). YouTube.',
      tipo: 'Video.',
      link:
        'https://www.youtube.com/watch?v=QXoNOpHNzKE&ab_channel=ElT%C3%ADoEstad%C3%ADstico',
    },
  ],
  glosario: [
    {
      termino: 'Ciclo de vida documental',
      significado:
        'este concepto hace referencia a todas las etapas por las que pasa un documento hasta su almacenamiento. Esto incluye el levantamiento de información, creación del documento, organización y clasificación,  revisión, difusión y disposición final.',
    },
    {
      termino: 'Difusión',
      significado:
        'para el contexto del tema, la difusión es la etapa en la que se publica o comparte la información. En esta parte se ha de tener en cuenta su grado de confidencialidad, medios y formatos por los que será compartido.',
    },
    {
      termino: 'Documentación',
      significado:
        'es el conjunto de documentos y elementos contenedores de información, que han sido agrupados con el fin de servir como insumo para la elaboración y soporte de un informe.',
    },
    {
      termino: 'Documentar',
      significado:
        'es el proceso de investigar, consultar y recolectar información de diversas fuentes para elaborar la documentación pertinente a un informe.',
    },
    {
      termino: 'Documento ',
      significado:
        'es el término que se usa generalmente para referirse a cualquier tipo de archivo que contenga algún tipo de información, sea escrita, en audio, video o imágenes. La utilidad y relevancia de dicho documento variará en función del contexto en el que se examine.',
    },
    {
      termino: 'Documento técnico',
      significado:
        'es un tipo de documento que por la temática que aborda requiere de ciertos elementos, datos y lenguaje de carácter técnico para explicar las propiedades, uso, mantenimiento o algún tipo de información referente a un elemento técnico, como lo puede ser un equipo,  herramienta, programa o procedimiento.',
    },
    {
      termino: 'Informe ejecutivo',
      significado:
        'en el contexto del tema, el concepto ejecutivo se refiere a un tipo de informe en el que se expone de manera clara pero breve un tema que debe ser abordado con mayor atención, pero del cual se requiere una introducción para comprender el objetivo de dicha información.  Se usa principalmente para dar apertura a un informe más largo, además de informar a quienes tal vez no conocen el lenguaje técnico, pero requieren conocer la información esencial en un informe sencillo y fácil de entender. ',
    },
    {
      termino: 'Ficha técnica',
      significado:
        'es un tipo de documento que contiene la información de carácter técnico respecto a las características de un producto, equipo, herramienta, programa o procedimiento, centrándose en cifras, datos estadísticos, matemáticos o físicos, según sea el caso. ',
    },
    {
      termino: 'Filtrar',
      significado:
        'en el área de procesamiento de datos, el proceso de filtrado consiste en separar o tomar solo una porción del total de los datos para procesarla con un objetivo específico, y para el cual no es necesario o práctico tomar el total de datos. ',
    },
    {
      termino: 'Recolección documental',
      significado:
        'es el proceso mediante el cual se obtiene la información contenida en documentos de diferentes formatos, fuentes y medios para su procesamiento y uso en informes o documentos más complejos.',
    },
    {
      termino: 'Técnico',
      significado:
        'este concepto se utiliza para referirse a una ciencia, un arte o una actividad que está claramente definida mediante procedimientos y medidas basadas en datos y técnicas que involucran capacidades manuales, mentales y el uso de tecnología. ',
    },
  ],
  referencias: [
    {
      referencia:
        'Berdejo, P. (2020).<em> Cómo diseñar correctamente fichas técnicas de un producto. </em> Integratecnologia.',
      link:
        'https://www.integratecnologia.es/la-innovacion-necesaria/como-disenar-correctamente-fichas-tecnicas-de-producto/ ',
    },
    {
      referencia:
        'Blasco, R. (2022).<em> Cómo hacer una bitácora de trabajo.</em> Unprofesor. ',
      link:
        'https://www.unprofesor.com/consejos-para-estudiar/como-hacer-una-bitacora-de-trabajo-5448.html  ',
    },

    {
      referencia:
        'Comisión económica para América latina y el caribe, CEPAL. (2022).<em> Gestión de datos de investigación. </em> Módulo 3. Gestión de datos ',
      link: 'https://biblioguias.cepal.org/c.php?g=495473&p=3390849 ',
    },
    {
      referencia:
        'Equipo Editorial (1991). Documentación e información. Vocabulario. Parte 1. Conceptos fundamentales. PNE 50-113/1ISO 5127/1 1983. <em>Revista Española De Documentación Científica, </em> 14(3), pp. 340-358. ',
      link: 'https://redc.revistas.csic.es/index.php/redc/article/view/1219',
    },
    {
      referencia:
        'López, J. (2015). <em>La información en el origen y desarrollo de la documentación.</em>  ',
      link: 'https://dialnet.unirioja.es/descarga/articulo/5226781.pdf ',
    },
    {
      referencia:
        'Gavilán, C. (2009). <em>El documento y sus clases análisis documental: indización y resumen. </em>Temas de Biblioteconomía.   ',
      link: 'http://eprints.rclis.org/14605/1/tipdoc.pdf  ',
    },
    {
      referencia:
        'Nápoles, L., Moreno. M., Arteta Y., Steffanell, I y Tapia, I (2021).<em> ¿Cómo Documentar un Sistema de Gestión de la Calidad según ISO 9001Œ? </em> Universidad Libre. ',
      link:
        'https://www-virtualpro-co.bdigital.sena.edu.co/biblioteca/-como-documentar-un-sistema-de-gestion-de-la-calidad-segun-iso-9001-  ',
    },
    {
      referencia:
        'Sagredo, F. y Arroyo, J. (1982).<em> Análisis formal de las definiciones de documentación.</em> Boletín Millares Carlo 6. p. 239-88. Web.  ',
      link: 'https://dialnet.unirioja.es/servlet/articulo?codigo=1466182 ',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
