$(document).ready(function(){
  $('a').click(function(){
     var video = $(this).attr("data-video");
     var iframe = '<iframe width="956" height="538" src="'+video+'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
     $("#mostra-video").html(iframe);
  }); 
  $('.modal').on('hidden.bs.modal', function (e) {
      $iframe = $(this).find("iframe");
      $iframe.attr("src", $iframe.attr("src"));
    });
});