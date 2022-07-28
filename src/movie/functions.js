const Movie = require("./table");

exports.createMovie = async (movieObj) => {
    try {
      const newMovie = await Movie.create(movieObj);
      console.log(newMovie);
    } catch (error) {
      console.log(error);
    }
  };
//----------------------------------------------------------------------------------------------------
exports.readMovie = async (movieObj) => {
    try {
        const results = await Movie.findAll(movieObj)
        console.log(results);
    } catch (error){
        console.log(error)
    }
}
//----------------------------------------------------------------------------------------------------
exports.updateMovie = async (movieObj) => {
    try {
        
        await Movie.update({title: movieObj.newTitle},{where:{title: movieObj.title}});
    } catch (error){
        console.log(error)
    }
}
//----------------------------------------------------------------------------------------------------
exports.deleteMovie = async (movieObj) => {
    try {
        await Movie.destroy({where:{title: movieObj.title}});
    } catch (error){
        console.log(error)
    }
}