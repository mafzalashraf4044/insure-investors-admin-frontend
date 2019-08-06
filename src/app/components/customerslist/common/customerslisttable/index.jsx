import React from 'react';

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
  DeleteIcon
} from './styled';

import Table from 'components/common/table';
import Scrollbar from 'components/common/scrollbar';

import {Animated} from 'react-animated-css';

//  utils
import {getSizeWrtWidth} from 'utils/styles';
  
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
    
  const renderActions = (o, hover) => (
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
        <Action>
          <AccordionIcon />
        </Action>
        <Action>
          <MoreIcon />
        </Action>
      </ActionsRight>
    </Actions>
  );

  const columns = [
    {title: 'Customer Name', render: renderCustomer},
    {title: 'Company Name', render: o => o.company},
    {title: 'Customer Number', render: o => o.phone},
    {title: 'Department', render: o => o.department},
    {title: 'Annual Premium', render: o => o.annualPremium},
    {title: 'Policy Status', render: o => o.policyStatus},
    {title: '', render: renderActions},
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
        />
      </Scrollbar>
    </CustomersListTable>
  );
};