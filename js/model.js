export let state = {
    page: 'home',  // value: "home" or "library"
    search: '', // при успішному пошуку фільму по ключовому слову відбувається рендер карток фільмів. Також змінюються номери сторінок 
    searchError: 'false', // value: true or false. 'Search result not successful. Enter the correct movie name.' or 'Search result not successful. ' при некоректному вводі або при відсутності певного фільму під інпутом з'являється повідомлення про помилку 
    pagination: {
       currentPage: '', 
       pageCount: '', 
    }, 

    library: {
        page: 'watched', // values: watched or queue
    }
} 


let film = {
    image: '', 
    title: '', 
    vote: 0.0, 
    votes: 0,
    popularity: '', 
    originalTitle: '', // there is a difference between title and original title
    genre: '',
    description: '',
    state: '', // value: watched|queue|regular
}