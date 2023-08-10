import React from 'react';

export function ModalNavBar() {
  return (
    <Modal ref={modalRef}>
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
    </Modal>
  );
}
