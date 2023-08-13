import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from '../glob';
import { AiOutlineArrowUp } from 'react-icons/ai';
import { HeaderStateContext } from '../../hooks/HeaderStateProvider';
import { PostContext } from '../../hooks/PostSearchProvider';

const ButtonIcon = styled.div`
  border: 1px solid #fff;
  padding: 5px;
  font-size: var(--size);
  border-radius: 3px;
  cursor: pointer;
  margin: 0px 5px;
`;

const Modal = styled.div`
  background-color: var(--primary-color);
  padding: 10px 0;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  transform: translateY(-100%);
  transition: all 200ms linear;

  input[type=text], input[type=search]{
    padding: 10px;
    width: 100%;
    max-width: 450px;
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
`;

const CardListLink = styled.div`
  margin: 15px auto;
  max-width: 600px;
  padding: 10px;
  border: 10x solid blue;
  color: #fff;
`;

const LinkGroup = styled(Link)`
  text-decoration: none;
  color: #fff;
  width: 100%;
  display:block;
  padding: 10px;
  margin: 10px auto;
  box-shadow: 0px 5px 10px #bbb;
  border-radius: 8px;
`;

export function ModalSearch() {
  const { toggleModalSearch, modalSearchRef, inputSearchRef } =
    useContext(HeaderStateContext);
  const { getByTitle, found_post, getAll } = useContext(PostContext);

  const showData = () => {
    if (found_post == null || inputSearchRef.current.value.length == 0) {
      return <p>What do you want to see?</p>;
    }

    if (found_post.length == 0) {
      return <p>Article no found</p>;
    }
    return found_post.map((post) => (
      <LinkGroup
        to={`/post/${post.id}`}
        onClick={() => {
          toggleModalSearch(false);
          getByTitle('');
        }}
        key={post.id}
      >
        {post.title}
      </LinkGroup>
    ));
  };

  useEffect(() => {
    getAll();
  }, []);

  return (
    <Modal ref={modalSearchRef}>
      <ContainerFlex>
        <input
          type="search"
          ref={inputSearchRef}
          onChange={(ev) => {
            getByTitle(ev.target.value);
          }}
        />
        <ButtonIcon
          className="flex-center"
          onClick={() => {
            toggleModalSearch(false);
            getByTitle(inputSearchRef.current.value);
          }}
        >
          <BtnCloseModalSearch />
        </ButtonIcon>
      </ContainerFlex>
      <Container>
        <CardListLink>{showData()}</CardListLink>
      </Container>
    </Modal>
  );
}
