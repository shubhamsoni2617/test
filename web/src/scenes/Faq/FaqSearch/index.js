import React, { Fragment } from "react";
import AutoSuggest from "./AutoSuggest";
import "./style.scss";

const FaqSearch = props => {
  console.log(props);
  return (
    <div className="find-an-agent text-center">
      <div className="authorised-agent">How Can We Help You?</div>
      {/* <form onSubmit={() => {}}> */}
      <div className="find-agent-form">
        <AutoSuggest
          {...props}
          suggestions={props.suggestions}
          onIdChange={props.onIdChange}
          categories={props.categories}
        />
      </div>
      {/* </form> */}
    </div>
  );
};

export default FaqSearch;
