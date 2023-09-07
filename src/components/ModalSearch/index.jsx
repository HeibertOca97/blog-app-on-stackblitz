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
  cursor: pointer;
  text-decoration: none;
  color: #fff;
  width: 100%;
  display: block;
  padding: 10px;
  margin: 10px auto;
  background-color: var(--alt-color);
  box-shadow: 0px 2px 10px #3CE9A3;
  border-radius: 5px;

  div{
    display: flex;
    align-item: center;

    picture{
      width: 27.5%;
      margin-right: 2.5%;
      height: 80px;
      overflow: hidden;
      display: block;
      border-radius: 5px;

      img{
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    p{
      width: 70%;
    }
  }
`;

export function ModalSearch() {
  const { toggleModalSearch, modalSearchRef, inputSearchRef } =
    useContext(HeaderStateContext);
  const { getByTitle, found_post, getAll } = useContext(PostContext);

  const showListData = () => {
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
        <div>
          <picture>
            <img src={post.picture} title={post.title} alt={post.title} />
          </picture>
          <p>
            {post.title.length < 76
              ? post.title
              : post.title.substr(0, 75) + '...'}
          </p>
        </div>
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
        <CardListLink>{showListData()}</CardListLink>
      </Container>
    </Modal>
  );
}
