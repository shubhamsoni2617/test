import React, { Fragment } from "react";
import "./style.scss";

const FaqSearch = () => {
  return (
    <div className="find-an-agent text-center">
      <div className="authorised-agent">How Can We Help You?</div>
      <form onSubmit={() => {}}>
        <div className="find-agent-form">
          <select className="form-control" value={1}>
            <option>1</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default FaqSearch;
