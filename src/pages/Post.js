import React, { useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { PostContext } from '../hooks/PostSearchProvider';

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 10px;
`;

const CardItem = styled.div`
  padding: 10px;
  border-radius: 3px;
  box-shadow: 0px 0px 8px #ccc;
  width: 90%;
  background-color: #fff;
  margin: 10px;
  transition: all 250ms linear;

  &:hover{
    transform: scale(1.1);
    box-shadow: 0px 0px 0px transparent;
  }

  & > picture{
    display: block;
    overflow: hidden;
    border-radius: 3px;
    height: 200px;
  }

  & > picture > img{
    width: 100%;
    height: 100%;
    display: block;
  }

  & > picture > img{
    object-fit: cover;
  }

  & > h3, & > p{
    margin: 8px auto 8px auto;
  }

  & > p{
    color: var(--p-color);
  }

  & > div{
    padding: 10px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  & > div button{
    display: block;
    border: none;
    padding: 10px;
    color: #fff;
    background-color: var(--primary-color);
    font-weight: bold;
    box-shadow: 4px 4px 0px 2px var(--alt-color);
    transition: all 250ms ease-in;
    border-radius: 2px;
  }

  & > div button:hover{
    box-shadow: 0px 0px 0px 0px       transparent;
    background-color: var(--alt-color);
  }

  & > div > p{
    color: var(--p-color);
    font-weight: bold;
    font-size: calc(var(--size) - .2em);
  }

`;

export default function Post() {
  const params = useParams();
  const navigate = useNavigate();
  const { getAll, posts } = useContext(PostContext);
  const limit_character_t = 75;
  const limit_character_d = 80;

  const getOnlyDateFormat = (strDateTime) => {
    const getTwoNumber = (n) => (n < 10 ? `0${n}` : n);

    const datetime = new Date(strDateTime);

    const day = getTwoNumber(datetime.getDay()),
      month = getTwoNumber(datetime.getMonth()),
      year = getTwoNumber(datetime.getFullYear());

    return `${day}/${month}/${year}`;
  };

  useEffect(() => {
    let loaded = false;
    if (!loaded) {
      getAll();
      loaded = true;
    }
  }, []);

  return (
    <>
      <Wrapper>
        {posts.map((post) => (
          <CardItem key={post.id}>
            <picture>
              <img src={post.picture} alt={post.title} loading="lazy" />
            </picture>
            <h3>
              {post.title.substr(0, limit_character_t)}
              {post.title.length > limit_character_t ? '...' : ''}
            </h3>
            <p>{post.body.substr(0, limit_character_d)}...</p>
            <div className="box_flex">
              <button
                onClick={() => {
                  navigate(`/post/${post.id}`);
                }}
              >
                READ MORE
              </button>
              <p>{getOnlyDateFormat(post.createdAt)}</p>
            </div>
          </CardItem>
        ))}
      </Wrapper>
    </>
  );
}
