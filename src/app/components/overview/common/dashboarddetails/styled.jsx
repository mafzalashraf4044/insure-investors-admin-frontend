import styled from 'styled-components';

//  constants
import {
  flexSbC,
  flexCC,
  flexFsC,
} from 'constants/styles';

//  utils
import {getSizeWrtWidth} from 'utils/styles';

export const DashboardDetails = styled.div`
  width: calc(30% - ${getSizeWrtWidth(10)});
  border-radius: 4px;
  background-color: #FFF;
`;

export const DashboardDetailTabs = styled.div`
  ${flexSbC}
  width: 100%;
  box-shadow: inset 0 -1px #e1e5e9;
`;

export const DashboardDetailTab = styled.div`
  ${flexCC}
  flex: 1;
  cursor: pointer;
  margin: 0 ${getSizeWrtWidth(15)};
  padding: ${getSizeWrtWidth(15)} 0;
  box-shadow: ${props => props.active ? 'inset 0 -4px #03105c' : 'none'};
`;

export const DashboardDetailTabText = styled.div`
  font-size: ${getSizeWrtWidth(16)};
  line-height: ${getSizeWrtWidth(20)};
  color: #03105c;
  font-weight: 700;
`;

export const TabContent = styled.div`
  padding: ${getSizeWrtWidth(15)};
  margin-right: -${getSizeWrtWidth(12)};

  .rc-steps-item-title {
    font-size: ${getSizeWrtWidth(14)};
    line-height: ${getSizeWrtWidth(20)};
    color: #2b3748;
    font-weight: 400;
  }

  .rc-steps-item-description {
    font-size: ${getSizeWrtWidth(12)};
    color: #777777;
    font-weight: 400;
  }

  .rc-steps-icon {
    top: 0!important;
  }

  .rc-steps-small .rc-steps-item-content {
    margin-top: -3px;
  }

`;

export const StepBullet = styled.div`
  width: ${getSizeWrtWidth(20)};
  height: ${getSizeWrtWidth(20)};
  border-radius: 50%;
  background-color: rgba(244,244,244,0.30196078431372547);
  border: 3px solid #58cc8f;
`;