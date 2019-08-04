import React, { useState, useEffect } from 'react';

//  Custom Components
import Page from 'components/common/layout/page';
import LeftSidebar from 'components/common/layout/leftsidebar';
import PageContent from 'components/common/layout/pagecontent';

const OverviewPage = () => {  
  return (
    <Page>
      <LeftSidebar />
      <PageContent>
        <h1>Overview</h1>
      </PageContent>
    </Page>
  );
};

export default OverviewPage;
