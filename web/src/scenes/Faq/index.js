import React, { Fragment, useState, useEffect } from "react";
import "./style.scss";
import Constants from "../../shared/constants";
import FaqSearch from "./FaqSearch";
import FaqCategory from "./FaqCategory";
import FaqService from "../../shared/services/FaqService";
// import FaqContent from "./FaqContent";
import FaqContent from "../../shared/components/AccordionSection";

const Faq = props => {
  const [faqContentData, setFaqContentData] = useState(null);
  const [data, setData] = useState([
    {
      id: 1,
      category_id: [1, 2],
      question: "what to do for confirmation of booking?",
      answer:
        "Check your mailbox. Contact us at mail@sistic.booking.com with your transaction details."
    },
    {
      id: 2,
      category_id: [1],
      question: "Where to get VIP passess?",
      answer: "Contact us at mail@sistic.vip.com with your transaction details."
    },
    {
      id: 3,
      category_id: [2, 3],
      question: "Where to get tickets?",
      answer: "Contact us at mail@sistic.vip.com with your transaction details."
    }
  ]);
  const [id, setId] = useState(1);
  console.log(props);

  let filtered = data.filter(el => el.category_id.includes(1));
  console.log(filtered);

  useEffect(() => {
    fetchFaqService();
  }, []);

  const fetchFaqService = () => {
    const params = {
      client: Constants.CLIENT
    };
    FaqService.getFaqService(params)
      .then(res => {
        setFaqContentData(res.data.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const { match } = props;

  const onIdChange = id1 => {
    console.log(id1);
    setId(id1);
  };
  return (
    <Fragment>
      <FaqSearch />
      <div className="find-agent-wrapper">
        <div className="container-fluid row agent-list">
          <div className="col-lg-4">
            <FaqCategory {...props} onIdChange={onIdChange} />
          </div>
          <div className="col-lg-8">
            {match.params.id}
            {/* {data
              .filter(el => el.category_id.includes(Number(match.params.id)))
              .map(content => (
                <FaqContent title={content.question} desc={content.answer} />
              ))} */}
            {data
              .filter(c => c.id === id)
              .map(content => (
                <FaqContent title={content.question} desc={content.answer} />
              ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Faq;
