const MOVIES_KEY = "movies";

//getMovies() → movies nikalta hai local storage se
export const getMovies = () => {
  return JSON.parse(localStorage.getItem(MOVIES_KEY)) || [];
};

//saveMovies() → movies save karta hai local storage mein 
export const saveMovies = (movies) => {
  localStorage.setItem(MOVIES_KEY, JSON.stringify(movies));
};
