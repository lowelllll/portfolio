var projectSize = $("#project-img").height();
$(".cover").height(projectSize);

$(window).resize(function(){
  var projectSize = $("#project-img").height();
  $(".cover").height(projectSize);
});