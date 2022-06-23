require("dotenv").config();

const { default: axios } = require("axios");

const { BASEURL, KEY } = process.env;

module.exports = {
  getPopMovie: (req, res) => {
    const idArr = [];
    axios
      .get(
        `${BASEURL}movie/top_rated?api_key=${KEY}&language=en-US&page=${
          ((Math.random() * 100) | 0) + 1
        }`
      )
      .then((dbres) => {
        for (let i = 0; i < dbres.data.results.length; i++) {
          idArr.push(dbres.data.results[i].id);
        }
        const randomID = (Math.random() * idArr.length) | 0;
        axios
          .all([
            axios.get(
              `${BASEURL}movie/${idArr[randomID]}?api_key=${KEY}&language=en-US`
            ),
            axios.get(
              `${BASEURL}movie/${idArr[randomID]}/watch/providers?api_key=${KEY}&language=en-US`
            ),
          ])
          .then(
            axios.spread((dbres1, dbres2) => {
              const dbObj = {
                ...dbres1.data,
                ...dbres2.data,
              };
              res.status(200).send(dbObj);
            })
          )
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  },
  genreMovie: (req, res) => {
    const { genre, date, date1 } = req.body;
    let counter = 0

    const findGenre = () => {
      const idArr = [];
      axios
        .get(
          `${BASEURL}movie/top_rated?api_key=${KEY}&language=en-US&page=${
            ((Math.random() * 100) | 0) + 1
          }&primary_release_date.gte=${date}&primary_release_date.lte=${date1}&with_genres=${genre}`
        )
        .then((dbres) => {
          // loops over the page of movies obj and adds the movie id to an array
          for (let i = 0; i < dbres.data.results.length; i++) {
            idArr.push(dbres.data.results[i].id);
          }
          if (idArr.length === 0) {
            counter += 1;
            if (counter < 10) {
              console.log(counter);
              findGenre();
              return;
            } else {
              res.status(204).send("no movie found");
            }
          }
          const randomID = (Math.random() * idArr.length) | 0;
          axios
            .all([
              axios.get(
                `${BASEURL}movie/${idArr[randomID]}?api_key=${KEY}&language=en-US`
              ),
              axios.get(
                `${BASEURL}movie/${idArr[randomID]}/watch/providers?api_key=${KEY}&language=en-US`
              ),
            ])
            .then(
              axios.spread((dbres1, dbres2) => {
                const dbObj = {
                  ...dbres1.data,
                  ...dbres2.data,
                };
                res.status(200).send(dbObj);
              })
            )
            .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err));
    };
    findGenre();
  },
};
