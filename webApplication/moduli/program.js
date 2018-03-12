function Program(date, movies, numOfMovies) {
    this.date = new Date(date); //samo new Date()je danasnji datum,a new Date(date)je uneseni datum 
    this.movieList = [];
}

Program.prototype.addMovie = function (movie) {
    this.movieList.push(movie);
}

Program.prototype.getNumOfMovies = function () {
    this.numOfMovies = numOfMovies;
    return this.movieList.length;
}

Program.prototype.programLength = function () {
    var length = 0;
    for (var i = 0; i < this.movieList.length; i++) {
        var movie = this.movieList[i];
        length += movie.length;

    }
    return length;
}

Program.prototype.getData = function () {
    var myDate = this.date;
    var dayProgram = '\t';

    dayProgram += this.date.getDate() + '.' + this.date.getMonth() + '.' + this.date.getYear() + ',' + ' program length from ' + this.programLength() + ' min  from all movies \n';
    for (var i = 0; i < this.movieList.length; i++) {
        var movie = this.movieList[i]
        dayProgram += '\t\t\t' + movie.getData() + '\n';
    }
    return dayProgram;
}

module.exports = {
    Program
}