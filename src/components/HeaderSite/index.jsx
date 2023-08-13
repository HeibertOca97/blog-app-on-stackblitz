import React from 'react';
import HeaderStateProvider from '../../hooks/HeaderStateProvider';
import { Header } from '../Header';
import { ModalSearch } from '../ModalSearch';
import { ModalNavBar } from '../ModalNavBar';

export function HeaderSite() {
  return (
    <HeaderStateProvider>
      <Header />
      <ModalSearch />
      <ModalNavBar />
    </HeaderStateProvider>
  );
}
