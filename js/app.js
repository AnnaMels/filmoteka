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