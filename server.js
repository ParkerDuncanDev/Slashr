const http = require('http')
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const fetch = require('node-fetch')
const PORT = 8000


const server = http.createServer((req, res) => {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
      else if (page == '/api') {

        async function getNewMovie(){
          let pageNumber = Math.ceil(Math.random() * 500)
          const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=585021f63795aea89ca90be073375167&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNumber}&with_genres=27&with_watch_monetization_types=flatrate`)
          data = await res.json()
          return data.results[1]
        }
        
        function serveMovie(movie){
          res.writeHead(200, {'Content-Type': 'application/json'});
          res.end(JSON.stringify(movie))
        }

        getNewMovie().then(movie => serveMovie(movie))
      

      
    }
  
    //   console.log(data);
    //     res.writeHead(200, {'Content-Type': 'application/json'});
    // if('student' in params){
    //   if(params['student']== 'leon'){
    //     res.writeHead(200, {'Content-Type': 'application/json'});
    //     const objToJson = {
    //       name: "leon",
    //       status: "Boss Man",
    //       currentOccupation: "Baller"
    //     }
    //     res.end(JSON.stringify(objToJson));
    //   }//student = leon
    //   else if(params['student'] != 'leon'){
    //     res.writeHead(200, {'Content-Type': 'application/json'});
    //     const objToJson = {
    //       name: "unknown",
    //       status: "unknown",
    //       currentOccupation: "unknown"
    //     }
    //     res.end(JSON.stringify(objToJson));
      //}student != leon
    //}student if
    //}else if
  else if (page == '/css/style.css'){
    fs.readFile('css/style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }else if (page == '/js/main.js'){
    fs.readFile('js/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }
});

server.listen(process.env.PORT || PORT);