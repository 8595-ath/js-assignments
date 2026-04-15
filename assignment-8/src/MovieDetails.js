import { useParams, Link } from "react-router-dom";
import movies from "./data";

function MovieDetails() {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === parseInt(id));

  return (
    <div style={{ padding: "20px" }}>
      <h1>{movie.title}</h1>

      <img
        src={movie.image}
        alt={movie.title}
        style={{ width: "300px", borderRadius: "10px" }}
      />

      <p>{movie.description}</p>

      <Link to={`/book/${movie.id}`}>
        <button>Book Seat</button>
      </Link>
    </div>
  );
}

export default MovieDetails;