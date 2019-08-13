import React, {useState} from 'react';

//  styled components
import {
  OverviewStats,
  OverviewStatsTop,
  OverviewTabs,
  OverviewTab,
  OverviewTabTop,
  OverviewTabTitle,
  OverviewTabBottom,
  OverviewTabTotalPremiumTitle,
  OverviewTabTotalPremiumValue,
  OverviewTabContent,
  SubmissionItemHeader,
  SubmissionItemHeaderTop,
  SubmissionItemId,
  SubmissionItemHeaderBottom,
  BillingInformation,
  BillingInformationTop,
  BillingInformationTitle,
  MoreInfoButton,
  MoreInfoButtonText,
  ArrowRightIcon,
  BillingInformationText,
  BillingInformationBottom,
  BillingDetailColumn,
  BillingDetailTitle,
  BillingDetailsValue,
} from './styled';

import Tag from 'components/common/tag';
import Collapsible from 'react-collapsible';

import DescriptionList from 'components/common/descriptionlist'; 
import {
  DescriptionListItem,
  DescriptionListHeader,
  DescriptionListFields,
  DescriptionListField, 
  DescriptionTitle,
  DescriptionValue
} from 'components/common/descriptionlist/styled';

const submissions = [
  {
    id: 1234567,
    details: [
      {title: 'Need by Date', value: '15 Dec 2018'},
      {title: 'Effective Date', value: '14 Dec 2018'},
      {title: 'Line of Business', value: 'Automobile'},
      {title: 'Carriers', value: ['carrier 1', 'carrier 2', '+3']},
      {title: 'Target Premium', value: '$2,500'},
      {title: 'Quoted Premium', value: '$2,500'},
    ]
  },
  {
    id: 1234567,
    details: [
      {title: 'Need by Date', value: '15 Dec 2018'},
      {title: 'Effective Date', value: '14 Dec 2018'},
      {title: 'Line of Business', value: 'Automobile'},
      {title: 'Carriers', value: ['carrier 1', 'carrier 2', '+3']},
      {title: 'Target Premium', value: '$2,500'},
      {title: 'Quoted Premium', value: '$2,500'},
    ]
  },
];

export default ({children}) => {

  const [tabIndex, setTabIndex] = useState(-1);

  const tabs = [
    {color: '#edad07'},
    {color: '#00d69d'},
    {color: '#896cff'},
  ];

  const renderSubmission = (o, i) => {
    return (
      <DescriptionListItem isArray={false} key={i}>
        <DescriptionListHeader>
          <SubmissionItemHeader>
            <SubmissionItemHeaderTop>
              <SubmissionItemId>#{o.id}</SubmissionItemId>
            </SubmissionItemHeaderTop>
            <SubmissionItemHeaderBottom>
              <Tag bgColor="#00a8d2">New</Tag>
            </SubmissionItemHeaderBottom>
          </SubmissionItemHeader>
        </DescriptionListHeader>
  
        <DescriptionListFields>
  
          {
            o.details.map((detail, index) => (
              <DescriptionListField key={index}>
                <DescriptionTitle>{detail.title}</DescriptionTitle>
                <DescriptionValue>{detail.value}</DescriptionValue>
              </DescriptionListField>
            ))
          }
  
        </DescriptionListFields>
      </DescriptionListItem>
    );
  };

  return (
    <OverviewStats>
      <OverviewStatsTop>
        <OverviewTabs>
          {
            tabs.map((tab, i) => (
              <OverviewTab
                key={i}
                active={tabIndex === i}
                borderColor={tab.color}
                onClick={() => setTabIndex(tabIndex === i ? -1 : i)}
              >
                <OverviewTabTop>
                  <OverviewTabTitle>Polices</OverviewTabTitle> 
                  <Tag bgColor={tab.color}>14</Tag>
                </OverviewTabTop>
                <OverviewTabBottom>
                  <OverviewTabTotalPremiumTitle>Total Premium</OverviewTabTotalPremiumTitle> 
                  <OverviewTabTotalPremiumValue>$55,250</OverviewTabTotalPremiumValue> 
                </OverviewTabBottom>
              </OverviewTab>
            ))
          }
        </OverviewTabs>
        <BillingInformation>
          <BillingInformationTop>
            <BillingInformationTitle>Billing Information</BillingInformationTitle>
            <MoreInfoButton>
              <MoreInfoButtonText>More Info</MoreInfoButtonText>
              <ArrowRightIcon />
            </MoreInfoButton>
          </BillingInformationTop>
          <BillingInformationText>Monthly 25 Down 10 Installments</BillingInformationText>
          <BillingInformationBottom>
            <BillingDetailColumn>
              <BillingDetailTitle>Balance due</BillingDetailTitle>
              <BillingDetailsValue>$764.65</BillingDetailsValue>
            </BillingDetailColumn>
            <BillingDetailColumn>
              <BillingDetailTitle>Number of installments</BillingDetailTitle>
              <BillingDetailsValue>5</BillingDetailsValue>
            </BillingDetailColumn>
          </BillingInformationBottom>
        </BillingInformation>
      </OverviewStatsTop>
      <Collapsible open={tabIndex !== -1}>
        <OverviewTabContent
          borderColor={tabIndex !== -1 && tabs[tabIndex].color}
        >
          {
            submissions.map((submission, i) => (
              <DescriptionList
                data={submission}
                renderListItem={renderSubmission}
              />
            ))
          }
        </OverviewTabContent>
      </Collapsible>
    </OverviewStats>
  );
};