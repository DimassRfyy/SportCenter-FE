import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div id="Top-Nav" className="flex items-center justify-between w-full px-4 mt-[60px]">
      <Link to={`/`}>
        <img src="assets/images/logos/sportcenter-logo.png" className="flex shrink-0" alt="logo" />
      </Link>
      <Link to={`wishlist`}>
        <img src="assets/images/icons/heart-fill.svg" className="w-12 h-12" alt="icon" />
      </Link>
    </div>
  );
}
