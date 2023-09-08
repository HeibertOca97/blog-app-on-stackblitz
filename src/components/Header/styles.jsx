import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MdComputer } from 'react-icons/md';

export const HeaderStyled = styled.header`
  display: block;
  width: 100%;
  background-color: var(--primary-color);
  color: #fff;
  padding: 10px 0;
`;

export const LogoBox = styled(Link)`
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

export const LogoIcon = styled(MdComputer)`
  position: absolute;
  left: 0px;
  top: 2px;
`;

export const GroupActionIcon = styled.div`
  display: flex;
  align-item: center;
  justify-content: right;
`;

export const ButtonIcon = styled.div`
  border: 1px solid #fff;
  padding: 5px;
  font-size: var(--size);
  border-radius: 3px;
  cursor: pointer;
  margin: 0px 5px;
`;
