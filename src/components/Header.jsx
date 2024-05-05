import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={showAdd ? "red" : "green"}
        text={showAdd ? "Close" : "Add"}
        onClick={onAdd}
      />
    </header>
  );
};

// const Header = (props) => {
//   console.log(props);
//   return (
//     <header>
//       <h1>Task Tracker {props.title}</h1>
//       {props.children}
//     </header>
//   );
// };

// to set a default props
Header.defaultProps = {
  title: "Task Tracker",
};

// to set some constraints to the props pass
Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
