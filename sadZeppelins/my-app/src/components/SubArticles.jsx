import "../style/subArticle.css";
import ShowDate from "./Date";

export default function SubArticles(props) {
  const { products } = props;
  return (
    <div className="cards">
      <div className="card">
        <img src={products.image} height="415px" width="590px"></img>

        <ShowDate />

        <h2>{products.title}</h2>
        <p>{products.description}</p>
        <a href="#">READ MORE</a>
      </div>
    </div>
  );
}
