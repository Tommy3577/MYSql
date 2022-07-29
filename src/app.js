const yargs = require("yargs");
const { sequelize } = require("./db/connection");
const { createMovie, readMovie, updateMovie, deleteMovie } = require("./movie/functions");

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
  else if (yargsObj.update) {
    await updateMovie({ title: yargsObj.title, newTitle: yargsObj.newTitle, actor: yargsObj.actor, newActor: yargsObj.newActor });
    //update a movie from db
  }
//------------------------------------------------------------------------------------  ----------------
  else if (yargsObj.delete) {
    await deleteMovie({where:{title: yargsObj.title}});
    //delete a movie from db
  }
//----------------------------------------------------------------------------------------------------
  else {
    console.log("Incorrect command");
  }
};

app(yargs.argv);




// https://sequelize.org/docs/v6/core-concepts/model-querying-basics/
