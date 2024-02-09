let movies = [
  {movieName: "Barbie", rating: "4.5", genre: "Comedy", views: "1.500000"},
  {movieName: "Interstellar", rating: "3", genre: "Fantastic", views: "4.500000"},
  {movieName: "The Godfather", rating: "9.77", genre: "Crime", views: "12.000000"}
];

// Sorting functions

function sortMoviesByName(movieArray){
  return movieArray.sort((a, b) => a.movieName.localeCompare(b.movieName));
}

function sortMoviesByRating(movieArray) {
  return movieArray.sort((a, b) => b.rating - a.rating);
}

function sortMoviesByGenre(movieArray) {
  return movieArray.sort((a, b) => a.genre.localeCompare(b.genre));
}

function sortMoviesByViews(movieArray) {
  return movieArray.sort((a, b) => b.views - a.views);
}

// Declaring sorted arrays

let sortedByName = sortMoviesByName([...movies]);
let sortedByRating = sortMoviesByRating([...movies]);
let sortedByGenre = sortMoviesByGenre([...movies]);
let sortedByViews = sortMoviesByViews([...movies]);

// Logging the result

console.log(sortedByName);
console.log(sortedByRating);
console.log(sortedByGenre);
console.log(sortedByViews);
