import React, { useState, useEffect } from 'react';

//  Custom Components
import Page from 'components/common/layout/page';
import LeftSidebar from 'components/common/layout/leftsidebar';
import PageContent from 'components/common/layout/pagecontent';
import LeftSidebarContent from './common/leftsidebarcontent';
import Header from './common/header';
import CustomersListTable from './common/customerslisttable';
import AddNewCustomer from './common/addnewcustomer';

const CustomersListPage = () => {    

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  }

  return (
    <Page>
      <LeftSidebar>
        <LeftSidebarContent />
      </LeftSidebar>
      <PageContent>
        <Header
          toggleSidebar={toggleSidebar}
        />
        <CustomersListTable />
      </PageContent>
      <AddNewCustomer
        toggle={toggleSidebar}
        open={sidebarOpen}
      />
    </Page>
  );
};

export default CustomersListPage;
