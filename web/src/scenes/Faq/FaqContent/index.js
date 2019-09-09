import React, { Fragment, useEffect, createRef } from "react";
import AccordionSection from "../../../shared/components/AccordionSection";

class Content extends React.Component {
  componentDidUpdate() {
    if (this.props.match.params.questionId !== "0" && this.node !== null) {
      this.node.scrollIntoView({
        block: "center",
        behavior: "smooth"
      });
    }
  }

  setNode(id, node) {
    let { questionId } = this.props.match.params;
    if (id === questionId) {
      this.node = node;
    }
    return;
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
              <div
                ref={node => this.setNode(content.id, node)}
                key={content.question + i}
              >
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
