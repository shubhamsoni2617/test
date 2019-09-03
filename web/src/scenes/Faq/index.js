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
      question: "Where to get free tickets?",
      answer: "Contact us at mail@sistic.vip.com with your transaction details."
    },
    {
      id: 4,
      category_id: [1, 2],
      question: "what  booking?",
      answer:
        "Check your mailbox. Contact us at mail@sistic.booking.com with your transaction details."
    },
    {
      id: 5,
      category_id: [4],
      question: "Where  passess?",
      answer: "Contact us at mail@sistic.vip.com with your transaction details."
    },
    {
      id: 6,
      category_id: [2, 3],
      question: "Where to get tickets?",
      answer: "Contact us at mail@sistic.vip.com with your transaction details."
    }
  ]);
  const [categories, setCategories] = useState([
    {
      id: 1,
      name: "Trending Questions"
    },
    {
      id: 2,
      name: "My Account"
    },
    {
      id: 3,
      name: "Seat Allocation"
    },
    {
      id: 4,
      name: "E-Ticket"
    }
  ]);
  const [id, setId] = useState(1);

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

  const onIdChange = currentId => {
    console.log(currentId);
    setId(currentId);
  };

  const spreadData = data.flatMap(element => {
    return element.category_id.map(x => ({ ...element, category_id: x }));
  });

  return (
    <Fragment>
      <FaqSearch
        {...props}
        suggestions={spreadData}
        onIdChange={onIdChange}
        categories={categories}
      />
      <div className="find-agent-wrapper">
        <div className="container-fluid row agent-list">
          <div className="col-lg-4">
            <FaqCategory
              id={id}
              categories={categories}
              onIdChange={onIdChange}
            />
          </div>
          <div className="col-lg-8">
            {data
              .filter(el => el.category_id.includes(id))
              .map(content => (
                <div id={content.id}>
                  <FaqContent
                    id={content.id}
                    title={content.question}
                    desc={content.answer}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Faq;
