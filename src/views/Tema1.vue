<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Documentación

    .row.justify-content-center
      .col-lg-8
        .bloque-texto.cajon.box2tem1.p-1
          .row
            .col-lg-2
              figure
                img(src='@/assets/curso/temas/tema1/tema1.png' width='105px' height='106px' )  
            .col-lg-10
              p.edit Para iniciar el estudio sobre la documentación, es importante empezar revisando algunas definiciones sobre los términos documento, documentar y documentación, desde la perspectiva de diferentes autores.

      .row.mt-2.justify-content-center.mt-5
      .col-lg-11
        b.mt-5  Algunas definiciones compartidas por algunos autores:


    .row.mt-2.justify-content-center
      .col-lg-11
        .tarjeta.tarjeta--grisclaro.mt-5
          SlyderA(tipo="b")
            
            .row.justify-content-center.align-items-center.my-lg-4
              .col-md-2
                figure
                  img(src='@/assets/curso/temas/tema1/slider1.png', alt='Texto que describa la imagen')
                  

              .col-md-7.mb-4.mb-md-0           
          
                  .bloque-texto-c.color-blanco.p-4
                      h3 Para López (2015) la documentación es:
                      i.fas.fa-quote-left
                      p.mb-0 Una ciencia que se ocupa de los documentos, esto es, de los vehículos sobre los que se transmiten las ciencias, por lo que se dota al saber documental de un carácter instrumental como ciencia para la ciencia. De ahí que la construcción de la noción de Documentación se basa en la ejecución de un proceso con una fuerte carga informativa, lo que lleva a la disciplina a participar del espectro de las ciencias informativas, es decir, de aquellas que tienen como objeto de estudio un proceso informativo en que se dan los elementos habituales de sujeto emisor, medio, mensaje y sujeto receptor (p. 129).
                        i.fas.fa-quote-right

                  
            .row.justify-content-center.align-items-center.my-lg-4
              .col-md-2
                figure
                  img(src='@/assets/curso/temas/tema1/slider2.png', alt='Texto que describa la imagen')
                  

              .col-md-7.mb-4.mb-md-0           
          
                  .bloque-texto-c.color-blanco.p-4
                    h3 La norma UNE (Norma de Estandarización Española) 50/113 ofrece dos definiciones del concepto de documentación. La primera es:
                    i.fas.fa-quote-left
                    p.mb-2 Recogida, tratamiento de información registrada de forma continua y sistemática y que permita su almacenamiento, recuperación, utilización y transmisión.
                    i.fas.fa-quote-right

                    h3 La segunda la define como:
                    i.fas.fa-quote-left.mt-2
                    p.mb-2 El conjunto de documentos reunidos para un fin determinado.
                    i.fas.fa-quote-right

            .row.justify-content-center.align-items-center.my-lg-4
              .col-md-2
                figure
                  img(src='@/assets/curso/temas/tema1/slider3.png', alt='Texto que describa la imagen')
                  

              .col-md-7.mb-4.mb-md-0           
          
                  .bloque-texto-c.color-blanco.p-4
                    h3 Gavilán (2009), define: 
                    i.fas.fa-quote-left
                    p.mb-2 Es posible identificar como documento todo aquel soporte donde se represente algún tipo de información. En este sentido, podemos incluir bajo el concepto de documento una hoja de papel escrito, un libro, una fotografía, una cinta de video, un DVD, un archivo creado con un procesador de textos, una base de datos o una página web (pp. 2-3).
                    i.fas.fa-quote-right

    .row.mt-2.justify-content-center.mt-5
      .col-lg-12
        .bloque-texto-g.color-secundario.tarjetaimgcar.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img.carimg(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img2.png')})`}"
          )
          .bloque-texto-g__texto2.p-4
            .col-10.col-lg-12
              p Por lo tanto, se define a un documento como todo material escrito o grabado en algún tipo de medio físico o digital, el cual posee una serie de datos ordenados y con sentido, que tiene como propósito conservar y transmitir algún tipo de conocimiento.
              p.mt-2 Se define la documentación como el conjunto de documentos que se complementan entre sí para suministrar de manera sólida algún tipo de información. La acción de documentar es el proceso mediante el cual se registra la información y se organiza, de manera que se generen uno o más documentos.
              p.mt-2 Se describen los parámetros para la recolección de la información.

    separador
      
    #t_1_1

    .titulo-segundo.color-acento-contenido
      h2 1.1  Parámetros para recolección de la información:
    
    .row.justify-content-center
      .col-lg-9
        .bloque-texto.cajon.box2tem1.p-2
          .row             
            .col-lg-7
              p.edittext El propósito de recolectar información puede variar según el contexto y el interés que motiva a realizar esta actividad, pero hay algunas recomendaciones generales y parámetros que se deberían tener en cuenta a la hora de realizar el proceso de documentar y elaborar el reporte de un determinado proceso. Es imposible realizar un buen artículo o documento si este no contiene fuentes, referencias o información confiable para su elaboración.
            .col-lg-5
              figure
                img(src='@/assets/curso/temas/tema1/img3.png' ) 
    .row.mt-5
    b.mt-5 Se define cada uno de los parámetros que se deben tener en cuenta para recolectar información. 
    

    .row.mt-3
      .col-lg-10
      TabsC.color-acento-botones
        
        .py-3.py-md-4(titulo="Modo de recolección")
          .row
            .col-md-6.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/tema1/img4.png', alt='Texto que describa la imagen')
                
            .col-md-6
              h4 Modo de recolección
              p La información puede obtenerse de diversas fuentes según sea el caso. Existen diferentes técnicas y métodos para su recolección, desde interacciones orales como la entrevista, hasta conversaciones menos formales, reportes automáticos generados por algún tipo de software, medios de comunicación, y en algunos casos, redes sociales.
              p.mt-2 En el contexto empresarial, es importante prestar mayor atención a las fuentes de información. Se recomienda en todos los casos recopilar de manera escrita, sea en medio físico o digital, los datos que se consideren importantes y necesarios,  registrar cada detalle y verificar con la fuente, asegurando que la información sea veraz para ser utilizada en la elaboración del informe correspondiente.

        .py-3.py-md-4(titulo="Formato de almacenamiento y presentación:")
          .row
            .col-md-6.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/tema1/img5.png', alt='Texto que describa la imagen')
                
            .col-md-6
              h4 Formato de almacenamiento y presentación:
              p Como se mencionó en el punto anterior, se recomienda recolectar la información de manera que pueda ser conservada, según sea el caso, sobre papel o en medio digital; esta última opción podría reducir el tiempo en la elaboración del informe. En muchos casos, el registro fotográfico o cualquier otro tipo de material multimedia puede ser útil como evidencia de los detalles anotados.
              p.mt-2 Según las políticas de la empresa en la que se trabaje, se debe realizar copias de seguridad de toda la información recolectada, y almacenar la información utilizando la nomenclatura adecuada, en las carpetas indicadas, evitando transportar información laboral en sus dispositivos o cuentas personales, usando siempre los medios y recursos oficiales de la empresa.


        .py-3.py-md-4(titulo="Pertinencia y relevancia")
          .row
            .col-md-6.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/tema1/img6.png', alt='Texto que describa la imagen')
                
            .col-md-6
              h4 Pertinencia y relevancia
              p Al momento de organizar la información para elaborar el documento, es importante darse a la tarea de filtrar los datos obtenidos. Este proceso consiste en evaluar la pertinencia y relevancia de la información, es decir, qué tan útil realmente será para el informe, o si, por el contrario, dichos elementos desvían la atención del objeto del documento, complican el desarrollo del informe, son redundantes o no representan datos valiosos para quienes deben revisar.



        .py-3.py-md-4(titulo="Calidad y confiabilidad")
          .row
            .col-md-6.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/tema1/img7.png', alt='Texto que describa la imagen')
                
            .col-md-6
              h4 Calidad y confiabilidad
              p La información puede provenir de muchas fuentes. Dependiendo del contexto, esta puede provenir de páginas de Internet, libros, artículos,  conceptos, respuestas propias u otras personas. En cualquiera de los casos toda información debe ser revisada, obedecer al razonamiento lógico, a las condiciones técnicas, operativas, ambientales y demás que componen el contexto en el que se ha generado. Es necesario que esta sea respaldada por otras fuentes de carácter oficial, y que sean verificables, evitando basar los reportes en opiniones o conceptos que no vengan de expertos o de páginas con contenidos informales.

    .row.justify-content-center.mt-5
      .col-lg-8
        .bloque-texto.cajon.box3tem1.p-3
          .row            
            .col-lg-11
              p.edit2.text-white Luego de conocer los parámetros a tener en cuenta en la recolección de información, es necesario conocer las técnicas para realizar la documentación con la información recolectada.

    separador      

    #t_1_2

    .titulo-segundo.color-acento-contenido.mt-3
      h2 1.2	Técnicas para la documentación:

    .row.justify-content-around.align-items-center
      .col-11
        .row          
          .col-lg-7.col-sm-10
            p Elementos y procedimientos para tener en cuenta al momento de realizar la documentación de determinado proceso. Los siguientes parámetros pueden ser aplicables a la documentación para elaborar informes, investigaciones y registros de incidentes relacionados con la seguridad digital.   
            p La presente información está basada en el material de Gestión de Datos de Investigación (GDI) de la bibliología de la CEPAL, específicamente del módulo 3.
            p Cómo incluir la documentación a través de las respuestas a algunos interrogantes.
          .col-lg-4
              figure
                img(src='@/assets/curso/temas/tema1/img8.png', alt='Texto que describa la imagen'  )

    .row.mt-4
      b ¿Cómo seleccionar los datos que deben recolectarse?  

      p.mt-4 Para identificar qué datos se deben incluir en la documentación, se recomienda considerar las siguientes tres preguntas:
          
    AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--blanco")
      .row(titulo="¿Cuál es el objetivo y qué relevancia tienen los datos que se han seleccionado? ")
        .col-md-7.mb-4.mb-md-0
          p Los datos seleccionados deberán ser verificables por otras personas en cualquier momento posterior, de modo que no se abran espacios de duda sobre el concepto e información presentada. Por ejemplo, al reportar la existencia de determinado número de equipos dentro del inventario de activos digitales, ese mismo número y toda la información adicional debe ser verificable por otras personas en caso de que se requiera. Es necesario evitar hacer mención o basar la documentación en datos que no puedan ser revisados por externos.
        .col-md-4
          figure
            img(src='@/assets/curso/temas/tema1/acor1.png', alt='Texto que describa la imagen')
            
      .row(titulo="¿Cuáles son los datos que se deben conservar y cómo se hará?")        
        .col-md-7.mb-4.mb-md-0
          p Seguir las instrucciones contenidas en los manuales de procedimientos de la empresa, para así no faltar o entrar en conflicto con algún aspecto de las políticas de manejo de la información y seguridad digital; usar los instrumentos, formatos, recursos proporcionados y autorizados por la compañía; aprovechar los recursos de almacenamiento, procesamiento, creaciones digitales y los medios para la protección de la información disponibles.
        .col-md-4
          figure
            img(src='@/assets/curso/temas/tema1/acor2.png', alt='Texto que describa la imagen')

      .row(titulo="¿Qué costos, recursos y herramientas serán necesarios para obtener, conservar y registrar los datos? ")        
        .col-md-7.mb-4.mb-md-0
          p Analizar los costos monetarios de materiales, recursos y tiempo que consumirá la obtención y procesamiento de esa información. En algunos casos el mencionado costo podría ser alto para la relevancia o necesidad de la información que se obtendría, por lo que se debe evaluar su conveniencia.
        .col-md-4
          figure
            img(src='@/assets/curso/temas/tema1/acor3.png', alt='Texto que describa la imagen')


    p.mt-5 Algunas de las técnicas para gestionar la documentación de forma correcta. 
    b.mt-5 Control y manejo de versiones
    p.mt-5 Para identificar qué datos se deben incluir en la documentación, se recomienda considerar las siguientes tres preguntas:
    

     .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mt-5
      .bloque-texto-g__img.img2(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img50.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En muchos casos, al momento de elaborar un informe y organizar toda la documentación referente al tema, se abre la necesidad de trabajar con diferentes versiones que, en teoría, hacen parte de un mismo archivo. A continuación, se presentan algunas recomendaciones para tener un mayor control en el manejo de versiones de documentos.

    .row.justify-content-around.align-items-center.mt-4      
      .col-lg-9
        .cajon.color-secundario.p-4
        
          p En ocasiones se presentan diferentes versiones de un mismo documento, debido a actualizaciones de datos, procedimientos, diferencias en las fuentes, material complementario o a la realización de copias de respaldo correspondientes al trabajo en proceso, con el objetivo de tener puntos de control en caso de tener que realizar alguna modificación al trabajo en curso. Sea cual sea el caso, debe tener en cuenta:


    .row.justify-content-around.align-items-center.mt-2
      .col-lg-10
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--acordeoncolor").mt-5
          .row(titulo="Versión reconocible:")
            .col-md-2
              figure
                img(src='@/assets/curso/temas/tema1/Acordion1.png', alt='Texto que describa la imagen')
                
            .col-md-8.mb-4.mb-md-0
              p Es importante que cada una de las versiones sea fácilmente reconocible, y que en todo momento el encargado o su grupo de colaboradores trabajen sobre la versión correcta del informe.
          
          .row(titulo="Buenas prácticas:")
            .col-md-2
              figure
                img(src='@/assets/curso/temas/tema1/Acordeon2.png', alt='Texto que describa la imagen')
                
            .col-md-8.mb-4.mb-md-0
              p El equipo de trabajo debe tener claridad sobre el uso y manejo de las versiones. Esto podría incluir buenas prácticas, como incorporar datos con fechas y número de versión en el nombre de los archivos, títulos o encabezados, aislar cada versión en carpetas diferentes y establecer instrumentos de control.

          .row(titulo="Herramientas de control:")
            .col-md-2
              figure
                img(src='@/assets/curso/temas/tema1/Acordion3.png', alt='Texto que describa la imagen')
                
            .col-md-8.mb-4.mb-md-0
              p Los instrumentos suelen ser formatos donde se incluyen todos los datos del documento (fechas, datos de los editores, comentarios y espacios para indicar los cambios); también son útiles algunas herramientas que vienen ya incluidas en la mayoría de los procesadores de texto y otros programas para la elaboración de informes, como es el caso del registro de cambios, marcación, resaltado y las secciones de comentarios.

          .row(titulo="Organización y buena comunicación:")
            .col-md-2
              figure
                img(src='@/assets/curso/temas/tema1/Acordion4.png', alt='Texto que describa la imagen')
                
            .col-md-8.mb-4.mb-md-0
              p A la hora de trabajar en grupo y tener que manipular diferentes versiones del mismo informe, es fundamental la comunicación y el orden en el trabajo.

    .row.mt-5  
      b Niveles de Documentación



    .row.mt-2.justify-content-center.mt-4
      .col-lg-12
        .bloque-texto-g.color-secundario.tarjetaimgcar.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img.carimg(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img9.png')})`}"
          )
          .bloque-texto-g__texto2.p-4
            .col-10.col-lg-12
              p Al realizar labores de documentación para una investigación, un proyecto o la realización del informe, es útil clasificar el análisis de los datos y su manejo por sectores o niveles, esto puede ayudar a estructurar de una buena forma la documentación, obtener datos de calidad y llevar un mejor orden. A continuación, se presenta una división por niveles que podría ser útil:
     
     
    .row.mt-5
      .col-lg-12
        TabsA.color-acento-botones.mb-5        
          .tarjeta.color-tarjetacliente.p-4(titulo="Nivel de ítems o variables")      
            .row           
              .col-xl-10
                
                p Al momento de trabajar y presentar información, es indispensable identificar los objetos, ítems y las variables que conviven dentro del informe que se está realizando. Los objetos se pueden definir como todos los elementos que aportan e interfieren en el desarrollo del informe, proceso o caso de estudio que está en proceso de investigación; por ejemplo, en el área de la seguridad informática se podría clasificar como objetos a cualquier elemento del inventario. 
                p.mt-2 Las variables son aquellos elementos que tienen la propiedad de cambiar constantemente, dependiendo de otras condiciones o eventos, por ejemplo, costos de materiales, equipos, flujo de dinero, personal y cantidad de usuarios.
                  
          .tarjeta.color-tarjetacliente.p-4(titulo="Nivel de fuentes y base de datos")          
            .row                     
              .col-xl-10                
                p Se listan las fuentes de las cuales se obtendrá la información, referencias, material de consulta, personas,  evidencias, máquinas, información técnica, entre otras; se tiene en cuenta como se citarán y se dará reconocimiento a las fuentes de consulta, colaboradores y elementos externos que aportaron a la elaboración del informe. Por temas legales relacionados con los derechos de autor, así como por ética profesional, es fundamental dar el reconocimiento y listar las fuentes que sirvieron para obtener la información.

          .tarjeta.color-tarjetacliente.p-4(titulo="Nivel de recursos y procedimiento")          
            .row                     
              .col-xl-10                
                p Una vez definidas las fuentes, variables y objetos del informe, es necesario centrarse en la estructura y definir el medio en el que se realizará, el cual normalmente será digital, como por ejemplo, el procesador de texto. Hay que tener claro si la compañía tiene predefinido algún tipo de instrumento o formato para la presentación del informe, si hay una metodología y unos requisitos fijos, o si se tiene un poco de libertad en estos aspectos.
                p.mt-2 Es importante incluir la explicación del método de trabajo, la obtención de los datos, gráficos, ilustraciones y recursos audiovisuales que no saturen el informe ni que bajen el carácter técnico y formal del mismo, pero que ayuden a resumir mejor la información para que quienes lo lean puedan entender con mayor facilidad, plantear ideas principales y hacer énfasis en las conclusiones de este.


      b.mt-4 Seguridad, protección, conservación y acceso a los datos

    .row.mt-5
      .col-lg-4
        figure
            img(src='@/assets/curso/temas/tema1/img10.png', alt='Texto que describa la imagen')

      .col.lg-8
        p Al momento de documentar, se deberán contemplar los aspectos relacionados con el después de la elaboración del documento, esto incluye:

        SlyderF(columnas="col-lg-5 col-xl-4").mt-5
          .tarjeta
            .row.justify-content-center.mb-3
              .col-13
                img(src='@/assets/curso/temas/tema1/tarj1.png' )               
                  
          .tarjeta
            .row.justify-content-center.mb-3
              .col-12
                img(src='@/assets/curso/temas/tema1/tarj2.png' alt='AvatarTop')
          
            
          
          .tarjeta
            .row.justify-content-center.mb-3
              .col-12
                img(src='@/assets/curso/temas/tema1/tarj3.png' alt='AvatarTop')
            
          
            
          .tarjeta
            .row.justify-content-center.mb-3
              .col-12
                img(src='@/assets/curso/temas/tema1/tarj4.png' alt='AvatarTop')
          
          .tarjeta
            .row.justify-content-center.mb-3
              .col-12
                img(src='@/assets/curso/temas/tema1/tarj5.png' alt='AvatarTop')
    
    
    .row.justify-content-around.align-items-center.mt-4
      .col-11
        .row          
          .col-lg-8
            p.mt-2 Lo ideal en este punto es que se revisen y conozcan las políticas de la empresa en cuanto a:
            p <i class="fas fa-angle-right" STYLE="Color: #FC502D"></i>  Confidencialidad.
            p <i class="fas fa-angle-right" STYLE="Color: #FC502D"></i>  Formatos de presentación.
            p <i class="fas fa-angle-right" STYLE="Color: #FC502D"></i>  Logos corporativos.
            p <i class="fas fa-angle-right" STYLE="Color: #FC502D"></i>  Propiedad intelectual.
            p <i class="fas fa-angle-right" STYLE="Color: #FC502D"></i>  Seguimiento.
            p <i class="fas fa-angle-right" STYLE="Color: #FC502D"></i>  Relevancia de la información.
            p <i class="fas fa-angle-right" STYLE="Color: #FC502D"></i>  Tipo de información que va a presentar.
            p <i class="fas fa-angle-right" STYLE="Color: #FC502D"></i>  Tener claro quiénes pueden acceder a esta información.
            p.mt-4 Es importante tener presente el uso exclusivo de los canales de comunicación, almacenamiento de la información, documentos y reportes que se generen, además de usar solo las herramientas, como correo y chat de la empresa.
            
    


          .col-lg-4
            figure
              img(src='@/assets/curso/temas/tema1/img11.svg', alt='Texto que describa la imagen'  )
    
    
    .row.justify-content-around.align-items-center.mt-4      
      .col-lg-8
        .cajon.color-secundario.p-4
          
          p.text-center Para entender el ciclo de vida del proceso de la documentación, vea el siguiente diagrama. 

    .row.justify-content-around.align-items-center.mt-4      
      .col-lg-11
        ImagenInfografica.color-acento-botones
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema1/ptocaliente.png', alt='Texto que describa la imagen')
              

          .tarjeta.color-secundario.p-3(x="33.5%" y="36%" numero="1")
            .h5.mb-2 Antes
            p <i class="fas fa-angle-right" STYLE="Color: #FC502D"></i>  Definición de objetivos de la documentación.
            p <i class="fas fa-angle-right" STYLE="Color: #FC502D"></i>  Definición de variables y objetos a documentar.
            p <i class="fas fa-angle-right" STYLE="Color: #FC502D"></i>  Definición de fuentes de consulta.
            p <i class="fas fa-angle-right" STYLE="Color: #FC502D"></i>  Recolección y filtrado inicial de la información.

          .tarjeta.color-secundario.p-3(x="58%" y="36%" numero="2")
            .h5.mb-2 Durante
            p <i class="fas fa-angle-right" STYLE="Color: #FC502D"></i>  Organización y validación de la información.
            p <i class="fas fa-angle-right" STYLE="Color: #FC502D"></i>  Definición de la estructura del informe.
            p <i class="fas fa-angle-right" STYLE="Color: #FC502D"></i>  Desarrollo multimedia y diagramación.
            p <i class="fas fa-angle-right" STYLE="Color: #FC502D"></i>  Desarrollo de conclusiones.
            p <i class="fas fa-angle-right" STYLE="Color: #FC502D"></i>  Gestión de diferentes versiones.
            
          .tarjeta.color-secundario.p-3(x="82%" y="36%" numero="3")
            .h5.mb-2 Después
            p <i class="fas fa-angle-right" STYLE="Color: #FC502D"></i>  Difusión.
            p <i class="fas fa-angle-right" STYLE="Color: #FC502D"></i>  Sustentación.
            p <i class="fas fa-angle-right" STYLE="Color: #FC502D"></i>  Almacenamiento.
            p <i class="fas fa-angle-right" STYLE="Color: #FC502D"></i>  Control de acceso.
            p <i class="fas fa-angle-right" STYLE="Color: #FC502D"></i>  Actualizaciones posteriores.
            
    .row.justify-content-around.align-items-center.mt-5     
      .col-lg-8
        p.text-center Es clave comprender la utilidad de las fichas técnicas en el requerimiento de equipos y elementos de infraestructura de la red necesarios para la gestión de la documentación. 

      separador

    #t_1_3

    .titulo-segundo.color-acento-contenido
      h2 1.3	Fichas técnicas, especificaciones para equipos y elementos de la infraestructura de la red

    p Para iniciar, es necesario definir el concepto de ficha técnica.


     .row.justify-content-around.align-items-center.mt-4      
      .col-lg-11
        
        .bloque-texto-b.color-adicional-1.p-4
          
          .bloque-texto-b.color-cajon
            .bloque-texto-b__texto
              i.fas.fa-quote-left
              p.mb-0 Una ficha técnica es un tipo de documento que nos expone las características principales de algo, sea cual sea el objeto. El tipo de ficha técnica y la información que en ella se encuentre dependerá mucho de la finalidad de la misma. Lo importante a considerar es que toda ficha técnica posee propiedades distintivas y características técnicas del objeto. Podemos encontrar fichas de medicamentos, productos químicos, aparatos, alimentos, etcétera (párr. 3)
              b.edit3  The graphic designer
              i.fas.fa-quote-right


    b.mt-4 Concepto de ficha técnica desde la seguridad digital y las redes de datos

    .row.justify-content-center.mt-5
      .col-lg-9
        .bloque-texto.cajon.box2tem4.p-2
          .row             
            .col-lg-7
              p.edittext Las fichas técnicas son los documentos donde se encontrará información de carácter técnico, referente a los recursos tecnológicos que posee la organización. Estos documentos permiten revisar la compatibilidad y capacidad de cada recurso en relación con los demás, evaluando su pertinencia y necesidad dentro de la organización, o si por el contrario, es un punto débil dentro del sistema de seguridad.
            .col-lg-5
              figure
                img(src='@/assets/curso/temas/tema1/img12.png' ) 

    

    .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5.mt-5
      .bloque-texto-g__img.img2(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img13.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Para facilitar el análisis de las fichas técnicas, estas se pueden clasificar en dos grandes categorías 
          i (hardware y software),
          |  donde se verán marcadas diferencias en cuanto a la información que se encontrará en cada una. Normalmente, todo producto o equipo trae consigo su manual de usuario, y dentro de este, la ficha técnica.
          br
          br
          | Se recomienda, previo a la adquisición de cualquier producto, revisar sus características técnicas, las cuales pueden ser consultadas a través de las páginas web de los proveedores y fabricantes, a quienes incluso se les puede solicitar asistencia técnica antes o después de realizada la compra.
    .row.mt-4
      b.mt-4 Fichas técnicas de 
        i hardware

    .row.justify-content-around.align-items-center.mt-4      
      .col-lg-10
        p Las fichas técnicas de los dispositivos de 
          i hardware 
          | pueden ser diferentes dependiendo del equipo, las utilidades y servicios que ofrece. Los fabricantes deben acogerse a algunas normas y estándares nacionales e internacionales que aseguren la compatibilidad de sus dispositivos en la red; algunos parámetros que se podrán encontrar en cuanto a 
          i hardware 
          |  (computadoras, 
          i router, switch, firewall, 
          | etc.) son:

    .row.justify-content-around.align-items-center.mt-4 
      .col-lg-11
        figure
          img(src='@/assets/curso/temas/tema1/img39.svg')

    
    .row.justify-content-center.mt-5
      .col-lg-9
        .bloque-texto.cajon.box3tem1.p-3
          .row            
            .col-lg-11
              p.edit2.text-white En lo referente al 
                i software 
                | aplican los mismos comentarios del hardware en cuanto a estandarización, compatibilidad y demás. Estos son algunos de los elementos que deben ser considerados en la ficha técnica.

    .row.justify-content-center.mb-5.mt-5
      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/img30.png", alt="alt")
          .crd_hover_txt--body
            h4.textedit5.text-center Datos de fabricación:
            p.mb-0 Fabricante, versión y licencia de uso                                                                                    

      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/img31.png", alt="alt")
          .crd_hover_txt--body
            h4 Compatibilidades de software:
            p.mb-0 2 Compatibilidad a nivel de 
              i software 
              | y sistema operativo.


      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/img32.png", alt="alt")
          .crd_hover_txt--body
            h4 Compatibilidad de hardware:
            p.mb-0 En las especificaciones se deberá tener como mínimo las recomendaciones para correr y asegurar el funcionamiento del programa. Por ejemplo, la capacidad de memoria RAM y ROM necesarias, procesador, etcétera. 


      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/img33.png", alt="alt")
          .crd_hover_txt--body
            h4 Servicios:
            p.mb-0 Se deben mencionar los servicios, protocolos y procedimientos compatibles con el 
              i software. 
              | Listado de funciones y aplicaciones disponibles.


      separador

    #t_1_4

    .titulo-segundo.color-acento-contenido
      h2 1.4	Elaboración de fichas

    .row.justify-content-center.mt-5
      .col-lg-9
        p Cuando sea necesaria la elaboración de las fichas técnicas, o en su defecto, un documento más corto y sencillo, dado que estos suelen ser extensos y con vocabulario técnico, se deben tener en cuenta algunos parámetros. 
    .row.mt-2
      b.mt-3 Para la elaboración tener en cuenta los siguientes ítems:

    .tarjeta.bg5.p-4.mt-5
      SlyderA(tipo="b")
        .row
          .col-md-4.mb-4.mb-md-0
            b Para 
              i Hardware:
            p.mt-3 Debe ser incluido el nombre, versión o modelo, fabricante (en la mayoría de los casos estos elementos están dentro del inventario y tienen asignado un código, se recomienda incluirlo) y año de adquisición. También es necesario tipificar según su uso, es decir, computadoras, periféricos, pantallas, discos, equipo de red, equipo de seguridad, servidor, etcétera.
            p.mt-3 Además, es necesario incorporar las características básicas de instalación y energía, permitiendo que este proceso no altere o dañe el equipo. También se requiere una descripción del dispositivo, especificando quiénes pueden usarlo.
          
          .col-md-7
            figure
              img(src='@/assets/curso/temas/tema1/img34.png', alt='Texto que describa la imagen')
             
        
        .row
          .col-md-4.mb-4.mb-md-0
            b Para 
              i Software:
            p.mt-3 Es necesario incluir el nombre, versión, fabricante del programa, descripción de sus funciones o usos, requisitos mínimos para garantizar su funcionamiento, tamaño en memoria, formato en el que se encuentra disponible (uso 
              i online, 
              | instalado, en unidad externa, etcétera.) y quienes deben o pueden usarlo dentro de la empresa.

          .col-md-7
            figure
              img(src='@/assets/curso/temas/tema1/img35.png', alt='Texto que describa la imagen')
             
        .row
          .col-md-4.mb-4.mb-md-0
            b Categoria por recursos
            p.mt-3 También en 
              i software 
              | se recomienda definir categorías para este tipo de recursos, de manera que puedan ser asociados, filtrados y analizados según la naturaleza de sus funciones. Se pueden clasificar como procesadores de texto, navegadores, herramientas de diseño, seguridad, comunicación, desarrollo, administrativas, entre otras. 
          .col-md-7
            figure
              img(src='@/assets/curso/temas/tema1/img40.png', alt='Texto que describa la imagen')
    
    
    .row.justify-content-around.align-items-centerrd.mt-5
      .col-11
        .tarjeta.color-secundario.p-3.mt-4
          .row.justify-content-around.align-items-center
            
            .col-10
              .row.justify-content-between.align-items-center
                .col.mb-5.mb-sm-0
                  h3.mb-1 Formato de ficha técnica.
                  p.mt-4 Para la elaboración de la ficha técnica es importante tener de referencia un formato, como el que se comparte en el siguiente documento:
                
              .row  
                .col-lg-1
                  figure
                    img(src="@/assets/curso/temas/tema1/pdf.png")

                .col-lg-7
                  b Anexo 1. 
                    | Ejemplo de ficha técnica, para complementar su información.
                
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/Anexo 1 - Ejemplo de ficha técnica.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download        

    separador

    #t_1_5

    .titulo-segundo.color-acento-contenido
      h2 1.5	Importación de reportes e información desde el 
        i software 
        | de gestión y seguridad

    
    .row
      .col-lg-4       
        
          .bloque-texto-b.color-cajon  
            .bloque-texto-b__texto        
              p Es útil que, al momento de gestionar información para elaborar la documentación dentro del contexto de la seguridad digital, los diferentes equipos, sistemas operativos, aplicaciones y herramientas permitan extraer información de ellas, la cual puede venir en varios formatos. La mayoría de los programas permiten exportar de manera automática los informes a texto o formatos compatibles con Excel u otros programas, lo que facilita ampliamente el desarrollo de estos.

           
    
    


      .col-lg-3
        figure
          img(src="@/assets/curso/temas/tema1/img41.png")
      .col-lg-5
        p Los informes pueden presentar datos ubicados en una línea de tiempo, es decir, cada suceso o evento se registra en orden cronológico, con la fecha y hora del sistema. También está la posibilidad de ver información en tiempo real en algunas herramientas y recursos; entre estas se pueden encontrar variaciones de dispositivo a dispositivo y de programa a programa, por lo que se recomienda revisar la documentación antes o durante los primeros días de funcionamiento, utilizando las transferencias de conocimiento ofrecidas por los proveedores o fabricantes, con el fin de conocer el funcionamiento para la importación de los informes en general. 

    .row
      .col-lg-10
        b En los recursos de 
          i software 
          | que permiten acceder a reportes, encontramos los siguientes:

    .row.mt-5
      .col-lg-6
        p <i class="fas fa-angle-right" STYLE="Color: #FC502D"></i> Fallos y códigos de error. Los sistemas operativos, y en general todo programa o elemento físico, tiene dentro de su configuración un conjunto de códigos que permite al usuario identificar las posibles causas del problema y actuar en función de ello para realizar las acciones correctivas. Normalmente estos códigos permiten acceder a tablas o documentación del equipo.
        p <i class="fas fa-angle-right" STYLE="Color: #FC502D"></i> Listado de amenazas detectadas, en cuarentena, eliminadas y pendientes, como en el caso de los antivirus.
        p <i class="fas fa-angle-right" STYLE="Color: #FC502D"></i> Historiales de búsquedas, acciones, ingresos a aplicaciones y acceso a cuentas.
        p <i class="fas fa-angle-right" STYLE="Color: #FC502D"></i> Monitoreo del uso sobre los recursos de la red y equipos.
        p <i class="fas fa-angle-right" STYLE="Color: #FC502D"></i>Reporte de parámetros configurados en el dispositivo, servicios activos e inactivos.
        p <i class="fas fa-angle-right" STYLE="Color: #FC502D"></i>Listados de direcciones físicas MAC de los equipos conectados.
        
      

      .col-lg-6
        p <i class="fas fa-angle-right" STYLE="Color: #FC502D"></i> Informes de páginas visitadas y tráfico de la red.
        p <i class="fas fa-angle-right" STYLE="Color: #FC502D"></i> Informes relacionados con la capacidad de almacenamiento.
        p <i class="fas fa-angle-right" STYLE="Color: #FC502D"></i> Listado de actualizaciones o parches disponibles e instalados.
        p <i class="fas fa-angle-right" STYLE="Color: #FC502D"></i> Listado de eventos, cambios y modificaciones en el sistema.
        p <i class="fas fa-angle-right" STYLE="Color: #FC502D"></i> Violación e ingreso erróneo de contraseñas.
        p <i class="fas fa-angle-right" STYLE="Color: #FC502D"></i> Listado de dispositivos conectados y apertura simultánea de cuentas. 
        p <i class="fas fa-angle-right" STYLE="Color: #FC502D"></i> Bases de datos con información confidencial, como usuarios y contraseñas de determinado sistema.
        p <i class="fas fa-angle-right" STYLE="Color: #FC502D"></i> Monitores de recursos, fichas técnicas de dispositivos y software.
        

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
