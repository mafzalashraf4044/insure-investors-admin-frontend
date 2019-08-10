import React from 'react';

//  styled components
import {
  Header,
  HeaderLeft,
  Title,
  HeaderRight,
  AddNewButton
} from './styled';

export default () => {

  return (
    <Header>
      <HeaderLeft>
        <Title>Overview</Title>
      </HeaderLeft>

      <HeaderRight>
        <AddNewButton type="button">
          <span>Add New</span>
        </AddNewButton>
      </HeaderRight>

    </Header>
  );
};