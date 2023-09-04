import { Link } from 'react-router-dom';
import ticket from './../images/movie_tickets.jpg'

const Home = () => {
    return (
        <>
        <div className="text-center">
            <h2>Find a movie to watch</h2>
            <hr/>
            <Link to={"/movies"}>
                <img src={ticket} alt="Movie tickets" />
            </Link>
        </div>
        </>
    )
}

export default Home;