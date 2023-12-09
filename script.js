 let run = document.getElementById('search')
 let movie = document.getElementById('movie')
function search(){  
    fetch(`http://www.omdbapi.com/?s=${run.value}&page=1&apikey=ec3092fc`)
    .then(result=> result.json())
    .then(data=>{
       
        let film = ''
       
        data.Search.map((value,index)=>{
          
            film +=`
        <div class='flex-cont'>
           <div>
             <img src="${value.Poster}" alt="Film_Pictures"> 
          
           </div>
          <div class="flex-items">
               <small>${value.Year}</small>
               <strong>${value.Type}</strong>
                <p> ${value.Title.slice(0, 25)}</p>
           </div>   
        </div>`
        })
        movie.innerHTML = film
        console.log(data)
    })
}
// http://www.omdbapi.com/?s=Batman&page=2
// http://www.omdbapi.com/?s=tt3896198&apikey=ec3092fc