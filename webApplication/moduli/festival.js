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
module.exports={
    Festival
}