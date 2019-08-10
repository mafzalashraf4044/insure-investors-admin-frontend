import React from 'react';

//  styled components
import {
  Header,
  HeaderLeft,
  Title,
  SearchBox,
  SearchIcon,
  SearchInput,
  FilterButton,
  FilterIcon,
  HeaderRight,
  NewCustomerButton
} from './styled';

export default ({toggleSidebar}) => {

  return (
    <Header>
      <HeaderLeft>
        <Title>Customers List</Title>

        <SearchBox>
          <SearchIcon />
          <SearchInput
            placeholder="Search Customers"
          />
        </SearchBox>

        <FilterButton>
          <FilterIcon />
          <span>Filter</span>
        </FilterButton>
      </HeaderLeft>

      <HeaderRight>
        <NewCustomerButton type="button" onClick={toggleSidebar}>
          <span>New Customer</span>
        </NewCustomerButton>
      </HeaderRight>

    </Header>
  );
};