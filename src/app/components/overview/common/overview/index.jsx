import React, {useState} from 'react';

//  styled components
import {
  Overview,
  OverviewTop,
  OverviewBottom,
} from './styled';

import Tag from 'components/common/tag';
import Collapsible from 'react-collapsible';
import Scrollbar from 'components/common/scrollbar';

import OverviewStats from '../overviewstats';
import PortfolioSummary from '../portfoliosummary';
import DashboardDetails from '../dashboarddetails';

//  constants
import {
  overviewHeight,
} from 'constants/styles';

export default () => {

  const [tabIndex, setTabIndex] = useState(-1);

  return (
    <Overview>
      <Scrollbar
        key={tabIndex}
        height={overviewHeight}
        thumbColor={tabIndex !== -1 ? "#DD238E" : "transparent"}
      >
        <OverviewTop>
          <OverviewStats tabIndex={tabIndex} setTabIndex={setTabIndex} />
        </OverviewTop>
        <OverviewBottom>
          <PortfolioSummary />
          <DashboardDetails />
        </OverviewBottom>
      </Scrollbar>
    </Overview>
  );
};