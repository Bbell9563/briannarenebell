import React, { useState } from "react";
import { Icon, Image, Menu, Button, Sidebar } from "semantic-ui-react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Layout = ({ children }) => {
  const [visible, setVisible] = useState(false);

  return (
    <Sidebar.Pushable as="div">
      <Sidebar
        className="dpl-blue"
        as={Menu}
        animation="overlay"
        icon="labeled"
        inverted
        onHide={() => setVisible(false)}
        vertical
        visible={visible}
        width="thin"
      >
        <Menu.Item as={Link} to="/" onClick={() => setVisible(false)}>
          Brianna Bell
        </Menu.Item>
        <Menu.Item as={Link} to='/portfolio' onClick={() => setVisible(false)} >
          Portfolio
          </Menu.Item>

        <Menu.Item as={Link} to='/resume' onClick={() => setVisible(false)}>
          Resume
        </Menu.Item>
        <Menu.Item as={Link} to='/contactform' onClick={() => setVisible(false)}>
          Contact Me
        </Menu.Item>
      </Sidebar>
      <Sidebar.Pusher>
        <HamburgerContainer>
          <Hamburger onClick={() => setVisible(true)}>
            <Icon name="sidebar" inverted size="large" />
          </Hamburger>
        </HamburgerContainer>
        <div>{children}</div>
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  );
};

const HamburgerContainer = styled.div`
  display: none !important;
  background-color: #0f111a;
  width: 100%;

  @media (max-width: 770px) {
    display: inline-block !important;
  }
`;

const Hamburger = styled(Button)`
background-color: #0f111a !important;
`;


export default Layout;
