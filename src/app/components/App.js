import React, { useState, useEffect } from 'react';

//  React Router
import { Switch, Redirect, Route } from 'react-router-dom';

//  Pages
import OverviewPage from './overview/OverviewPage';
import CustomersPage from './customers/CustomersPage';
import CustomersListPage from './customerslist/CustomersListPage';

//  Custom Components
import Screen from './common/Screen';

const App = () => {  
  return (
    <Screen>
      <Switch>
          <Route path='/' exact component={OverviewPage} />
          <Route path='/customers' exact component={CustomersPage} />
          <Route path='/customers-list' exact component={CustomersListPage} />
          
          <Redirect to='/' />
      </Switch>  
    </Screen>
  );
};

export default App;
