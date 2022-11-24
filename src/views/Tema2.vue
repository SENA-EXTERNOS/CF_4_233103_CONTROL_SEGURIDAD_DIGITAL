<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Titulo de primer nivel

    .row.justify-content-center
      .col-lg-8
        .bloque-texto.cajon.box2tem1.p-1
          .row
            .col-lg-2
              figure
                img(src='@/assets/curso/temas/tema2/img1.png' width='105px' height='106px' )  
            .col-lg-10
              p.edit Dentro de la documentación necesaria en la gestión de seguridad digital se encuentran diferentes reportes, los cuales contienen un determinado número de registros. En el siguiente video se detallan aspectos asociados a la elaboración de estos reportes. 

    .col-lg-12.mt-5
      figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption   VIDEO

    .row.justify-content-center.mt-5
      .col-lg-6
        .bloque-texto.cajon.box3tem1.p-3
          .row            
            .col-lg-12
              p.edit2.text-white Se revisará cada uno de los tres (3) elementos mencionados en el vídeo anterior: bitácoras, informe ejecutivo e informe técnico
      
      
      separador
    
    #t_2_1.titulo-segundo.color-acento-contenido.mt-2
      h2 2.1  Bitácora

    p Para iniciar, es importante tener claro el concepto de bitácora.
      
    .row.mt-5
      .col-lg-5
        .row
          .col-lg-12.mb-5.mb-lg-0
            b.titulo-tercero.text-center Blasco (2022) indica que una bitácora es:
            .bloque-texto-b.color-cajon
              .bloque-texto-b__texto
                i.fas.fa-quote-left
                p Una publicación que está escrita en orden cronológico, acerca del orden que ha seguido alguien para conseguir sus objetivos… es muy útil para poder repetir procesos o evaluar si el procedimiento ha sido el correcto a la hora de entregar un trabajo (párr. 1).
                i.fas.fa-quote-right

      .col-lg-3
         figure
            img(src='@/assets/curso/temas/tema2/img2.png')  


      .col-lg-4
        p Complementando la anterior definición, se considera la bitácora como un instrumento para realizar el seguimiento, reporte de novedades y actividades relacionadas con una actividad, equipo o el estado de algún proceso.


    .row.justify-content-around.align-items-center.mt-4      
      .col-lg-8
        .cajon.color-secundario.p-4
          
          p.text-center La bitácora es un recurso utilizado en varios campos de la industria, especialmente en aquellos donde se debe realizar seguimiento y revisión constante de algún elemento o sistema. En cuanto a su estructura, esta es bastante simple, lo que le permite adaptarse a un modelo como el siguiente.
   
    .row.justify-content-around.align-items-center
      .col-lg-9
        ImagenInfografica.color-acento-botones.mt-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema2/img3.png', alt='Texto que describa la imagen')
              

          .tarjeta.color-secundario.p-3(x="17%" y="30%" numero="1")
            .h5.mb-2 Encabezado 
            p Nombre del proceso, equipo, dependencia, información y logo de la empresa.

          .tarjeta.color-secundario.p-3(x="30%" y="16%" numero="2")
            .h5.mb-2 Fecha
            p Fecha hora y ubicación.

          .tarjeta.color-secundario.p-3(x="58%" y="16%" numero="3")
            .h5.mb-2 Datos
            p Datos del encargado de diligenciar la bitácora, nombre, identificación interna y cargo.

          .tarjeta.color-secundario.p-3(x="71%" y="19%" numero="4")
            .h5.mb-2 Contenido
            p Dispuesto en filas con espacio para indicar la hora exacta y describir el suceso. Espacio para mencionar su escalamiento, y si es el caso, datos de a quién se ha escalado.

          .tarjeta.color-secundario.p-3(x="85%" y="40%" numero="5")
            .h5.mb-2 Firma
            p Espacio para firmas de entrega y recibido.

    .row.justify-content-around.align-items-centerrd.mt-5
      .col-10
        .tarjeta.color-secundario.p-3.mt-4
          .row.justify-content-around.align-items-center
            
            .col-10
              .row.justify-content-between.align-items-center
                .col.mb-5.mb-sm-0
                  h3.mb-1 Ejemplo de bitácora
                  p.mt-4 Para tener claridad sobre cómo se puede llevar una bitácora, revise el siguiente documento:
              .row  
                .col-lg-1
                  figure
                    img(src="@/assets/curso/temas/tema1/pdf.png")

                .col-lg-7
                  b Anexo 2. 
                    | Ejemplo de bitácora
                
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download        


      separador

    #t_2_2.titulo-segundo.color-acento-contenido.mt-2
      h2 2.2   Informe ejecutivo

    p Antes de conocer los aspectos característicos del informe ejecutivo, es importante tener claro el concepto

    
    .row.justify-content-around.align-items-centerrd.mt-5
      .col-8
        .row
            .col-lg-12.mb-5.mb-lg-0
              b.titulo-tercero.text-center Coll (2021) define al informe ejecutivo como:
                 
            .bloque-texto-b.color-blanco.p-4
              .bloque-texto-b__texto
                i.fas.fa-quote-left
                p Un documento escrito u oral que recoge los puntos más destacados de un informe más extenso. El fin del informe ejecutivo es resumir los aspectos más importantes de un informe de mayor extensión, facilitando su lectura a la dirección del proyecto o la compañía (párr. 1).
                i.fas.fa-quote-right

    p Se recomienda tener en cuenta los siguientes aspectos para elaborar un informe ejecutivo de manera correcta:

    .row.justify-content-around.align-items-center.mt-5
      .col-lg-8
        LineaTiempoD.color-acento-botones
          .row(numero="1" titulo="Es un anexo")
            .col-md-10.mb-4.mb-md-0
              p.text-small El informe ejecutivo suele ser un anexo a un informe de mayor contenido y complejidad, a manera de resumen.
          
          

          .row(numero="2" titulo="Incluye generalidades")
          
            .col-md-10.mb-4.mb-md-0
              p.text-small Incorpora las ideas principales del estudio, investigación, desarrollo de la actividad o incidente. 

          .row(numero="3" titulo="Incluye las recomendaciones")
            
            .col-md-10.mb-4.mb-md-0
              p.text-small Pautas o plan de acción recomendado según el suceso y el contexto del mismo.

          
          .row(numero="4" titulo="Conclusiones")
            
            .col-md-10.mb-4.mb-md-0
              p.text-small Se mencionan las conclusiones de la actividad descrita en él.

          .row(numero="5" titulo="Parte inicial")
            
            .col-md-10.mb-4.mb-md-0
              p.text-small Introducción, se relata de manera sencilla el qué, para qué, por qué, cuál es la situación y qué se espera generar u obtener con dicho informe.

          .row(numero="6" titulo="Desarrollo")
            
            .col-md-10.mb-4.mb-md-0
              p.text-small Aspectos destacados del informe principal. En este se mencionan y resaltan los aspectos importantes que se consideren de ayuda para explicar este documento, el cual puede dar una idea general del tema.

          .row(numero="7" titulo="Parte final")
            
            .col-md-10.mb-4.mb-md-0
              p.text-small  Conclusiones y recomendaciones. Se sugiere finalizar el informe con la valoración e ideas de acuerdo con los detalles y datos obtenidos.

          .row(numero="8" titulo="Otros aspectos")
            
            .col-md-10.mb-4.mb-md-0
              p.text-small  El informe ejecutivo no debería sobrepasar las 2 páginas, debe ser claro y expresado en un lenguaje que, aunque no sea muy técnico, no llegue a parecer informal.
              p.mt3.text-small Este tipo de informe normalmente está diseñado para transferir información a alguien con un cargo igual o superior dentro de la empresa, se debe tener en cuenta lo referente a confidencialidad y reserva del contenido en el informe.


      .row.justify-content-around.align-items-centerrd.mt-5
      .col-10
        .tarjeta.color-secundario.p-3.mt-4
          .row.justify-content-around.align-items-center
            
            .col-10
              .row.justify-content-between.align-items-center
                .col.mb-5.mb-sm-0
                  h3.mb-1 Ejemplo de informe ejecutivo
                  p.mt-4 Para ampliar y ver en detalle la construcción del informe ejecutivo, le invito a revisar el siguiente documento:
              .row  
                .col-lg-1
                  figure
                    img(src="@/assets/curso/temas/tema1/pdf.png")

                .col-lg-7
                  b Anexo 3. 
                    |   Ejemplo de informe ejecutivo
                
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download    


      separador

    #t_2_3.titulo-segundo.color-acento-contenido
      h2 2.3  Informe técnico

    .row.justify-content-center.mt-5
      .col-lg-10
        .bloque-texto.cajon.box2tem4.p-2

           .row             
            .col-lg-7
              
                 
              .bloque-texto-b.color-gris.p-3
                b.text-center Coll (2021) define al informe ejecutivo como:
                .bloque-texto-b__texto
                  
                  i.fas.fa-quote-left
                  p Un documento escrito u oral, el cual recoge un análisis sobre un asunto determinado. El fin del informe técnico es resolver o mejorar dicha problemática, habitualmente relacionada con la actividad empresarial de una compañía. (párr. 1).
                  i.fas.fa-quote-right

            
            .col-lg-5
              figure
                img(src='@/assets/curso/temas/tema2/img4.png' ) 

    .row.justify-content-center.mt-5
      .col-lg-8
        .bloque-texto.cajon.box3tem1.p-3
          .row            
            .col-lg-11
              p.edit2.text-white El informe técnico es un documento cuyo propósito es explicar y sustentar una actividad o suceso, el cual, por su importancia, debe ser evidenciado y reportado.


    p.mt-5 Algunas características y elementos de este tipo de informe son:

    .row.mt-5
        .row
        .col-lg-4.mb-5.mb-lg-0          
          .bloque-texto-b.color-cajon.p-4
            .bloque-texto-b__texto
              p <i class="fas fa-angle-right" STYLE="Color: #FC502D"></i>
                p Reportar una situación de naturaleza técnica. El vocabulario usado, la terminología y el nivel de conocimiento del tema en específico, hace que sea un tipo de documento ideal solo para quienes conocen de este, ya que algunas temáticas podrían ser malinterpretadas o confundir a las personas; por lo tanto, quien lo elabora debe ser conocedor de la temática.
              
    
          
        .col-lg-4
          figure
            img(src="@/assets/curso/temas/tema2/img5.png")

        
        .col-lg-4.mb-5.mb-lg-0          
          .bloque-texto-b.color-cajon.p-4
            .bloque-texto-b__texto
              p <i class="fas fa-angle-right" STYLE="Color: #FC502D"></i>
                | Metodológicamente, el informe técnico debe seguir una estructura lógica que parta de la explicación del suceso. Se fundamenta en bases teóricas o evidencias reales y verificables, que idealmente puede contener estadísticas, gráficos, tablas y otros recursos que permitan visualizar la información de mejor manera.
  
    .row.justify-content-center.mt-5
      .col-lg-9
        ImagenInfograficaB.color-acento-botones
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema2/img6.png', alt='Texto que describa la imagen')
              
          div(x="6%" y="40%" tooltip="Ver más" numero="1")
            .row
              .col-lg-6 
                h5 Introducción
                p Se da un vistazo general al tema, indicando al lector qué encontrará en el informe y una breve explicación de cómo fue realizado, además de su propósito.
              .col-lg-6
                figure
                 img(src='@/assets/curso/temas/tema2/img7.png', alt='Texto que describa la imagen')
              


          div(x="6%" y="60%" tooltip="Ver más" numero="2")
            .row
              .col-lg-6 
                h5 Desarrollo técnico
                p En este apartado se explica la temática desarrollada, base teórica y técnica detrás de los procedimientos y sucesos descritos, mostrando los resultados, datos relevantes de lugares, acciones y actores involucrados.
                p.mt-2 Este desarrollo debe atender a la necesidad u objetivo del informe, y desde la parte técnica, explicar el cómo y el porqué de lo ocurrido. El nivel del lenguaje en este punto debe ser acorde a la temática y la terminología usada en esta.

              .col-lg-6
                figure
                 img(src='@/assets/curso/temas/tema2/img8.png', alt='Texto que describa la imagen')
              
          div(x="94%" y="40%" tooltip="Ver más" numero="3")
            .row
              .col-lg-6 
                h5 Conclusiones y recomendaciones
                p Basados en los datos presentados, se deben elaborar las conclusiones y/o recomendaciones. Este punto puede llegar a ser el más importante del informe, ya que allí se encuentran las respuestas y el análisis final de los resultados obtenidos.
                p.mt-2 Las conclusiones deben dar respuesta total, o por lo menos parcial, a las preguntas, situación, problema y desarrollo de las habilidades listadas.
              
              .col-lg-6
                figure
                 img(src='@/assets/curso/temas/tema2/img9.png', alt='Texto que describa la imagen')

          div(x="94%" y="60%" tooltip="Ver más" numero="4")
            .row
              .col-lg-6 
                h5 Bibliografía y referencias
                p Se debe citar y dar crédito a cada uno de los autores o fuentes de las cuales se extrajo información; si, por el contrario, el informe ha sido documentado en su totalidad con el conocimiento del desarrollador de este, se deben mencionar los lugares, dependencias, recursos y personas que se vean involucradas en el objeto del informe, así como incluir las respectivas evidencias.
              .col-lg-6
                figure
                 img(src='@/assets/curso/temas/tema2/img10.png', alt='Texto que describa la imagen')

      .row.justify-content-around.align-items-centerrd.mt-5
      .col-10
        .tarjeta.color-secundario.p-3.mt-4
          .row.justify-content-around.align-items-center
            
            .col-10
              .row.justify-content-between.align-items-center
                .col.mb-5.mb-sm-0
                  h3.mb-1 Estructura de informe técnico
                  p.mt-4 Para tener mayor claridad sobre el informe técnico, se presentan algunos ejemplos en el siguiente documento:
              .row  
                .col-lg-1
                  figure
                    img(src="@/assets/curso/temas/tema1/pdf.png")

                .col-lg-7
                  b Anexo 4. 
                    | Estructura del informe técnico
                
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download      
    .row.justify-content-around.align-items-centerrd.mt-5
      .col-10
        p  Para finalizar con los aspectos relevantes en la elaboración de reportes, es necesario conocer la ruta para el escalamiento y trazabilidad de los reportes, como se explica en el siguiente tema. 

      separador

    #t_2_4.titulo-segundo.color-acento-contenido
      h2 2.4	Conducto regular, escalamientos y trazabilidad de los reportes

    .row.mt-4 Por último, se mencionan una serie de aspectos importantes al momento de cumplir el ciclo de vida del documento o informe:
    
    .tarjeta.tarjeta--gris.p-4.mt-5
      LineaTiempoC.color-acento-contenido(text-small)
        .row(titulo="Conducto regular").justify-content-around.align-items-centerrd

          .col-md-3
            figure
              img(src='@/assets/curso/temas/tema2/slider1.png', alt='Texto que describa la imagen')
              
          .col-md-5.mb-4.mb-md-0
            p Al ser parte de una compañía, siempre existirá una línea de mando. En general, los informes siempre se realizan desde un nivel inferior de responsabilidad en la empresa, hacia un nivel superior, llamado: relación empleado-supervisor, a menos que se especifique lo contrario.
          


        .row(titulo="Escalamiento").justify-content-around.align-items-centerrd
          .col-md-3
            figure
              img(src='@/assets/curso/temas/tema2/slider2.png', alt='Texto que describa la imagen')
              
          .col-md-5.mb-4.mb-md-0
            p Se entiende como la acción de trasladar una solicitud o recomendación a un nivel de dependencia diferente dentro de la empresa. Es muy probable que para documentar cierto incidente o actividad, sea necesaria la ayuda de otra persona,  algún tipo de recurso que, dentro de los hallazgos expuestos en el informe, requieran de una acción correctiva y preventiva para eludir cualquier tipo de inconveniente.

        .row(titulo="Trazabilidad").justify-content-around.align-items-centerrd
          .col-md-3
            figure
              img(src='@/assets/curso/temas/tema2/slider3.png', alt='Texto que describa la imagen')
              
          .col-md-5.mb-4.mb-md-0
            p Es importante que se pueda hacer seguimiento a las recomendaciones, solicitudes o conclusiones expresadas en el informe. En la mayoría de los casos, y en especial en el ámbito de la seguridad digital, estas hacen referencia a acciones correctivas o preventivas.

        .row(titulo="Retroalimentación").justify-content-around.align-items-centerrd
          .col-md-3
            figure
              img(src='@/assets/curso/temas/tema2/slider4.png', alt='Texto que describa la imagen')
              
          .col-md-5.mb-4.mb-md-0
            p Es importante, además, prestar atención a los comentarios y respuestas de quienes reciben, con el ánimo de corregir, mejorar o solucionar dudas respecto a la información presentada.

        .row(titulo="Formalidad").justify-content-around.align-items-centerrd
          .col-md-3
            figure
              img(src='@/assets/curso/temas/tema2/slider5.png', alt='Texto que describa la imagen')
              
          .col-md-5.mb-4.mb-md-0
            p Para finalizar, se hace énfasis en los canales de comunicación determinados por la empresa, así como los recursos y herramientas que esta proporciona.
            p.mt-3 Debe evitarse el uso de otro tipo de canales que pongan en riesgo la integridad de la información. Se debe recordar lo relacionado con la confidencialidad y pertinencia de esta. También debe presentar una buena redacción, presentación y ortografía para la elaboración de documentos e informes.

    .row.justify-content-around.align-items-center.mt-5   
      .col-lg-8
        .cajon.color-secundario.p-4          
          p.text-center Se invita a explorar los demás recursos que se encuentran disponibles en este componente formativo, para ello debe dirigirse al menú principal, en donde se encuentra la síntesis, una actividad didáctica, material complementario, entre otros.


</template>

<script>
export default {
  name: 'Tema2',
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
