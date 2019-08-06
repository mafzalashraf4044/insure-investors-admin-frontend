import styled from 'styled-components';

//  icons
import Accordion from 'components/common/icons/Accordion';
import More from 'components/common/icons/More';
import Pencil from 'components/common/icons/Pencil';
import Eye from 'components/common/icons/Eye';
import Delete from 'components/common/icons/Delete';

//  constants
import {
  flexCC,
  flexSbC,
  flexFsC,
  flexColumnFsFs,
} from 'constants/styles';

//  utils
import {getSizeWrtWidth} from 'utils/styles'

export const CustomersListTable = styled.div`
  border-top: 1px solid #e1e5e9;
  border-bottom: 1px solid #e1e5e9;
`;

export const Customer = styled.div`
  ${flexFsC}
`;

export const CustomImage = styled.img`
  width: 43px;
  height: 43px;
  border-radius: 50%;
`;

export const CustomerText = styled.div`
  ${flexColumnFsFs}
  margin-left: 15px;
`;

export const CustomerName = styled.span`
  font-size: ${getSizeWrtWidth(14)};
  color: #0f203f;
  font-weight: 400;
  text-align: left;
`;

export const CustomerSubText = styled.span`
  font-size: ${getSizeWrtWidth(14)};
  color: #00a8d2;
  font-weight: 400;
  text-align: left;
`;

export const Actions = styled.div`
  ${flexSbC}
  position: relative;
  padding-right: ${getSizeWrtWidth(10)};
`;

export const ActionsLeft = styled.div`
  ${flexSbC}
  position: absolute;
  top: 0;
  right: ${getSizeWrtWidth(100)};
  background-color: #eeeeee;
`;

export const ActionsRight = styled.div`
  ${flexSbC}
`;

export const Action = styled.div`
  ${flexCC}
  margin: 0 ${getSizeWrtWidth(4)};
  cursor: pointer;
  width: ${getSizeWrtWidth(28)};
  height: ${getSizeWrtWidth(28)};
  border-radius: 50%;
  background-color: ${props => props.bg ? props.bg : 'transparent'};
`;

export const AccordionIcon = styled(Accordion)`
  width: ${getSizeWrtWidth(24)};
  height: ${getSizeWrtWidth(24)};
`;

export const MoreIcon = styled(More)`
  width: ${getSizeWrtWidth(24)};
  height: ${getSizeWrtWidth(24)};
`;

export const PencilIcon = styled(Pencil)`
  width: ${getSizeWrtWidth(14)};
  height: ${getSizeWrtWidth(14)};
`;

export const EyeIcon = styled(Eye)`
  width: ${getSizeWrtWidth(14)};
  height: ${getSizeWrtWidth(14)};
`;

export const DeleteIcon = styled(Delete)`
  width: ${getSizeWrtWidth(14)};
  height: ${getSizeWrtWidth(14)};
`;