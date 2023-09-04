import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Movies = () => {
    const [movies, setMovies] = useState([])

    useEffect( () => {
        let moviesList = [
            {
                id: 1,
                title: "Highlander",
                release_date: "1986-03-07",
                runtime: 116,
                mpaa_rating: "R",
                description: "Some long description",
            },
            {
                id: 2,
                title: "Raiders of the lost ARC",
                release_date: "1988-02-09",
                runtime: 115,
                mpaa_rating: "PG-13",
                description: "Some long description",
            },
        ]

        setMovies(moviesList)
    },[])

    return (
        <>
        <div className="text-center">
            <h2>Movies</h2>
            <hr/>

            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Movie</th>
                        <th>Release Date</th>
                        <th>Rating</th>
                    </tr>
                </thead>
                <tbody>
                    { movies ? 
                        movies.map( (item) => (
                        <tr key={item.id}>
                            <td>
                                <Link to={`/movies/${item.id}`}>
                                    {item.title ?? "-" }
                                </Link>
                            </td>
                            <td>{item.release_date ?? "-"}</td>
                            <td>{item.mpaa_rating ?? "-"}</td>
                        </tr>
                    )) : 
                    <tr><td colSpan={3}>No movies available</td></tr>  }
                </tbody>
            </table>
        </div>
        </>
    )
}

export default Movies;