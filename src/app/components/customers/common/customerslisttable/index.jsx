import React, {useState} from 'react';

// dummy data
import {customers, policies, submissions} from 'services/dummy-data';

//  third party libs
import {isUndefined, isArray} from 'lodash';

//  styled components
import {
  CustomersListTable,
  TableContainer,
  Customer,
  CustomerCheckbox,
  CustomerImage,
  CustomerText,
  CustomerName,
  PolicyStatus,
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

import {
  DescriptionListItem,
  DescriptionListHeader,
  DescriptionListFields,
  DescriptionListField, 
  DescriptionTitle,
  DescriptionValue
} from 'components/common/descriptionlist/styled';

//  third party components
import {Animated} from 'react-animated-css';
import Collapsible from 'react-collapsible';

//  custom components
import Tag from 'components/common/tag';
import Table from 'components/common/table';
import Scrollbar from 'components/common/scrollbar';
import DescriptionList from 'components/common/descriptionlist'; 

//  constants
import {
  tableHeight,
} from 'constants/styles';

export default () => {

  const renderCustomer = (o, hover) => (
    <Customer>
      {
        hover ?
        <CustomerCheckbox>
          <input type="checkbox" />
        </CustomerCheckbox> :
        <CustomerImage src={require('assets/images/profile-image.jpg')} alt="profile image" />
      }
      
      <CustomerText>
        <CustomerName>{o.name}</CustomerName>
        <Tag bgColor={o.role.bgColor}>{o.role.title}</Tag>
      </CustomerText>
    </Customer>
  );

  const renderPolicyStatus = (o) => (
    <PolicyStatus>
      <Tag bgColor="#26AED4">{o.policyStatus}</Tag>
    </PolicyStatus>
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
      <DescriptionListItem isArray={!isUndefined(i)} key={i}>
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
      <DescriptionListItem isArray={!isUndefined(i)} key={i}>
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
                <DescriptionValue>
                  {
                    isArray(detail.value) ?
                    detail.value.map((item, i) => (
                      <Tag bgColor="#cbcbcb" key={i}>
                        {item}
                      </Tag>
                    )) : detail.value
                  }
                </DescriptionValue>
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
          data={policies}
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
    {title: 'Customer', render: renderCustomer},
    {title: 'Company', render: o => o.company},
    {title: 'Date Added', render: o => o.date},
    {title: 'Expiry Date', render: o => o.expiry},
    {title: 'Premium', render: o => o.premium},
    {title: 'Policy Status', render: renderPolicyStatus},
    {isActions: true, render: renderActions},
  ];

  return (
    <CustomersListTable>
      <Scrollbar
        thumbColor="#E7F1F3"
        height={tableHeight}
      >
        <TableContainer>
          <Table
            data={customers}
            columns={columns}
            renderRowDetails={renderRowDetails}
          />
        </TableContainer>
      </Scrollbar>
    </CustomersListTable>
  );
};