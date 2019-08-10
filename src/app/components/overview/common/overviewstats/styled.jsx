import styled from 'styled-components';

//  constants
import {
  headerHeight,
  flexSbC,
  flexCC,
  flexFsC,
} from 'constants/styles';

//  utils
import {getSizeWrtWidth} from 'utils/styles';

export const OverviewStats = styled.div`
  width: 100%;
`;

export const OverviewStatsTop = styled.div`
  ${flexSbC}
  width: 100%;
`;

export const OverviewTabs = styled.div`
  ${flexSbC}
  width: calc(70% - ${getSizeWrtWidth(10)});
  height: ${getSizeWrtWidth(140)};
`;

export const OverviewTab = styled.div`
  width: 32%;
  height: 100%;
  background-color: #FFF;
  border-radius: 4px;
  cursor: pointer;
  padding: ${getSizeWrtWidth(15)};
  border-bottom: 15px solid ${props => props.active ? 'transparent' : props.borderColor};
  box-shadow: ${props => props.active ? '0 15px #FFF' : 'none'};
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

export const SubmissionItemHeaderTop = styled.div`%;
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
  width: calc(30% - ${getSizeWrtWidth(10)});
  height: ${getSizeWrtWidth(140)};
  border-radius: 4px;
  background-color: #FFF;
`;


export const OverviewStatsBottom = styled.div`

`;