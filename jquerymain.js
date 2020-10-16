/* Esconder Campo de Mensagem */
$(document).ready(function(){
    $("#abrircampo").click(function(){
      $("#menssagem").slideToggle("slow");
    });
  });

  $(document).ready(function(){
      $("#resultadolink").click(function(){
          $("#linkfinal").slideToggle("slow");
      })
  })

/* Copiar e Colar */
$(function () {
    $("#copiar").click(function () {
        $("#linkfinal").slideToggle("slow");
        $('#linkfinal').select();
        var selecionar = document.execCommand('selectAll');
        var copiar = document.execCommand('copy');
    });
});

$(function () {
    $('#limpar').click(function () {
          $("#linkfinal").slideToggle("slow");
        $('#linkFinal').select();
        $('#linkfinal').focus();
        var selecionar = document.execCommand('selectAll');
        var limpar = document.execCommand('delete');
    })
});