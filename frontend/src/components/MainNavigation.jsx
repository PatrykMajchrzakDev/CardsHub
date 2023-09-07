import { NavLink } from "react-router-dom";
import classes from "./styles/MainNavigation.module.css";
import Dropdown from "./UI/Dropdown";
import DropdownMenu from "./UI/DropdownMenu";
const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li className="">
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Dashboard
            </NavLink>
          </li>
          <li className={classes["dropdown-icon"]}>
            <Dropdown>
              <DropdownMenu></DropdownMenu>
            </Dropdown>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
