/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import classes from "./styles/DropdownItem.module.css";
const DropdownItem = (props) => {
  return (
    <Link className={classes["menu-item"]} to={props.url}>
      {props.children}
    </Link>
  );
};

export default DropdownItem;
