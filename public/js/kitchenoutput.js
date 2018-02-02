

//Test code


var countries = ['United States', 'Canada', 'Argentina', 'Armenia'];
var countrie = ['US', 'CA', 'AR', 'AR'];

  

$.each(countries, function(i)

{   
    var li = $('<li/>')
  
        .appendTo('#order1');

    var aaa = $('<a/>')
        .text(countries[i])
        .appendTo(li);
});