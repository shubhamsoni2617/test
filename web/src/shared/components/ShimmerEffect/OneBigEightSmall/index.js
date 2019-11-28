import React from 'react';
import ShimmerEffect from '..';
import Utilities from '../../../utilities';

const OneBigEightSmall = () => {
  return (
    <div class="trending-shimmer-effect">
      <ShimmerEffect
        height={Utilities.mobilecheck() ? 180 : 460}
        count={1}
        type="TILE"
        propCls={`trending-col-3`}
      />
      <div className="trending-inner-items">
        <ShimmerEffect
          height={Utilities.mobilecheck() ? 60 : 150}
          count={
            Utilities.mobilecheck()
              ? 2
              : Utilities.mobileAndTabletcheck()
              ? 3
              : 4
          }
          type="TILE"
          propCls={`trending-inner-child`}
        />
        <br />
        <ShimmerEffect
          height={Utilities.mobilecheck() ? 60 : 150}
          count={
            Utilities.mobilecheck()
              ? 2
              : Utilities.mobileAndTabletcheck()
              ? 3
              : 4
          }
          type="TILE"
          propCls={`trending-inner-child`}
        />
      </div>
    </div>
  );
};

export default OneBigEightSmall;
