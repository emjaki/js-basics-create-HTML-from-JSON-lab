
  document.addEventListener('DOMContentLoaded', (e) => {
    // invoking a function here will make sure it happens on page load
    // your code here
      let movies = JSON.parse(`{
        "Titanic": {
          "title": "Titanic",
          "director": "James Cameron",
          "genre": "Drama",
          "filmRating": "PG-13",
          "poster": "https://curriculum-content.s3.amazonaws.com/web-development/cruise-ship.jpg",
          "audienceScore": 7.8,
          "description": "A blooming romance is tested when an unexpected event occurs. Jack and Rose are forced to work together and escape from Billy Zane.",
          "cast": [
            {
              "role": "Jack",
              "actor": "Leonardo DiCaprio"
            },
            {
              "role": "Rose",
              "actor": "Kate Winslett"
            },
            {
              "role": "Cal",
              "actor": "Billy Zane"
            },
            {
              "role": "The Titanic",
              "actor": "The Titanic"
            }
          ],
          "reviews": [
            {
              "username": "Thomas Andrews",
              "content": "great film. Didn't think the ship would sink, but it did!"
            },
            {
              "username": "Brock Lovett",
              "content": "I enjoyed the treasure hunting guy."
            },
            {
              "username": "Ruth Dewitt Bukater",
              "content": "Rose could have shared the space on that door."
            }
          ]
        },
        "Terminator 2": {
          "title": "Terminator 2",
          "director": "James Cameron",
          "genre": "Sci-fi",
          "filmRating": "PG-13",
          "poster": "https://s3.amazonaws.com/ironboard-learn/terminator.jpg",
          "audienceScore": 8.8,
          "description": "The terminator is sent from the future to fight another terminator who is also from the future, but is liquid.",
          "cast": [
            {
              "role": "Terminator",
              "actor": "Arnold Schwarzenegger"
            },
            {
              "role": "Sarah Connor",
              "actor": "Linda Hamilton"
            },
            {
              "role": "John Connor",
              "actor": "Edward Furlong"
            }
          ],
          "reviews": [
            {
              "username": "Jenette Goldstein",
              "content": "best film of the 80s"
            },
            {
              "username": "James Cam",
              "content": "My favorite film"
            },
            {
              "username": "Ridley Scott",
              "content": "Its okay"
            },
            {
              "username": "Wolfie's fine, honey. Wolfie's just fine. Where are you?",
              "content": "T-1000"
            }
          ]
        }
      }`);

      titanicDisplay();

      function titanicDisplay() {

        let film = document.getElementById('title');
        let Director = document.getElementById('director');
        let Genre = document.getElementById('genre');
        let FilmRating = document.getElementById('filmRating');
        let Poster = document.getElementById('poster');
        let Description = document.getElementById('description');
        let AudienceScore = document.getElementById('audienceScore');
  
        let cast = document.getElementById('cast');
        let castOutput = '';
  
        let reviews = document.getElementById('reviews');
        let reviewsOutput = '';
          
        film.innerHTML = movies.Titanic.title;
        Director.textContent = movies.Titanic.director;
        Genre.textContent = movies.Titanic.genre;
        FilmRating.textContent = movies.Titanic.filmRating;
        Poster.src = movies.Titanic.poster;
        Description.textContent = movies.Titanic.description;
        AudienceScore.textContent = movies.Titanic.audienceScore;
  
        for (let i = 0; i < movies.Titanic.cast.length; i++) {
          cast.innerHTML = castOutput += '<li>' + movies.Titanic.cast[i].role + ': ' + movies.Titanic.cast[i].actor + '</li>';
          }
  
        for (let i = 0; i < movies.Titanic.reviews.length; i++) {
          reviews.innerHTML = reviewsOutput += '<li>' + movies.Titanic.reviews[i].username + ':\n' + '"' + movies.Titanic.reviews[i].content + '"' + '</li>';
        } 
      }

      let terminator2Btn = document.getElementById('Terminator 2');
      terminator2Btn.addEventListener('click', e => {
  
        let film = document.getElementById('title');
        let Director = document.getElementById('director');
        let Genre = document.getElementById('genre');
        let FilmRating = document.getElementById('filmRating');
        let Poster = document.getElementById('poster');
        let Description = document.getElementById('description');
        let AudienceScore = document.getElementById('audienceScore');
  
        let cast = document.getElementById('cast');
        let castOutput = '';
  
        let reviews = document.getElementById('reviews');
        let reviewsOutput = '';
        film.innerHTML = movies['Terminator 2'].title;
        Director.textContent = movies['Terminator 2'].director;
        Genre.textContent = movies['Terminator 2'].genre;
        FilmRating.textContent = movies['Terminator 2'].filmRating;
        Poster.src = movies['Terminator 2'].poster;
        Description.textContent = movies['Terminator 2'].description;
        AudienceScore.textContent = movies['Terminator 2'].audienceScore;
  
        for (let i = 0; i < movies['Terminator 2'].cast.length; i++) {
          cast.innerHTML = castOutput += '<li>' + movies['Terminator 2'].cast[i].role + ': ' + movies.Titanic.cast[i].actor + '</li>';
        }
  
        for (let i = 0; i < movies['Terminator 2'].reviews.length; i++) {
          reviews.innerHTML = reviewsOutput += '<li>' + movies['Terminator 2'].reviews[i].username + ':\n' + '"' + movies['Terminator 2'].reviews[i].content + '"' + '</li>';
        } 
      })
    
    let titanicBtn = document.getElementById('Titanic');
    titanicBtn.addEventListener('click', e => {
      titanicDisplay();
    });
    
  });

  

    
    
    


  


  



  

