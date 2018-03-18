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
        const fetchMovies = (url) => {
            $.get(url)
                .done(initSingleShowPage)
                .fail(onErrorHandler)
        }
        let req = $.get(url);
        req.done(function(json){
          console.log(json.summary);
        });
    })
    

    return {

        
        initShowsPage,
        initSingleShowPage
    }

})(dataModule, uiModule);