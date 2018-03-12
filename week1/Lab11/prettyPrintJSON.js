$(function(){
  //document ready
  alert("document ready");

  $('#searchform').submit(function(){
    //get current value and add to items list
    var searchterms = $('#searchterms').val();
    //call out youtube function
    getResultsFromOMDB(searchterms);
    return false;
  });
});

function getResultsFromOMDB(searchterms){
  //call youtube API using AJAX
  //build url for th request
  var url = "http://www.omdbapi.com/?i=tt3896198&apikey=b881d01f" + searchterms;
  //use jquery shortcut
  $.getJSON(url, function(jsondata){
    //handle the results
    prettyPrintJSON(jsondata);
  });
}

function printJSON(jsondata){
  //prints the JSON to the screen
  var normal = JSON.stringify(jsondata);
  $('#resultsbox').append("<p>" + pretty + "</p>");
}
