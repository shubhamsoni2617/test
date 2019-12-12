import React from 'react';
import { CSSTransition } from 'react-transition-group';
import Utilities from '../../utilities';
import moreLessImg from '../../../assets/images/more-less.svg';

const LoadMore = props => {
  const { showMore, content, limit, handleMore } = props;
  console.log(showMore, "showMore")

  let contentToShow = '';
  if (!content.length) {
    return null;
  }

  if (props.showMore) {
    let totalLen = content.length;
    let appendedStr = content.substring(limit, totalLen)
    contentToShow = Utilities.showLimitedChars(content, limit, false).concat(appendedStr);
  } else {
    contentToShow = Utilities.showLimitedChars(content, limit, true)
  }

  return (
    <CSSTransition
      in={showMore}
      timeout={1000}
      classNames=""
    >
      <div>
        <div
          dangerouslySetInnerHTML={{
            __html: contentToShow
          }}
        />
        {content.length > limit && <a className={showMore ? "more-content less" : "more-content more"} onClick={() => handleMore()}>{showMore ? 'Less' : 'More'} <img src={moreLessImg} alt="more-less" className="" /></a>}
      </div>
    </CSSTransition>
  );
};

export default LoadMore;

