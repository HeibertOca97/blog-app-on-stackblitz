import React, { useContext } from 'react';
import {
  HeaderStyled,
  LogoBox,
  LogoIcon,
  ButtonIcon,
  GroupActionIcon,
} from './styles';
import { Container } from '../glob';
import { MdSearch, MdMenu } from 'react-icons/md';
import { HeaderStateContext } from '../../hooks/HeaderStateProvider';

export function Header() {
  const { toggleModalSearch, toggleModalNav } = useContext(HeaderStateContext);

  return (
    <HeaderStyled>
      <Container className="flex-between">
        <LogoBox>
          <LogoIcon /> HeiDevBlog
        </LogoBox>

        <GroupActionIcon>
          <ButtonIcon className="flex-center" onClick={toggleModalSearch}>
            <MdSearch />
          </ButtonIcon>
          <ButtonIcon className="flex-center" onClick={toggleModalNav}>
            <MdMenu />
          </ButtonIcon>
        </GroupActionIcon>
      </Container>
    </HeaderStyled>
  );
}
