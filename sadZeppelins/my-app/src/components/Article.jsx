import SubArticles from "./SubArticles";
import { data } from "../util/data.js";
export default function Article() {
  console.log(data);
  return (
    <div>
      {data.map((product, index) => (
        <SubArticles products={product} key={index} />
      ))}
    </div>
  );
}
