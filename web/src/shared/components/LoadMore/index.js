import React from 'react';
import { CSSTransition } from 'react-transition-group';
import Utilities from '../../utilities';

const LoadMore = props => {
  const { showMore, content, limit, handleMore } = props;

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

        {content.length > limit && <a className="more-content" onClick={() => handleMore()}>{showMore ? 'Less' : 'More'}</a>}
      </div>
    </CSSTransition>
  );
};

export default LoadMore;

