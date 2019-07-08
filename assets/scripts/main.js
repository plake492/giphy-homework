

    let topics = ['The Office', 'Stranger Things', 'Parks and Rec', 'Breaking Bad',]

    function displayGIf() {

        let topic = $(this).attr("data-name"); // WILL NEED ONCE I ADD A SEARCH BAR 
        let queryURL ="https://api.giphy.com/v1/gifs/search?api_key=7h1vvQHXMixjDPQUyFAyvM6d9E60ANw4&q="+ topic +"s&limit=10";

        $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(response) {
            for (let i = 0; i < response.data.length; i++) {
            console.log(response)
            console.log(queryURL)
            $('#gif-view').prepend(`<img src="${response.data[i].images.original.url}">`)
            }
        });
      }
   

    function renderButtons() {
        $("#buttons-view").empty(); 
        for (var i = 0; i < topics.length; i++) {
          var a = $("<button>");
          a.addClass("gifs"); 
          a.attr("data-name", topics[i]); 
          a.text(topics[i]);
          $("#buttons-view").append(a);
        }
      }

      $(document).on("click", ".gifs", displayGIf);
      renderButtons();
