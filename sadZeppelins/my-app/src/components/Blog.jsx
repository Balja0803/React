import "../style/blog.css";
import Picture from "./Picture";
export default function Blog() {
  return (
    <div className="blog">
      <div>
        <div>
          <h1>Blog Posts</h1>
          <h1>I think so, this is it.</h1>
          <p>
            Design begins after I begin to think about how to present an
            experience most successfully, whether a button I put in can solve a
            problem. The only point in design is not ui design, if the user does
            not have a good experience at the end of the product, the design
            will be considered unsuccessful in my opinion.
          </p>
        </div>
        <div className="logos">
          <div className="blog-box"> Twitter</div>
          <div className="blog-box">Linkeding</div>
          <div className="blog-box">Medium</div>
        </div>
      </div>
      <Picture />
    </div>
  );
}
