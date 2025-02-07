const API_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYTc1MTE1YmMyYjMzOWQyOWQyMzZhYWMxNzYzNzZkOCIsIm5iZiI6MTcyOTMxMzIwMi40MDQsInN1YiI6IjY3MTMzOWIyMmJiYmE2NWY3YjEwYThmNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.odq7v3Agi7j8m3bSXoeLCUQ_Rw1KuBec69ZRW6yaFQE";

const POPULAR_MOVIES_API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=vi-VN&page=1`;
const TOP_RATED_MOVIES_API_URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=vi-VN&page=1`;
const UPCOMING_MOVIES_API_URL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=vi-VN&page=1`;
const NOW_PLAYING_MOVIES_API_URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=vi-VN&page=1`;
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYTc1MTE1YmMyYjMzOWQyOWQyMzZhYWMxNzYzNzZkOCIsIm5iZiI6MTcyOTMxMzIwMi40MDQsInN1YiI6IjY3MTMzOWIyMmJiYmE2NWY3YjEwYThmNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.odq7v3Agi7j8m3bSXoeLCUQ_Rw1KuBec69ZRW6yaFQE'
    }
};

fetch(NOW_PLAYING_MOVIES_API_URL, options)
    .then(response => response.json())
    .then(data => displayMovies(data.results, "nowPLayingMoviesContainer"))
    .catch(error => console.error("Error fetching movies:", error));

fetch(POPULAR_MOVIES_API_URL, options)
    .then(response => response.json())
    .then(data => displayMovies(data.results, "popularMoviesContainer"))
    .catch(error => console.error("Error fetching movies:", error));

fetch(TOP_RATED_MOVIES_API_URL, options)
    .then(response => response.json())
    .then(data => displayMovies(data.results, "topRatedMoviesContainer"))
    .catch(error => console.error("Error fetching movies:", error));

fetch(UPCOMING_MOVIES_API_URL, options)
    .then(response => response.json())
    .then(data => displayMovies(data.results, "upComingMoviesContainer"))
    .catch(error => console.error("Error fetching movies:", error));

function displayMovies(movies, containerId) {
    var moviesContainer = document.getElementById(containerId);
    moviesContainer.innerHTML = '';

    movies.forEach(function (movie) {
        var movieElement = document.createElement('div');
        movieElement.classList.add('movie-card');
        movieElement.innerHTML = `
            <img src="${IMAGE_BASE_URL}${movie.poster_path}" alt="${movie.title}">
            <h3>${movie.title}</h3>
            <p>⭐ ${movie.vote_average} / 10</p>`;
        moviesContainer.appendChild(movieElement);
    });
}

