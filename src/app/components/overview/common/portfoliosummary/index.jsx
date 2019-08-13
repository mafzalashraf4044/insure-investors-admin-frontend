import React from 'react';

//  styled components
import {
  PortfolioSummary,
  Header,
  Title,
  AddPropertyButton,
  AddIcon,
  AddPropertyButtonText,
  PortfolioContent,
  PortfolioList,
} from './styled';

import DescriptionList from 'components/common/descriptionlist'; 
import {
  DescriptionListItem,
  DescriptionListFields,
  DescriptionListField, 
  DescriptionTitle,
  DescriptionValue
} from 'components/common/descriptionlist/styled';
import Scrollbar from 'components/common/scrollbar';

import {
  portfolioSummaryHeight,
} from 'constants/styles';

export default () => {

  const properties = [
    {}, {}, {}, {}, {},
  ];

  const renderProperty = (o, i) => {
    return (
      <DescriptionListItem isArray={false} key={i}>  
        <DescriptionListFields>

          <DescriptionListField>
            <DescriptionTitle>Property Address</DescriptionTitle>
            <DescriptionValue>3100 Brackenridge St,  Houston, TX, 77026</DescriptionValue>
          </DescriptionListField>

          <DescriptionListField>
            <DescriptionTitle>Coverage Premiums</DescriptionTitle>
            <DescriptionValue></DescriptionValue>
          </DescriptionListField>

          <DescriptionListField>
            <DescriptionTitle>Final Premium</DescriptionTitle>
            <DescriptionValue>$2,500</DescriptionValue>
          </DescriptionListField>
  
        </DescriptionListFields>
      </DescriptionListItem>
    );
  };

  return (
    <PortfolioSummary>
      <Header>
        <Title>Portfolio Summary</Title>

        <AddPropertyButton>
          <AddIcon />
          <AddPropertyButtonText>Add Property</AddPropertyButtonText>
        </AddPropertyButton>
      </Header>
      <PortfolioContent>
        <Scrollbar
          thumbColor="#cfd2e4"
          height={portfolioSummaryHeight}
        >
          <PortfolioList>
            {
              properties.map((property, i) => (
                <DescriptionList
                  key={i}
                  data={property}
                  renderListItem={renderProperty}
                />
              ))
            }
          </PortfolioList>
        </Scrollbar>
      </PortfolioContent>
    </PortfolioSummary>
  );
};