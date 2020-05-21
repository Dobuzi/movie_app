import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import './Home.css';

const API_YTS = "https://yts-proxy.now.sh/";
const SORT_BY_RATING = "?sort_by=rating"
const URL_LIST_MOVIES = API_YTS + "list_movies.json" + SORT_BY_RATING;

class Home extends React.Component {
    state = {
        isLoading: true,
        movies: []
    };

    getMovies = async () => {
        const {
            data: {
                data: { movies }
            }
        } = await axios.get(URL_LIST_MOVIES);

        this.setState({ movies, isLoading: false });
    };

    componentDidMount() {
        this.getMovies();
    }

    render() {
        const { isLoading, movies } = this.state;
        return (
            <section className="container">
                {isLoading ?
                    <div className="loader">
                        <span className="loader__text">Loading...</span>
                    </div> : <div className="movies">
                        {movies.map(movie => (
                            <Movie
                                key={movie.id}
                                id={movie.id}
                                title={movie.title}
                                year={movie.year}
                                summary={movie.summary}
                                poster={movie.medium_cover_image}
                                genres={movie.genres}
                            />
                        ))}
                    </div>
                }
            </section>
        )
    };
};


export default Home;
