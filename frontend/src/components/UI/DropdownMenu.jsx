import classes from "../UI/styles/DropdownMenu.module.css";
import DropdownItem from "./DropdownItem";

const DropdownMenu = () => {
  return (
    <div className={classes.dropdown}>
      <div className={classes.menu}>
        <DropdownItem url="/profile">My Profile</DropdownItem>
        <DropdownItem url="/settings">Settings</DropdownItem>
        <DropdownItem url="/profile">Test</DropdownItem>
      </div>
    </div>
  );
};

export default DropdownMenu;
