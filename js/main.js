//Query selector variables and eventListeners
let slashButton = document.querySelector('#slash')
let saveButton = document.querySelector('#save')
let settingsButton = document.querySelector('#settings')
let nextButton = document.querySelector('#next')
let poster = document.querySelector('#poster')
let description = document.querySelector('#description')
let title = document.querySelector('#title')
let databaseRating = document.querySelector('#dbrating')
let slashrRating = document.querySelector('#slrating')



slashButton.addEventListener('click', slashMovie)
saveButton.addEventListener('click', saveMovie)
settingsButton.addEventListener('click', openSettings)
nextButton.addEventListener('click', getNewMovie)

//functions TEMPORARY
function slashMovie(){
  console.log('slash button works')
}
function saveMovie(){
  console.log('save button works')
}
function openSettings(){
  console.log('settings button works')
}

//serverRequests
async function getNewMovie(){

 const res = await fetch(`/api`)
 const data = await res.json()

 console.log(data);
  //movie selection and property variables
  let newTitle = data.title
  let newPosterPath = data.poster_path
  let newDescription = data.overview
  let newDatabaseRating = data.vote_average
  let newSlashrRating = data.vote_average
  //DOM changes
  poster.src = `https://image.tmdb.org/t/p/w500/${newPosterPath}`
  description.innerText = newDescription
  title.innerText = newTitle
  databaseRating.innerText = newDatabaseRating
  
  
  


}
  // let randPage = Math.ceil(Math.random() * 500)
  // console.log(randPage)
  // const res = await fetch(`/api?pagenumber=${randPage}`)
  // const data = await res.json()

  // console.log(data);
// async function getNewMovie(){
//   let randPage = Math.ceil(Math.random() * 500)
//   console.log(randPage)
//   const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=585021f63795aea89ca90be073375167&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${randPage}&with_genres=27&with_watch_monetization_types=flatrate`)
//   const data = await res.json()

//   console.log(data);
  
// }