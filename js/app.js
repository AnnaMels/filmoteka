import { state } from './model.js';

function render() {
    renderLinks();
}

const homeLink = document.querySelector('.home-link');
const libraryPageLink = document.querySelector('.library-link');

function renderLinks() {
    if(state.page === 'home') {
        libraryPageLink.classList.remove('currentPage')
        homeLink.classList = 'currentPage';
    } 
    
    if(state.page === 'library') {
        homeLink.classList.remove('currentPage');
        libraryPageLink.classList = 'currentPage';
    }
}

homeLink.addEventListener('click', (e) => {
    e.preventDefault();
    state.page = 'home';
    render();
})

libraryPageLink.addEventListener('click', (e) => {
        e.preventDefault();
        state.page = 'library';
        render();
    })

    render();


let filmsArr = [];

function getLatestFilms() {
    fetch('https://api.themoviedb.org/3/trending/all/day?api_key=584850c42ae7d2e479212f5963ad1dce')
    .then(response => {
        return response.json()
    })
    .then(films => {
    const allFilms = films.results;
    for(let i = 0; i < allFilms.length; i += 1) {
        let film = {};
        film.genres = allFilms[i].genre_ids;
        film.title = allFilms[i].title || allFilms[i].name;
        film.image = allFilms[i].poster_path;
        film.vote = allFilms[i].vote_average;
        film.votes = allFilms[i].vote_count;
        film.popularity = allFilms[i].popularity;
        film.original_title = allFilms[i].original_title || allFilms[i].original_name;
        film.description = allFilms[i].overview;
        filmsArr.push(film);
    }
    })
    return filmsArr;

}
getLatestFilms();

function replaceGenresIdsByNames(films) {
    fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=584850c42ae7d2e479212f5963ad1dce')
    .then(response => {
        return response.json()
    })
    .then(genresItems => {
        const genres = genresItems.genres;
        for(let i = 0; i < films.length; i += 1) {
            for(let i = 0; i < genres.length; i += 1) {

                }
            }
           
    })
}

    
    

replaceGenresIdsByNames(filmsArr);