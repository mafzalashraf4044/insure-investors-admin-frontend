import React, {useState} from 'react';

//  styled components
import {
  DashboardDetails,
  DashboardDetailTabs,
  DashboardDetailTab,
  DashboardDetailTabText,
  TabContent,
  StepBullet,
} from './styled';

import Steps, { Step } from 'rc-steps';

export default () => {

  const [tabIndex, setTabIndex] = useState(0);

  const tabs = [
    {title: 'Activities'},
    {title: 'Notes'},
    {title: 'Documents'},
  ];

  return (
    <DashboardDetails>
      <DashboardDetailTabs>
        {
          tabs.map((tab, i) => (
            <DashboardDetailTab
              active={tabIndex === i}
              onClick={() => setTabIndex(i)}
            >
              <DashboardDetailTabText>{tab.title}</DashboardDetailTabText>
            </DashboardDetailTab>
          ))
        }
      </DashboardDetailTabs>

      <TabContent>
        <Steps direction="vertical" size="small">
          <Step icon={<StepBullet />} title="Customer investment strategy added" description="2019-05-24, 09:02" />
          <Step icon={<StepBullet />} title="Customer investment strategy added" description="2019-05-24, 09:02" />
          <Step icon={<StepBullet />} title="Customer investment strategy added" description="2019-05-24, 09:02" />
          <Step icon={<StepBullet />} title="Customer investment strategy added" description="2019-05-24, 09:02" />
          <Step icon={<StepBullet />} title="Customer investment strategy added" description="2019-05-24, 09:02" />
          <Step icon={<StepBullet />} title="Customer investment strategy added" description="2019-05-24, 09:02" />
          <Step icon={<StepBullet />} title="Customer investment strategy added" description="2019-05-24, 09:02" />
        </Steps>
      </TabContent>
    </DashboardDetails>
  );
};