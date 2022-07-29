const yargs = require("yargs");
const { sequelize } = require("./db/connection");
const { createMovie, readMovie, updateMovie, deleteMovie, findMovie } = require("./movie/functions");

const app = async (yargsObj) => {
  await sequelize.sync({ alter: true });

  if (yargsObj.create) {
    await createMovie({ title: yargsObj.title, actor: yargsObj.actor });
    //add movie to db
  }
//----------------------------------------------------------------------------------------------------
  else if (yargsObj.read) {
    await readMovie();
    //list movies from db
  }
//----------------------------------------------------------------------------------------------------
else if (yargsObj.find) {
  await findMovie({ title: yargsObj.title, actor: yargsObj.actor});
  //find a specific movie or actor
}
//----------------------------------------------------------------------------------------------------
  else if (yargsObj.update) {
    await updateMovie({ title: yargsObj.title, newTitle: yargsObj.newTitle, actor: yargsObj.actor, newActor: yargsObj.newActor });
    //update a movie from db
  }
//----------------------------------------------------------------------------------------------------
  else if (yargsObj.delete) {
    await deleteMovie({where:{title: yargsObj.title}});
    //delete a movie from db
  }
//----------------------------------------------------------------------------------------------------
  else {
    console.log("Incorrect command");
  }
};
//----------------------------------------------------------------------------------------------------
app(yargs.argv);