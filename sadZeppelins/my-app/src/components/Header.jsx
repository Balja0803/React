import "../style/header.css";
import Logo from "./Logo";
export default function Header() {
  return (
    <header>
      <div className="logo">
        <Logo />
      </div>
      <nav>
        <ul>
          <li>portfolio</li>
          <li>Blog</li>
          <li>CV</li>
          <li>store</li>
          <li>freelance</li>
          <li>About Me</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}
