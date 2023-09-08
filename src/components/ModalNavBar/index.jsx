import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { HeaderStateContext } from '../../hooks/HeaderStateProvider';
import styled from 'styled-components';

const Modal = styled.div`
  width: 100%;
  height:  100vh;
  z-index: 99;
  position: fixed;
  top: 0;
  left: 0;  
  transition: all 200ms linear;
  transform: translateX(100%);
  font-size: calc(var(--size) + .3em);
  `;

const NavBar = styled.nav`
  display:  block;
  width: 100%;
  height: 100%;
  background-color: var(--primary-color);
  overflow: scroll;
  
  @media screen and (min-width:  768px){
    max-width: 365px;
  }
`;

const LinkPage = styled(Link)`
  display: block;
  width: 100%;
  padding: 10px 0px;
  text-decoration none;
  color: #fff;
  margin-bottom: 5px;
  text-align: center;
  transition: all 300ms linear;

  &:hover{
    text-decoration: line-through;
  }
`;

const ButtonCloseModal = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;
  border: none;
  background-color: transparent;
  color: #fff;
  font-size: calc(var(--size) + .3em);
`;

const BoxHidden = styled.div`
  height: ${(props) => (props.height ? props.height : '0')};
`;

export function ModalNavBar() {
  const { modalNavRef, toggleModalNav } = useContext(HeaderStateContext);
  const { pathname } = useLocation();
  const isActive = (strPathname) => ({
    textDecoration: `${
      pathname.split('/')[1] == strPathname ? 'line-through' : 'none'
    }`,
  });

  return (
    <Modal ref={modalNavRef}>
      <ButtonCloseModal onClick={() => toggleModalNav(false)}>
        <AiOutlineArrowRight />
      </ButtonCloseModal>
      <NavBar>
        <BoxHidden height="70px" />
        <LinkPage
          to="/"
          onClick={() => toggleModalNav(false)}
          style={isActive('')}
        >
          Home
        </LinkPage>
        <LinkPage
          to="post"
          onClick={() => toggleModalNav(false)}
          style={isActive('post')}
        >
          Post
        </LinkPage>
        <LinkPage
          to="login"
          onClick={() => toggleModalNav(false)}
          style={isActive('login')}
        >
          login
        </LinkPage>
        <BoxHidden height="50px" />
      </NavBar>
    </Modal>
  );
}
