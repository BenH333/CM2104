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
  var url = "http://www.omdbapi.com/?i=tt3896198&apikey=b881d01f&s=" + searchterms;
  //use jquery shortcut
  $.getJSON(url, function(jsondata){
    //handle the results
    addResultTitles(jsondata);
  });
}

function addResultTitles(jsondata){
  //create a string to contain our HTML code to inject
  var htmlstring = "";
  //iterate over the collection of results
  for (var i=0; i<10; i++){
    var title = jsondata.Search[i].Title;
    htmlstring += "<li>" + title + "</li>";
  }

  //inject the HTML into our empty list
  $("#results").html(htmlstring);
}
