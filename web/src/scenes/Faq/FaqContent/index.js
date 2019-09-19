import React, { Fragment } from "react";
import AccordionSection from "../../../shared/components/AccordionSection";

class Content extends React.Component {
  Scrolldown() {
    let hash = this.props.match.params.questionId;
    if (hash && hash !== "0") {
      let node = this.refs[hash];
      let nodePosition = node.offsetTop - 100;
      if (nodePosition) {
        window.scroll({
          top: nodePosition,
          left: 0,
          behavior: "smooth"
        });
      }
    }
  }

  componentDidMount() {
    window.onload = this.Scrolldown();
  }

  render() {
    let filteredData= this.props.data
    .filter(content =>
      content.category_id.includes(this.props.categoryId)
    )
      if(!filteredData.length){
      return <span className="no-faq-found">No data found</span>
    }
    return (
      <div>
        {
          filteredData.map((content, i) => {
            return (
              <div ref={content.id} key={content.question + i}>
                <AccordionSection
                  title={content.question}
                  desc={content.answer}
                />
              </div>
            );
          })}
      </div>
    );
  }
}

export default Content;
