const dataModule = (($) => {
    const constants = {
        baseUrl: "http://api.tvmaze.com/shows"
    }
    class Show {
        constructor(id, name, image) {
            this.id = id;
            this.name = name;
            this.image = image;
        }
        getData() {
            const { id, name } = this
            return `ID: ${id}, NAME: ${name}`
        }
    }
        const createMovieList = (shows) => {

            const showList = shows.map((show) => {
                const {id, name, image} = show
                return new Show(id, name, image);

            })
            return showList.slice(0,51);
        }
        return{
            constants,
            createMovieList
        }
    })(jQuery);