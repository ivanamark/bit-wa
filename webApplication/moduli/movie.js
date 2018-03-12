function Movie(title, genre, length) {
    this.title = title;
    this.genre = genre;
    this.length = length;
}

Movie.prototype.getData = function () {
    return this.title + ', ' + this.length + "min, " + this.genre;

}
module.exports={
    Movie
}