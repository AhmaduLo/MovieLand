import React from 'react';

const MoviesCard = ({ movie }) => {
    return (
        
        <div>
            <div className='movie'>
                <div>
              <p>{movie.Year}</p>
                </div>
                <div>
                    <img src={movie.Poster} alt={movie.Title} />
                </div>
                <div>
                    <span>
                        {movie.Type}
                    </span>
                    <h3>{movie.Title}</h3>
                </div>
            </div>
        </div>
    );
};

export default MoviesCard;