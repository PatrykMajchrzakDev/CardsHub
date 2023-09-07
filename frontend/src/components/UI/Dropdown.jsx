/* eslint-disable react/prop-types */
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
const Dropdown = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <a onClick={() => setOpen(!open)}>
        <AiOutlineMenu color="rgb(0, 162, 255)" cursor="pointer" />
      </a>

      {open && props.children}
    </div>
  );
};

export default Dropdown;
