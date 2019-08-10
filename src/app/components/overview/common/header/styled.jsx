import styled from 'styled-components';

//  icons
import Search from 'components/common/icons/Search';
import Filter from 'components/common/icons/Filter';

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
  ${flexCC}
  width: ${getSizeWrtWidth(153)};
  height: 46px;
  border-radius: 4px;
  background-color: #dc248d;
  border: none;
  cursor: pointer;

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