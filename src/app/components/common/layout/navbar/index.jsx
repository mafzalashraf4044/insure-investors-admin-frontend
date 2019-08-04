import React from 'react';

//  styled components
import {
  Nav,
  NavItems,
  NavItem,
  HomeLink,
  NavBottom,
  ActionButton,
  ActionButtonIcon,
  NotificationLabel,
  ProfileImage
} from './styled';

//  icons
import { faCog, faBell } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {

  const navItems = [
    {title: 'Dashboard', to: '/', icon: require('assets/images/icons/dashboard.png')},
    {title: 'Lead', to: 'customers', icon: require('assets/images/icons/info.png')},
    {title: 'Customers', to: '/customers-list', icon: require('assets/images/icons/info.png')},
    {title: 'Info', to: '/info', icon: require('assets/images/icons/info.png')},
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
              <img src={navItem.icon} alt="navigation icon" />
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