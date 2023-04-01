import { Link } from "react-router-dom"

function TvMovie(props) {
    const obj1 = Object.values(props.film.tv)
    const obj2 = Object.values(props.film.movie)
    console.log(obj1)

    const ListTv = () => {
        return obj1.map((tv) => {
            console.log(tv.image)
            return (
                <div>
                    <Link to={"/detailTv"}>
                    <img src={require(`../img/film/${tv.image}.png`)} />
                    <p className="text-white text-xs mt-1">{tv.name}</p>
                    <p className="text-slate-600 text-xs mt-1">{tv.year}</p>
                    </Link>
                </div>
            )
        })
    }

    const ListMovie = () => {
        return obj2.map((movie) => {
            return (
                <div>
                    <Link to={"/detailMovie"}>
                    <img src={require(`../img/film/${movie.image}.png`)} />
                    <p className="text-white text-xs mt-1">{movie.name}</p>
                    <p className="text-slate-600 text-xs mt-1">{movie.year}</p>
                    </Link>
                </div>
            )
        })
    }

    return(
        <>  
            <div>
                <div>
                    <h1 className="text-white ml-5">Tv Series</h1>
                </div>
                <div className="flex container mx-auto gap-9 mt-4">
                    <ListTv />
                </div>
            </div>
            <div>
                <div>
                    <h1 className="text-white ml-5">Movies</h1>
                </div>
                <div className="flex container mx-auto gap-9 mt-4">
                    <ListMovie />
                </div>
            </div>
        </>
    )
}

export default TvMovie