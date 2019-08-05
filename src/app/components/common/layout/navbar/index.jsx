import React from 'react';

//  styled components
import {
  Nav,
  NavItems,
  NavItem,
  DashboardIcon,
  LeadIcon,
  CustomersIcon,
  InfoIcon,
  HomeLink,
  NavBottom,
  ActionButton,
  ActionButtonIcon,
  NotificationLabel,
  ProfileImage,
} from './styled';

//  icons
import { faCog, faBell } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {

  const navItems = [
    {title: 'Dashboard', to: '/', icon: <DashboardIcon />},
    {title: 'Lead', to: 'customers', icon: <LeadIcon />},
    {title: 'Customers', to: '/customers-list', icon: <CustomersIcon />},
    {title: 'Info', to: '/info', icon: <InfoIcon />},
  ];

  return (
    <Nav>
      <NavItems>
        <HomeLink to="/">
          <img src={require('assets/images/icons/home.png')} alt="home icon" />
        </HomeLink>
        {
          navItems.map((navItem, i) => (
            <NavItem to={navItem.to} key={i}>
              {navItem.icon}
            </NavItem>
          ))
        }
      </NavItems>
      <NavBottom>
        <ActionButton href="#">
          <ActionButtonIcon icon={faCog} />
        </ActionButton>
        <ActionButton href="#">
          <NotificationLabel>
            <span>2</span>
          </NotificationLabel>
          <ActionButtonIcon icon={faBell} />
        </ActionButton>

        <ProfileImage href="#">
          <img src={require('assets/images/profile-image.jpg')} alt="profile image" />
        </ProfileImage>
      </NavBottom>
    </Nav>
  );
};

export default Navbar;