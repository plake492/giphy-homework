let topics = ['The Office', 'Stranger Things', 'Parks and Rec', 'Breaking Bad','Arrested Development','Greys Anatomy','Twin Peaks','Master of None','Big Mouth','Friends']

$(document).on("click", ".gifs", displayGIf);
function displayGIf() {
       
  let topic = $(this).attr("data-name"); 
  let queryURL ="https://api.giphy.com/v1/gifs/search?api_key=7h1vvQHXMixjDPQUyFAyvM6d9E60ANw4&q="+ topic +"s&limit=10&rating=r";
       
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    $('#gif-view').empty() // stop buttons from repeating

console.log(response)

// ----------------- Add GIFS ----------------- // 

    for (let i = 0; i < response.data.length; i++) {
      let rating = response.data[i].rating
      let gif = `
         <div>
            <img src="${response.data[i].images.original_still.url}"  data-still="${response.data[i].images.original_still.url}" data-animate="${response.data[i].images.original.url}" data-state="still" class="gif">
          <p>Rating: ${rating}</p>
          </div>    
            `;         
        $('#gif-view').prepend(gif);
      };
// ----------------- Add GIFS ----------------- // 
// ----------------- Pause , Play ----------------- // 
      $(".gif").on("click", function() {

        let state = $(this).attr('data-state')
        let animate = $(this).attr("data-animate")
        let still = $(this).attr("data-still")
          
        if (state === 'still') {
          $(this).attr('src', animate)
          $(this).attr('data-state', 'animate')
        } else {
          $(this).attr('src', still)
          $(this).attr('data-state', 'still')
        }
      });
// ----------------- Pause , Play ----------------- // 
  });
}
   

function renderButtons() {
  $("#buttons-view").empty(); 
  for (var i = 0; i < topics.length; i++) {
    var buttons = `
      <button class="gifs" data-name="${topics[i]}">
        <h4>${topics[i]}</h4>
      </button>`;
      $("#buttons-view").append(buttons);
  }
}

      
$("#add-show").on("click", function(event) {
  event.preventDefault();
  var show = $("#show-input").val().trim();
  topics.push(show);
  renderButtons();
});

renderButtons();




   
