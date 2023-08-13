import React, { createContext, useRef } from 'react';

export const HeaderStateContext = createContext();

export default function HeaderStateProvider({ children }) {
  const modalSearchRef = useRef();
  const modalNavRef = useRef();
  const inputSearchRef = useRef();

  const toggleModalNav = (stateMode = true) => {
    if (stateMode) {
      modalNavRef.current.style.transform = 'translateX(0%)';
      modalNavRef.current.style.overflow = 'auto';
      document.body.style.overflow = 'hidden';
    } else {
      modalNavRef.current.style.transform = 'translateX(100%)';
      document.body.style.overflow = 'auto';
    }
  };

  const toggleModalSearch = (stateMode = true) => {
    if (stateMode) {
      modalSearchRef.current.style.transform = 'translateY(0%)';
      modalSearchRef.current.style.overflow = 'auto';
      inputSearchRef.current.focus();
      document.body.style.overflow = 'hidden';
    } else {
      modalSearchRef.current.style.transform = 'translateY(-100%)';
      document.body.style.overflow = 'auto';
      inputSearchRef.current.value = '';
    }
  };

  return (
    <HeaderStateContext.Provider
      value={{
        inputSearchRef,
        modalSearchRef,
        modalNavRef,
        toggleModalNav,
        toggleModalSearch,
      }}
    >
      {children}
    </HeaderStateContext.Provider>
  );
}
