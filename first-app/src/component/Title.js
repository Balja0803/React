export default function Title(props) {
  return (
    <div className="title">
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <p>Votes: {props.votes}</p>
    </div>
  );
}
