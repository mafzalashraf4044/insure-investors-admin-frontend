import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//  utils
import {getSizeWrtWidth} from 'utils/styles';

export const Table = styled.table`
  width: 100%;
`;

export const THead = styled.thead`

`;

export const Tr = styled.tr`
  height: ${getSizeWrtWidth(68)};
`;

export const Th = styled.th`
  font-size: ${getSizeWrtWidth(14)};
  color: #0f203f;
  font-weight: 700;
  text-align: left;
  padding-left: ${getSizeWrtWidth(30)};
`;


export const TBody = styled.tbody`

`;

export const Td = styled.td`
  font-size: ${getSizeWrtWidth(14)};
  color: #0f203f;
  font-weight: 400;
  text-align: left;
  border-top: 1px solid #e1e5e9;
  padding-left: ${getSizeWrtWidth(30)};
`;
