import React, { useState, useEffect } from 'react';

//  Custom Components
import Page from 'components/common/layout/page';
import LeftSidebar from 'components/common/layout/leftsidebar';
import PageContent from 'components/common/layout/pagecontent';
import LeftSidebarContent from './common/leftsidebarcontent';
import Header from './common/header';
import CustomersListTable from './common/customerslisttable';

const CustomersListPage = () => {    
  return (
    <Page>
      <LeftSidebar>
        <LeftSidebarContent />
      </LeftSidebar>
      <PageContent>
        <Header />
        <CustomersListTable />
      </PageContent>
    </Page>
  );
};

export default CustomersListPage;
