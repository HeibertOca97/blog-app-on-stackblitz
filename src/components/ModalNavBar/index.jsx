import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
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
`;

const ButtonCloseModal = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;
  border: none;
  background-color: transparent;
  color: #fff;
  font-size: var(--size);
`;

const BoxHidden = styled.div`
  height: ${(props) => (props.height ? props.height : '0')};
`;

export function ModalNavBar() {
  const { modalNavRef, toggleModalNav } = useContext(HeaderStateContext);
  return (
    <Modal ref={modalNavRef}>
      <ButtonCloseModal onClick={() => toggleModalNav(false)}>
        <AiOutlineArrowRight />
      </ButtonCloseModal>
      <NavBar>
        <BoxHidden height="30px" />
        <LinkPage to="/" onClick={() => toggleModalNav(false)}>
          Home
        </LinkPage>
        <LinkPage to="login" onClick={() => toggleModalNav(false)}>
          login
        </LinkPage>
        <BoxHidden height="50px" />
      </NavBar>
    </Modal>
  );
}
