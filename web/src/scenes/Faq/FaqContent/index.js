import React, { Fragment, useEffect, createRef } from "react";
import AccordionSection from "../../../shared/components/AccordionSection";

class Content extends React.Component {
  componentDidUpdate(prevProps) {
    if (prevProps.questionId !== this.props.questionId) {
      this.refs[this.props.questionId].scrollIntoView({
        block: "center",
        behavior: "smooth"
      });
    }
  }
  render() {
    return (
      <Fragment>
        {this.props.data
          .filter(content =>
            content.category_id.includes(this.props.categoryId)
          )
          .map((content, i) => {
            return (
              <div ref={this.props.questionId} key={content.question + i}>
                <AccordionSection
                  title={content.question}
                  desc={content.answer}
                />
              </div>
            );
          })}
      </Fragment>
    );
  }
}

export default Content;
