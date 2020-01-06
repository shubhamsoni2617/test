import React from 'react';
import ShimmerEffect from '..';
import Utilities from '../../../utilities';

export const OneBigEightSmall = ({ customClass }) => {
  return (
    <div className={`trending-shimmer-effect ${customClass} `}>
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
              : 3
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
              : 3
          }
          type="TILE"
          propCls={`trending-inner-child`}
        />
      </div>
    </div>
  );
};

export const OneBigTwoSmall = ({ customClass }) => {
  return (
    <div className={`trending-shimmer-effect ${customClass} `}>
      <ShimmerEffect
        height={Utilities.mobilecheck() ? 250 : 360}
        count={1}
        type="SOLID"
      />
      <div className="trending-inner-items">
        <ShimmerEffect
          height={'auto'}
          count={1}
          type="TILE"
          propCls={`trending-inner-child`}
        />
        <br />
        <ShimmerEffect
          height={'auto'}
          count={1}
          type="TILE"
          propCls={`trending-inner-child`}
        />
      </div>
    </div>
  );
};
