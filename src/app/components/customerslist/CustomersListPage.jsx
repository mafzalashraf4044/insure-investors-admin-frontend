import React, { useState, useEffect } from 'react';

//  Custom Components
import Page from 'components/common/layout/page';
import LeftSidebar from 'components/common/layout/leftsidebar';
import PageContent from 'components/common/layout/pagecontent';
import LeftSidebarContent from './common/leftsidebarcontent';

const CustomersListPage = () => {  
  return (
    <Page>
      <LeftSidebar>
        <LeftSidebarContent />
      </LeftSidebar>
      <PageContent>
        <h1>Customers List</h1>
      </PageContent>
    </Page>
  );
};

export default CustomersListPage;
