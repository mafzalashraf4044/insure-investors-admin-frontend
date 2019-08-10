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

export const SearchBox = styled.div`
  ${flexFsC}
  width: ${getSizeWrtWidth(408)};
  height: 34px;
  border-radius: 6px;
  border: 1px solid #d5d5d5;
  padding: 0 ${getSizeWrtWidth(10)};
  margin: 0 ${getSizeWrtWidth(15)};
`;

export const SearchIcon = styled(Search)`
  width: ${getSizeWrtWidth(14)};
  height: ${getSizeWrtWidth(14)};

  path {
    fill: #858585;
  }
`;

export const SearchInput = styled.input`
  border: none;
  width: 100%;
  margin-left: ${getSizeWrtWidth(10)};

  &:focus {
    outline: none;
  }
`;

export const FilterButton = styled.button`
  ${flexCC}
  width: ${getSizeWrtWidth(88)};
  height: 34px;
  border-radius: 6px;
  background-color: rgba(3,16,92,0.050980392156862744);
  border: 1px solid #d5d5d5;
  padding: 0;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  span {
    font-size: ${getSizeWrtWidth(14)};
    color: #858585;
    font-weight: 400;
    margin-left: ${getSizeWrtWidth(10)};
  }
`;

export const FilterIcon = styled(Filter)`
  width: ${getSizeWrtWidth(14)};
  height: ${getSizeWrtWidth(14)};

  path {
    fill: #858585;
  }
`;


export const HeaderRight = styled.div``;

export const NewCustomerButton = styled.button`
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