import styled from 'styled-components';

//  constants
import {
  headerHeight,
  flexSbC,
  flexCC,
  flexFsC,
  flexColumnFsFs,
} from 'constants/styles';

//  utils
import {getSizeWrtWidth} from 'utils/styles';

export const Overview = styled.div`
  ${flexColumnFsFs}
  margin-right: -${getSizeWrtWidth(15)};
`;

export const OverviewTop = styled.div`
  width: 100%;
  margin-bottom: ${getSizeWrtWidth(20)};
  padding-right: ${getSizeWrtWidth(15)};
`;

export const OverviewBottom = styled.div`
  ${flexSbC}
  width: 100%;
  padding-right: ${getSizeWrtWidth(15)};
`;