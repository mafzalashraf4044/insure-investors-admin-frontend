import React from 'react';

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

  return (
    <Overview>
      <Scrollbar
        thumbColor="#DD238E"
        height={overviewHeight}
      >
        <OverviewTop>
          <OverviewStats />
        </OverviewTop>
        <OverviewBottom>
          <PortfolioSummary>
            summary
          </PortfolioSummary>
          <DashboardDetails>
            details
          </DashboardDetails>
        </OverviewBottom>
      </Scrollbar>
    </Overview>
  );
};