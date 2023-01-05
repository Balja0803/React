import "../style/blog.css";
import Picture from "./Picture";
export default function Blog() {
  return (
    <div className="blog">
      <div>
        <div>
          <h1 className="blog-h1">Blog Posts</h1>
          <h2 className="blog-h2">I think so, this is it.</h2>
          <p className="blog-p">
            Design begins after I begin to think about how to present an
            experience most successfully, whether a button I put in can solve a
            problem. The only point in design is not ui design, if the user does
            not have a good experience at the end of the product, the design
            will be considered unsuccessful in my opinion.
          </p>
        </div>
        <div className="logos">
          <div className="blog-box twitter-box">
            <svg
              width="18"
              height="15"
              viewBox="0 0 18 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.64991 15C3.57026 15 1.63168 14.3864 0 13.3276C1.38535 13.4185 3.83019 13.2007 5.35087 11.7292C3.06326 11.6227 2.0316 9.8428 1.89703 9.08215C2.0914 9.15822 3.01841 9.24949 3.54172 9.03651C0.91022 8.36714 0.506525 6.02434 0.596235 5.30933C1.08964 5.65923 1.92694 5.78093 2.25587 5.75051C-0.196205 3.97059 0.685945 1.2931 1.11954 0.71501C2.87924 3.18826 5.51649 4.57733 8.7791 4.65459C8.71759 4.38089 8.6851 4.09593 8.6851 3.80325C8.6851 1.70277 10.3586 0 12.423 0C13.5016 0 14.4735 0.46484 15.1558 1.20837C15.8766 1.03703 16.9613 0.635914 17.4916 0.289047C17.2243 1.26268 16.3922 2.07488 15.8888 2.37592C15.893 2.38616 15.8847 2.36563 15.8888 2.37592C16.331 2.30807 17.5274 2.07481 18 1.74949C17.7663 2.29647 16.884 3.20591 16.16 3.71506C16.2947 9.74221 11.7492 15 5.64991 15Z"
                fill="white"
              />
            </svg>
            Twitter
          </div>
          <div className="blog-box linkedin-box">
            <svg
              width="15"
              height="14"
              viewBox="0 0 15 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.61856 1.69215C3.61856 2.6267 2.80852 3.3843 1.80928 3.3843C0.810041 3.3843 0 2.6267 0 1.69215C0 0.757601 0.810041 0 1.80928 0C2.80852 0 3.61856 0.757601 3.61856 1.69215Z"
                fill="white"
              />
              <path
                d="M0.247423 4.6281H3.34021V14H0.247423V4.6281Z"
                fill="white"
              />
              <path
                d="M8.31959 4.6281H5.2268V14H8.31959C8.31959 14 8.31959 11.0496 8.31959 9.20486C8.31959 8.09762 8.69766 6.98554 10.2062 6.98554C11.911 6.98554 11.9008 8.43453 11.8928 9.55709C11.8824 11.0244 11.9072 12.5219 11.9072 14H15V9.05372C14.9738 5.89538 14.1508 4.44008 11.4433 4.44008C9.8354 4.44008 8.83871 5.17006 8.31959 5.83049V4.6281Z"
                fill="white"
              />
            </svg>
            Linkedin
          </div>
          <div className="blog-box medium-box">
            <svg
              width="17"
              height="10"
              viewBox="0 0 17 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse
                cx="4.93634"
                cy="4.69876"
                rx="4.93634"
                ry="4.69876"
                fill="white"
              />
              <ellipse
                cx="12.539"
                cy="4.69876"
                rx="2.45497"
                ry="4.38199"
                fill="white"
              />
              <ellipse
                cx="16.1024"
                cy="4.93628"
                rx="0.897516"
                ry="4.14441"
                fill="white"
              />
            </svg>
            Medium
          </div>
        </div>
      </div>
      <Picture />
    </div>
  );
}
