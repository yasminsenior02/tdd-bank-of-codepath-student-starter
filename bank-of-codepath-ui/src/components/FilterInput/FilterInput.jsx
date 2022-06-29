import * as React from "react";
import "./FilterInput.css";

export default function FilterInput({ inputValue, handleOnChange }) {
  // class ControlledInput extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       input: "",
  //     };
  //   }
  // }
  return (
    <div className="filter-input">
      <i className="material-icons">search</i>
      <input
        type="text"
        placeholder="Search transactions"
        value={inputValue}
        onChange={handleOnChange}
      />
    </div>
  );
}
