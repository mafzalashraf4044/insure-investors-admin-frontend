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

export const DashboardDetails = styled.div`
  width: calc(30% - ${getSizeWrtWidth(10)});
  height: ${getSizeWrtWidth(610)};
  border-radius: 4px;
  background-color: #FFF;
`;