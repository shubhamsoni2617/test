import React from 'react'
import './style.scss';
import Tab from '../Tab';

const Tabs = (props) => {

  const { handleActiveTab, limit } = props;
  const { tabsArray, defaultTabId } = props.state;

  return (
    <div>
      <div className="promotions-nav">
        <ul className="nav nav-tabs" id="nav-tab" role="tablist">
          {tabsArray && tabsArray.map((category, i) => {
            // console.log(Number(category.promotions),"category")

            let count=Number(category.promotions);
            console.log(count,"count")
            return (
              <li key={category.id}>
                <a
                  className={defaultTabId === category.id ? "nav-item nav-link active" : "nav-item nav-link"}
                  onClick={() => handleActiveTab(category.id)}
                >
                  {category.name} ({category.promotions})</a>
              </li>
            )
          })}
        </ul>
      </div>
        <Tab {...props} />
    </div>
  )
}

export default Tabs;
