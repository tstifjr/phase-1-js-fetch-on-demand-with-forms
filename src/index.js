const init = () => {
  const form = document.querySelector('form');
  form.addEventListener('submit', (e)=> {
    e.preventDefault();
    const myInput = e.target['searchByID'];
    console.log(myInput.value);

    fetch(`http://localhost:3000/movies/${myInput.value}`)
    .then ( r => r.json())
    .then (movieData => renderData(movieData))
  });
}

function renderData(movie){
    const title = document.querySelector('section#movieDetails h4');
    const summary = document.querySelector('section#movieDetails p');
    title.textContent = movie.title;
    summary.textContent = movie.summary;
}

document.addEventListener('DOMContentLoaded', init);