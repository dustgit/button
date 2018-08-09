$(document).ready(function() {
  $("form#add").submit(function(event) {
    event.preventDefault();
    var height = parseInt($("input#add1").val());

    if(height > 60) {
      $('#over60').show();
    } else if (height <= 60 && height >= 40) {
      $('#between').show();
    } else  (height < 40) {
      $('#under40').show();
    }
  });
});


// $(document).ready(function() {
//   $("form#add").submit(function() {
//     var number1 = parseInt($("input#add1").val());
//     $("#over60").show();
//        event.preventDefault();
//   });
// });
