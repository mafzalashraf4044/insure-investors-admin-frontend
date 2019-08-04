import React from 'react';

import {
  Scrollbars,
  ThumbVertical,
  TrackVertical,
} from './styled';

export default ({children, height, thumbColor}) => {
  const renderThumbVertical = props => <ThumbVertical thumbColor={thumbColor} {...props} />;
  const renderTrackVertical = ({ ...style, ...props }) => <TrackVertical className="track-vertical" style={{ ...style }} {...props} />;

  return (
    <Scrollbars
      autoHeight
      hideTracksWhenNotNeeded
      autoHeightMin={height}
      autoHeightMax={height}
      renderThumbVertical={renderThumbVertical}
      renderTrackVertical={renderTrackVertical}
    >
      {children}
    </Scrollbars>
  );
};