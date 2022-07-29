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
    try{
        if (movieObj.title) {
          await Movie.update({title: movieObj.newTitle}, {where:{title: movieObj.title}});
          console.log(`Title ${movieObj.title} updated to ${movieObj.newTitle}`)
        }
        else if (movieObj.actor) {
          await Movie.update({actor: movieObj.newActor}, {where:{actor: movieObj.actor}});
          console.log(`Actor ${movieObj.actor} updated to ${movieObj.newActor}`)
        }
        else {
          console.log("Invalid command")
        }
      }
      catch(error) {
        console.log(error);
      }
    };
//----------------------------------------------------------------------------------------------------
exports.deleteMovie = async (movieObj) => {
    try {
        await Movie.destroy({where:{title: movieObj.title}});
    } catch (error){
        console.log(error)
    }
}
//----------------------------------------------------------------------------------------------------
exports.findMovie = async (movieObj) => {
    try{
      if (movieObj.title) {
        const results = await Movie.findAll({where:{title: movieObj.title}});
        console.log(results);
      }
      else if (movieObj.actor) {
        const results = await Movie.findAll({where:{actor:movieObj.actor}});
        console.log(results);
      }
      else {
        console.log("Invalid command")
      }
    }
    catch(error) {
      console.log(error);
    }
  };