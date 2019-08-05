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

//  icons
import { faSearch, faFilter } from '@fortawesome/free-solid-svg-icons';

export default () => {

  return (
    <Header>
      <HeaderLeft>
        <Title>Customers List</Title>

        <SearchBox>
          <SearchIcon icon={faSearch} />
          <SearchInput
            placeholder="Search Customers"
          />
        </SearchBox>

        <FilterButton>
          <FilterIcon icon={faFilter} />
          <span>Filter</span>
        </FilterButton>
      </HeaderLeft>

      <HeaderRight>
        <NewCustomerButton>
          <span>New Customer</span>
        </NewCustomerButton>
      </HeaderRight>

    </Header>
  );
};