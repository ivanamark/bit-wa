const {
    Genre
} = require('./genre')//injektovanje modula
const {
    Movie
} = require('./movie')
const {
    Program
} = require('./program')
const {
    Festival
} = require('./festival')

var action = new Genre("Action");
var genre1 = new Genre("Western");
var genre2 = new Genre("Comedy");
var genre3 = new Genre("Drama");


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

    var festival1 = new Festival('Weekend Festival');
    var festival2 = new Festival('Weekend Festival');
    festival1.programFestival(program1.getData());
    festival1.programFestival(program2.getData());
    console.log(festival1.getDataFestival());