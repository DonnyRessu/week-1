import JumbotronTv from "../component/jumbotronTv"
import TvMovie from "../component/TvMovie"

function TvShows() {
    const movies = {
        tv : {
          tv1: {
            image: "Tv1",
            name: "The Witcher",
            year: "2019"
          },
          tv2: {
            image: "Tv2",
            name: "Persona 3 The Movie",
            year: "2016"
          },
          tv3: {
            image: "Tv3",
            name: "Game Of Thrones",
            year: "2011"
          },
          tv4: {
            image: "Tv4",
            name: "Money Heist",
            year: "2017"
          },
          tv5: {
            image: "Tv5",
            name: "Touch",
            year: "2020"
          },
          tv6: {
            image: "Tv6",
            name: "Arrow",
            year: "2012"
          }
        },
        movie: {
          movie1: {
            image: "movie1",
            name: "The GodFather",
            year: "1972"
          },
          movie2: {
            image: "movie2",
            name: "The Dark Knight",
            year: "2008"
          },
          movie3: {
            image: "movie3",
            name: "Avengers: Endgame",
            year: "2019"
          },
          movie4: {
            image: "movie4",
            name: "Joker",
            year: "2019"
          },
          movie5: {
            image: "movie5",
            name: "Gisaengchung",
            year: "2019"
          },
          movie6: {
            image: "movie6",
            name: "Chernobyl",
            year: "2019"
          },
        }
      }
    return (
        <>
           <JumbotronTv />
           <TvMovie film={movies} />
        </>
    )
}

export default TvShows