const mainModule = ((data, ui) => {
    const initShowsPage = () => {
        const {
            baseUrl
        } = data.constants
        fetchMovies(baseUrl)
    }
    const initSingleShowPage = (response) => {
        console.log(response)

    }
    const fetchMovies = (url) => {
        $.get(url)
            .done(onSuccessHandler)
            .fail(onErrorHandler)
    }

    const onSuccessHandler = (response) => {
        const availableMovies = data.createMovieList(response)
        uiModule.displayMovies(availableMovies);
    }
    const onErrorHandler = (error) => {
        console.log(error)
    }
    $(document).on("click", "a", function (event) {
        event.preventDefault()
    
        url = 'http://api.tvmaze.com/shows/'+$(this).data('showid')
        let req = $.get(url);
    
        req.done(function(json){
            uiModule.displayMovie(json);
        });
    })
    
    $(document).ready(function() {
        $.get('http://api.tvmaze.com/shows').done(function(response) {
            let moviesForSearch = [];        

            moviesForSearch = data.createMovieList(response);

            let moviesForSelect = moviesForSearch.map((movie) => {
                let m = {};
                m.id = movie.id;
                m.label = movie.name;
                return m;
            })
            
            $("#searchBox").autocomplete({
                source: moviesForSelect,
                select: function( event, ui ) { 
                    url = 'http://api.tvmaze.com/shows/'+ ui.item.id
                    let req = $.get(url);
                
                    req.done(function(json){
                        uiModule.displayMovie(json);
                    });
                             }
              });
        });
    });

    return {

        
        initShowsPage,
        initSingleShowPage
    }

})(dataModule, uiModule);