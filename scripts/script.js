const apiKey = 'YOUR_API_KEY'; https://api.themoviedb.org/3/movie/278/videos?language=en-US
const movieId = 278; // Replace with the ID of the movie you want to fetch videos for
const apiUrl = `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US&api_key=${apiKey}`;

fetch(apiUrl)
    .then((response) => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then((data) => {
        // Handle the response data here
        console.log(data);
    })
    .catch((error) => {
        // Handle errors here
        console.error('There was a problem with the fetch operation:', error);
    });
