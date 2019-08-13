import styled from 'styled-components';

import Add from 'components/common/icons/Add';

//  constants
import {
  headerHeight,
  flexSbC,
  flexCC,
  flexFsC,
} from 'constants/styles';

//  utils
import {getSizeWrtWidth} from 'utils/styles';

export const PortfolioSummary = styled.div`
  width: calc(70% - ${getSizeWrtWidth(10)});
  border-radius: 4px;
  background-color: #FFF;
  padding: ${getSizeWrtWidth(15)};
`;

export const Header = styled.div`
  ${flexSbC}
  width: 100%;
  margin-bottom: ${getSizeWrtWidth(15)};
`;

export const Title = styled.div`
  font-size: ${getSizeWrtWidth(20)};
  line-height: ${getSizeWrtWidth(20)};
  color: #03105c;
  font-weight: 700;
`;

export const AddPropertyButton = styled.div`
  ${flexFsC}  
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

export const AddIcon = styled(Add)`
  width: ${getSizeWrtWidth(16)};
  height: ${getSizeWrtWidth(30)};

  path {
    fill: #00a8d2;
  }
`;

export const AddPropertyButtonText = styled.p`
  font-size: ${getSizeWrtWidth(14)};
  line-height: ${getSizeWrtWidth(30)};
  color: #191f2a;
  font-weight: 600;
  margin: 0 0 0 ${getSizeWrtWidth(5)};
`;

export const PortfolioContent = styled.div`
  margin-right: -${getSizeWrtWidth(12)};
`;

export const PortfolioList = styled.div`
  padding-right: ${getSizeWrtWidth(12)};
`;
