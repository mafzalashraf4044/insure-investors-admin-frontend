import styled from 'styled-components';

//  constants
import {
  flexSbC,
  flexCC,
  flexFsC,
} from 'constants/styles';

//  utils
import {getSizeWrtWidth} from 'utils/styles';

export const BillingInformation = styled.div`
  width: calc(30% - ${getSizeWrtWidth(10)});
  height: ${getSizeWrtWidth(140)};
  border-radius: 4px;
  background-color: #FFF;
`;