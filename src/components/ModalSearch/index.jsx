import React from 'react';

export function ModalSearch() {
  return (
    <Modal ref={modalSearchRef}>
      <ContainerFlex>
        <input
          type="search"
          ref={inputSearch}
          onChange={(ev) => {
            getByTitle(ev.target.value);
          }}
        />
        <ButtonIcon className="flex-center" onClick={closeModalSearchPost}>
          <BtnCloseModalSearch />
        </ButtonIcon>
      </ContainerFlex>
    </Modal>
  );
}
