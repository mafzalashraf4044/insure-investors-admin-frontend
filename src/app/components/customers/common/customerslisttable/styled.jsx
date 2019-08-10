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
  flexFsFsWrap,
  flexColumnFsFs,
} from 'constants/styles';

//  utils
import {getSizeWrtWidth} from 'utils/styles'

export const CustomersListTable = styled.div`
  border-bottom: 1px solid #e1e5e9;
`;

export const Customer = styled.div`
  ${flexFsC}
`;

export const CustomerImage = styled.img`
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
  z-index: 1;
  position: relative;
  padding-right: ${getSizeWrtWidth(10)};
`;

export const ActionsLeft = styled.div`
  ${flexSbC}
  z-index: 1;
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

  path {
    fill: ${props => props.fill ? props.fill : '#FFF'};
  }
`;

export const DeleteIcon = styled(Delete)`
  width: ${getSizeWrtWidth(14)};
  height: ${getSizeWrtWidth(14)};
`;

export const RowDetails = styled.div`
  ${flexColumnFsFs}
  padding: ${getSizeWrtWidth(15)} ${getSizeWrtWidth(30)} 0 ${getSizeWrtWidth(30)};
  margin-right: ${getSizeWrtWidth(10)};
`;

export const RowDetailItems = styled.div`
  ${flexFsFsWrap}
  width: 100%;
  margin-bottom: ${getSizeWrtWidth(15)}
`;

export const RowDetailItem = styled.div`
  ${flexColumnFsFs}
  width: 20%;
`;

export const RowDetailItemTitle = styled.p`
  font-size: ${getSizeWrtWidth(12)};
  color: #868b96;
  font-weight: 700;
  margin: 0 0 ${getSizeWrtWidth(10)} 0;
`;

export const RowDetailItemValue = styled.p`
  font-size: ${getSizeWrtWidth(14)};
  color: #525c6e;
  font-weight: 700;
  margin: 0;
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
