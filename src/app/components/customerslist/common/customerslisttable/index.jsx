import React, {useState} from 'react';

import {
  CustomersListTable,
  Customer,
  CustomImage,
  CustomerText,
  CustomerName,
  CustomerSubText,
  Actions,
  ActionsLeft,
  ActionsRight,
  Action,
  AccordionIcon,
  MoreIcon,
  PencilIcon,
  EyeIcon,
  DeleteIcon,
  RowDetails,
  RowDetailItems,
  RowDetailItem,
  RowDetailItemTitle,
  RowDetailItemValue,
  SubmissionItemHeader,
  SubmissionItemHeaderTop,
  SubmissionItemId,
  SubmissionItemHeaderBottom
} from './styled';

import Tag from 'components/common/tag';
import Table from 'components/common/table';
import Collapsible from 'react-collapsible';
import Scrollbar from 'components/common/scrollbar';
import DescriptionList from 'components/common/descriptionlist'; 
import {
  DescriptionListItem,
  DescriptionListHeader,
  DescriptionListFields,
  DescriptionListField, 
  DescriptionTitle,
  DescriptionValue
} from 'components/common/descriptionlist/styled';

import {Animated} from 'react-animated-css';

//  constants
import {
  tableHeight,
} from 'constants/styles';

const data = [
  {name: 'Brian Roberts', tasks: 3, company: 'Benchmark LLC',  phone: '1234567890', department: 'IT Department', annualPremium: '$1,589.54', policyStatus: 'UW Approved'},
  {name: 'Benjamin Alexander', tasks: 3, company: 'Benchmark LLC',  phone: '1234567890', department: 'IT Department', annualPremium: '$1,589.54', policyStatus: 'Proposed'},
  {name: 'Nicole Henderson', tasks: 3, company: 'Benchmark LLC',  phone: '1234567890', department: 'IT Department', annualPremium: '$1,589.54', policyStatus: 'Lost'},
  {name: 'Brian Roberts', tasks: 3, company: 'Benchmark LLC',  phone: '1234567890', department: 'IT Department', annualPremium: '$1,589.54', policyStatus: 'UW Approved'},
  {name: 'Laura Hernandez', tasks: 3, company: 'Benchmark LLC',  phone: '1234567890', department: 'IT Department', annualPremium: '$1,589.54', policyStatus: '{Proposed'},
  {name: 'Stephanie Richardson', tasks: 3, company: 'Benchmark LLC',  phone: '1234567890', department: 'IT Department', annualPremium: '$1,589.54', policyStatus: 'UW Approved'},
  {name: 'Wanda Jackson', tasks: 3, company: 'Benchmark LLC',  phone: '1234567890', department: 'IT Department', annualPremium: '$1,589.54', policyStatus: 'Proposed'},
  {name: 'Kevin Mitchell', tasks: 3, company: 'Benchmark LLC',  phone: '1234567890', department: 'IT Department', annualPremium: '$1,589.54', policyStatus: 'Lost'},
  {name: 'Albert Bennett', tasks: 3, company: 'Benchmark LLC',  phone: '1234567890', department: 'IT Department', annualPremium: '$1,589.54', policyStatus: 'Proposed'},
];

const polices = [
  {
    id: 1234567,
    details: [
      {title: 'Effective Date', value: '14 Dec 2018'},
      {title: 'Expiration Date', value: '14 Dec 2019'},
      {title: 'Line of Business', value: 'Automobile'},
      {title: 'Writing Company', value: 'All State'},
      {title: 'Parent Company', value: 'Nationwide'},
      {title: 'Annual Premium', value: '$2,500'},
      {title: 'Billed Premium', value: '$2,500'},
    ]
  },
  {
    id: 1234567,
    details: [
      {title: 'Effective Date', value: '14 Dec 2018'},
      {title: 'Expiration Date', value: '14 Dec 2019'},
      {title: 'Line of Business', value: 'Automobile'},
      {title: 'Writing Company', value: 'All State'},
      {title: 'Parent Company', value: 'Nationwide'},
      {title: 'Annual Premium', value: '$2,500'},
      {title: 'Billed Premium', value: '$2,500'},
    ]
  },
];

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

