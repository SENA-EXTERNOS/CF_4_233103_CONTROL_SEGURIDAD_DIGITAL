<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Documentación técnica

    .row.justify-content-center
      .col-lg-8
        .bloque-texto.cajon.box2tem1.p-1
          .row
            .col-lg-2
              figure
                img(src='@/assets/curso/temas/tema1/tema1.png' width='105px' height='106px' )  
            .col-lg-10
              p.edit Para iniciar el estudio sobre la documentación, es importante comenzar revisando las definiciones y los conceptos generales sobre los documentos, realizar el ejercicio de documentar y recopilar, de manera general, cómo se compone la documentación y sus formas de aplicación y desarrollo.

      .row.mt-2.justify-content-center.mt-5
      .col-lg-11
        p.mt-5  Seguidamente, encontramos algunas definiciones de documentación, compartidas por autores reconocidos.


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
                    b.titulo-tercero.text-center Para López (2015) la documentación es:
                    .bloque-texto-b.blanco
                      .bloque-texto-b__texto.mt-2
                        i.fas.fa-quote-left
                        p Una ciencia que se ocupa de los documentos, esto es, de los vehículos sobre los que se transmiten las ciencias, por lo que se dota al saber documental de un carácter instrumental como ciencia para la ciencia. De ahí que la construcción de la noción de Documentación se basa en la ejecución de un proceso con una fuerte carga informativa, lo que lleva a la disciplina a participar del espectro de las ciencias informativas, es decir, de aquellas que tienen como objeto de estudio un proceso informativo en que se dan los elementos habituales de sujeto emisor, medio, mensaje y sujeto receptor (p. 129).
                        i.fas.fa-quote-right


                  
            .row.justify-content-center.align-items-center.my-lg-4
              .col-md-2
                figure
                  img(src='@/assets/curso/temas/tema1/slider2.png', alt='Texto que describa la imagen')
                  

              .col-md-7.mb-4.mb-md-0 

                .bloque-texto-c.color-blanco.p-4
                  b.titulo-tercero.text-center La norma UNE (Norma de Estandarización Española) 50/113 ofrece dos definiciones del concepto de documentación. La primera es:
                  .bloque-texto-b.blanco
                    .bloque-texto-b__texto.mt-2
                      i.fas.fa-quote-left
                      p Recogida, tratamiento de información registrada de forma continua y sistemática y que permita su almacenamiento, recuperación, utilización y transmisión.
                      i.fas.fa-quote-right

                  

                  b.titulo-tercero.text-center.mt-3 La segunda la define como:
                  .bloque-texto-b.blanco
                    .bloque-texto-b__texto
                      i.fas.fa-quote-left
                      p El conjunto de documentos reunidos para un fin determinado.
                      i.fas.fa-quote-right

            .row.justify-content-center.align-items-center.my-lg-4
              .col-md-2
                figure
                  img(src='@/assets/curso/temas/tema1/slider3.png', alt='Texto que describa la imagen')
                  

              .col-md-7.mb-4.mb-md-0      
          
                
                  
                  .bloque-texto-c.color-blanco.p-4
                    b.titulo-tercero.text-center Gavilán (2009), define: 
                    .bloque-texto-b.blanco
                      .bloque-texto-b__texto.mt-2
                        i.fas.fa-quote-left
                        p  Es posible identificar como documento todo aquel soporte donde se represente algún tipo de información. En este sentido, podemos incluir bajo el concepto de documento una hoja de papel escrito, un libro, una fotografía, una cinta de video, un DVD, un archivo creado con un procesador de textos, una base de datos o una página web (pp. 2-3).
                        i.fas.fa-quote-right

    .row.mt-2.justify-content-center.mt-5.mb-5
      .col-lg-12
        .bloque-texto-g.color-secundario.tarjetaimgcar.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img.carimg(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img2.png')})`}"
          )
          .bloque-texto-g__texto2.p-4
            .col-10.col-lg-12
              p Por lo tanto, se define a un documento como todo material escrito o grabado en algún tipo de medio físico o digital, el cual posee una serie de datos ordenados y con sentido, que tiene como propósito conservar y transmitir algún tipo de conocimiento.
              p.mt-2 Se define la documentación como el conjunto de documentos que se complementan entre sí para suministrar de manera sólida algún tipo de información. La acción de documentar es el proceso mediante el cual se registra la información y se organiza, de manera que se generen uno o más documentos.
              



    h3 Parámetros para la recolección de la información
    
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
    b.mt-5 Conozca, en detalle, algunos de los parámetros fundamentales para recolectar información.
    

    .row.mt-3.mb-5 
      .col-lg-10
      TabsC.color-acento-botones
        
        .py-3.py-md-4(titulo="Modo de recolección")
          .row
            .col-md-6.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/tema1/img4.svg', alt='Texto que describa la imagen')
                
            .col-md-6
              h4 Modo de recolección
              p La información puede obtenerse de diversas fuentes según sea el caso. Existen diferentes técnicas y métodos para su recolección, desde interacciones orales como la entrevista, hasta conversaciones menos formales, reportes automáticos generados por algún tipo de 
                i software, 
                |medios de comunicación, y en algunos casos, redes sociales.
              p.mt-2 En el contexto empresarial, es importante prestar mayor atención a las fuentes de información. Se recomienda en todos los casos recopilar de manera escrita, sea en medio físico o digital, los datos que se consideren importantes y necesarios,  registrar cada detalle y verificar con la fuente, asegurando que la información sea veraz para ser utilizada en la elaboración del informe correspondiente.

        .py-3.py-md-4(titulo="Formato de almacenamiento y presentación")
          .row
            .col-md-6.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/tema1/img5.svg', alt='Texto que describa la imagen')
                
            .col-md-6
              h4 Formato de almacenamiento y presentación
              p.mb-2 Es clave recolectar la información de manera que pueda ser conservada, según sea el caso, en papel o a través de un medio digital; esta última opción podría reducir el tiempo en la elaboración del informe. En muchos casos, el registro fotográfico o cualquier otro tipo de material multimedia, puede ser útil como evidencia de los detalles anotados.
              p Según las políticas de cada empresa, se deben realizar copias de seguridad de toda la información recolectada, y almacenar esta información, utilizando la nomenclatura correcta, en las carpetas indicadas, evitando transportar información laboral en dispositivos o cuentas personales, utilizando siempre los medios y recursos oficiales de la organización.



        .py-3.py-md-4(titulo="Pertinencia y relevancia")
          .row
            .col-md-6.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/tema1/img6.svg', alt='Texto que describa la imagen')
                
            .col-md-6
              h4 Pertinencia y relevancia
              p Al momento de organizar la información para elaborar el documento, es importante darse a la tarea de filtrar los datos obtenidos. Este proceso consiste en evaluar la pertinencia y relevancia de la información, es decir, qué tan útil realmente será para el informe, o si, por el contrario, dichos elementos desvían la atención del objeto del documento, complican el desarrollo del informe, son redundantes o no representan datos valiosos para quienes deben revisar.



        .py-3.py-md-4(titulo="Calidad y confiabilidad")
          .row
            .col-md-6.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/tema1/img7.svg', alt='Texto que describa la imagen')
                
            .col-md-6
              h4 Calidad y confiabilidad
              p La información puede proceder de muchas fuentes. Dependiendo del contexto, la información proviene de páginas de Internet, libros, artículos, conceptos, respuestas propias, o de otras personas. 
              p En cualquiera de los casos, toda información debe ser revisada, obedecer al razonamiento lógico, a las condiciones técnicas, operativas, ambientales y demás, que componen el contexto en el que se ha generado. Es necesario que sea respaldada por otras fuentes de carácter oficial y que sean verificables, evitando basar los reportes, en opiniones o conceptos que no vengan de expertos o de páginas con contenidos informales.



    h3 Técnicas para la documentación

    .row.justify-content-around.align-items-center.mb-5         
      .col-lg-8.col-sm-10
        p Se refiere a los elementos y procedimientos que se deben tener en cuenta en el momento de realizar la documentación de un determinado proceso. Los siguientes parámetros pueden ser aplicables a la documentación, para elaborar informes, investigaciones y registros de incidentes, relacionados con la seguridad digital.
      .col-lg-4
          figure
            img(src='@/assets/curso/temas/tema1/img8.png', alt='Texto que describa la imagen'  )

    
    h3 Selección de los datos por recolectar

    p Para identificar qué datos se deben incluir en la documentación, se recomienda considerar las siguientes tres preguntas:
          
    AcordionA(tipo="b" clase-tarjeta=" tarjeta--blanco line")
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

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mt-5
      .bloque-texto-g__img.img2(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img50.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En muchos casos, al momento de elaborar un informe y organizar toda la documentación referente al tema, se abre la necesidad de trabajar con diferentes versiones que, en teoría, hacen parte de un mismo archivo. 

    .row.justify-content-around.align-items-center.mt-4      
      .col-lg-9
        .cajon.color-secundario.p-4
        
          p Existen ocasiones en las que se presentan diferentes versiones de un mismo documento, debido a las actualizaciones de datos, a los procedimientos, a diferencias en las fuentes, material complementario, o a la realización de copias de respaldo, correspondientes al trabajo en proceso, con el objetivo de tener puntos de control, si se debe realizar alguna modificación al trabajo en marcha. Sea cual sea el caso, es importante tener en cuenta lo siguiente:


    .row.justify-content-around.align-items-center.mt-2.mb-5
      .col-lg-10
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--acordeoncolor").mt-5
          .row(titulo="Versión reconocible:")
            .col-md-2
              figure
                img(src='@/assets/curso/temas/tema1/Acordion1.png', alt='Texto que describa la imagen')
                
            .col-md-8.mb-4.mb-md-0
              p Cada versión debe ser fácilmente reconocible; en todo momento, el encargado o su grupo de colaboradores, deberán trabajar sobre la versión correcta del informe.
          
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

    h3 Niveles de Documentación

    .row.mt-2.justify-content-center.mt-4
      .col-lg-12
        .bloque-texto-g.color-secundario.tarjetaimgcar.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img.carimg(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img9.png')})`}"
          )
          .bloque-texto-g__texto2.p-4
            .col-10.col-lg-12
              p Al realizar labores de documentación para una investigación, un proyecto o la realización de un informe, se debe clasificar el análisis de los datos y su manejo, por sectores o niveles; esto puede ayudar a estructurar, de una buena forma, la documentación, obtener datos de calidad y llevar un mejor orden. 
              p La división por niveles, es una herramienta muy útil para lograr información ordenada y calificada.
     
    .row.mt-5
      .col-lg-12
        TabsA.color-acento-botones.mb-5        
          .tarjeta.color-tarjetacliente.p-4(titulo="Nivel de ítems o variables")      
            .row           
              .col-xl-10
                
                p Se deben identificar los objetos, los ítems y las variables que conviven dentro del informe que se está realizando. Los objetos se definen como: todos los elementos que aportan e interfieren en el desarrollo del informe, proceso o caso de estudio, que está en proceso de investigación; por ejemplo, en el área de la seguridad informática, se puede clasificar como objeto, a cualquier elemento del inventario.
                p Las variables se conocen como: aquellos elementos que tienen la propiedad de cambiar constantemente, dependiendo de otras condiciones o eventos; por ejemplo, costos de materiales, equipos, flujo de dinero, personal y cantidad de usuarios.
                  
          .tarjeta.color-tarjetacliente.p-4(titulo="Nivel de fuentes y base<br> de datos")          
            .row                     
              .col-xl-10                
                p Se listan las fuentes de las cuales se obtendrá la información, referencias, material de consulta, personas, evidencias, máquinas, información técnica, entre otras; se tiene en cuenta como se citarán y se dará reconocimiento a las fuentes de consulta, colaboradores y elementos externos que aportaron a la elaboración del informe. Por temas legales relacionados con los derechos de autor, así como por ética profesional, es fundamental dar el reconocimiento y listar las fuentes que sirvieron para obtener la información.

          .tarjeta.color-tarjetacliente.p-4(titulo="Nivel de recursos y<br> procedimiento")          
            .row                     
              .col-xl-10                
                p Una vez definidas las fuentes, variables y objetos del informe, es necesario centrarse en la estructura y definir el medio en el que se realizará, el cual normalmente será digital, como por ejemplo, el procesador de texto. Hay que tener claro si la compañía tiene predefinido algún tipo de instrumento o formato para la presentación del informe, si hay una metodología y unos requisitos fijos, o si se tiene un poco de libertad en estos aspectos.
                p Incluir la explicación del método de trabajo, la obtención de los datos, gráficos, ilustraciones y recursos audiovisuales que no saturen el informe, y que no disminuyan el carácter técnico y formal del mismo, pero que ayuden a resumir mejor la información, para que, quienes lo lean, puedan entender con mayor facilidad, plantear las ideas principales y hacer énfasis del objetivo, en las conclusiones del informe.


    .row.mt-5
      .col-lg-4
        figure
            img(src='@/assets/curso/temas/tema1/img10.png', alt='Texto que describa la imagen')

      .col.lg-8
        p Para documentar, es necesario contemplar los aspectos relacionados con el después de la elaboración del documento; esta preparación incluye las tareas y los pasos necesarios que ayudan para que el proceso sea viable:

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
            p <i class="fas fa-angle-right" STYLE="Color: #FC502D"></i>  Uso de la imagen.
            p <i class="fas fa-angle-right" STYLE="Color: #FC502D"></i>  Logos corporativos.
            p <i class="fas fa-angle-right" STYLE="Color: #FC502D"></i>  Propiedad intelectual.
            p <i class="fas fa-angle-right" STYLE="Color: #FC502D"></i>  Seguimiento.
            p <i class="fas fa-angle-right" STYLE="Color: #FC502D"></i>  Relevancia de la información.
            p <i class="fas fa-angle-right" STYLE="Color: #FC502D"></i>  Tipo de información que va a presentar.
            p <i class="fas fa-angle-right" STYLE="Color: #FC502D"></i>  Tener claro quiénes pueden acceder a esta información.
            p.mt-4 Tener en cuenta: usar exclusivamente, los canales de comunicación, almacenamiento de la información, documentos y reportes que se generen, además de utilizar solo herramientas, como el correo y el chat de la empresa.
            
    


          .col-lg-4
            figure
              img(src='@/assets/curso/temas/tema1/img11.svg', alt='Texto que describa la imagen'  )
    
    
    .row.justify-content-around.align-items-center.mt-4      
      .col-lg-8
        .cajon.color-secundario.p-4
          p Para comprender el ciclo de vida del proceso de la documentación, analice con atención la siguiente imagen:

    .row.justify-content-around.align-items-center.mt-4.mb-5      
      .col-lg-11
        ImagenInfografica.color-acento-botones
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema1/ptocaliente.svg', alt='Texto que describa la imagen')
              

          .tarjeta.color-secundario.text-white.p-3(x="33.5%" y="36%" numero="1")
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
            
    h3 Fichas técnicas

    p Para aprender sobre esta temática, es primordial definir el concepto de ficha técnica:


     .row.justify-content-around.align-items-center.mt-4      
      .col-lg-11
        
        .bloque-texto-b.color-adicional-1.p-4
          
          .bloque-texto-b.color-cajon
            .bloque-texto-b__texto
              i.fas.fa-quote-left
              p.mb-0 Una ficha técnica es un tipo de documento que nos expone las características principales de algo, sea cual sea el objeto. El tipo de ficha técnica y la información que en ella se encuentre dependerá mucho de la finalidad de la misma. Lo importante a considerar es que toda ficha técnica posee propiedades distintivas y características técnicas del objeto. Podemos encontrar fichas de medicamentos, productos químicos, aparatos, alimentos, etcétera (párr. 3)
              b.edit3  Berdejo (2020)
              i.fas.fa-quote-right

    .row.justify-content-center.mt-5
      .col-lg-9
        .bloque-texto.cajon.box2tem4.p-2
          .row             
            .col-lg-7
              p.edittext Las fichas técnicas son los documentos donde se encuentra información de carácter técnico, referente a los recursos tecnológicos que posee la organización. Estos documentos permiten revisar la compatibilidad y capacidad de cada recurso, en relación con los demás, evaluando su pertinencia y necesidad dentro de la organización o si, por el contrario, es un punto débil dentro del sistema de seguridad.
            .col-lg-5
              figure
                img(src='@/assets/curso/temas/tema1/img12.png' ) 

    

    .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5.mt-5
      .bloque-texto-g__img.img2(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img13.svg')})`}"
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
                | aplican los mismos comentarios del hardware en cuanto a estandarización, compatibilidad y demás. Estos son algunos de los elementos que deben ser considerados en la ficha técnica:

    .row.justify-content-center.my-5
      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/img30.png", alt="alt")
          .crd_hover_txt--body
            h4.textedit5.text-center Datos de fabricación:
            p.mb-0 Fabricante, versión y licencia de uso.                                                                                    

      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/img31.png", alt="alt")
          .crd_hover_txt--body
            h4 Compatibilidades de 
              i software:
            p.mb-0 Compatibilidad a nivel de 
              i software 
              | y sistema operativo.


      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/img32.png", alt="alt")
          .crd_hover_txt--body
            h4 Compatibilidad de 
              i hardware:
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

    br
    h3 Elaboración de fichas

    p Cuando se hace necesaria la elaboración de las fichas técnicas o, en su defecto, un documento más corto y sencillo, dado que estos suelen ser extensos y con vocabulario técnico, se deben tener en cuenta ciertos parámetros para realizar la elaboración.  
    b Estos son algunos parámetros importantes que se deben considerar en la elaboración de las fichas:

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
    
    
    .row.justify-content-around.align-items-centerrd.my-5
      .col-11
        .tarjeta.color-secundario.p-3.mt-4
          .row.justify-content-around.align-items-center
            
            .col-10
              .row.justify-content-between.align-items-center
                .col.mb-5.mb-sm-0
                  h3.mb-1 Formato de ficha técnica.
                  p.mt-4 Conozca la estructura de un formato (ejemplo) de ficha técnica y la manera en que se completa su información. 
                
              .row  
                .col-lg-1
                  figure
                    img(src="@/assets/curso/temas/tema1/pdf.png")

                .col-lg-7
                  b Anexo 1. 
                    | Explore el Anexo 1 “Ejemplo de ficha técnica”.
                
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/Anexo 1 - Ejemplo de ficha técnica.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download        


    h3 Importación de reportes e información desde el 
        i software 
        | de gestión y seguridad

    
    .row.mb-5
      .col-lg-4       
        
          .bloque-texto-b.color-cajon  
            .bloque-texto-b__texto        
              p Al gestionar información para elaborar la documentación dentro del contexto de la seguridad digital, los diferentes equipos, sistemas operativos, aplicaciones y herramientas, deben permitir la extracción de información (información que puede estar contenida en diferentes formatos). La mayoría de los programas permiten exportar, de manera automática, los informes a texto, o formatos compatibles con Excel u otros programas, lo que facilita ampliamente el desarrollo de estos.

      .col-lg-3
        figure
          img(src="@/assets/curso/temas/tema1/img41.png")
      .col-lg-5
        p Los informes pueden presentar datos ubicados en una línea de tiempo, es decir, cada suceso o evento se registra en orden cronológico, con la fecha y hora del sistema. También está la posibilidad de ver información en tiempo real en algunas herramientas y recursos; entre estas se pueden encontrar variaciones de dispositivo a dispositivo y de programa a programa, por lo que se recomienda revisar la documentación antes o durante los primeros días de funcionamiento, utilizando las transferencias de conocimiento ofrecidas por los proveedores o fabricantes, con el fin de conocer el funcionamiento para la importación de los informes en general. 

    .row
      .col-lg-10
        b Entre los recursos de 
          i software 
          | que permiten acceder a reportes, se encuentran:

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
        p <i class="fas fa-angle-right" STYLE="Color: #FC502D"></i> Alertas de amenazas, violaciones o intentos fraudulentos para acceder al sistema, cuentas o a la red.
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
