from cinemagoer import CinemaGoer

# Initialize the CinemaGoer instance
cm = CinemaGoer()

# List of movie titles
movies = [
    'The Shawshank Redemption',
    'The Godfather',
    'The Godfather: Part II',
    'The Dark Knight',
    'Schindler\'s List',
    'Star Wars: Episode IV - A New Hope',
    'The Matrix',
    'Forrest Gump',
    'Fight Club',
    'The Lord of the Rings: The Fellowship of the Ring',
    'The Good, the Bad and the Ugly',
    'Se7en'
]

# Fetch poster URLs for each movie
for movie in movies:
    search_result = cm.search_for_movie(movie)
    if search_result:
        # Get the first movie from the search result
        movie_id = search_result[0]['id']
        movie_details = cm.get_movie(movie_id)
        
        # Get the poster path from movie details
        poster_path = movie_details.get('poster_path')
        
        if poster_path:
            # Construct the full poster URL
            poster_url = f"https://image.tmdb.org/t/p/w500{poster_path}"
            print(f"Poster URL for {movie}: {poster_url}")
        else:
            print(f"No poster found for {movie}")
    else:
        print(f"No results found for {movie}")
