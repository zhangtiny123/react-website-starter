import React, { useState } from 'react';
import './index.css';
import { Navbar, NavbarBrand, NavbarItem, NavbarBurger, NavbarMenu, NavbarStart, NavbarEnd } from 'bloomer';

/*
  props: {
    appName: 'String',
    theme: 'String', // dark, light or others implemented
    currentNav: 'String',
    links: [
      {
        href: 'path String',
        label: 'String',
        navName: 'String'
      }
    ]
  }
*/

export default (props) => {
  let [isActive, setIsActive] = useState(false);

  const onClickNav = () => {
    setIsActive(!isActive);
  }

  return (
    <div className={`nav-section ${props.theme}`}>
      <div style={{position: 'relative'}}>
        <Navbar className={`nav-component ${props.theme}`}>
          <NavbarBrand>
              <NavbarItem>
                  <span theme={props.theme}>{props.appName}</span>
              </NavbarItem>
              <NavbarBurger className={`customized-burger ${props.theme}`} isActive={isActive} onClick={onClickNav} />
          </NavbarBrand>
          <NavbarMenu className={`${props.theme}`} isActive={isActive} onClick={onClickNav}>
              <NavbarStart></NavbarStart>
              <NavbarEnd>
                {
                  props.links ?
                  props.links.map((l, index) => {
                    return (
                      <a key={index} className={`nav-link ${props.currentNav === l.navName ? 'active' : ''} ${props.theme}`} href={l.href}>{l.label}</a>
                    )
                  }) : null
                }
              </NavbarEnd>
          </NavbarMenu>
        </Navbar>
      </div>
    </div>
  )
}
