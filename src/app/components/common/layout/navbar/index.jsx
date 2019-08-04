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
    {title: "Dashboard", icon: require('assets/images/icons/dashboard.png')},
    {title: "Lead", icon: require('assets/images/icons/info.png')},
    {title: "Customers", icon: require('assets/images/icons/info.png')},
    {title: "Info", icon: require('assets/images/icons/info.png')},
  ];

  return (
    <Nav>
      <NavItems>
        <HomeLink href="#">
          <img src={require('assets/images/icons/home.png')} alt="home icon" />
        </HomeLink>
        {
          navItems.map((navItem, i) => (
            <NavItem href="#" key={i}>
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