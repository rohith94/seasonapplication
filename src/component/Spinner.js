import React from "react";

const Spinner = (props) => {
  return (
    <div className="ui active dimmer">
      <div className="ui text big loader">{props.message}</div>
    </div>
  );
};

//default props, incase nothing is passed form the declartion
Spinner.defaultProps = {
  message: "Loading...",
};

export default Spinner;
