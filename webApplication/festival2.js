"use strict";

(function () {
    function Genre(name) {
        this.name = name;
    }

    Genre.prototype.getData = function () {
        var firstLetter = this.name.charAt(0);
        var lastLetter = this.name.charAt(this.name.length - 1);
        var result = firstLetter + lastLetter;
        return result.toUpperCase();
    }

    function Movie(title, genre, length) {
        this.title = title;
        this.genre = genre;
        this.length = length;
    }

    Movie.prototype.getData = function () {
        return this.title + ', ' + this.length + "min, " + this.genre;

    }



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


    function Festival(nameFestival) {
        this.nameFestival = nameFestival;
        this.programs = [];
    }
    // this.totalNumOfMovies = totalNumOfMovies;
    Festival.prototype.programFestival = function (program1) {
        return this.programs.push(program1)


    }

    Festival.prototype.getDataFestival = function () {
        var final = '';

        var firstFinal = this.nameFestival + ' has  movie titles ' + this.programFestival() + ' movies \n';

        var result = '';
        for (var i = 0; i < this.programs.length - 1; i++) {
            result += '\t' + this.programs[i];
        }
        final = firstFinal + result;
        return final;
    }

    var action = new Genre("Action");
    var genre1 = new Genre("Western");
    var genre2 = new Genre("Comedy");
    var genre3 = new Genre("Drama");
    // console.log(action.getData());

    var movie1 = new Movie("The Shawshank Redemption", action.getData(), 130)

    // console.log(movie1.getData());
    var movie2 = new Movie("Deadpool", genre2.getData(), 108)
    var movie3 = new Movie("The Dark Tower", genre1.getData(), 95)
    var movie4 = new Movie("War for the Planet of the Apes", genre3.getData(), 140)



    var program1 = new Program(new Date(2018, 2, 25));
    var program2 = new Program(new Date(2018, 2, 25));


    program1.addMovie(movie1);
    program1.addMovie(movie2);
    program1.addMovie(movie3);
    program2.addMovie(movie1);
    program2.addMovie(movie2);
    program2.addMovie(movie4);

    // console.log(program1.getData());



    var festival1 = new Festival('Weekend Festival');
    var festival2 = new Festival('Weekend Festival');
    festival1.programFestival(program1.getData());
    festival1.programFestival(program2.getData());
    console.log(festival1.getDataFestival());



})();