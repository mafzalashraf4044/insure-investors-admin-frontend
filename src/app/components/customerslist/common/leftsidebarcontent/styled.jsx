import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//  utils
import {getSizeWrtWidth} from 'utils/styles';

//  constants
import {
  navWidth,
  navBg,
  flexCC,
  flexSbC,
  flexFsFs,
  flexFsC,
  flexColumnSbC,
  flexColumnFsC,
  textOverflowEllipsis,
} from 'constants/styles';

export const Content = styled.div`
  padding: ${getSizeWrtWidth(50)} ${getSizeWrtWidth(30)};
`;

export const Heading = styled.h1`
  font-size: ${getSizeWrtWidth(28)};
  color: #FFF;
  font-weight: 800;
  margin: 0 0 ${getSizeWrtWidth(50)} 0;
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

export const MainItemIcon = styled(FontAwesomeIcon)`
  font-size: ${getSizeWrtWidth(30)};
  color: #dc248d;
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

