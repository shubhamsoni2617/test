import React, { Fragment, useState, useEffect } from "react";
import "./style.scss";
const SearchFaq = () => {
  return (
    <div className="faq-search text-center">
      <div className="authorised-agent">How Can We Help You?</div>
      <form>
        <div className="faq-search-form">
          <select className="form-control" value={"country"}>
            <option>1</option>
            <option>2</option>
          </select>

          <button className="go-btn" type="submit">
            GO
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchFaq;
