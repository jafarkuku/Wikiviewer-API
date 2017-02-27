


$(document).ready(function(){

  $('.searchbar').on('change, keydown, keyup', function(e){
    getData = function(data){
      var store = [];
      var arr = Object.values(data.query.pages);
      console.log(arr);
      var html = "";
      var html2 = "";
      for(a=0; a<=arr.length; a++){
        html += "<div class= 'title'>";
          html+= arr[a].title;
        html += "</div>";
        html += "<div class= 'snippet'>";
          html+= arr[a].terms.description;
        html += "</div>";
        $('.results').html(html);

      //$('.title').html(arr[a].title);
      //$('.snippet').html(arr[a].terms.description);
      //console.log(data);
    }
    };
  searchQuery = $(this).val();
  url = "https://en.wikipedia.org//w/api.php?action=query&format=json&prop=info%7Cpageterms%7Cpageimages&meta=&continue=&generator=search&inprop=url&wbptterms=description&piprop=thumbnail&gsrsearch="+searchQuery+"&gsrnamespace=0&gsrprop=wordcount%7Csnippet&sroffset=10&callback=?";

  $.getJSON(url,getData);
  console.log($(this).val());
  });
});


//<p class="title"></p>
//<p class="snippet"></div>
