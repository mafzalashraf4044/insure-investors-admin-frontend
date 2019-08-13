import styled from 'styled-components';

import Caret from 'components/common/icons/Caret';

import MaterialMenu from '@material-ui/core/Menu';
import MaterialMenuItem from '@material-ui/core/MenuItem';

//  constants
import {
  headerHeight,
  flexSbC,
  flexCC,
  flexFsC,
} from 'constants/styles';

//  utils
import {getSizeWrtWidth} from 'utils/styles';

export const Header = styled.div`
  ${flexSbC}
  width: 100%;
`;

export const HeaderLeft = styled.div`
  ${flexFsC}
  height: ${getSizeWrtWidth(headerHeight)};
`;

export const Title = styled.h1`
  font-size: ${getSizeWrtWidth(28)};
  line-height: ${getSizeWrtWidth(28)};
  color: #03105c;
  font-weight: 800;
  margin: 0 ${getSizeWrtWidth(30)} 0 0;
`;

export const HeaderRight = styled.div``;

export const AddNewButton = styled.button`
  ${flexSbC}
  width: ${getSizeWrtWidth(152)};
  height: ${getSizeWrtWidth(46)};
  border-radius: 4px;
  background-color: #dc248d;
  border: none;
  cursor: pointer;
  padding: 0;
  margin: 0;

  &:focus {
    outline: none;
  }

  span {
    font-size: ${getSizeWrtWidth(14)};
    color: #FFF;
    font-family: "Raleway";
    font-weight: 600;
  }
`;

export const AaddNewButtonText = styled.span`
  ${flexCC}  
  flex: 1;
`;

export const DropdownButton = styled.button`
  ${flexCC}  
  width: ${getSizeWrtWidth(46)};
  height: ${getSizeWrtWidth(46)};
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  margin: 0;
  border-left: 1px solid #f4f4f4;

  &:focus {
    outline: none;
  }
`;

export const Menu = styled(MaterialMenu)`
  .MuiMenuItem-root {
    min-height: ${getSizeWrtWidth(34)};
  }
`;

export const MenuItem = styled(MaterialMenuItem)`
  ${flexSbC}

  font-size: ${getSizeWrtWidth(14)};
  color: #101f77;
  font-weight: 700;
`;

export const DropdownCaretIcon = styled(Caret)`
  width: ${getSizeWrtWidth(12)};
  height: ${getSizeWrtWidth(12)};

  path {
    fill: #f4f4f4;
  }
`;