import React, { useState, useEffect } from 'react'
import Tab from '../Tab';
import './style.scss';
import PromotionService from '../../../shared/services/PromotionService';

const Tabs = (props) => {

  const [promotionCategories, setPromotionCategories] = useState([]);
  const [isActive, setIsActive] = useState("30");

  useEffect(() => {
    const params = {
      client: 1
    };
    PromotionService.getPromotionCategories(params)
      .then((res) => {
        setPromotionCategories(res.data.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const handleSetActive = (id) => {
    setIsActive(id);
  }

  return (
    <div>
      <div className="promotions-nav">
        <ul className="nav nav-tabs" id="nav-tab" role="tablist">
          {promotionCategories.map((category, i) => {
            return (
              <li key={category.id}>
                <a
                  className={isActive === category.id ? "nav-item nav-link active" : "nav-item nav-link"}
                  onClick={() => handleSetActive(category.id)}
                >
                  {category.name} ({category.promotions})</a>
              </li>
            )
          })}
          {/* <li><a href="/" className="nav-item nav-link active">SISTIC Specials (7)</a></li>
          <li><a href="/" className="nav-item nav-link">Events (4)</a></li>
          <li><a href="/" className="nav-item nav-link">Attractions (3)</a></li>
          <li><a href="/" className="nav-item nav-link">Partners (2)</a></li>
          <li><a href="/" className="nav-item nav-link">View All (16)</a></li> */}
        </ul>
      </div>
      <Tab id={isActive} />
    </div>
  )
}

export default Tabs;
