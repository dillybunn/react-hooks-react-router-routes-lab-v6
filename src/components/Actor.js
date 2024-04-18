export default function Actor({ name, movies }) {
  return (
    <article>
      <h2>{name}</h2>
      <ul>
        {movies.map((m) => (
          <li key={m}>{m}</li>
        ))}
      </ul>
    </article>
  );
}
