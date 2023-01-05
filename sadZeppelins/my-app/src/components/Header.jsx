import "../style/header.css";
import HireMe from "./HireMe";
import Logo from "./Logo";
export default function Header() {
  return (
    <header>
      <div className="logo">
        <Logo />
        <HireMe />
      </div>
      <nav>
        <ul>
          <li>PORTFOLIO</li>
          <li>BLOG</li>
          <li>CV</li>
          <li>STORE</li>
          <li>FREELANCE</li>
          <li>ABOUT ME</li>
          <li>CONTACT</li>
        </ul>
      </nav>
    </header>
  );
}
