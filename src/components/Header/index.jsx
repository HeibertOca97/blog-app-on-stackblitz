import React from 'react';
import {
  HeaderStyled,
  LogoBox,
  LogoIcon,
  ButtonIcon,
  GroupActionIcon,
} from './index_styles';
import { Container } from '../glob';
import { MdSearch, MdMenu } from 'react-icons/md';

export function Header() {
  const openModalSearchPost = () => {
    console.log('Show Modal Search');
  };

  const openNavbar = () => {
    console.log('Show Navbar');
  };

  return (
    <HeaderStyled>
      <Container className="flex-between">
        <LogoBox>
          <LogoIcon /> HeiDevBlog
        </LogoBox>

        <GroupActionIcon>
          <ButtonIcon className="flex-center" onClick={openModalSearchPost}>
            <MdSearch />
          </ButtonIcon>
          <ButtonIcon className="flex-center" onClick={openNavbar}>
            <MdMenu />
          </ButtonIcon>
        </GroupActionIcon>
      </Container>
    </HeaderStyled>
  );
}
