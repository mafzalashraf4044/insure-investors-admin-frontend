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
`;

export const OverviewTop = styled.div`
  width: calc(100% - ${getSizeWrtWidth(15)});
  margin-bottom: ${getSizeWrtWidth(20)};
  padding-right: ${getSizeWrtWidth(15)};
`;

export const OverviewBottom = styled.div`
  ${flexSbC}
  width: calc(100% - ${getSizeWrtWidth(15)});
  padding-right: ${getSizeWrtWidth(15)};
`;