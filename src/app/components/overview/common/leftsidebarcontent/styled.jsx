import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//  icons
import Customers from 'components/common/icons/Customers';
import Calendar from 'components/common/icons/Calendar';
import Lead from 'components/common/icons/Lead';

//  constants
import {
  headerHeight,
  contentPadding,
  flexSbC,
  flexFsFs,
  flexFsC,
  flexColumnFsC,
  textOverflowEllipsis,
} from 'constants/styles';

//  utils
import {getSizeWrtWidth} from 'utils/styles'

export const Content = styled.div`
  ${contentPadding}
`;

export const Header = styled.div`
  ${flexFsC}
  height: ${getSizeWrtWidth(headerHeight)};
`;

export const Title = styled.h1`
  font-size: ${getSizeWrtWidth(28)};
  line-height: ${getSizeWrtWidth(28)};
  color: #FFF;
  font-weight: 800;
  margin: 0;
`;

export const MainItems = styled.div`
  ${flexColumnFsC}
  margin-bottom: ${getSizeWrtWidth(50)};
`;
  
export const MainItem = styled.div`
  ${flexFsFs}
  width: 100%;
  border-bottom: 1px solid #293373;
  margin-bottom: ${getSizeWrtWidth(15)};
  padding-bottom: ${getSizeWrtWidth(15)};
`;

export const CustomersIcon = styled(Customers)`
  width: ${getSizeWrtWidth(35)};
  height: ${getSizeWrtWidth(35)};

  path {
    fill: #dc248d;
  }
`;

export const CalendarIcon = styled(Calendar)`
  width: ${getSizeWrtWidth(30)};
  height: ${getSizeWrtWidth(30)};

  path {
    fill: #dc248d;
  }
`;

export const LeadIcon = styled(Lead)`
  width: ${getSizeWrtWidth(30)};
  height: ${getSizeWrtWidth(30)};

  path {
    fill: #dc248d;
  }
`;

export const MainItemRight = styled.div`
  margin-left: ${getSizeWrtWidth(15)};
`;

export const MainItemTitle = styled.p`
  font-size: ${getSizeWrtWidth(14)};
  color: #8187ad;
  font-weight: 700;
  margin: 0 0 10px 0;
`;

export const MainItemValue = styled.p`
  font-size: ${getSizeWrtWidth(25)};
  color: #FFF;
  font-weight: 700;
  margin: 0;
`;

export const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const ListItem = styled.li`
  ${flexSbC}
  width: 100%;
  min-height: ${getSizeWrtWidth(34)};
  margin-bottom: ${props => props.withMarginBottom ? getSizeWrtWidth(15) : '0px'};
`;

export const ListItemLeft = styled.div`
  ${flexFsC}
`;

export const ListItemBullet = styled(FontAwesomeIcon)`
  font-size: ${getSizeWrtWidth(14)};
  color: ${props => props.color};
`;

export const ListItemTitle = styled.p`
  ${textOverflowEllipsis}
  font-size: ${getSizeWrtWidth(14)};
  color: #8187ad;
  font-weight: 700;
  margin: 0 0 0 ${getSizeWrtWidth(10)};
`;

export const ListItemRight = styled.p`
  ${textOverflowEllipsis}
  font-size: ${getSizeWrtWidth(18)};
  color: #FFF;
  font-weight: 700;
  width: 30%;
  margin: 0;
`;
