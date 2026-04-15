import { Link } from "react-router-dom";
import movies from "./data";

function MovieList() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Movies</h1>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "20px"
      }}>
        {movies.map((movie) => (
          <Link
            key={movie.id}
            to={`/movie/${movie.id}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <div style={{
              border: "1px solid #ccc",
              padding: "10px",
              borderRadius: "10px"
            }}>
              <img
                src={movie.image}
                alt={movie.title}
                style={{
                  width: "100%",
                  height: "300px",
                  objectFit: "cover",
                  borderRadius: "8px"
                }}
              />
              <h3>{movie.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default MovieList;