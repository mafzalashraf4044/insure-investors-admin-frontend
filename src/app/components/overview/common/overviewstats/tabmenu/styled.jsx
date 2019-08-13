import styled from 'styled-components';

import Caret from 'components/common/icons/Caret';
import AllPolicies from 'components/common/icons/AllPolicies';
import Property from 'components/common/icons/Property';
import GeneralLiability from 'components/common/icons/GeneralLiability';
import Flood from 'components/common/icons/Flood';
import BuildersRisk from 'components/common/icons/BuildersRisk';

import MaterialMenu from '@material-ui/core/Menu';
import MaterialMenuItem from '@material-ui/core/MenuItem';

//  constants
import {
  flexCC,
  flexSbC,
} from 'constants/styles';

//  utils
import {getSizeWrtWidth} from 'utils/styles';
  
export const TabMenu = styled.div`
  position: relative;
`;

export const DropdownButton = styled.button`
  ${flexCC}  
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  margin: 0 0 0 ${getSizeWrtWidth(10)};

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

  p {
    font-size: ${getSizeWrtWidth(14)};
    color: #101f77;
    font-weight: 700;
    margin: 0 ${getSizeWrtWidth(15)} 0 0;
  }
`;

export const DropdownCaretIcon = styled(Caret)`
  width: ${getSizeWrtWidth(12)};
  height: ${getSizeWrtWidth(12)};

  path {
    fill: #000;
  }
`;

export const AllPoliciesIcon = styled(AllPolicies)`
  width: ${getSizeWrtWidth(20)};
  height: ${getSizeWrtWidth(20)};
  margin-right: ${getSizeWrtWidth(10)};

  path {
    fill: #00a8d2;
  }
`;

export const PropertyIcon = styled(Property)`
  width: ${getSizeWrtWidth(20)};
  height: ${getSizeWrtWidth(20)};
  margin-right: ${getSizeWrtWidth(10)};

  path {
    fill: #00a8d2;
  }
`;

export const GeneralLiabilityIcon = styled(GeneralLiability)`
  width: ${getSizeWrtWidth(20)};
  height: ${getSizeWrtWidth(20)};
  margin-right: ${getSizeWrtWidth(10)};

  path {
    fill: #00a8d2;
  }
`;

export const FloodIcon = styled(Flood)`
  width: ${getSizeWrtWidth(20)};
  height: ${getSizeWrtWidth(20)};
  margin-right: ${getSizeWrtWidth(10)};

  path {
    fill: #00a8d2;
  }
`;

export const BuildersRiskIcon = styled(BuildersRisk)`
  width: ${getSizeWrtWidth(20)};
  height: ${getSizeWrtWidth(20)};
  margin-right: ${getSizeWrtWidth(10)};

  path {
    fill: #00a8d2;
  }
`;