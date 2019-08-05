import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//  icons
import Dashboard from 'components/common/icons/Dashboard';
import Lead from 'components/common/icons/Lead';
import Customers from 'components/common/icons/Customers';
import Info from 'components/common/icons/Info';

//  constants
import {
  navWidth,
  navBg,
  flexCC,
  flexColumnSbC,
  flexColumnFsC,
} from 'constants/styles';

//  utils
import { getSizeWrtWidth } from '../../../../utils/styles';

export const Nav = styled.div`
  ${flexColumnSbC}
  width: ${navWidth};
  height: 100%;
  background-color: ${navBg};
  box-shadow: 0px 20px 52px rgba(0,0,0,0.25);
`;

export const NavItems = styled.div`
  ${flexColumnFsC}
`;

export const NavItem = styled(Link)`
  ${flexCC}
  width: ${navWidth};
  margin: 15px 0;
`;

export const DashboardIcon = styled(Dashboard)`
  width: ${getSizeWrtWidth(20)};
  height: ${getSizeWrtWidth(20)};

  path {
    fill: #8492a8;
  }
`;

export const LeadIcon = styled(Lead)`
  width: ${getSizeWrtWidth(20)};
  height: ${getSizeWrtWidth(20)};

  path {
    fill: #8492a8;
  }
`;

export const CustomersIcon = styled(Customers)`
  width: ${getSizeWrtWidth(25)};
  height: ${getSizeWrtWidth(25)};

  path {
    fill: #8492a8;
  }
`;

export const InfoIcon = styled(Info)`
  width: ${getSizeWrtWidth(20)};
  height: ${getSizeWrtWidth(20)};

  path {
    fill: #8492a8;
  }
`;

export const HomeLink = styled(Link)`
  ${flexCC}  
  width: ${navWidth};
  height: ${navWidth};
  background-color: #00a8d2;
  margin-bottom: 50px;
`;

export const NavBottom = styled.div`
  ${flexColumnFsC}
  margin-bottom: 50px;
`;

export const ActionButton = styled.a`
  ${flexCC}
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background-color: #9fa5c9;
  margin: 5px 0;
  position: relative;
`;

export const ActionButtonIcon = styled(FontAwesomeIcon)`
  font-size: 14px;
  color: #101f77;
`;

export const NotificationLabel = styled.div`
  ${flexCC}
  position: absolute;
  right: -10px;
  top: -10px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: #ed5454;
  border: 2px solid #101f77;

  span {
    color: #FFF;
    font-size: 8px;
  }
`;

export const ProfileImage = styled.div`
  margin: 10px 0;

  img {
    width: 43px;
    height: 43px;
    border-radius: 50%;
  }
`;
