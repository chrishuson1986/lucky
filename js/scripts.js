$(document).ready(function(){
  $("form#lucktest ").submit(function(event){
    event.preventDefault();
    var unlucky = 0;
    var lucky = 0;

    $("input:checkbox[name=unlucky]:checked").each(function(){
      unlucky += 1
    });
    $("input:checkbox[name=lucky]:checked").each(function(){
      lucky += 1
    });

    if(unlucky > lucky){
      $("#unlucky").show();
      $("#lucky").hide();
      $("#yousuck").hide();
    } else if (unlucky < lucky){
      $("#lucky").show();
      $("#unlucky").hide();
    } else {
      $("#yousuck").show();
      $("#unlucky").hide();
      $("#lucky").hide();
    }
  });
});
