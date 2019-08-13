import React, {useState} from 'react';

//  styled components
import {
  Header,
  HeaderLeft,
  Title,
  HeaderRight,
  AddNewButton,
  AaddNewButtonText,
  DropdownButton,
  Menu,
  MenuItem,
  DropdownCaretIcon,
} from './styled';

export default () => {

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (e) => {
    e.stopPropagation();
    setAnchorEl(e.currentTarget);
  }

  const handleClose = (e) => {
    e.stopPropagation();
    setAnchorEl(null);
  }

  return (
    <Header>
      <HeaderLeft>
        <Title>Overview</Title>
      </HeaderLeft>

      <HeaderRight>
        <AddNewButton type="button">
          <AaddNewButtonText>Add New</AaddNewButtonText>
          <DropdownButton
            aria-haspopup="true"
            aria-controls="add-new-menu"
            onClick={handleClick}
          >
            <DropdownCaretIcon />
          </DropdownButton>
        </AddNewButton>
        <Menu
          id="add-new-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          transformOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <MenuItem onClick={handleClose}>Quick Quote</MenuItem>
          <MenuItem onClick={handleClose}>New Submission</MenuItem>
          <MenuItem onClick={handleClose}>New Property</MenuItem>
          <MenuItem onClick={handleClose}>New Document</MenuItem>
        </Menu>
      </HeaderRight>

    </Header>
  );
};