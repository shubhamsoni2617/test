import React, { Fragment } from "react";
import "./style.scss";
import FaqSearch from "./FaqSearch";
import FaqCategory from "./FaqCategory";
// import FaqContent from "./FaqContent";
import FaqContent from "../../shared/components/AccordionSection";

const Faq = props => {
  return (
    <Fragment>
      <FaqSearch />
      <div className="find-agent-wrapper">
        <div className="container-fluid row agent-list">
          <div className="col-lg-4">
            <FaqCategory {...props} />
          </div>
          <div className="col-lg-8">
            <FaqContent
              title={"Why I need to update my account before going out?"}
              desc={`Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it to make a type 
                  specimen book. It has survived not only five centuries, but also the leap into
                   electronic typesetting, remaining essentially unchanged. It was popularised in
                    the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                    and more recently with desktop publishing software like Aldus PageMaker including
                     versions of Lorem Ipsum.`}
            />
            <FaqContent
              title={"Why I need to update my account before going out?"}
              desc={"ddroeuiorgiosfihglfdh088ygsdlk"}
            />
            <FaqContent
              title={"Why I need to update my account before going out?"}
              desc={"ddroeuiorgiosfihglfdh088ygsdlk"}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Faq;
