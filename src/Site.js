import React, { useRef, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './style.css';
import styled from 'styled-components';
import { MdMenu, MdComputer, MdSearch } from 'react-icons/md';
import { AiOutlineArrowRight, AiOutlineArrowUp } from 'react-icons/ai';

const Header = styled.header`
  display: block;
  width: 100%;
  background-color: var(--primary-color);
  color: #fff;
  padding: 10px 0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  width: ${(props) => (props.width ? props.width : '95')}%;
`;

const LogoText = styled(Link)`
  cursor: pointer;  
  text-decoration: none;
  font-weight: bold;
  color: #fff;
  position: relative;
  padding-left: 30px;
  margin: 10px;
  font-size: calc(var(--size) + .1em);

  @media screen and (min-width: 768px){
    font-size: calc(var(--size) + .3em);
  }
  `;

const LogoIcon = styled(MdComputer)`
  position: absolute;
  left: 0px;
  top: 2px;
`;

const ButtonIcon = styled.div`
  border: 1px solid #fff;
  padding: 5px;
  font-size: var(--size);
  border-radius: 3px;
  cursor: pointer;
  margin: 0px 5px;
`;

const ContainerOptionNav = styled.div`
  display: flex;
  align-item: center;
  justify-content: right;
`;

const ModalNavBar = styled.div`
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

const ModalSearch = styled.div`
  background-color: var(--primary-color);
  padding: 10px 0;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;  
  height: ${(props) => props.height && props.height};
  transform: translateY(-100%);
  transition: all 200ms linear;

  input[type=text], input[type=search]{
    padding: 10px;
    display: block;
    outline: none;
    border-radius: 5px;
    border: none;
  }
`;

const BtnCloseModalSearch = styled(AiOutlineArrowUp)`
color: #fff;
font-size: var(--size);
`;

const ContainerFlex = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.flex ? props.flex : 'center')};
  
  @media screen and (min-width: 768px){
    max-width: 400px;
  }
`;

export default function Site() {
  const modalRef = useRef();
  const headerRef = useRef();
  const modalSearchRef = useRef();

  const openModalSearchPost = () => {
    modalSearchRef.current.style.transform = 'translateY(0%)';
  };
  const closeModalSearchPost = () => {
    modalSearchRef.current.style.transform = 'translateY(-100%)';
  };
  const openNavbar = () => {
    modalRef.current.style.transform = 'translateX(0%)';
  };

  const closeNavbar = () => {
    modalRef.current.style.transform = 'translateX(100%)';
  };

  const applyStyleModalSearch = () => {
    const height = headerRef.current.clientHeight;
    modalSearchRef.current.style.height = height + 'px';
  };

  useEffect(() => {
    applyStyleModalSearch();
  }, []);

  return (
    <>
      <Header ref={headerRef}>
        <Container className="flex-between">
          <LogoText>
            <LogoIcon /> HeiDevBlog
          </LogoText>
          <ContainerOptionNav>
            <ButtonIcon className="flex-center" onClick={openModalSearchPost}>
              <MdSearch />
            </ButtonIcon>
            <ButtonIcon className="flex-center" onClick={openNavbar}>
              <MdMenu />
            </ButtonIcon>
          </ContainerOptionNav>
        </Container>
      </Header>
      <ModalSearch ref={modalSearchRef}>
        <ContainerFlex>
          <input type="search" />
          <ButtonIcon className="flex-center" onClick={closeModalSearchPost}>
            <BtnCloseModalSearch />
          </ButtonIcon>
        </ContainerFlex>
      </ModalSearch>
      <ModalNavBar ref={modalRef}>
        <ButtonCloseModal onClick={closeNavbar}>
          <AiOutlineArrowRight />
        </ButtonCloseModal>
        <NavBar>
          <BoxHidden height="30px" />
          <LinkPage to="/" onClick={closeNavbar}>
            Home
          </LinkPage>
          <LinkPage to="login" onClick={closeNavbar}>
            login
          </LinkPage>
          <BoxHidden height="50px" />
        </NavBar>
      </ModalNavBar>
      {/* Body section */}
      <Outlet />
    </>
  );
}
