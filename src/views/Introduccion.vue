<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
  
    .row.justify-content-around.align-items-center
      .col-lg-7.col-sm-10
        .bloque-texto-b.color-cajon.p-1
            .bloque-texto-b__texto
              p Apreciado aprendiz, bienvenido a este componente formativo, donde podrá reconocer el papel decisivo sobre el correcto registro y uso de la documentación de carácter técnico, utilizado en las organizaciones.
              br
              br
              p Conocerá algunas de las herramientas y técnicas fundamentales para el diseño, elaboración y gestión de informes, y cómo ser eficaz en la tarea de compartirlos; también se revisarán parámetros claves para interpretar la documentación, las fichas técnicas de los recursos físicos y lógicos de la red de datos; se afianzará en algunos conceptos o procedimientos para la recolección de información, centrándose en cómo aprovechar algunos recursos tecnológicos para elaborar informes de alta calidad, tanto en el aspecto visual, como en su contenido (informes técnicos y ejecutivos). 
        

      .col-lg-4
        figure
              img(src='@/assets/curso/temas/introduccion/img1.svg', alt='Texto que describa la imagen')

    .row.justify-content-around.align-items-center.mt-4
      .col-lg-10.col-sm-10
      p En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo.


    .col-lg-12.mt-3
      figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption   VIDEO
    








    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
