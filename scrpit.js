let movieNameRef = document.getElementById("movie-name");
let searchBtn = document.getElementById("search-btn")
let result = document.getElementById("result")



let getMovie = (()=>{
    let movieName = movieNameRef.value; 
    console.log(movieName);
    let url = `https://www.omdbapi.com/?t=${movieName}&apikey=${key}`
    //if input field is empty
    if(movieName.length < 1){
        result.innerHTML = `<h3 class="msg">Please Enter A Movie Name</h3>`
    }
    //If input field is NOT empty
    else{
        fetch(url)
        .then((resolve)=>resolve.json())
        .then((data)=>{
            console.log(data);
            //If movie exists in database
        if (data.Response == "True") {
          result.innerHTML = `
            <div class="info">
                <img src=${data.Poster} class="poster">
                <div>
                    <h2>${data.Title}</h2>
                    <div class="rating">
                        <img src="star-icon.svg">
                        <h4>${data.imdbRating}</h4>
                    </div>
                    <div class="details">
                        <span>${data.Rated}</span>
                        <span>${data.Year}</span>
                        <span>${data.Runtime}</span>
                    </div>
                    <div class="genre">
                    <div>${data.Genre.split(",").join("</div><div>")}</div>
                    </div>
                </div>
            </div>
            <h3>Plot:</h3>
            <p>${data.Plot}</p>
            <h3>Cast:</h3>
            <p>${data.Actors}</p>
            
        `
        }
        // 
        //If movie does NOT exists in database
        else {
          result.innerHTML = `<h3 class='msg'>movie does NOT exists in database</h3>`;
        }      
      })   
    }
})

