import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer__container">
      <a href="https://github.com/libDrive/libDrive">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Font_Awesome_5_brands_github.svg/62px-Font_Awesome_5_brands_github.svg.png"
          width="64"
        />
      </a>
      <a className="no_decoration_link footer__text" href="https://eliasbenb.github.io">
        © 2021 Copyright: Elias Benbourenane
      </a>
    </footer>
  );
}