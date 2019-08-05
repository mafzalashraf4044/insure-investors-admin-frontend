import React from 'react';

import {
  CustomersListTable,
} from './styled';

import Table from 'components/common/table';
import Scrollbar from 'components/common/scrollbar';

//  utils
import {getSizeWrtWidth} from 'utils/styles';
  
//  constants
import {
  headerHeight,
  contentPaddingBottom,
} from 'constants/styles';

const data = [
  {name: 'Brian Roberts', company: 'Benchmark LLC',  phone: '1234567890', department: 'IT Department', annualPremium: '$1,589.54', policyStatus: 'UW Approved'},
  {name: 'Benjamin Alexander', company: 'Benchmark LLC',  phone: '1234567890', department: 'IT Department', annualPremium: '$1,589.54', policyStatus: 'Proposed'},
  {name: 'Nicole Henderson', company: 'Benchmark LLC',  phone: '1234567890', department: 'IT Department', annualPremium: '$1,589.54', policyStatus: 'Lost'},
  {name: 'Brian Roberts', company: 'Benchmark LLC',  phone: '1234567890', department: 'IT Department', annualPremium: '$1,589.54', policyStatus: 'UW Approved'},
  {name: 'Laura Hernandez', company: 'Benchmark LLC',  phone: '1234567890', department: 'IT Department', annualPremium: '$1,589.54', policyStatus: '{Proposed'},
  {name: 'Stephanie Richardson', company: 'Benchmark LLC',  phone: '1234567890', department: 'IT Department', annualPremium: '$1,589.54', policyStatus: 'UW Approved'},
  {name: 'Wanda Jackson', company: 'Benchmark LLC',  phone: '1234567890', department: 'IT Department', annualPremium: '$1,589.54', policyStatus: 'Proposed'},
  {name: 'Kevin Mitchell', company: 'Benchmark LLC',  phone: '1234567890', department: 'IT Department', annualPremium: '$1,589.54', policyStatus: 'Lost'},
  {name: 'Albert Bennett', company: 'Benchmark LLC',  phone: '1234567890', department: 'IT Department', annualPremium: '$1,589.54', policyStatus: 'Proposed'},
];

export default () => {
  const columns = [
    {title: 'Customer Name', render: o => o.name},
    {title: 'Company Name', render: o => o.company},
    {title: 'Customer Number', render: o => o.phone},
    {title: 'Department', render: o => o.department},
    {title: 'Annual Premium', render: o => o.annualPremium},
    {title: 'Policy Status', render: o => o.policyStatus},
  ];

  return (
    <CustomersListTable>
      <Scrollbar
        thumbColor="#E7F1F3"
        height={window.innerHeight - getSizeWrtWidth(headerHeight + contentPaddingBottom, false)}
      >
        <Table
          data={data}
          columns={columns}
        />
      </Scrollbar>
    </CustomersListTable>
  );
};