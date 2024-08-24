
export function EachPost(props: { title: string, url: string }) {
  return (
    <article>
        <h1>こんにちは</h1>
        <p>{props.title}</p>
        <h2>{props.url}</h2>
    </article>
  );
}