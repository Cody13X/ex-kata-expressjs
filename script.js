$(document).ready(function() /*=>*/ {
  function list( names ){
    return names.reduce(function(prev, curr, i, arr){
      return prev + curr.name + (i<arr.length-2?', ':i==arr.length-2?' & ':'');
    }, '');
  }
  //$('p').text(prout);
  $.getJSON('people.json', function(data){
    var pipo = JSON.stringify( list(data) );
    $('p').text(pipo);
  });
})
