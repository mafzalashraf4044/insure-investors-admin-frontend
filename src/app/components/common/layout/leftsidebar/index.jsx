import React from 'react';

import {
  LeftSidebar,
} from './styled';

import Scrollbar from 'components/common/scrollbar';

export default ({children}) => (
  <LeftSidebar>
    <Scrollbar
      thumbColor="#DD238E"
      height={window.innerHeight}
    >
      {children}
    </Scrollbar>
  </LeftSidebar>
);