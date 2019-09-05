import React, { Fragment, useEffect, createRef } from "react";
import AccordionSection from "../../../shared/components/AccordionSection";

class Content extends React.Component {
  componentDidUpdate(prevProps) {
    console.log(this.refs[this.props.questionId]);
    this.refs[this.props.questionId].scrollIntoView({
      block: "center",
      behavior: "smooth"
    });
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
              <div key={content.question + i}>
                <div ref={this.props.questionId}>
                  <AccordionSection
                    title={content.question}
                    desc={content.answer}
                  />
                </div>
              </div>
            );
          })}
      </Fragment>
    );
  }
}

// const Content = props => {
//   const ref = createRef(null);

//   console.log(ref);
//   useEffect(() => {
//     console.log(ref);

//     ref.current.scrollIntoView({
//       block: "center",
//       behavior: "smooth"
//     });
//   }, [props.questionId]);

//   return (
//     <Fragment>
//       {props.data
//         .filter(content => content.category_id.includes(props.categoryId))
//         .map((content, i) => {
//           return (
//             <div key={content.question + i}>
//               <br />
//               <br />
//               <br />
//               <br />
//               <br />
//               <div ref={ref}>
//                 <AccordionSection
//                   title={content.question}
//                   desc={content.answer}
//                 />
//               </div>
//               <br />
//               <br />
//               <br />
//               <br />
//             </div>
//           );
//         })}
//     </Fragment>
//   );
// };

export default Content;
