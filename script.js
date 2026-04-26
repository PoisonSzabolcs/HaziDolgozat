window.addEventListener('DOMContentLoaded', fetchData)



async function fetchData() {
    try {
        let Images = [];
        const URL = 'https://nodejs111.dszcbaross.edu.hu/api/movie'

        const res = await fetch(URL)
        Filmek = await res.json();
       
        loadSidebar(Filmek);
        displayFilmek(Filmek);

    } catch (error) {
        console.log(error);
    }

}

function loadSidebar(Filmek){
    const movies = document.querySelector('#movie-list');
    movies.innerHTML = '';

    Filmek.forEach(film => {
         const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = '#gallery'
    a.text = film.title;
    console.log(Filmek)
    li.appendChild(a)
    movies.append(li)
    });
   

}

function displayFilmek(Filmek){
    const grid = document.querySelector('#gallery')
    grid.innerHTML = ''

    Filmek.forEach(film  => {
        const div = document.createElement('div');
        div.classList.add('img-container')

        const div2 = document.createElement('div');
        div2.classList.add('tagBg')
        
        const imgTitle = document.createElement('p')
        imgTitle.classList.add('imgTitle')
        imgTitle.textContent = film.title
        div2.appendChild(imgTitle)

        const div3 = document.createElement('div')
        div3.classList.add('tags-wrapper')

        const mufaj = document.createElement('span')
        mufaj.textContent = film.genre;
        mufaj.classList.add('tags')
        div3.appendChild(mufaj)

        const age = document.createElement('span')
        age.classList.add('tags')
        age.textContent = film.age_rating
        div3.appendChild(age)
        div2.appendChild(div3)
        const img = document.createElement('img')
        img.title = film.title
        img.src = film.image
        img.alt = film.title
        div.appendChild(img)
        div.appendChild(div2)
        grid.append(div)

      
        

    })

}