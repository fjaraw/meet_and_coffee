(function aumentar_espacio() {
    $('h1').html($('h1').html().substring(0, 8))
    $('main h2.h3').css('font-size', '1rem')
    $('img[alt="Instituto Praxis"]').css('display', 'none')
    $('header section .col-8.col-md.mb-1').css('display', 'none')
    $('header .col-4.col-md.mb-1.text-md-right').css('display', 'none')
})()