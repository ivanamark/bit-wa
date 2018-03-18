const uiModule = (($) => {
    const $dataElement = $(".row")

    const displayMovies = (shows) => {  
        shows.forEach((show) => {
            const $showCard = createCard(show);
            $dataElement.append($showCard);
        });
    }
const createCard = (show) => {
    const {
        image,
        name,
        id
    } = show

return $(` 
<div class="col-md-4 col-sm-6">
         <div class="card" style="width: 21rem;">
           <img class="card-img-top image-fluid" src="${image.medium}" alt="Card image cap">
           <div class="card-body">
                 <a href="#" showid="${id}">
                     <h4 class="card-text">${name}</h4>
                 </a>
             </div>
         </div>
         </div>
     `) }
     const searchList = (list) => {
        let result = `<ul class="list-group">`;
        list.forEach(element => {
            result += `<li class="list-group-item">${element.show.name}</li>`
        })
        result += `</ul>`;
        console.log(result);
        return $('.showing-result').append(result);
    }
    
    const displayError = (error) => {
        return $('#resultMovies').innerHTML = "<h3>Error</h3>"
    }
    return {
        displayMovies,
        displayError,
        searchList
    }
   
})(jQuery);
