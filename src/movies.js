// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(movies){
    const arrayOfDirectors = movies.map((objeto)=>objeto.director);
    return arrayOfDirectors;
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

function cleanArrayDirectors(directors){
    const directorsClean = directors.filter(directorDuplicado);
    return directorsClean;
}

function directorDuplicado(director, indice, array){
for(let i=0; i<indice;i++){
  if(array[i]===director)return false;
}
return true;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {
    const arrayOfDirectors = movies.filter((objeto)=>(objeto.director==="Steven Spielberg" && objeto.genre.includes("Drama")));
    return arrayOfDirectors.length;
  }

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies){
    let average = movies.reduce((acc, next)=>{
        return next.rate? acc + next.rate : acc + 0; //sumamos 0 si no existe puntuación

    },0);
    average = (average/movies.length) || 0; // media es igual a 0 si no hay películas
    return Number.parseFloat(average.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
