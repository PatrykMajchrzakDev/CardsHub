import { NavLink } from "react-router-dom";
import classes from "./styles/MainNavigation.module.css";
import { AiOutlineMenu } from "react-icons/ai";
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
            <a>
              <AiOutlineMenu color="rgb(0, 162, 255)" cursor="pointer" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
