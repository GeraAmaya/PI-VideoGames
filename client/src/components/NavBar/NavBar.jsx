import { Link } from "react-router-dom";
import "./NavBar.css";
import Search from "../SearchBar/SearchBar";
import {
  orderByNumber,
  alphabeticOrder,
  orderByGenre,
  orderFrom,
  filterCleaner,
} from "../../Redux/Actions";
import { useDispatch } from "react-redux";

const NavBar = () => {
  const dispatch = useDispatch();

  const numberOrder = (event) => {
    const value = event.target.value;
    if (value === "<") {
      dispatch(orderByNumber("<"));
    } else {
      dispatch(orderByNumber(">"));
    }
  };

  const alphabeticOrderr = (event) => {
    const value = event.target.value;
    if (value === "A-Z") {
      dispatch(alphabeticOrder("A-Z"));
    } else {
      dispatch(alphabeticOrder("Z-A"));
    }
  };

  const ByGenres = (event) => {
    const value = event.target.value;
    dispatch(orderByGenre(value));
  };

  const orderFromm = (event) => {
    const value = event.target.value;
    dispatch(orderFrom(value));
  };
  const cleaner = () => {
    dispatch(filterCleaner());
  };
  return (
    <div className="NavBar">
      <select id="ByGenero" onChange={ByGenres}>
   
        <option value="Action">ACTION</option>
        <option value="Indie">Indie</option>
        <option value="RPG">RPG</option>
        <option value="Adventure">Adventure</option>
        <option value="Strategy">Strategy</option>
        <option value="Shooter">Shooter</option>
        <option value="Casual">Casual</option>
        <option value="Puzzle">Puzzle</option>
        <option value="Simulation">Simulation</option>
        <option value="Arcade">Arcade</option>
        <option value="Platformer">Platformer</option>
        <option value="Massively Multiplayer">Massively Multiplayer</option>
        <option value="Racing">Racing</option>
        <option value="Sports">Sports</option>
        <option value="Family">Family</option>
        <option value="Board Games">Board Games</option>
        <option value="Educational">Educational</option>
        <option value="Card">Card</option>
        <option value="Fighting">Fighting</option>
      </select>
      <select onChange={alphabeticOrderr}>
        <option value="A-Z">A/Z</option>
        <option value="Z-A">Z/A</option>
      </select>
      <select onChange={numberOrder}>
        <option value=">">Rating +</option>
        <option value="<">Rating - </option>
      </select>
      <select onChange={orderFromm}>
        <option value="API">Games in API</option>
        <option value="DB">Games based</option>
      </select>
      <button className="button-reset" type="button" onClick={cleaner}>
        RESET
      </button>
      <Search></Search>
<Link to={"/home"}>Home</Link>
<Link to={"/create"}>Create Game</Link>

    </div>
  );
};
export default NavBar;