export default () => {

  const renderCustomer = (o) => (
    <Customer>
      <CustomImage src={require('assets/images/profile-image.jpg')} alt="profile image" />
      
      <CustomerText>
        <CustomerName>{o.name}</CustomerName>
        <CustomerSubText>Tasks {o.tasks}</CustomerSubText>
      </CustomerText>
    </Customer>
  );
    
  const renderActions = (o, hover, onAccordionClick) => (
    <Actions>
      <Animated
        isVisible={hover}
        animationIn="fadeIn"
        animationOut="fadeOut"
        animationInDuration={500}
        animationOutDuration={0}
      >
        <ActionsLeft>
          <Action bg="#a5afb5">
            <PencilIcon />
          </Action>
          <Action bg="#a5afb5">
            <EyeIcon />
          </Action>
          <Action bg="#a5afb5">
            <DeleteIcon />
          </Action>
        </ActionsLeft>
      </Animated>

      <ActionsRight>
        <Action onClick={onAccordionClick}>
          <AccordionIcon />
        </Action>
        <Action>
          <MoreIcon />
        </Action>
      </ActionsRight>
    </Actions>
  );

  const renderPolicy = (o, i) => {
    return (
      <DescriptionListItem key={i}>
        <DescriptionListHeader>
          <SubmissionItemHeader>
            <SubmissionItemHeaderTop>
              <SubmissionItemId>#{o.id}</SubmissionItemId>
            </SubmissionItemHeaderTop>
            <SubmissionItemHeaderBottom>
              <Tag bgColor="#00a8d2">New</Tag>
              <EyeIcon fill="#525c6e" />
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

  const renderSubmission = (o, i) => {
    return (
      <DescriptionListItem key={i}>
        <DescriptionListHeader>
          <SubmissionItemHeader>
            <SubmissionItemHeaderTop>
              <SubmissionItemId>#{o.id}</SubmissionItemId>
            </SubmissionItemHeaderTop>
            <SubmissionItemHeaderBottom>
              <Tag bgColor="#00a8d2">New</Tag>
              <EyeIcon fill="#525c6e" />
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

  const renderRowDetails = (open) => (
    <Collapsible open={open}>
      <RowDetails>
        <RowDetailItems>
          <RowDetailItem>
            <RowDetailItemTitle>Referral Source</RowDetailItemTitle>
            <RowDetailItemValue>Internet</RowDetailItemValue>
          </RowDetailItem>

          <RowDetailItem>
            <RowDetailItemTitle>SIC Code</RowDetailItemTitle>
            <RowDetailItemValue>15363647</RowDetailItemValue>
          </RowDetailItem>

          <RowDetailItem>
            <RowDetailItemTitle>Phone Number</RowDetailItemTitle>
            <RowDetailItemValue>+41 2554 5411 533</RowDetailItemValue>
          </RowDetailItem>

          <RowDetailItem>
            <RowDetailItemTitle>Email</RowDetailItemTitle>
            <RowDetailItemValue>albertbennett@dummy.com</RowDetailItemValue>
          </RowDetailItem>

          <RowDetailItem>
            <RowDetailItemTitle>Address</RowDetailItemTitle>
            <RowDetailItemValue>52 Jacolite Street, Western Australia, 6071</RowDetailItemValue>
          </RowDetailItem>
        </RowDetailItems>

        <DescriptionList
          title="Polices"
          data={polices}
          renderListItem={renderPolicy}
        />

        <DescriptionList
          title="Submissions"
          data={submissions}
          renderListItem={renderSubmission}
        />

      </RowDetails>
    </Collapsible>
  );

  const columns = [
    {title: 'Customer Name', render: renderCustomer},
    {title: 'Company Name', render: o => o.company},
    {title: 'Customer Number', render: o => o.phone},
    {title: 'Department', render: o => o.department},
    {title: 'Annual Premium', render: o => o.annualPremium},
    {title: 'Policy Status', render: o => o.policyStatus},
    {isActions: true, render: renderActions},
  ];

  return (
    <CustomersListTable>
      <Scrollbar
        thumbColor="#E7F1F3"
        height={tableHeight}
      >
        <Table
          data={data}
          columns={columns}
          renderRowDetails={renderRowDetails}
        />
      </Scrollbar>
    </CustomersListTable>
  );
};