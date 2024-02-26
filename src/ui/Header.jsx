import { Link } from "react-router-dom";
import SearchOrder from "../features/order/searchOrder";

function Header() {
  return (
    <header className="bg-yellow-500">
      <Link to="/">Fast React Pizza Co.</Link>
      <SearchOrder />
      <p>YourNameHere</p>
    </header>
  );
}

export default Header;
