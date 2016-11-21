$(document).ready(function(){



$('#btn').click(function(){

   var titulo = $('#pregunta').val();

    var inicio = '<div id="child" class="card"><div class="card-content"><p>'
  
   var final = '</p></div><div class="card-action"><a href="detail.html">This is a link</a></div></div>'
   var child = $(inicio + titulo + final)

    $("#padre").prepend(child);
});


});

function obtenerData(){
                  $.ajax({
                      url: "metadatos/foro.xml",
                      dataType: "xml",
                      success: function(data) {


                          $(data).find("metaforo").each(function(){

                              var tema1 = $(this).find("tema1").text();
                              var tema2 = $(this).find("tema2").text();
                              var tema3 = $(this).find("tema3").text();

                              $('#rel1').html(tema1);
                              $('#rel2').html(tema2);
                              $('#rel3').html(tema3);

                              return data;


                          })
                      }
                  });
              }