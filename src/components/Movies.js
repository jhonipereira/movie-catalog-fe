import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Movies = () => {
    const [movies, setMovies] = useState([])

    useEffect( () => {
        const headers = new Headers();
        headers.append("Content-Type", "application/json");

        const requestOptions = {
            method: "GET",
            headers: headers
        }

        fetch(`/movies`, requestOptions)
            .then((response) => response.json())
            .then((data) => {
                setMovies(data)
            })
            .catch(err => {
                console.log(err)
            })
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