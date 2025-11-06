import React from "react";

function MovieCard({
  movieObj,
  poster_path,
  name,
  handleAddtoWatchlist,
  handleRemoveFromWatchlist,
  watchlist,
}) {
  function doesContain(movieObj) {
    for (let i = 0; i < watchlist.length; i++) {
      if (watchlist[i].id == movieObj.id) {
        return true;
      }
    }
    return false;
  }

  return (
    <div
      className="relative h-[40vh] w-[200px] bg-center bg-cover rounded-xl hover:scale-110 hover:cursor-pointer"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w500${poster_path})`,
      }}
    >
      {doesContain(movieObj) ? (
        <div onClick={() => handleRemoveFromWatchlist(movieObj)} className="absolute top-2 right-2 w-8 h-8 bg-white/70 rounded-full flex items-center justify-center">&#10060;</div>
      ) : (
        <div
          onClick={() => handleAddtoWatchlist(movieObj)}
          className="absolute top-2 right-2 w-8 h-8 bg-white/70 rounded-full flex items-center justify-center"
        >
          &#128525;
        </div>
      )}

      <div className="absolute bottom-0 text-white text-xl w-full p-2 text-center bg-gray-900/60">
        {name}
      </div>
    </div>
  );
}

export default MovieCard;
