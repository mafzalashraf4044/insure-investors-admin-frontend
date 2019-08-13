import styled from 'styled-components';

import Caret from 'components/common/icons/Caret';
import ArrowRight from 'components/common/icons/ArrowRight';

//  constants
import {
  flexSbC,
  flexCC,
  flexFsC,
  flexColumnFsFs,
  flexColumnSbC,
  flexColumnSbFs,
} from 'constants/styles';

//  utils
import {getSizeWrtWidth} from 'utils/styles';

export const OverviewStats = styled.div`
  width: 100
`;

export const OverviewStatsTop = styled.div`
  ${flexSbC}
  width: 100
`;

export const OverviewTabs = styled.div`
  ${flexSbC}
  width: calc(70% - ${getSizeWrtWidth(10)});
  height: ${getSizeWrtWidth(140)};
`;

export const OverviewTab = styled.div`
  ${flexColumnSbC}
  width: 32%;
  height: 100%;
  background-color: #FFF;
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  padding: ${getSizeWrtWidth(15)};
  border-bottom: 15px solid ${props => props.active ? 'transparent' : props.borderColor};
  box-shadow: ${props => props.active ? '0 15px #FFF' : 'none'};
`;

export const OverviewTabTop = styled.div`
  ${flexFsC}
  width: 100%;
`;

export const OverviewTabTitle = styled.h2`
  font-size: ${getSizeWrtWidth(20)};
  color: #101f77;
  font-weight: 700;
  margin: 0 ${getSizeWrtWidth(15)} 0 0;
`;

export const OverviewTabBottom = styled.div`
  ${flexColumnFsFs}
  width: 100%;
`;

export const TabCaretIcon = styled(Caret)`
  width: ${getSizeWrtWidth(12)};
  height: ${getSizeWrtWidth(12)};
  position: absolute;
  bottom: -${getSizeWrtWidth(15)};
  transform: rotate(${props => props.tabActive ? 180 : 0}deg);

  path {
    fill: ${props => props.tabActive ? props.color : '#FFF'};
  }
`;

export const OverviewTabTotalPremiumTitle = styled.p`
  font-size: ${getSizeWrtWidth(12)};
  color: #777777;
  font-weight: 700;
  margin: 0 0 ${getSizeWrtWidth(5)} 0;
`;

export const OverviewTabTotalPremiumValue = styled.p`
  font-size: ${getSizeWrtWidth(24)};
  color: #00a8d2;
  font-weight: 700;
  margin: 0;
`;

export const OverviewTabContent = styled.div`
  padding: ${getSizeWrtWidth(15)};
  background-color: #FFF;
  border-radius: 4px;
  margin-top: ${getSizeWrtWidth(15)};
  border-bottom: 15px solid ${props => props.borderColor};
`;

export const SubmissionItemHeader = styled.div`

`;

export const SubmissionItemHeaderTop = styled.div`
`;

export const SubmissionItemId = styled.div`
  font-size: ${getSizeWrtWidth(18)};
  color: #525c6e;
  font-weight: 700;
  margin: 0 0 ${getSizeWrtWidth(5)} 0;
`;

export const SubmissionItemHeaderBottom = styled.div`
  ${flexFsC}
`;

export const BillingInformation = styled.div`
  ${flexColumnSbFs}
  width: calc(30% - ${getSizeWrtWidth(10)});
  height: ${getSizeWrtWidth(140)};
  border-radius: 4px;
  background-color: #FFF;
  padding: ${getSizeWrtWidth(15)};
`;

export const BillingInformationTop = styled.div`
  ${flexSbC}
  width: 100%;
`;

export const BillingInformationTitle = styled.h2`
  font-size: ${getSizeWrtWidth(20)};
  color: #101f77;
  font-weight: 700;
  margin: 0;
`;

export const MoreInfoButton = styled.button`
  ${flexFsC}  
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

export const MoreInfoButtonText = styled.div`
  font-size: ${getSizeWrtWidth(12)};
  line-height: ${getSizeWrtWidth(16)};
  color: #00a8d2;
  font-weight: 400;
  margin-right: ${getSizeWrtWidth(5)};
`;

export const ArrowRightIcon = styled(ArrowRight)`
  width: ${getSizeWrtWidth(16)};
  height: ${getSizeWrtWidth(16)};

  path {
    fill: #00d69d;
  }
`;

export const BillingInformationText = styled.div`
  font-size: ${getSizeWrtWidth(14)};
  color: #0f203f;
  font-weight: 400;
`;

export const BillingInformationBottom = styled.div`
  ${flexSbC}
  width: 100%;
`;

export const BillingDetailColumn = styled.div`
  ${flexColumnFsFs}
  width: 50%;
`;

export const BillingDetailTitle = styled.p`
  font-size: ${getSizeWrtWidth(12)};
  color: #777777;
  font-weight: 400;
  margin: 0;
`;

export const BillingDetailsValue = styled.p`
  font-size: ${getSizeWrtWidth(14)};
  color: #00a8d2;
  font-weight: 700;
  margin: 0;
`;

